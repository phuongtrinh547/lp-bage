'use client';

import { Button } from '@/components/atoms/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/atoms/card';

const TopPage = () => {
  return (
    <main className="px-4 py-10 lg:px-8 lg:py-16 space-y-10 bg-background text-foreground">
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">ようこそ！</h1>
        <p className="text-muted-foreground text-lg">
          債権投資の新しいスタート
        </p>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>CTA</CardTitle>
          </CardHeader>
          <CardContent>
            <p>CTA内容</p>
            <Button className="mt-4">今すぐ申し込む</Button>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>購入申し込み受付中の債権</CardTitle>
          </CardHeader>
          <CardContent>
            <p>情報表示</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>サービスの仕組み</CardTitle>
          </CardHeader>
          <CardContent>
            <p>仕組み説明</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>特徴</CardTitle>
          </CardHeader>
          <CardContent>
            <p>特徴説明</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>はじめ方</CardTitle>
          </CardHeader>
          <CardContent>
            <p>はじめ方説明</p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>FAQ</CardTitle>
          </CardHeader>
          <CardContent>
            <p>FAQ内容</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default TopPage;
