import type { ComponentType } from "react";
import {
  Users,
  Check,
  TrendingUp,
  Globe2,
  CalendarDays,
  Compass,
  Cross,
  Cpu,
  Briefcase,
  UsersRound,
  Sparkles,
  User,
  BookOpen,
  HeartHandshake,
  Palette,
  Building2,
  GraduationCap,
  Heart,
  Mic,
  MessagesSquare,
  Wrench,
  Network,
  Award,
  Lightbulb,
  Handshake,
  Rocket,
  Target,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

type Icon = ComponentType<{ className?: string }>;

export const icons: Record<string, Icon> = {
  // culture reasons
  users: Users,
  check: Check,
  trending: TrendingUp,
  globe: Globe2,
  calendar: CalendarDays,
  // five worlds
  leadership: Target,
  technology: Cpu,
  faith: Cross,
  business: Briefcase,
  family: UsersRound,
  // audience
  spark: Sparkles,
  briefcase: Briefcase,
  user: User,
  book: BookOpen,
  community: HeartHandshake,
  palette: Palette,
  building: Building2,
  school: GraduationCap,
  heart: Heart,
  compass: Compass,
  // experience
  mic: Mic,
  message: MessagesSquare,
  wrench: Wrench,
  network: Network,
  cpu: Cpu,
  award: Award,
  // misc
  lightbulb: Lightbulb,
  handshake: Handshake,
  rocket: Rocket,
  target: Target,
};

export const socialIcons: Record<string, Icon> = {
  facebook: Facebook,
  x: Twitter,
  instagram: Instagram,
  youtube: Youtube,
  linkedin: Linkedin,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? Sparkles;
  return <Cmp className={className} />;
}
