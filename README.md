"""# 🎛️ Discord Moderasyon Botu (CommonJS Full)

[![Node.js](https://img.shields.io/badge/Node.js-v18+-brightgreen?logo=node.js)](https://nodejs.org/)
[![discord.js](https://img.shields.io/badge/discord.js-v14-blue?logo=discord)](https://discord.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Gelişmiş ve **slash komutlu** Discord moderasyon botu. Node.js ve Discord.js v14 kullanılarak hazırlanmıştır. Bot, **CommonJS** formatında olduğu için Windows ve ESM hataları olmadan çalışır.

---

## 🚀 Özellikler

### 🔨 Moderasyon Komutları

| Komut | Açıklama | Yetki |
|-------|----------|-------|
| `/ban <kullanıcı> [sebep]` | Kullanıcıyı sunucudan yasaklar | BanMembers |
| `/kick <kullanıcı> [sebep]` | Kullanıcıyı sunucudan atar | KickMembers |
| `/purge <sayı>` | Belirtilen sayıda mesajı toplu siler | ManageMessages |
| `/mute <kullanıcı> <dakika>` | Kullanıcıyı belirtilen süre boyunca susturur | ModerateMembers |
| `/unmute <kullanıcı>` | Susturmayı kaldırır | ModerateMembers |
| `/slowmode <saniye>` | Kanal için yavaş modu ayarlar | ManageChannels |
| `/warn <kullanıcı> [sebep]` | Kullanıcıya uyarı verir | KickMembers |
| `/clearwarns <kullanıcı>` | Kullanıcının tüm uyarılarını temizler | KickMembers |

### 📊 Bilgi Komutları

| Komut | Açıklama |
|-------|----------|
| `/userinfo [kullanıcı]` | Kullanıcı bilgilerini gösterir |
| `/serverinfo` | Sunucu bilgilerini gösterir |
| `/botinfo` | Botun uptime, RAM ve sistem bilgilerini gösterir |
| `/yardim` | Tüm komutları listeler |

### 🎭 Faydalı / Eğlenceli Komutlar

| Komut | Açıklama |
|-------|----------|
| `/ping` | Botun ping değerini gösterir |
| `/avatar [kullanıcı]` | Kullanıcının avatarını gösterir |
| `/say <mesaj>` | Bot mesajı tekrar eder |
| `/poll <soru> <seçenek1> <seçenek2>` | Basit anket oluşturur |

---

## 🛠️ Gereksinimler

- Node.js **v18+**  
- Discord.js **v14**  
- Bir Discord bot tokeni  
- Botu ekleyeceğiniz sunucu için **Client ID** ve **Guild ID**  

---

## ⚡ Kurulum

### 1️⃣ Depoyu klonlayın veya ZIP’i indirin

```bash
git clone <repo-url>
