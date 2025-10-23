import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSection() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4">Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Invite customers to join your mailing list.
          </p>
          
          <div className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 border-gray-300 focus:border-green-600 focus:ring-green-600"
            />
            <Button 
              variant="default" 
              className="bg-black text-white px-8 py-3 hover:bg-gray-800"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
