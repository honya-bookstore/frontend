'use client';

import {Input} from "postcss";
import ShortField from "@/components/Input Field/ShortField";
import {useState} from "react";
import Button from "@/components/Button";


// TODO: Remember to add charLimit to and validation for all fields

export default function ShippingInformation() {
    const [email, setEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [city, setCity] = useState<string>('');
    return (
        <section className={'w-full flex flex-col items-start gap-6 bg-white px-[15px] py-[25px] rounded-lg'}>
            <h4 className={'text-[26px] font-prata'}>Shipping Information</h4>
            <form className={'w-full flex flex-col items-start gap-2'}>
                <ShortField
                    id={'email'}
                    label={'Email Address'}
                    onValueChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type={'email'}
                    placeholder={'Enter your email address'}
                    className={'w-full p-3 text-[18px]'}/>
                <div className={'w-full flex items-start justify-between gap-4'}>
                    <ShortField
                        id={'first-name'}
                        label={'First Name'}
                        onValueChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                        type={'text'}
                        placeholder={'Enter your first name'}
                        className={'w-full p-3 text-[18px]'}/>
                    <ShortField
                        id={'last-name'}
                        label={'Last Name'}
                        onValueChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        type={'text'}
                        placeholder={'Enter your last name'}
                        className={'w-full p-3 text-[18px]'}/>
                </div>
                <ShortField
                    id={'address'}
                    label={'Address'}
                    onValueChange={(e) => setAddress(e.target.value)}
                    value={address}
                    type={'text'}
                    placeholder={'Enter your shipping address'}
                    className={'w-full p-3 text-[18px]'}/>
                <div className={'w-full flex items-start justify-between gap-4'}>
                    <ShortField
                        id={'phone'}
                        label={'Phone Number'}
                        onValueChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type={'tel'}
                        placeholder={'Enter your phone number'}
                        className={'w-full p-3 text-[18px]'}/>
                    <ShortField
                        id={'city'}
                        label={'City'}
                        onValueChange={(e) => setCity(e.target.value)}
                        value={city}
                        type={'text'}
                        placeholder={'Enter your city'}
                        className={'w-full p-3 text-[18px]'}/>
                </div>
                <div className={'w-full flex items-start justify-between gap-4 mt-4'}>
                    <Button
                        shape={'rect'}
                        variant={'outline'}
                        className={'text-black hover:bg-gray-700 font-plus-jakarta-sans font-light text-[18px] mt-4 w-full py-4'}>
                        Back
                    </Button>
                    <Button
                        shape={'rect'}
                        variant={'solid'}
                        className={'bg-black text-white hover:bg-gray-700 font-plus-jakarta-sans font-light text-[18px] mt-4 w-full py-4'}>
                        Proceed to Payment
                    </Button>
                </div>
            </form>
        </section>
    )
}