import { Logo } from "../components/Logo";
import { useNavigate } from "react-router-dom";

export const Help = () => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/home');
    };

    return (
        <div className="p-8">
            <div className="text-center mb-8">
                <Logo />
                <h1 className="text-3xl font-bold mt-4">Welcome to SiteSentry Help</h1>
                <p className="text-lg mt-2">Your guide to using SiteSentry effectively</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">1. Registering a URL</h2>
                    <p className="mt-4">To register a URL for monitoring, follow these steps:</p>
                    <ol className="list-decimal list-inside mt-2">
                        <li>Go to the "Register URL" page from the dashboard.</li>
                        <li>Enter the URL you want to monitor.</li>
                        <li>Click the "Register" button to save the URL.</li>
                    </ol>
                    <p className="mt-4">You can use the following endpoint to register a URL directly:</p>
                    <code className="block bg-gray-200 p-2 rounded mt-2">GET http://localhost:3000/api/v1/url/register?url=YOUR_URL</code>
                    <p className="mt-2">Replace <code>YOUR_URL</code> with the actual URL you want to monitor.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">2. Monitoring Your URLs</h2>
                    <p className="mt-4">Once you've registered a URL, SiteSentry will automatically start monitoring it. You can view the status of your URLs on your dashboard. If a URL goes down, you'll receive an email notification.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">3. Getting URL Status (Backend)</h2>
                    <p className="mt-4">To allow backend systems to get the status of registered URLs, you can use the following endpoint for example:</p>
                    <code className="block bg-gray-200 p-2 rounded mt-2">GET http://localhost:3000/api/v1/url/status</code>
                    <p className="mt-2">This route provides the status of all registered URLs without requiring any authentication or middleware. It is designed to be hit by backend systems for automated status checks.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">4. Understanding Email Notifications</h2>
                    <p className="mt-4">Whenever one of your registered URLs goes down, SiteSentry will send you an email notification with the following details:</p>
                    <ul className="list-disc list-inside mt-2">
                        <li>The ID of the URL</li>
                        <li>The URL itself</li>
                        <li>A message indicating that the URL appears to be down</li>
                    </ul>
                    <p className="mt-4">Please note that this email is generated when the site is detected as down. Check your SiteSentry dashboard for real-time updates, as the status might have changed by the time you see the email.</p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">5. Contact Support</h2>
                    <p className="mt-4">If you need any assistance or have any questions, feel free to reach out to our support team at <a href="mailto:vikkymsd777@gmail.com" className="text-blue-500">vikkymsd777@gmail.com</a>.</p>
                </section>

                <div onClick={handleNavigateHome} className="cursor-pointer text-center mt-8">
                    <div className="inline-block bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700">
                        Go to Home
                    </div>
                </div>
            </div>
        </div>
    );
};
