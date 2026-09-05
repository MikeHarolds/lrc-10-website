import { Mail, Phone, MapPin, ArrowUpRight, ArrowRight } from "lucide-react";
import { footer, event, site, links } from "@/data/conference";
import { socialIcons } from "@/lib/icons";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="contact" className="bg-green text-white/65">
      {/* Volunteer CTA band — ImpactField "Join Our Team" */}
      <div className="border-b border-white/10">
        <div className="container flex flex-col items-start gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-bold text-white">
              {footer.volunteerCta.body}
            </p>
            <p className="mt-1 text-sm text-white/55">
              Part of the wider ImpactField movement — {site.organiserTagline}
            </p>
          </div>
          <a
            href={footer.volunteerCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-blue px-6 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-blue-dark"
          >
            {footer.volunteerCta.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
            {footer.about}
          </p>
          <ul className="mt-6 space-y-2.5 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-bright" />
              <span>
                {event.venue}, {event.address}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-blue-bright" />
              <a href={site.contactPhoneHref} className="hover:text-white">
                {site.contactPhone}
              </a>
              <span className="text-white/30">·</span>
              <a href={site.orgPhoneHref} className="hover:text-white">
                {site.orgPhone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-blue-bright" />
              <a href={`mailto:${site.orgEmail}`} className="hover:text-white">
                {site.orgEmail}
              </a>
            </li>
          </ul>
        </div>

        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              {col.title}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((link) => {
                const external = /^https?:\/\//.test(link.href);
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-1 transition-colors hover:text-white"
                    >
                      {link.label}
                      {external && <ArrowUpRight className="h-3 w-3 opacity-50" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/45">{footer.copyright}</p>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
              Follow ImpactField
            </span>
            {footer.socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-blue-bright hover:text-blue-bright"
                >
                  {Icon ? <Icon className="h-[16px] w-[16px]" /> : null}
                </a>
              );
            })}
          </div>
          <a
            href={links.impactfield}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/45 transition-colors hover:text-white"
          >
            impactfield.com.ng
          </a>
        </div>
      </div>
    </footer>
  );
}
