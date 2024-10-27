"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: (data: any) => void;
    loading: boolean;
}

interface FormData {
    [key: string]: string | string[] | number;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {

    const [formData, setFormData] = useState<FormData>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = event.target as HTMLInputElement;

        if (type === 'checkbox') {
            setFormData(prevState => {
                const updatedValues = prevState[name] ? [...(prevState[name] as string[])] : [];
                if (checked) {
                    updatedValues.push(value);
                } else {
                    const index = updatedValues.indexOf(value);
                    if (index > -1) {
                        updatedValues.splice(index, 1);
                    }
                }
                return { ...prevState, [name]: updatedValues };
            });
        } else if (type === 'number') {
            setFormData({ ...formData, [name]: Number(value) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        userFormInput(formData);
    }

    return (
        <div className='p-6 shadow-lg border rounded-lg bg-white'>
            {/* @ts-ignore */}
            <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70} />
            <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

            <div className='form-container max-h-[500px] overflow-y-auto pr-4'>
                <form className='mt-6' onSubmit={onSubmit}>
                    {selectedTemplate?.form?.map((item, index) => (
                        <div className='my-2 flex flex-col gap-2 mb-7' key={index}>
                            <label className='font-bold'>{item.label}</label>

                            {item.field === 'input' ? (
                                <Input 
                                    name={item.name} 
                                    required={item.required} 
                                    onChange={handleInputChange} 
                                    className='focus:border-2 focus:border-black focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-black'
                                />
                            ) : item.field === 'textarea' ? (
                                <Textarea 
                                    name={item.name} 
                                    required={item.required} 
                                    onChange={handleInputChange} 
                                    className='focus:border-2 focus:border-black focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-black'
                                />
                            ) : item.field === 'dropdown' || item.field === 'select' ? (
                                <select 
                                    name={item.name} 
                                    required={item.required} 
                                    onChange={handleInputChange} 
                                    className='border p-2 rounded focus:border-2 focus:border-black focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-black'
                                >
                                    {item.options?.map((option: string, i: number) => (
                                        <option key={i} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            ) : item.field === 'checkbox' ? (
                                <div className='flex flex-wrap gap-2'>
                                    {item.options?.map((option: string, i: number) => (
                                        <label key={i} className='flex items-center'>
                                            <input 
                                                type='checkbox' 
                                                name={item.name} 
                                                value={option} 
                                                checked={(formData[item.name] as string[])?.includes(option)} 
                                                onChange={handleInputChange} 
                                                className='mr-2 focus:border-2 focus:border-black focus:outline-none focus:ring-2 focus:ring-black'
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            ) : item.field === 'number' ? (
                                <Input 
                                    type='number'
                                    name={item.name} 
                                    required={item.required} 
                                    onChange={handleInputChange} 
                                    className='focus:border-2 focus:border-black focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-black'
                                />
                            ) : null}
                        </div>
                    ))}

                    <Button type='submit' className='w-full py-6' disabled={loading}>
                        {loading && <Loader2Icon className='animate-spin' />}
                        Generate Content
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default FormSection;
