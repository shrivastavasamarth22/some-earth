"use client";

import "@/shared/styles/input";

import { AlertDialog } from "@/shared/components/alerts/alert-dialog";
import { AlertEnum } from "@/shared/components/alerts/types";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right";
import CardTitle from "@/shared/components/titles/card-title";
import LinksGridCard from "../cards/links/links-grid";
import MailIcon from "@/assets/icons/mail";
import cardStyle from "@/shared/styles/card";
import inputStyle from "@/shared/styles/input";
import { useAlert } from "@/shared/components/alerts/alert-hook";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useLoadingButton } from "@/shared/hooks/loading-button-hook";
import { useState } from "react";

const getTextById = (id: string) => {
    try {
        const element = document.getElementById(id) as HTMLInputElement;
        return element.value;
    } catch {}
};

export default function Contact() {
    function TextInput(props: any) {
        const inputProps = Object.assign({}, props);
        delete inputProps.isTextArea;
        delete inputProps.label;
        return (
            <div className="input-container relative w-full">
                {props.isTextArea ? (
                    <textarea {...inputProps} className={inputStyle} />
                ) : (
                    <input {...inputProps} className={inputStyle} />
                )}
                <label
                    className={
                        "input-label absolute pointer-events-none text-xs top-[-10px] left-3 border-0 bg-white dark:bg-dark w-fit px-0.5 rounded-md"
                    }
                >
                    {props.label}
                </label>
            </div>
        );
    }

    return (
        <>
            <div className="flex flex-col">
                <form onSubmit={() => {}} className={cardStyle + " gap-7"}>
                    <CardTitle title="CONTACT" icon={<MailIcon />} />
                    <p className="text-md pb-1">
                        <a className="opacity-70">
                            Contact me by filling out the form below, or by
                            sending to{" "}
                        </a>
                        <a
                            className="hover:underline font-medium opacity-70 dark:!opacity-80"
                            href={"mailto:" + "shrivastavasamarth22@gmail.com"}
                        >
                            shrivastavasamarth22@gmail.com
                        </a>
                    </p>
                    <TextInput
                        required
                        id="name"
                        type="text"
                        label="Name"
                        placeholder="Enter your name"
                    />
                    <TextInput
                        required
                        id="email"
                        type="email"
                        label="Email"
                        placeholder="Enter your email address"
                    />
                    <TextInput
                        required
                        isTextArea
                        id="message"
                        minLength={5}
                        maxLength={10000}
                        rows={3}
                        label="Message"
                        placeholder="Write your message here..."
                    />
                </form>
                <div className="py-3" />
                <LinksGridCard />
            </div>
        </>
    );
}
