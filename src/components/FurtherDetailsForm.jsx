import { Link } from "react-router-dom";

const FurtherDetailsForm = () => {
    return (
        <>
            <div className="p-4 space-y-4">
                <h1 className="text-2xl font-bold">📋 Further Details</h1>
                <p>
                    In this section, you’ll provide more in-depth details that help refine your profile and personalize your journey with us.
                </p>
                <p>
                    These details may include your preferences, background, and specific requirements you’d like us to know.
                </p>
                <ol className="list-decimal list-inside">
                    <li>Describe your goals and expectations.</li>
                    <li>Let us know any additional info that may be helpful.</li>
                    <li>This data enhances your overall user experience.</li>
                </ol>
                <p>
                    You can go back to the previous section at any time to review your basic information.
                </p>
                <Link
                    to={'/basic-details'}
                    className="px-4 py-2 bg-blue-800 text-white inline-block"
                >
                    Previous Page
                </Link>
            </div>
        </>
    );
};

export default FurtherDetailsForm;
