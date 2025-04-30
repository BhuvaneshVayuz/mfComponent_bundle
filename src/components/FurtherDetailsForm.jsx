import { Link } from "react-router-dom";

const FurtherDetailsForm = () => {
    return <>
        <div className="p-4">📋 Further Details Form
            <Link to={'/basic-details'} className="px-4 py-3 bg-blue-800 text-white" >previous </Link>
        </div>
    </>
};

export default FurtherDetailsForm;
