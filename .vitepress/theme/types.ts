import { DefaultTheme } from 'vitepress/theme'

export interface ThemeConfig extends DefaultTheme.Config {
  // Add any custom theme config properties here
}

export interface FeedbackData {
  value: boolean
  timestamp: string
  url: string
  path: string
}

export interface AllFeedbackItem {
  path: string
  isHelpful: boolean
  timestamp: string
  url: string
} 