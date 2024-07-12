import { PrismaClient } from '@prisma/client';
import { urlArr } from '../types/userDetails';
import axios from "axios";
import { sendEmail } from './gmailClient';
const prisma = new PrismaClient();

export const coreEngine = () => {
    setInterval(async () => {
        try {

            let urlArr = await prisma.urls.findMany({});
            await findErr(urlArr);
        }
        catch (err) {
            console.log("the error is: ");
            console.log(err);

        }
    }, 30000);
};

const findErr = async (arr: urlArr[]) => {
    for (let i: number = 0; i < arr.length; i++) {
        try {
            let result = await axios.get(arr[i].url);
            await prisma.urls.update({
                where: {
                    id: arr[i].id
                },
                data: {
                    active: true
                }
            });
        }
        catch (err: any) {
            await recheck(arr[i]);

        }
    }
};

const recheck = async (obj: urlArr) => {
    if (!obj.active) {
        return;
    }
    try {
        let result = await axios.get(obj.url);
        await prisma.urls.update({
            where: {
                id: obj.id
            },
            data: {
                active: true
            }
        });

    }
    catch (err: any) {
        console.log("error at url ", obj.url, " ", obj.id);
        let emailid: any = await prisma.user.findUnique({
            where: {
                id: obj.userid
            }
        });
        const subject = `Website Down Alert: ${obj.url}`;
        const message = `<p>Hello ${emailid.firstName},</p>
    
    <p>The website with ID <strong>${obj.id}</strong> and URL <a href="${obj.url}">${obj.url}</a> appears to be down. Please check the website for more details.</p>
    
    <p>For real-time updates, visit the SiteSentry website and log in to your dashboard.</p>
    
    <p><strong>Note:</strong> This email is generated when the site is down. By the time you receive this email, the site might be back up. Please refer to your SiteSentry dashboard for live details.</p>
    
    <p>Regards,<br>- Team SiteSentry</p>
`;

        await sendEmail(emailid?.email, subject, message);
        await prisma.urls.update({
            where: {
                id: obj.id
            },
            data: {
                active: false
            }
        });

    }
}
