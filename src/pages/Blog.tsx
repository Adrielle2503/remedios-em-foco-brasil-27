
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Blog Educativo
          </h1>
          <p className="text-xl text-gray-600">
            Informações importantes sobre saúde pública
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Em desenvolvimento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              O blog educativo está sendo desenvolvido. 
              Em breve você terá acesso a conteúdos informativos sobre saúde.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Blog;
