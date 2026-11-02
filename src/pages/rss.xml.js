import rss from '@astrojs/rss'; import { getCollection } from 'astro:content';
export async function GET(context){
  const posts=(await getCollection('daily')).sort((a,b)=>b.data.date.valueOf()-a.data.date.valueOf());
  return rss({title:'AI前沿',description:'每天 5 分钟，看完全球 AI 最重要的新闻、新工具和测评。',site:context.site,
    items:posts.map(p=>({title:p.data.title,pubDate:p.data.date,description:p.data.description,link:`/daily/${p.id}/`})),customData:'<language>zh-cn</language>'});
}
