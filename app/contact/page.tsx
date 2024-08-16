import GoogleSchedulerButton from "@/components/google-scheduler";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-2 justify-center items-center w-full h-[80vh]">
      <h1 className="text-4xl text-pretty mx-auto text-secondary-foreground">
        You want to contact me ?
      </h1>
      <p className="text-xl text-pretty mx-auto">
        You can schedule a 30 min introduction call
      </p>
      <GoogleSchedulerButton />
      <p className="text-xl text-pretty mx-auto">Or via</p>
      <div className="flex gap-2">
        <Button
          className="w-fit border-secondary-foreground text-secondary-foreground dark:border-secondary dark:text-secondary"
          variant="outline"
        >
          <Mail className="mr-2" />
          <Link href="mailto:mednaceur.elmabrouk@gmail.com" target="_blank">
            Email
          </Link>
        </Button>

        <Button className="w-fit bg-secondary-foreground dark:bg-secondary">
          <Phone className="mr-2" />
          <Link href="tel:+4917661498284" target="_blank">
            Phone / WhatsApp
          </Link>
        </Button>
      </div>
    </section>
  );
}
