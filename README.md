# Copitta

Copitta（コピッタ）は、いくつかの要素を Markdown 形式でクリップボードにコピーする拡張機能です。画像 URL を取得する際、Alt にページタイトルをコピーできる特徴があります。

- ブラウザアクションボタン：`[ページタイトル](ページURL)` をコピー
- 画像右クリック：`![ページタイトル](画像URL)` コピー用のメニューを表示
- テキストリンク右クリック：`[テキスト](リンクURL)` コピー用のメニューを表示

Source：https://github.com/qrac/copitta

## プライバシーへの取り組み

### 単一用途

ページのタイトルと URL をクリップボードにコピーし、SNS に貼り付けるため。
Copy the title and URL of the page to the clipboard and paste it on SNS.

### contextMenu が必要な理由

選択した画像リンクまたはテキストリンクをクリップボードにコピーするため。
To copy selected image or text links to the clipboard.

### scripting が必要な理由

選択した画像リンクまたはテキストリンクまたはタブのタイトルとリンクをクリップボードにコピーするため。
To copy the selected image link or text link or tab title and link to the clipboard.

### activeTab が必要な理由

タブのタイトルとリンクをクリップボードにコピーするため。
To copy tab titles and links to the clipboard.
