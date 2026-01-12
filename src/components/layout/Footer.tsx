// import { Link } from "react-router-dom";
// import { Server, Twitter, Github, Linkedin, Youtube } from "lucide-react";

// const footerLinks = {
//   Product: [
//     { label: "Web Hosting", href: "#" },
//     { label: "Cloud Servers", href: "#" },
//     { label: "VPS Hosting", href: "#" },
//     { label: "Dedicated Servers", href: "#" },
//     { label: "Domain Names", href: "#" },
//   ],
//   Company: [
//     { label: "About Us", href: "#" },
//     { label: "Careers", href: "#" },
//     { label: "Blog", href: "#" },
//     { label: "Press", href: "#" },
//     { label: "Partners", href: "#" },
//   ],
//   Resources: [
//     { label: "Documentation", href: "#" },
//     { label: "API Reference", href: "#" },
//     { label: "Tutorials", href: "#" },
//     { label: "Status Page", href: "#" },
//     { label: "Community", href: "#" },
//   ],
//   Support: [
//     { label: "Help Center", href: "#" },
//     { label: "Contact Us", href: "#" },
//     { label: "Live Chat", href: "#" },
//     { label: "System Status", href: "#" },
//     { label: "Report Abuse", href: "#" },
//   ],
// };

// const socialLinks = [
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Github, href: "#", label: "GitHub" },
//   { icon: Linkedin, href: "#", label: "LinkedIn" },
//   { icon: Youtube, href: "#", label: "YouTube" },
// ];

// export function Footer() {
//   return (
//     <footer className="bg-dark border-t border-border/30">
//       <div className="container mx-auto px-4 py-16 md:py-20">
//         {/* Main Footer */}
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-12">
//           {/* Brand */}
//           <div className="col-span-2">
//             {/* Logo */}
//             <Link to="/" className="flex items-center">
//               <img
//                 className="w-[200px] h-[140px]"
//                 src="/logo.png"
//                 alt="Brand Icon"
//               />
//             </Link>
//             <p className="text-muted-foreground mb-6 max-w-xs">
//               Lightning-fast hosting with enterprise-grade security. Trusted by
//               10,000+ businesses worldwide.
//             </p>

//             {/* Social Links */}
//             <div className="flex gap-3">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   aria-label={social.label}
//                   className="w-10 h-10 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:border-secondary/50 transition-all"
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Links */}
//           {Object.entries(footerLinks).map(([category, links]) => (
//             <div key={category}>
//               <h4 className="font-display font-semibold text-foreground mb-4">
//                 {category}
//               </h4>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.label}>
//                     <Link
//                       to={link.href}
//                       className="text-muted-foreground hover:text-secondary transition-colors"
//                     >
//                       {link.label}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Footer */}
//         <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-sm text-muted-foreground">
//             © 2026 Orrien. All rights reserved.
//           </p>
//           <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
//             <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
//              Privacy Policy
//             </Link>
//             <Link to="/termsOfServices" className="hover:text-foreground transition-colors">
//                  Terms of Service
//             </Link>
//             <Link to="/cookie" className="hover:text-foreground transition-colors">
//             Cookie Policy
//             </Link>
           
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }














import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Youtube } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Web Hosting", href: "/web-hosting" },
    { label: "Cloud Servers", href: "/managed-vds-hosting" },
    { label: "VPS Hosting", href: "/vps-hosting" },
    { label: "Dedicated Servers", href: "/dedicated-servers" },
    { label: "Domain Names", href: "/buy-domain" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "/blog" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Tutorials", href: "#" },
    { label: "Status Page", href: "#" },
    { label: "Community", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "/contact" },
    { label: "Live Chat", href: "#" },
    { label: "System Status", href: "#" },
    { label: "Report Abuse", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-dark border-t border-border/30">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 mb-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center">
              <img className="w-[200px] h-[140px]" src="/logo.png" alt="Brand Icon" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-xs">
              Lightning-fast hosting with enterprise-grade security. Trusted by
              10,000+ businesses worldwide.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:border-secondary/50 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Orrien. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/termsOfServices" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookie" className="hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
