import React from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const WhyThisExistsDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Why this exists?</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription className="text-md p-3">
                        I was at college when my computer science teacher asked
                        me to upload a file I had been working onto google
                        classroom, and that meant I had to log into my google
                        account on a university computer. I take my privacy
                        seriously, and so I typically don&apos;t login using such
                        accounts on random computers! Even if I wanted to share
                        it to my phone, I would have to open WhatsApp Web or
                        any other service with auth. <br /> Hence the idea, 
                        to build a file sharing platform, that functions
                        without any authentication. 
                        <br /> Seamless, and hassle-free! 😃
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default WhyThisExistsDialog;
