import GoogleSchedulerButton from "@/components/google-scheduler";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="flex flex-col gap-2 justify-center items-center w-full h-[80vh]">
      <p className="text-xl text-pretty mx-auto">
        Starting a career in tech as a software engineer is an exciting choice
        for me because it allows me to channel my passion for problem-solving
        into creating impactful, innovative solutions. Technology is a dynamic
        field with endless opportunities for growth and learning, and it’s
        rewarding to be part of an industry that shapes how we interact, work,
        and live. I’m motivated by the chance to build meaningful, efficient
        applications that address real-world needs and to continuously improve
        my skills in a field that’s always evolving. Tech offers a creative
        outlet that challenges me intellectually and aligns with my ambition to
        make a positive impact through software.
      </p>
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
