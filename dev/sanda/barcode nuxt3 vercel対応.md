# 現在の疑問点
堤さんに聞きたいこと

>AWSではなく、Vercelにデプロイしました、
GithubにPushすると自動デプロイされますので、
こちらで、進めて頂けますでしょうか。

URLは以下です。
[https://sa-jan-scanner-app-fe.vercel.app/](https://sa-jan-scanner-app-fe.vercel.app/)

>Vercelでチームを作ると、コストがかかるため、
基本的に、ローカルで確認いただき、
問題なければ、git pushしてもらえれば、自動的にデプロイされます。
なので、vercelアカウントがなくても開発は進められます！

>supabaseは会社の方でアカウント持っているので、
情報はお伝えします。
.envなどに、supabaseの情報を設定する必要があります。


アプリの仕様、Supabaseの件で確認になります。

先日、個人LINEの方に、下記の環境変数をいただいたかと思います。
ANON_KEY
SERVICE_ROLE_KEY

現状の確認ですがsupabase側ではテーブルなどは未作成であり、これから作成が必要ということでしょうか？
私が実際のSupabse側のコンソールにログインできないため、あまりイメージができておりません。
Supabse上でテーブルが未作成の場合、コンソール画面から作成が必要かと考えています。

	現状、データを保持する必要があるのは下記です。
- 「JANコード」と「購入用URL」のSET
	- →Laravelのプロジェクト内のCSVファイルに保存
- 読み取り履歴
	- →現状はブラウザのローカルストレージに保存

今後は上記全て、Supabaseの方で保管するイメージでしょうか？

テキストだけでは限界があり、一度通話できればと思うのですが可能でしょうか？

私は基本的に金曜日の夜以外の夜以降（20:00以降）、
前もって予定を確保すれば土日の日中が可能になります。

お手数をおかけしますが、ご確認のほどよろしくお願いいたします🙇


SUPABASE_URL
SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY