export interface Speaker {
  id: string;
  name: string;
  role: string;
  tags: string[];
  bio: string;
  lecture: string;
  workshop: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  type: 'palestra' | 'workshop' | 'atividade';
  speaker?: string;
}

export interface DaySchedule {
  date: string;
  label: string;
  highlights: string[];
  items: ScheduleItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface PromiseItem {
  id: string;
  title: string;
  description: string;
  icon: 'CheckCircle2' | 'MessageCircle' | 'Info' | 'Users';
}
