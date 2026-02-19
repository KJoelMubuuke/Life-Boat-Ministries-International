import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 text-primary">Life Boat Ministries</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A place to belong, believe, and become. Join us as we grow in faith and serve our community with the love of Christ.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-background">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/ministries" className="hover:text-primary transition-colors">Ministries</Link>
              <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
              <Link href="/give" className="hover:text-primary transition-colors">Give</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-background">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>Tororo District, Uganda</p>
              <p>Phone: +256 776 875 248</p>
              <p>Email: kaikedeolo@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Life Boat Ministries International. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-background transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
