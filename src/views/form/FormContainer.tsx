import { Input } from "./components/Input";

export const FormContainer = () => {
    return (
        <div
            className="flex flex-wrap justify-between p-5 max-w-[1200px] mt-5 mb-5"
        >
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
        </div>
    );
};