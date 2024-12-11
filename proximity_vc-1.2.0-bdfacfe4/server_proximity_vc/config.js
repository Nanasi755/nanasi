const app_id = "6f0e4f0d-c51f-4789-98e8-20efdccd5d4b" //skywayのアプリケーションID //skyway application ID
const secret_key = "pRFocumR0Ztq9gKcDDM809vWANZpS7mS8+4AGNnYX10=" //skywayのシークレットキー // skyway secret key
let proximity = true;  //近接VCのtrue:有効/false:無効(デフォルトはtrue) //Proximity VC true:enable/false:disable (default: true)
let password = false; //接続時のパスワードの有無(デフォルトはfalse) //Password in connection (default: false)
let distance = 6; // 声の届く最大距離(デフォルトは6) //Max distance of sound (default: 6)
const port = 19132; // websocketをlistenするポート //Port to listen
const web_port = 8080; // 近接vcのwebサイトと接続するポート // Port to connect website
let lang = "ja"; //言語(ja:日本語, en:英語) //Language (ja:Japanese, en:English)
module.exports = { distance, app_id, secret_key, proximity, port, web_port, lang, password };
