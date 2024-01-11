import { faq } from "@/app/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionFAQ = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faq.map((item) => {
        return (
          <AccordionItem value={`item-${item.id}`} key={item.id}>
            <AccordionTrigger className="text-base sm:text-xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
