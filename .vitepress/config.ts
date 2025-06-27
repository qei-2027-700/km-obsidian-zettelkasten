import { defineConfig } from 'vitepress'
import { readdirSync } from 'fs'
import { join } from 'path'

// ディレクトリを自動スキャンしてサイドバーを生成
function generateSidebar() {
  const items: any[] = []
  const rootDir = process.cwd()
  const entries = readdirSync(rootDir, { withFileTypes: true })
  
  const categoryMap = {
    'balance-management': 'バランス管理',
    'beauty': '美容',
    'career': 'キャリア',
    'cooking': '料理',
    'dev': '開発',
    'health': '健康',
    'journal': '日記',
    'nb': 'ノートブック',
    'other': 'その他'
  }
  
  for (const entry of entries) {
    if (entry.isDirectory() && categoryMap[entry.name]) {
      const dirPath = join(rootDir, entry.name)
      const files = readdirSync(dirPath).filter(f => f.endsWith('.md'))
      
      if (files.length > 0) {
        items.push({
          text: categoryMap[entry.name],
          link: `/${entry.name}/`,
          collapsed: true,
          items: files.map(file => ({
            text: file.replace('.md', ''),
            link: `/${entry.name}/${file.replace('.md', '')}`
          }))
        })
      }
    }
  }
  
  return items
}

export default defineConfig({
  title: '🧠 Zettelkasten',
  description: 'Personal knowledge management system',
  base: '/km-obsidian-zettelkasten/',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'All Categories', link: '/categories' }
    ],

    sidebar: generateSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/km/km-obsidian-zettelkasten' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Personal Zettelkasten',
      copyright: 'Auto-generated from Obsidian vault'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})