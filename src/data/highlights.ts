import type { HighlightSource } from '../types/source';

export const highlights: Array<{
  tag: string;
  title: string;
  summary: string;
  image: string;
  source?: HighlightSource;
}> = [
  {
    tag: '产品',
    title: 'ChatGPT 与 Codex 自 12 月起共用用量额度',
    summary: 'Plus/Pro/Business 的 ChatGPT 与 Codex 将共享按 token 计量的额度；Instant chat 不计入。',
    image: '/media/news-1.png',
    source: {
      url: 'https://help.openai.com/en/articles/20001625-understanding-chatgpt-and-codex-usage-limits',
      label: 'openai.com',
      verification: 'official',
    },
  },
  {
    tag: 'Agent',
    title: 'DeepSeek 开源超级 Agent 研究原型（MIT）',
    summary: '面向单个 GitHub 仓库的编程智能体原型：被授权后可自动执行任务并以 PR 等形式回复。',
    image: '/media/news-2.png',
    source: {
      url: 'https://github.com/deepseek-ai/dsh-superagent-prototype/',
      label: 'deepseek.com',
      verification: 'official',
    },
  },
  {
    tag: '产业',
    title: '阿美完成入股 HUMAIN 49%，注资约 26 亿美元',
    summary: '阿美以约 99 亿里亚尔现金及 AI/算力资产取得 49% 股权，PIF 保留 51%。',
    image: '/media/news-3.png',
    source: {
      url: 'https://www.aramco.com/en/news-media/news/2026/pif-and-aramco-close-humain-transaction-to-accelerate-humains-global-growth',
      label: 'aramco.com',
      verification: 'official',
    },
  },
  {
    tag: '工具',
    title: 'Mage-VL-Cowork：4B 模型 OSWorld 达 66.0%',
    summary: '微软发布 4B 电脑操作模型，GUI 与终端合一，Apache-2.0；分数为官方自报。',
    image: '/media/news-4.png',
    source: {
      url: 'https://microsoft.github.io/Mage/cowork/',
      label: 'microsoft.github.io',
      verification: 'official',
    },
  },
  {
    tag: '落地',
    title: 'Apple 智能登陆中国，部分体验接入千问',
    summary: '首批功能 11 月 4 日起 Beta，计划 12 月随系统更新正式推出；不含下一代 Siri AI。',
    image: '/media/news-1.png',
    source: {
      url: 'https://www.apple.com.cn/newsroom/2026/10/apple-intelligence-features-are-coming-to-users-in-china/',
      label: 'apple.com.cn',
      verification: 'official',
    },
  },
];
