import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Header from "../ui/Header";
import Section from "../ui/Section";
import Card from "../ui/Card";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/Field";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Textarea } from "../ui/TextArea";

import { CONTACTS } from "@/static/data/Contacts";
import {
  contactSchema,
  type ContactValues,
} from "@/static/schema/contact.schema";

const Contact = () => {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactValues) => {
    console.log(data);
  };

  return (
    <Section
      id="hero"
      className="gap-y-16 xl:px-36 bg-foreground text-background"
    >
      <Header
        className="text-background [&_svg]:fill-background"
        title="Get in touch"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ul className="grid grid-cols-2 gap-8">
          {CONTACTS.map((contact) => (
            <li key={contact.id} className="flex flex-col gap-y-2">
              <contact.icon className="size-6" />
              <div>
                <h4 className="font-semibold">{contact.name}</h4>
                <p className="text-sm text-background/75">
                  {contact.description}
                </p>
              </div>

              <p className="text-sm font-semibold">{contact.value}</p>
            </li>
          ))}
        </ul>

        <Card className="p-8 text-foreground">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <h2 className="text-3xl font-extrabold text-foreground">
                Let's talk
              </h2>

              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="name" className="text-foreground/75">
                      Name *
                    </FieldLabel>
                    <Input
                      {...field}
                      id="name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Your name ..."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email" className="text-foreground/75">
                      Email *
                    </FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Your email ..."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="subject"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="subject"
                      className="text-foreground/75"
                    >
                      Subject *
                    </FieldLabel>
                    <Input
                      {...field}
                      id="subject"
                      aria-invalid={fieldState.invalid}
                      placeholder="Subject ..."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="message"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor="message"
                      className="text-foreground/75"
                    >
                      Message *
                    </FieldLabel>
                    <Textarea
                      {...field}
                      id="message"
                      aria-invalid={fieldState.invalid}
                      placeholder="Your message ..."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Button
                className="hover:bg-foreground/90 hover:text-background"
                variant="secondary"
                type="submit"
              >
                Send message
              </Button>
            </FieldGroup>
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;
