export interface Tea {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'traditional' | 'herbal' | 'iced' | 'exotic';
  ingredients: string[];
  image: string;
  popular?: boolean;
}

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}