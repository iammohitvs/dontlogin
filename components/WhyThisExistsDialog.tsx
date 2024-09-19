import React from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
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
                        me to share a file I had been working on to our google
                        classroom, and that meant I had to log into my google
                        account on a university computer. I take my privacy
                        seriously, and so I typically dont login using such
                        accounts on random computers. Even if I wanted to share
                        it with my phone, I would have to open WhatsApp web or
                        any other service with a login. So the idea came to me
                        to build an anonymous sharing platform, where you can
                        share you files and retreive them without any
                        authentication needed. Seamless, and hassle-free! 😃
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
