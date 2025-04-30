import { useNavigate } from "react-router-dom";

const BasicDetailsForm = () => {

    const navigate = useNavigate()
    return <>
        <div className="p-4">📋 Basic Details Form
            <button className="px-2 py-1 bg-blue-800 text-white" onClick={() => navigate('/further-details')}>next page</button>
        </div>
    </>
};

export default BasicDetailsForm;
