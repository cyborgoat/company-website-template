import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, Lightbulb, Users } from 'lucide-react';

export function ValuesSection() {
  return (
    <section className="mb-16 md:mb-24">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardHeader>
            <CheckCircle className="w-10 h-10 mx-auto mb-3 text-primary" />
            <CardTitle>Integrity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              We are committed to transparency, honesty, and ethical behavior in all our work.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <Lightbulb className="w-10 h-10 mx-auto mb-3 text-primary" />
            <CardTitle>Innovation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              We constantly seek new ideas and creative solutions to push the boundaries of what’s possible.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <Users className="w-10 h-10 mx-auto mb-3 text-primary" />
            <CardTitle>Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              We believe the best results come from diverse teams working together openly and supportively.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
