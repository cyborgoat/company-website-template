import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {CheckCircle, Lightbulb, Users} from 'lucide-react';

export function ValuesSection() {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center text-balance">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <Card className="text-center border">
          <CardHeader>
            <CheckCircle className="w-10 h-10 mx-auto mb-3 text-primary" />
            <CardTitle>Integrity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              We are committed to transparency, honesty, and ethical behavior in all our work.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center border">
          <CardHeader>
            <Lightbulb className="w-10 h-10 mx-auto mb-3 text-primary" />
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              We constantly seek new ideas and creative solutions to push the boundaries of what’s possible.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center border">
          <CardHeader>
            <Users className="w-10 h-10 mx-auto mb-3 text-primary" />
            <CardTitle>Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              We believe the best results come from diverse teams working together openly and supportively.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
