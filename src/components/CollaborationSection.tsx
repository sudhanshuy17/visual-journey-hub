import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export const CollaborationSection = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:officesudhanshu17@gmail.com?subject=Collaboration%20Inquiry";
  };

  return (
    <section className="animate-fadeIn">
      <Card className="bg-secondary/50">
        <CardContent className="p-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Collaborate</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I invite you to collaborate with me on photography and videography projects. If you have a creative vision or require professional services in these areas, my team of experienced professionals is available to assist. I'd love to hear from you.
          </p>
          <Button 
            onClick={handleContactClick}
            className="group"
            size="lg"
          >
            <Mail className="mr-2 group-hover:animate-bounce" />
            Contact Me
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};