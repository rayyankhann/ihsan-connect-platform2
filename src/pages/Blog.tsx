import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  User, 
  Calendar, 
  ArrowRight,
  BookOpen,
  Heart,
  MessageCircle
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "My Journey to Medical School: From Pre-Med to Acceptance",
    excerpt: "A comprehensive guide on navigating the medical school application process, including MCAT prep, volunteering, and interviews.",
    author: "Sarah Johnson",
    role: "IHSAN Alumni, Medical Student",
    date: "2024-12-15",
    readTime: "8 min read",
    category: "Medical School",
    tags: ["Pre-Med", "MCAT", "Applications"],
    likes: 42,
    comments: 12
  },
  {
    id: 2,
    title: "Volunteering at Dallas Community Health Fair: A Rewarding Experience",
    excerpt: "Reflecting on the impact of community service and how volunteering shaped my perspective on healthcare accessibility.",
    author: "Michael Chen",
    role: "IHSAN Member, Senior",
    date: "2024-12-10",
    readTime: "5 min read",
    category: "Volunteering",
    tags: ["Community Service", "Healthcare Access"],
    likes: 28,
    comments: 8
  },
  {
    id: 3,
    title: "Research Opportunities for Pre-Health Students at UTD",
    excerpt: "Discover the various research programs available on campus and how to get involved in healthcare-related projects.",
    author: "Dr. Amanda Rodriguez",
    role: "Faculty Advisor",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Research",
    tags: ["Research", "Academic", "Opportunities"],
    likes: 35,
    comments: 15
  },
  {
    id: 4,
    title: "Networking Tips: Building Professional Relationships in Healthcare",
    excerpt: "How to effectively network with healthcare professionals and make meaningful connections for your career.",
    author: "Jennifer Park",
    role: "IHSAN Alumni, Physician",
    date: "2024-11-28",
    readTime: "7 min read",
    category: "Career",
    tags: ["Networking", "Professional Development"],
    likes: 31,
    comments: 9
  }
];

const categories = ["All", "Medical School", "Volunteering", "Research", "Career"];

const Blog = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Community Stories
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Real experiences, insights, and advice from our IHSAN community members
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Badge className="mb-4">Featured Story</Badge>
            <Card className="card-gradient overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <Badge variant="secondary" className="mb-4">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center mb-6">
                    <Avatar className="mr-3">
                      <AvatarFallback>
                        {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{blogPosts[0].author}</p>
                      <p className="text-sm text-muted-foreground">{blogPosts[0].role}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </div>
                      <span>•</span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {blogPosts[0].likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {blogPosts[0].comments}
                      </div>
                    </div>
                  </div>

                  <Button>
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-primary/50" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Recent Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover insights and experiences from our community
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={post.id}
                className="card-gradient overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-primary/50" />
                </div>
                
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center mb-4">
                    <Avatar className="mr-3 w-8 h-8">
                      <AvatarFallback className="text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground text-sm">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <Heart className="w-3 h-3 mr-1" />
                        {post.likes}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        {post.comments}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="rounded-xl">
              Load More Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Share Your Story
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have an experience, insight, or advice to share with the IHSAN community? 
            We'd love to feature your story on our blog.
          </p>
          <Button size="lg" className="rounded-xl">
            <User className="mr-2 h-5 w-5" />
            Submit Your Story
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;