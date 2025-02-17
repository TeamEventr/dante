import { useAuthStore } from "@/utils/Store";
import { useState, useRef, ChangeEvent, KeyboardEvent, ClipboardEvent } from "react";
import Icon from "./icon-wrapper";

export default function InputOTP() {
    
    const inputsRef = useRef<HTMLInputElement[]>([]);
    const [values, setValues] = useState<string[]>(Array(6).fill(""));
    const loading = useAuthStore(state => state.loading);
    const verifyOTP = useAuthStore(state => state.verifyOTP);
    
    
    const handleInputChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValues(prevValues => {
            const newValues = [...prevValues];
            newValues[index] = newValue;
            return newValues;
        });

        if (/^\d$/.test(newValue) && index < inputsRef.current.length - 1) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (index: number) => (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && index > 0 && !values[index]) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handlePaste = (index: number) => (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(`Pasting at index: ${index}`);
        const pasteData = e.clipboardData.getData("text");
        if (/^\d{6}$/.test(pasteData)) {
            const newValues = pasteData.split("");
            setValues(newValues);
            inputsRef.current.forEach((input, i) => {
                if (input) {
                input.value = newValues[i];
                }
            });
            inputsRef.current[5].focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const otp = values.join("");
        try {
            await verifyOTP({ otp });
        } catch (error) {
            setValues(Array(6).fill(""));
            inputsRef.current[0].focus();
        }
    }
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex gap-4 justify-center">
            {values.map((value, index) => (
                <input
                key={index}
                type="text"
                className="w-8 text-lg text-center p-1.5 bg-transparent border-b border-eventr-gray-500 outline-none"
                maxLength={1}
                value={value}
                onChange={handleInputChange(index)}
                onKeyDown={handleKeyDown(index)}
                onPaste={handlePaste(index)}
                ref={ref => {
                    inputsRef.current[index] = ref as HTMLInputElement;
                }}
                />
            ))}
            </div>
            <button disabled={loading} type="submit" className="bg-eventr-gray-800 flex items-center justify-center font-semibold text-white rounded-lg px-6 py-3">
                {loading ? <Icon icon='progress_activity' spin/> : "Verify"}</button>
        </form>
    )
}