import { useNavigate } from "react-router-dom";

const BasicDetailsForm = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="p-4 space-y-4">
                <h1 className="text-2xl font-bold">📋 Basic Details Overview</h1>
                <p>
                    Welcome to the basic details section. This is where we introduce the primary information required for your profile creation.
                    You'll find insights on how this data helps personalize your experience.
                </p>
                <ul className="list-disc list-inside">
                    <li>Get started with your name and contact details.</li>
                    <li>This data is used to verify and set up your initial profile.</li>
                    <li>No sensitive data is stored without your permission.</li>
                </ul>
                <p>
                    Continue to the next step to provide further information about your background and preferences.
                </p>
                <button
                    className="px-2 py-1 bg-blue-800 text-white"
                    onClick={() => navigate('/further-details')}
                >
                    Next Page
                </button>
            </div>
        </>
    );
};

export default BasicDetailsForm;
