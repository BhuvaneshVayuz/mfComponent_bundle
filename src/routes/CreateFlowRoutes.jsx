import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import BasicDetailsForm from '../components/BasicDetailsForm';
import FurtherDetailsForm from '../components/FurtherDetailsForm';

const CreateLayout = () => (
    <div className="p-6 border rounded">
        <h2 className="text-xl font-bold mb-4">🏗️ Create Flow</h2>
        <Outlet />
    </div>
);

const CreateFlowRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<CreateLayout />}>
                <Route path="basic-details" element={<BasicDetailsForm />} />
                <Route path="further-details" element={<FurtherDetailsForm />} />
                <Route index element={<Navigate to="basic-details" replace />} />
            </Route>
        </Routes>
    );
};

export default CreateFlowRoutes;
