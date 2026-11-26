// İş Pedagojisi Kursu – Usta Öğreticilik Soru Bankası (Açıklamalı Tam Sürüm)
// Toplam 1041 soru. Dört seçenek; answer sıfır tabanlıdır (A=0, B=1, C=2, D=3).
const QUESTIONS = [
  {
    "question": "3308 sayılı Mesleki Eğitim Kanunu'na göre bir mesleğin bilgi, beceri ve iş alışkanlıklarını kazanmış ve işi ustanın gözetiminde kabul edilebilir standartlarda yapabilen kişiye ne denir?",
    "options": [
      "Kalfa",
      "Çırak",
      "Teknisyen",
      "Aday çırak"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Kalfa\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "Mesleki eğitim merkezlerine kayıt için aşağıdakilerden hangisi belirtilen şartlardan değildir?",
    "options": [
      "En az ortaokul veya imam hatip ortaokulu mezunu olmak",
      "Bir işletme ile sözleşme imzalamak",
      "Sağlık durumunun mesleğe elverişli olması",
      "18 yaşını bitirmemiş olmak"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"18 yaşını bitirmemiş olmak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Kanuna göre aday çırak, çırak ve işletmelerde mesleki eğitim gören öğrencilere tatil aylarında verilen ücretli izin süresi testte hangi seçenek olarak verilmiştir?",
    "options": [
      "16 gün",
      "1 ay",
      "25 gün",
      "14 gün"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"1 ay\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "Aday çırak ve çırağa yaşına uygun asgari ücretin hangi oranından aşağı ücret ödenemeyeceği sorulmaktadır?",
    "options": [
      "%15",
      "%50",
      "%30",
      "%25"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"%30\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "İşletmelerde mesleki eğitim/staj sözleşmesi testte hangi taraflar arasında gösterilmiştir?",
    "options": [
      "İşveren ve öğrenci reşit değilse velisi",
      "İşveren, okul müdürü ve usta öğretici",
      "Okul müdürü, öğrenci ve işveren",
      "Öğrenci, işveren ve usta öğretici"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Okul müdürü, öğrenci ve işveren\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "Dördüncü veya daha üst seviye MYK Mesleki Yeterlilik Belgesine sahip olanların hangi sınavına alınacağı belirtilmiştir?",
    "options": [
      "Ustalık",
      "Kalfalık",
      "Usta öğreticilik",
      "İş yeri açma"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Ustalık\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "Usta öğreticilik belgesi kursu başarıyla tamamlandığında verilir ve hangi belge/diplomayla birlikte kullanılır?",
    "options": [
      "Yalnız lise diplomasıyla",
      "Ustalık, iş yeri açma belgesi veya en az ön lisans diplomasıyla",
      "Yalnız kalfalık belgesiyle",
      "Yalnız MYK belgesiyle"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ustalık, iş yeri açma belgesi veya en az ön lisans diplomasıyla\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Önceki öğrenmelerin tanınması hangi öğrenme yollarıyla edinilmiş bilgi, beceri ve yetkinlikleri kapsar?",
    "options": [
      "Yalnız örgün öğrenme",
      "Yalnız iş yerindeki öğrenme",
      "Örgün, yaygın ve/veya serbest öğrenme",
      "Yalnız uzaktan öğrenme"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Örgün, yaygın ve/veya serbest öğrenme\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "Önceki öğrenmelerin tanınması kapsamında kalfalık/ustalık sınavları hangi sıklıkta yapılabileceği belirtilmiştir?",
    "options": [
      "Yılda en az bir kez",
      "Yılda iki defadan az olmamak üzere",
      "Her üç yılda bir",
      "Yalnız haziran ayında"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Yılda iki defadan az olmamak üzere\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "Önceki öğrenmelerin tanınması kapsamında sınav başvurusu için belirtilen yaş şartı nedir?",
    "options": [
      "18 yaşını bitirmiş olmak",
      "20 yaşını bitirmiş olmak",
      "En az 22 yaşını bitirmiş olmak",
      "25 yaşını bitirmiş olmak"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"En az 22 yaşını bitirmiş olmak\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "Mesleki eğitim işletmesinde beceri eğitiminden sorumlu personel olarak kim görevlendirilebilir?",
    "options": [
      "Herhangi bir çalışan",
      "Ustalık veya mesleki yeterliğe sahip ve iş pedagojisi eğitimi görmüş usta öğretici/eğitici personel",
      "Yalnız işletme sahibi",
      "Yalnız okul müdürü"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ustalık veya mesleki yeterliğe sahip ve iş pedagojisi eğitimi görmüş usta öğretici/eğitici personel\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İşletme, öğrencilerin devam ve hastalık izinlerini belirtilen şekilde ne kadar sürede okula bildirir?",
    "options": [
      "Aynı gün",
      "İki iş günü içinde",
      "Bir hafta içinde",
      "Dönem sonunda"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"İki iş günü içinde\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "İşletmede mesleki eğitim için gerekli temrin malzemesi ve araç gereci temin etme sorumluluğu kime verilmiştir?",
    "options": [
      "Öğrenciye",
      "İşletmeye",
      "Velilere",
      "Yalnız okul müdürlüğüne"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İşletmeye\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Mesleki eğitim sözleşmesinde ücret ve diğer olanakları kapsayan sözleşme hangi tarafların imzasıyla düzenlenir?",
    "options": [
      "Yalnız öğrenci ve usta öğretici",
      "Öğrenci/veli, okul müdürü ve işletme",
      "Yalnız işletme ve okul müdürü",
      "Yalnız veli ve okul"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Öğrenci/veli, okul müdürü ve işletme\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "Aşağıdakilerden hangisi ki Ahilik törenlerinden biri değildir?",
    "options": [
      "Yiğitbaşılık töreni",
      "Yol sahibi olma töreni",
      "Yol kardeşliği töreni",
      "Şed kuşanma töreni"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Yiğitbaşılık töreni\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Ahilik eğitim sisteminin özelliklerinden biri hangisidir?",
    "options": [
      "Eğitimden herkes ücretsiz yararlanır",
      "Eğitim yalnız şehir merkezlerinde yapılır",
      "Eğitim yalnız kısa süreli olur",
      "Eğitim iş dışı etkinliklerle sınırlıdır"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Eğitimden herkes ücretsiz yararlanır\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Ahilik kültürünün oluşmasında en önemli paya sahip unsur hangi seçenek olarak verilmiştir?",
    "options": [
      "Eleman eksikliği",
      "Ahlaklı ve nitelikli personel ihtiyacı",
      "Kazancın önemi",
      "Yalnız dinî temeller"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Ahlaklı ve nitelikli personel ihtiyacı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Kökeni Ahilik teşkilatına dayanan günümüz kurumlarından biri olmadığı belirtilen hangisidir?",
    "options": [
      "Bağ-Kur",
      "Esnaf Kefalet Kooperatifleri",
      "Halk Bankası",
      "Barolar Birliği"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Barolar Birliği\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Ahilik eğitim sisteminde yer almadığı belirtilen seçenek hangisidir?",
    "options": [
      "Eğitim ömür boyu sürer",
      "İş başı eğitim iş dışı eğitimle bütünleşir",
      "Yaygın eğitim amaçlanır",
      "Eğitim yalnızca şehir merkezlerinde ücretli olarak verilir"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Eğitim yalnızca şehir merkezlerinde ücretli olarak verilir\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Ki Ahilik testinde Ahiliğin kişisel gelişimine katkılarından biri olmadığı belirtilen seçenek hangisidir?",
    "options": [
      "Sabırlı olma",
      "Güler yüzlü olma",
      "Emeğin kutsallığı",
      "Öfkelenmeme"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Emeğin kutsallığı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Etik kavramı temel olarak hangi konuları sorgulayan felsefi disiplin olarak açıklanır?",
    "options": [
      "Ahlaki nitelikleri ve doğru-yanlış, iyi-kötü davranışları",
      "Yalnız ekonomik kazancı",
      "Yalnız hukuki yaptırımları",
      "Teknik üretim süreçlerini"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Ahlaki nitelikleri ve doğru-yanlış, iyi-kötü davranışları\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Meslek etiği nasıl ifade edilir?",
    "options": [
      "Yalnız yazılı hukuk kuralları",
      "Genel ahlak kuralları ve mesleki uzmanlık ölçütlerini kapsayan yazılı olmayan kurallar",
      "İşletmenin satış politikası",
      "Yalnız işverenin talimatları"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Genel ahlak kuralları ve mesleki uzmanlık ölçütlerini kapsayan yazılı olmayan kurallar\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Evrensel meslek ilkelerinin başında hangisi yer alır?",
    "options": [
      "Rekabet",
      "Dürüstlük",
      "Kâr",
      "Gizli bilgi paylaşımı"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Dürüstlük\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Meslek etiğinde tarafsızlık neyi gerektirir?",
    "options": [
      "Kararların dış çıkar baskılarından etkilenmemesini",
      "Her durumda yöneticinin kararını kabul etmeyi",
      "Bilgileri herkesle paylaşmayı",
      "Kişisel çıkarı öncelemeyi"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Kararların dış çıkar baskılarından etkilenmemesini\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Mesleki gizlilik ilkesi hangi davranışı gerektirir?",
    "options": [
      "Görev veya yetki olmadıkça mesleki bilgileri paylaşmamak",
      "Her bilgiyi sosyal medyada paylaşmak",
      "Bilgileri rakiplere aktarmak",
      "Bilgileri kişisel çıkar için kullanmak"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Görev veya yetki olmadıkça mesleki bilgileri paylaşmamak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Ahilikte ‘dışa ait kapalı altı emir’ arasında hangisi bulunur?",
    "options": [
      "Cömertlik",
      "Tevazu",
      "Dilin yalan ve iftiraya kapalı olması",
      "Merhamet"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Dilin yalan ve iftiraya kapalı olması\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Ahilikte ‘içe ait açık’ özelliklerden biri hangisidir?",
    "options": [
      "Dedikodu",
      "Hırs",
      "Cömertlik",
      "İftira"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Cömertlik\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Ahilikte çıraklık süresini tamamlayanların kalfalığa yükseltilmesi için yapılan tören hangisi olarak adlandırılır?",
    "options": [
      "Yol sahibi olma töreni",
      "Şed kuşanma töreni",
      "Yiğitbaşılık töreni",
      "Yol atası töreni"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Yol sahibi olma töreni\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "Ahilikte ustalığa geçiş ve ustalık yetkisinin simgesi olan tören hangisidir?",
    "options": [
      "Yol kardeşliği",
      "Şed kuşanma",
      "Yol atası",
      "Yamaklık"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Şed kuşanma\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Ahilik eğitiminde iş başında eğitim kimler tarafından verilirdi?",
    "options": [
      "Kalfalar ve ustalar",
      "Yalnız devlet memurları",
      "Yalnız aileler",
      "Yalnız din görevlileri"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Kalfalar ve ustalar\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Çalışanların sosyal, ruhsal ve bedensel sağlıklarını korumayı, çalışma koşullarını sağlığa uygun hâle getirmeyi amaçlayan bilim dalı hangisidir?",
    "options": [
      "Mobing",
      "İş sağlığı ve güvenliği",
      "Çalışan nörolojisi",
      "İş yeri sağlığı"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İş sağlığı ve güvenliği\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İş yerinde çalışanın başına sivri cisim düşmesi gibi kazalara karşı hangi kişisel koruyucu donanım kullanılmalıdır?",
    "options": [
      "Baret",
      "Eldiven",
      "Koruyucu gözlük",
      "İş elbisesi"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Baret\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "Yetersiz havalandırma ve yüksek sıcaklık ortamında aşağıdakilerden hangisinin gerçekleşmesi beklenmez?",
    "options": [
      "Nabız yükselmesi",
      "Terlemenin artması",
      "Dikkatin azalması",
      "Verimliliğin artması"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Verimliliğin artması\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Meslek hastalıklarının sınıflandırmasında sayılmaması gereken etken hangisidir?",
    "options": [
      "Kimyasal etken",
      "Meteorolojik etken",
      "Biyolojik etken",
      "Psikolojik etken"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Meteorolojik etken\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "Iş kazalarının önlenemez oranı hangi seçenek olarak verilmiştir?",
    "options": [
      "%2",
      "%10",
      "%12",
      "%20"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"%2\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "Iş kazalarının meydana gelmesinde birinci sırada yer alan neden hangisidir?",
    "options": [
      "Tehlikeli davranış",
      "Tecrübesizlik",
      "Fiziksel güç yetersizliği",
      "Nedeni bulunamayan sebepler"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeli davranış\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "Iş sağlığı ve güvenliği ile ilgili kuruluşlardan biri olmayan hangisidir?",
    "options": [
      "İş Sağlığı ve Güvenliği Genel Müdürlüğü",
      "Mesleki Yeterlilik Kurumu",
      "Orman Genel Müdürlüğü",
      "Sosyal Güvenlik Kurumu Başkanlığı"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Orman Genel Müdürlüğü\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "Solunum sistemini korumak için kullanılan kişisel koruyucu donanım hangisidir?",
    "options": [
      "Maske",
      "Koruyucu gözlük",
      "Baret",
      "Eldiven"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Maske\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İş kazalarında dolaylı zarar olarak sayılmayan seçenek hangisidir?",
    "options": [
      "Kaybolan iş günü ve iş gücü",
      "Sipariş kayıpları",
      "Tazminat maliyetleri",
      "Mahkeme masrafları"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tazminat maliyetleri\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "İş sağlığı ve güvenliği uygulamalarının temel amaçlarından biri hangisidir?",
    "options": [
      "Çalışanların sağlığını ve güvenliğini korumak",
      "Üretimi her koşulda hızlandırmak",
      "Riskleri çalışanlara bırakmak",
      "Koruyucu tedbirleri azaltmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Çalışanların sağlığını ve güvenliğini korumak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Risk değerlendirmesinin temel amacı hangisidir?",
    "options": [
      "Tehlikeleri belirlemek, riskleri analiz edip kontrol tedbirlerini planlamak",
      "Yalnız kaza sonrası rapor yazmak",
      "Çalışan sayısını azaltmak",
      "İşin maliyetini artırmak"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeleri belirlemek, riskleri analiz edip kontrol tedbirlerini planlamak\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "İş yerinde tehlike ve risk kavramları arasındaki doğru ilişki hangisidir?",
    "options": [
      "Tehlike zarar verme potansiyeli, risk bu potansiyelin gerçekleşme olasılığı ve etkisiyle ilgili durumdur",
      "İkisi tamamen aynı kavramdır",
      "Risk yalnız gerçekleşmiş kazadır",
      "Tehlike yalnız çalışan davranışıdır"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlike zarar verme potansiyeli, risk bu potansiyelin gerçekleşme olasılığı ve etkisiyle ilgili durumdur\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "Kişisel koruyucu donanım kullanımıyla ilgili uygun yaklaşım hangisidir?",
    "options": [
      "Riskin kaynağında önlenmesi ve toplu korunma önlemleri öncelikli, KKD uygun tamamlayıcı önlemdir",
      "KKD tüm önlemlerin yerine geçer",
      "KKD isteğe bağlıdır",
      "KKD yalnız kaza sonrası kullanılır"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Riskin kaynağında önlenmesi ve toplu korunma önlemleri öncelikli, KKD uygun tamamlayıcı önlemdir\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İş yerindeki acil durum planı ne amaçla hazırlanır?",
    "options": [
      "Acil durumlarda yapılacak işlemleri, görevleri ve müdahale düzenini belirlemek",
      "Yalnız personel izinlerini düzenlemek",
      "Üretim fiyatlarını belirlemek",
      "İş tanımlarını kaldırmak"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Acil durumlarda yapılacak işlemleri, görevleri ve müdahale düzenini belirlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "Ergonominin temel amacı hangisidir?",
    "options": [
      "İşi ve çalışma ortamını insanın özelliklerine uygun düzenlemek",
      "İnsanı işin koşullarına zorlamak",
      "Yalnız makine hızını artırmak",
      "İş ortamındaki molaları kaldırmak"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"İşi ve çalışma ortamını insanın özelliklerine uygun düzenlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "Aşağıdakilerden hangisi iletişim tanımlarından değildir?",
    "options": [
      "Bilgi alışverişidir",
      "Kaynak ile hedef arasında haber sürecidir",
      "Duygu, düşünce ve tutumların sözlü, yazılı veya sözsüz aktarımıdır",
      "Ölçme değerlendirme sürecidir"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Ölçme değerlendirme sürecidir\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "İletişim sürecinin temel ögeleri hangi seçenekle doğru verilmiştir?",
    "options": [
      "Kaynak-Mesaj-Alıcı-Algı-Geribildirim",
      "Mesaj-Yönetici-Alıcı-Değerlendirme",
      "Organizasyon-Ölçme-Kaynak-Alıcı",
      "Alıcı-Mesaj-Yönetim-Değerlendirici"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kaynak-Mesaj-Alıcı-Algı-Geribildirim\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İletişimi engelleyen, kaynağın gönderdiği mesaj ile alıcının aldığı mesaj arasında fark oluşturan faktörler hangi kavramla ifade edilir?",
    "options": [
      "Dönüt",
      "Kodlama",
      "Kod açma",
      "Gürültü"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Gürültü\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İşletmelerde beceri eğitimi gören öğrenci ve usta öğretici ilişkisi açısından en fazla kullanılan iletişim türü hangisidir?",
    "options": [
      "Sözsüz iletişim",
      "Sözlü iletişim",
      "Yazılı iletişim",
      "Güdüleyici iletişim"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Sözlü iletişim\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "Göz temasından kaçınma hangi duyguyla ilişkilendirilmiştir?",
    "options": [
      "Rahatlık ve açıklık",
      "Suçluluk veya bir şey saklama",
      "İş birliğine hazır olma",
      "Kendine güven"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Suçluluk veya bir şey saklama\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "Endişe ve kaygıyı yansıtan mesaj hangisidir?",
    "options": [
      "Esneme",
      "Göz teması",
      "Tırnak ısırma",
      "Düğmelenmemiş ceket"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Tırnak ısırma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İletişim sürecinde mesajı oluşturan ve ileten kişi hangi öge olarak adlandırılır?",
    "options": [
      "Kaynak",
      "Alıcı",
      "Dönüt",
      "Kanal"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kaynak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İletişim sürecinde mesajın iletilmesini sağlayan araç veya yol hangisidir?",
    "options": [
      "Kanal",
      "Dönüt",
      "Alıcı",
      "Kod açma"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kanal\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Alıcının mesajı yorumlayıp anlamlandırması hangi süreçle ifade edilir?",
    "options": [
      "Kod açma",
      "Kodlama",
      "Gürültü",
      "Kanal"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kod açma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İletişimde geri bildirim (dönüt) ne işe yarar?",
    "options": [
      "Mesajın alıcı tarafından nasıl anlaşıldığını kaynağa bildirir",
      "Mesajı ortadan kaldırır",
      "İletişimi tek yönlü hâle getirir",
      "Kanalı zorunlu olarak değiştirir"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Mesajın alıcı tarafından nasıl anlaşıldığını kaynağa bildirir\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "Empatik iletişimde temel yaklaşım hangisidir?",
    "options": [
      "Karşıdakinin duygu ve bakış açısını anlamaya çalışmak",
      "Karşıdakini yargılamak",
      "Sözünü sürekli kesmek",
      "Kendi düşüncesini zorla kabul ettirmek"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Karşıdakinin duygu ve bakış açısını anlamaya çalışmak\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "Aktif dinleme davranışlarından biri hangisidir?",
    "options": [
      "Dikkati konuşana yöneltmek ve uygun geri bildirim vermek",
      "Telefonla ilgilenmek",
      "Konuşanın sözünü sürekli kesmek",
      "Ön yargıyla dinlemek"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Dikkati konuşana yöneltmek ve uygun geri bildirim vermek\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "Beden dili iletişimde hangi mesajları aktarabilir?",
    "options": [
      "Duygu, tutum ve niyetle ilgili sözsüz ipuçları",
      "Yalnız yazılı bilgiler",
      "Yalnız sayısal veriler",
      "Sadece resmi talimatlar"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Duygu, tutum ve niyetle ilgili sözsüz ipuçları\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "İletişim engellerinden biri hangisidir?",
    "options": [
      "Ön yargı ve yanlış anlamalar",
      "Açık ifade",
      "Empatik dinleme",
      "Uygun geri bildirim"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ön yargı ve yanlış anlamalar\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Organizmanın doğrudan veya dolaylı gözlenebilen etkinlikleri hangisidir?",
    "options": [
      "Güdü",
      "Davranış",
      "Bilinç",
      "Bellek"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Davranış\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Eğitim ve psikolojinin ortak noktası hangisidir?",
    "options": [
      "İnsan davranışı",
      "İnsan hayatı",
      "İnsan bilgisi",
      "Gelişim"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"İnsan davranışı\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Bireyin davranışlarında kendi yaşantısı yoluyla ve kasıtlı olarak istendik değişme meydana getirme süreci hangisidir?",
    "options": [
      "Psikoloji",
      "Hedef",
      "Eğitim",
      "Zekâ"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Eğitim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Gelişim türlerinden biri olmayan hangisidir?",
    "options": [
      "Fiziksel gelişim",
      "Bilişsel gelişim",
      "Psiko-sosyal gelişim",
      "Çevresel gelişim"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Çevresel gelişim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Öğrenmeye etki eden bireysel etkenlerden biri hangisidir?",
    "options": [
      "Öğrenme ortamı",
      "Öğrencinin zekâsı",
      "Öğrenme ortamındaki ısı",
      "Öğrenme ortamındaki ışık"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrencinin zekâsı\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Öğrenmeye etki eden çevresel etken hangisidir?",
    "options": [
      "Öğrencinin yeteneği",
      "Öğrencinin yaşı",
      "Öğrencinin aile çevresi",
      "Öğrencinin ön bilgisi"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrencinin aile çevresi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Eğitim psikolojisinin temel inceleme alanlarından biri hangisidir?",
    "options": [
      "Eğitim süreçlerinde bireyin davranış, gelişim ve öğrenmesi",
      "Yalnız ekonomik sistem",
      "Yalnız fiziksel çevre",
      "Sadece ölçüm araçları"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Eğitim süreçlerinde bireyin davranış, gelişim ve öğrenmesi\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Gelişim kavramı genel olarak neyi ifade eder?",
    "options": [
      "Bireyde yaşam boyunca meydana gelen düzenli değişim süreçlerini",
      "Yalnız boy uzamasını",
      "Yalnız öğrenilen bilgileri",
      "Sadece yaş değişimini"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bireyde yaşam boyunca meydana gelen düzenli değişim süreçlerini\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Fiziksel gelişim hangi değişimlerle ilgilidir?",
    "options": [
      "Bedensel büyüme ve fiziksel özelliklerdeki değişim",
      "Yalnız ahlaki yargılar",
      "Sadece dil bilgisi",
      "Yalnız iş tutumları"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bedensel büyüme ve fiziksel özelliklerdeki değişim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Bilişsel gelişim hangi alanla ilgilidir?",
    "options": [
      "Düşünme, problem çözme, algı ve zihinsel süreçler",
      "Yalnız kas gelişimi",
      "Yalnız duygu ifade biçimi",
      "Sadece ekonomik davranış"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Düşünme, problem çözme, algı ve zihinsel süreçler\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Psiko-sosyal gelişim hangi boyutları içerir?",
    "options": [
      "Duygusal ve sosyal ilişkiler ile kişilik gelişimini",
      "Yalnız fiziksel büyümeyi",
      "Yalnız hafıza kapasitesini",
      "Sadece mesleki becerileri"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Duygusal ve sosyal ilişkiler ile kişilik gelişimini\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Öğrenme kavramı hangi temel özellik ile ilişkilidir?",
    "options": [
      "Bireyin yaşantısı yoluyla davranışında meydana gelen değişme",
      "Yalnız geçici refleks",
      "Sadece fiziksel büyüme",
      "Her türlü anlık davranış"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bireyin yaşantısı yoluyla davranışında meydana gelen değişme\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Öğrenme ortamındaki ışık, sıcaklık ve gürültü hangi tür etkenler olarak değerlendirilebilir?",
    "options": [
      "Çevresel",
      "Bireysel",
      "Genetik",
      "Ölçme"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Çevresel\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "Öğrencinin ön bilgisi öğrenmeyi etkileyen hangi tür faktör olarak değerlendirilir?",
    "options": [
      "Bireysel",
      "Çevresel",
      "Fiziksel ortam",
      "Kurumsal"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bireysel\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İş yeri psikolojisinin mesleki eğitim açısından önemlerinden biri hangisidir?",
    "options": [
      "İş ortamındaki davranış, motivasyon ve ilişkileri anlamaya yardımcı olması",
      "İş güvenliğini gereksiz kılması",
      "Öğrenmeyi yalnız cezaya bağlaması",
      "İletişimi ortadan kaldırması"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"İş ortamındaki davranış, motivasyon ve ilişkileri anlamaya yardımcı olması\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Ki öğretim faaliyeti basamaklarından biri olmayan hangisidir?",
    "options": [
      "Hazırlık",
      "Takdim",
      "Uygulama",
      "Gözetim"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gözetim\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Öğretim yöntemlerinden biri olmayan hangisidir?",
    "options": [
      "Gösteri",
      "Sınıf anlatımı",
      "Soru-cevap",
      "Anlatım"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Sınıf anlatımı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Yalnız işiterek kalıcı bilgi oluşma oranı hangi seçenek olarak verilmiştir?",
    "options": [
      "%50",
      "%40",
      "%20",
      "%100"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"%20\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ustalık yeterliğini kazanmış ve öğrencilerin iş yerindeki eğitiminden sorumlu, mesleki eğitim tekniklerini bilen ve uygulayan kişi kimdir?",
    "options": [
      "Usta",
      "Çırak",
      "Stajyer",
      "Usta öğretici"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Usta öğretici\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "Erkeklerde ergenlik çağı hangi yaş aralığı olarak verilmiştir?",
    "options": [
      "13-18",
      "15-20",
      "08-10",
      "20-25"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"13-18\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Eğitim stratejisi kavramı neyi ifade eder?",
    "options": [
      "Öğretim hedeflerine ulaşmak için genel yaklaşım ve düzenlemeyi",
      "Yalnız sınav puanını",
      "Yalnız sınıf oturma düzenini",
      "Öğrencinin yaşını"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğretim hedeflerine ulaşmak için genel yaklaşım ve düzenlemeyi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Öğretim yöntemleri ile teknikleri arasındaki doğru ilişki hangisidir?",
    "options": [
      "Yöntem genel öğretme yolunu, teknik yöntemin uygulanışındaki özel biçimleri ifade eder",
      "Teknik yöntemden daha geniş kavramdır",
      "İkisi birbirinin karşıtı kavramdır",
      "Yöntem yalnız sınavlarda kullanılır"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Yöntem genel öğretme yolunu, teknik yöntemin uygulanışındaki özel biçimleri ifade eder\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Gösteri yönteminde öğretici temel olarak ne yapar?",
    "options": [
      "İşlem veya beceriyi örnek olarak sergiler",
      "Öğrencileri yalnız yazılı sınava alır",
      "Sınıfı tamamen serbest bırakır",
      "Yalnız kitap okur"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlem veya beceriyi örnek olarak sergiler\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Soru-cevap yöntemi hangi amaçla kullanılabilir?",
    "options": [
      "Öğrenci katılımı, düşünme ve öğrenmenin kontrolünü desteklemek",
      "Öğrencinin katılımını engellemek",
      "Ders içeriğini gizlemek",
      "Yalnız ezber yaptırmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenci katılımı, düşünme ve öğrenmenin kontrolünü desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Öğretim faaliyetlerinin hazırlık basamağında yapılması gerekenlerden biri hangisidir?",
    "options": [
      "Malzeme, teknoloji ve görsel hazırlıkları yapmak",
      "Öğrenciyi hemen bağımsız çalışmaya bırakmak",
      "Kontrol basamağını atlamak",
      "Değerlendirme ölçütlerini gizlemek"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Malzeme, teknoloji ve görsel hazırlıkları yapmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Takdim basamağında öğretici ne yapar?",
    "options": [
      "Konuyu açıklar, gerekli gösteri ve açıklamaları yapar",
      "Öğrenciyi yalnız sınava alır",
      "Öğretimi bitirir",
      "Yalnız not verir"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Konuyu açıklar, gerekli gösteri ve açıklamaları yapar\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Uygulama basamağında öğrenci nasıl çalışır?",
    "options": [
      "Öğreticinin gözetiminde işi deneme ve yapma fırsatı bulur",
      "İşlem yapmadan konuyu ezberler",
      "Yalnız izleyici olur",
      "Değerlendirme dışı kalır"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğreticinin gözetiminde işi deneme ve yapma fırsatı bulur\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Kontrol/test basamağının amacı hangisidir?",
    "options": [
      "Öğrenme ve beceri düzeyini kontrol etmek",
      "Hazırlık malzemelerini toplamak",
      "Öğretimi başlatmak",
      "Öğrenciyi dersten uzaklaştırmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenme ve beceri düzeyini kontrol etmek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Beceri öğretiminde öğrenci hedef düzeye ulaşana kadar hangi yaklaşım önemlidir?",
    "options": [
      "Deneme ve uygulamaların tekrar edilmesi",
      "Tek denemeyle öğretimin bitmesi",
      "Hataların saklanması",
      "Uygulamadan kaçınmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Deneme ve uygulamaların tekrar edilmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Mesleki öğretimde görsel materyal kullanmanın faydalarından biri hangisidir?",
    "options": [
      "İşlemlerin anlaşılmasını ve somutlaştırılmasını desteklemek",
      "Öğrenmeyi zorlaştırmak",
      "Uygulamayı gereksiz kılmak",
      "Öğrenci dikkatini azaltmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlemlerin anlaşılmasını ve somutlaştırılmasını desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Mesleki öğretimde öğreticinin dili nasıl olmalıdır?",
    "options": [
      "Basit, anlaşılır ve öğrencinin düzeyine uygun",
      "Karmaşık ve belirsiz",
      "Yalnız teknik terimlerden oluşan",
      "Öğrenciye göre değişmeyen, anlaşılmaz"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Basit, anlaşılır ve öğrencinin düzeyine uygun\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Mesleki becerilerin öğretiminde işlem basamaklarını göstererek anlatmak hangi yaklaşımı destekler?",
    "options": [
      "Göstererek ve uygulatarak öğrenme",
      "Yalnız soyut anlatım",
      "Salt ezber",
      "Öğrenmeden değerlendirme"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Göstererek ve uygulatarak öğrenme\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Ergenlik döneminde öğretim açısından dikkate alınması gereken özelliklerden biri hangisidir?",
    "options": [
      "Bireysel gelişim ve farklılıkların dikkate alınması",
      "Her öğrencinin aynı hızda geliştiğini varsaymak",
      "Öğrencilerin görüşlerini önemsememek",
      "Duygusal değişimleri yok saymak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bireysel gelişim ve farklılıkların dikkate alınması\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Bir meslek alanında modüller hâlinde düzenlenmiş program hangi kavramdır?",
    "options": [
      "Haftalık ders çizelgesi",
      "Çerçeve öğretim programı",
      "Ders bilgi formları",
      "Modüler program"
    ],
    "answer": 3,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Modüler program\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "Bir meslek alanında mesleğin bilgi, beceri ve iş alışkanlıklarını iş içinde geliştiren kişi kimdir?",
    "options": [
      "Usta öğretici",
      "Kalfa",
      "Çırak",
      "Usta"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Çırak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Bir eğitim öğretim yılı kaç hafta olarak verilmiştir?",
    "options": [
      "32 hafta",
      "36 hafta",
      "40 hafta",
      "44 hafta"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"36 hafta\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Çerçeve öğretim programları kaç yıl olarak tasarlanmıştır?",
    "options": [
      "1 yıl",
      "2 yıl",
      "3 yıl",
      "4 yıl"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"4 yıl\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Haftalık ders çizelgelerinde bulunmayan ders türü hangisidir?",
    "options": [
      "Ortak dersler",
      "Standart dersler",
      "Dal dersleri",
      "Alan dersleri"
    ],
    "answer": 1,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Standart dersler\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "Yıl sonu başarı puanıyla başarılı sayılamayacak ders hangisidir?",
    "options": [
      "Din Kültürü ve Ahlak Bilgisi",
      "Matematik",
      "Mesleki Gelişim",
      "İşletmelerde Mesleki Eğitimi"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İşletmelerde Mesleki Eğitimi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Işletme yıllık planını kimler yapar?",
    "options": [
      "Okulda alan öğretmenleri",
      "Okulda koordinatör müdür yardımcısı",
      "İş yerinde çalışan ustalar",
      "İş yerinde çalışan usta öğreticiler"
    ],
    "answer": 0,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Okulda alan öğretmenleri\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "Işletme yıllık planında bulunmayan bilgi hangisidir?",
    "options": [
      "Modül adı",
      "Ders adı",
      "Sınav soruları",
      "Ders saati"
    ],
    "answer": 2,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Sınav soruları\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "Öğretim programının temel işlevlerinden biri hangisidir?",
    "options": [
      "Eğitim hedefleri, içerik, öğrenme süreçleri ve değerlendirmeyi düzenlemek",
      "Yalnız personel izinlerini düzenlemek",
      "İşletmenin satışlarını belirlemek",
      "Öğrenci devamını tamamen kaldırmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eğitim hedefleri, içerik, öğrenme süreçleri ve değerlendirmeyi düzenlemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "İşletme yıllık planının mesleki eğitim açısından temel amacı hangisidir?",
    "options": [
      "Öğretim programına uygun eğitim faaliyetlerini planlamak",
      "İşletmenin muhasebesini düzenlemek",
      "Öğrencilerin izinlerini belirlemek",
      "Sınavları plansız yapmak"
    ],
    "answer": 0,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Öğretim programına uygun eğitim faaliyetlerini planlamak\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "Mesleki eğitimde okul ve işletme iş birliğinin temel amacı hangisidir?",
    "options": [
      "Eğitim programının iş yerindeki uygulamalarla bütünleşmesini sağlamak",
      "Okul eğitimini ortadan kaldırmak",
      "İşletmenin sorumluluğunu azaltmak",
      "Öğrenciyi değerlendirme dışı bırakmak"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Eğitim programının iş yerindeki uygulamalarla bütünleşmesini sağlamak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Modüler program yaklaşımında öğretim içeriği nasıl düzenlenir?",
    "options": [
      "Modüller ve kazanımlar temelinde yapılandırılır",
      "Yalnız tek bir ders kitabı bölümü olarak",
      "Öğrenciye göre belirsiz biçimde",
      "Sınavlardan bağımsız"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Modüller ve kazanımlar temelinde yapılandırılır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "Ki kalite testinde kalite hangi sonucu sağlamaz?",
    "options": [
      "Müşteri memnuniyeti",
      "Gereksiz kullanım",
      "Üretimde hatasızlık",
      "Güvenli ürün"
    ],
    "answer": 1,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Gereksiz kullanım\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "Belirli bir amaca ulaşabilmek için katlanılan fedakârlıkların parasal tutarı hangi kavramdır?",
    "options": [
      "Ürün",
      "Fayda",
      "İhtiyaç",
      "Maliyet"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Maliyet\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Kalite ve verimliliğin ekonomiye sağladığı faydalar hangi seçenekte topluca verilmiştir?",
    "options": [
      "Maliyeti düşürmesi",
      "Rekabeti geliştirmesi",
      "İsrafı önlemesi",
      "Hepsi"
    ],
    "answer": 3,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Hepsi\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "Bir işletmede hedeflenen kalitenin gerçekleşmesi için sürdürülen faaliyetlerin tamamı hangi kavramdır?",
    "options": [
      "Personel geliştirme",
      "Mali işlemler",
      "Kalite yönetim sistemleri",
      "Bakım onarım"
    ],
    "answer": 2,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Kalite yönetim sistemleri\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "Bir işletmenin mal ve hizmetlerinin diğerlerinden ayırt edilmesini sağlayan ve baskı yoluyla yayımlanabilen işaret hangi kavramdır?",
    "options": [
      "Marka",
      "Coğrafi işaret",
      "Kalite",
      "Patent"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Marka\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Buluş sahibinin buluş konusu ürünü belirli süre üretme, kullanma, satma ve ihraç etme hakkı hangi kavramdır?",
    "options": [
      "Coğrafi işaret",
      "Faydalı model",
      "Marka",
      "Patent"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Patent\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Verimlilik genel olarak hangi ilişkiyi ifade eder?",
    "options": [
      "Üretim çıktılarının kullanılan girdilere oranı",
      "Yalnız çalışan sayısı",
      "Yalnız satış fiyatı",
      "Üretimdeki hata sayısı"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Üretim çıktılarının kullanılan girdilere oranı\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "Kalite yaklaşımının müşteri açısından temel hedeflerinden biri hangisidir?",
    "options": [
      "Müşteri ihtiyaç ve beklentilerini karşılamak",
      "Müşterinin beklentilerini göz ardı etmek",
      "Yalnız üretim hızını artırmak",
      "Ürün güvenliğini azaltmak"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Müşteri ihtiyaç ve beklentilerini karşılamak\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "İsrafın azaltılması kalite ve verimlilik açısından hangi sonucu destekler?",
    "options": [
      "Kaynakların daha etkin kullanılmasını",
      "Maliyetlerin gereksiz artmasını",
      "Üretim kayıplarını artırmayı",
      "Hataları gizlemeyi"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Kaynakların daha etkin kullanılmasını\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "Standartların temel işlevlerinden biri hangisidir?",
    "options": [
      "Ürün, süreç veya hizmetlerde ortak ölçüt ve düzen sağlamak",
      "Ürünlerin tümünü farklılaştırmak",
      "Kalite denetimini kaldırmak",
      "Yalnız fiyat belirlemek"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Ürün, süreç veya hizmetlerde ortak ölçüt ve düzen sağlamak\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "Coğrafi işaret kavramı hangi özellik ile ilişkilidir?",
    "options": [
      "Ürünlerin belirli bir yöreyle bağlantılı niteliği, ünü veya özelliği",
      "Her ürünün patentlenmesi",
      "İşletme personelinin kimliği",
      "Üretim maliyetlerinin hesaplanması"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Ürünlerin belirli bir yöreyle bağlantılı niteliği, ünü veya özelliği\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "Faydalı model kavramı patent ve marka başlıklarıyla birlikte hangi genel konu içinde ele alınır?",
    "options": [
      "Fikri ve sınai haklarla ilgili kavramlar",
      "İş sağlığı",
      "Eğitim psikolojisi",
      "İletişim"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Fikri ve sınai haklarla ilgili kavramlar\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "Kalite yönetim sistemlerinin işletmelerdeki temel işlevlerinden biri hangisidir?",
    "options": [
      "Kaliteyi planlı, sistematik ve sürekli faaliyetlerle güvence altına almak",
      "Kaliteyi yalnız son kontrolde değerlendirmek",
      "İş süreçlerini belirsizleştirmek",
      "Müşteri geri bildirimini dışlamak"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Kaliteyi planlı, sistematik ve sürekli faaliyetlerle güvence altına almak\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "Sürekli iyileştirme yaklaşımı hangi düşünceyi temel alır?",
    "options": [
      "Süreç ve sonuçların düzenli olarak geliştirilmesini",
      "Bir kez belirlenen süreçlerin değişmemesini",
      "Hataların görmezden gelinmesini",
      "İşletme öğrenmesini engellemeyi"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Süreç ve sonuçların düzenli olarak geliştirilmesini\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "Ölçmeye konu olan özelliğin hangi miktarına ne değer verileceğinin belirlenmesi hangi kavramdır?",
    "options": [
      "Birim",
      "Ölçüt",
      "Geçerlik",
      "Ölçme kuralı"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme kuralı\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Taklit önemli bir yere sahip olan öğrenme türü hangisidir?",
    "options": [
      "Koşullanma yoluyla öğrenme",
      "Edimsel koşullanma",
      "Model alarak öğrenme",
      "Bilişsel öğrenme"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Model alarak öğrenme\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Yanıtlayıcının soruları düşünüp hatırlayarak ve yanıtını organize edip yazılı olarak sunduğu sınav türü hangisidir?",
    "options": [
      "Çoktan seçmeli test",
      "Yazılı sınav",
      "Eşleştirme testi",
      "Sözlü sınav"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Yazılı sınav\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ölçme ve değerlendirmenin sağladığı faydalardan biri olmayan hangisidir?",
    "options": [
      "Eğitim süreçlerinin verimliliğinin kontrolü",
      "Öğrenme eksikliklerinin tespiti",
      "Eğiticinin mesleki yeterliliğini artırma",
      "Doğru ve etkili geri bildirim verme"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Eğiticinin mesleki yeterliliğini artırma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Derste anlatılmayan konuları sınavda sorma hangi ölçme ilkesini zayıflatır?",
    "options": [
      "Geçerlik",
      "Güvenirlik",
      "Kullanışlık",
      "Örneklemecilik"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Geçerlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Beceri eğitimi faaliyetlerinden biri olamayacak seçenek hangisidir?",
    "options": [
      "Günlük öğrenci çalışmalarını çizelge üzerine belirlemek",
      "Kazanılan becerileri iş yapma testleri ile sınamak",
      "Güvenlik kural ve tedbirlerine uygun hareket etmek",
      "Araç ve gereçleri tertipli düzenli kullanmamak"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Araç ve gereçleri tertipli düzenli kullanmamak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ölçme nedir?",
    "options": [
      "Bir niteliğin gözlenip sonuçlarının sayı veya sembollerle ifade edilmesi",
      "Ölçme sonuçlarının yargıya dönüştürülmesi",
      "Yalnız sınav yapmak",
      "Öğrenciye geri bildirim vermek"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bir niteliğin gözlenip sonuçlarının sayı veya sembollerle ifade edilmesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ölçüm nedir?",
    "options": [
      "Ölçme işlemi sonunda elde edilen sayı veya sembol",
      "Ölçme aracının hazırlanması",
      "Öğretim hedefi",
      "Sınavın uygulanma süresi"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme işlemi sonunda elde edilen sayı veya sembol\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Bir ölçme aracının en küçük parçası olarak tanımlanan kavram hangisidir?",
    "options": [
      "Ölçüt",
      "Birim",
      "Hüküm",
      "Veri"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Birim\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Birimin özelliklerinden biri olmayan hangisidir?",
    "options": [
      "Eşitlik",
      "Genellik",
      "Kullanışlık",
      "Öznellik"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öznellik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Değerlendirme nedir?",
    "options": [
      "Ölçme sonuçlarını bir ölçütle karşılaştırarak karar veya yorum yapma",
      "Yalnız gözlem yapma",
      "Sayıları kaydetme",
      "Sınav sorusu hazırlama"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme sonuçlarını bir ölçütle karşılaştırarak karar veya yorum yapma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Değerlendirme için ihtiyaç duyulan üç öge hangi seçenekte doğru verilmiştir?",
    "options": [
      "Veri, ölçüt, hüküm",
      "Öğretmen, öğrenci, okul",
      "Soru, cevap, süre",
      "Ders, modül, çizelge"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Veri, ölçüt, hüküm\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ölçme sonucu değerlendirmede hangi öge olarak kullanılır?",
    "options": [
      "Veri",
      "Hüküm",
      "Ölçüt",
      "Karar"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Veri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Değerlendirmeye dayanak oluşturan değer veya referans hangi kavramdır?",
    "options": [
      "Veri",
      "Ölçüt",
      "Hüküm",
      "Ölçüm"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçüt\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ölçme verilerinin ölçütlerle karşılaştırılması sonucunda ulaşılan karar hangi kavramdır?",
    "options": [
      "Birim",
      "Ölçüm",
      "Hüküm",
      "Ölçek"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Hüküm\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ölçme ve değerlendirme arasındaki temel fark hangisidir?",
    "options": [
      "Ölçme sonuç ifade eder, değerlendirme bu sonuçları ölçütle karşılaştırıp yargıya varır",
      "Ölçme öznel, değerlendirme her zaman nesneldir",
      "İkisi aynı işlemdir",
      "Değerlendirme yalnız sayı üretir"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme sonuç ifade eder, değerlendirme bu sonuçları ölçütle karşılaştırıp yargıya varır\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Koşullanma yoluyla öğrenme hangi kuramcıyla ilişkilendirilmiştir?",
    "options": [
      "Pavlov",
      "Piaget",
      "Maslow",
      "Rogers"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Pavlov\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Edimsel koşullanma yaklaşımında davranışların sonuçları hangi açıdan önemlidir?",
    "options": [
      "Ödül ve ceza/sonuçlar davranışın sürmesi veya değişmesinde etkili olabilir",
      "Davranış sonuçlarından bağımsızdır",
      "Yalnız gözlem yeterlidir",
      "Bütün davranışlar doğuştandır"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Ödül ve ceza/sonuçlar davranışın sürmesi veya değişmesinde etkili olabilir\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Model alarak öğrenmede temel süreç hangisidir?",
    "options": [
      "Başka kişilerin davranışlarını gözleyip örnek alma",
      "Yalnız yazılı sınav",
      "Fiziksel büyüme",
      "Rastgele davranış"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Başka kişilerin davranışlarını gözleyip örnek alma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Bilişsel öğrenme kuramları öğrenmeyi hangi süreçlerle açıklamaya çalışır?",
    "options": [
      "Zihinsel süreçler ve bireyin etkin katılımı",
      "Yalnız dış uyarıcılar",
      "Sadece fiziksel refleksler",
      "Yalnız ödül ve ceza"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Zihinsel süreçler ve bireyin etkin katılımı\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Ders başarısı değerlendirme ölçütleri 85-100 aralığı için hangi dereceyi verir?",
    "options": [
      "İyi",
      "Pekiyi",
      "Orta",
      "Geçer"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Pekiyi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ki ders başarı derecelendirmesinde 70,00-84,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Pekiyi",
      "İyi",
      "Orta",
      "Geçer"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İyi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ki ders başarı derecelendirmesinde 60,00-69,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Pekiyi",
      "İyi",
      "Orta",
      "Geçer"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Orta\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ki ders başarı derecelendirmesinde 50,00-59,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Pekiyi",
      "İyi",
      "Orta",
      "Geçer"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Geçer\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ki ders başarı derecelendirmesinde 0-49,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Geçer",
      "Orta",
      "Geçmez",
      "İyi"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Geçmez\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Çoktan seçmeli testler hangi özellikte sorulardan oluşur?",
    "options": [
      "Belirli sayıdaki seçenekten birinin seçilmesini gerektiren",
      "Yanıtın uzun metinle yazıldığı",
      "İki grup ögenin eşleştirildiği",
      "Sözlü anlatım gerektiren"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Belirli sayıdaki seçenekten birinin seçilmesini gerektiren\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Doğru-yanlış testlerinde öğrenciden ne istenir?",
    "options": [
      "Maddeleri doğru veya yanlış olarak sınıflandırması",
      "İki listeyi eşleştirmesi",
      "Uzun yanıt yazması",
      "Sözlü açıklama yapması"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Maddeleri doğru veya yanlış olarak sınıflandırması\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Eşleştirme testlerinde öğrencilerden ne istenir?",
    "options": [
      "İlgili bilgi ögelerini belirli ilişki/ölçüte göre eşleştirmeleri",
      "Bir paragraf yazmaları",
      "Doğru-yanlış işaretlemeleri",
      "Sözlü sunum yapmaları"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İlgili bilgi ögelerini belirli ilişki/ölçüte göre eşleştirmeleri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Sözlü sınavlar hangi beceri ölçülmek istendiğinde özellikle kullanılabilir?",
    "options": [
      "Dinleme ve sözlü yanıt becerileri",
      "Yalnız el becerisi",
      "Yalnız yazım",
      "Sadece fiziksel dayanıklılık"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Dinleme ve sözlü yanıt becerileri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Geçerlik ölçme aracının hangi özelliğini ifade eder?",
    "options": [
      "Ölçmek istediği şeyi doğru ölçmesi",
      "Her uygulamada aynı sonuç vermesi",
      "Uygulama maliyetinin düşük olması",
      "Bilenle bilmeyeni ayırması"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçmek istediği şeyi doğru ölçmesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Güvenirlik ölçme aracının hangi özelliğini ifade eder?",
    "options": [
      "Aynı koşullarda aynı veya yakın sonuçlar vermesi",
      "Ölçmek istediğini doğru ölçmesi",
      "Öğrenciye uygun olması",
      "Kolay okunması"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Aynı koşullarda aynı veya yakın sonuçlar vermesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ayırt edicilik neyi ifade eder?",
    "options": [
      "Bilenle bilmeyeni ayırabilme",
      "Sınavın düşük maliyetli olması",
      "Ölçmenin hedef davranışa uygunluğu",
      "Soruların kolay okunması"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bilenle bilmeyeni ayırabilme\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Kullanışlı bir ölçme aracı hangi özelliklerden birine sahip olmalıdır?",
    "options": [
      "Uygulama ve puanlama kolaylığı",
      "Belirsiz soru ifadeleri",
      "Gereksiz yüksek maliyet",
      "Süre yetersizliği"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Uygulama ve puanlama kolaylığı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "İş (ürün) dosyasında neler yer alabilir?",
    "options": [
      "Temrin, iş, proje, deney ve hizmetlerle ilgili çalışmalar, resimler ve değerlendirme çizelgeleri",
      "Yalnız öğrenci kimlik bilgileri",
      "Yalnız sınav notları",
      "Yalnız devamsızlık kayıtları"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Temrin, iş, proje, deney ve hizmetlerle ilgili çalışmalar, resimler ve değerlendirme çizelgeleri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İş dosyasındaki çalışmalara ait değerlendirme çizelgesi kimler tarafından imzalanır?",
    "options": [
      "Usta öğretici/eğitici personel, koordinatör öğretmen ve öğrenci",
      "Yalnız öğrenci",
      "Yalnız işletme müdürü",
      "Yalnız veli"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Usta öğretici/eğitici personel, koordinatör öğretmen ve öğrenci\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İşletmeler yönünden gizlilik taşıyan işlere ait dokümanlar nasıl ele alınır?",
    "options": [
      "İş dosyasına konulmaz; ilgili işletme tarafından saklanır ve gerektiğinde sınav komisyonuna sunulur",
      "Her öğrenciyle paylaşılır",
      "İş dosyasına zorunlu olarak konur",
      "İmha edilir"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İş dosyasına konulmaz; ilgili işletme tarafından saklanır ve gerektiğinde sınav komisyonuna sunulur\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "Işletmede beceri eğitimi değerlendirme ölçütlerinden biri hangisidir?",
    "options": [
      "İşi yapabilme becerisi",
      "İş yerinden uzak durma",
      "Araçları düzensiz kullanma",
      "Güvenlik kurallarını ihlal"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İşi yapabilme becerisi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Işletmede beceri sınavının puan dağılımı hangi oranla verilmiştir?",
    "options": [
      "%70 sınav, %30 iş dosyası",
      "%80 sınav, %20 iş dosyası",
      "%50 sınav, %50 iş dosyası",
      "%60 sınav, %40 iş dosyası"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"%80 sınav, %20 iş dosyası\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "İşletmede beceri eğitimi değerlendirmesinde aşağıdakilerden hangisi dikkate alınır?",
    "options": [
      "Görevlerin yerine getirilmesi ve araç gerecin uygun kullanılması",
      "İş güvenliği kurallarını önemsememek",
      "İş dosyasını boş bırakmak",
      "Görevleri sürekli ertelemek"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Görevlerin yerine getirilmesi ve araç gerecin uygun kullanılması\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ölçme ve değerlendirme sonuçlarının eğitim sürecinde kullanılmasının faydalarından biri hangisidir?",
    "options": [
      "Eksik öğrenmeleri belirleyip öğretimi yeniden planlamak",
      "Öğrenci geri bildirimini engellemek",
      "Hedefleri gizlemek",
      "Yanlış öğrenmeleri kalıcılaştırmak"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Eksik öğrenmeleri belirleyip öğretimi yeniden planlamak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Eğitimde ölçme ve değerlendirme hedef davranışların gerçekleşme düzeyini belirlemek için neden önemlidir?",
    "options": [
      "Öğrenme eksiklikleri ve gelişim alanları hakkında bilgi sağlar",
      "Eğitim sürecini tamamen kaldırır",
      "Yalnız öğrenci sıralaması yapar",
      "Öğretim yöntemini değişmez kılar"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Öğrenme eksiklikleri ve gelişim alanları hakkında bilgi sağlar\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "İyi bir ölçme aracında soru sayısının az olmaması hangi niteliği desteklemek için önerilir?",
    "options": [
      "Güvenirlik",
      "Geçerlik",
      "Kullanışlık",
      "Birim"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Güvenirlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Sınav süresinin bilen öğrencilerin bütün soruları cevaplandırmasına yetecek olması hangi niteliği destekler?",
    "options": [
      "Güvenirlik",
      "Coğrafi işaret",
      "Ölçüt",
      "Birim"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Güvenirlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Puanlamanın objektif olması, farklı puanlayıcıların aynı yanıtlara aynı puanı vermesi hangi niteliği destekler?",
    "options": [
      "Güvenirlik",
      "Geçerlik",
      "Güdü",
      "Ölçüm"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Güvenirlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Derste hedeflenmeyen davranışların ölçülmesi hangi ölçme niteliğini zayıflatabilir?",
    "options": [
      "Geçerlik",
      "Kullanışlık",
      "Birim eşitliği",
      "Genellik"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Geçerlik\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "Bir sorunun herkes tarafından doğru yanıtlanması veya hiç kimse tarafından yanıtlanamaması hangi niteliğin düşük olmasıyla ilişkilendirilir?",
    "options": [
      "Ayırt edicilik",
      "Kullanışlık",
      "Güvenirlik",
      "Genellik"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ayırt edicilik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ölçme aracının kolay okunması ve yanlış anlamaya fırsat vermemesi hangi niteliği destekler?",
    "options": [
      "Kullanışlık",
      "Ayırt edicilik",
      "Ölçüm",
      "Hüküm"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kullanışlık\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Ürün dosyasının eğitim sürecinde kullanılmasının amaçlarından biri hangisidir?",
    "options": [
      "Öğrencinin mesleki çalışmalarını ve gelişimini kanıtlarla izlemek",
      "Öğrencinin çalışmalarını saklamamak",
      "Yalnız teorik sınav yapmak",
      "Öğrenci becerilerini ölçmemek"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrencinin mesleki çalışmalarını ve gelişimini kanıtlarla izlemek\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "Beceri eğitiminde değerlendirme ölçütlerinin önceden açıkça belirtilmesi hangi sonucu destekler?",
    "options": [
      "Objektiflik ve ortak değerlendirme anlayışı",
      "Ölçütlerin belirsizleşmesi",
      "Puanlamanın rastgele yapılması",
      "Öğrenci bilgisinin gizlenmesi"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Objektiflik ve ortak değerlendirme anlayışı\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "BİLGİ: 3308 sayılı Mesleki Eğitim Kanunu'na göre bir mesleğin bilgi, beceri ve iş alışkanlıklarını kazanmış ve işi ustanın gözetiminde kabul edilebilir standartlarda yapabilen kişiye ne denir?",
    "options": [
      "Kalfa",
      "Çırak",
      "Teknisyen",
      "Aday çırak"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Kalfa\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: 3308 sayılı Mesleki Eğitim Kanunu'na göre bir mesleğin bilgi, beceri ve iş alışkanlıklarını kazanmış ve işi ustanın gözetiminde kabul edilebilir standartlarda yapabilen kişiye ne denir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Çırak",
      "Teknisyen",
      "Aday çırak",
      "Kalfa"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Kalfa\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: 3308 sayılı Mesleki Eğitim Kanunu'na göre bir mesleğin bilgi, beceri ve iş alışkanlıklarını kazanmış ve işi ustanın gözetiminde kabul edilebilir standartlarda yapabilen kişiye ne denir?",
    "options": [
      "Teknisyen",
      "Aday çırak",
      "Kalfa",
      "Çırak"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Kalfa\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? 3308 sayılı Mesleki Eğitim Kanunu'na göre bir mesleğin bilgi, beceri ve iş alışkanlıklarını kazanmış ve işi ustanın gözetiminde kabul edilebilir standartlarda yapabilen kişiye ne denir?",
    "options": [
      "Aday çırak",
      "Kalfa",
      "Çırak",
      "Teknisyen"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Kalfa\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: Mesleki eğitim merkezlerine kayıt için aşağıdakilerden hangisi belirtilen şartlardan değildir?",
    "options": [
      "Bir işletme ile sözleşme imzalamak",
      "Sağlık durumunun mesleğe elverişli olması",
      "18 yaşını bitirmemiş olmak",
      "En az ortaokul veya imam hatip ortaokulu mezunu olmak"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"18 yaşını bitirmemiş olmak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Mesleki eğitim merkezlerine kayıt için aşağıdakilerden hangisi belirtilen şartlardan değildir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Sağlık durumunun mesleğe elverişli olması",
      "18 yaşını bitirmemiş olmak",
      "En az ortaokul veya imam hatip ortaokulu mezunu olmak",
      "Bir işletme ile sözleşme imzalamak"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"18 yaşını bitirmemiş olmak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Mesleki eğitim merkezlerine kayıt için aşağıdakilerden hangisi belirtilen şartlardan değildir?",
    "options": [
      "18 yaşını bitirmemiş olmak",
      "En az ortaokul veya imam hatip ortaokulu mezunu olmak",
      "Bir işletme ile sözleşme imzalamak",
      "Sağlık durumunun mesleğe elverişli olması"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"18 yaşını bitirmemiş olmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Mesleki eğitim merkezlerine kayıt için aşağıdakilerden hangisi belirtilen şartlardan değildir?",
    "options": [
      "En az ortaokul veya imam hatip ortaokulu mezunu olmak",
      "Bir işletme ile sözleşme imzalamak",
      "Sağlık durumunun mesleğe elverişli olması",
      "18 yaşını bitirmemiş olmak"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"18 yaşını bitirmemiş olmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Kanuna göre aday çırak, çırak ve işletmelerde mesleki eğitim gören öğrencilere tatil aylarında verilen ücretli izin süresi testte hangi seçenek olarak verilmiştir?",
    "options": [
      "25 gün",
      "14 gün",
      "16 gün",
      "1 ay"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"1 ay\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: Kanuna göre aday çırak, çırak ve işletmelerde mesleki eğitim gören öğrencilere tatil aylarında verilen ücretli izin süresi testte hangi seçenek olarak verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "14 gün",
      "16 gün",
      "1 ay",
      "25 gün"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"1 ay\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Kanuna göre aday çırak, çırak ve işletmelerde mesleki eğitim gören öğrencilere tatil aylarında verilen ücretli izin süresi testte hangi seçenek olarak verilmiştir?",
    "options": [
      "16 gün",
      "1 ay",
      "25 gün",
      "14 gün"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"1 ay\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Kanuna göre aday çırak, çırak ve işletmelerde mesleki eğitim gören öğrencilere tatil aylarında verilen ücretli izin süresi testte hangi seçenek olarak verilmiştir?",
    "options": [
      "1 ay",
      "25 gün",
      "14 gün",
      "16 gün"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"1 ay\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: aday çırak ve çırağa yaşına uygun asgari ücretin hangi oranından aşağı ücret ödenemeyeceği sorulmaktadır?",
    "options": [
      "%25",
      "%15",
      "%50",
      "%30"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"%30\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: aday çırak ve çırağa yaşına uygun asgari ücretin hangi oranından aşağı ücret ödenemeyeceği sorulmaktadır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "%15",
      "%50",
      "%30",
      "%25"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"%30\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: aday çırak ve çırağa yaşına uygun asgari ücretin hangi oranından aşağı ücret ödenemeyeceği sorulmaktadır?",
    "options": [
      "%50",
      "%30",
      "%25",
      "%15"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"%30\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? aday çırak ve çırağa yaşına uygun asgari ücretin hangi oranından aşağı ücret ödenemeyeceği sorulmaktadır?",
    "options": [
      "%30",
      "%25",
      "%15",
      "%50"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"%30\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: İşletmelerde mesleki eğitim/staj sözleşmesi testte hangi taraflar arasında gösterilmiştir?",
    "options": [
      "İşveren ve öğrenci reşit değilse velisi",
      "İşveren, okul müdürü ve usta öğretici",
      "Okul müdürü, öğrenci ve işveren",
      "Öğrenci, işveren ve usta öğretici"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Okul müdürü, öğrenci ve işveren\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: İşletmelerde mesleki eğitim/staj sözleşmesi testte hangi taraflar arasında gösterilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İşveren, okul müdürü ve usta öğretici",
      "Okul müdürü, öğrenci ve işveren",
      "Öğrenci, işveren ve usta öğretici",
      "İşveren ve öğrenci reşit değilse velisi"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Okul müdürü, öğrenci ve işveren\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İşletmelerde mesleki eğitim/staj sözleşmesi testte hangi taraflar arasında gösterilmiştir?",
    "options": [
      "Okul müdürü, öğrenci ve işveren",
      "Öğrenci, işveren ve usta öğretici",
      "İşveren ve öğrenci reşit değilse velisi",
      "İşveren, okul müdürü ve usta öğretici"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Okul müdürü, öğrenci ve işveren\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İşletmelerde mesleki eğitim/staj sözleşmesi testte hangi taraflar arasında gösterilmiştir?",
    "options": [
      "Öğrenci, işveren ve usta öğretici",
      "İşveren ve öğrenci reşit değilse velisi",
      "İşveren, okul müdürü ve usta öğretici",
      "Okul müdürü, öğrenci ve işveren"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Okul müdürü, öğrenci ve işveren\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: dördüncü veya daha üst seviye MYK Mesleki Yeterlilik Belgesine sahip olanların hangi sınavına alınacağı belirtilmiştir?",
    "options": [
      "Kalfalık",
      "Usta öğreticilik",
      "İş yeri açma",
      "Ustalık"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Ustalık\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: dördüncü veya daha üst seviye MYK Mesleki Yeterlilik Belgesine sahip olanların hangi sınavına alınacağı belirtilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Usta öğreticilik",
      "İş yeri açma",
      "Ustalık",
      "Kalfalık"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Ustalık\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: dördüncü veya daha üst seviye MYK Mesleki Yeterlilik Belgesine sahip olanların hangi sınavına alınacağı belirtilmiştir?",
    "options": [
      "İş yeri açma",
      "Ustalık",
      "Kalfalık",
      "Usta öğreticilik"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Ustalık\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? dördüncü veya daha üst seviye MYK Mesleki Yeterlilik Belgesine sahip olanların hangi sınavına alınacağı belirtilmiştir?",
    "options": [
      "Ustalık",
      "Kalfalık",
      "Usta öğreticilik",
      "İş yeri açma"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Ustalık\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: Usta öğreticilik belgesi kursu başarıyla tamamlandığında verilir ve hangi belge/diplomayla birlikte kullanılır?",
    "options": [
      "Yalnız kalfalık belgesiyle",
      "Yalnız MYK belgesiyle",
      "Yalnız lise diplomasıyla",
      "Ustalık, iş yeri açma belgesi veya en az ön lisans diplomasıyla"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ustalık, iş yeri açma belgesi veya en az ön lisans diplomasıyla\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Usta öğreticilik belgesi kursu başarıyla tamamlandığında verilir ve hangi belge/diplomayla birlikte kullanılır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız MYK belgesiyle",
      "Yalnız lise diplomasıyla",
      "Ustalık, iş yeri açma belgesi veya en az ön lisans diplomasıyla",
      "Yalnız kalfalık belgesiyle"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ustalık, iş yeri açma belgesi veya en az ön lisans diplomasıyla\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Usta öğreticilik belgesi kursu başarıyla tamamlandığında verilir ve hangi belge/diplomayla birlikte kullanılır?",
    "options": [
      "Yalnız lise diplomasıyla",
      "Ustalık, iş yeri açma belgesi veya en az ön lisans diplomasıyla",
      "Yalnız kalfalık belgesiyle",
      "Yalnız MYK belgesiyle"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ustalık, iş yeri açma belgesi veya en az ön lisans diplomasıyla\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Usta öğreticilik belgesi kursu başarıyla tamamlandığında verilir ve hangi belge/diplomayla birlikte kullanılır?",
    "options": [
      "Ustalık, iş yeri açma belgesi veya en az ön lisans diplomasıyla",
      "Yalnız kalfalık belgesiyle",
      "Yalnız MYK belgesiyle",
      "Yalnız lise diplomasıyla"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ustalık, iş yeri açma belgesi veya en az ön lisans diplomasıyla\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: önceki öğrenmelerin tanınması hangi öğrenme yollarıyla edinilmiş bilgi, beceri ve yetkinlikleri kapsar?",
    "options": [
      "Yalnız uzaktan öğrenme",
      "Yalnız örgün öğrenme",
      "Yalnız iş yerindeki öğrenme",
      "Örgün, yaygın ve/veya serbest öğrenme"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Örgün, yaygın ve/veya serbest öğrenme\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: önceki öğrenmelerin tanınması hangi öğrenme yollarıyla edinilmiş bilgi, beceri ve yetkinlikleri kapsar. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız örgün öğrenme",
      "Yalnız iş yerindeki öğrenme",
      "Örgün, yaygın ve/veya serbest öğrenme",
      "Yalnız uzaktan öğrenme"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Örgün, yaygın ve/veya serbest öğrenme\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: önceki öğrenmelerin tanınması hangi öğrenme yollarıyla edinilmiş bilgi, beceri ve yetkinlikleri kapsar?",
    "options": [
      "Yalnız iş yerindeki öğrenme",
      "Örgün, yaygın ve/veya serbest öğrenme",
      "Yalnız uzaktan öğrenme",
      "Yalnız örgün öğrenme"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Örgün, yaygın ve/veya serbest öğrenme\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? önceki öğrenmelerin tanınması hangi öğrenme yollarıyla edinilmiş bilgi, beceri ve yetkinlikleri kapsar?",
    "options": [
      "Örgün, yaygın ve/veya serbest öğrenme",
      "Yalnız uzaktan öğrenme",
      "Yalnız örgün öğrenme",
      "Yalnız iş yerindeki öğrenme"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Örgün, yaygın ve/veya serbest öğrenme\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: önceki öğrenmelerin tanınması kapsamında kalfalık/ustalık sınavları hangi sıklıkta yapılabileceği belirtilmiştir?",
    "options": [
      "Yılda en az bir kez",
      "Yılda iki defadan az olmamak üzere",
      "Her üç yılda bir",
      "Yalnız haziran ayında"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Yılda iki defadan az olmamak üzere\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: önceki öğrenmelerin tanınması kapsamında kalfalık/ustalık sınavları hangi sıklıkta yapılabileceği belirtilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yılda iki defadan az olmamak üzere",
      "Her üç yılda bir",
      "Yalnız haziran ayında",
      "Yılda en az bir kez"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Yılda iki defadan az olmamak üzere\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: önceki öğrenmelerin tanınması kapsamında kalfalık/ustalık sınavları hangi sıklıkta yapılabileceği belirtilmiştir?",
    "options": [
      "Her üç yılda bir",
      "Yalnız haziran ayında",
      "Yılda en az bir kez",
      "Yılda iki defadan az olmamak üzere"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Yılda iki defadan az olmamak üzere\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? önceki öğrenmelerin tanınması kapsamında kalfalık/ustalık sınavları hangi sıklıkta yapılabileceği belirtilmiştir?",
    "options": [
      "Yalnız haziran ayında",
      "Yılda en az bir kez",
      "Yılda iki defadan az olmamak üzere",
      "Her üç yılda bir"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Yılda iki defadan az olmamak üzere\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: önceki öğrenmelerin tanınması kapsamında sınav başvurusu için belirtilen yaş şartı nedir?",
    "options": [
      "20 yaşını bitirmiş olmak",
      "En az 22 yaşını bitirmiş olmak",
      "25 yaşını bitirmiş olmak",
      "18 yaşını bitirmiş olmak"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"En az 22 yaşını bitirmiş olmak\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: önceki öğrenmelerin tanınması kapsamında sınav başvurusu için belirtilen yaş şartı nedir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "En az 22 yaşını bitirmiş olmak",
      "25 yaşını bitirmiş olmak",
      "18 yaşını bitirmiş olmak",
      "20 yaşını bitirmiş olmak"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"En az 22 yaşını bitirmiş olmak\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: önceki öğrenmelerin tanınması kapsamında sınav başvurusu için belirtilen yaş şartı nedir?",
    "options": [
      "25 yaşını bitirmiş olmak",
      "18 yaşını bitirmiş olmak",
      "20 yaşını bitirmiş olmak",
      "En az 22 yaşını bitirmiş olmak"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"En az 22 yaşını bitirmiş olmak\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? önceki öğrenmelerin tanınması kapsamında sınav başvurusu için belirtilen yaş şartı nedir?",
    "options": [
      "18 yaşını bitirmiş olmak",
      "20 yaşını bitirmiş olmak",
      "En az 22 yaşını bitirmiş olmak",
      "25 yaşını bitirmiş olmak"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"En az 22 yaşını bitirmiş olmak\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: Mesleki eğitim işletmesinde beceri eğitiminden sorumlu personel olarak kim görevlendirilebilir?",
    "options": [
      "Yalnız işletme sahibi",
      "Yalnız okul müdürü",
      "Herhangi bir çalışan",
      "Ustalık veya mesleki yeterliğe sahip ve iş pedagojisi eğitimi görmüş usta öğretici/eğitici personel"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ustalık veya mesleki yeterliğe sahip ve iş pedagojisi eğitimi görmüş usta öğretici/eğitici personel\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Mesleki eğitim işletmesinde beceri eğitiminden sorumlu personel olarak kim görevlendirilebilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız okul müdürü",
      "Herhangi bir çalışan",
      "Ustalık veya mesleki yeterliğe sahip ve iş pedagojisi eğitimi görmüş usta öğretici/eğitici personel",
      "Yalnız işletme sahibi"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ustalık veya mesleki yeterliğe sahip ve iş pedagojisi eğitimi görmüş usta öğretici/eğitici personel\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Mesleki eğitim işletmesinde beceri eğitiminden sorumlu personel olarak kim görevlendirilebilir?",
    "options": [
      "Herhangi bir çalışan",
      "Ustalık veya mesleki yeterliğe sahip ve iş pedagojisi eğitimi görmüş usta öğretici/eğitici personel",
      "Yalnız işletme sahibi",
      "Yalnız okul müdürü"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ustalık veya mesleki yeterliğe sahip ve iş pedagojisi eğitimi görmüş usta öğretici/eğitici personel\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Mesleki eğitim işletmesinde beceri eğitiminden sorumlu personel olarak kim görevlendirilebilir?",
    "options": [
      "Ustalık veya mesleki yeterliğe sahip ve iş pedagojisi eğitimi görmüş usta öğretici/eğitici personel",
      "Yalnız işletme sahibi",
      "Yalnız okul müdürü",
      "Herhangi bir çalışan"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ustalık veya mesleki yeterliğe sahip ve iş pedagojisi eğitimi görmüş usta öğretici/eğitici personel\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İşletme, öğrencilerin devam ve hastalık izinlerini belirtilen şekilde ne kadar sürede okula bildirir?",
    "options": [
      "Dönem sonunda",
      "Aynı gün",
      "İki iş günü içinde",
      "Bir hafta içinde"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"İki iş günü içinde\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: İşletme, öğrencilerin devam ve hastalık izinlerini belirtilen şekilde ne kadar sürede okula bildirir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Aynı gün",
      "İki iş günü içinde",
      "Bir hafta içinde",
      "Dönem sonunda"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"İki iş günü içinde\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İşletme, öğrencilerin devam ve hastalık izinlerini belirtilen şekilde ne kadar sürede okula bildirir?",
    "options": [
      "İki iş günü içinde",
      "Bir hafta içinde",
      "Dönem sonunda",
      "Aynı gün"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"İki iş günü içinde\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İşletme, öğrencilerin devam ve hastalık izinlerini belirtilen şekilde ne kadar sürede okula bildirir?",
    "options": [
      "Bir hafta içinde",
      "Dönem sonunda",
      "Aynı gün",
      "İki iş günü içinde"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"İki iş günü içinde\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: İşletmede mesleki eğitim için gerekli temrin malzemesi ve araç gereci temin etme sorumluluğu kime verilmiştir?",
    "options": [
      "Öğrenciye",
      "İşletmeye",
      "Velilere",
      "Yalnız okul müdürlüğüne"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İşletmeye\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: İşletmede mesleki eğitim için gerekli temrin malzemesi ve araç gereci temin etme sorumluluğu kime verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İşletmeye",
      "Velilere",
      "Yalnız okul müdürlüğüne",
      "Öğrenciye"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İşletmeye\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İşletmede mesleki eğitim için gerekli temrin malzemesi ve araç gereci temin etme sorumluluğu kime verilmiştir?",
    "options": [
      "Velilere",
      "Yalnız okul müdürlüğüne",
      "Öğrenciye",
      "İşletmeye"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşletmeye\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İşletmede mesleki eğitim için gerekli temrin malzemesi ve araç gereci temin etme sorumluluğu kime verilmiştir?",
    "options": [
      "Yalnız okul müdürlüğüne",
      "Öğrenciye",
      "İşletmeye",
      "Velilere"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşletmeye\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Mesleki eğitim sözleşmesinde ücret ve diğer olanakları kapsayan sözleşme hangi tarafların imzasıyla düzenlenir?",
    "options": [
      "Öğrenci/veli, okul müdürü ve işletme",
      "Yalnız işletme ve okul müdürü",
      "Yalnız veli ve okul",
      "Yalnız öğrenci ve usta öğretici"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Öğrenci/veli, okul müdürü ve işletme\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: Mesleki eğitim sözleşmesinde ücret ve diğer olanakları kapsayan sözleşme hangi tarafların imzasıyla düzenlenir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız işletme ve okul müdürü",
      "Yalnız veli ve okul",
      "Yalnız öğrenci ve usta öğretici",
      "Öğrenci/veli, okul müdürü ve işletme"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Öğrenci/veli, okul müdürü ve işletme\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Mesleki eğitim sözleşmesinde ücret ve diğer olanakları kapsayan sözleşme hangi tarafların imzasıyla düzenlenir?",
    "options": [
      "Yalnız veli ve okul",
      "Yalnız öğrenci ve usta öğretici",
      "Öğrenci/veli, okul müdürü ve işletme",
      "Yalnız işletme ve okul müdürü"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Öğrenci/veli, okul müdürü ve işletme\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Mesleki eğitim sözleşmesinde ücret ve diğer olanakları kapsayan sözleşme hangi tarafların imzasıyla düzenlenir?",
    "options": [
      "Yalnız öğrenci ve usta öğretici",
      "Öğrenci/veli, okul müdürü ve işletme",
      "Yalnız işletme ve okul müdürü",
      "Yalnız veli ve okul"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Öğrenci/veli, okul müdürü ve işletme\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: Aşağıdakilerden hangisi ki Ahilik törenlerinden biri değildir?",
    "options": [
      "Yol kardeşliği töreni",
      "Şed kuşanma töreni",
      "Yiğitbaşılık töreni",
      "Yol sahibi olma töreni"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Yiğitbaşılık töreni\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Aşağıdakilerden hangisi ki Ahilik törenlerinden biri değildir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Şed kuşanma töreni",
      "Yiğitbaşılık töreni",
      "Yol sahibi olma töreni",
      "Yol kardeşliği töreni"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Yiğitbaşılık töreni\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Aşağıdakilerden hangisi ki Ahilik törenlerinden biri değildir?",
    "options": [
      "Yiğitbaşılık töreni",
      "Yol sahibi olma töreni",
      "Yol kardeşliği töreni",
      "Şed kuşanma töreni"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Yiğitbaşılık töreni\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Aşağıdakilerden hangisi ki Ahilik törenlerinden biri değildir?",
    "options": [
      "Yol sahibi olma töreni",
      "Yol kardeşliği töreni",
      "Şed kuşanma töreni",
      "Yiğitbaşılık töreni"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Yiğitbaşılık töreni\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Ahilik eğitim sisteminin özelliklerinden biri hangisidir?",
    "options": [
      "Eğitim iş dışı etkinliklerle sınırlıdır",
      "Eğitimden herkes ücretsiz yararlanır",
      "Eğitim yalnız şehir merkezlerinde yapılır",
      "Eğitim yalnız kısa süreli olur"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Eğitimden herkes ücretsiz yararlanır\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Ahilik eğitim sisteminin özelliklerinden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Eğitimden herkes ücretsiz yararlanır",
      "Eğitim yalnız şehir merkezlerinde yapılır",
      "Eğitim yalnız kısa süreli olur",
      "Eğitim iş dışı etkinliklerle sınırlıdır"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Eğitimden herkes ücretsiz yararlanır\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ahilik eğitim sisteminin özelliklerinden biri hangisidir?",
    "options": [
      "Eğitim yalnız şehir merkezlerinde yapılır",
      "Eğitim yalnız kısa süreli olur",
      "Eğitim iş dışı etkinliklerle sınırlıdır",
      "Eğitimden herkes ücretsiz yararlanır"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Eğitimden herkes ücretsiz yararlanır\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ahilik eğitim sisteminin özelliklerinden biri hangisidir?",
    "options": [
      "Eğitim yalnız kısa süreli olur",
      "Eğitim iş dışı etkinliklerle sınırlıdır",
      "Eğitimden herkes ücretsiz yararlanır",
      "Eğitim yalnız şehir merkezlerinde yapılır"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Eğitimden herkes ücretsiz yararlanır\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Ahilik kültürünün oluşmasında en önemli paya sahip unsur hangi seçenek olarak verilmiştir?",
    "options": [
      "Eleman eksikliği",
      "Ahlaklı ve nitelikli personel ihtiyacı",
      "Kazancın önemi",
      "Yalnız dinî temeller"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Ahlaklı ve nitelikli personel ihtiyacı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Ahilik kültürünün oluşmasında en önemli paya sahip unsur hangi seçenek olarak verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ahlaklı ve nitelikli personel ihtiyacı",
      "Kazancın önemi",
      "Yalnız dinî temeller",
      "Eleman eksikliği"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Ahlaklı ve nitelikli personel ihtiyacı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ahilik kültürünün oluşmasında en önemli paya sahip unsur hangi seçenek olarak verilmiştir?",
    "options": [
      "Kazancın önemi",
      "Yalnız dinî temeller",
      "Eleman eksikliği",
      "Ahlaklı ve nitelikli personel ihtiyacı"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Ahlaklı ve nitelikli personel ihtiyacı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ahilik kültürünün oluşmasında en önemli paya sahip unsur hangi seçenek olarak verilmiştir?",
    "options": [
      "Yalnız dinî temeller",
      "Eleman eksikliği",
      "Ahlaklı ve nitelikli personel ihtiyacı",
      "Kazancın önemi"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Ahlaklı ve nitelikli personel ihtiyacı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: kökeni Ahilik teşkilatına dayanan günümüz kurumlarından biri olmadığı belirtilen hangisidir?",
    "options": [
      "Esnaf Kefalet Kooperatifleri",
      "Halk Bankası",
      "Barolar Birliği",
      "Bağ-Kur"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Barolar Birliği\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: kökeni Ahilik teşkilatına dayanan günümüz kurumlarından biri olmadığı belirtilen hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Halk Bankası",
      "Barolar Birliği",
      "Bağ-Kur",
      "Esnaf Kefalet Kooperatifleri"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Barolar Birliği\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: kökeni Ahilik teşkilatına dayanan günümüz kurumlarından biri olmadığı belirtilen hangisidir?",
    "options": [
      "Barolar Birliği",
      "Bağ-Kur",
      "Esnaf Kefalet Kooperatifleri",
      "Halk Bankası"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Barolar Birliği\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? kökeni Ahilik teşkilatına dayanan günümüz kurumlarından biri olmadığı belirtilen hangisidir?",
    "options": [
      "Bağ-Kur",
      "Esnaf Kefalet Kooperatifleri",
      "Halk Bankası",
      "Barolar Birliği"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Barolar Birliği\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Ahilik eğitim sisteminde yer almadığı belirtilen seçenek hangisidir?",
    "options": [
      "Yaygın eğitim amaçlanır",
      "Eğitim yalnızca şehir merkezlerinde ücretli olarak verilir",
      "Eğitim ömür boyu sürer",
      "İş başı eğitim iş dışı eğitimle bütünleşir"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Eğitim yalnızca şehir merkezlerinde ücretli olarak verilir\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Ahilik eğitim sisteminde yer almadığı belirtilen seçenek hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Eğitim yalnızca şehir merkezlerinde ücretli olarak verilir",
      "Eğitim ömür boyu sürer",
      "İş başı eğitim iş dışı eğitimle bütünleşir",
      "Yaygın eğitim amaçlanır"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Eğitim yalnızca şehir merkezlerinde ücretli olarak verilir\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ahilik eğitim sisteminde yer almadığı belirtilen seçenek hangisidir?",
    "options": [
      "Eğitim ömür boyu sürer",
      "İş başı eğitim iş dışı eğitimle bütünleşir",
      "Yaygın eğitim amaçlanır",
      "Eğitim yalnızca şehir merkezlerinde ücretli olarak verilir"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Eğitim yalnızca şehir merkezlerinde ücretli olarak verilir\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ahilik eğitim sisteminde yer almadığı belirtilen seçenek hangisidir?",
    "options": [
      "İş başı eğitim iş dışı eğitimle bütünleşir",
      "Yaygın eğitim amaçlanır",
      "Eğitim yalnızca şehir merkezlerinde ücretli olarak verilir",
      "Eğitim ömür boyu sürer"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Eğitim yalnızca şehir merkezlerinde ücretli olarak verilir\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: ki Ahilik testinde Ahiliğin kişisel gelişimine katkılarından biri olmadığı belirtilen seçenek hangisidir?",
    "options": [
      "Öfkelenmeme",
      "Sabırlı olma",
      "Güler yüzlü olma",
      "Emeğin kutsallığı"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Emeğin kutsallığı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: ki Ahilik testinde Ahiliğin kişisel gelişimine katkılarından biri olmadığı belirtilen seçenek hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Sabırlı olma",
      "Güler yüzlü olma",
      "Emeğin kutsallığı",
      "Öfkelenmeme"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Emeğin kutsallığı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: ki Ahilik testinde Ahiliğin kişisel gelişimine katkılarından biri olmadığı belirtilen seçenek hangisidir?",
    "options": [
      "Güler yüzlü olma",
      "Emeğin kutsallığı",
      "Öfkelenmeme",
      "Sabırlı olma"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Emeğin kutsallığı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? ki Ahilik testinde Ahiliğin kişisel gelişimine katkılarından biri olmadığı belirtilen seçenek hangisidir?",
    "options": [
      "Emeğin kutsallığı",
      "Öfkelenmeme",
      "Sabırlı olma",
      "Güler yüzlü olma"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Emeğin kutsallığı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Etik kavramı temel olarak hangi konuları sorgulayan felsefi disiplin olarak açıklanır?",
    "options": [
      "Ahlaki nitelikleri ve doğru-yanlış, iyi-kötü davranışları",
      "Yalnız ekonomik kazancı",
      "Yalnız hukuki yaptırımları",
      "Teknik üretim süreçlerini"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Ahlaki nitelikleri ve doğru-yanlış, iyi-kötü davranışları\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Etik kavramı temel olarak hangi konuları sorgulayan felsefi disiplin olarak açıklanır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız ekonomik kazancı",
      "Yalnız hukuki yaptırımları",
      "Teknik üretim süreçlerini",
      "Ahlaki nitelikleri ve doğru-yanlış, iyi-kötü davranışları"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Ahlaki nitelikleri ve doğru-yanlış, iyi-kötü davranışları\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Etik kavramı temel olarak hangi konuları sorgulayan felsefi disiplin olarak açıklanır?",
    "options": [
      "Yalnız hukuki yaptırımları",
      "Teknik üretim süreçlerini",
      "Ahlaki nitelikleri ve doğru-yanlış, iyi-kötü davranışları",
      "Yalnız ekonomik kazancı"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Ahlaki nitelikleri ve doğru-yanlış, iyi-kötü davranışları\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Etik kavramı temel olarak hangi konuları sorgulayan felsefi disiplin olarak açıklanır?",
    "options": [
      "Teknik üretim süreçlerini",
      "Ahlaki nitelikleri ve doğru-yanlış, iyi-kötü davranışları",
      "Yalnız ekonomik kazancı",
      "Yalnız hukuki yaptırımları"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Ahlaki nitelikleri ve doğru-yanlış, iyi-kötü davranışları\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Meslek etiği nasıl ifade edilir?",
    "options": [
      "Genel ahlak kuralları ve mesleki uzmanlık ölçütlerini kapsayan yazılı olmayan kurallar",
      "İşletmenin satış politikası",
      "Yalnız işverenin talimatları",
      "Yalnız yazılı hukuk kuralları"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Genel ahlak kuralları ve mesleki uzmanlık ölçütlerini kapsayan yazılı olmayan kurallar\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Meslek etiği nasıl ifade edilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İşletmenin satış politikası",
      "Yalnız işverenin talimatları",
      "Yalnız yazılı hukuk kuralları",
      "Genel ahlak kuralları ve mesleki uzmanlık ölçütlerini kapsayan yazılı olmayan kurallar"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Genel ahlak kuralları ve mesleki uzmanlık ölçütlerini kapsayan yazılı olmayan kurallar\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Meslek etiği nasıl ifade edilir?",
    "options": [
      "Yalnız işverenin talimatları",
      "Yalnız yazılı hukuk kuralları",
      "Genel ahlak kuralları ve mesleki uzmanlık ölçütlerini kapsayan yazılı olmayan kurallar",
      "İşletmenin satış politikası"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Genel ahlak kuralları ve mesleki uzmanlık ölçütlerini kapsayan yazılı olmayan kurallar\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Meslek etiği nasıl ifade edilir?",
    "options": [
      "Yalnız yazılı hukuk kuralları",
      "Genel ahlak kuralları ve mesleki uzmanlık ölçütlerini kapsayan yazılı olmayan kurallar",
      "İşletmenin satış politikası",
      "Yalnız işverenin talimatları"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Genel ahlak kuralları ve mesleki uzmanlık ölçütlerini kapsayan yazılı olmayan kurallar\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Evrensel meslek ilkelerinin başında hangisi yer alır?",
    "options": [
      "Kâr",
      "Gizli bilgi paylaşımı",
      "Rekabet",
      "Dürüstlük"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Dürüstlük\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Evrensel meslek ilkelerinin başında hangisi yer alır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Gizli bilgi paylaşımı",
      "Rekabet",
      "Dürüstlük",
      "Kâr"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Dürüstlük\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Evrensel meslek ilkelerinin başında hangisi yer alır?",
    "options": [
      "Rekabet",
      "Dürüstlük",
      "Kâr",
      "Gizli bilgi paylaşımı"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Dürüstlük\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Evrensel meslek ilkelerinin başında hangisi yer alır?",
    "options": [
      "Dürüstlük",
      "Kâr",
      "Gizli bilgi paylaşımı",
      "Rekabet"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Dürüstlük\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Meslek etiğinde tarafsızlık neyi gerektirir?",
    "options": [
      "Kişisel çıkarı öncelemeyi",
      "Kararların dış çıkar baskılarından etkilenmemesini",
      "Her durumda yöneticinin kararını kabul etmeyi",
      "Bilgileri herkesle paylaşmayı"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Kararların dış çıkar baskılarından etkilenmemesini\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Meslek etiğinde tarafsızlık neyi gerektirir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Kararların dış çıkar baskılarından etkilenmemesini",
      "Her durumda yöneticinin kararını kabul etmeyi",
      "Bilgileri herkesle paylaşmayı",
      "Kişisel çıkarı öncelemeyi"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Kararların dış çıkar baskılarından etkilenmemesini\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Meslek etiğinde tarafsızlık neyi gerektirir?",
    "options": [
      "Her durumda yöneticinin kararını kabul etmeyi",
      "Bilgileri herkesle paylaşmayı",
      "Kişisel çıkarı öncelemeyi",
      "Kararların dış çıkar baskılarından etkilenmemesini"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Kararların dış çıkar baskılarından etkilenmemesini\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Meslek etiğinde tarafsızlık neyi gerektirir?",
    "options": [
      "Bilgileri herkesle paylaşmayı",
      "Kişisel çıkarı öncelemeyi",
      "Kararların dış çıkar baskılarından etkilenmemesini",
      "Her durumda yöneticinin kararını kabul etmeyi"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Kararların dış çıkar baskılarından etkilenmemesini\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Mesleki gizlilik ilkesi hangi davranışı gerektirir?",
    "options": [
      "Görev veya yetki olmadıkça mesleki bilgileri paylaşmamak",
      "Her bilgiyi sosyal medyada paylaşmak",
      "Bilgileri rakiplere aktarmak",
      "Bilgileri kişisel çıkar için kullanmak"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Görev veya yetki olmadıkça mesleki bilgileri paylaşmamak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Mesleki gizlilik ilkesi hangi davranışı gerektirir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Her bilgiyi sosyal medyada paylaşmak",
      "Bilgileri rakiplere aktarmak",
      "Bilgileri kişisel çıkar için kullanmak",
      "Görev veya yetki olmadıkça mesleki bilgileri paylaşmamak"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Görev veya yetki olmadıkça mesleki bilgileri paylaşmamak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Mesleki gizlilik ilkesi hangi davranışı gerektirir?",
    "options": [
      "Bilgileri rakiplere aktarmak",
      "Bilgileri kişisel çıkar için kullanmak",
      "Görev veya yetki olmadıkça mesleki bilgileri paylaşmamak",
      "Her bilgiyi sosyal medyada paylaşmak"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Görev veya yetki olmadıkça mesleki bilgileri paylaşmamak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Mesleki gizlilik ilkesi hangi davranışı gerektirir?",
    "options": [
      "Bilgileri kişisel çıkar için kullanmak",
      "Görev veya yetki olmadıkça mesleki bilgileri paylaşmamak",
      "Her bilgiyi sosyal medyada paylaşmak",
      "Bilgileri rakiplere aktarmak"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Görev veya yetki olmadıkça mesleki bilgileri paylaşmamak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Ahilikte ‘dışa ait kapalı altı emir’ arasında hangisi bulunur?",
    "options": [
      "Tevazu",
      "Dilin yalan ve iftiraya kapalı olması",
      "Merhamet",
      "Cömertlik"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Dilin yalan ve iftiraya kapalı olması\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Ahilikte ‘dışa ait kapalı altı emir’ arasında hangisi bulunur. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Dilin yalan ve iftiraya kapalı olması",
      "Merhamet",
      "Cömertlik",
      "Tevazu"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Dilin yalan ve iftiraya kapalı olması\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ahilikte ‘dışa ait kapalı altı emir’ arasında hangisi bulunur?",
    "options": [
      "Merhamet",
      "Cömertlik",
      "Tevazu",
      "Dilin yalan ve iftiraya kapalı olması"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Dilin yalan ve iftiraya kapalı olması\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ahilikte ‘dışa ait kapalı altı emir’ arasında hangisi bulunur?",
    "options": [
      "Cömertlik",
      "Tevazu",
      "Dilin yalan ve iftiraya kapalı olması",
      "Merhamet"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Dilin yalan ve iftiraya kapalı olması\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Ahilikte ‘içe ait açık’ özelliklerden biri hangisidir?",
    "options": [
      "Cömertlik",
      "İftira",
      "Dedikodu",
      "Hırs"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Cömertlik\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Ahilikte ‘içe ait açık’ özelliklerden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İftira",
      "Dedikodu",
      "Hırs",
      "Cömertlik"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Cömertlik\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ahilikte ‘içe ait açık’ özelliklerden biri hangisidir?",
    "options": [
      "Dedikodu",
      "Hırs",
      "Cömertlik",
      "İftira"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Cömertlik\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ahilikte ‘içe ait açık’ özelliklerden biri hangisidir?",
    "options": [
      "Hırs",
      "Cömertlik",
      "İftira",
      "Dedikodu"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Cömertlik\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Ahilikte çıraklık süresini tamamlayanların kalfalığa yükseltilmesi için yapılan tören hangisi olarak adlandırılır?",
    "options": [
      "Yol atası töreni",
      "Yol sahibi olma töreni",
      "Şed kuşanma töreni",
      "Yiğitbaşılık töreni"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Yol sahibi olma töreni\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: Ahilikte çıraklık süresini tamamlayanların kalfalığa yükseltilmesi için yapılan tören hangisi olarak adlandırılır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yol sahibi olma töreni",
      "Şed kuşanma töreni",
      "Yiğitbaşılık töreni",
      "Yol atası töreni"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Yol sahibi olma töreni\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ahilikte çıraklık süresini tamamlayanların kalfalığa yükseltilmesi için yapılan tören hangisi olarak adlandırılır?",
    "options": [
      "Şed kuşanma töreni",
      "Yiğitbaşılık töreni",
      "Yol atası töreni",
      "Yol sahibi olma töreni"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Yol sahibi olma töreni\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ahilikte çıraklık süresini tamamlayanların kalfalığa yükseltilmesi için yapılan tören hangisi olarak adlandırılır?",
    "options": [
      "Yiğitbaşılık töreni",
      "Yol atası töreni",
      "Yol sahibi olma töreni",
      "Şed kuşanma töreni"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Yol sahibi olma töreni\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: Ahilikte ustalığa geçiş ve ustalık yetkisinin simgesi olan tören hangisidir?",
    "options": [
      "Yol kardeşliği",
      "Şed kuşanma",
      "Yol atası",
      "Yamaklık"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Şed kuşanma\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Ahilikte ustalığa geçiş ve ustalık yetkisinin simgesi olan tören hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Şed kuşanma",
      "Yol atası",
      "Yamaklık",
      "Yol kardeşliği"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Şed kuşanma\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ahilikte ustalığa geçiş ve ustalık yetkisinin simgesi olan tören hangisidir?",
    "options": [
      "Yol atası",
      "Yamaklık",
      "Yol kardeşliği",
      "Şed kuşanma"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Şed kuşanma\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ahilikte ustalığa geçiş ve ustalık yetkisinin simgesi olan tören hangisidir?",
    "options": [
      "Yamaklık",
      "Yol kardeşliği",
      "Şed kuşanma",
      "Yol atası"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Şed kuşanma\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Ahilik eğitiminde iş başında eğitim kimler tarafından verilirdi?",
    "options": [
      "Yalnız devlet memurları",
      "Yalnız aileler",
      "Yalnız din görevlileri",
      "Kalfalar ve ustalar"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Kalfalar ve ustalar\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Ahilik eğitiminde iş başında eğitim kimler tarafından verilirdi. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız aileler",
      "Yalnız din görevlileri",
      "Kalfalar ve ustalar",
      "Yalnız devlet memurları"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Kalfalar ve ustalar\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ahilik eğitiminde iş başında eğitim kimler tarafından verilirdi?",
    "options": [
      "Yalnız din görevlileri",
      "Kalfalar ve ustalar",
      "Yalnız devlet memurları",
      "Yalnız aileler"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Kalfalar ve ustalar\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ahilik eğitiminde iş başında eğitim kimler tarafından verilirdi?",
    "options": [
      "Kalfalar ve ustalar",
      "Yalnız devlet memurları",
      "Yalnız aileler",
      "Yalnız din görevlileri"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Kalfalar ve ustalar\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Çalışanların sosyal, ruhsal ve bedensel sağlıklarını korumayı, çalışma koşullarını sağlığa uygun hâle getirmeyi amaçlayan bilim dalı hangisidir?",
    "options": [
      "Çalışan nörolojisi",
      "İş yeri sağlığı",
      "Mobing",
      "İş sağlığı ve güvenliği"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İş sağlığı ve güvenliği\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Çalışanların sosyal, ruhsal ve bedensel sağlıklarını korumayı, çalışma koşullarını sağlığa uygun hâle getirmeyi amaçlayan bilim dalı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İş yeri sağlığı",
      "Mobing",
      "İş sağlığı ve güvenliği",
      "Çalışan nörolojisi"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İş sağlığı ve güvenliği\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Çalışanların sosyal, ruhsal ve bedensel sağlıklarını korumayı, çalışma koşullarını sağlığa uygun hâle getirmeyi amaçlayan bilim dalı hangisidir?",
    "options": [
      "Mobing",
      "İş sağlığı ve güvenliği",
      "Çalışan nörolojisi",
      "İş yeri sağlığı"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İş sağlığı ve güvenliği\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Çalışanların sosyal, ruhsal ve bedensel sağlıklarını korumayı, çalışma koşullarını sağlığa uygun hâle getirmeyi amaçlayan bilim dalı hangisidir?",
    "options": [
      "İş sağlığı ve güvenliği",
      "Çalışan nörolojisi",
      "İş yeri sağlığı",
      "Mobing"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İş sağlığı ve güvenliği\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İş yerinde çalışanın başına sivri cisim düşmesi gibi kazalara karşı hangi kişisel koruyucu donanım kullanılmalıdır?",
    "options": [
      "İş elbisesi",
      "Baret",
      "Eldiven",
      "Koruyucu gözlük"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Baret\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: İş yerinde çalışanın başına sivri cisim düşmesi gibi kazalara karşı hangi kişisel koruyucu donanım kullanılmalıdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Baret",
      "Eldiven",
      "Koruyucu gözlük",
      "İş elbisesi"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Baret\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İş yerinde çalışanın başına sivri cisim düşmesi gibi kazalara karşı hangi kişisel koruyucu donanım kullanılmalıdır?",
    "options": [
      "Eldiven",
      "Koruyucu gözlük",
      "İş elbisesi",
      "Baret"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Baret\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İş yerinde çalışanın başına sivri cisim düşmesi gibi kazalara karşı hangi kişisel koruyucu donanım kullanılmalıdır?",
    "options": [
      "Koruyucu gözlük",
      "İş elbisesi",
      "Baret",
      "Eldiven"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Baret\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: Yetersiz havalandırma ve yüksek sıcaklık ortamında aşağıdakilerden hangisinin gerçekleşmesi beklenmez?",
    "options": [
      "Nabız yükselmesi",
      "Terlemenin artması",
      "Dikkatin azalması",
      "Verimliliğin artması"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Verimliliğin artması\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Yetersiz havalandırma ve yüksek sıcaklık ortamında aşağıdakilerden hangisinin gerçekleşmesi beklenmez. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Terlemenin artması",
      "Dikkatin azalması",
      "Verimliliğin artması",
      "Nabız yükselmesi"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Verimliliğin artması\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Yetersiz havalandırma ve yüksek sıcaklık ortamında aşağıdakilerden hangisinin gerçekleşmesi beklenmez?",
    "options": [
      "Dikkatin azalması",
      "Verimliliğin artması",
      "Nabız yükselmesi",
      "Terlemenin artması"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Verimliliğin artması\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Yetersiz havalandırma ve yüksek sıcaklık ortamında aşağıdakilerden hangisinin gerçekleşmesi beklenmez?",
    "options": [
      "Verimliliğin artması",
      "Nabız yükselmesi",
      "Terlemenin artması",
      "Dikkatin azalması"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Verimliliğin artması\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: meslek hastalıklarının sınıflandırmasında sayılmaması gereken etken hangisidir?",
    "options": [
      "Meteorolojik etken",
      "Biyolojik etken",
      "Psikolojik etken",
      "Kimyasal etken"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Meteorolojik etken\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: meslek hastalıklarının sınıflandırmasında sayılmaması gereken etken hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Biyolojik etken",
      "Psikolojik etken",
      "Kimyasal etken",
      "Meteorolojik etken"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Meteorolojik etken\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: meslek hastalıklarının sınıflandırmasında sayılmaması gereken etken hangisidir?",
    "options": [
      "Psikolojik etken",
      "Kimyasal etken",
      "Meteorolojik etken",
      "Biyolojik etken"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Meteorolojik etken\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? meslek hastalıklarının sınıflandırmasında sayılmaması gereken etken hangisidir?",
    "options": [
      "Kimyasal etken",
      "Meteorolojik etken",
      "Biyolojik etken",
      "Psikolojik etken"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Meteorolojik etken\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: iş kazalarının önlenemez oranı hangi seçenek olarak verilmiştir?",
    "options": [
      "%12",
      "%20",
      "%2",
      "%10"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"%2\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: iş kazalarının önlenemez oranı hangi seçenek olarak verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "%20",
      "%2",
      "%10",
      "%12"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"%2\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: iş kazalarının önlenemez oranı hangi seçenek olarak verilmiştir?",
    "options": [
      "%2",
      "%10",
      "%12",
      "%20"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"%2\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? iş kazalarının önlenemez oranı hangi seçenek olarak verilmiştir?",
    "options": [
      "%10",
      "%12",
      "%20",
      "%2"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"%2\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: iş kazalarının meydana gelmesinde birinci sırada yer alan neden hangisidir?",
    "options": [
      "Nedeni bulunamayan sebepler",
      "Tehlikeli davranış",
      "Tecrübesizlik",
      "Fiziksel güç yetersizliği"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeli davranış\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: iş kazalarının meydana gelmesinde birinci sırada yer alan neden hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Tehlikeli davranış",
      "Tecrübesizlik",
      "Fiziksel güç yetersizliği",
      "Nedeni bulunamayan sebepler"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeli davranış\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: iş kazalarının meydana gelmesinde birinci sırada yer alan neden hangisidir?",
    "options": [
      "Tecrübesizlik",
      "Fiziksel güç yetersizliği",
      "Nedeni bulunamayan sebepler",
      "Tehlikeli davranış"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeli davranış\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? iş kazalarının meydana gelmesinde birinci sırada yer alan neden hangisidir?",
    "options": [
      "Fiziksel güç yetersizliği",
      "Nedeni bulunamayan sebepler",
      "Tehlikeli davranış",
      "Tecrübesizlik"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeli davranış\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: iş sağlığı ve güvenliği ile ilgili kuruluşlardan biri olmayan hangisidir?",
    "options": [
      "İş Sağlığı ve Güvenliği Genel Müdürlüğü",
      "Mesleki Yeterlilik Kurumu",
      "Orman Genel Müdürlüğü",
      "Sosyal Güvenlik Kurumu Başkanlığı"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Orman Genel Müdürlüğü\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: iş sağlığı ve güvenliği ile ilgili kuruluşlardan biri olmayan hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Mesleki Yeterlilik Kurumu",
      "Orman Genel Müdürlüğü",
      "Sosyal Güvenlik Kurumu Başkanlığı",
      "İş Sağlığı ve Güvenliği Genel Müdürlüğü"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Orman Genel Müdürlüğü\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: iş sağlığı ve güvenliği ile ilgili kuruluşlardan biri olmayan hangisidir?",
    "options": [
      "Orman Genel Müdürlüğü",
      "Sosyal Güvenlik Kurumu Başkanlığı",
      "İş Sağlığı ve Güvenliği Genel Müdürlüğü",
      "Mesleki Yeterlilik Kurumu"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Orman Genel Müdürlüğü\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? iş sağlığı ve güvenliği ile ilgili kuruluşlardan biri olmayan hangisidir?",
    "options": [
      "Sosyal Güvenlik Kurumu Başkanlığı",
      "İş Sağlığı ve Güvenliği Genel Müdürlüğü",
      "Mesleki Yeterlilik Kurumu",
      "Orman Genel Müdürlüğü"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Orman Genel Müdürlüğü\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: Solunum sistemini korumak için kullanılan kişisel koruyucu donanım hangisidir?",
    "options": [
      "Koruyucu gözlük",
      "Baret",
      "Eldiven",
      "Maske"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Maske\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Solunum sistemini korumak için kullanılan kişisel koruyucu donanım hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Baret",
      "Eldiven",
      "Maske",
      "Koruyucu gözlük"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Maske\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Solunum sistemini korumak için kullanılan kişisel koruyucu donanım hangisidir?",
    "options": [
      "Eldiven",
      "Maske",
      "Koruyucu gözlük",
      "Baret"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Maske\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Solunum sistemini korumak için kullanılan kişisel koruyucu donanım hangisidir?",
    "options": [
      "Maske",
      "Koruyucu gözlük",
      "Baret",
      "Eldiven"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Maske\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İş kazalarında dolaylı zarar olarak sayılmayan seçenek hangisidir?",
    "options": [
      "Tazminat maliyetleri",
      "Mahkeme masrafları",
      "Kaybolan iş günü ve iş gücü",
      "Sipariş kayıpları"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tazminat maliyetleri\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: İş kazalarında dolaylı zarar olarak sayılmayan seçenek hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Mahkeme masrafları",
      "Kaybolan iş günü ve iş gücü",
      "Sipariş kayıpları",
      "Tazminat maliyetleri"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tazminat maliyetleri\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İş kazalarında dolaylı zarar olarak sayılmayan seçenek hangisidir?",
    "options": [
      "Kaybolan iş günü ve iş gücü",
      "Sipariş kayıpları",
      "Tazminat maliyetleri",
      "Mahkeme masrafları"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tazminat maliyetleri\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İş kazalarında dolaylı zarar olarak sayılmayan seçenek hangisidir?",
    "options": [
      "Sipariş kayıpları",
      "Tazminat maliyetleri",
      "Mahkeme masrafları",
      "Kaybolan iş günü ve iş gücü"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tazminat maliyetleri\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: İş sağlığı ve güvenliği uygulamalarının temel amaçlarından biri hangisidir?",
    "options": [
      "Koruyucu tedbirleri azaltmak",
      "Çalışanların sağlığını ve güvenliğini korumak",
      "Üretimi her koşulda hızlandırmak",
      "Riskleri çalışanlara bırakmak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Çalışanların sağlığını ve güvenliğini korumak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: İş sağlığı ve güvenliği uygulamalarının temel amaçlarından biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Çalışanların sağlığını ve güvenliğini korumak",
      "Üretimi her koşulda hızlandırmak",
      "Riskleri çalışanlara bırakmak",
      "Koruyucu tedbirleri azaltmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Çalışanların sağlığını ve güvenliğini korumak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İş sağlığı ve güvenliği uygulamalarının temel amaçlarından biri hangisidir?",
    "options": [
      "Üretimi her koşulda hızlandırmak",
      "Riskleri çalışanlara bırakmak",
      "Koruyucu tedbirleri azaltmak",
      "Çalışanların sağlığını ve güvenliğini korumak"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Çalışanların sağlığını ve güvenliğini korumak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İş sağlığı ve güvenliği uygulamalarının temel amaçlarından biri hangisidir?",
    "options": [
      "Riskleri çalışanlara bırakmak",
      "Koruyucu tedbirleri azaltmak",
      "Çalışanların sağlığını ve güvenliğini korumak",
      "Üretimi her koşulda hızlandırmak"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Çalışanların sağlığını ve güvenliğini korumak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Risk değerlendirmesinin temel amacı hangisidir?",
    "options": [
      "Tehlikeleri belirlemek, riskleri analiz edip kontrol tedbirlerini planlamak",
      "Yalnız kaza sonrası rapor yazmak",
      "Çalışan sayısını azaltmak",
      "İşin maliyetini artırmak"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeleri belirlemek, riskleri analiz edip kontrol tedbirlerini planlamak\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: Risk değerlendirmesinin temel amacı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız kaza sonrası rapor yazmak",
      "Çalışan sayısını azaltmak",
      "İşin maliyetini artırmak",
      "Tehlikeleri belirlemek, riskleri analiz edip kontrol tedbirlerini planlamak"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeleri belirlemek, riskleri analiz edip kontrol tedbirlerini planlamak\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Risk değerlendirmesinin temel amacı hangisidir?",
    "options": [
      "Çalışan sayısını azaltmak",
      "İşin maliyetini artırmak",
      "Tehlikeleri belirlemek, riskleri analiz edip kontrol tedbirlerini planlamak",
      "Yalnız kaza sonrası rapor yazmak"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeleri belirlemek, riskleri analiz edip kontrol tedbirlerini planlamak\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Risk değerlendirmesinin temel amacı hangisidir?",
    "options": [
      "İşin maliyetini artırmak",
      "Tehlikeleri belirlemek, riskleri analiz edip kontrol tedbirlerini planlamak",
      "Yalnız kaza sonrası rapor yazmak",
      "Çalışan sayısını azaltmak"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeleri belirlemek, riskleri analiz edip kontrol tedbirlerini planlamak\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: İş yerinde tehlike ve risk kavramları arasındaki doğru ilişki hangisidir?",
    "options": [
      "İkisi tamamen aynı kavramdır",
      "Risk yalnız gerçekleşmiş kazadır",
      "Tehlike yalnız çalışan davranışıdır",
      "Tehlike zarar verme potansiyeli, risk bu potansiyelin gerçekleşme olasılığı ve etkisiyle ilgili durumdur"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlike zarar verme potansiyeli, risk bu potansiyelin gerçekleşme olasılığı ve etkisiyle ilgili durumdur\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: İş yerinde tehlike ve risk kavramları arasındaki doğru ilişki hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Risk yalnız gerçekleşmiş kazadır",
      "Tehlike yalnız çalışan davranışıdır",
      "Tehlike zarar verme potansiyeli, risk bu potansiyelin gerçekleşme olasılığı ve etkisiyle ilgili durumdur",
      "İkisi tamamen aynı kavramdır"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlike zarar verme potansiyeli, risk bu potansiyelin gerçekleşme olasılığı ve etkisiyle ilgili durumdur\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İş yerinde tehlike ve risk kavramları arasındaki doğru ilişki hangisidir?",
    "options": [
      "Tehlike yalnız çalışan davranışıdır",
      "Tehlike zarar verme potansiyeli, risk bu potansiyelin gerçekleşme olasılığı ve etkisiyle ilgili durumdur",
      "İkisi tamamen aynı kavramdır",
      "Risk yalnız gerçekleşmiş kazadır"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlike zarar verme potansiyeli, risk bu potansiyelin gerçekleşme olasılığı ve etkisiyle ilgili durumdur\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İş yerinde tehlike ve risk kavramları arasındaki doğru ilişki hangisidir?",
    "options": [
      "Tehlike zarar verme potansiyeli, risk bu potansiyelin gerçekleşme olasılığı ve etkisiyle ilgili durumdur",
      "İkisi tamamen aynı kavramdır",
      "Risk yalnız gerçekleşmiş kazadır",
      "Tehlike yalnız çalışan davranışıdır"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlike zarar verme potansiyeli, risk bu potansiyelin gerçekleşme olasılığı ve etkisiyle ilgili durumdur\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: Kişisel koruyucu donanım kullanımıyla ilgili uygun yaklaşım hangisidir?",
    "options": [
      "KKD isteğe bağlıdır",
      "KKD yalnız kaza sonrası kullanılır",
      "Riskin kaynağında önlenmesi ve toplu korunma önlemleri öncelikli, KKD uygun tamamlayıcı önlemdir",
      "KKD tüm önlemlerin yerine geçer"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Riskin kaynağında önlenmesi ve toplu korunma önlemleri öncelikli, KKD uygun tamamlayıcı önlemdir\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Kişisel koruyucu donanım kullanımıyla ilgili uygun yaklaşım hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "KKD yalnız kaza sonrası kullanılır",
      "Riskin kaynağında önlenmesi ve toplu korunma önlemleri öncelikli, KKD uygun tamamlayıcı önlemdir",
      "KKD tüm önlemlerin yerine geçer",
      "KKD isteğe bağlıdır"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Riskin kaynağında önlenmesi ve toplu korunma önlemleri öncelikli, KKD uygun tamamlayıcı önlemdir\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Kişisel koruyucu donanım kullanımıyla ilgili uygun yaklaşım hangisidir?",
    "options": [
      "Riskin kaynağında önlenmesi ve toplu korunma önlemleri öncelikli, KKD uygun tamamlayıcı önlemdir",
      "KKD tüm önlemlerin yerine geçer",
      "KKD isteğe bağlıdır",
      "KKD yalnız kaza sonrası kullanılır"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Riskin kaynağında önlenmesi ve toplu korunma önlemleri öncelikli, KKD uygun tamamlayıcı önlemdir\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Kişisel koruyucu donanım kullanımıyla ilgili uygun yaklaşım hangisidir?",
    "options": [
      "KKD tüm önlemlerin yerine geçer",
      "KKD isteğe bağlıdır",
      "KKD yalnız kaza sonrası kullanılır",
      "Riskin kaynağında önlenmesi ve toplu korunma önlemleri öncelikli, KKD uygun tamamlayıcı önlemdir"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Riskin kaynağında önlenmesi ve toplu korunma önlemleri öncelikli, KKD uygun tamamlayıcı önlemdir\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İş yerindeki acil durum planı ne amaçla hazırlanır?",
    "options": [
      "İş tanımlarını kaldırmak",
      "Acil durumlarda yapılacak işlemleri, görevleri ve müdahale düzenini belirlemek",
      "Yalnız personel izinlerini düzenlemek",
      "Üretim fiyatlarını belirlemek"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Acil durumlarda yapılacak işlemleri, görevleri ve müdahale düzenini belirlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: İş yerindeki acil durum planı ne amaçla hazırlanır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Acil durumlarda yapılacak işlemleri, görevleri ve müdahale düzenini belirlemek",
      "Yalnız personel izinlerini düzenlemek",
      "Üretim fiyatlarını belirlemek",
      "İş tanımlarını kaldırmak"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Acil durumlarda yapılacak işlemleri, görevleri ve müdahale düzenini belirlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İş yerindeki acil durum planı ne amaçla hazırlanır?",
    "options": [
      "Yalnız personel izinlerini düzenlemek",
      "Üretim fiyatlarını belirlemek",
      "İş tanımlarını kaldırmak",
      "Acil durumlarda yapılacak işlemleri, görevleri ve müdahale düzenini belirlemek"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Acil durumlarda yapılacak işlemleri, görevleri ve müdahale düzenini belirlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İş yerindeki acil durum planı ne amaçla hazırlanır?",
    "options": [
      "Üretim fiyatlarını belirlemek",
      "İş tanımlarını kaldırmak",
      "Acil durumlarda yapılacak işlemleri, görevleri ve müdahale düzenini belirlemek",
      "Yalnız personel izinlerini düzenlemek"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Acil durumlarda yapılacak işlemleri, görevleri ve müdahale düzenini belirlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: Ergonominin temel amacı hangisidir?",
    "options": [
      "İşi ve çalışma ortamını insanın özelliklerine uygun düzenlemek",
      "İnsanı işin koşullarına zorlamak",
      "Yalnız makine hızını artırmak",
      "İş ortamındaki molaları kaldırmak"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"İşi ve çalışma ortamını insanın özelliklerine uygun düzenlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: Ergonominin temel amacı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İnsanı işin koşullarına zorlamak",
      "Yalnız makine hızını artırmak",
      "İş ortamındaki molaları kaldırmak",
      "İşi ve çalışma ortamını insanın özelliklerine uygun düzenlemek"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"İşi ve çalışma ortamını insanın özelliklerine uygun düzenlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ergonominin temel amacı hangisidir?",
    "options": [
      "Yalnız makine hızını artırmak",
      "İş ortamındaki molaları kaldırmak",
      "İşi ve çalışma ortamını insanın özelliklerine uygun düzenlemek",
      "İnsanı işin koşullarına zorlamak"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"İşi ve çalışma ortamını insanın özelliklerine uygun düzenlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ergonominin temel amacı hangisidir?",
    "options": [
      "İş ortamındaki molaları kaldırmak",
      "İşi ve çalışma ortamını insanın özelliklerine uygun düzenlemek",
      "İnsanı işin koşullarına zorlamak",
      "Yalnız makine hızını artırmak"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"İşi ve çalışma ortamını insanın özelliklerine uygun düzenlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: Aşağıdakilerden hangisi iletişim tanımlarından değildir?",
    "options": [
      "Kaynak ile hedef arasında haber sürecidir",
      "Duygu, düşünce ve tutumların sözlü, yazılı veya sözsüz aktarımıdır",
      "Ölçme değerlendirme sürecidir",
      "Bilgi alışverişidir"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Ölçme değerlendirme sürecidir\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: Aşağıdakilerden hangisi iletişim tanımlarından değildir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Duygu, düşünce ve tutumların sözlü, yazılı veya sözsüz aktarımıdır",
      "Ölçme değerlendirme sürecidir",
      "Bilgi alışverişidir",
      "Kaynak ile hedef arasında haber sürecidir"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Ölçme değerlendirme sürecidir\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Aşağıdakilerden hangisi iletişim tanımlarından değildir?",
    "options": [
      "Ölçme değerlendirme sürecidir",
      "Bilgi alışverişidir",
      "Kaynak ile hedef arasında haber sürecidir",
      "Duygu, düşünce ve tutumların sözlü, yazılı veya sözsüz aktarımıdır"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Ölçme değerlendirme sürecidir\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Aşağıdakilerden hangisi iletişim tanımlarından değildir?",
    "options": [
      "Bilgi alışverişidir",
      "Kaynak ile hedef arasında haber sürecidir",
      "Duygu, düşünce ve tutumların sözlü, yazılı veya sözsüz aktarımıdır",
      "Ölçme değerlendirme sürecidir"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Ölçme değerlendirme sürecidir\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: İletişim sürecinin temel ögeleri hangi seçenekle doğru verilmiştir?",
    "options": [
      "Organizasyon-Ölçme-Kaynak-Alıcı",
      "Alıcı-Mesaj-Yönetim-Değerlendirici",
      "Kaynak-Mesaj-Alıcı-Algı-Geribildirim",
      "Mesaj-Yönetici-Alıcı-Değerlendirme"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kaynak-Mesaj-Alıcı-Algı-Geribildirim\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: İletişim sürecinin temel ögeleri hangi seçenekle doğru verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Alıcı-Mesaj-Yönetim-Değerlendirici",
      "Kaynak-Mesaj-Alıcı-Algı-Geribildirim",
      "Mesaj-Yönetici-Alıcı-Değerlendirme",
      "Organizasyon-Ölçme-Kaynak-Alıcı"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kaynak-Mesaj-Alıcı-Algı-Geribildirim\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İletişim sürecinin temel ögeleri hangi seçenekle doğru verilmiştir?",
    "options": [
      "Kaynak-Mesaj-Alıcı-Algı-Geribildirim",
      "Mesaj-Yönetici-Alıcı-Değerlendirme",
      "Organizasyon-Ölçme-Kaynak-Alıcı",
      "Alıcı-Mesaj-Yönetim-Değerlendirici"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kaynak-Mesaj-Alıcı-Algı-Geribildirim\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İletişim sürecinin temel ögeleri hangi seçenekle doğru verilmiştir?",
    "options": [
      "Mesaj-Yönetici-Alıcı-Değerlendirme",
      "Organizasyon-Ölçme-Kaynak-Alıcı",
      "Alıcı-Mesaj-Yönetim-Değerlendirici",
      "Kaynak-Mesaj-Alıcı-Algı-Geribildirim"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kaynak-Mesaj-Alıcı-Algı-Geribildirim\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İletişimi engelleyen, kaynağın gönderdiği mesaj ile alıcının aldığı mesaj arasında fark oluşturan faktörler hangi kavramla ifade edilir?",
    "options": [
      "Gürültü",
      "Dönüt",
      "Kodlama",
      "Kod açma"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Gürültü\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: İletişimi engelleyen, kaynağın gönderdiği mesaj ile alıcının aldığı mesaj arasında fark oluşturan faktörler hangi kavramla ifade edilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Dönüt",
      "Kodlama",
      "Kod açma",
      "Gürültü"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Gürültü\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İletişimi engelleyen, kaynağın gönderdiği mesaj ile alıcının aldığı mesaj arasında fark oluşturan faktörler hangi kavramla ifade edilir?",
    "options": [
      "Kodlama",
      "Kod açma",
      "Gürültü",
      "Dönüt"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gürültü\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İletişimi engelleyen, kaynağın gönderdiği mesaj ile alıcının aldığı mesaj arasında fark oluşturan faktörler hangi kavramla ifade edilir?",
    "options": [
      "Kod açma",
      "Gürültü",
      "Dönüt",
      "Kodlama"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gürültü\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İşletmelerde beceri eğitimi gören öğrenci ve usta öğretici ilişkisi açısından en fazla kullanılan iletişim türü hangisidir?",
    "options": [
      "Sözsüz iletişim",
      "Sözlü iletişim",
      "Yazılı iletişim",
      "Güdüleyici iletişim"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Sözlü iletişim\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: İşletmelerde beceri eğitimi gören öğrenci ve usta öğretici ilişkisi açısından en fazla kullanılan iletişim türü hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Sözlü iletişim",
      "Yazılı iletişim",
      "Güdüleyici iletişim",
      "Sözsüz iletişim"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Sözlü iletişim\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İşletmelerde beceri eğitimi gören öğrenci ve usta öğretici ilişkisi açısından en fazla kullanılan iletişim türü hangisidir?",
    "options": [
      "Yazılı iletişim",
      "Güdüleyici iletişim",
      "Sözsüz iletişim",
      "Sözlü iletişim"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Sözlü iletişim\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İşletmelerde beceri eğitimi gören öğrenci ve usta öğretici ilişkisi açısından en fazla kullanılan iletişim türü hangisidir?",
    "options": [
      "Güdüleyici iletişim",
      "Sözsüz iletişim",
      "Sözlü iletişim",
      "Yazılı iletişim"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Sözlü iletişim\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: Göz temasından kaçınma hangi duyguyla ilişkilendirilmiştir?",
    "options": [
      "Suçluluk veya bir şey saklama",
      "İş birliğine hazır olma",
      "Kendine güven",
      "Rahatlık ve açıklık"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Suçluluk veya bir şey saklama\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: Göz temasından kaçınma hangi duyguyla ilişkilendirilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İş birliğine hazır olma",
      "Kendine güven",
      "Rahatlık ve açıklık",
      "Suçluluk veya bir şey saklama"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Suçluluk veya bir şey saklama\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Göz temasından kaçınma hangi duyguyla ilişkilendirilmiştir?",
    "options": [
      "Kendine güven",
      "Rahatlık ve açıklık",
      "Suçluluk veya bir şey saklama",
      "İş birliğine hazır olma"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Suçluluk veya bir şey saklama\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Göz temasından kaçınma hangi duyguyla ilişkilendirilmiştir?",
    "options": [
      "Rahatlık ve açıklık",
      "Suçluluk veya bir şey saklama",
      "İş birliğine hazır olma",
      "Kendine güven"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Suçluluk veya bir şey saklama\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: endişe ve kaygıyı yansıtan mesaj hangisidir?",
    "options": [
      "Tırnak ısırma",
      "Düğmelenmemiş ceket",
      "Esneme",
      "Göz teması"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Tırnak ısırma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: endişe ve kaygıyı yansıtan mesaj hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Düğmelenmemiş ceket",
      "Esneme",
      "Göz teması",
      "Tırnak ısırma"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Tırnak ısırma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: endişe ve kaygıyı yansıtan mesaj hangisidir?",
    "options": [
      "Esneme",
      "Göz teması",
      "Tırnak ısırma",
      "Düğmelenmemiş ceket"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Tırnak ısırma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? endişe ve kaygıyı yansıtan mesaj hangisidir?",
    "options": [
      "Göz teması",
      "Tırnak ısırma",
      "Düğmelenmemiş ceket",
      "Esneme"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Tırnak ısırma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İletişim sürecinde mesajı oluşturan ve ileten kişi hangi öge olarak adlandırılır?",
    "options": [
      "Kanal",
      "Kaynak",
      "Alıcı",
      "Dönüt"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kaynak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: İletişim sürecinde mesajı oluşturan ve ileten kişi hangi öge olarak adlandırılır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Kaynak",
      "Alıcı",
      "Dönüt",
      "Kanal"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kaynak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İletişim sürecinde mesajı oluşturan ve ileten kişi hangi öge olarak adlandırılır?",
    "options": [
      "Alıcı",
      "Dönüt",
      "Kanal",
      "Kaynak"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kaynak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İletişim sürecinde mesajı oluşturan ve ileten kişi hangi öge olarak adlandırılır?",
    "options": [
      "Dönüt",
      "Kanal",
      "Kaynak",
      "Alıcı"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kaynak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İletişim sürecinde mesajın iletilmesini sağlayan araç veya yol hangisidir?",
    "options": [
      "Kanal",
      "Dönüt",
      "Alıcı",
      "Kod açma"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kanal\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: İletişim sürecinde mesajın iletilmesini sağlayan araç veya yol hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Dönüt",
      "Alıcı",
      "Kod açma",
      "Kanal"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kanal\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İletişim sürecinde mesajın iletilmesini sağlayan araç veya yol hangisidir?",
    "options": [
      "Alıcı",
      "Kod açma",
      "Kanal",
      "Dönüt"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kanal\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İletişim sürecinde mesajın iletilmesini sağlayan araç veya yol hangisidir?",
    "options": [
      "Kod açma",
      "Kanal",
      "Dönüt",
      "Alıcı"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kanal\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Alıcının mesajı yorumlayıp anlamlandırması hangi süreçle ifade edilir?",
    "options": [
      "Kodlama",
      "Gürültü",
      "Kanal",
      "Kod açma"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kod açma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Alıcının mesajı yorumlayıp anlamlandırması hangi süreçle ifade edilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Gürültü",
      "Kanal",
      "Kod açma",
      "Kodlama"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kod açma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Alıcının mesajı yorumlayıp anlamlandırması hangi süreçle ifade edilir?",
    "options": [
      "Kanal",
      "Kod açma",
      "Kodlama",
      "Gürültü"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kod açma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Alıcının mesajı yorumlayıp anlamlandırması hangi süreçle ifade edilir?",
    "options": [
      "Kod açma",
      "Kodlama",
      "Gürültü",
      "Kanal"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kod açma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İletişimde geri bildirim (dönüt) ne işe yarar?",
    "options": [
      "İletişimi tek yönlü hâle getirir",
      "Kanalı zorunlu olarak değiştirir",
      "Mesajın alıcı tarafından nasıl anlaşıldığını kaynağa bildirir",
      "Mesajı ortadan kaldırır"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Mesajın alıcı tarafından nasıl anlaşıldığını kaynağa bildirir\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: İletişimde geri bildirim (dönüt) ne işe yarar. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Kanalı zorunlu olarak değiştirir",
      "Mesajın alıcı tarafından nasıl anlaşıldığını kaynağa bildirir",
      "Mesajı ortadan kaldırır",
      "İletişimi tek yönlü hâle getirir"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Mesajın alıcı tarafından nasıl anlaşıldığını kaynağa bildirir\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İletişimde geri bildirim (dönüt) ne işe yarar?",
    "options": [
      "Mesajın alıcı tarafından nasıl anlaşıldığını kaynağa bildirir",
      "Mesajı ortadan kaldırır",
      "İletişimi tek yönlü hâle getirir",
      "Kanalı zorunlu olarak değiştirir"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Mesajın alıcı tarafından nasıl anlaşıldığını kaynağa bildirir\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İletişimde geri bildirim (dönüt) ne işe yarar?",
    "options": [
      "Mesajı ortadan kaldırır",
      "İletişimi tek yönlü hâle getirir",
      "Kanalı zorunlu olarak değiştirir",
      "Mesajın alıcı tarafından nasıl anlaşıldığını kaynağa bildirir"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Mesajın alıcı tarafından nasıl anlaşıldığını kaynağa bildirir\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: Empatik iletişimde temel yaklaşım hangisidir?",
    "options": [
      "Kendi düşüncesini zorla kabul ettirmek",
      "Karşıdakinin duygu ve bakış açısını anlamaya çalışmak",
      "Karşıdakini yargılamak",
      "Sözünü sürekli kesmek"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Karşıdakinin duygu ve bakış açısını anlamaya çalışmak\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: Empatik iletişimde temel yaklaşım hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Karşıdakinin duygu ve bakış açısını anlamaya çalışmak",
      "Karşıdakini yargılamak",
      "Sözünü sürekli kesmek",
      "Kendi düşüncesini zorla kabul ettirmek"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Karşıdakinin duygu ve bakış açısını anlamaya çalışmak\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Empatik iletişimde temel yaklaşım hangisidir?",
    "options": [
      "Karşıdakini yargılamak",
      "Sözünü sürekli kesmek",
      "Kendi düşüncesini zorla kabul ettirmek",
      "Karşıdakinin duygu ve bakış açısını anlamaya çalışmak"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Karşıdakinin duygu ve bakış açısını anlamaya çalışmak\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Empatik iletişimde temel yaklaşım hangisidir?",
    "options": [
      "Sözünü sürekli kesmek",
      "Kendi düşüncesini zorla kabul ettirmek",
      "Karşıdakinin duygu ve bakış açısını anlamaya çalışmak",
      "Karşıdakini yargılamak"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Karşıdakinin duygu ve bakış açısını anlamaya çalışmak\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: Aktif dinleme davranışlarından biri hangisidir?",
    "options": [
      "Dikkati konuşana yöneltmek ve uygun geri bildirim vermek",
      "Telefonla ilgilenmek",
      "Konuşanın sözünü sürekli kesmek",
      "Ön yargıyla dinlemek"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Dikkati konuşana yöneltmek ve uygun geri bildirim vermek\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: Aktif dinleme davranışlarından biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Telefonla ilgilenmek",
      "Konuşanın sözünü sürekli kesmek",
      "Ön yargıyla dinlemek",
      "Dikkati konuşana yöneltmek ve uygun geri bildirim vermek"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Dikkati konuşana yöneltmek ve uygun geri bildirim vermek\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Aktif dinleme davranışlarından biri hangisidir?",
    "options": [
      "Konuşanın sözünü sürekli kesmek",
      "Ön yargıyla dinlemek",
      "Dikkati konuşana yöneltmek ve uygun geri bildirim vermek",
      "Telefonla ilgilenmek"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Dikkati konuşana yöneltmek ve uygun geri bildirim vermek\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Aktif dinleme davranışlarından biri hangisidir?",
    "options": [
      "Ön yargıyla dinlemek",
      "Dikkati konuşana yöneltmek ve uygun geri bildirim vermek",
      "Telefonla ilgilenmek",
      "Konuşanın sözünü sürekli kesmek"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Dikkati konuşana yöneltmek ve uygun geri bildirim vermek\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: Beden dili iletişimde hangi mesajları aktarabilir?",
    "options": [
      "Yalnız yazılı bilgiler",
      "Yalnız sayısal veriler",
      "Sadece resmi talimatlar",
      "Duygu, tutum ve niyetle ilgili sözsüz ipuçları"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Duygu, tutum ve niyetle ilgili sözsüz ipuçları\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: Beden dili iletişimde hangi mesajları aktarabilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız sayısal veriler",
      "Sadece resmi talimatlar",
      "Duygu, tutum ve niyetle ilgili sözsüz ipuçları",
      "Yalnız yazılı bilgiler"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Duygu, tutum ve niyetle ilgili sözsüz ipuçları\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Beden dili iletişimde hangi mesajları aktarabilir?",
    "options": [
      "Sadece resmi talimatlar",
      "Duygu, tutum ve niyetle ilgili sözsüz ipuçları",
      "Yalnız yazılı bilgiler",
      "Yalnız sayısal veriler"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Duygu, tutum ve niyetle ilgili sözsüz ipuçları\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Beden dili iletişimde hangi mesajları aktarabilir?",
    "options": [
      "Duygu, tutum ve niyetle ilgili sözsüz ipuçları",
      "Yalnız yazılı bilgiler",
      "Yalnız sayısal veriler",
      "Sadece resmi talimatlar"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Duygu, tutum ve niyetle ilgili sözsüz ipuçları\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: İletişim engellerinden biri hangisidir?",
    "options": [
      "Empatik dinleme",
      "Uygun geri bildirim",
      "Ön yargı ve yanlış anlamalar",
      "Açık ifade"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ön yargı ve yanlış anlamalar\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: İletişim engellerinden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Uygun geri bildirim",
      "Ön yargı ve yanlış anlamalar",
      "Açık ifade",
      "Empatik dinleme"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ön yargı ve yanlış anlamalar\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İletişim engellerinden biri hangisidir?",
    "options": [
      "Ön yargı ve yanlış anlamalar",
      "Açık ifade",
      "Empatik dinleme",
      "Uygun geri bildirim"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ön yargı ve yanlış anlamalar\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İletişim engellerinden biri hangisidir?",
    "options": [
      "Açık ifade",
      "Empatik dinleme",
      "Uygun geri bildirim",
      "Ön yargı ve yanlış anlamalar"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ön yargı ve yanlış anlamalar\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Organizmanın doğrudan veya dolaylı gözlenebilen etkinlikleri hangisidir?",
    "options": [
      "Bellek",
      "Güdü",
      "Davranış",
      "Bilinç"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Davranış\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Organizmanın doğrudan veya dolaylı gözlenebilen etkinlikleri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Güdü",
      "Davranış",
      "Bilinç",
      "Bellek"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Davranış\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Organizmanın doğrudan veya dolaylı gözlenebilen etkinlikleri hangisidir?",
    "options": [
      "Davranış",
      "Bilinç",
      "Bellek",
      "Güdü"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Davranış\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Organizmanın doğrudan veya dolaylı gözlenebilen etkinlikleri hangisidir?",
    "options": [
      "Bilinç",
      "Bellek",
      "Güdü",
      "Davranış"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Davranış\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Eğitim ve psikolojinin ortak noktası hangisidir?",
    "options": [
      "İnsan davranışı",
      "İnsan hayatı",
      "İnsan bilgisi",
      "Gelişim"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"İnsan davranışı\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Eğitim ve psikolojinin ortak noktası hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İnsan hayatı",
      "İnsan bilgisi",
      "Gelişim",
      "İnsan davranışı"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"İnsan davranışı\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Eğitim ve psikolojinin ortak noktası hangisidir?",
    "options": [
      "İnsan bilgisi",
      "Gelişim",
      "İnsan davranışı",
      "İnsan hayatı"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"İnsan davranışı\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Eğitim ve psikolojinin ortak noktası hangisidir?",
    "options": [
      "Gelişim",
      "İnsan davranışı",
      "İnsan hayatı",
      "İnsan bilgisi"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"İnsan davranışı\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Bireyin davranışlarında kendi yaşantısı yoluyla ve kasıtlı olarak istendik değişme meydana getirme süreci hangisidir?",
    "options": [
      "Hedef",
      "Eğitim",
      "Zekâ",
      "Psikoloji"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Eğitim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Bireyin davranışlarında kendi yaşantısı yoluyla ve kasıtlı olarak istendik değişme meydana getirme süreci hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Eğitim",
      "Zekâ",
      "Psikoloji",
      "Hedef"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Eğitim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Bireyin davranışlarında kendi yaşantısı yoluyla ve kasıtlı olarak istendik değişme meydana getirme süreci hangisidir?",
    "options": [
      "Zekâ",
      "Psikoloji",
      "Hedef",
      "Eğitim"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Eğitim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Bireyin davranışlarında kendi yaşantısı yoluyla ve kasıtlı olarak istendik değişme meydana getirme süreci hangisidir?",
    "options": [
      "Psikoloji",
      "Hedef",
      "Eğitim",
      "Zekâ"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Eğitim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: gelişim türlerinden biri olmayan hangisidir?",
    "options": [
      "Psiko-sosyal gelişim",
      "Çevresel gelişim",
      "Fiziksel gelişim",
      "Bilişsel gelişim"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Çevresel gelişim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: gelişim türlerinden biri olmayan hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Çevresel gelişim",
      "Fiziksel gelişim",
      "Bilişsel gelişim",
      "Psiko-sosyal gelişim"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Çevresel gelişim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: gelişim türlerinden biri olmayan hangisidir?",
    "options": [
      "Fiziksel gelişim",
      "Bilişsel gelişim",
      "Psiko-sosyal gelişim",
      "Çevresel gelişim"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Çevresel gelişim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? gelişim türlerinden biri olmayan hangisidir?",
    "options": [
      "Bilişsel gelişim",
      "Psiko-sosyal gelişim",
      "Çevresel gelişim",
      "Fiziksel gelişim"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Çevresel gelişim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Öğrenmeye etki eden bireysel etkenlerden biri hangisidir?",
    "options": [
      "Öğrenme ortamındaki ışık",
      "Öğrenme ortamı",
      "Öğrencinin zekâsı",
      "Öğrenme ortamındaki ısı"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrencinin zekâsı\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Öğrenmeye etki eden bireysel etkenlerden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrenme ortamı",
      "Öğrencinin zekâsı",
      "Öğrenme ortamındaki ısı",
      "Öğrenme ortamındaki ışık"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrencinin zekâsı\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Öğrenmeye etki eden bireysel etkenlerden biri hangisidir?",
    "options": [
      "Öğrencinin zekâsı",
      "Öğrenme ortamındaki ısı",
      "Öğrenme ortamındaki ışık",
      "Öğrenme ortamı"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin zekâsı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Öğrenmeye etki eden bireysel etkenlerden biri hangisidir?",
    "options": [
      "Öğrenme ortamındaki ısı",
      "Öğrenme ortamındaki ışık",
      "Öğrenme ortamı",
      "Öğrencinin zekâsı"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin zekâsı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: öğrenmeye etki eden çevresel etken hangisidir?",
    "options": [
      "Öğrencinin yeteneği",
      "Öğrencinin yaşı",
      "Öğrencinin aile çevresi",
      "Öğrencinin ön bilgisi"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrencinin aile çevresi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: öğrenmeye etki eden çevresel etken hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrencinin yaşı",
      "Öğrencinin aile çevresi",
      "Öğrencinin ön bilgisi",
      "Öğrencinin yeteneği"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrencinin aile çevresi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: öğrenmeye etki eden çevresel etken hangisidir?",
    "options": [
      "Öğrencinin aile çevresi",
      "Öğrencinin ön bilgisi",
      "Öğrencinin yeteneği",
      "Öğrencinin yaşı"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin aile çevresi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? öğrenmeye etki eden çevresel etken hangisidir?",
    "options": [
      "Öğrencinin ön bilgisi",
      "Öğrencinin yeteneği",
      "Öğrencinin yaşı",
      "Öğrencinin aile çevresi"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin aile çevresi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Eğitim psikolojisinin temel inceleme alanlarından biri hangisidir?",
    "options": [
      "Yalnız ekonomik sistem",
      "Yalnız fiziksel çevre",
      "Sadece ölçüm araçları",
      "Eğitim süreçlerinde bireyin davranış, gelişim ve öğrenmesi"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Eğitim süreçlerinde bireyin davranış, gelişim ve öğrenmesi\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Eğitim psikolojisinin temel inceleme alanlarından biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız fiziksel çevre",
      "Sadece ölçüm araçları",
      "Eğitim süreçlerinde bireyin davranış, gelişim ve öğrenmesi",
      "Yalnız ekonomik sistem"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Eğitim süreçlerinde bireyin davranış, gelişim ve öğrenmesi\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Eğitim psikolojisinin temel inceleme alanlarından biri hangisidir?",
    "options": [
      "Sadece ölçüm araçları",
      "Eğitim süreçlerinde bireyin davranış, gelişim ve öğrenmesi",
      "Yalnız ekonomik sistem",
      "Yalnız fiziksel çevre"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Eğitim süreçlerinde bireyin davranış, gelişim ve öğrenmesi\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Eğitim psikolojisinin temel inceleme alanlarından biri hangisidir?",
    "options": [
      "Eğitim süreçlerinde bireyin davranış, gelişim ve öğrenmesi",
      "Yalnız ekonomik sistem",
      "Yalnız fiziksel çevre",
      "Sadece ölçüm araçları"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Eğitim süreçlerinde bireyin davranış, gelişim ve öğrenmesi\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Gelişim kavramı genel olarak neyi ifade eder?",
    "options": [
      "Yalnız öğrenilen bilgileri",
      "Sadece yaş değişimini",
      "Bireyde yaşam boyunca meydana gelen düzenli değişim süreçlerini",
      "Yalnız boy uzamasını"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bireyde yaşam boyunca meydana gelen düzenli değişim süreçlerini\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Gelişim kavramı genel olarak neyi ifade eder. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Sadece yaş değişimini",
      "Bireyde yaşam boyunca meydana gelen düzenli değişim süreçlerini",
      "Yalnız boy uzamasını",
      "Yalnız öğrenilen bilgileri"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bireyde yaşam boyunca meydana gelen düzenli değişim süreçlerini\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Gelişim kavramı genel olarak neyi ifade eder?",
    "options": [
      "Bireyde yaşam boyunca meydana gelen düzenli değişim süreçlerini",
      "Yalnız boy uzamasını",
      "Yalnız öğrenilen bilgileri",
      "Sadece yaş değişimini"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bireyde yaşam boyunca meydana gelen düzenli değişim süreçlerini\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Gelişim kavramı genel olarak neyi ifade eder?",
    "options": [
      "Yalnız boy uzamasını",
      "Yalnız öğrenilen bilgileri",
      "Sadece yaş değişimini",
      "Bireyde yaşam boyunca meydana gelen düzenli değişim süreçlerini"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bireyde yaşam boyunca meydana gelen düzenli değişim süreçlerini\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Fiziksel gelişim hangi değişimlerle ilgilidir?",
    "options": [
      "Yalnız iş tutumları",
      "Bedensel büyüme ve fiziksel özelliklerdeki değişim",
      "Yalnız ahlaki yargılar",
      "Sadece dil bilgisi"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bedensel büyüme ve fiziksel özelliklerdeki değişim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Fiziksel gelişim hangi değişimlerle ilgilidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Bedensel büyüme ve fiziksel özelliklerdeki değişim",
      "Yalnız ahlaki yargılar",
      "Sadece dil bilgisi",
      "Yalnız iş tutumları"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bedensel büyüme ve fiziksel özelliklerdeki değişim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Fiziksel gelişim hangi değişimlerle ilgilidir?",
    "options": [
      "Yalnız ahlaki yargılar",
      "Sadece dil bilgisi",
      "Yalnız iş tutumları",
      "Bedensel büyüme ve fiziksel özelliklerdeki değişim"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bedensel büyüme ve fiziksel özelliklerdeki değişim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Fiziksel gelişim hangi değişimlerle ilgilidir?",
    "options": [
      "Sadece dil bilgisi",
      "Yalnız iş tutumları",
      "Bedensel büyüme ve fiziksel özelliklerdeki değişim",
      "Yalnız ahlaki yargılar"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bedensel büyüme ve fiziksel özelliklerdeki değişim\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Bilişsel gelişim hangi alanla ilgilidir?",
    "options": [
      "Düşünme, problem çözme, algı ve zihinsel süreçler",
      "Yalnız kas gelişimi",
      "Yalnız duygu ifade biçimi",
      "Sadece ekonomik davranış"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Düşünme, problem çözme, algı ve zihinsel süreçler\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Bilişsel gelişim hangi alanla ilgilidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız kas gelişimi",
      "Yalnız duygu ifade biçimi",
      "Sadece ekonomik davranış",
      "Düşünme, problem çözme, algı ve zihinsel süreçler"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Düşünme, problem çözme, algı ve zihinsel süreçler\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Bilişsel gelişim hangi alanla ilgilidir?",
    "options": [
      "Yalnız duygu ifade biçimi",
      "Sadece ekonomik davranış",
      "Düşünme, problem çözme, algı ve zihinsel süreçler",
      "Yalnız kas gelişimi"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Düşünme, problem çözme, algı ve zihinsel süreçler\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Bilişsel gelişim hangi alanla ilgilidir?",
    "options": [
      "Sadece ekonomik davranış",
      "Düşünme, problem çözme, algı ve zihinsel süreçler",
      "Yalnız kas gelişimi",
      "Yalnız duygu ifade biçimi"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Düşünme, problem çözme, algı ve zihinsel süreçler\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Psiko-sosyal gelişim hangi boyutları içerir?",
    "options": [
      "Yalnız fiziksel büyümeyi",
      "Yalnız hafıza kapasitesini",
      "Sadece mesleki becerileri",
      "Duygusal ve sosyal ilişkiler ile kişilik gelişimini"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Duygusal ve sosyal ilişkiler ile kişilik gelişimini\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Psiko-sosyal gelişim hangi boyutları içerir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız hafıza kapasitesini",
      "Sadece mesleki becerileri",
      "Duygusal ve sosyal ilişkiler ile kişilik gelişimini",
      "Yalnız fiziksel büyümeyi"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Duygusal ve sosyal ilişkiler ile kişilik gelişimini\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Psiko-sosyal gelişim hangi boyutları içerir?",
    "options": [
      "Sadece mesleki becerileri",
      "Duygusal ve sosyal ilişkiler ile kişilik gelişimini",
      "Yalnız fiziksel büyümeyi",
      "Yalnız hafıza kapasitesini"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Duygusal ve sosyal ilişkiler ile kişilik gelişimini\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Psiko-sosyal gelişim hangi boyutları içerir?",
    "options": [
      "Duygusal ve sosyal ilişkiler ile kişilik gelişimini",
      "Yalnız fiziksel büyümeyi",
      "Yalnız hafıza kapasitesini",
      "Sadece mesleki becerileri"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Duygusal ve sosyal ilişkiler ile kişilik gelişimini\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Öğrenme kavramı hangi temel özellik ile ilişkilidir?",
    "options": [
      "Sadece fiziksel büyüme",
      "Her türlü anlık davranış",
      "Bireyin yaşantısı yoluyla davranışında meydana gelen değişme",
      "Yalnız geçici refleks"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bireyin yaşantısı yoluyla davranışında meydana gelen değişme\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Öğrenme kavramı hangi temel özellik ile ilişkilidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Her türlü anlık davranış",
      "Bireyin yaşantısı yoluyla davranışında meydana gelen değişme",
      "Yalnız geçici refleks",
      "Sadece fiziksel büyüme"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bireyin yaşantısı yoluyla davranışında meydana gelen değişme\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Öğrenme kavramı hangi temel özellik ile ilişkilidir?",
    "options": [
      "Bireyin yaşantısı yoluyla davranışında meydana gelen değişme",
      "Yalnız geçici refleks",
      "Sadece fiziksel büyüme",
      "Her türlü anlık davranış"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bireyin yaşantısı yoluyla davranışında meydana gelen değişme\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Öğrenme kavramı hangi temel özellik ile ilişkilidir?",
    "options": [
      "Yalnız geçici refleks",
      "Sadece fiziksel büyüme",
      "Her türlü anlık davranış",
      "Bireyin yaşantısı yoluyla davranışında meydana gelen değişme"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bireyin yaşantısı yoluyla davranışında meydana gelen değişme\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Öğrenme ortamındaki ışık, sıcaklık ve gürültü hangi tür etkenler olarak değerlendirilebilir?",
    "options": [
      "Ölçme",
      "Çevresel",
      "Bireysel",
      "Genetik"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Çevresel\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: Öğrenme ortamındaki ışık, sıcaklık ve gürültü hangi tür etkenler olarak değerlendirilebilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Çevresel",
      "Bireysel",
      "Genetik",
      "Ölçme"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Çevresel\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Öğrenme ortamındaki ışık, sıcaklık ve gürültü hangi tür etkenler olarak değerlendirilebilir?",
    "options": [
      "Bireysel",
      "Genetik",
      "Ölçme",
      "Çevresel"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Çevresel\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Öğrenme ortamındaki ışık, sıcaklık ve gürültü hangi tür etkenler olarak değerlendirilebilir?",
    "options": [
      "Genetik",
      "Ölçme",
      "Çevresel",
      "Bireysel"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Çevresel\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: Öğrencinin ön bilgisi öğrenmeyi etkileyen hangi tür faktör olarak değerlendirilir?",
    "options": [
      "Bireysel",
      "Çevresel",
      "Fiziksel ortam",
      "Kurumsal"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bireysel\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Öğrencinin ön bilgisi öğrenmeyi etkileyen hangi tür faktör olarak değerlendirilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Çevresel",
      "Fiziksel ortam",
      "Kurumsal",
      "Bireysel"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bireysel\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Öğrencinin ön bilgisi öğrenmeyi etkileyen hangi tür faktör olarak değerlendirilir?",
    "options": [
      "Fiziksel ortam",
      "Kurumsal",
      "Bireysel",
      "Çevresel"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bireysel\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Öğrencinin ön bilgisi öğrenmeyi etkileyen hangi tür faktör olarak değerlendirilir?",
    "options": [
      "Kurumsal",
      "Bireysel",
      "Çevresel",
      "Fiziksel ortam"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bireysel\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İş yeri psikolojisinin mesleki eğitim açısından önemlerinden biri hangisidir?",
    "options": [
      "İş güvenliğini gereksiz kılması",
      "Öğrenmeyi yalnız cezaya bağlaması",
      "İletişimi ortadan kaldırması",
      "İş ortamındaki davranış, motivasyon ve ilişkileri anlamaya yardımcı olması"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"İş ortamındaki davranış, motivasyon ve ilişkileri anlamaya yardımcı olması\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: İş yeri psikolojisinin mesleki eğitim açısından önemlerinden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrenmeyi yalnız cezaya bağlaması",
      "İletişimi ortadan kaldırması",
      "İş ortamındaki davranış, motivasyon ve ilişkileri anlamaya yardımcı olması",
      "İş güvenliğini gereksiz kılması"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"İş ortamındaki davranış, motivasyon ve ilişkileri anlamaya yardımcı olması\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İş yeri psikolojisinin mesleki eğitim açısından önemlerinden biri hangisidir?",
    "options": [
      "İletişimi ortadan kaldırması",
      "İş ortamındaki davranış, motivasyon ve ilişkileri anlamaya yardımcı olması",
      "İş güvenliğini gereksiz kılması",
      "Öğrenmeyi yalnız cezaya bağlaması"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"İş ortamındaki davranış, motivasyon ve ilişkileri anlamaya yardımcı olması\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İş yeri psikolojisinin mesleki eğitim açısından önemlerinden biri hangisidir?",
    "options": [
      "İş ortamındaki davranış, motivasyon ve ilişkileri anlamaya yardımcı olması",
      "İş güvenliğini gereksiz kılması",
      "Öğrenmeyi yalnız cezaya bağlaması",
      "İletişimi ortadan kaldırması"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"İş ortamındaki davranış, motivasyon ve ilişkileri anlamaya yardımcı olması\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: ki öğretim faaliyeti basamaklarından biri olmayan hangisidir?",
    "options": [
      "Uygulama",
      "Gözetim",
      "Hazırlık",
      "Takdim"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gözetim\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: ki öğretim faaliyeti basamaklarından biri olmayan hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Gözetim",
      "Hazırlık",
      "Takdim",
      "Uygulama"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gözetim\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: ki öğretim faaliyeti basamaklarından biri olmayan hangisidir?",
    "options": [
      "Hazırlık",
      "Takdim",
      "Uygulama",
      "Gözetim"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gözetim\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? ki öğretim faaliyeti basamaklarından biri olmayan hangisidir?",
    "options": [
      "Takdim",
      "Uygulama",
      "Gözetim",
      "Hazırlık"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gözetim\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: öğretim yöntemlerinden biri olmayan hangisidir?",
    "options": [
      "Anlatım",
      "Gösteri",
      "Sınıf anlatımı",
      "Soru-cevap"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Sınıf anlatımı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: öğretim yöntemlerinden biri olmayan hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Gösteri",
      "Sınıf anlatımı",
      "Soru-cevap",
      "Anlatım"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Sınıf anlatımı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: öğretim yöntemlerinden biri olmayan hangisidir?",
    "options": [
      "Sınıf anlatımı",
      "Soru-cevap",
      "Anlatım",
      "Gösteri"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Sınıf anlatımı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? öğretim yöntemlerinden biri olmayan hangisidir?",
    "options": [
      "Soru-cevap",
      "Anlatım",
      "Gösteri",
      "Sınıf anlatımı"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Sınıf anlatımı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: yalnız işiterek kalıcı bilgi oluşma oranı hangi seçenek olarak verilmiştir?",
    "options": [
      "%50",
      "%40",
      "%20",
      "%100"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"%20\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: yalnız işiterek kalıcı bilgi oluşma oranı hangi seçenek olarak verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "%40",
      "%20",
      "%100",
      "%50"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"%20\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: yalnız işiterek kalıcı bilgi oluşma oranı hangi seçenek olarak verilmiştir?",
    "options": [
      "%20",
      "%100",
      "%50",
      "%40"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"%20\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? yalnız işiterek kalıcı bilgi oluşma oranı hangi seçenek olarak verilmiştir?",
    "options": [
      "%100",
      "%50",
      "%40",
      "%20"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"%20\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ustalık yeterliğini kazanmış ve öğrencilerin iş yerindeki eğitiminden sorumlu, mesleki eğitim tekniklerini bilen ve uygulayan kişi kimdir?",
    "options": [
      "Çırak",
      "Stajyer",
      "Usta öğretici",
      "Usta"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Usta öğretici\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: Ustalık yeterliğini kazanmış ve öğrencilerin iş yerindeki eğitiminden sorumlu, mesleki eğitim tekniklerini bilen ve uygulayan kişi kimdir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Stajyer",
      "Usta öğretici",
      "Usta",
      "Çırak"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Usta öğretici\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ustalık yeterliğini kazanmış ve öğrencilerin iş yerindeki eğitiminden sorumlu, mesleki eğitim tekniklerini bilen ve uygulayan kişi kimdir?",
    "options": [
      "Usta öğretici",
      "Usta",
      "Çırak",
      "Stajyer"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Usta öğretici\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ustalık yeterliğini kazanmış ve öğrencilerin iş yerindeki eğitiminden sorumlu, mesleki eğitim tekniklerini bilen ve uygulayan kişi kimdir?",
    "options": [
      "Usta",
      "Çırak",
      "Stajyer",
      "Usta öğretici"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Usta öğretici\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: erkeklerde ergenlik çağı hangi yaş aralığı olarak verilmiştir?",
    "options": [
      "08-10",
      "20-25",
      "13-18",
      "15-20"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"13-18\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: erkeklerde ergenlik çağı hangi yaş aralığı olarak verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "20-25",
      "13-18",
      "15-20",
      "08-10"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"13-18\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: erkeklerde ergenlik çağı hangi yaş aralığı olarak verilmiştir?",
    "options": [
      "13-18",
      "15-20",
      "08-10",
      "20-25"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"13-18\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? erkeklerde ergenlik çağı hangi yaş aralığı olarak verilmiştir?",
    "options": [
      "15-20",
      "08-10",
      "20-25",
      "13-18"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"13-18\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Eğitim stratejisi kavramı neyi ifade eder?",
    "options": [
      "Öğrencinin yaşını",
      "Öğretim hedeflerine ulaşmak için genel yaklaşım ve düzenlemeyi",
      "Yalnız sınav puanını",
      "Yalnız sınıf oturma düzenini"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğretim hedeflerine ulaşmak için genel yaklaşım ve düzenlemeyi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Eğitim stratejisi kavramı neyi ifade eder. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğretim hedeflerine ulaşmak için genel yaklaşım ve düzenlemeyi",
      "Yalnız sınav puanını",
      "Yalnız sınıf oturma düzenini",
      "Öğrencinin yaşını"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğretim hedeflerine ulaşmak için genel yaklaşım ve düzenlemeyi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Eğitim stratejisi kavramı neyi ifade eder?",
    "options": [
      "Yalnız sınav puanını",
      "Yalnız sınıf oturma düzenini",
      "Öğrencinin yaşını",
      "Öğretim hedeflerine ulaşmak için genel yaklaşım ve düzenlemeyi"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğretim hedeflerine ulaşmak için genel yaklaşım ve düzenlemeyi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Eğitim stratejisi kavramı neyi ifade eder?",
    "options": [
      "Yalnız sınıf oturma düzenini",
      "Öğrencinin yaşını",
      "Öğretim hedeflerine ulaşmak için genel yaklaşım ve düzenlemeyi",
      "Yalnız sınav puanını"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğretim hedeflerine ulaşmak için genel yaklaşım ve düzenlemeyi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Öğretim yöntemleri ile teknikleri arasındaki doğru ilişki hangisidir?",
    "options": [
      "Yöntem genel öğretme yolunu, teknik yöntemin uygulanışındaki özel biçimleri ifade eder",
      "Teknik yöntemden daha geniş kavramdır",
      "İkisi birbirinin karşıtı kavramdır",
      "Yöntem yalnız sınavlarda kullanılır"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Yöntem genel öğretme yolunu, teknik yöntemin uygulanışındaki özel biçimleri ifade eder\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Öğretim yöntemleri ile teknikleri arasındaki doğru ilişki hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Teknik yöntemden daha geniş kavramdır",
      "İkisi birbirinin karşıtı kavramdır",
      "Yöntem yalnız sınavlarda kullanılır",
      "Yöntem genel öğretme yolunu, teknik yöntemin uygulanışındaki özel biçimleri ifade eder"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Yöntem genel öğretme yolunu, teknik yöntemin uygulanışındaki özel biçimleri ifade eder\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Öğretim yöntemleri ile teknikleri arasındaki doğru ilişki hangisidir?",
    "options": [
      "İkisi birbirinin karşıtı kavramdır",
      "Yöntem yalnız sınavlarda kullanılır",
      "Yöntem genel öğretme yolunu, teknik yöntemin uygulanışındaki özel biçimleri ifade eder",
      "Teknik yöntemden daha geniş kavramdır"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Yöntem genel öğretme yolunu, teknik yöntemin uygulanışındaki özel biçimleri ifade eder\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Öğretim yöntemleri ile teknikleri arasındaki doğru ilişki hangisidir?",
    "options": [
      "Yöntem yalnız sınavlarda kullanılır",
      "Yöntem genel öğretme yolunu, teknik yöntemin uygulanışındaki özel biçimleri ifade eder",
      "Teknik yöntemden daha geniş kavramdır",
      "İkisi birbirinin karşıtı kavramdır"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Yöntem genel öğretme yolunu, teknik yöntemin uygulanışındaki özel biçimleri ifade eder\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Gösteri yönteminde öğretici temel olarak ne yapar?",
    "options": [
      "Öğrencileri yalnız yazılı sınava alır",
      "Sınıfı tamamen serbest bırakır",
      "Yalnız kitap okur",
      "İşlem veya beceriyi örnek olarak sergiler"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlem veya beceriyi örnek olarak sergiler\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Gösteri yönteminde öğretici temel olarak ne yapar. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Sınıfı tamamen serbest bırakır",
      "Yalnız kitap okur",
      "İşlem veya beceriyi örnek olarak sergiler",
      "Öğrencileri yalnız yazılı sınava alır"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlem veya beceriyi örnek olarak sergiler\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Gösteri yönteminde öğretici temel olarak ne yapar?",
    "options": [
      "Yalnız kitap okur",
      "İşlem veya beceriyi örnek olarak sergiler",
      "Öğrencileri yalnız yazılı sınava alır",
      "Sınıfı tamamen serbest bırakır"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlem veya beceriyi örnek olarak sergiler\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Gösteri yönteminde öğretici temel olarak ne yapar?",
    "options": [
      "İşlem veya beceriyi örnek olarak sergiler",
      "Öğrencileri yalnız yazılı sınava alır",
      "Sınıfı tamamen serbest bırakır",
      "Yalnız kitap okur"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlem veya beceriyi örnek olarak sergiler\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Soru-cevap yöntemi hangi amaçla kullanılabilir?",
    "options": [
      "Ders içeriğini gizlemek",
      "Yalnız ezber yaptırmak",
      "Öğrenci katılımı, düşünme ve öğrenmenin kontrolünü desteklemek",
      "Öğrencinin katılımını engellemek"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenci katılımı, düşünme ve öğrenmenin kontrolünü desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Soru-cevap yöntemi hangi amaçla kullanılabilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız ezber yaptırmak",
      "Öğrenci katılımı, düşünme ve öğrenmenin kontrolünü desteklemek",
      "Öğrencinin katılımını engellemek",
      "Ders içeriğini gizlemek"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenci katılımı, düşünme ve öğrenmenin kontrolünü desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Soru-cevap yöntemi hangi amaçla kullanılabilir?",
    "options": [
      "Öğrenci katılımı, düşünme ve öğrenmenin kontrolünü desteklemek",
      "Öğrencinin katılımını engellemek",
      "Ders içeriğini gizlemek",
      "Yalnız ezber yaptırmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenci katılımı, düşünme ve öğrenmenin kontrolünü desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Soru-cevap yöntemi hangi amaçla kullanılabilir?",
    "options": [
      "Öğrencinin katılımını engellemek",
      "Ders içeriğini gizlemek",
      "Yalnız ezber yaptırmak",
      "Öğrenci katılımı, düşünme ve öğrenmenin kontrolünü desteklemek"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenci katılımı, düşünme ve öğrenmenin kontrolünü desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Öğretim faaliyetlerinin hazırlık basamağında yapılması gerekenlerden biri hangisidir?",
    "options": [
      "Değerlendirme ölçütlerini gizlemek",
      "Malzeme, teknoloji ve görsel hazırlıkları yapmak",
      "Öğrenciyi hemen bağımsız çalışmaya bırakmak",
      "Kontrol basamağını atlamak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Malzeme, teknoloji ve görsel hazırlıkları yapmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Öğretim faaliyetlerinin hazırlık basamağında yapılması gerekenlerden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Malzeme, teknoloji ve görsel hazırlıkları yapmak",
      "Öğrenciyi hemen bağımsız çalışmaya bırakmak",
      "Kontrol basamağını atlamak",
      "Değerlendirme ölçütlerini gizlemek"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Malzeme, teknoloji ve görsel hazırlıkları yapmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Öğretim faaliyetlerinin hazırlık basamağında yapılması gerekenlerden biri hangisidir?",
    "options": [
      "Öğrenciyi hemen bağımsız çalışmaya bırakmak",
      "Kontrol basamağını atlamak",
      "Değerlendirme ölçütlerini gizlemek",
      "Malzeme, teknoloji ve görsel hazırlıkları yapmak"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Malzeme, teknoloji ve görsel hazırlıkları yapmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Öğretim faaliyetlerinin hazırlık basamağında yapılması gerekenlerden biri hangisidir?",
    "options": [
      "Kontrol basamağını atlamak",
      "Değerlendirme ölçütlerini gizlemek",
      "Malzeme, teknoloji ve görsel hazırlıkları yapmak",
      "Öğrenciyi hemen bağımsız çalışmaya bırakmak"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Malzeme, teknoloji ve görsel hazırlıkları yapmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Takdim basamağında öğretici ne yapar?",
    "options": [
      "Konuyu açıklar, gerekli gösteri ve açıklamaları yapar",
      "Öğrenciyi yalnız sınava alır",
      "Öğretimi bitirir",
      "Yalnız not verir"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Konuyu açıklar, gerekli gösteri ve açıklamaları yapar\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Takdim basamağında öğretici ne yapar. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrenciyi yalnız sınava alır",
      "Öğretimi bitirir",
      "Yalnız not verir",
      "Konuyu açıklar, gerekli gösteri ve açıklamaları yapar"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Konuyu açıklar, gerekli gösteri ve açıklamaları yapar\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Takdim basamağında öğretici ne yapar?",
    "options": [
      "Öğretimi bitirir",
      "Yalnız not verir",
      "Konuyu açıklar, gerekli gösteri ve açıklamaları yapar",
      "Öğrenciyi yalnız sınava alır"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Konuyu açıklar, gerekli gösteri ve açıklamaları yapar\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Takdim basamağında öğretici ne yapar?",
    "options": [
      "Yalnız not verir",
      "Konuyu açıklar, gerekli gösteri ve açıklamaları yapar",
      "Öğrenciyi yalnız sınava alır",
      "Öğretimi bitirir"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Konuyu açıklar, gerekli gösteri ve açıklamaları yapar\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Uygulama basamağında öğrenci nasıl çalışır?",
    "options": [
      "İşlem yapmadan konuyu ezberler",
      "Yalnız izleyici olur",
      "Değerlendirme dışı kalır",
      "Öğreticinin gözetiminde işi deneme ve yapma fırsatı bulur"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğreticinin gözetiminde işi deneme ve yapma fırsatı bulur\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Uygulama basamağında öğrenci nasıl çalışır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız izleyici olur",
      "Değerlendirme dışı kalır",
      "Öğreticinin gözetiminde işi deneme ve yapma fırsatı bulur",
      "İşlem yapmadan konuyu ezberler"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğreticinin gözetiminde işi deneme ve yapma fırsatı bulur\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Uygulama basamağında öğrenci nasıl çalışır?",
    "options": [
      "Değerlendirme dışı kalır",
      "Öğreticinin gözetiminde işi deneme ve yapma fırsatı bulur",
      "İşlem yapmadan konuyu ezberler",
      "Yalnız izleyici olur"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğreticinin gözetiminde işi deneme ve yapma fırsatı bulur\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Uygulama basamağında öğrenci nasıl çalışır?",
    "options": [
      "Öğreticinin gözetiminde işi deneme ve yapma fırsatı bulur",
      "İşlem yapmadan konuyu ezberler",
      "Yalnız izleyici olur",
      "Değerlendirme dışı kalır"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğreticinin gözetiminde işi deneme ve yapma fırsatı bulur\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Kontrol/test basamağının amacı hangisidir?",
    "options": [
      "Öğretimi başlatmak",
      "Öğrenciyi dersten uzaklaştırmak",
      "Öğrenme ve beceri düzeyini kontrol etmek",
      "Hazırlık malzemelerini toplamak"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenme ve beceri düzeyini kontrol etmek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Kontrol/test basamağının amacı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrenciyi dersten uzaklaştırmak",
      "Öğrenme ve beceri düzeyini kontrol etmek",
      "Hazırlık malzemelerini toplamak",
      "Öğretimi başlatmak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenme ve beceri düzeyini kontrol etmek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Kontrol/test basamağının amacı hangisidir?",
    "options": [
      "Öğrenme ve beceri düzeyini kontrol etmek",
      "Hazırlık malzemelerini toplamak",
      "Öğretimi başlatmak",
      "Öğrenciyi dersten uzaklaştırmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenme ve beceri düzeyini kontrol etmek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Kontrol/test basamağının amacı hangisidir?",
    "options": [
      "Hazırlık malzemelerini toplamak",
      "Öğretimi başlatmak",
      "Öğrenciyi dersten uzaklaştırmak",
      "Öğrenme ve beceri düzeyini kontrol etmek"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenme ve beceri düzeyini kontrol etmek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Beceri öğretiminde öğrenci hedef düzeye ulaşana kadar hangi yaklaşım önemlidir?",
    "options": [
      "Uygulamadan kaçınmak",
      "Deneme ve uygulamaların tekrar edilmesi",
      "Tek denemeyle öğretimin bitmesi",
      "Hataların saklanması"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Deneme ve uygulamaların tekrar edilmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Beceri öğretiminde öğrenci hedef düzeye ulaşana kadar hangi yaklaşım önemlidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Deneme ve uygulamaların tekrar edilmesi",
      "Tek denemeyle öğretimin bitmesi",
      "Hataların saklanması",
      "Uygulamadan kaçınmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Deneme ve uygulamaların tekrar edilmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Beceri öğretiminde öğrenci hedef düzeye ulaşana kadar hangi yaklaşım önemlidir?",
    "options": [
      "Tek denemeyle öğretimin bitmesi",
      "Hataların saklanması",
      "Uygulamadan kaçınmak",
      "Deneme ve uygulamaların tekrar edilmesi"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Deneme ve uygulamaların tekrar edilmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Beceri öğretiminde öğrenci hedef düzeye ulaşana kadar hangi yaklaşım önemlidir?",
    "options": [
      "Hataların saklanması",
      "Uygulamadan kaçınmak",
      "Deneme ve uygulamaların tekrar edilmesi",
      "Tek denemeyle öğretimin bitmesi"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Deneme ve uygulamaların tekrar edilmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Mesleki öğretimde görsel materyal kullanmanın faydalarından biri hangisidir?",
    "options": [
      "İşlemlerin anlaşılmasını ve somutlaştırılmasını desteklemek",
      "Öğrenmeyi zorlaştırmak",
      "Uygulamayı gereksiz kılmak",
      "Öğrenci dikkatini azaltmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlemlerin anlaşılmasını ve somutlaştırılmasını desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Mesleki öğretimde görsel materyal kullanmanın faydalarından biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrenmeyi zorlaştırmak",
      "Uygulamayı gereksiz kılmak",
      "Öğrenci dikkatini azaltmak",
      "İşlemlerin anlaşılmasını ve somutlaştırılmasını desteklemek"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlemlerin anlaşılmasını ve somutlaştırılmasını desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Mesleki öğretimde görsel materyal kullanmanın faydalarından biri hangisidir?",
    "options": [
      "Uygulamayı gereksiz kılmak",
      "Öğrenci dikkatini azaltmak",
      "İşlemlerin anlaşılmasını ve somutlaştırılmasını desteklemek",
      "Öğrenmeyi zorlaştırmak"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlemlerin anlaşılmasını ve somutlaştırılmasını desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Mesleki öğretimde görsel materyal kullanmanın faydalarından biri hangisidir?",
    "options": [
      "Öğrenci dikkatini azaltmak",
      "İşlemlerin anlaşılmasını ve somutlaştırılmasını desteklemek",
      "Öğrenmeyi zorlaştırmak",
      "Uygulamayı gereksiz kılmak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlemlerin anlaşılmasını ve somutlaştırılmasını desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Mesleki öğretimde öğreticinin dili nasıl olmalıdır?",
    "options": [
      "Karmaşık ve belirsiz",
      "Yalnız teknik terimlerden oluşan",
      "Öğrenciye göre değişmeyen, anlaşılmaz",
      "Basit, anlaşılır ve öğrencinin düzeyine uygun"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Basit, anlaşılır ve öğrencinin düzeyine uygun\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Mesleki öğretimde öğreticinin dili nasıl olmalıdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız teknik terimlerden oluşan",
      "Öğrenciye göre değişmeyen, anlaşılmaz",
      "Basit, anlaşılır ve öğrencinin düzeyine uygun",
      "Karmaşık ve belirsiz"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Basit, anlaşılır ve öğrencinin düzeyine uygun\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Mesleki öğretimde öğreticinin dili nasıl olmalıdır?",
    "options": [
      "Öğrenciye göre değişmeyen, anlaşılmaz",
      "Basit, anlaşılır ve öğrencinin düzeyine uygun",
      "Karmaşık ve belirsiz",
      "Yalnız teknik terimlerden oluşan"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Basit, anlaşılır ve öğrencinin düzeyine uygun\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Mesleki öğretimde öğreticinin dili nasıl olmalıdır?",
    "options": [
      "Basit, anlaşılır ve öğrencinin düzeyine uygun",
      "Karmaşık ve belirsiz",
      "Yalnız teknik terimlerden oluşan",
      "Öğrenciye göre değişmeyen, anlaşılmaz"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Basit, anlaşılır ve öğrencinin düzeyine uygun\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Mesleki becerilerin öğretiminde işlem basamaklarını göstererek anlatmak hangi yaklaşımı destekler?",
    "options": [
      "Salt ezber",
      "Öğrenmeden değerlendirme",
      "Göstererek ve uygulatarak öğrenme",
      "Yalnız soyut anlatım"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Göstererek ve uygulatarak öğrenme\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Mesleki becerilerin öğretiminde işlem basamaklarını göstererek anlatmak hangi yaklaşımı destekler. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrenmeden değerlendirme",
      "Göstererek ve uygulatarak öğrenme",
      "Yalnız soyut anlatım",
      "Salt ezber"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Göstererek ve uygulatarak öğrenme\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Mesleki becerilerin öğretiminde işlem basamaklarını göstererek anlatmak hangi yaklaşımı destekler?",
    "options": [
      "Göstererek ve uygulatarak öğrenme",
      "Yalnız soyut anlatım",
      "Salt ezber",
      "Öğrenmeden değerlendirme"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Göstererek ve uygulatarak öğrenme\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Mesleki becerilerin öğretiminde işlem basamaklarını göstererek anlatmak hangi yaklaşımı destekler?",
    "options": [
      "Yalnız soyut anlatım",
      "Salt ezber",
      "Öğrenmeden değerlendirme",
      "Göstererek ve uygulatarak öğrenme"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Göstererek ve uygulatarak öğrenme\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ergenlik döneminde öğretim açısından dikkate alınması gereken özelliklerden biri hangisidir?",
    "options": [
      "Duygusal değişimleri yok saymak",
      "Bireysel gelişim ve farklılıkların dikkate alınması",
      "Her öğrencinin aynı hızda geliştiğini varsaymak",
      "Öğrencilerin görüşlerini önemsememek"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bireysel gelişim ve farklılıkların dikkate alınması\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Ergenlik döneminde öğretim açısından dikkate alınması gereken özelliklerden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Bireysel gelişim ve farklılıkların dikkate alınması",
      "Her öğrencinin aynı hızda geliştiğini varsaymak",
      "Öğrencilerin görüşlerini önemsememek",
      "Duygusal değişimleri yok saymak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bireysel gelişim ve farklılıkların dikkate alınması\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ergenlik döneminde öğretim açısından dikkate alınması gereken özelliklerden biri hangisidir?",
    "options": [
      "Her öğrencinin aynı hızda geliştiğini varsaymak",
      "Öğrencilerin görüşlerini önemsememek",
      "Duygusal değişimleri yok saymak",
      "Bireysel gelişim ve farklılıkların dikkate alınması"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bireysel gelişim ve farklılıkların dikkate alınması\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ergenlik döneminde öğretim açısından dikkate alınması gereken özelliklerden biri hangisidir?",
    "options": [
      "Öğrencilerin görüşlerini önemsememek",
      "Duygusal değişimleri yok saymak",
      "Bireysel gelişim ve farklılıkların dikkate alınması",
      "Her öğrencinin aynı hızda geliştiğini varsaymak"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bireysel gelişim ve farklılıkların dikkate alınması\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Bir meslek alanında modüller hâlinde düzenlenmiş program hangi kavramdır?",
    "options": [
      "Haftalık ders çizelgesi",
      "Çerçeve öğretim programı",
      "Ders bilgi formları",
      "Modüler program"
    ],
    "answer": 3,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Modüler program\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "YORUM: Bir meslek alanında modüller hâlinde düzenlenmiş program hangi kavramdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Çerçeve öğretim programı",
      "Ders bilgi formları",
      "Modüler program",
      "Haftalık ders çizelgesi"
    ],
    "answer": 2,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Modüler program\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Bir meslek alanında modüller hâlinde düzenlenmiş program hangi kavramdır?",
    "options": [
      "Ders bilgi formları",
      "Modüler program",
      "Haftalık ders çizelgesi",
      "Çerçeve öğretim programı"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Modüler program\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Bir meslek alanında modüller hâlinde düzenlenmiş program hangi kavramdır?",
    "options": [
      "Modüler program",
      "Haftalık ders çizelgesi",
      "Çerçeve öğretim programı",
      "Ders bilgi formları"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Modüler program\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Bir meslek alanında mesleğin bilgi, beceri ve iş alışkanlıklarını iş içinde geliştiren kişi kimdir?",
    "options": [
      "Kalfa",
      "Çırak",
      "Usta",
      "Usta öğretici"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Çırak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Bir meslek alanında mesleğin bilgi, beceri ve iş alışkanlıklarını iş içinde geliştiren kişi kimdir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Çırak",
      "Usta",
      "Usta öğretici",
      "Kalfa"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Çırak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Bir meslek alanında mesleğin bilgi, beceri ve iş alışkanlıklarını iş içinde geliştiren kişi kimdir?",
    "options": [
      "Usta",
      "Usta öğretici",
      "Kalfa",
      "Çırak"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Çırak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Bir meslek alanında mesleğin bilgi, beceri ve iş alışkanlıklarını iş içinde geliştiren kişi kimdir?",
    "options": [
      "Usta öğretici",
      "Kalfa",
      "Çırak",
      "Usta"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Çırak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: bir eğitim öğretim yılı kaç hafta olarak verilmiştir?",
    "options": [
      "40 hafta",
      "44 hafta",
      "32 hafta",
      "36 hafta"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"36 hafta\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: bir eğitim öğretim yılı kaç hafta olarak verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "44 hafta",
      "32 hafta",
      "36 hafta",
      "40 hafta"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"36 hafta\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: bir eğitim öğretim yılı kaç hafta olarak verilmiştir?",
    "options": [
      "32 hafta",
      "36 hafta",
      "40 hafta",
      "44 hafta"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"36 hafta\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? bir eğitim öğretim yılı kaç hafta olarak verilmiştir?",
    "options": [
      "36 hafta",
      "40 hafta",
      "44 hafta",
      "32 hafta"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"36 hafta\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: çerçeve öğretim programları kaç yıl olarak tasarlanmıştır?",
    "options": [
      "4 yıl",
      "1 yıl",
      "2 yıl",
      "3 yıl"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"4 yıl\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: çerçeve öğretim programları kaç yıl olarak tasarlanmıştır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "1 yıl",
      "2 yıl",
      "3 yıl",
      "4 yıl"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"4 yıl\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: çerçeve öğretim programları kaç yıl olarak tasarlanmıştır?",
    "options": [
      "2 yıl",
      "3 yıl",
      "4 yıl",
      "1 yıl"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"4 yıl\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? çerçeve öğretim programları kaç yıl olarak tasarlanmıştır?",
    "options": [
      "3 yıl",
      "4 yıl",
      "1 yıl",
      "2 yıl"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"4 yıl\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: haftalık ders çizelgelerinde bulunmayan ders türü hangisidir?",
    "options": [
      "Ortak dersler",
      "Standart dersler",
      "Dal dersleri",
      "Alan dersleri"
    ],
    "answer": 1,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Standart dersler\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "YORUM: haftalık ders çizelgelerinde bulunmayan ders türü hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Standart dersler",
      "Dal dersleri",
      "Alan dersleri",
      "Ortak dersler"
    ],
    "answer": 0,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Standart dersler\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: haftalık ders çizelgelerinde bulunmayan ders türü hangisidir?",
    "options": [
      "Dal dersleri",
      "Alan dersleri",
      "Ortak dersler",
      "Standart dersler"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Standart dersler\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? haftalık ders çizelgelerinde bulunmayan ders türü hangisidir?",
    "options": [
      "Alan dersleri",
      "Ortak dersler",
      "Standart dersler",
      "Dal dersleri"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Standart dersler\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: yıl sonu başarı puanıyla başarılı sayılamayacak ders hangisidir?",
    "options": [
      "Matematik",
      "Mesleki Gelişim",
      "İşletmelerde Mesleki Eğitimi",
      "Din Kültürü ve Ahlak Bilgisi"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İşletmelerde Mesleki Eğitimi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: yıl sonu başarı puanıyla başarılı sayılamayacak ders hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Mesleki Gelişim",
      "İşletmelerde Mesleki Eğitimi",
      "Din Kültürü ve Ahlak Bilgisi",
      "Matematik"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İşletmelerde Mesleki Eğitimi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: yıl sonu başarı puanıyla başarılı sayılamayacak ders hangisidir?",
    "options": [
      "İşletmelerde Mesleki Eğitimi",
      "Din Kültürü ve Ahlak Bilgisi",
      "Matematik",
      "Mesleki Gelişim"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşletmelerde Mesleki Eğitimi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? yıl sonu başarı puanıyla başarılı sayılamayacak ders hangisidir?",
    "options": [
      "Din Kültürü ve Ahlak Bilgisi",
      "Matematik",
      "Mesleki Gelişim",
      "İşletmelerde Mesleki Eğitimi"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşletmelerde Mesleki Eğitimi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: işletme yıllık planını kimler yapar?",
    "options": [
      "İş yerinde çalışan ustalar",
      "İş yerinde çalışan usta öğreticiler",
      "Okulda alan öğretmenleri",
      "Okulda koordinatör müdür yardımcısı"
    ],
    "answer": 2,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Okulda alan öğretmenleri\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "YORUM: işletme yıllık planını kimler yapar. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İş yerinde çalışan usta öğreticiler",
      "Okulda alan öğretmenleri",
      "Okulda koordinatör müdür yardımcısı",
      "İş yerinde çalışan ustalar"
    ],
    "answer": 1,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Okulda alan öğretmenleri\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: işletme yıllık planını kimler yapar?",
    "options": [
      "Okulda alan öğretmenleri",
      "Okulda koordinatör müdür yardımcısı",
      "İş yerinde çalışan ustalar",
      "İş yerinde çalışan usta öğreticiler"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Okulda alan öğretmenleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? işletme yıllık planını kimler yapar?",
    "options": [
      "Okulda koordinatör müdür yardımcısı",
      "İş yerinde çalışan ustalar",
      "İş yerinde çalışan usta öğreticiler",
      "Okulda alan öğretmenleri"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Okulda alan öğretmenleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: işletme yıllık planında bulunmayan bilgi hangisidir?",
    "options": [
      "Ders saati",
      "Modül adı",
      "Ders adı",
      "Sınav soruları"
    ],
    "answer": 3,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Sınav soruları\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "YORUM: işletme yıllık planında bulunmayan bilgi hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Modül adı",
      "Ders adı",
      "Sınav soruları",
      "Ders saati"
    ],
    "answer": 2,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Sınav soruları\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: işletme yıllık planında bulunmayan bilgi hangisidir?",
    "options": [
      "Ders adı",
      "Sınav soruları",
      "Ders saati",
      "Modül adı"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Sınav soruları\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? işletme yıllık planında bulunmayan bilgi hangisidir?",
    "options": [
      "Sınav soruları",
      "Ders saati",
      "Modül adı",
      "Ders adı"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Sınav soruları\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Öğretim programının temel işlevlerinden biri hangisidir?",
    "options": [
      "Eğitim hedefleri, içerik, öğrenme süreçleri ve değerlendirmeyi düzenlemek",
      "Yalnız personel izinlerini düzenlemek",
      "İşletmenin satışlarını belirlemek",
      "Öğrenci devamını tamamen kaldırmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eğitim hedefleri, içerik, öğrenme süreçleri ve değerlendirmeyi düzenlemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Öğretim programının temel işlevlerinden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız personel izinlerini düzenlemek",
      "İşletmenin satışlarını belirlemek",
      "Öğrenci devamını tamamen kaldırmak",
      "Eğitim hedefleri, içerik, öğrenme süreçleri ve değerlendirmeyi düzenlemek"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eğitim hedefleri, içerik, öğrenme süreçleri ve değerlendirmeyi düzenlemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Öğretim programının temel işlevlerinden biri hangisidir?",
    "options": [
      "İşletmenin satışlarını belirlemek",
      "Öğrenci devamını tamamen kaldırmak",
      "Eğitim hedefleri, içerik, öğrenme süreçleri ve değerlendirmeyi düzenlemek",
      "Yalnız personel izinlerini düzenlemek"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eğitim hedefleri, içerik, öğrenme süreçleri ve değerlendirmeyi düzenlemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Öğretim programının temel işlevlerinden biri hangisidir?",
    "options": [
      "Öğrenci devamını tamamen kaldırmak",
      "Eğitim hedefleri, içerik, öğrenme süreçleri ve değerlendirmeyi düzenlemek",
      "Yalnız personel izinlerini düzenlemek",
      "İşletmenin satışlarını belirlemek"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eğitim hedefleri, içerik, öğrenme süreçleri ve değerlendirmeyi düzenlemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İşletme yıllık planının mesleki eğitim açısından temel amacı hangisidir?",
    "options": [
      "İşletmenin muhasebesini düzenlemek",
      "Öğrencilerin izinlerini belirlemek",
      "Sınavları plansız yapmak",
      "Öğretim programına uygun eğitim faaliyetlerini planlamak"
    ],
    "answer": 3,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Öğretim programına uygun eğitim faaliyetlerini planlamak\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "YORUM: İşletme yıllık planının mesleki eğitim açısından temel amacı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrencilerin izinlerini belirlemek",
      "Sınavları plansız yapmak",
      "Öğretim programına uygun eğitim faaliyetlerini planlamak",
      "İşletmenin muhasebesini düzenlemek"
    ],
    "answer": 2,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Öğretim programına uygun eğitim faaliyetlerini planlamak\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İşletme yıllık planının mesleki eğitim açısından temel amacı hangisidir?",
    "options": [
      "Sınavları plansız yapmak",
      "Öğretim programına uygun eğitim faaliyetlerini planlamak",
      "İşletmenin muhasebesini düzenlemek",
      "Öğrencilerin izinlerini belirlemek"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğretim programına uygun eğitim faaliyetlerini planlamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İşletme yıllık planının mesleki eğitim açısından temel amacı hangisidir?",
    "options": [
      "Öğretim programına uygun eğitim faaliyetlerini planlamak",
      "İşletmenin muhasebesini düzenlemek",
      "Öğrencilerin izinlerini belirlemek",
      "Sınavları plansız yapmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğretim programına uygun eğitim faaliyetlerini planlamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Mesleki eğitimde okul ve işletme iş birliğinin temel amacı hangisidir?",
    "options": [
      "İşletmenin sorumluluğunu azaltmak",
      "Öğrenciyi değerlendirme dışı bırakmak",
      "Eğitim programının iş yerindeki uygulamalarla bütünleşmesini sağlamak",
      "Okul eğitimini ortadan kaldırmak"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Eğitim programının iş yerindeki uygulamalarla bütünleşmesini sağlamak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Mesleki eğitimde okul ve işletme iş birliğinin temel amacı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrenciyi değerlendirme dışı bırakmak",
      "Eğitim programının iş yerindeki uygulamalarla bütünleşmesini sağlamak",
      "Okul eğitimini ortadan kaldırmak",
      "İşletmenin sorumluluğunu azaltmak"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Eğitim programının iş yerindeki uygulamalarla bütünleşmesini sağlamak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Mesleki eğitimde okul ve işletme iş birliğinin temel amacı hangisidir?",
    "options": [
      "Eğitim programının iş yerindeki uygulamalarla bütünleşmesini sağlamak",
      "Okul eğitimini ortadan kaldırmak",
      "İşletmenin sorumluluğunu azaltmak",
      "Öğrenciyi değerlendirme dışı bırakmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eğitim programının iş yerindeki uygulamalarla bütünleşmesini sağlamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Mesleki eğitimde okul ve işletme iş birliğinin temel amacı hangisidir?",
    "options": [
      "Okul eğitimini ortadan kaldırmak",
      "İşletmenin sorumluluğunu azaltmak",
      "Öğrenciyi değerlendirme dışı bırakmak",
      "Eğitim programının iş yerindeki uygulamalarla bütünleşmesini sağlamak"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eğitim programının iş yerindeki uygulamalarla bütünleşmesini sağlamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Modüler program yaklaşımında öğretim içeriği nasıl düzenlenir?",
    "options": [
      "Sınavlardan bağımsız",
      "Modüller ve kazanımlar temelinde yapılandırılır",
      "Yalnız tek bir ders kitabı bölümü olarak",
      "Öğrenciye göre belirsiz biçimde"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Modüller ve kazanımlar temelinde yapılandırılır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Modüler program yaklaşımında öğretim içeriği nasıl düzenlenir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Modüller ve kazanımlar temelinde yapılandırılır",
      "Yalnız tek bir ders kitabı bölümü olarak",
      "Öğrenciye göre belirsiz biçimde",
      "Sınavlardan bağımsız"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Modüller ve kazanımlar temelinde yapılandırılır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Modüler program yaklaşımında öğretim içeriği nasıl düzenlenir?",
    "options": [
      "Yalnız tek bir ders kitabı bölümü olarak",
      "Öğrenciye göre belirsiz biçimde",
      "Sınavlardan bağımsız",
      "Modüller ve kazanımlar temelinde yapılandırılır"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Modüller ve kazanımlar temelinde yapılandırılır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Modüler program yaklaşımında öğretim içeriği nasıl düzenlenir?",
    "options": [
      "Öğrenciye göre belirsiz biçimde",
      "Sınavlardan bağımsız",
      "Modüller ve kazanımlar temelinde yapılandırılır",
      "Yalnız tek bir ders kitabı bölümü olarak"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Modüller ve kazanımlar temelinde yapılandırılır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: ki kalite testinde kalite hangi sonucu sağlamaz?",
    "options": [
      "Müşteri memnuniyeti",
      "Gereksiz kullanım",
      "Üretimde hatasızlık",
      "Güvenli ürün"
    ],
    "answer": 1,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Gereksiz kullanım\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: ki kalite testinde kalite hangi sonucu sağlamaz. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Gereksiz kullanım",
      "Üretimde hatasızlık",
      "Güvenli ürün",
      "Müşteri memnuniyeti"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Gereksiz kullanım\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: ki kalite testinde kalite hangi sonucu sağlamaz?",
    "options": [
      "Üretimde hatasızlık",
      "Güvenli ürün",
      "Müşteri memnuniyeti",
      "Gereksiz kullanım"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gereksiz kullanım\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? ki kalite testinde kalite hangi sonucu sağlamaz?",
    "options": [
      "Güvenli ürün",
      "Müşteri memnuniyeti",
      "Gereksiz kullanım",
      "Üretimde hatasızlık"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gereksiz kullanım\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Belirli bir amaca ulaşabilmek için katlanılan fedakârlıkların parasal tutarı hangi kavramdır?",
    "options": [
      "Fayda",
      "İhtiyaç",
      "Maliyet",
      "Ürün"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Maliyet\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Belirli bir amaca ulaşabilmek için katlanılan fedakârlıkların parasal tutarı hangi kavramdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İhtiyaç",
      "Maliyet",
      "Ürün",
      "Fayda"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Maliyet\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Belirli bir amaca ulaşabilmek için katlanılan fedakârlıkların parasal tutarı hangi kavramdır?",
    "options": [
      "Maliyet",
      "Ürün",
      "Fayda",
      "İhtiyaç"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Maliyet\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Belirli bir amaca ulaşabilmek için katlanılan fedakârlıkların parasal tutarı hangi kavramdır?",
    "options": [
      "Ürün",
      "Fayda",
      "İhtiyaç",
      "Maliyet"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Maliyet\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: kalite ve verimliliğin ekonomiye sağladığı faydalar hangi seçenekte topluca verilmiştir?",
    "options": [
      "İsrafı önlemesi",
      "Hepsi",
      "Maliyeti düşürmesi",
      "Rekabeti geliştirmesi"
    ],
    "answer": 1,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Hepsi\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: kalite ve verimliliğin ekonomiye sağladığı faydalar hangi seçenekte topluca verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Hepsi",
      "Maliyeti düşürmesi",
      "Rekabeti geliştirmesi",
      "İsrafı önlemesi"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Hepsi\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: kalite ve verimliliğin ekonomiye sağladığı faydalar hangi seçenekte topluca verilmiştir?",
    "options": [
      "Maliyeti düşürmesi",
      "Rekabeti geliştirmesi",
      "İsrafı önlemesi",
      "Hepsi"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hepsi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? kalite ve verimliliğin ekonomiye sağladığı faydalar hangi seçenekte topluca verilmiştir?",
    "options": [
      "Rekabeti geliştirmesi",
      "İsrafı önlemesi",
      "Hepsi",
      "Maliyeti düşürmesi"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hepsi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Bir işletmede hedeflenen kalitenin gerçekleşmesi için sürdürülen faaliyetlerin tamamı hangi kavramdır?",
    "options": [
      "Bakım onarım",
      "Personel geliştirme",
      "Mali işlemler",
      "Kalite yönetim sistemleri"
    ],
    "answer": 3,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Kalite yönetim sistemleri\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: Bir işletmede hedeflenen kalitenin gerçekleşmesi için sürdürülen faaliyetlerin tamamı hangi kavramdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Personel geliştirme",
      "Mali işlemler",
      "Kalite yönetim sistemleri",
      "Bakım onarım"
    ],
    "answer": 2,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Kalite yönetim sistemleri\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Bir işletmede hedeflenen kalitenin gerçekleşmesi için sürdürülen faaliyetlerin tamamı hangi kavramdır?",
    "options": [
      "Mali işlemler",
      "Kalite yönetim sistemleri",
      "Bakım onarım",
      "Personel geliştirme"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kalite yönetim sistemleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Bir işletmede hedeflenen kalitenin gerçekleşmesi için sürdürülen faaliyetlerin tamamı hangi kavramdır?",
    "options": [
      "Kalite yönetim sistemleri",
      "Bakım onarım",
      "Personel geliştirme",
      "Mali işlemler"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kalite yönetim sistemleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Bir işletmenin mal ve hizmetlerinin diğerlerinden ayırt edilmesini sağlayan ve baskı yoluyla yayımlanabilen işaret hangi kavramdır?",
    "options": [
      "Marka",
      "Coğrafi işaret",
      "Kalite",
      "Patent"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Marka\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Bir işletmenin mal ve hizmetlerinin diğerlerinden ayırt edilmesini sağlayan ve baskı yoluyla yayımlanabilen işaret hangi kavramdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Coğrafi işaret",
      "Kalite",
      "Patent",
      "Marka"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Marka\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Bir işletmenin mal ve hizmetlerinin diğerlerinden ayırt edilmesini sağlayan ve baskı yoluyla yayımlanabilen işaret hangi kavramdır?",
    "options": [
      "Kalite",
      "Patent",
      "Marka",
      "Coğrafi işaret"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Marka\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Bir işletmenin mal ve hizmetlerinin diğerlerinden ayırt edilmesini sağlayan ve baskı yoluyla yayımlanabilen işaret hangi kavramdır?",
    "options": [
      "Patent",
      "Marka",
      "Coğrafi işaret",
      "Kalite"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Marka\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Buluş sahibinin buluş konusu ürünü belirli süre üretme, kullanma, satma ve ihraç etme hakkı hangi kavramdır?",
    "options": [
      "Faydalı model",
      "Marka",
      "Patent",
      "Coğrafi işaret"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Patent\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Buluş sahibinin buluş konusu ürünü belirli süre üretme, kullanma, satma ve ihraç etme hakkı hangi kavramdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Marka",
      "Patent",
      "Coğrafi işaret",
      "Faydalı model"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Patent\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Buluş sahibinin buluş konusu ürünü belirli süre üretme, kullanma, satma ve ihraç etme hakkı hangi kavramdır?",
    "options": [
      "Patent",
      "Coğrafi işaret",
      "Faydalı model",
      "Marka"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Patent\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Buluş sahibinin buluş konusu ürünü belirli süre üretme, kullanma, satma ve ihraç etme hakkı hangi kavramdır?",
    "options": [
      "Coğrafi işaret",
      "Faydalı model",
      "Marka",
      "Patent"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Patent\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Verimlilik genel olarak hangi ilişkiyi ifade eder?",
    "options": [
      "Yalnız satış fiyatı",
      "Üretimdeki hata sayısı",
      "Üretim çıktılarının kullanılan girdilere oranı",
      "Yalnız çalışan sayısı"
    ],
    "answer": 2,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Üretim çıktılarının kullanılan girdilere oranı\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: Verimlilik genel olarak hangi ilişkiyi ifade eder. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Üretimdeki hata sayısı",
      "Üretim çıktılarının kullanılan girdilere oranı",
      "Yalnız çalışan sayısı",
      "Yalnız satış fiyatı"
    ],
    "answer": 1,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Üretim çıktılarının kullanılan girdilere oranı\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Verimlilik genel olarak hangi ilişkiyi ifade eder?",
    "options": [
      "Üretim çıktılarının kullanılan girdilere oranı",
      "Yalnız çalışan sayısı",
      "Yalnız satış fiyatı",
      "Üretimdeki hata sayısı"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Üretim çıktılarının kullanılan girdilere oranı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Verimlilik genel olarak hangi ilişkiyi ifade eder?",
    "options": [
      "Yalnız çalışan sayısı",
      "Yalnız satış fiyatı",
      "Üretimdeki hata sayısı",
      "Üretim çıktılarının kullanılan girdilere oranı"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Üretim çıktılarının kullanılan girdilere oranı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Kalite yaklaşımının müşteri açısından temel hedeflerinden biri hangisidir?",
    "options": [
      "Ürün güvenliğini azaltmak",
      "Müşteri ihtiyaç ve beklentilerini karşılamak",
      "Müşterinin beklentilerini göz ardı etmek",
      "Yalnız üretim hızını artırmak"
    ],
    "answer": 1,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Müşteri ihtiyaç ve beklentilerini karşılamak\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: Kalite yaklaşımının müşteri açısından temel hedeflerinden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Müşteri ihtiyaç ve beklentilerini karşılamak",
      "Müşterinin beklentilerini göz ardı etmek",
      "Yalnız üretim hızını artırmak",
      "Ürün güvenliğini azaltmak"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Müşteri ihtiyaç ve beklentilerini karşılamak\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Kalite yaklaşımının müşteri açısından temel hedeflerinden biri hangisidir?",
    "options": [
      "Müşterinin beklentilerini göz ardı etmek",
      "Yalnız üretim hızını artırmak",
      "Ürün güvenliğini azaltmak",
      "Müşteri ihtiyaç ve beklentilerini karşılamak"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Müşteri ihtiyaç ve beklentilerini karşılamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Kalite yaklaşımının müşteri açısından temel hedeflerinden biri hangisidir?",
    "options": [
      "Yalnız üretim hızını artırmak",
      "Ürün güvenliğini azaltmak",
      "Müşteri ihtiyaç ve beklentilerini karşılamak",
      "Müşterinin beklentilerini göz ardı etmek"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Müşteri ihtiyaç ve beklentilerini karşılamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İsrafın azaltılması kalite ve verimlilik açısından hangi sonucu destekler?",
    "options": [
      "Kaynakların daha etkin kullanılmasını",
      "Maliyetlerin gereksiz artmasını",
      "Üretim kayıplarını artırmayı",
      "Hataları gizlemeyi"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Kaynakların daha etkin kullanılmasını\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: İsrafın azaltılması kalite ve verimlilik açısından hangi sonucu destekler. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Maliyetlerin gereksiz artmasını",
      "Üretim kayıplarını artırmayı",
      "Hataları gizlemeyi",
      "Kaynakların daha etkin kullanılmasını"
    ],
    "answer": 3,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Kaynakların daha etkin kullanılmasını\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İsrafın azaltılması kalite ve verimlilik açısından hangi sonucu destekler?",
    "options": [
      "Üretim kayıplarını artırmayı",
      "Hataları gizlemeyi",
      "Kaynakların daha etkin kullanılmasını",
      "Maliyetlerin gereksiz artmasını"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kaynakların daha etkin kullanılmasını\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İsrafın azaltılması kalite ve verimlilik açısından hangi sonucu destekler?",
    "options": [
      "Hataları gizlemeyi",
      "Kaynakların daha etkin kullanılmasını",
      "Maliyetlerin gereksiz artmasını",
      "Üretim kayıplarını artırmayı"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kaynakların daha etkin kullanılmasını\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Standartların temel işlevlerinden biri hangisidir?",
    "options": [
      "Ürünlerin tümünü farklılaştırmak",
      "Kalite denetimini kaldırmak",
      "Yalnız fiyat belirlemek",
      "Ürün, süreç veya hizmetlerde ortak ölçüt ve düzen sağlamak"
    ],
    "answer": 3,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Ürün, süreç veya hizmetlerde ortak ölçüt ve düzen sağlamak\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: Standartların temel işlevlerinden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Kalite denetimini kaldırmak",
      "Yalnız fiyat belirlemek",
      "Ürün, süreç veya hizmetlerde ortak ölçüt ve düzen sağlamak",
      "Ürünlerin tümünü farklılaştırmak"
    ],
    "answer": 2,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Ürün, süreç veya hizmetlerde ortak ölçüt ve düzen sağlamak\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Standartların temel işlevlerinden biri hangisidir?",
    "options": [
      "Yalnız fiyat belirlemek",
      "Ürün, süreç veya hizmetlerde ortak ölçüt ve düzen sağlamak",
      "Ürünlerin tümünü farklılaştırmak",
      "Kalite denetimini kaldırmak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ürün, süreç veya hizmetlerde ortak ölçüt ve düzen sağlamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Standartların temel işlevlerinden biri hangisidir?",
    "options": [
      "Ürün, süreç veya hizmetlerde ortak ölçüt ve düzen sağlamak",
      "Ürünlerin tümünü farklılaştırmak",
      "Kalite denetimini kaldırmak",
      "Yalnız fiyat belirlemek"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ürün, süreç veya hizmetlerde ortak ölçüt ve düzen sağlamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Coğrafi işaret kavramı hangi özellik ile ilişkilidir?",
    "options": [
      "İşletme personelinin kimliği",
      "Üretim maliyetlerinin hesaplanması",
      "Ürünlerin belirli bir yöreyle bağlantılı niteliği, ünü veya özelliği",
      "Her ürünün patentlenmesi"
    ],
    "answer": 2,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Ürünlerin belirli bir yöreyle bağlantılı niteliği, ünü veya özelliği\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: Coğrafi işaret kavramı hangi özellik ile ilişkilidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Üretim maliyetlerinin hesaplanması",
      "Ürünlerin belirli bir yöreyle bağlantılı niteliği, ünü veya özelliği",
      "Her ürünün patentlenmesi",
      "İşletme personelinin kimliği"
    ],
    "answer": 1,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Ürünlerin belirli bir yöreyle bağlantılı niteliği, ünü veya özelliği\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Coğrafi işaret kavramı hangi özellik ile ilişkilidir?",
    "options": [
      "Ürünlerin belirli bir yöreyle bağlantılı niteliği, ünü veya özelliği",
      "Her ürünün patentlenmesi",
      "İşletme personelinin kimliği",
      "Üretim maliyetlerinin hesaplanması"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ürünlerin belirli bir yöreyle bağlantılı niteliği, ünü veya özelliği\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Coğrafi işaret kavramı hangi özellik ile ilişkilidir?",
    "options": [
      "Her ürünün patentlenmesi",
      "İşletme personelinin kimliği",
      "Üretim maliyetlerinin hesaplanması",
      "Ürünlerin belirli bir yöreyle bağlantılı niteliği, ünü veya özelliği"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ürünlerin belirli bir yöreyle bağlantılı niteliği, ünü veya özelliği\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Faydalı model kavramı patent ve marka başlıklarıyla birlikte hangi genel konu içinde ele alınır?",
    "options": [
      "İletişim",
      "Fikri ve sınai haklarla ilgili kavramlar",
      "İş sağlığı",
      "Eğitim psikolojisi"
    ],
    "answer": 1,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Fikri ve sınai haklarla ilgili kavramlar\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: Faydalı model kavramı patent ve marka başlıklarıyla birlikte hangi genel konu içinde ele alınır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Fikri ve sınai haklarla ilgili kavramlar",
      "İş sağlığı",
      "Eğitim psikolojisi",
      "İletişim"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Fikri ve sınai haklarla ilgili kavramlar\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Faydalı model kavramı patent ve marka başlıklarıyla birlikte hangi genel konu içinde ele alınır?",
    "options": [
      "İş sağlığı",
      "Eğitim psikolojisi",
      "İletişim",
      "Fikri ve sınai haklarla ilgili kavramlar"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Fikri ve sınai haklarla ilgili kavramlar\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Faydalı model kavramı patent ve marka başlıklarıyla birlikte hangi genel konu içinde ele alınır?",
    "options": [
      "Eğitim psikolojisi",
      "İletişim",
      "Fikri ve sınai haklarla ilgili kavramlar",
      "İş sağlığı"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Fikri ve sınai haklarla ilgili kavramlar\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Kalite yönetim sistemlerinin işletmelerdeki temel işlevlerinden biri hangisidir?",
    "options": [
      "Kaliteyi planlı, sistematik ve sürekli faaliyetlerle güvence altına almak",
      "Kaliteyi yalnız son kontrolde değerlendirmek",
      "İş süreçlerini belirsizleştirmek",
      "Müşteri geri bildirimini dışlamak"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Kaliteyi planlı, sistematik ve sürekli faaliyetlerle güvence altına almak\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: Kalite yönetim sistemlerinin işletmelerdeki temel işlevlerinden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Kaliteyi yalnız son kontrolde değerlendirmek",
      "İş süreçlerini belirsizleştirmek",
      "Müşteri geri bildirimini dışlamak",
      "Kaliteyi planlı, sistematik ve sürekli faaliyetlerle güvence altına almak"
    ],
    "answer": 3,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Kaliteyi planlı, sistematik ve sürekli faaliyetlerle güvence altına almak\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Kalite yönetim sistemlerinin işletmelerdeki temel işlevlerinden biri hangisidir?",
    "options": [
      "İş süreçlerini belirsizleştirmek",
      "Müşteri geri bildirimini dışlamak",
      "Kaliteyi planlı, sistematik ve sürekli faaliyetlerle güvence altına almak",
      "Kaliteyi yalnız son kontrolde değerlendirmek"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kaliteyi planlı, sistematik ve sürekli faaliyetlerle güvence altına almak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Kalite yönetim sistemlerinin işletmelerdeki temel işlevlerinden biri hangisidir?",
    "options": [
      "Müşteri geri bildirimini dışlamak",
      "Kaliteyi planlı, sistematik ve sürekli faaliyetlerle güvence altına almak",
      "Kaliteyi yalnız son kontrolde değerlendirmek",
      "İş süreçlerini belirsizleştirmek"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kaliteyi planlı, sistematik ve sürekli faaliyetlerle güvence altına almak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Sürekli iyileştirme yaklaşımı hangi düşünceyi temel alır?",
    "options": [
      "Bir kez belirlenen süreçlerin değişmemesini",
      "Hataların görmezden gelinmesini",
      "İşletme öğrenmesini engellemeyi",
      "Süreç ve sonuçların düzenli olarak geliştirilmesini"
    ],
    "answer": 3,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Süreç ve sonuçların düzenli olarak geliştirilmesini\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: Sürekli iyileştirme yaklaşımı hangi düşünceyi temel alır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Hataların görmezden gelinmesini",
      "İşletme öğrenmesini engellemeyi",
      "Süreç ve sonuçların düzenli olarak geliştirilmesini",
      "Bir kez belirlenen süreçlerin değişmemesini"
    ],
    "answer": 2,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Süreç ve sonuçların düzenli olarak geliştirilmesini\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Sürekli iyileştirme yaklaşımı hangi düşünceyi temel alır?",
    "options": [
      "İşletme öğrenmesini engellemeyi",
      "Süreç ve sonuçların düzenli olarak geliştirilmesini",
      "Bir kez belirlenen süreçlerin değişmemesini",
      "Hataların görmezden gelinmesini"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Süreç ve sonuçların düzenli olarak geliştirilmesini\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Sürekli iyileştirme yaklaşımı hangi düşünceyi temel alır?",
    "options": [
      "Süreç ve sonuçların düzenli olarak geliştirilmesini",
      "Bir kez belirlenen süreçlerin değişmemesini",
      "Hataların görmezden gelinmesini",
      "İşletme öğrenmesini engellemeyi"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Süreç ve sonuçların düzenli olarak geliştirilmesini\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ölçmeye konu olan özelliğin hangi miktarına ne değer verileceğinin belirlenmesi hangi kavramdır?",
    "options": [
      "Geçerlik",
      "Ölçme kuralı",
      "Birim",
      "Ölçüt"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme kuralı\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ölçmeye konu olan özelliğin hangi miktarına ne değer verileceğinin belirlenmesi hangi kavramdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ölçme kuralı",
      "Birim",
      "Ölçüt",
      "Geçerlik"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme kuralı\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ölçmeye konu olan özelliğin hangi miktarına ne değer verileceğinin belirlenmesi hangi kavramdır?",
    "options": [
      "Birim",
      "Ölçüt",
      "Geçerlik",
      "Ölçme kuralı"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçme kuralı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ölçmeye konu olan özelliğin hangi miktarına ne değer verileceğinin belirlenmesi hangi kavramdır?",
    "options": [
      "Ölçüt",
      "Geçerlik",
      "Ölçme kuralı",
      "Birim"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçme kuralı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Taklit önemli bir yere sahip olan öğrenme türü hangisidir?",
    "options": [
      "Bilişsel öğrenme",
      "Koşullanma yoluyla öğrenme",
      "Edimsel koşullanma",
      "Model alarak öğrenme"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Model alarak öğrenme\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Taklit önemli bir yere sahip olan öğrenme türü hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Koşullanma yoluyla öğrenme",
      "Edimsel koşullanma",
      "Model alarak öğrenme",
      "Bilişsel öğrenme"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Model alarak öğrenme\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Taklit önemli bir yere sahip olan öğrenme türü hangisidir?",
    "options": [
      "Edimsel koşullanma",
      "Model alarak öğrenme",
      "Bilişsel öğrenme",
      "Koşullanma yoluyla öğrenme"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Model alarak öğrenme\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Taklit önemli bir yere sahip olan öğrenme türü hangisidir?",
    "options": [
      "Model alarak öğrenme",
      "Bilişsel öğrenme",
      "Koşullanma yoluyla öğrenme",
      "Edimsel koşullanma"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Model alarak öğrenme\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Yanıtlayıcının soruları düşünüp hatırlayarak ve yanıtını organize edip yazılı olarak sunduğu sınav türü hangisidir?",
    "options": [
      "Çoktan seçmeli test",
      "Yazılı sınav",
      "Eşleştirme testi",
      "Sözlü sınav"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Yazılı sınav\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Yanıtlayıcının soruları düşünüp hatırlayarak ve yanıtını organize edip yazılı olarak sunduğu sınav türü hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yazılı sınav",
      "Eşleştirme testi",
      "Sözlü sınav",
      "Çoktan seçmeli test"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Yazılı sınav\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Yanıtlayıcının soruları düşünüp hatırlayarak ve yanıtını organize edip yazılı olarak sunduğu sınav türü hangisidir?",
    "options": [
      "Eşleştirme testi",
      "Sözlü sınav",
      "Çoktan seçmeli test",
      "Yazılı sınav"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Yazılı sınav\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Yanıtlayıcının soruları düşünüp hatırlayarak ve yanıtını organize edip yazılı olarak sunduğu sınav türü hangisidir?",
    "options": [
      "Sözlü sınav",
      "Çoktan seçmeli test",
      "Yazılı sınav",
      "Eşleştirme testi"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Yazılı sınav\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: ölçme ve değerlendirmenin sağladığı faydalardan biri olmayan hangisidir?",
    "options": [
      "Öğrenme eksikliklerinin tespiti",
      "Eğiticinin mesleki yeterliliğini artırma",
      "Doğru ve etkili geri bildirim verme",
      "Eğitim süreçlerinin verimliliğinin kontrolü"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Eğiticinin mesleki yeterliliğini artırma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: ölçme ve değerlendirmenin sağladığı faydalardan biri olmayan hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Eğiticinin mesleki yeterliliğini artırma",
      "Doğru ve etkili geri bildirim verme",
      "Eğitim süreçlerinin verimliliğinin kontrolü",
      "Öğrenme eksikliklerinin tespiti"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Eğiticinin mesleki yeterliliğini artırma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: ölçme ve değerlendirmenin sağladığı faydalardan biri olmayan hangisidir?",
    "options": [
      "Doğru ve etkili geri bildirim verme",
      "Eğitim süreçlerinin verimliliğinin kontrolü",
      "Öğrenme eksikliklerinin tespiti",
      "Eğiticinin mesleki yeterliliğini artırma"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eğiticinin mesleki yeterliliğini artırma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? ölçme ve değerlendirmenin sağladığı faydalardan biri olmayan hangisidir?",
    "options": [
      "Eğitim süreçlerinin verimliliğinin kontrolü",
      "Öğrenme eksikliklerinin tespiti",
      "Eğiticinin mesleki yeterliliğini artırma",
      "Doğru ve etkili geri bildirim verme"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eğiticinin mesleki yeterliliğini artırma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Derste anlatılmayan konuları sınavda sorma hangi ölçme ilkesini zayıflatır?",
    "options": [
      "Kullanışlık",
      "Örneklemecilik",
      "Geçerlik",
      "Güvenirlik"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Geçerlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Derste anlatılmayan konuları sınavda sorma hangi ölçme ilkesini zayıflatır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Örneklemecilik",
      "Geçerlik",
      "Güvenirlik",
      "Kullanışlık"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Geçerlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Derste anlatılmayan konuları sınavda sorma hangi ölçme ilkesini zayıflatır?",
    "options": [
      "Geçerlik",
      "Güvenirlik",
      "Kullanışlık",
      "Örneklemecilik"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Geçerlik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Derste anlatılmayan konuları sınavda sorma hangi ölçme ilkesini zayıflatır?",
    "options": [
      "Güvenirlik",
      "Kullanışlık",
      "Örneklemecilik",
      "Geçerlik"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Geçerlik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: beceri eğitimi faaliyetlerinden biri olamayacak seçenek hangisidir?",
    "options": [
      "Araç ve gereçleri tertipli düzenli kullanmamak",
      "Günlük öğrenci çalışmalarını çizelge üzerine belirlemek",
      "Kazanılan becerileri iş yapma testleri ile sınamak",
      "Güvenlik kural ve tedbirlerine uygun hareket etmek"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Araç ve gereçleri tertipli düzenli kullanmamak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: beceri eğitimi faaliyetlerinden biri olamayacak seçenek hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Günlük öğrenci çalışmalarını çizelge üzerine belirlemek",
      "Kazanılan becerileri iş yapma testleri ile sınamak",
      "Güvenlik kural ve tedbirlerine uygun hareket etmek",
      "Araç ve gereçleri tertipli düzenli kullanmamak"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Araç ve gereçleri tertipli düzenli kullanmamak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: beceri eğitimi faaliyetlerinden biri olamayacak seçenek hangisidir?",
    "options": [
      "Kazanılan becerileri iş yapma testleri ile sınamak",
      "Güvenlik kural ve tedbirlerine uygun hareket etmek",
      "Araç ve gereçleri tertipli düzenli kullanmamak",
      "Günlük öğrenci çalışmalarını çizelge üzerine belirlemek"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Araç ve gereçleri tertipli düzenli kullanmamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? beceri eğitimi faaliyetlerinden biri olamayacak seçenek hangisidir?",
    "options": [
      "Güvenlik kural ve tedbirlerine uygun hareket etmek",
      "Araç ve gereçleri tertipli düzenli kullanmamak",
      "Günlük öğrenci çalışmalarını çizelge üzerine belirlemek",
      "Kazanılan becerileri iş yapma testleri ile sınamak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Araç ve gereçleri tertipli düzenli kullanmamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ölçme nedir?",
    "options": [
      "Bir niteliğin gözlenip sonuçlarının sayı veya sembollerle ifade edilmesi",
      "Ölçme sonuçlarının yargıya dönüştürülmesi",
      "Yalnız sınav yapmak",
      "Öğrenciye geri bildirim vermek"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bir niteliğin gözlenip sonuçlarının sayı veya sembollerle ifade edilmesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ölçme nedir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ölçme sonuçlarının yargıya dönüştürülmesi",
      "Yalnız sınav yapmak",
      "Öğrenciye geri bildirim vermek",
      "Bir niteliğin gözlenip sonuçlarının sayı veya sembollerle ifade edilmesi"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bir niteliğin gözlenip sonuçlarının sayı veya sembollerle ifade edilmesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ölçme nedir?",
    "options": [
      "Yalnız sınav yapmak",
      "Öğrenciye geri bildirim vermek",
      "Bir niteliğin gözlenip sonuçlarının sayı veya sembollerle ifade edilmesi",
      "Ölçme sonuçlarının yargıya dönüştürülmesi"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bir niteliğin gözlenip sonuçlarının sayı veya sembollerle ifade edilmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ölçme nedir?",
    "options": [
      "Öğrenciye geri bildirim vermek",
      "Bir niteliğin gözlenip sonuçlarının sayı veya sembollerle ifade edilmesi",
      "Ölçme sonuçlarının yargıya dönüştürülmesi",
      "Yalnız sınav yapmak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bir niteliğin gözlenip sonuçlarının sayı veya sembollerle ifade edilmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ölçüm nedir?",
    "options": [
      "Ölçme aracının hazırlanması",
      "Öğretim hedefi",
      "Sınavın uygulanma süresi",
      "Ölçme işlemi sonunda elde edilen sayı veya sembol"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme işlemi sonunda elde edilen sayı veya sembol\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ölçüm nedir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğretim hedefi",
      "Sınavın uygulanma süresi",
      "Ölçme işlemi sonunda elde edilen sayı veya sembol",
      "Ölçme aracının hazırlanması"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme işlemi sonunda elde edilen sayı veya sembol\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ölçüm nedir?",
    "options": [
      "Sınavın uygulanma süresi",
      "Ölçme işlemi sonunda elde edilen sayı veya sembol",
      "Ölçme aracının hazırlanması",
      "Öğretim hedefi"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçme işlemi sonunda elde edilen sayı veya sembol\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ölçüm nedir?",
    "options": [
      "Ölçme işlemi sonunda elde edilen sayı veya sembol",
      "Ölçme aracının hazırlanması",
      "Öğretim hedefi",
      "Sınavın uygulanma süresi"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçme işlemi sonunda elde edilen sayı veya sembol\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Bir ölçme aracının en küçük parçası olarak tanımlanan kavram hangisidir?",
    "options": [
      "Hüküm",
      "Veri",
      "Ölçüt",
      "Birim"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Birim\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Bir ölçme aracının en küçük parçası olarak tanımlanan kavram hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Veri",
      "Ölçüt",
      "Birim",
      "Hüküm"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Birim\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Bir ölçme aracının en küçük parçası olarak tanımlanan kavram hangisidir?",
    "options": [
      "Ölçüt",
      "Birim",
      "Hüküm",
      "Veri"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Birim\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Bir ölçme aracının en küçük parçası olarak tanımlanan kavram hangisidir?",
    "options": [
      "Birim",
      "Hüküm",
      "Veri",
      "Ölçüt"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Birim\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Birimin özelliklerinden biri olmayan hangisidir?",
    "options": [
      "Öznellik",
      "Eşitlik",
      "Genellik",
      "Kullanışlık"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öznellik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Birimin özelliklerinden biri olmayan hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Eşitlik",
      "Genellik",
      "Kullanışlık",
      "Öznellik"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öznellik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Birimin özelliklerinden biri olmayan hangisidir?",
    "options": [
      "Genellik",
      "Kullanışlık",
      "Öznellik",
      "Eşitlik"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öznellik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Birimin özelliklerinden biri olmayan hangisidir?",
    "options": [
      "Kullanışlık",
      "Öznellik",
      "Eşitlik",
      "Genellik"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öznellik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Değerlendirme nedir?",
    "options": [
      "Ölçme sonuçlarını bir ölçütle karşılaştırarak karar veya yorum yapma",
      "Yalnız gözlem yapma",
      "Sayıları kaydetme",
      "Sınav sorusu hazırlama"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme sonuçlarını bir ölçütle karşılaştırarak karar veya yorum yapma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Değerlendirme nedir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız gözlem yapma",
      "Sayıları kaydetme",
      "Sınav sorusu hazırlama",
      "Ölçme sonuçlarını bir ölçütle karşılaştırarak karar veya yorum yapma"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme sonuçlarını bir ölçütle karşılaştırarak karar veya yorum yapma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Değerlendirme nedir?",
    "options": [
      "Sayıları kaydetme",
      "Sınav sorusu hazırlama",
      "Ölçme sonuçlarını bir ölçütle karşılaştırarak karar veya yorum yapma",
      "Yalnız gözlem yapma"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçme sonuçlarını bir ölçütle karşılaştırarak karar veya yorum yapma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Değerlendirme nedir?",
    "options": [
      "Sınav sorusu hazırlama",
      "Ölçme sonuçlarını bir ölçütle karşılaştırarak karar veya yorum yapma",
      "Yalnız gözlem yapma",
      "Sayıları kaydetme"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçme sonuçlarını bir ölçütle karşılaştırarak karar veya yorum yapma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Değerlendirme için ihtiyaç duyulan üç öge hangi seçenekte doğru verilmiştir?",
    "options": [
      "Öğretmen, öğrenci, okul",
      "Soru, cevap, süre",
      "Ders, modül, çizelge",
      "Veri, ölçüt, hüküm"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Veri, ölçüt, hüküm\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Değerlendirme için ihtiyaç duyulan üç öge hangi seçenekte doğru verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Soru, cevap, süre",
      "Ders, modül, çizelge",
      "Veri, ölçüt, hüküm",
      "Öğretmen, öğrenci, okul"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Veri, ölçüt, hüküm\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Değerlendirme için ihtiyaç duyulan üç öge hangi seçenekte doğru verilmiştir?",
    "options": [
      "Ders, modül, çizelge",
      "Veri, ölçüt, hüküm",
      "Öğretmen, öğrenci, okul",
      "Soru, cevap, süre"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Veri, ölçüt, hüküm\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Değerlendirme için ihtiyaç duyulan üç öge hangi seçenekte doğru verilmiştir?",
    "options": [
      "Veri, ölçüt, hüküm",
      "Öğretmen, öğrenci, okul",
      "Soru, cevap, süre",
      "Ders, modül, çizelge"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Veri, ölçüt, hüküm\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ölçme sonucu değerlendirmede hangi öge olarak kullanılır?",
    "options": [
      "Ölçüt",
      "Karar",
      "Veri",
      "Hüküm"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Veri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ölçme sonucu değerlendirmede hangi öge olarak kullanılır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Karar",
      "Veri",
      "Hüküm",
      "Ölçüt"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Veri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ölçme sonucu değerlendirmede hangi öge olarak kullanılır?",
    "options": [
      "Veri",
      "Hüküm",
      "Ölçüt",
      "Karar"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Veri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ölçme sonucu değerlendirmede hangi öge olarak kullanılır?",
    "options": [
      "Hüküm",
      "Ölçüt",
      "Karar",
      "Veri"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Veri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Değerlendirmeye dayanak oluşturan değer veya referans hangi kavramdır?",
    "options": [
      "Ölçüm",
      "Veri",
      "Ölçüt",
      "Hüküm"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçüt\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Değerlendirmeye dayanak oluşturan değer veya referans hangi kavramdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Veri",
      "Ölçüt",
      "Hüküm",
      "Ölçüm"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçüt\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Değerlendirmeye dayanak oluşturan değer veya referans hangi kavramdır?",
    "options": [
      "Ölçüt",
      "Hüküm",
      "Ölçüm",
      "Veri"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçüt\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Değerlendirmeye dayanak oluşturan değer veya referans hangi kavramdır?",
    "options": [
      "Hüküm",
      "Ölçüm",
      "Veri",
      "Ölçüt"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçüt\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ölçme verilerinin ölçütlerle karşılaştırılması sonucunda ulaşılan karar hangi kavramdır?",
    "options": [
      "Birim",
      "Ölçüm",
      "Hüküm",
      "Ölçek"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Hüküm\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ölçme verilerinin ölçütlerle karşılaştırılması sonucunda ulaşılan karar hangi kavramdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ölçüm",
      "Hüküm",
      "Ölçek",
      "Birim"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Hüküm\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ölçme verilerinin ölçütlerle karşılaştırılması sonucunda ulaşılan karar hangi kavramdır?",
    "options": [
      "Hüküm",
      "Ölçek",
      "Birim",
      "Ölçüm"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hüküm\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ölçme verilerinin ölçütlerle karşılaştırılması sonucunda ulaşılan karar hangi kavramdır?",
    "options": [
      "Ölçek",
      "Birim",
      "Ölçüm",
      "Hüküm"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hüküm\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ölçme ve değerlendirme arasındaki temel fark hangisidir?",
    "options": [
      "Ölçme öznel, değerlendirme her zaman nesneldir",
      "İkisi aynı işlemdir",
      "Değerlendirme yalnız sayı üretir",
      "Ölçme sonuç ifade eder, değerlendirme bu sonuçları ölçütle karşılaştırıp yargıya varır"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme sonuç ifade eder, değerlendirme bu sonuçları ölçütle karşılaştırıp yargıya varır\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ölçme ve değerlendirme arasındaki temel fark hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İkisi aynı işlemdir",
      "Değerlendirme yalnız sayı üretir",
      "Ölçme sonuç ifade eder, değerlendirme bu sonuçları ölçütle karşılaştırıp yargıya varır",
      "Ölçme öznel, değerlendirme her zaman nesneldir"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme sonuç ifade eder, değerlendirme bu sonuçları ölçütle karşılaştırıp yargıya varır\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ölçme ve değerlendirme arasındaki temel fark hangisidir?",
    "options": [
      "Değerlendirme yalnız sayı üretir",
      "Ölçme sonuç ifade eder, değerlendirme bu sonuçları ölçütle karşılaştırıp yargıya varır",
      "Ölçme öznel, değerlendirme her zaman nesneldir",
      "İkisi aynı işlemdir"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçme sonuç ifade eder, değerlendirme bu sonuçları ölçütle karşılaştırıp yargıya varır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ölçme ve değerlendirme arasındaki temel fark hangisidir?",
    "options": [
      "Ölçme sonuç ifade eder, değerlendirme bu sonuçları ölçütle karşılaştırıp yargıya varır",
      "Ölçme öznel, değerlendirme her zaman nesneldir",
      "İkisi aynı işlemdir",
      "Değerlendirme yalnız sayı üretir"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçme sonuç ifade eder, değerlendirme bu sonuçları ölçütle karşılaştırıp yargıya varır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Koşullanma yoluyla öğrenme hangi kuramcıyla ilişkilendirilmiştir?",
    "options": [
      "Maslow",
      "Rogers",
      "Pavlov",
      "Piaget"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Pavlov\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Koşullanma yoluyla öğrenme hangi kuramcıyla ilişkilendirilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Rogers",
      "Pavlov",
      "Piaget",
      "Maslow"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Pavlov\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Koşullanma yoluyla öğrenme hangi kuramcıyla ilişkilendirilmiştir?",
    "options": [
      "Pavlov",
      "Piaget",
      "Maslow",
      "Rogers"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Pavlov\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Koşullanma yoluyla öğrenme hangi kuramcıyla ilişkilendirilmiştir?",
    "options": [
      "Piaget",
      "Maslow",
      "Rogers",
      "Pavlov"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Pavlov\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Edimsel koşullanma yaklaşımında davranışların sonuçları hangi açıdan önemlidir?",
    "options": [
      "Bütün davranışlar doğuştandır",
      "Ödül ve ceza/sonuçlar davranışın sürmesi veya değişmesinde etkili olabilir",
      "Davranış sonuçlarından bağımsızdır",
      "Yalnız gözlem yeterlidir"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Ödül ve ceza/sonuçlar davranışın sürmesi veya değişmesinde etkili olabilir\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Edimsel koşullanma yaklaşımında davranışların sonuçları hangi açıdan önemlidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ödül ve ceza/sonuçlar davranışın sürmesi veya değişmesinde etkili olabilir",
      "Davranış sonuçlarından bağımsızdır",
      "Yalnız gözlem yeterlidir",
      "Bütün davranışlar doğuştandır"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Ödül ve ceza/sonuçlar davranışın sürmesi veya değişmesinde etkili olabilir\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Edimsel koşullanma yaklaşımında davranışların sonuçları hangi açıdan önemlidir?",
    "options": [
      "Davranış sonuçlarından bağımsızdır",
      "Yalnız gözlem yeterlidir",
      "Bütün davranışlar doğuştandır",
      "Ödül ve ceza/sonuçlar davranışın sürmesi veya değişmesinde etkili olabilir"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Ödül ve ceza/sonuçlar davranışın sürmesi veya değişmesinde etkili olabilir\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Edimsel koşullanma yaklaşımında davranışların sonuçları hangi açıdan önemlidir?",
    "options": [
      "Yalnız gözlem yeterlidir",
      "Bütün davranışlar doğuştandır",
      "Ödül ve ceza/sonuçlar davranışın sürmesi veya değişmesinde etkili olabilir",
      "Davranış sonuçlarından bağımsızdır"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Ödül ve ceza/sonuçlar davranışın sürmesi veya değişmesinde etkili olabilir\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Model alarak öğrenmede temel süreç hangisidir?",
    "options": [
      "Başka kişilerin davranışlarını gözleyip örnek alma",
      "Yalnız yazılı sınav",
      "Fiziksel büyüme",
      "Rastgele davranış"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Başka kişilerin davranışlarını gözleyip örnek alma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Model alarak öğrenmede temel süreç hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız yazılı sınav",
      "Fiziksel büyüme",
      "Rastgele davranış",
      "Başka kişilerin davranışlarını gözleyip örnek alma"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Başka kişilerin davranışlarını gözleyip örnek alma\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Model alarak öğrenmede temel süreç hangisidir?",
    "options": [
      "Fiziksel büyüme",
      "Rastgele davranış",
      "Başka kişilerin davranışlarını gözleyip örnek alma",
      "Yalnız yazılı sınav"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Başka kişilerin davranışlarını gözleyip örnek alma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Model alarak öğrenmede temel süreç hangisidir?",
    "options": [
      "Rastgele davranış",
      "Başka kişilerin davranışlarını gözleyip örnek alma",
      "Yalnız yazılı sınav",
      "Fiziksel büyüme"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Başka kişilerin davranışlarını gözleyip örnek alma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Bilişsel öğrenme kuramları öğrenmeyi hangi süreçlerle açıklamaya çalışır?",
    "options": [
      "Yalnız dış uyarıcılar",
      "Sadece fiziksel refleksler",
      "Yalnız ödül ve ceza",
      "Zihinsel süreçler ve bireyin etkin katılımı"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Zihinsel süreçler ve bireyin etkin katılımı\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Bilişsel öğrenme kuramları öğrenmeyi hangi süreçlerle açıklamaya çalışır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Sadece fiziksel refleksler",
      "Yalnız ödül ve ceza",
      "Zihinsel süreçler ve bireyin etkin katılımı",
      "Yalnız dış uyarıcılar"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Zihinsel süreçler ve bireyin etkin katılımı\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Bilişsel öğrenme kuramları öğrenmeyi hangi süreçlerle açıklamaya çalışır?",
    "options": [
      "Yalnız ödül ve ceza",
      "Zihinsel süreçler ve bireyin etkin katılımı",
      "Yalnız dış uyarıcılar",
      "Sadece fiziksel refleksler"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Zihinsel süreçler ve bireyin etkin katılımı\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Bilişsel öğrenme kuramları öğrenmeyi hangi süreçlerle açıklamaya çalışır?",
    "options": [
      "Zihinsel süreçler ve bireyin etkin katılımı",
      "Yalnız dış uyarıcılar",
      "Sadece fiziksel refleksler",
      "Yalnız ödül ve ceza"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Zihinsel süreçler ve bireyin etkin katılımı\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Ders başarısı değerlendirme ölçütleri 85-100 aralığı için hangi dereceyi verir?",
    "options": [
      "Orta",
      "Geçer",
      "İyi",
      "Pekiyi"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Pekiyi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ders başarısı değerlendirme ölçütleri 85-100 aralığı için hangi dereceyi verir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Geçer",
      "İyi",
      "Pekiyi",
      "Orta"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Pekiyi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ders başarısı değerlendirme ölçütleri 85-100 aralığı için hangi dereceyi verir?",
    "options": [
      "İyi",
      "Pekiyi",
      "Orta",
      "Geçer"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Pekiyi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ders başarısı değerlendirme ölçütleri 85-100 aralığı için hangi dereceyi verir?",
    "options": [
      "Pekiyi",
      "Orta",
      "Geçer",
      "İyi"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Pekiyi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: ki ders başarı derecelendirmesinde 70,00-84,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Geçer",
      "Pekiyi",
      "İyi",
      "Orta"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İyi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: ki ders başarı derecelendirmesinde 70,00-84,99 aralığı hangi derece olarak verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Pekiyi",
      "İyi",
      "Orta",
      "Geçer"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İyi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: ki ders başarı derecelendirmesinde 70,00-84,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "İyi",
      "Orta",
      "Geçer",
      "Pekiyi"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İyi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? ki ders başarı derecelendirmesinde 70,00-84,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Orta",
      "Geçer",
      "Pekiyi",
      "İyi"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İyi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: ki ders başarı derecelendirmesinde 60,00-69,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Pekiyi",
      "İyi",
      "Orta",
      "Geçer"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Orta\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: ki ders başarı derecelendirmesinde 60,00-69,99 aralığı hangi derece olarak verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İyi",
      "Orta",
      "Geçer",
      "Pekiyi"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Orta\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: ki ders başarı derecelendirmesinde 60,00-69,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Orta",
      "Geçer",
      "Pekiyi",
      "İyi"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Orta\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? ki ders başarı derecelendirmesinde 60,00-69,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Geçer",
      "Pekiyi",
      "İyi",
      "Orta"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Orta\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: ki ders başarı derecelendirmesinde 50,00-59,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "İyi",
      "Orta",
      "Geçer",
      "Pekiyi"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Geçer\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: ki ders başarı derecelendirmesinde 50,00-59,99 aralığı hangi derece olarak verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Orta",
      "Geçer",
      "Pekiyi",
      "İyi"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Geçer\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: ki ders başarı derecelendirmesinde 50,00-59,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Geçer",
      "Pekiyi",
      "İyi",
      "Orta"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Geçer\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? ki ders başarı derecelendirmesinde 50,00-59,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Pekiyi",
      "İyi",
      "Orta",
      "Geçer"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Geçer\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: ki ders başarı derecelendirmesinde 0-49,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Geçmez",
      "İyi",
      "Geçer",
      "Orta"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Geçmez\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: ki ders başarı derecelendirmesinde 0-49,99 aralığı hangi derece olarak verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İyi",
      "Geçer",
      "Orta",
      "Geçmez"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Geçmez\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: ki ders başarı derecelendirmesinde 0-49,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Geçer",
      "Orta",
      "Geçmez",
      "İyi"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Geçmez\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? ki ders başarı derecelendirmesinde 0-49,99 aralığı hangi derece olarak verilmiştir?",
    "options": [
      "Orta",
      "Geçmez",
      "İyi",
      "Geçer"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Geçmez\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Çoktan seçmeli testler hangi özellikte sorulardan oluşur?",
    "options": [
      "Sözlü anlatım gerektiren",
      "Belirli sayıdaki seçenekten birinin seçilmesini gerektiren",
      "Yanıtın uzun metinle yazıldığı",
      "İki grup ögenin eşleştirildiği"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Belirli sayıdaki seçenekten birinin seçilmesini gerektiren\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Çoktan seçmeli testler hangi özellikte sorulardan oluşur. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Belirli sayıdaki seçenekten birinin seçilmesini gerektiren",
      "Yanıtın uzun metinle yazıldığı",
      "İki grup ögenin eşleştirildiği",
      "Sözlü anlatım gerektiren"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Belirli sayıdaki seçenekten birinin seçilmesini gerektiren\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Çoktan seçmeli testler hangi özellikte sorulardan oluşur?",
    "options": [
      "Yanıtın uzun metinle yazıldığı",
      "İki grup ögenin eşleştirildiği",
      "Sözlü anlatım gerektiren",
      "Belirli sayıdaki seçenekten birinin seçilmesini gerektiren"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Belirli sayıdaki seçenekten birinin seçilmesini gerektiren\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Çoktan seçmeli testler hangi özellikte sorulardan oluşur?",
    "options": [
      "İki grup ögenin eşleştirildiği",
      "Sözlü anlatım gerektiren",
      "Belirli sayıdaki seçenekten birinin seçilmesini gerektiren",
      "Yanıtın uzun metinle yazıldığı"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Belirli sayıdaki seçenekten birinin seçilmesini gerektiren\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Doğru-yanlış testlerinde öğrenciden ne istenir?",
    "options": [
      "Maddeleri doğru veya yanlış olarak sınıflandırması",
      "İki listeyi eşleştirmesi",
      "Uzun yanıt yazması",
      "Sözlü açıklama yapması"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Maddeleri doğru veya yanlış olarak sınıflandırması\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Doğru-yanlış testlerinde öğrenciden ne istenir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İki listeyi eşleştirmesi",
      "Uzun yanıt yazması",
      "Sözlü açıklama yapması",
      "Maddeleri doğru veya yanlış olarak sınıflandırması"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Maddeleri doğru veya yanlış olarak sınıflandırması\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Doğru-yanlış testlerinde öğrenciden ne istenir?",
    "options": [
      "Uzun yanıt yazması",
      "Sözlü açıklama yapması",
      "Maddeleri doğru veya yanlış olarak sınıflandırması",
      "İki listeyi eşleştirmesi"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Maddeleri doğru veya yanlış olarak sınıflandırması\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Doğru-yanlış testlerinde öğrenciden ne istenir?",
    "options": [
      "Sözlü açıklama yapması",
      "Maddeleri doğru veya yanlış olarak sınıflandırması",
      "İki listeyi eşleştirmesi",
      "Uzun yanıt yazması"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Maddeleri doğru veya yanlış olarak sınıflandırması\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Eşleştirme testlerinde öğrencilerden ne istenir?",
    "options": [
      "Bir paragraf yazmaları",
      "Doğru-yanlış işaretlemeleri",
      "Sözlü sunum yapmaları",
      "İlgili bilgi ögelerini belirli ilişki/ölçüte göre eşleştirmeleri"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İlgili bilgi ögelerini belirli ilişki/ölçüte göre eşleştirmeleri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Eşleştirme testlerinde öğrencilerden ne istenir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Doğru-yanlış işaretlemeleri",
      "Sözlü sunum yapmaları",
      "İlgili bilgi ögelerini belirli ilişki/ölçüte göre eşleştirmeleri",
      "Bir paragraf yazmaları"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İlgili bilgi ögelerini belirli ilişki/ölçüte göre eşleştirmeleri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Eşleştirme testlerinde öğrencilerden ne istenir?",
    "options": [
      "Sözlü sunum yapmaları",
      "İlgili bilgi ögelerini belirli ilişki/ölçüte göre eşleştirmeleri",
      "Bir paragraf yazmaları",
      "Doğru-yanlış işaretlemeleri"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İlgili bilgi ögelerini belirli ilişki/ölçüte göre eşleştirmeleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Eşleştirme testlerinde öğrencilerden ne istenir?",
    "options": [
      "İlgili bilgi ögelerini belirli ilişki/ölçüte göre eşleştirmeleri",
      "Bir paragraf yazmaları",
      "Doğru-yanlış işaretlemeleri",
      "Sözlü sunum yapmaları"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İlgili bilgi ögelerini belirli ilişki/ölçüte göre eşleştirmeleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Sözlü sınavlar hangi beceri ölçülmek istendiğinde özellikle kullanılabilir?",
    "options": [
      "Yalnız yazım",
      "Sadece fiziksel dayanıklılık",
      "Dinleme ve sözlü yanıt becerileri",
      "Yalnız el becerisi"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Dinleme ve sözlü yanıt becerileri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Sözlü sınavlar hangi beceri ölçülmek istendiğinde özellikle kullanılabilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Sadece fiziksel dayanıklılık",
      "Dinleme ve sözlü yanıt becerileri",
      "Yalnız el becerisi",
      "Yalnız yazım"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Dinleme ve sözlü yanıt becerileri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Sözlü sınavlar hangi beceri ölçülmek istendiğinde özellikle kullanılabilir?",
    "options": [
      "Dinleme ve sözlü yanıt becerileri",
      "Yalnız el becerisi",
      "Yalnız yazım",
      "Sadece fiziksel dayanıklılık"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Dinleme ve sözlü yanıt becerileri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Sözlü sınavlar hangi beceri ölçülmek istendiğinde özellikle kullanılabilir?",
    "options": [
      "Yalnız el becerisi",
      "Yalnız yazım",
      "Sadece fiziksel dayanıklılık",
      "Dinleme ve sözlü yanıt becerileri"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Dinleme ve sözlü yanıt becerileri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Geçerlik ölçme aracının hangi özelliğini ifade eder?",
    "options": [
      "Bilenle bilmeyeni ayırması",
      "Ölçmek istediği şeyi doğru ölçmesi",
      "Her uygulamada aynı sonuç vermesi",
      "Uygulama maliyetinin düşük olması"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçmek istediği şeyi doğru ölçmesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Geçerlik ölçme aracının hangi özelliğini ifade eder. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ölçmek istediği şeyi doğru ölçmesi",
      "Her uygulamada aynı sonuç vermesi",
      "Uygulama maliyetinin düşük olması",
      "Bilenle bilmeyeni ayırması"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçmek istediği şeyi doğru ölçmesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Geçerlik ölçme aracının hangi özelliğini ifade eder?",
    "options": [
      "Her uygulamada aynı sonuç vermesi",
      "Uygulama maliyetinin düşük olması",
      "Bilenle bilmeyeni ayırması",
      "Ölçmek istediği şeyi doğru ölçmesi"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçmek istediği şeyi doğru ölçmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Geçerlik ölçme aracının hangi özelliğini ifade eder?",
    "options": [
      "Uygulama maliyetinin düşük olması",
      "Bilenle bilmeyeni ayırması",
      "Ölçmek istediği şeyi doğru ölçmesi",
      "Her uygulamada aynı sonuç vermesi"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçmek istediği şeyi doğru ölçmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Güvenirlik ölçme aracının hangi özelliğini ifade eder?",
    "options": [
      "Aynı koşullarda aynı veya yakın sonuçlar vermesi",
      "Ölçmek istediğini doğru ölçmesi",
      "Öğrenciye uygun olması",
      "Kolay okunması"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Aynı koşullarda aynı veya yakın sonuçlar vermesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Güvenirlik ölçme aracının hangi özelliğini ifade eder. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ölçmek istediğini doğru ölçmesi",
      "Öğrenciye uygun olması",
      "Kolay okunması",
      "Aynı koşullarda aynı veya yakın sonuçlar vermesi"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Aynı koşullarda aynı veya yakın sonuçlar vermesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Güvenirlik ölçme aracının hangi özelliğini ifade eder?",
    "options": [
      "Öğrenciye uygun olması",
      "Kolay okunması",
      "Aynı koşullarda aynı veya yakın sonuçlar vermesi",
      "Ölçmek istediğini doğru ölçmesi"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Aynı koşullarda aynı veya yakın sonuçlar vermesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Güvenirlik ölçme aracının hangi özelliğini ifade eder?",
    "options": [
      "Kolay okunması",
      "Aynı koşullarda aynı veya yakın sonuçlar vermesi",
      "Ölçmek istediğini doğru ölçmesi",
      "Öğrenciye uygun olması"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Aynı koşullarda aynı veya yakın sonuçlar vermesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ayırt edicilik neyi ifade eder?",
    "options": [
      "Sınavın düşük maliyetli olması",
      "Ölçmenin hedef davranışa uygunluğu",
      "Soruların kolay okunması",
      "Bilenle bilmeyeni ayırabilme"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bilenle bilmeyeni ayırabilme\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ayırt edicilik neyi ifade eder. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ölçmenin hedef davranışa uygunluğu",
      "Soruların kolay okunması",
      "Bilenle bilmeyeni ayırabilme",
      "Sınavın düşük maliyetli olması"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bilenle bilmeyeni ayırabilme\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ayırt edicilik neyi ifade eder?",
    "options": [
      "Soruların kolay okunması",
      "Bilenle bilmeyeni ayırabilme",
      "Sınavın düşük maliyetli olması",
      "Ölçmenin hedef davranışa uygunluğu"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bilenle bilmeyeni ayırabilme\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ayırt edicilik neyi ifade eder?",
    "options": [
      "Bilenle bilmeyeni ayırabilme",
      "Sınavın düşük maliyetli olması",
      "Ölçmenin hedef davranışa uygunluğu",
      "Soruların kolay okunması"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bilenle bilmeyeni ayırabilme\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Kullanışlı bir ölçme aracı hangi özelliklerden birine sahip olmalıdır?",
    "options": [
      "Gereksiz yüksek maliyet",
      "Süre yetersizliği",
      "Uygulama ve puanlama kolaylığı",
      "Belirsiz soru ifadeleri"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Uygulama ve puanlama kolaylığı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Kullanışlı bir ölçme aracı hangi özelliklerden birine sahip olmalıdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Süre yetersizliği",
      "Uygulama ve puanlama kolaylığı",
      "Belirsiz soru ifadeleri",
      "Gereksiz yüksek maliyet"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Uygulama ve puanlama kolaylığı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Kullanışlı bir ölçme aracı hangi özelliklerden birine sahip olmalıdır?",
    "options": [
      "Uygulama ve puanlama kolaylığı",
      "Belirsiz soru ifadeleri",
      "Gereksiz yüksek maliyet",
      "Süre yetersizliği"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Uygulama ve puanlama kolaylığı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Kullanışlı bir ölçme aracı hangi özelliklerden birine sahip olmalıdır?",
    "options": [
      "Belirsiz soru ifadeleri",
      "Gereksiz yüksek maliyet",
      "Süre yetersizliği",
      "Uygulama ve puanlama kolaylığı"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Uygulama ve puanlama kolaylığı\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: İş (ürün) dosyasında neler yer alabilir?",
    "options": [
      "Yalnız devamsızlık kayıtları",
      "Temrin, iş, proje, deney ve hizmetlerle ilgili çalışmalar, resimler ve değerlendirme çizelgeleri",
      "Yalnız öğrenci kimlik bilgileri",
      "Yalnız sınav notları"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Temrin, iş, proje, deney ve hizmetlerle ilgili çalışmalar, resimler ve değerlendirme çizelgeleri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: İş (ürün) dosyasında neler yer alabilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Temrin, iş, proje, deney ve hizmetlerle ilgili çalışmalar, resimler ve değerlendirme çizelgeleri",
      "Yalnız öğrenci kimlik bilgileri",
      "Yalnız sınav notları",
      "Yalnız devamsızlık kayıtları"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Temrin, iş, proje, deney ve hizmetlerle ilgili çalışmalar, resimler ve değerlendirme çizelgeleri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İş (ürün) dosyasında neler yer alabilir?",
    "options": [
      "Yalnız öğrenci kimlik bilgileri",
      "Yalnız sınav notları",
      "Yalnız devamsızlık kayıtları",
      "Temrin, iş, proje, deney ve hizmetlerle ilgili çalışmalar, resimler ve değerlendirme çizelgeleri"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Temrin, iş, proje, deney ve hizmetlerle ilgili çalışmalar, resimler ve değerlendirme çizelgeleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İş (ürün) dosyasında neler yer alabilir?",
    "options": [
      "Yalnız sınav notları",
      "Yalnız devamsızlık kayıtları",
      "Temrin, iş, proje, deney ve hizmetlerle ilgili çalışmalar, resimler ve değerlendirme çizelgeleri",
      "Yalnız öğrenci kimlik bilgileri"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Temrin, iş, proje, deney ve hizmetlerle ilgili çalışmalar, resimler ve değerlendirme çizelgeleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İş dosyasındaki çalışmalara ait değerlendirme çizelgesi kimler tarafından imzalanır?",
    "options": [
      "Usta öğretici/eğitici personel, koordinatör öğretmen ve öğrenci",
      "Yalnız öğrenci",
      "Yalnız işletme müdürü",
      "Yalnız veli"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Usta öğretici/eğitici personel, koordinatör öğretmen ve öğrenci\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: İş dosyasındaki çalışmalara ait değerlendirme çizelgesi kimler tarafından imzalanır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız öğrenci",
      "Yalnız işletme müdürü",
      "Yalnız veli",
      "Usta öğretici/eğitici personel, koordinatör öğretmen ve öğrenci"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Usta öğretici/eğitici personel, koordinatör öğretmen ve öğrenci\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İş dosyasındaki çalışmalara ait değerlendirme çizelgesi kimler tarafından imzalanır?",
    "options": [
      "Yalnız işletme müdürü",
      "Yalnız veli",
      "Usta öğretici/eğitici personel, koordinatör öğretmen ve öğrenci",
      "Yalnız öğrenci"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Usta öğretici/eğitici personel, koordinatör öğretmen ve öğrenci\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İş dosyasındaki çalışmalara ait değerlendirme çizelgesi kimler tarafından imzalanır?",
    "options": [
      "Yalnız veli",
      "Usta öğretici/eğitici personel, koordinatör öğretmen ve öğrenci",
      "Yalnız öğrenci",
      "Yalnız işletme müdürü"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Usta öğretici/eğitici personel, koordinatör öğretmen ve öğrenci\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İşletmeler yönünden gizlilik taşıyan işlere ait dokümanlar nasıl ele alınır?",
    "options": [
      "Her öğrenciyle paylaşılır",
      "İş dosyasına zorunlu olarak konur",
      "İmha edilir",
      "İş dosyasına konulmaz; ilgili işletme tarafından saklanır ve gerektiğinde sınav komisyonuna sunulur"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İş dosyasına konulmaz; ilgili işletme tarafından saklanır ve gerektiğinde sınav komisyonuna sunulur\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: İşletmeler yönünden gizlilik taşıyan işlere ait dokümanlar nasıl ele alınır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İş dosyasına zorunlu olarak konur",
      "İmha edilir",
      "İş dosyasına konulmaz; ilgili işletme tarafından saklanır ve gerektiğinde sınav komisyonuna sunulur",
      "Her öğrenciyle paylaşılır"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İş dosyasına konulmaz; ilgili işletme tarafından saklanır ve gerektiğinde sınav komisyonuna sunulur\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İşletmeler yönünden gizlilik taşıyan işlere ait dokümanlar nasıl ele alınır?",
    "options": [
      "İmha edilir",
      "İş dosyasına konulmaz; ilgili işletme tarafından saklanır ve gerektiğinde sınav komisyonuna sunulur",
      "Her öğrenciyle paylaşılır",
      "İş dosyasına zorunlu olarak konur"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İş dosyasına konulmaz; ilgili işletme tarafından saklanır ve gerektiğinde sınav komisyonuna sunulur\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İşletmeler yönünden gizlilik taşıyan işlere ait dokümanlar nasıl ele alınır?",
    "options": [
      "İş dosyasına konulmaz; ilgili işletme tarafından saklanır ve gerektiğinde sınav komisyonuna sunulur",
      "Her öğrenciyle paylaşılır",
      "İş dosyasına zorunlu olarak konur",
      "İmha edilir"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İş dosyasına konulmaz; ilgili işletme tarafından saklanır ve gerektiğinde sınav komisyonuna sunulur\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: işletmede beceri eğitimi değerlendirme ölçütlerinden biri hangisidir?",
    "options": [
      "Araçları düzensiz kullanma",
      "Güvenlik kurallarını ihlal",
      "İşi yapabilme becerisi",
      "İş yerinden uzak durma"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İşi yapabilme becerisi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: işletmede beceri eğitimi değerlendirme ölçütlerinden biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Güvenlik kurallarını ihlal",
      "İşi yapabilme becerisi",
      "İş yerinden uzak durma",
      "Araçları düzensiz kullanma"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"İşi yapabilme becerisi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: işletmede beceri eğitimi değerlendirme ölçütlerinden biri hangisidir?",
    "options": [
      "İşi yapabilme becerisi",
      "İş yerinden uzak durma",
      "Araçları düzensiz kullanma",
      "Güvenlik kurallarını ihlal"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşi yapabilme becerisi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? işletmede beceri eğitimi değerlendirme ölçütlerinden biri hangisidir?",
    "options": [
      "İş yerinden uzak durma",
      "Araçları düzensiz kullanma",
      "Güvenlik kurallarını ihlal",
      "İşi yapabilme becerisi"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşi yapabilme becerisi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: işletmede beceri sınavının puan dağılımı hangi oranla verilmiştir?",
    "options": [
      "%60 sınav, %40 iş dosyası",
      "%70 sınav, %30 iş dosyası",
      "%80 sınav, %20 iş dosyası",
      "%50 sınav, %50 iş dosyası"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"%80 sınav, %20 iş dosyası\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: işletmede beceri sınavının puan dağılımı hangi oranla verilmiştir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "%70 sınav, %30 iş dosyası",
      "%80 sınav, %20 iş dosyası",
      "%50 sınav, %50 iş dosyası",
      "%60 sınav, %40 iş dosyası"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"%80 sınav, %20 iş dosyası\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: işletmede beceri sınavının puan dağılımı hangi oranla verilmiştir?",
    "options": [
      "%80 sınav, %20 iş dosyası",
      "%50 sınav, %50 iş dosyası",
      "%60 sınav, %40 iş dosyası",
      "%70 sınav, %30 iş dosyası"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"%80 sınav, %20 iş dosyası\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? işletmede beceri sınavının puan dağılımı hangi oranla verilmiştir?",
    "options": [
      "%50 sınav, %50 iş dosyası",
      "%60 sınav, %40 iş dosyası",
      "%70 sınav, %30 iş dosyası",
      "%80 sınav, %20 iş dosyası"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"%80 sınav, %20 iş dosyası\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İşletmede beceri eğitimi değerlendirmesinde aşağıdakilerden hangisi dikkate alınır?",
    "options": [
      "Görevlerin yerine getirilmesi ve araç gerecin uygun kullanılması",
      "İş güvenliği kurallarını önemsememek",
      "İş dosyasını boş bırakmak",
      "Görevleri sürekli ertelemek"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Görevlerin yerine getirilmesi ve araç gerecin uygun kullanılması\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: İşletmede beceri eğitimi değerlendirmesinde aşağıdakilerden hangisi dikkate alınır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İş güvenliği kurallarını önemsememek",
      "İş dosyasını boş bırakmak",
      "Görevleri sürekli ertelemek",
      "Görevlerin yerine getirilmesi ve araç gerecin uygun kullanılması"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Görevlerin yerine getirilmesi ve araç gerecin uygun kullanılması\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İşletmede beceri eğitimi değerlendirmesinde aşağıdakilerden hangisi dikkate alınır?",
    "options": [
      "İş dosyasını boş bırakmak",
      "Görevleri sürekli ertelemek",
      "Görevlerin yerine getirilmesi ve araç gerecin uygun kullanılması",
      "İş güvenliği kurallarını önemsememek"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Görevlerin yerine getirilmesi ve araç gerecin uygun kullanılması\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İşletmede beceri eğitimi değerlendirmesinde aşağıdakilerden hangisi dikkate alınır?",
    "options": [
      "Görevleri sürekli ertelemek",
      "Görevlerin yerine getirilmesi ve araç gerecin uygun kullanılması",
      "İş güvenliği kurallarını önemsememek",
      "İş dosyasını boş bırakmak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Görevlerin yerine getirilmesi ve araç gerecin uygun kullanılması\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ölçme ve değerlendirme sonuçlarının eğitim sürecinde kullanılmasının faydalarından biri hangisidir?",
    "options": [
      "Öğrenci geri bildirimini engellemek",
      "Hedefleri gizlemek",
      "Yanlış öğrenmeleri kalıcılaştırmak",
      "Eksik öğrenmeleri belirleyip öğretimi yeniden planlamak"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Eksik öğrenmeleri belirleyip öğretimi yeniden planlamak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ölçme ve değerlendirme sonuçlarının eğitim sürecinde kullanılmasının faydalarından biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Hedefleri gizlemek",
      "Yanlış öğrenmeleri kalıcılaştırmak",
      "Eksik öğrenmeleri belirleyip öğretimi yeniden planlamak",
      "Öğrenci geri bildirimini engellemek"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Eksik öğrenmeleri belirleyip öğretimi yeniden planlamak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ölçme ve değerlendirme sonuçlarının eğitim sürecinde kullanılmasının faydalarından biri hangisidir?",
    "options": [
      "Yanlış öğrenmeleri kalıcılaştırmak",
      "Eksik öğrenmeleri belirleyip öğretimi yeniden planlamak",
      "Öğrenci geri bildirimini engellemek",
      "Hedefleri gizlemek"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eksik öğrenmeleri belirleyip öğretimi yeniden planlamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ölçme ve değerlendirme sonuçlarının eğitim sürecinde kullanılmasının faydalarından biri hangisidir?",
    "options": [
      "Eksik öğrenmeleri belirleyip öğretimi yeniden planlamak",
      "Öğrenci geri bildirimini engellemek",
      "Hedefleri gizlemek",
      "Yanlış öğrenmeleri kalıcılaştırmak"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eksik öğrenmeleri belirleyip öğretimi yeniden planlamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Eğitimde ölçme ve değerlendirme hedef davranışların gerçekleşme düzeyini belirlemek için neden önemlidir?",
    "options": [
      "Yalnız öğrenci sıralaması yapar",
      "Öğretim yöntemini değişmez kılar",
      "Öğrenme eksiklikleri ve gelişim alanları hakkında bilgi sağlar",
      "Eğitim sürecini tamamen kaldırır"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Öğrenme eksiklikleri ve gelişim alanları hakkında bilgi sağlar\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Eğitimde ölçme ve değerlendirme hedef davranışların gerçekleşme düzeyini belirlemek için neden önemlidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğretim yöntemini değişmez kılar",
      "Öğrenme eksiklikleri ve gelişim alanları hakkında bilgi sağlar",
      "Eğitim sürecini tamamen kaldırır",
      "Yalnız öğrenci sıralaması yapar"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Öğrenme eksiklikleri ve gelişim alanları hakkında bilgi sağlar\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Eğitimde ölçme ve değerlendirme hedef davranışların gerçekleşme düzeyini belirlemek için neden önemlidir?",
    "options": [
      "Öğrenme eksiklikleri ve gelişim alanları hakkında bilgi sağlar",
      "Eğitim sürecini tamamen kaldırır",
      "Yalnız öğrenci sıralaması yapar",
      "Öğretim yöntemini değişmez kılar"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Öğrenme eksiklikleri ve gelişim alanları hakkında bilgi sağlar\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Eğitimde ölçme ve değerlendirme hedef davranışların gerçekleşme düzeyini belirlemek için neden önemlidir?",
    "options": [
      "Eğitim sürecini tamamen kaldırır",
      "Yalnız öğrenci sıralaması yapar",
      "Öğretim yöntemini değişmez kılar",
      "Öğrenme eksiklikleri ve gelişim alanları hakkında bilgi sağlar"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Öğrenme eksiklikleri ve gelişim alanları hakkında bilgi sağlar\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: İyi bir ölçme aracında soru sayısının az olmaması hangi niteliği desteklemek için önerilir?",
    "options": [
      "Birim",
      "Güvenirlik",
      "Geçerlik",
      "Kullanışlık"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Güvenirlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: İyi bir ölçme aracında soru sayısının az olmaması hangi niteliği desteklemek için önerilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Güvenirlik",
      "Geçerlik",
      "Kullanışlık",
      "Birim"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Güvenirlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İyi bir ölçme aracında soru sayısının az olmaması hangi niteliği desteklemek için önerilir?",
    "options": [
      "Geçerlik",
      "Kullanışlık",
      "Birim",
      "Güvenirlik"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Güvenirlik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İyi bir ölçme aracında soru sayısının az olmaması hangi niteliği desteklemek için önerilir?",
    "options": [
      "Kullanışlık",
      "Birim",
      "Güvenirlik",
      "Geçerlik"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Güvenirlik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Sınav süresinin bilen öğrencilerin bütün soruları cevaplandırmasına yetecek olması hangi niteliği destekler?",
    "options": [
      "Güvenirlik",
      "Coğrafi işaret",
      "Ölçüt",
      "Birim"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Güvenirlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Sınav süresinin bilen öğrencilerin bütün soruları cevaplandırmasına yetecek olması hangi niteliği destekler. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Coğrafi işaret",
      "Ölçüt",
      "Birim",
      "Güvenirlik"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Güvenirlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Sınav süresinin bilen öğrencilerin bütün soruları cevaplandırmasına yetecek olması hangi niteliği destekler?",
    "options": [
      "Ölçüt",
      "Birim",
      "Güvenirlik",
      "Coğrafi işaret"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Güvenirlik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Sınav süresinin bilen öğrencilerin bütün soruları cevaplandırmasına yetecek olması hangi niteliği destekler?",
    "options": [
      "Birim",
      "Güvenirlik",
      "Coğrafi işaret",
      "Ölçüt"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Güvenirlik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Puanlamanın objektif olması, farklı puanlayıcıların aynı yanıtlara aynı puanı vermesi hangi niteliği destekler?",
    "options": [
      "Geçerlik",
      "Güdü",
      "Ölçüm",
      "Güvenirlik"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Güvenirlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Puanlamanın objektif olması, farklı puanlayıcıların aynı yanıtlara aynı puanı vermesi hangi niteliği destekler. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Güdü",
      "Ölçüm",
      "Güvenirlik",
      "Geçerlik"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Güvenirlik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Puanlamanın objektif olması, farklı puanlayıcıların aynı yanıtlara aynı puanı vermesi hangi niteliği destekler?",
    "options": [
      "Ölçüm",
      "Güvenirlik",
      "Geçerlik",
      "Güdü"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Güvenirlik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Puanlamanın objektif olması, farklı puanlayıcıların aynı yanıtlara aynı puanı vermesi hangi niteliği destekler?",
    "options": [
      "Güvenirlik",
      "Geçerlik",
      "Güdü",
      "Ölçüm"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Güvenirlik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Derste hedeflenmeyen davranışların ölçülmesi hangi ölçme niteliğini zayıflatabilir?",
    "options": [
      "Birim eşitliği",
      "Genellik",
      "Geçerlik",
      "Kullanışlık"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Geçerlik\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Derste hedeflenmeyen davranışların ölçülmesi hangi ölçme niteliğini zayıflatabilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Genellik",
      "Geçerlik",
      "Kullanışlık",
      "Birim eşitliği"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Geçerlik\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Derste hedeflenmeyen davranışların ölçülmesi hangi ölçme niteliğini zayıflatabilir?",
    "options": [
      "Geçerlik",
      "Kullanışlık",
      "Birim eşitliği",
      "Genellik"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Geçerlik\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Derste hedeflenmeyen davranışların ölçülmesi hangi ölçme niteliğini zayıflatabilir?",
    "options": [
      "Kullanışlık",
      "Birim eşitliği",
      "Genellik",
      "Geçerlik"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Geçerlik\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Bir sorunun herkes tarafından doğru yanıtlanması veya hiç kimse tarafından yanıtlanamaması hangi niteliğin düşük olmasıyla ilişkilendirilir?",
    "options": [
      "Genellik",
      "Ayırt edicilik",
      "Kullanışlık",
      "Güvenirlik"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ayırt edicilik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Bir sorunun herkes tarafından doğru yanıtlanması veya hiç kimse tarafından yanıtlanamaması hangi niteliğin düşük olmasıyla ilişkilendirilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ayırt edicilik",
      "Kullanışlık",
      "Güvenirlik",
      "Genellik"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ayırt edicilik\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Bir sorunun herkes tarafından doğru yanıtlanması veya hiç kimse tarafından yanıtlanamaması hangi niteliğin düşük olmasıyla ilişkilendirilir?",
    "options": [
      "Kullanışlık",
      "Güvenirlik",
      "Genellik",
      "Ayırt edicilik"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ayırt edicilik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Bir sorunun herkes tarafından doğru yanıtlanması veya hiç kimse tarafından yanıtlanamaması hangi niteliğin düşük olmasıyla ilişkilendirilir?",
    "options": [
      "Güvenirlik",
      "Genellik",
      "Ayırt edicilik",
      "Kullanışlık"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ayırt edicilik\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ölçme aracının kolay okunması ve yanlış anlamaya fırsat vermemesi hangi niteliği destekler?",
    "options": [
      "Kullanışlık",
      "Ayırt edicilik",
      "Ölçüm",
      "Hüküm"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kullanışlık\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ölçme aracının kolay okunması ve yanlış anlamaya fırsat vermemesi hangi niteliği destekler. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ayırt edicilik",
      "Ölçüm",
      "Hüküm",
      "Kullanışlık"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Kullanışlık\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ölçme aracının kolay okunması ve yanlış anlamaya fırsat vermemesi hangi niteliği destekler?",
    "options": [
      "Ölçüm",
      "Hüküm",
      "Kullanışlık",
      "Ayırt edicilik"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kullanışlık\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ölçme aracının kolay okunması ve yanlış anlamaya fırsat vermemesi hangi niteliği destekler?",
    "options": [
      "Hüküm",
      "Kullanışlık",
      "Ayırt edicilik",
      "Ölçüm"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Kullanışlık\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ürün dosyasının eğitim sürecinde kullanılmasının amaçlarından biri hangisidir?",
    "options": [
      "Öğrencinin çalışmalarını saklamamak",
      "Yalnız teorik sınav yapmak",
      "Öğrenci becerilerini ölçmemek",
      "Öğrencinin mesleki çalışmalarını ve gelişimini kanıtlarla izlemek"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrencinin mesleki çalışmalarını ve gelişimini kanıtlarla izlemek\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ürün dosyasının eğitim sürecinde kullanılmasının amaçlarından biri hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız teorik sınav yapmak",
      "Öğrenci becerilerini ölçmemek",
      "Öğrencinin mesleki çalışmalarını ve gelişimini kanıtlarla izlemek",
      "Öğrencinin çalışmalarını saklamamak"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrencinin mesleki çalışmalarını ve gelişimini kanıtlarla izlemek\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ürün dosyasının eğitim sürecinde kullanılmasının amaçlarından biri hangisidir?",
    "options": [
      "Öğrenci becerilerini ölçmemek",
      "Öğrencinin mesleki çalışmalarını ve gelişimini kanıtlarla izlemek",
      "Öğrencinin çalışmalarını saklamamak",
      "Yalnız teorik sınav yapmak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin mesleki çalışmalarını ve gelişimini kanıtlarla izlemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ürün dosyasının eğitim sürecinde kullanılmasının amaçlarından biri hangisidir?",
    "options": [
      "Öğrencinin mesleki çalışmalarını ve gelişimini kanıtlarla izlemek",
      "Öğrencinin çalışmalarını saklamamak",
      "Yalnız teorik sınav yapmak",
      "Öğrenci becerilerini ölçmemek"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin mesleki çalışmalarını ve gelişimini kanıtlarla izlemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Beceri eğitiminde değerlendirme ölçütlerinin önceden açıkça belirtilmesi hangi sonucu destekler?",
    "options": [
      "Puanlamanın rastgele yapılması",
      "Öğrenci bilgisinin gizlenmesi",
      "Objektiflik ve ortak değerlendirme anlayışı",
      "Ölçütlerin belirsizleşmesi"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Objektiflik ve ortak değerlendirme anlayışı\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Beceri eğitiminde değerlendirme ölçütlerinin önceden açıkça belirtilmesi hangi sonucu destekler. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrenci bilgisinin gizlenmesi",
      "Objektiflik ve ortak değerlendirme anlayışı",
      "Ölçütlerin belirsizleşmesi",
      "Puanlamanın rastgele yapılması"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Objektiflik ve ortak değerlendirme anlayışı\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Beceri eğitiminde değerlendirme ölçütlerinin önceden açıkça belirtilmesi hangi sonucu destekler?",
    "options": [
      "Objektiflik ve ortak değerlendirme anlayışı",
      "Ölçütlerin belirsizleşmesi",
      "Puanlamanın rastgele yapılması",
      "Öğrenci bilgisinin gizlenmesi"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Objektiflik ve ortak değerlendirme anlayışı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Beceri eğitiminde değerlendirme ölçütlerinin önceden açıkça belirtilmesi hangi sonucu destekler?",
    "options": [
      "Ölçütlerin belirsizleşmesi",
      "Puanlamanın rastgele yapılması",
      "Öğrenci bilgisinin gizlenmesi",
      "Objektiflik ve ortak değerlendirme anlayışı"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Objektiflik ve ortak değerlendirme anlayışı\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Mesleki eğitimde teorik bilgi ile uygulama becerisinin birlikte kazandırılması hangi ilkeyi destekler?",
    "options": [
      "Mesleki gelişimin sınırlandırılmasını",
      "Eğitim-üretim ilişkisini",
      "Eğitimin yalnız sınav odaklı olmasını",
      "İşletme eğitiminin kaldırılmasını"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Eğitim-üretim ilişkisini\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: Mesleki eğitimde teorik bilgi ile uygulama becerisinin birlikte kazandırılması hangi ilkeyi destekler. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Eğitim-üretim ilişkisini",
      "Eğitimin yalnız sınav odaklı olmasını",
      "İşletme eğitiminin kaldırılmasını",
      "Mesleki gelişimin sınırlandırılmasını"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Eğitim-üretim ilişkisini\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Mesleki eğitimde teorik bilgi ile uygulama becerisinin birlikte kazandırılması hangi ilkeyi destekler?",
    "options": [
      "Eğitimin yalnız sınav odaklı olmasını",
      "İşletme eğitiminin kaldırılmasını",
      "Mesleki gelişimin sınırlandırılmasını",
      "Eğitim-üretim ilişkisini"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Eğitim-üretim ilişkisini\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Mesleki eğitimde teorik bilgi ile uygulama becerisinin birlikte kazandırılması hangi ilkeyi destekler?",
    "options": [
      "İşletme eğitiminin kaldırılmasını",
      "Mesleki gelişimin sınırlandırılmasını",
      "Eğitim-üretim ilişkisini",
      "Eğitimin yalnız sınav odaklı olmasını"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Eğitim-üretim ilişkisini\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: Ulusal meslek standardının temel işlevi hangisidir?",
    "options": [
      "Bir mesleğin başarıyla yapılabilmesi için gerekli bilgi, beceri ve yetkinlikleri tanımlamak",
      "İşletmelerin satış fiyatlarını belirlemek",
      "Öğrencilerin devamsızlıklarını kaydetmek",
      "İş yeri açma ruhsatı vermek"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bir mesleğin başarıyla yapılabilmesi için gerekli bilgi, beceri ve yetkinlikleri tanımlamak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ulusal meslek standardının temel işlevi hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İşletmelerin satış fiyatlarını belirlemek",
      "Öğrencilerin devamsızlıklarını kaydetmek",
      "İş yeri açma ruhsatı vermek",
      "Bir mesleğin başarıyla yapılabilmesi için gerekli bilgi, beceri ve yetkinlikleri tanımlamak"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Bir mesleğin başarıyla yapılabilmesi için gerekli bilgi, beceri ve yetkinlikleri tanımlamak\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ulusal meslek standardının temel işlevi hangisidir?",
    "options": [
      "Öğrencilerin devamsızlıklarını kaydetmek",
      "İş yeri açma ruhsatı vermek",
      "Bir mesleğin başarıyla yapılabilmesi için gerekli bilgi, beceri ve yetkinlikleri tanımlamak",
      "İşletmelerin satış fiyatlarını belirlemek"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bir mesleğin başarıyla yapılabilmesi için gerekli bilgi, beceri ve yetkinlikleri tanımlamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ulusal meslek standardının temel işlevi hangisidir?",
    "options": [
      "İş yeri açma ruhsatı vermek",
      "Bir mesleğin başarıyla yapılabilmesi için gerekli bilgi, beceri ve yetkinlikleri tanımlamak",
      "İşletmelerin satış fiyatlarını belirlemek",
      "Öğrencilerin devamsızlıklarını kaydetmek"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Bir mesleğin başarıyla yapılabilmesi için gerekli bilgi, beceri ve yetkinlikleri tanımlamak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Ulusal yeterlilikler esas olarak neyi tanımlar?",
    "options": [
      "Yalnız mesleğin tarihçesini",
      "İşletmenin yıllık kârını",
      "Çalışanın izin günlerini",
      "Ölçme-değerlendirme ve belgelendirmeye temel olacak yeterlilikleri"
    ],
    "answer": 3,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme-değerlendirme ve belgelendirmeye temel olacak yeterlilikleri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Ulusal yeterlilikler esas olarak neyi tanımlar. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İşletmenin yıllık kârını",
      "Çalışanın izin günlerini",
      "Ölçme-değerlendirme ve belgelendirmeye temel olacak yeterlilikleri",
      "Yalnız mesleğin tarihçesini"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Ölçme-değerlendirme ve belgelendirmeye temel olacak yeterlilikleri\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ulusal yeterlilikler esas olarak neyi tanımlar?",
    "options": [
      "Çalışanın izin günlerini",
      "Ölçme-değerlendirme ve belgelendirmeye temel olacak yeterlilikleri",
      "Yalnız mesleğin tarihçesini",
      "İşletmenin yıllık kârını"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçme-değerlendirme ve belgelendirmeye temel olacak yeterlilikleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ulusal yeterlilikler esas olarak neyi tanımlar?",
    "options": [
      "Ölçme-değerlendirme ve belgelendirmeye temel olacak yeterlilikleri",
      "Yalnız mesleğin tarihçesini",
      "İşletmenin yıllık kârını",
      "Çalışanın izin günlerini"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Ölçme-değerlendirme ve belgelendirmeye temel olacak yeterlilikleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Hayat boyu öğrenme yaklaşımı hangi düşünceye dayanır?",
    "options": [
      "Yalnız gençlerin öğrenmesine",
      "Mesleki becerilerin değişmeden kalmasına",
      "Öğrenmenin yaşam boyunca farklı ortamlarda devam etmesine",
      "Eğitimin okul bitince sona ermesine"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrenmenin yaşam boyunca farklı ortamlarda devam etmesine\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Hayat boyu öğrenme yaklaşımı hangi düşünceye dayanır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Mesleki becerilerin değişmeden kalmasına",
      "Öğrenmenin yaşam boyunca farklı ortamlarda devam etmesine",
      "Eğitimin okul bitince sona ermesine",
      "Yalnız gençlerin öğrenmesine"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrenmenin yaşam boyunca farklı ortamlarda devam etmesine\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Hayat boyu öğrenme yaklaşımı hangi düşünceye dayanır?",
    "options": [
      "Öğrenmenin yaşam boyunca farklı ortamlarda devam etmesine",
      "Eğitimin okul bitince sona ermesine",
      "Yalnız gençlerin öğrenmesine",
      "Mesleki becerilerin değişmeden kalmasına"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenmenin yaşam boyunca farklı ortamlarda devam etmesine\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Hayat boyu öğrenme yaklaşımı hangi düşünceye dayanır?",
    "options": [
      "Eğitimin okul bitince sona ermesine",
      "Yalnız gençlerin öğrenmesine",
      "Mesleki becerilerin değişmeden kalmasına",
      "Öğrenmenin yaşam boyunca farklı ortamlarda devam etmesine"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenmenin yaşam boyunca farklı ortamlarda devam etmesine\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İşletmelerde beceri eğitiminin temel katkısı hangisidir?",
    "options": [
      "İş güvenliği sorumluluğunun ortadan kalkması",
      "Öğrencinin mesleki bilgi ve becerilerini gerçek iş ortamında geliştirmesi",
      "Öğrencinin iş ortamından uzak tutulması",
      "Teorik derslerin tamamen kaldırılması"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrencinin mesleki bilgi ve becerilerini gerçek iş ortamında geliştirmesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: İşletmelerde beceri eğitiminin temel katkısı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrencinin mesleki bilgi ve becerilerini gerçek iş ortamında geliştirmesi",
      "Öğrencinin iş ortamından uzak tutulması",
      "Teorik derslerin tamamen kaldırılması",
      "İş güvenliği sorumluluğunun ortadan kalkması"
    ],
    "answer": 0,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Öğrencinin mesleki bilgi ve becerilerini gerçek iş ortamında geliştirmesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İşletmelerde beceri eğitiminin temel katkısı hangisidir?",
    "options": [
      "Öğrencinin iş ortamından uzak tutulması",
      "Teorik derslerin tamamen kaldırılması",
      "İş güvenliği sorumluluğunun ortadan kalkması",
      "Öğrencinin mesleki bilgi ve becerilerini gerçek iş ortamında geliştirmesi"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin mesleki bilgi ve becerilerini gerçek iş ortamında geliştirmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İşletmelerde beceri eğitiminin temel katkısı hangisidir?",
    "options": [
      "Teorik derslerin tamamen kaldırılması",
      "İş güvenliği sorumluluğunun ortadan kalkması",
      "Öğrencinin mesleki bilgi ve becerilerini gerçek iş ortamında geliştirmesi",
      "Öğrencinin iş ortamından uzak tutulması"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin mesleki bilgi ve becerilerini gerçek iş ortamında geliştirmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İşletmede eğitim sürecinde usta öğreticinin temel görevi hangisidir?",
    "options": [
      "Öğrencinin eğitimini planlamak, rehberlik etmek ve gelişimini izlemek",
      "Öğrenciyi yalnız üretim hedefi için kullanmak",
      "Değerlendirmeyi tamamen öğrenciye bırakmak",
      "İş güvenliği kurallarını isteğe bağlı görmek"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin eğitimini planlamak, rehberlik etmek ve gelişimini izlemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: İşletmede eğitim sürecinde usta öğreticinin temel görevi hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrenciyi yalnız üretim hedefi için kullanmak",
      "Değerlendirmeyi tamamen öğrenciye bırakmak",
      "İş güvenliği kurallarını isteğe bağlı görmek",
      "Öğrencinin eğitimini planlamak, rehberlik etmek ve gelişimini izlemek"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin eğitimini planlamak, rehberlik etmek ve gelişimini izlemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İşletmede eğitim sürecinde usta öğreticinin temel görevi hangisidir?",
    "options": [
      "Değerlendirmeyi tamamen öğrenciye bırakmak",
      "İş güvenliği kurallarını isteğe bağlı görmek",
      "Öğrencinin eğitimini planlamak, rehberlik etmek ve gelişimini izlemek",
      "Öğrenciyi yalnız üretim hedefi için kullanmak"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin eğitimini planlamak, rehberlik etmek ve gelişimini izlemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İşletmede eğitim sürecinde usta öğreticinin temel görevi hangisidir?",
    "options": [
      "İş güvenliği kurallarını isteğe bağlı görmek",
      "Öğrencinin eğitimini planlamak, rehberlik etmek ve gelişimini izlemek",
      "Öğrenciyi yalnız üretim hedefi için kullanmak",
      "Değerlendirmeyi tamamen öğrenciye bırakmak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencinin eğitimini planlamak, rehberlik etmek ve gelişimini izlemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Önceki öğrenmelerin tanınması hangi kazanımı sağlar?",
    "options": [
      "Öğrenmenin yalnız okulda gerçekleştiğinin kabulünü",
      "Bütün sınavların kaldırılmasını",
      "Belgesiz yeterliliklerin otomatik verilmesini",
      "Örgün, yaygın veya serbest öğrenmelerle edinilmiş bilgi ve becerilerin değerlendirilmesini"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Örgün, yaygın veya serbest öğrenmelerle edinilmiş bilgi ve becerilerin değerlendirilmesini\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: Önceki öğrenmelerin tanınması hangi kazanımı sağlar. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Bütün sınavların kaldırılmasını",
      "Belgesiz yeterliliklerin otomatik verilmesini",
      "Örgün, yaygın veya serbest öğrenmelerle edinilmiş bilgi ve becerilerin değerlendirilmesini",
      "Öğrenmenin yalnız okulda gerçekleştiğinin kabulünü"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Örgün, yaygın veya serbest öğrenmelerle edinilmiş bilgi ve becerilerin değerlendirilmesini\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Önceki öğrenmelerin tanınması hangi kazanımı sağlar?",
    "options": [
      "Belgesiz yeterliliklerin otomatik verilmesini",
      "Örgün, yaygın veya serbest öğrenmelerle edinilmiş bilgi ve becerilerin değerlendirilmesini",
      "Öğrenmenin yalnız okulda gerçekleştiğinin kabulünü",
      "Bütün sınavların kaldırılmasını"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Örgün, yaygın veya serbest öğrenmelerle edinilmiş bilgi ve becerilerin değerlendirilmesini\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Önceki öğrenmelerin tanınması hangi kazanımı sağlar?",
    "options": [
      "Örgün, yaygın veya serbest öğrenmelerle edinilmiş bilgi ve becerilerin değerlendirilmesini",
      "Öğrenmenin yalnız okulda gerçekleştiğinin kabulünü",
      "Bütün sınavların kaldırılmasını",
      "Belgesiz yeterliliklerin otomatik verilmesini"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Örgün, yaygın veya serbest öğrenmelerle edinilmiş bilgi ve becerilerin değerlendirilmesini\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: Mesleki eğitim/staj sözleşmesinin temel amacı hangisidir?",
    "options": [
      "Öğrencinin kişisel harcamalarını belirlemek",
      "Ders programını kaldırmak",
      "Tarafların görev, hak ve sorumluluklarını belirlemek",
      "İşletmenin ürün fiyatlarını düzenlemek"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Tarafların görev, hak ve sorumluluklarını belirlemek\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: Mesleki eğitim/staj sözleşmesinin temel amacı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ders programını kaldırmak",
      "Tarafların görev, hak ve sorumluluklarını belirlemek",
      "İşletmenin ürün fiyatlarını düzenlemek",
      "Öğrencinin kişisel harcamalarını belirlemek"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Tarafların görev, hak ve sorumluluklarını belirlemek\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Mesleki eğitim/staj sözleşmesinin temel amacı hangisidir?",
    "options": [
      "Tarafların görev, hak ve sorumluluklarını belirlemek",
      "İşletmenin ürün fiyatlarını düzenlemek",
      "Öğrencinin kişisel harcamalarını belirlemek",
      "Ders programını kaldırmak"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Tarafların görev, hak ve sorumluluklarını belirlemek\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Mesleki eğitim/staj sözleşmesinin temel amacı hangisidir?",
    "options": [
      "İşletmenin ürün fiyatlarını düzenlemek",
      "Öğrencinin kişisel harcamalarını belirlemek",
      "Ders programını kaldırmak",
      "Tarafların görev, hak ve sorumluluklarını belirlemek"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Tarafların görev, hak ve sorumluluklarını belirlemek\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: Meslek etiğinde dürüstlük ilkesi hangi davranışı gerektirir?",
    "options": [
      "Kişisel çıkar için kayıtları değiştirmek",
      "İş ve işlemlerde doğru bilgi vermek ve yanıltıcı davranmamak",
      "Hataları gizlemek",
      "Müşteriye eksik bilgi vermek"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İş ve işlemlerde doğru bilgi vermek ve yanıltıcı davranmamak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Meslek etiğinde dürüstlük ilkesi hangi davranışı gerektirir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İş ve işlemlerde doğru bilgi vermek ve yanıltıcı davranmamak",
      "Hataları gizlemek",
      "Müşteriye eksik bilgi vermek",
      "Kişisel çıkar için kayıtları değiştirmek"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İş ve işlemlerde doğru bilgi vermek ve yanıltıcı davranmamak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Meslek etiğinde dürüstlük ilkesi hangi davranışı gerektirir?",
    "options": [
      "Hataları gizlemek",
      "Müşteriye eksik bilgi vermek",
      "Kişisel çıkar için kayıtları değiştirmek",
      "İş ve işlemlerde doğru bilgi vermek ve yanıltıcı davranmamak"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İş ve işlemlerde doğru bilgi vermek ve yanıltıcı davranmamak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Meslek etiğinde dürüstlük ilkesi hangi davranışı gerektirir?",
    "options": [
      "Müşteriye eksik bilgi vermek",
      "Kişisel çıkar için kayıtları değiştirmek",
      "İş ve işlemlerde doğru bilgi vermek ve yanıltıcı davranmamak",
      "Hataları gizlemek"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İş ve işlemlerde doğru bilgi vermek ve yanıltıcı davranmamak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Meslek etiğinde sorumluluk bilinci neyi gerektirir?",
    "options": [
      "Üstlenilen görevlerin sonuçlarını kabul edip gereken özeni göstermeyi",
      "Hataları başkasına yüklemeyi",
      "Kuralları yalnız denetimde uygulamayı",
      "İşin niteliğini önemsememeyi"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Üstlenilen görevlerin sonuçlarını kabul edip gereken özeni göstermeyi\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Meslek etiğinde sorumluluk bilinci neyi gerektirir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Hataları başkasına yüklemeyi",
      "Kuralları yalnız denetimde uygulamayı",
      "İşin niteliğini önemsememeyi",
      "Üstlenilen görevlerin sonuçlarını kabul edip gereken özeni göstermeyi"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Üstlenilen görevlerin sonuçlarını kabul edip gereken özeni göstermeyi\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Meslek etiğinde sorumluluk bilinci neyi gerektirir?",
    "options": [
      "Kuralları yalnız denetimde uygulamayı",
      "İşin niteliğini önemsememeyi",
      "Üstlenilen görevlerin sonuçlarını kabul edip gereken özeni göstermeyi",
      "Hataları başkasına yüklemeyi"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Üstlenilen görevlerin sonuçlarını kabul edip gereken özeni göstermeyi\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Meslek etiğinde sorumluluk bilinci neyi gerektirir?",
    "options": [
      "İşin niteliğini önemsememeyi",
      "Üstlenilen görevlerin sonuçlarını kabul edip gereken özeni göstermeyi",
      "Hataları başkasına yüklemeyi",
      "Kuralları yalnız denetimde uygulamayı"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Üstlenilen görevlerin sonuçlarını kabul edip gereken özeni göstermeyi\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Ahilikte eline, beline ve diline sahip olma ilkesi hangi davranışla örtüşür?",
    "options": [
      "Haksız kazancı normal görmek",
      "Sözünde durmamak",
      "Başkalarının emeğini sahiplenmek",
      "Dürüst, ölçülü ve güvenilir davranmak"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Dürüst, ölçülü ve güvenilir davranmak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Ahilikte eline, beline ve diline sahip olma ilkesi hangi davranışla örtüşür. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Sözünde durmamak",
      "Başkalarının emeğini sahiplenmek",
      "Dürüst, ölçülü ve güvenilir davranmak",
      "Haksız kazancı normal görmek"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Dürüst, ölçülü ve güvenilir davranmak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ahilikte eline, beline ve diline sahip olma ilkesi hangi davranışla örtüşür?",
    "options": [
      "Başkalarının emeğini sahiplenmek",
      "Dürüst, ölçülü ve güvenilir davranmak",
      "Haksız kazancı normal görmek",
      "Sözünde durmamak"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Dürüst, ölçülü ve güvenilir davranmak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ahilikte eline, beline ve diline sahip olma ilkesi hangi davranışla örtüşür?",
    "options": [
      "Dürüst, ölçülü ve güvenilir davranmak",
      "Haksız kazancı normal görmek",
      "Sözünde durmamak",
      "Başkalarının emeğini sahiplenmek"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Dürüst, ölçülü ve güvenilir davranmak\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Ahilik teşkilatında mesleki eğitim nasıl yürütülürdü?",
    "options": [
      "Sadece bağımsız bireysel çalışmayla",
      "Meslek ahlakından ayrı teknik eğitimle",
      "Mesleki beceri ve ahlaki değerleri birlikte geliştiren iş başı ve iş dışı eğitimle",
      "Yalnız yazılı sınavlarla"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Mesleki beceri ve ahlaki değerleri birlikte geliştiren iş başı ve iş dışı eğitimle\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Ahilik teşkilatında mesleki eğitim nasıl yürütülürdü. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Meslek ahlakından ayrı teknik eğitimle",
      "Mesleki beceri ve ahlaki değerleri birlikte geliştiren iş başı ve iş dışı eğitimle",
      "Yalnız yazılı sınavlarla",
      "Sadece bağımsız bireysel çalışmayla"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Mesleki beceri ve ahlaki değerleri birlikte geliştiren iş başı ve iş dışı eğitimle\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ahilik teşkilatında mesleki eğitim nasıl yürütülürdü?",
    "options": [
      "Mesleki beceri ve ahlaki değerleri birlikte geliştiren iş başı ve iş dışı eğitimle",
      "Yalnız yazılı sınavlarla",
      "Sadece bağımsız bireysel çalışmayla",
      "Meslek ahlakından ayrı teknik eğitimle"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Mesleki beceri ve ahlaki değerleri birlikte geliştiren iş başı ve iş dışı eğitimle\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ahilik teşkilatında mesleki eğitim nasıl yürütülürdü?",
    "options": [
      "Yalnız yazılı sınavlarla",
      "Sadece bağımsız bireysel çalışmayla",
      "Meslek ahlakından ayrı teknik eğitimle",
      "Mesleki beceri ve ahlaki değerleri birlikte geliştiren iş başı ve iş dışı eğitimle"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Mesleki beceri ve ahlaki değerleri birlikte geliştiren iş başı ve iş dışı eğitimle\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Ahilikte usta-çırak ilişkisini güçlendiren temel unsur hangisidir?",
    "options": [
      "Rekabet uğruna yardımlaşmanın engellenmesi",
      "Güven, örneklik ve mesleki rehberlik",
      "Sürekli cezalandırma",
      "Bilginin saklanması"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Güven, örneklik ve mesleki rehberlik\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "YORUM: Ahilikte usta-çırak ilişkisini güçlendiren temel unsur hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Güven, örneklik ve mesleki rehberlik",
      "Sürekli cezalandırma",
      "Bilginin saklanması",
      "Rekabet uğruna yardımlaşmanın engellenmesi"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Güven, örneklik ve mesleki rehberlik\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ahilikte usta-çırak ilişkisini güçlendiren temel unsur hangisidir?",
    "options": [
      "Sürekli cezalandırma",
      "Bilginin saklanması",
      "Rekabet uğruna yardımlaşmanın engellenmesi",
      "Güven, örneklik ve mesleki rehberlik"
    ],
    "answer": 3,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Güven, örneklik ve mesleki rehberlik\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ahilikte usta-çırak ilişkisini güçlendiren temel unsur hangisidir?",
    "options": [
      "Bilginin saklanması",
      "Rekabet uğruna yardımlaşmanın engellenmesi",
      "Güven, örneklik ve mesleki rehberlik",
      "Sürekli cezalandırma"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Güven, örneklik ve mesleki rehberlik\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "BİLGİ: İş sağlığı ve güvenliğinde tehlike kavramı neyi ifade eder?",
    "options": [
      "Zarar verme potansiyeli bulunan kaynak, durum veya davranışı",
      "Gerçekleşmiş her türlü yaralanmayı",
      "Yalnız maddi kaybı",
      "Çalışanın performans puanını"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Zarar verme potansiyeli bulunan kaynak, durum veya davranışı\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: İş sağlığı ve güvenliğinde tehlike kavramı neyi ifade eder. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Gerçekleşmiş her türlü yaralanmayı",
      "Yalnız maddi kaybı",
      "Çalışanın performans puanını",
      "Zarar verme potansiyeli bulunan kaynak, durum veya davranışı"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Zarar verme potansiyeli bulunan kaynak, durum veya davranışı\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İş sağlığı ve güvenliğinde tehlike kavramı neyi ifade eder?",
    "options": [
      "Yalnız maddi kaybı",
      "Çalışanın performans puanını",
      "Zarar verme potansiyeli bulunan kaynak, durum veya davranışı",
      "Gerçekleşmiş her türlü yaralanmayı"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Zarar verme potansiyeli bulunan kaynak, durum veya davranışı\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İş sağlığı ve güvenliğinde tehlike kavramı neyi ifade eder?",
    "options": [
      "Çalışanın performans puanını",
      "Zarar verme potansiyeli bulunan kaynak, durum veya davranışı",
      "Gerçekleşmiş her türlü yaralanmayı",
      "Yalnız maddi kaybı"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Zarar verme potansiyeli bulunan kaynak, durum veya davranışı\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: Risk değerlendirmesinde ilk temel adım hangisidir?",
    "options": [
      "Kaza olduktan sonra rapor yazmak",
      "Kişisel koruyucuları rastgele dağıtmak",
      "Üretimi durdurmadan riskleri yok saymak",
      "Tehlikeleri belirlemek"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeleri belirlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: Risk değerlendirmesinde ilk temel adım hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Kişisel koruyucuları rastgele dağıtmak",
      "Üretimi durdurmadan riskleri yok saymak",
      "Tehlikeleri belirlemek",
      "Kaza olduktan sonra rapor yazmak"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeleri belirlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Risk değerlendirmesinde ilk temel adım hangisidir?",
    "options": [
      "Üretimi durdurmadan riskleri yok saymak",
      "Tehlikeleri belirlemek",
      "Kaza olduktan sonra rapor yazmak",
      "Kişisel koruyucuları rastgele dağıtmak"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeleri belirlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Risk değerlendirmesinde ilk temel adım hangisidir?",
    "options": [
      "Tehlikeleri belirlemek",
      "Kaza olduktan sonra rapor yazmak",
      "Kişisel koruyucuları rastgele dağıtmak",
      "Üretimi durdurmadan riskleri yok saymak"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlikeleri belirlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: Toplu korunma önlemlerinin kişisel koruyucu donanıma göre öncelikli olmasının nedeni hangisidir?",
    "options": [
      "Çalışanın eğitimini gereksiz kılması",
      "Her durumda maliyetsiz olması",
      "Tehlikeyi birden fazla çalışan için kaynağında veya ortamda kontrol etmesi",
      "Yalnız bir çalışana koruma sağlaması"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Tehlikeyi birden fazla çalışan için kaynağında veya ortamda kontrol etmesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Toplu korunma önlemlerinin kişisel koruyucu donanıma göre öncelikli olmasının nedeni hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Her durumda maliyetsiz olması",
      "Tehlikeyi birden fazla çalışan için kaynağında veya ortamda kontrol etmesi",
      "Yalnız bir çalışana koruma sağlaması",
      "Çalışanın eğitimini gereksiz kılması"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Tehlikeyi birden fazla çalışan için kaynağında veya ortamda kontrol etmesi\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Toplu korunma önlemlerinin kişisel koruyucu donanıma göre öncelikli olmasının nedeni hangisidir?",
    "options": [
      "Tehlikeyi birden fazla çalışan için kaynağında veya ortamda kontrol etmesi",
      "Yalnız bir çalışana koruma sağlaması",
      "Çalışanın eğitimini gereksiz kılması",
      "Her durumda maliyetsiz olması"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Tehlikeyi birden fazla çalışan için kaynağında veya ortamda kontrol etmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Toplu korunma önlemlerinin kişisel koruyucu donanıma göre öncelikli olmasının nedeni hangisidir?",
    "options": [
      "Yalnız bir çalışana koruma sağlaması",
      "Çalışanın eğitimini gereksiz kılması",
      "Her durumda maliyetsiz olması",
      "Tehlikeyi birden fazla çalışan için kaynağında veya ortamda kontrol etmesi"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Tehlikeyi birden fazla çalışan için kaynağında veya ortamda kontrol etmesi\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İş kazası incelemesinin temel amacı hangisidir?",
    "options": [
      "Üretim hedefini yükseltmek",
      "Kazanın kök nedenlerini belirleyip tekrarını önlemek",
      "Yalnız sorumlu kişiyi cezalandırmak",
      "Olayı kayıtlardan çıkarmak"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Kazanın kök nedenlerini belirleyip tekrarını önlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: İş kazası incelemesinin temel amacı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Kazanın kök nedenlerini belirleyip tekrarını önlemek",
      "Yalnız sorumlu kişiyi cezalandırmak",
      "Olayı kayıtlardan çıkarmak",
      "Üretim hedefini yükseltmek"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Kazanın kök nedenlerini belirleyip tekrarını önlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İş kazası incelemesinin temel amacı hangisidir?",
    "options": [
      "Yalnız sorumlu kişiyi cezalandırmak",
      "Olayı kayıtlardan çıkarmak",
      "Üretim hedefini yükseltmek",
      "Kazanın kök nedenlerini belirleyip tekrarını önlemek"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Kazanın kök nedenlerini belirleyip tekrarını önlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İş kazası incelemesinin temel amacı hangisidir?",
    "options": [
      "Olayı kayıtlardan çıkarmak",
      "Üretim hedefini yükseltmek",
      "Kazanın kök nedenlerini belirleyip tekrarını önlemek",
      "Yalnız sorumlu kişiyi cezalandırmak"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Kazanın kök nedenlerini belirleyip tekrarını önlemek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: Meslek hastalığından korunmada en etkili yaklaşım hangisidir?",
    "options": [
      "Zararlı etkeni kaynağında ortadan kaldırmak veya maruziyeti kontrol etmek",
      "Belirti ortaya çıkana kadar beklemek",
      "Kişisel koruyucuyu hiç kullanmamak",
      "Çalışma süresini kayıtsız uzatmak"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Zararlı etkeni kaynağında ortadan kaldırmak veya maruziyeti kontrol etmek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: Meslek hastalığından korunmada en etkili yaklaşım hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Belirti ortaya çıkana kadar beklemek",
      "Kişisel koruyucuyu hiç kullanmamak",
      "Çalışma süresini kayıtsız uzatmak",
      "Zararlı etkeni kaynağında ortadan kaldırmak veya maruziyeti kontrol etmek"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Zararlı etkeni kaynağında ortadan kaldırmak veya maruziyeti kontrol etmek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Meslek hastalığından korunmada en etkili yaklaşım hangisidir?",
    "options": [
      "Kişisel koruyucuyu hiç kullanmamak",
      "Çalışma süresini kayıtsız uzatmak",
      "Zararlı etkeni kaynağında ortadan kaldırmak veya maruziyeti kontrol etmek",
      "Belirti ortaya çıkana kadar beklemek"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Zararlı etkeni kaynağında ortadan kaldırmak veya maruziyeti kontrol etmek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Meslek hastalığından korunmada en etkili yaklaşım hangisidir?",
    "options": [
      "Çalışma süresini kayıtsız uzatmak",
      "Zararlı etkeni kaynağında ortadan kaldırmak veya maruziyeti kontrol etmek",
      "Belirti ortaya çıkana kadar beklemek",
      "Kişisel koruyucuyu hiç kullanmamak"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Zararlı etkeni kaynağında ortadan kaldırmak veya maruziyeti kontrol etmek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: Acil durum planında aşağıdakilerden hangisi bulunmalıdır?",
    "options": [
      "Yalnız yıllık izin listesi",
      "Ürün satış hedefleri",
      "Personelin özel alışveriş listesi",
      "Görevli kişiler, müdahale adımları ve tahliye düzeni"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Görevli kişiler, müdahale adımları ve tahliye düzeni\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: Acil durum planında aşağıdakilerden hangisi bulunmalıdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ürün satış hedefleri",
      "Personelin özel alışveriş listesi",
      "Görevli kişiler, müdahale adımları ve tahliye düzeni",
      "Yalnız yıllık izin listesi"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Görevli kişiler, müdahale adımları ve tahliye düzeni\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Acil durum planında aşağıdakilerden hangisi bulunmalıdır?",
    "options": [
      "Personelin özel alışveriş listesi",
      "Görevli kişiler, müdahale adımları ve tahliye düzeni",
      "Yalnız yıllık izin listesi",
      "Ürün satış hedefleri"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Görevli kişiler, müdahale adımları ve tahliye düzeni\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Acil durum planında aşağıdakilerden hangisi bulunmalıdır?",
    "options": [
      "Görevli kişiler, müdahale adımları ve tahliye düzeni",
      "Yalnız yıllık izin listesi",
      "Ürün satış hedefleri",
      "Personelin özel alışveriş listesi"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Görevli kişiler, müdahale adımları ve tahliye düzeni\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: Ergonomik düzenlemenin amacı hangisidir?",
    "options": [
      "Mola sürelerini kaldırmak",
      "İş yükünü sürekli artırmak",
      "İşi, ekipmanı ve ortamı insanın özelliklerine uygun hâle getirmek",
      "Çalışanı ekipmana uyum sağlamaya zorlamak"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"İşi, ekipmanı ve ortamı insanın özelliklerine uygun hâle getirmek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: Ergonomik düzenlemenin amacı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İş yükünü sürekli artırmak",
      "İşi, ekipmanı ve ortamı insanın özelliklerine uygun hâle getirmek",
      "Çalışanı ekipmana uyum sağlamaya zorlamak",
      "Mola sürelerini kaldırmak"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"İşi, ekipmanı ve ortamı insanın özelliklerine uygun hâle getirmek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ergonomik düzenlemenin amacı hangisidir?",
    "options": [
      "İşi, ekipmanı ve ortamı insanın özelliklerine uygun hâle getirmek",
      "Çalışanı ekipmana uyum sağlamaya zorlamak",
      "Mola sürelerini kaldırmak",
      "İş yükünü sürekli artırmak"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"İşi, ekipmanı ve ortamı insanın özelliklerine uygun hâle getirmek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ergonomik düzenlemenin amacı hangisidir?",
    "options": [
      "Çalışanı ekipmana uyum sağlamaya zorlamak",
      "Mola sürelerini kaldırmak",
      "İş yükünü sürekli artırmak",
      "İşi, ekipmanı ve ortamı insanın özelliklerine uygun hâle getirmek"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"İşi, ekipmanı ve ortamı insanın özelliklerine uygun hâle getirmek\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: İş kazası ve ramak kala olayların kayıt altına alınması neden önemlidir?",
    "options": [
      "Risk değerlendirmesini iptal etmek için",
      "Tehlike örüntülerini görüp önleyici tedbir geliştirmek için",
      "Olayları önemsiz göstermek için",
      "Çalışanları bilgilendirmemek için"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlike örüntülerini görüp önleyici tedbir geliştirmek için\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "YORUM: İş kazası ve ramak kala olayların kayıt altına alınması neden önemlidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Tehlike örüntülerini görüp önleyici tedbir geliştirmek için",
      "Olayları önemsiz göstermek için",
      "Çalışanları bilgilendirmemek için",
      "Risk değerlendirmesini iptal etmek için"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlike örüntülerini görüp önleyici tedbir geliştirmek için\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İş kazası ve ramak kala olayların kayıt altına alınması neden önemlidir?",
    "options": [
      "Olayları önemsiz göstermek için",
      "Çalışanları bilgilendirmemek için",
      "Risk değerlendirmesini iptal etmek için",
      "Tehlike örüntülerini görüp önleyici tedbir geliştirmek için"
    ],
    "answer": 3,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlike örüntülerini görüp önleyici tedbir geliştirmek için\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İş kazası ve ramak kala olayların kayıt altına alınması neden önemlidir?",
    "options": [
      "Çalışanları bilgilendirmemek için",
      "Risk değerlendirmesini iptal etmek için",
      "Tehlike örüntülerini görüp önleyici tedbir geliştirmek için",
      "Olayları önemsiz göstermek için"
    ],
    "answer": 2,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Tehlike örüntülerini görüp önleyici tedbir geliştirmek için\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "BİLGİ: İletişimde kodlama ne anlama gelir?",
    "options": [
      "Kaynağın düşünce veya duygusunu mesaj hâline getirmesi",
      "Alıcının mesajı yorumlaması",
      "Mesajın geri bildirimle ölçülmesi",
      "İletişimin kesilmesi"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Kaynağın düşünce veya duygusunu mesaj hâline getirmesi\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: İletişimde kodlama ne anlama gelir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Alıcının mesajı yorumlaması",
      "Mesajın geri bildirimle ölçülmesi",
      "İletişimin kesilmesi",
      "Kaynağın düşünce veya duygusunu mesaj hâline getirmesi"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Kaynağın düşünce veya duygusunu mesaj hâline getirmesi\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İletişimde kodlama ne anlama gelir?",
    "options": [
      "Mesajın geri bildirimle ölçülmesi",
      "İletişimin kesilmesi",
      "Kaynağın düşünce veya duygusunu mesaj hâline getirmesi",
      "Alıcının mesajı yorumlaması"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Kaynağın düşünce veya duygusunu mesaj hâline getirmesi\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İletişimde kodlama ne anlama gelir?",
    "options": [
      "İletişimin kesilmesi",
      "Kaynağın düşünce veya duygusunu mesaj hâline getirmesi",
      "Alıcının mesajı yorumlaması",
      "Mesajın geri bildirimle ölçülmesi"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Kaynağın düşünce veya duygusunu mesaj hâline getirmesi\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: Etkin dinlemede empati nasıl gösterilir?",
    "options": [
      "Sözünü sık sık keserek",
      "Kendi deneyimini tek doğru kabul ederek",
      "Dinlerken başka işle ilgilenerek",
      "Konuşanın bakış açısını anlamaya çalışıp yargılamadan dinleyerek"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Konuşanın bakış açısını anlamaya çalışıp yargılamadan dinleyerek\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: Etkin dinlemede empati nasıl gösterilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Kendi deneyimini tek doğru kabul ederek",
      "Dinlerken başka işle ilgilenerek",
      "Konuşanın bakış açısını anlamaya çalışıp yargılamadan dinleyerek",
      "Sözünü sık sık keserek"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Konuşanın bakış açısını anlamaya çalışıp yargılamadan dinleyerek\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Etkin dinlemede empati nasıl gösterilir?",
    "options": [
      "Dinlerken başka işle ilgilenerek",
      "Konuşanın bakış açısını anlamaya çalışıp yargılamadan dinleyerek",
      "Sözünü sık sık keserek",
      "Kendi deneyimini tek doğru kabul ederek"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Konuşanın bakış açısını anlamaya çalışıp yargılamadan dinleyerek\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Etkin dinlemede empati nasıl gösterilir?",
    "options": [
      "Konuşanın bakış açısını anlamaya çalışıp yargılamadan dinleyerek",
      "Sözünü sık sık keserek",
      "Kendi deneyimini tek doğru kabul ederek",
      "Dinlerken başka işle ilgilenerek"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Konuşanın bakış açısını anlamaya çalışıp yargılamadan dinleyerek\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: Yapıcı geri bildirim hangi özelliği taşımalıdır?",
    "options": [
      "Belirsiz ve gecikmiş olmalıdır",
      "Yalnız kusur aramalıdır",
      "Somut davranışa odaklı, açık ve geliştirici olmalıdır",
      "Kişiliği hedef alan aşağılayıcı ifadeler içermelidir"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Somut davranışa odaklı, açık ve geliştirici olmalıdır\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "YORUM: Yapıcı geri bildirim hangi özelliği taşımalıdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız kusur aramalıdır",
      "Somut davranışa odaklı, açık ve geliştirici olmalıdır",
      "Kişiliği hedef alan aşağılayıcı ifadeler içermelidir",
      "Belirsiz ve gecikmiş olmalıdır"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Somut davranışa odaklı, açık ve geliştirici olmalıdır\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Yapıcı geri bildirim hangi özelliği taşımalıdır?",
    "options": [
      "Somut davranışa odaklı, açık ve geliştirici olmalıdır",
      "Kişiliği hedef alan aşağılayıcı ifadeler içermelidir",
      "Belirsiz ve gecikmiş olmalıdır",
      "Yalnız kusur aramalıdır"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Somut davranışa odaklı, açık ve geliştirici olmalıdır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Yapıcı geri bildirim hangi özelliği taşımalıdır?",
    "options": [
      "Kişiliği hedef alan aşağılayıcı ifadeler içermelidir",
      "Belirsiz ve gecikmiş olmalıdır",
      "Yalnız kusur aramalıdır",
      "Somut davranışa odaklı, açık ve geliştirici olmalıdır"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Somut davranışa odaklı, açık ve geliştirici olmalıdır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İletişimde gürültü kavramı hangi durumu kapsar?",
    "options": [
      "Mesajın içeriğini",
      "Mesajın doğru iletilmesini veya anlaşılmasını bozan etkenleri",
      "Yalnız yüksek sesle konuşmayı",
      "Sadece alıcının verdiği cevabı"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Mesajın doğru iletilmesini veya anlaşılmasını bozan etkenleri\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: İletişimde gürültü kavramı hangi durumu kapsar. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Mesajın doğru iletilmesini veya anlaşılmasını bozan etkenleri",
      "Yalnız yüksek sesle konuşmayı",
      "Sadece alıcının verdiği cevabı",
      "Mesajın içeriğini"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Mesajın doğru iletilmesini veya anlaşılmasını bozan etkenleri\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İletişimde gürültü kavramı hangi durumu kapsar?",
    "options": [
      "Yalnız yüksek sesle konuşmayı",
      "Sadece alıcının verdiği cevabı",
      "Mesajın içeriğini",
      "Mesajın doğru iletilmesini veya anlaşılmasını bozan etkenleri"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Mesajın doğru iletilmesini veya anlaşılmasını bozan etkenleri\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İletişimde gürültü kavramı hangi durumu kapsar?",
    "options": [
      "Sadece alıcının verdiği cevabı",
      "Mesajın içeriğini",
      "Mesajın doğru iletilmesini veya anlaşılmasını bozan etkenleri",
      "Yalnız yüksek sesle konuşmayı"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Mesajın doğru iletilmesini veya anlaşılmasını bozan etkenleri\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: Beden dilini yorumlarken neden tek bir harekete dayanılmamalıdır?",
    "options": [
      "Hareketlerin bağlam, kültür ve diğer sözsüz işaretlerle birlikte değerlendirilmesi gerektiği için",
      "Her hareketin her kişide aynı anlamı taşıdığı için",
      "Sözsüz iletişimin hiçbir bilgi vermediği için",
      "Beden dilinin iletişimle ilgisi olmadığı için"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Hareketlerin bağlam, kültür ve diğer sözsüz işaretlerle birlikte değerlendirilmesi gerektiği için\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: Beden dilini yorumlarken neden tek bir harekete dayanılmamalıdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Her hareketin her kişide aynı anlamı taşıdığı için",
      "Sözsüz iletişimin hiçbir bilgi vermediği için",
      "Beden dilinin iletişimle ilgisi olmadığı için",
      "Hareketlerin bağlam, kültür ve diğer sözsüz işaretlerle birlikte değerlendirilmesi gerektiği için"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Hareketlerin bağlam, kültür ve diğer sözsüz işaretlerle birlikte değerlendirilmesi gerektiği için\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Beden dilini yorumlarken neden tek bir harekete dayanılmamalıdır?",
    "options": [
      "Sözsüz iletişimin hiçbir bilgi vermediği için",
      "Beden dilinin iletişimle ilgisi olmadığı için",
      "Hareketlerin bağlam, kültür ve diğer sözsüz işaretlerle birlikte değerlendirilmesi gerektiği için",
      "Her hareketin her kişide aynı anlamı taşıdığı için"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Hareketlerin bağlam, kültür ve diğer sözsüz işaretlerle birlikte değerlendirilmesi gerektiği için\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Beden dilini yorumlarken neden tek bir harekete dayanılmamalıdır?",
    "options": [
      "Beden dilinin iletişimle ilgisi olmadığı için",
      "Hareketlerin bağlam, kültür ve diğer sözsüz işaretlerle birlikte değerlendirilmesi gerektiği için",
      "Her hareketin her kişide aynı anlamı taşıdığı için",
      "Sözsüz iletişimin hiçbir bilgi vermediği için"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Hareketlerin bağlam, kültür ve diğer sözsüz işaretlerle birlikte değerlendirilmesi gerektiği için\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: Gelişimde kritik dönem kavramı neyi ifade eder?",
    "options": [
      "Bütün gelişimin durduğu dönemi",
      "Yalnız fiziksel büyümenin tamamlandığı yaşı",
      "Öğrenmenin mümkün olmadığı her dönemi",
      "Bazı öğrenme ve gelişim kazanımlarının belirli dönemlerde daha kolay veya önemli olduğu zaman aralığını"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bazı öğrenme ve gelişim kazanımlarının belirli dönemlerde daha kolay veya önemli olduğu zaman aralığını\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Gelişimde kritik dönem kavramı neyi ifade eder. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız fiziksel büyümenin tamamlandığı yaşı",
      "Öğrenmenin mümkün olmadığı her dönemi",
      "Bazı öğrenme ve gelişim kazanımlarının belirli dönemlerde daha kolay veya önemli olduğu zaman aralığını",
      "Bütün gelişimin durduğu dönemi"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bazı öğrenme ve gelişim kazanımlarının belirli dönemlerde daha kolay veya önemli olduğu zaman aralığını\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Gelişimde kritik dönem kavramı neyi ifade eder?",
    "options": [
      "Öğrenmenin mümkün olmadığı her dönemi",
      "Bazı öğrenme ve gelişim kazanımlarının belirli dönemlerde daha kolay veya önemli olduğu zaman aralığını",
      "Bütün gelişimin durduğu dönemi",
      "Yalnız fiziksel büyümenin tamamlandığı yaşı"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bazı öğrenme ve gelişim kazanımlarının belirli dönemlerde daha kolay veya önemli olduğu zaman aralığını\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Gelişimde kritik dönem kavramı neyi ifade eder?",
    "options": [
      "Bazı öğrenme ve gelişim kazanımlarının belirli dönemlerde daha kolay veya önemli olduğu zaman aralığını",
      "Bütün gelişimin durduğu dönemi",
      "Yalnız fiziksel büyümenin tamamlandığı yaşı",
      "Öğrenmenin mümkün olmadığı her dönemi"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Bazı öğrenme ve gelişim kazanımlarının belirli dönemlerde daha kolay veya önemli olduğu zaman aralığını\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Bireysel farklılıkları dikkate alan usta öğretici ne yapmalıdır?",
    "options": [
      "Farklı ihtiyaçları görmezden gelmelidir",
      "Yalnız hızlı öğrenenlerle ilgilenmelidir",
      "Öğrencilerin hazırbulunuşluk ve öğrenme hızlarına göre destek sunmalıdır",
      "Herkesin aynı hızda öğreneceğini varsaymalıdır"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencilerin hazırbulunuşluk ve öğrenme hızlarına göre destek sunmalıdır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Bireysel farklılıkları dikkate alan usta öğretici ne yapmalıdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız hızlı öğrenenlerle ilgilenmelidir",
      "Öğrencilerin hazırbulunuşluk ve öğrenme hızlarına göre destek sunmalıdır",
      "Herkesin aynı hızda öğreneceğini varsaymalıdır",
      "Farklı ihtiyaçları görmezden gelmelidir"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencilerin hazırbulunuşluk ve öğrenme hızlarına göre destek sunmalıdır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Bireysel farklılıkları dikkate alan usta öğretici ne yapmalıdır?",
    "options": [
      "Öğrencilerin hazırbulunuşluk ve öğrenme hızlarına göre destek sunmalıdır",
      "Herkesin aynı hızda öğreneceğini varsaymalıdır",
      "Farklı ihtiyaçları görmezden gelmelidir",
      "Yalnız hızlı öğrenenlerle ilgilenmelidir"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencilerin hazırbulunuşluk ve öğrenme hızlarına göre destek sunmalıdır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Bireysel farklılıkları dikkate alan usta öğretici ne yapmalıdır?",
    "options": [
      "Herkesin aynı hızda öğreneceğini varsaymalıdır",
      "Farklı ihtiyaçları görmezden gelmelidir",
      "Yalnız hızlı öğrenenlerle ilgilenmelidir",
      "Öğrencilerin hazırbulunuşluk ve öğrenme hızlarına göre destek sunmalıdır"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrencilerin hazırbulunuşluk ve öğrenme hızlarına göre destek sunmalıdır\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Pekiştirme öğrenme sürecinde hangi işleve sahiptir?",
    "options": [
      "Öğrenme hedefini belirsizleştirmeye",
      "İstenen davranışın tekrar edilme olasılığını artırmaya",
      "Öğrenilen davranışı mutlaka söndürmeye",
      "Öğrencinin dikkatini dağıtmaya"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İstenen davranışın tekrar edilme olasılığını artırmaya\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "YORUM: Pekiştirme öğrenme sürecinde hangi işleve sahiptir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "İstenen davranışın tekrar edilme olasılığını artırmaya",
      "Öğrenilen davranışı mutlaka söndürmeye",
      "Öğrencinin dikkatini dağıtmaya",
      "Öğrenme hedefini belirsizleştirmeye"
    ],
    "answer": 0,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İstenen davranışın tekrar edilme olasılığını artırmaya\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Pekiştirme öğrenme sürecinde hangi işleve sahiptir?",
    "options": [
      "Öğrenilen davranışı mutlaka söndürmeye",
      "Öğrencinin dikkatini dağıtmaya",
      "Öğrenme hedefini belirsizleştirmeye",
      "İstenen davranışın tekrar edilme olasılığını artırmaya"
    ],
    "answer": 3,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İstenen davranışın tekrar edilme olasılığını artırmaya\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Pekiştirme öğrenme sürecinde hangi işleve sahiptir?",
    "options": [
      "Öğrencinin dikkatini dağıtmaya",
      "Öğrenme hedefini belirsizleştirmeye",
      "İstenen davranışın tekrar edilme olasılığını artırmaya",
      "Öğrenilen davranışı mutlaka söndürmeye"
    ],
    "answer": 2,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"İstenen davranışın tekrar edilme olasılığını artırmaya\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "BİLGİ: Ön öğrenmeler yeni öğrenmeyi nasıl etkiler?",
    "options": [
      "Yeni bilgilerin anlamlandırılmasına temel oluşturabilir",
      "Her zaman öğrenmeyi engeller",
      "Öğrenme sürecinde etkisizdir",
      "Yalnız fiziksel gelişimi belirler"
    ],
    "answer": 0,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Yeni bilgilerin anlamlandırılmasına temel oluşturabilir\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "YORUM: Ön öğrenmeler yeni öğrenmeyi nasıl etkiler. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Her zaman öğrenmeyi engeller",
      "Öğrenme sürecinde etkisizdir",
      "Yalnız fiziksel gelişimi belirler",
      "Yeni bilgilerin anlamlandırılmasına temel oluşturabilir"
    ],
    "answer": 3,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Yeni bilgilerin anlamlandırılmasına temel oluşturabilir\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Ön öğrenmeler yeni öğrenmeyi nasıl etkiler?",
    "options": [
      "Öğrenme sürecinde etkisizdir",
      "Yalnız fiziksel gelişimi belirler",
      "Yeni bilgilerin anlamlandırılmasına temel oluşturabilir",
      "Her zaman öğrenmeyi engeller"
    ],
    "answer": 2,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Yeni bilgilerin anlamlandırılmasına temel oluşturabilir\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Ön öğrenmeler yeni öğrenmeyi nasıl etkiler?",
    "options": [
      "Yalnız fiziksel gelişimi belirler",
      "Yeni bilgilerin anlamlandırılmasına temel oluşturabilir",
      "Her zaman öğrenmeyi engeller",
      "Öğrenme sürecinde etkisizdir"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Eğitim Psikolojisi, Sayfa 140-155): Doğru cevap \"Yeni bilgilerin anlamlandırılmasına temel oluşturabilir\". Gelişim ve öğrenme psikolojisi temel kavramlarına göre doğru seçenektir."
  },
  {
    "question": "BİLGİ: Öğrenme ortamındaki gürültü ve yetersiz ışık hangi faktörlerdendir?",
    "options": [
      "Kalıtsal faktörler",
      "Ölçme araçları",
      "Gelişim dönemleri",
      "Çevresel öğrenme faktörleri"
    ],
    "answer": 3,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Çevresel öğrenme faktörleri\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "YORUM: Öğrenme ortamındaki gürültü ve yetersiz ışık hangi faktörlerdendir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ölçme araçları",
      "Gelişim dönemleri",
      "Çevresel öğrenme faktörleri",
      "Kalıtsal faktörler"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Çevresel öğrenme faktörleri\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Öğrenme ortamındaki gürültü ve yetersiz ışık hangi faktörlerdendir?",
    "options": [
      "Gelişim dönemleri",
      "Çevresel öğrenme faktörleri",
      "Kalıtsal faktörler",
      "Ölçme araçları"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Çevresel öğrenme faktörleri\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Öğrenme ortamındaki gürültü ve yetersiz ışık hangi faktörlerdendir?",
    "options": [
      "Çevresel öğrenme faktörleri",
      "Kalıtsal faktörler",
      "Ölçme araçları",
      "Gelişim dönemleri"
    ],
    "answer": 0,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Çevresel öğrenme faktörleri\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "BİLGİ: Buluş yoluyla öğretimde öğrencinin rolü hangisidir?",
    "options": [
      "Uygulamadan uzak durmak",
      "Yalnız öğreticiyi izlemek",
      "Örnekleri inceleyip ilişkileri keşfederek ilke veya kavrama ulaşmak",
      "Bilgiyi sorgulamadan ezberlemek"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Örnekleri inceleyip ilişkileri keşfederek ilke veya kavrama ulaşmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Buluş yoluyla öğretimde öğrencinin rolü hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız öğreticiyi izlemek",
      "Örnekleri inceleyip ilişkileri keşfederek ilke veya kavrama ulaşmak",
      "Bilgiyi sorgulamadan ezberlemek",
      "Uygulamadan uzak durmak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Örnekleri inceleyip ilişkileri keşfederek ilke veya kavrama ulaşmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Buluş yoluyla öğretimde öğrencinin rolü hangisidir?",
    "options": [
      "Örnekleri inceleyip ilişkileri keşfederek ilke veya kavrama ulaşmak",
      "Bilgiyi sorgulamadan ezberlemek",
      "Uygulamadan uzak durmak",
      "Yalnız öğreticiyi izlemek"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Örnekleri inceleyip ilişkileri keşfederek ilke veya kavrama ulaşmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Buluş yoluyla öğretimde öğrencinin rolü hangisidir?",
    "options": [
      "Bilgiyi sorgulamadan ezberlemek",
      "Uygulamadan uzak durmak",
      "Yalnız öğreticiyi izlemek",
      "Örnekleri inceleyip ilişkileri keşfederek ilke veya kavrama ulaşmak"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Örnekleri inceleyip ilişkileri keşfederek ilke veya kavrama ulaşmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Araştırma-inceleme yoluyla öğretim hangi beceriyi destekler?",
    "options": [
      "Öğrenci katılımını azaltma",
      "Problem belirleme, veri toplama ve sonuca ulaşma",
      "Yalnız ezberleme",
      "Talimatı sorgulamadan tekrarlama"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Problem belirleme, veri toplama ve sonuca ulaşma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Araştırma-inceleme yoluyla öğretim hangi beceriyi destekler. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Problem belirleme, veri toplama ve sonuca ulaşma",
      "Yalnız ezberleme",
      "Talimatı sorgulamadan tekrarlama",
      "Öğrenci katılımını azaltma"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Problem belirleme, veri toplama ve sonuca ulaşma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Araştırma-inceleme yoluyla öğretim hangi beceriyi destekler?",
    "options": [
      "Yalnız ezberleme",
      "Talimatı sorgulamadan tekrarlama",
      "Öğrenci katılımını azaltma",
      "Problem belirleme, veri toplama ve sonuca ulaşma"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Problem belirleme, veri toplama ve sonuca ulaşma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Araştırma-inceleme yoluyla öğretim hangi beceriyi destekler?",
    "options": [
      "Talimatı sorgulamadan tekrarlama",
      "Öğrenci katılımını azaltma",
      "Problem belirleme, veri toplama ve sonuca ulaşma",
      "Yalnız ezberleme"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Problem belirleme, veri toplama ve sonuca ulaşma\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Gösteri yönteminde güvenlik açısından usta öğretici ne yapmalıdır?",
    "options": [
      "İşlem basamaklarını ve güvenlik tedbirlerini görünür biçimde göstermelidir",
      "Tehlikeli adımları atlamalıdır",
      "Koruyucu donanımı gizlemelidir",
      "Öğrencileri hazırlıksız uygulamaya başlatmalıdır"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlem basamaklarını ve güvenlik tedbirlerini görünür biçimde göstermelidir\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Gösteri yönteminde güvenlik açısından usta öğretici ne yapmalıdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Tehlikeli adımları atlamalıdır",
      "Koruyucu donanımı gizlemelidir",
      "Öğrencileri hazırlıksız uygulamaya başlatmalıdır",
      "İşlem basamaklarını ve güvenlik tedbirlerini görünür biçimde göstermelidir"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlem basamaklarını ve güvenlik tedbirlerini görünür biçimde göstermelidir\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Gösteri yönteminde güvenlik açısından usta öğretici ne yapmalıdır?",
    "options": [
      "Koruyucu donanımı gizlemelidir",
      "Öğrencileri hazırlıksız uygulamaya başlatmalıdır",
      "İşlem basamaklarını ve güvenlik tedbirlerini görünür biçimde göstermelidir",
      "Tehlikeli adımları atlamalıdır"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlem basamaklarını ve güvenlik tedbirlerini görünür biçimde göstermelidir\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Gösteri yönteminde güvenlik açısından usta öğretici ne yapmalıdır?",
    "options": [
      "Öğrencileri hazırlıksız uygulamaya başlatmalıdır",
      "İşlem basamaklarını ve güvenlik tedbirlerini görünür biçimde göstermelidir",
      "Tehlikeli adımları atlamalıdır",
      "Koruyucu donanımı gizlemelidir"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"İşlem basamaklarını ve güvenlik tedbirlerini görünür biçimde göstermelidir\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Deney yönteminin öğrenmeye katkısı hangisidir?",
    "options": [
      "Öğrenciyi pasif dinleyici yapmak",
      "Uygulama fırsatını ortadan kaldırmak",
      "Sonuçları önceden ezberletmek",
      "Gözlem ve deneme yoluyla neden-sonuç ilişkilerini anlamayı desteklemek"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gözlem ve deneme yoluyla neden-sonuç ilişkilerini anlamayı desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Deney yönteminin öğrenmeye katkısı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Uygulama fırsatını ortadan kaldırmak",
      "Sonuçları önceden ezberletmek",
      "Gözlem ve deneme yoluyla neden-sonuç ilişkilerini anlamayı desteklemek",
      "Öğrenciyi pasif dinleyici yapmak"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gözlem ve deneme yoluyla neden-sonuç ilişkilerini anlamayı desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Deney yönteminin öğrenmeye katkısı hangisidir?",
    "options": [
      "Sonuçları önceden ezberletmek",
      "Gözlem ve deneme yoluyla neden-sonuç ilişkilerini anlamayı desteklemek",
      "Öğrenciyi pasif dinleyici yapmak",
      "Uygulama fırsatını ortadan kaldırmak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gözlem ve deneme yoluyla neden-sonuç ilişkilerini anlamayı desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Deney yönteminin öğrenmeye katkısı hangisidir?",
    "options": [
      "Gözlem ve deneme yoluyla neden-sonuç ilişkilerini anlamayı desteklemek",
      "Öğrenciyi pasif dinleyici yapmak",
      "Uygulama fırsatını ortadan kaldırmak",
      "Sonuçları önceden ezberletmek"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Gözlem ve deneme yoluyla neden-sonuç ilişkilerini anlamayı desteklemek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Öğretim faaliyetinde hazırlık basamağı neden gereklidir?",
    "options": [
      "Uygulamayı başlatmadan bitirmek için",
      "Öğrenme hedeflerini gizlemek için",
      "Öğrenciyi, ortamı, araçları ve hedefleri öğretime hazır hâle getirmek için",
      "Değerlendirmeyi ortadan kaldırmak için"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenciyi, ortamı, araçları ve hedefleri öğretime hazır hâle getirmek için\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Öğretim faaliyetinde hazırlık basamağı neden gereklidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrenme hedeflerini gizlemek için",
      "Öğrenciyi, ortamı, araçları ve hedefleri öğretime hazır hâle getirmek için",
      "Değerlendirmeyi ortadan kaldırmak için",
      "Uygulamayı başlatmadan bitirmek için"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenciyi, ortamı, araçları ve hedefleri öğretime hazır hâle getirmek için\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Öğretim faaliyetinde hazırlık basamağı neden gereklidir?",
    "options": [
      "Öğrenciyi, ortamı, araçları ve hedefleri öğretime hazır hâle getirmek için",
      "Değerlendirmeyi ortadan kaldırmak için",
      "Uygulamayı başlatmadan bitirmek için",
      "Öğrenme hedeflerini gizlemek için"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenciyi, ortamı, araçları ve hedefleri öğretime hazır hâle getirmek için\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Öğretim faaliyetinde hazırlık basamağı neden gereklidir?",
    "options": [
      "Değerlendirmeyi ortadan kaldırmak için",
      "Uygulamayı başlatmadan bitirmek için",
      "Öğrenme hedeflerini gizlemek için",
      "Öğrenciyi, ortamı, araçları ve hedefleri öğretime hazır hâle getirmek için"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğrenciyi, ortamı, araçları ve hedefleri öğretime hazır hâle getirmek için\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Eğitim programının hedef ögesi neyi belirler?",
    "options": [
      "İşletmenin satış politikasını",
      "Eğitim sonunda öğrencide gerçekleştirilmesi beklenen özellikleri",
      "Yalnız dersliklerin fiziksel konumunu",
      "Öğrencinin kişisel harcamalarını"
    ],
    "answer": 1,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Eğitim sonunda öğrencide gerçekleştirilmesi beklenen özellikleri\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "YORUM: Eğitim programının hedef ögesi neyi belirler. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Eğitim sonunda öğrencide gerçekleştirilmesi beklenen özellikleri",
      "Yalnız dersliklerin fiziksel konumunu",
      "Öğrencinin kişisel harcamalarını",
      "İşletmenin satış politikasını"
    ],
    "answer": 0,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Eğitim sonunda öğrencide gerçekleştirilmesi beklenen özellikleri\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Eğitim programının hedef ögesi neyi belirler?",
    "options": [
      "Yalnız dersliklerin fiziksel konumunu",
      "Öğrencinin kişisel harcamalarını",
      "İşletmenin satış politikasını",
      "Eğitim sonunda öğrencide gerçekleştirilmesi beklenen özellikleri"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eğitim sonunda öğrencide gerçekleştirilmesi beklenen özellikleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Eğitim programının hedef ögesi neyi belirler?",
    "options": [
      "Öğrencinin kişisel harcamalarını",
      "İşletmenin satış politikasını",
      "Eğitim sonunda öğrencide gerçekleştirilmesi beklenen özellikleri",
      "Yalnız dersliklerin fiziksel konumunu"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Eğitim sonunda öğrencide gerçekleştirilmesi beklenen özellikleri\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Öğretim programında içerik ögesi neyi kapsar?",
    "options": [
      "Hedeflere ulaşmak için düzenlenen konu ve öğrenme alanlarını",
      "Yalnız sınav tarihlerini",
      "Öğretmenin özlük dosyasını",
      "İşletme bütçesini"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hedeflere ulaşmak için düzenlenen konu ve öğrenme alanlarını\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Öğretim programında içerik ögesi neyi kapsar. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız sınav tarihlerini",
      "Öğretmenin özlük dosyasını",
      "İşletme bütçesini",
      "Hedeflere ulaşmak için düzenlenen konu ve öğrenme alanlarını"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hedeflere ulaşmak için düzenlenen konu ve öğrenme alanlarını\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Öğretim programında içerik ögesi neyi kapsar?",
    "options": [
      "Öğretmenin özlük dosyasını",
      "İşletme bütçesini",
      "Hedeflere ulaşmak için düzenlenen konu ve öğrenme alanlarını",
      "Yalnız sınav tarihlerini"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hedeflere ulaşmak için düzenlenen konu ve öğrenme alanlarını\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Öğretim programında içerik ögesi neyi kapsar?",
    "options": [
      "İşletme bütçesini",
      "Hedeflere ulaşmak için düzenlenen konu ve öğrenme alanlarını",
      "Yalnız sınav tarihlerini",
      "Öğretmenin özlük dosyasını"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hedeflere ulaşmak için düzenlenen konu ve öğrenme alanlarını\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Öğretim programında değerlendirme ögesi ne işe yarar?",
    "options": [
      "İçeriği rastgele değiştirmeye",
      "Öğrenci katılımını kaldırmaya",
      "Ders süresini otomatik uzatmaya",
      "Hedeflere ulaşma düzeyine ilişkin kanıt toplamaya"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hedeflere ulaşma düzeyine ilişkin kanıt toplamaya\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "YORUM: Öğretim programında değerlendirme ögesi ne işe yarar. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Öğrenci katılımını kaldırmaya",
      "Ders süresini otomatik uzatmaya",
      "Hedeflere ulaşma düzeyine ilişkin kanıt toplamaya",
      "İçeriği rastgele değiştirmeye"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hedeflere ulaşma düzeyine ilişkin kanıt toplamaya\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Öğretim programında değerlendirme ögesi ne işe yarar?",
    "options": [
      "Ders süresini otomatik uzatmaya",
      "Hedeflere ulaşma düzeyine ilişkin kanıt toplamaya",
      "İçeriği rastgele değiştirmeye",
      "Öğrenci katılımını kaldırmaya"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hedeflere ulaşma düzeyine ilişkin kanıt toplamaya\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Öğretim programında değerlendirme ögesi ne işe yarar?",
    "options": [
      "Hedeflere ulaşma düzeyine ilişkin kanıt toplamaya",
      "İçeriği rastgele değiştirmeye",
      "Öğrenci katılımını kaldırmaya",
      "Ders süresini otomatik uzatmaya"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Hedeflere ulaşma düzeyine ilişkin kanıt toplamaya\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: İşletme yıllık planı hazırlanırken hangi unsur esas alınmalıdır?",
    "options": [
      "Öğrencinin kişisel tercihleri",
      "Sınav sonuçları dışındaki tüm bilgiler",
      "Öğretim programındaki kazanımlar ve işletmedeki iş/üretim olanakları",
      "Yalnız işletmenin günlük satışları"
    ],
    "answer": 2,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Öğretim programındaki kazanımlar ve işletmedeki iş/üretim olanakları\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "YORUM: İşletme yıllık planı hazırlanırken hangi unsur esas alınmalıdır. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Sınav sonuçları dışındaki tüm bilgiler",
      "Öğretim programındaki kazanımlar ve işletmedeki iş/üretim olanakları",
      "Yalnız işletmenin günlük satışları",
      "Öğrencinin kişisel tercihleri"
    ],
    "answer": 1,
    "explanation": "7. Öğrenme Birimi (Öğretim Programı Uygulamaları, Sayfa 174-197): Doğru cevap \"Öğretim programındaki kazanımlar ve işletmedeki iş/üretim olanakları\". Modüler mesleki eğitim programı ve işletme planı esaslarına göre doğrudur."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: İşletme yıllık planı hazırlanırken hangi unsur esas alınmalıdır?",
    "options": [
      "Öğretim programındaki kazanımlar ve işletmedeki iş/üretim olanakları",
      "Yalnız işletmenin günlük satışları",
      "Öğrencinin kişisel tercihleri",
      "Sınav sonuçları dışındaki tüm bilgiler"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğretim programındaki kazanımlar ve işletmedeki iş/üretim olanakları\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? İşletme yıllık planı hazırlanırken hangi unsur esas alınmalıdır?",
    "options": [
      "Yalnız işletmenin günlük satışları",
      "Öğrencinin kişisel tercihleri",
      "Sınav sonuçları dışındaki tüm bilgiler",
      "Öğretim programındaki kazanımlar ve işletmedeki iş/üretim olanakları"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Öğretim programındaki kazanımlar ve işletmedeki iş/üretim olanakları\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Verimlilik genel olarak nasıl ifade edilir?",
    "options": [
      "Üretim maliyetinden bağımsız satış fiyatıyla",
      "Elde edilen çıktı ile kullanılan kaynaklar arasındaki ilişkiyle",
      "Yalnız ürünün görünüşüyle",
      "Sadece çalışan sayısıyla"
    ],
    "answer": 1,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Elde edilen çıktı ile kullanılan kaynaklar arasındaki ilişkiyle\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: Verimlilik genel olarak nasıl ifade edilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Elde edilen çıktı ile kullanılan kaynaklar arasındaki ilişkiyle",
      "Yalnız ürünün görünüşüyle",
      "Sadece çalışan sayısıyla",
      "Üretim maliyetinden bağımsız satış fiyatıyla"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Elde edilen çıktı ile kullanılan kaynaklar arasındaki ilişkiyle\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Verimlilik genel olarak nasıl ifade edilir?",
    "options": [
      "Yalnız ürünün görünüşüyle",
      "Sadece çalışan sayısıyla",
      "Üretim maliyetinden bağımsız satış fiyatıyla",
      "Elde edilen çıktı ile kullanılan kaynaklar arasındaki ilişkiyle"
    ],
    "answer": 3,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Elde edilen çıktı ile kullanılan kaynaklar arasındaki ilişkiyle\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Verimlilik genel olarak nasıl ifade edilir?",
    "options": [
      "Sadece çalışan sayısıyla",
      "Üretim maliyetinden bağımsız satış fiyatıyla",
      "Elde edilen çıktı ile kullanılan kaynaklar arasındaki ilişkiyle",
      "Yalnız ürünün görünüşüyle"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Elde edilen çıktı ile kullanılan kaynaklar arasındaki ilişkiyle\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Kalite maliyetleri hangi grupları içerebilir?",
    "options": [
      "Önleme, değerlendirme ve başarısızlık maliyetlerini",
      "Yalnız reklam giderlerini",
      "Sadece hammadde giderlerini",
      "Yalnız personel ücretlerini"
    ],
    "answer": 0,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Önleme, değerlendirme ve başarısızlık maliyetlerini\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: Kalite maliyetleri hangi grupları içerebilir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Yalnız reklam giderlerini",
      "Sadece hammadde giderlerini",
      "Yalnız personel ücretlerini",
      "Önleme, değerlendirme ve başarısızlık maliyetlerini"
    ],
    "answer": 3,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Önleme, değerlendirme ve başarısızlık maliyetlerini\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Kalite maliyetleri hangi grupları içerebilir?",
    "options": [
      "Sadece hammadde giderlerini",
      "Yalnız personel ücretlerini",
      "Önleme, değerlendirme ve başarısızlık maliyetlerini",
      "Yalnız reklam giderlerini"
    ],
    "answer": 2,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Önleme, değerlendirme ve başarısızlık maliyetlerini\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Kalite maliyetleri hangi grupları içerebilir?",
    "options": [
      "Yalnız personel ücretlerini",
      "Önleme, değerlendirme ve başarısızlık maliyetlerini",
      "Yalnız reklam giderlerini",
      "Sadece hammadde giderlerini"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Önleme, değerlendirme ve başarısızlık maliyetlerini\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "BİLGİ: Sürekli iyileştirme yaklaşımının amacı hangisidir?",
    "options": [
      "Mevcut hataları kalıcı kabul etmek",
      "Ölçüm yapmayı bırakmak",
      "Çalışan önerilerini engellemek",
      "Süreç ve sonuçları düzenli gözden geçirerek geliştirmek"
    ],
    "answer": 3,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Süreç ve sonuçları düzenli gözden geçirerek geliştirmek\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "YORUM: Sürekli iyileştirme yaklaşımının amacı hangisidir. Bu bilgiden hareketle aşağıdaki seçeneklerden hangisi doğru kabul edilir?",
    "options": [
      "Ölçüm yapmayı bırakmak",
      "Çalışan önerilerini engellemek",
      "Süreç ve sonuçları düzenli gözden geçirerek geliştirmek",
      "Mevcut hataları kalıcı kabul etmek"
    ],
    "answer": 2,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"Süreç ve sonuçları düzenli gözden geçirerek geliştirmek\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisinin mesleki eğitim sürecinde bu konuyla ilgili bir durumla karşılaşır. Doğru yaklaşımı belirlemek için: Sürekli iyileştirme yaklaşımının amacı hangisidir?",
    "options": [
      "Çalışan önerilerini engellemek",
      "Süreç ve sonuçları düzenli gözden geçirerek geliştirmek",
      "Mevcut hataları kalıcı kabul etmek",
      "Ölçüm yapmayı bırakmak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Süreç ve sonuçları düzenli gözden geçirerek geliştirmek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "UYGULAMA: Atölye/işletme eğitiminde bu bilgiyi uygulamaya aktarırken aşağıdaki seçeneklerden hangisi esas alınmalıdır? Sürekli iyileştirme yaklaşımının amacı hangisidir?",
    "options": [
      "Süreç ve sonuçları düzenli gözden geçirerek geliştirmek",
      "Mevcut hataları kalıcı kabul etmek",
      "Ölçüm yapmayı bırakmak",
      "Çalışan önerilerini engellemek"
    ],
    "answer": 0,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Süreç ve sonuçları düzenli gözden geçirerek geliştirmek\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: 15 personel çalıştıran bir mobilya atölyesi, işletmesinde beceri eğitimi gören çırağına yasal alt sınır üzerinden ücret ödemektedir. 3308 sayılı Kanun'a göre devletin bu işletmeye ödeyeceği katkı payı oranı nedir?",
    "options": [
      "Ödenebilecek en az ücretin üçte biri",
      "Ödenebilecek en az ücretin üçte ikisi",
      "Ödenebilecek en az ücretin tamamı",
      "Ödenebilecek en az ücretin dörtte biri"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Ödenebilecek en az ücretin üçte ikisi\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: İşletmede beceri eğitimi gören bir öğrenci, sağlık sorunu nedeniyle iki gün işe gelememiştir. Öğrencinin aldığı rapor veya yazılı veli beyanını özür gününü takip eden en geç kaç iş günü içinde okul müdürlüğüne teslim etmesi gerekir?",
    "options": [
      "2 iş günü",
      "3 iş günü",
      "5 iş günü",
      "7 iş günü"
    ],
    "answer": 2,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"5 iş günü\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Bir oto tamir atölyesinde usta öğretici işten ayrılmış ve işletmede başka usta öğretici kalmamıştır. Bu nedenle feshedilen mesleki eğitim sözleşmesinin, fesih tarihinden itibaren kaç iş günü içinde okul müdürlüğüne yazılı olarak bildirilmesi gerekir?",
    "options": [
      "Aynı gün içinde",
      "2 iş günü içinde",
      "3 iş günü içinde",
      "10 iş günü içinde"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"3 iş günü içinde\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Turizm sektöründe faaliyet gösteren bir otelde beceri eğitimi gören lise öğrencilerinin, İl İstihdam ve Mesleki Eğitim Kurulu kararıyla gece çalışması yapmalarına izin verilmiştir. Bu eğitim günde en fazla kaç saat ve en geç saat kaça kadar yapılabilir?",
    "options": [
      "Günde 6 saati ve saat 21.00'i geçmemek üzere",
      "Günde 8 saati ve saat 22.00'yi geçmemek üzere",
      "Günde 8 saati ve saat 24.00'ü geçmemek üzere",
      "Günde 7,5 saati ve saat 20.00'yi geçmemek üzere"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Günde 8 saati ve saat 22.00'yi geçmemek üzere\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Metal atölyesinde çalışan bir çırak, taşlama makinesinden sıçrayan kıvılcım sonucu elinden yaralanmıştır. İşverenin bu iş kazasını yetkili mercilere bildirme yükümlülüğü aşağıdakilerden hangisidir?",
    "options": [
      "Kolluk kuvvetlerine derhâl, SGK'ya en geç 3 iş günü içinde bildirmelidir",
      "Kolluk kuvvetlerine 3 iş günü içinde, SGK'ya ay sonunda bildirmelidir",
      "Yalnızca okul müdürlüğüne 2 iş günü içinde bildirmesi yeterlidir",
      "Sadece SGK'ya 10 iş günü içinde e-bildirge ile bildirmelidir"
    ],
    "answer": 0,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Kolluk kuvvetlerine derhâl, SGK'ya en geç 3 iş günü içinde bildirmelidir\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Elektrik-elektronik atölyesinde öğrencilere güvenli çalışma kurallarını anlatan usta öğretici, insan vücudu için tehlikeli gerilim sınırlarını vurgulamaktadır. Alternatif akım (AC) ve doğru akımda (DC) tehlike sınırı kaç Volttan itibaren başlar?",
    "options": [
      "Alternatif akım 50 Volt, doğru akım 110 Volt",
      "Alternatif akım 15 Volt, doğru akım 20 Volt",
      "Alternatif akım 24 Volt, doğru akım 48 Volt",
      "Alternatif akım 12 Volt, doğru akım 12 Volt"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"Alternatif akım 15 Volt, doğru akım 20 Volt\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Depo ve lojistik alanında staj yapan bir öğrenci, forklift ile eğimli bir rampadan paletli yük indirmektedir. İş sağlığı ve güvenliği kurallarına göre operatör rampada nasıl hareket etmelidir?",
    "options": [
      "Yükü çıkarırken geri, indirirken ileri doğru hareket etmelidir",
      "Yükü çıkarırken ileri, indirirken geriye doğru hareket etmelidir",
      "Her iki durumda da çatalları en üst seviyeye kaldırarak ileri gitmelidir",
      "Rampada yük indirirken aracın motorunu durdurup boşa almalıdır"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Yükü çıkarırken ileri, indirirken geriye doğru hareket etmelidir\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Makine teknolojisi atölyesinde büyük bir pres tezgâhının çeşitli kısımlarında aynı anda üç çalışan görev yapmaktadır. İş sağlığı ve güvenliği kurallarına göre bu büyük tezgâhta çalıştırma ve durdurma düğmeleri nasıl düzenlenmelidir?",
    "options": [
      "Tek bir çalıştırma ve tek bir durdurma düğmesi yeterlidir",
      "Her çalışan için bir çalıştırma ve bir durdurma düğmesi bulunmalı; bütün çalıştırma düğmelerine basılmadan makine çalışmamalıdır",
      "Yalnızca usta öğreticinin kontrolünde tek bir ayak pedalı bulunmalıdır",
      "Çalıştırma düğmeleri kırmızı, durdurma düğmeleri yeşil renkte olmalıdır"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Her çalışan için bir çalıştırma ve bir durdurma düğmesi bulunmalı; bütün çalıştırma düğmelerine basılmadan makine çalışmamalıdır\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: Tesviye atölyesinde çalışan bir stajyer, kullandığı torna tezgâhının hareketli kısım koruyucusunda bir kırık fark etmiştir. Bu durumda öğrencinin ve usta öğreticinin yapması gereken ilk işlem nedir?",
    "options": [
      "Vardiya bitimine kadar dikkatli bir şekilde çalışmaya devam etmek",
      "Tezgâhı derhâl durdurmak, ilgililere haber vermek ve üzerine uyarı levhası asmak",
      "Kırık koruyucuyu tamamen sökerek çalışmaya devam etmek",
      "Sadece koruyucu gözlük takarak işlemi hızla tamamlamak"
    ],
    "answer": 1,
    "explanation": "6. Öğrenme Birimi (Mesleki Öğretim Yöntem ve Teknikleri, Sayfa 158-171): Doğru cevap \"Tezgâhı derhâl durdurmak, ilgililere haber vermek ve üzerine uyarı levhası asmak\". Usta öğreticinin eğitim görevleri ve öğretim basamakları çerçevesinde doğrudur."
  },
  {
    "question": "SENARYO: Metal işleri atölyesinde ayak pedalı ile çalışan bir giyotin makasta çalışma yapılmaktadır. İstem dışı basmaları önlemek amacıyla pedal üzerinde nasıl bir güvenlik önlemi bulunmalıdır?",
    "options": [
      "Pedal tamamen açıkta bırakılmalı ve iki ayakla basılmalıdır",
      "Pedalın üzerinde ancak bir ayağın girebileceği bir koruyucu olmalı ve bu koruyucu çıkarılmamalıdır",
      "Pedal tezgâhtan en az 2 metre uzağa yerleştirilmelidir",
      "Pedalın üzerine kaymayı önlemek için yağ sürülmelidir"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Ölçme ve Değerlendirme, Sayfa 214-223): Doğru cevap \"Pedalın üzerinde ancak bir ayağın girebileceği bir koruyucu olmalı ve bu koruyucu çıkarılmamalıdır\". Ölçme araçlarının nitelikleri (geçerlik, güvenirlik, kullanışlılık) ve iş dosyası değerlendirme ölçütlerine göre doğrudur."
  },
  {
    "question": "SENARYO: İşletmeye ilk kez gelen bir stajyer öğrenciyle tanışan usta öğretici, ilk izlenimin ilk 30-35 saniye içinde oluştuğunu bilmektedir. Araştırmalara göre ilk izlenimin oluşmasında gözle alınan mesajların (dış görünüş, beden dili) etkisi yüzde kaçtır?",
    "options": [
      "%10",
      "%30",
      "%60",
      "%90"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"%60\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: İşletme müdürü, yeni başlayan stajyerle tanışırken elini avuç içi yere bakacak şekilde uzatarak tokalaşmaktadır. Beden dili kurallarına göre bu tokalaşma tarzı karşı tarafa hangi mesajı verir?",
    "options": [
      "Eşit statü ve dengeli bir ilişki kurma isteği",
      "Boyun eğme ve çekingenlik",
      "Güçlü ve üstün olduğu izlenimini verme amacı",
      "Samimiyet ve duygusal yakınlaşma beklentisi"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (İletişim, Sayfa 114-137): Doğru cevap \"Güçlü ve üstün olduğu izlenimini verme amacı\". Etkili iletişim süreci ögeleri ve sözsüz iletişim/beden dili ilkelerine göre belirlenmiştir."
  },
  {
    "question": "SENARYO: Atölyede yapılan haftalık değerlendirme toplantısında bir çırak, sandalyenin en ucuna oturmuş ve ayaklarını sandalyenin altına doğru çarpı şeklinde çekmiştir. Usta öğretici öğrencinin bu oturuş biçiminden hangi sonucu çıkarmalıdır?",
    "options": [
      "Öğrencinin ortamda çok rahat ve öz güvenli olduğunu",
      "Öğrencinin huzursuz, endişeli olduğunu ve bir an önce kalkıp gitmek istediğini",
      "Öğrencinin tartışmaya ve meydan okumaya hazır olduğunu",
      "Öğrencinin anlatılan konuya aşırı ilgi duyduğunu"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Mesleki Eğitim, Sayfa 14-30): Doğru cevap \"Öğrencinin huzursuz, endişeli olduğunu ve bir an önce kalkıp gitmek istediğini\". 3308 sayılı Mesleki Eğitim Kanunu ve Önceki Öğrenmelerin Tanınması mevzuatına göre bu hüküm esas alınır."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisine yeni bir torna işlemi öğretmeden önce öğrencinin bu makineyi kullanabilecek kas-iskelet olgunluğuna erişip erişmediğini ve temel ölçüm ön bilgilerine sahip olup olmadığını kontrol etmektedir. Usta öğretici öğrencinin hangi özelliğini değerlendirmektedir?",
    "options": [
      "Olgunlaşma",
      "Hazırbulunuşluk",
      "Kritik dönem",
      "Edimsel koşullanma"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"Hazırbulunuşluk\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: Gıda üretimi yapan bir işletmede stajyerlere kalite ve hijyen eğitimi veren usta öğretici, üretim sürecinde tehlike ortaya çıkmadan önce kritik kontrol noktalarında önlem almayı sağlayan uluslararası sistemi tanıtmaktadır. Bu sistem aşağıdakilerden hangisidir?",
    "options": [
      "JIT (Tam Zamanında Üretim)",
      "HACCP (Kritik Kontrol Noktalarında Tehlike Analizi)",
      "CEN (Avrupa Standardizasyon Komitesi)",
      "TSE Garanti Markası"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (İş Sağlığı ve Güvenliği, Sayfa 44-111): Doğru cevap \"HACCP (Kritik Kontrol Noktalarında Tehlike Analizi)\". 6331 sayılı İSG Kanunu ve iş yeri güvenlik standartları kapsamında doğru yaklaşımdır."
  },
  {
    "question": "SENARYO: Atölyede geliştirdiği yenilikçi bir aparat için Türk Patent ve Marka Kurumuna başvuran bir usta, daha kısa sürede ve daha az masrafla koruma sağlamak amacıyla 'Faydalı Model' belgesi almıştır. Bu belgenin koruma süresi kaç yıldır?",
    "options": [
      "7 yıl",
      "10 yıl",
      "15 yıl",
      "20 yıl"
    ],
    "answer": 1,
    "explanation": "8. Öğrenme Birimi (Kalite ve Verimlilik, Sayfa 200-211): Doğru cevap \"10 yıl\". Kalite yönetim sistemleri ve sınai mülkiyet hakları kapsamında doğru tanımdır."
  },
  {
    "question": "SENARYO: İşletmede beceri eğitimi gören bir öğrencinin yıl sonu değerlendirmesinde, uygulamalı beceri sınavından 80 puan, dönem boyunca hazırladığı iş (ürün) dosyasından ise 90 puan aldığı belirlenmiştir. Sınavın %80, iş dosyasının %20 ağırlığa sahip olduğu bu sistemde öğrencinin yıl sonu beceri puanı kaç olur?",
    "options": [
      "80",
      "82",
      "85",
      "88"
    ],
    "answer": 1,
    "explanation": "2. Öğrenme Birimi (Meslek Etiği ve Ahilik, Sayfa 34-41): Doğru cevap \"82\". Evrensel meslek etiği ilkeleri ve Ahilik teşkilatı kurallarına göre bu ifade doğrudur."
  },
  {
    "question": "SENARYO: 15 personel çalıştıran bir mobilya atölyesi, işletmesinde beceri eğitimi gören çırağına yasal alt sınır üzerinden ücret ödemektedir. 3308 sayılı Kanun'a göre devletin bu işletmeye ödeyeceği katkı payı oranı nedir?",
    "options": [
      "Ödenebilecek en az ücretin üçte biri",
      "Ödenebilecek en az ücretin üçte ikisi",
      "Ödenebilecek en az ücretin tamamı",
      "Ödenebilecek en az ücretin dörtte biri"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Sayfa 17): Yirmiden az personel çalıştıran işletmelere ödenebilecek en az ücretin üçte ikisi, yirmi ve üzerinde personel çalıştıranlara üçte biri devlet katkısı olarak ödenir."
  },
  {
    "question": "SENARYO: İşletmede beceri eğitimi gören bir öğrenci, sağlık sorunu nedeniyle iki gün işe gelememiştir. Öğrencinin aldığı rapor veya yazılı veli beyanını özür gününü takip eden en geç kaç iş günü içinde okul müdürlüğüne teslim etmesi gerekir?",
    "options": [
      "2 iş günü",
      "3 iş günü",
      "5 iş günü",
      "7 iş günü"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Sayfa 23): Öğrenci devamsızlık yaptığı süreye ilişkin özür belgesini özür gününü takip eden en geç 5 iş günü içinde okul/kurum müdürlüğüne teslim etmek zorundadır."
  },
  {
    "question": "SENARYO: Bir oto tamir atölyesinde usta öğretici işten ayrılmış ve işletmede başka usta öğretici kalmamıştır. Bu nedenle feshedilen mesleki eğitim sözleşmesinin, fesih tarihinden itibaren kaç iş günü içinde okul müdürlüğüne yazılı olarak bildirilmesi gerekir?",
    "options": [
      "Aynı gün içinde",
      "2 iş günü içinde",
      "3 iş günü içinde",
      "10 iş günü içinde"
    ],
    "answer": 2,
    "explanation": "1. Öğrenme Birimi (Sayfa 24): Sözleşmenin feshi durumu, fesih tarihinden itibaren en geç 3 iş günü içinde ilgili okul/kurum müdürlüğüne yazılı olarak bildirilir."
  },
  {
    "question": "SENARYO: Turizm sektöründe faaliyet gösteren bir otelde beceri eğitimi gören lise öğrencilerinin, İl İstihdam ve Mesleki Eğitim Kurulu kararıyla gece çalışması yapmalarına izin verilmiştir. Bu eğitim günde en fazla kaç saat ve en geç saat kaça kadar yapılabilir?",
    "options": [
      "Günde 6 saati ve saat 21.00'i geçmemek üzere",
      "Günde 8 saati ve saat 22.00'yi geçmemek üzere",
      "Günde 8 saati ve saat 24.00'ü geçmemek üzere",
      "Günde 7,5 saati ve saat 20.00'yi geçmemek üzere"
    ],
    "answer": 1,
    "explanation": "1. Öğrenme Birimi (Sayfa 17): Sanayi dışındaki sektörlerde kurul kararıyla günde 8 saati ve saat 22.00'yi geçmemek üzere gece mesleki eğitim yapılabilir."
  },
  {
    "question": "SENARYO: Metal atölyesinde çalışan bir çırak, taşlama makinesinden sıçrayan kıvılcım sonucu elinden yaralanmıştır. İşverenin bu iş kazasını yetkili mercilere bildirme yükümlülüğü aşağıdakilerden hangisidir?",
    "options": [
      "Kolluk kuvvetlerine derhâl, SGK'ya en geç 3 iş günü içinde bildirmelidir",
      "Kolluk kuvvetlerine 3 iş günü içinde, SGK'ya ay sonunda bildirmelidir",
      "Yalnızca okul müdürlüğüne 2 iş günü içinde bildirmesi yeterlidir",
      "Sadece SGK'ya 10 iş günü içinde e-bildirge ile bildirmelidir"
    ],
    "answer": 0,
    "explanation": "3. Öğrenme Birimi (Sayfa 55): İş kazası meydana geldiğinde işveren o yer yetkili kolluk kuvvetlerine derhâl, Sosyal Güvenlik Kurumuna ise en geç kazadan sonraki 3 iş günü içinde bildirimde bulunur."
  },
  {
    "question": "SENARYO: Elektrik-elektronik atölyesinde öğrencilere güvenli çalışma kurallarını anlatan usta öğretici, insan vücudu için tehlikeli gerilim sınırlarını vurgulamaktadır. Alternatif akım (AC) ve doğru akımda (DC) tehlike sınırı kaç Volttan itibaren başlar?",
    "options": [
      "Alternatif akım 50 Volt, doğru akım 110 Volt",
      "Alternatif akım 15 Volt, doğru akım 20 Volt",
      "Alternatif akım 24 Volt, doğru akım 48 Volt",
      "Alternatif akım 12 Volt, doğru akım 12 Volt"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (Sayfa 85): Elektrikle çalışmalarda alternatif akım (AC) 15 Volt, doğru akım (DC) ise 20 Volt'tan itibaren insan sağlığı için tehlikelidir."
  },
  {
    "question": "SENARYO: Depo ve lojistik alanında staj yapan bir öğrenci, forklift ile eğimli bir rampadan paletli yük indirmektedir. İş sağlığı ve güvenliği kurallarına göre operatör rampada nasıl hareket etmelidir?",
    "options": [
      "Yükü çıkarırken geri, indirirken ileri doğru hareket etmelidir",
      "Yükü çıkarırken ileri, indirirken geriye doğru hareket etmelidir",
      "Her iki durumda da çatalları en üst seviyeye kaldırarak ileri gitmelidir",
      "Rampada yük indirirken aracın motorunu durdurup boşa almalıdır"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (Sayfa 89): Forklift ile rampadan yük çıkarırken ileri doğru, yük indirirken ise yükün devrilmesini önlemek için geriye doğru hareket edilmelidir."
  },
  {
    "question": "SENARYO: Makine teknolojisi atölyesinde büyük bir pres tezgâhının çeşitli kısımlarında aynı anda üç çalışan görev yapmaktadır. İş sağlığı ve güvenliği kurallarına göre bu büyük tezgâhta çalıştırma ve durdurma düğmeleri nasıl düzenlenmelidir?",
    "options": [
      "Tek bir çalıştırma ve tek bir durdurma düğmesi yeterlidir",
      "Her çalışan için bir çalıştırma ve bir durdurma düğmesi bulunmalı; bütün çalıştırma düğmelerine basılmadan makine çalışmamalıdır",
      "Yalnızca usta öğreticinin kontrolünde tek bir ayak pedalı bulunmalıdır",
      "Çalıştırma düğmeleri kırmızı, durdurma düğmeleri yeşil renkte olmalıdır"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (Sayfa 87): Birden fazla kişinin çalıştığı büyük tezgâhlarda her çalışan için çalıştırma/durdurma düğmesi olmalı ve tüm çalıştırma düğmelerine basılmadan makine çalışmamalıdır."
  },
  {
    "question": "SENARYO: Tesviye atölyesinde çalışan bir stajyer, kullandığı torna tezgâhının hareketli kısım koruyucusunda bir kırık fark etmiştir. Bu durumda öğrencinin ve usta öğreticinin yapması gereken ilk işlem nedir?",
    "options": [
      "Vardiya bitimine kadar dikkatli bir şekilde çalışmaya devam etmek",
      "Tezgâhı derhâl durdurmak, ilgililere haber vermek ve üzerine uyarı levhası asmak",
      "Kırık koruyucuyu tamamen sökerek çalışmaya devam etmek",
      "Sadece koruyucu gözlük takarak işlemi hızla tamamlamak"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (Sayfa 86): Makine veya tezgâhta arıza ya da koruyucu kusuru görüldüğünde tezgâh derhâl durdurulmalı, ilgililere haber verilmeli ve üzerine uyarı levhası asılmalıdır."
  },
  {
    "question": "SENARYO: Metal işleri atölyesinde ayak pedalı ile çalışan bir giyotin makasta çalışma yapılmaktadır. İstem dışı basmaları önlemek amacıyla pedal üzerinde nasıl bir güvenlik önlemi bulunmalıdır?",
    "options": [
      "Pedal tamamen açıkta bırakılmalı ve iki ayakla basılmalıdır",
      "Pedalın üzerinde ancak bir ayağın girebileceği bir koruyucu olmalı ve bu koruyucu çıkarılmamalıdır",
      "Pedal tezgâhtan en az 2 metre uzağa yerleştirilmelidir",
      "Pedalın üzerine kaymayı önlemek için yağ sürülmelidir"
    ],
    "answer": 1,
    "explanation": "3. Öğrenme Birimi (Sayfa 86): Ayak pedalı ile çalışan tezgâhlarda pedalların üzerinde ancak bir ayağın girebileceği bir koruyucu bulunmalı ve kesinlikle çıkarılmamalıdır."
  },
  {
    "question": "SENARYO: İşletmeye ilk kez gelen bir stajyer öğrenciyle tanışan usta öğretici, ilk izlenimin ilk 30-35 saniye içinde oluştuğunu bilmektedir. Araştırmalara göre ilk izlenimin oluşmasında gözle alınan mesajların (dış görünüş, beden dili) etkisi yüzde kaçtır?",
    "options": [
      "%10",
      "%30",
      "%60",
      "%90"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (Sayfa 129): İlk izlenimin oluşmasında gözle alınan mesajların etkisi %60, kulakla alınan ses tonunun etkisi %30, konuşma içeriğinin etkisi ise %10'dur."
  },
  {
    "question": "SENARYO: İşletme müdürü, yeni başlayan stajyerle tanışırken elini avuç içi yere bakacak şekilde uzatarak tokalaşmaktadır. Beden dili kurallarına göre bu tokalaşma tarzı karşı tarafa hangi mesajı verir?",
    "options": [
      "Eşit statü ve dengeli bir ilişki kurma isteği",
      "Boyun eğme ve çekingenlik",
      "Güçlü ve üstün olduğu izlenimini verme amacı",
      "Samimiyet ve duygusal yakınlaşma beklentisi"
    ],
    "answer": 2,
    "explanation": "4. Öğrenme Birimi (Sayfa 132): Avuç içleri yere bakar şekilde yapılan el sıkma tarzı, kişinin karşısındakine güçlü ve üstün olduğu izlenimini verme amacını taşır."
  },
  {
    "question": "SENARYO: Atölyede yapılan haftalık değerlendirme toplantısında bir çırak, sandalyenin en ucuna oturmuş ve ayaklarını sandalyenin altına doğru çarpı şeklinde çekmiştir. Usta öğretici öğrencinin bu oturuş biçiminden hangi sonucu çıkarmalıdır?",
    "options": [
      "Öğrencinin ortamda çok rahat ve öz güvenli olduğunu",
      "Öğrencinin huzursuz, endişeli olduğunu ve bir an önce kalkıp gitmek istediğini",
      "Öğrencinin tartışmaya ve meydan okumaya hazır olduğunu",
      "Öğrencinin anlatılan konuya aşırı ilgi duyduğunu"
    ],
    "answer": 1,
    "explanation": "4. Öğrenme Birimi (Sayfa 135): Sandalyenin ucuna oturmak ve ayakları çarpı konumunda sandalyenin altına çekmek huzursuzluk, endişe ve kalkıp gitme isteğinin belirtisidir."
  },
  {
    "question": "SENARYO: Bir usta öğretici, öğrencisine yeni bir torna işlemi öğretmeden önce öğrencinin bu makineyi kullanabilecek kas-iskelet olgunluğuna erişip erişmediğini ve temel ölçüm ön bilgilerine sahip olup olmadığını kontrol etmektedir. Usta öğretici öğrencinin hangi özelliğini değerlendirmektedir?",
    "options": [
      "Olgunlaşma",
      "Hazırbulunuşluk",
      "Kritik dönem",
      "Edimsel koşullanma"
    ],
    "answer": 1,
    "explanation": "5. Öğrenme Birimi (Sayfa 145): Hazırbulunuşluk; biyolojik olgunlaşmanın tamamlanmasının yanında bireyin ön öğrenme geçmişine ve gerekli bilgi birikimine sahip olmasını kapsar."
  },
  {
    "question": "SENARYO: Gıda üretimi yapan bir işletmede stajyerlere kalite ve hijyen eğitimi veren usta öğretici, üretim sürecinde tehlike ortaya çıkmadan önce kritik kontrol noktalarında önlem almayı sağlayan uluslararası sistemi tanıtmaktadır. Bu sistem aşağıdakilerden hangisidir?",
    "options": [
      "JIT (Tam Zamanında Üretim)",
      "HACCP (Kritik Kontrol Noktalarında Tehlike Analizi)",
      "CEN (Avrupa Standardizasyon Komitesi)",
      "TSE Garanti Markası"
    ],
    "answer": 1,
    "explanation": "8. Öğrenme Birimi (Sayfa 206): HACCP (Kritik Kontrol Noktalarında Tehlike Analizi), gıda sektöründe tehlike ortaya çıkmadan önlem almayı sağlayan uluslararası kontrol sistemidir."
  },
  {
    "question": "SENARYO: Atölyede geliştirdiği yenilikçi bir aparat için Türk Patent ve Marka Kurumuna başvuran bir usta, daha kısa sürede ve daha az masrafla koruma sağlamak amacıyla 'Faydalı Model' belgesi almıştır. Bu belgenin koruma süresi kaç yıldır?",
    "options": [
      "7 yıl",
      "10 yıl",
      "15 yıl",
      "20 yıl"
    ],
    "answer": 1,
    "explanation": "8. Öğrenme Birimi (Sayfa 209): Koruma süreleri incelemesiz patent için 7 yıl, faydalı model için 10 yıl, incelemeli patent için ise 20 yıldır."
  },
  {
    "question": "SENARYO: İşletmede beceri eğitimi gören bir öğrencinin yıl sonu değerlendirmesinde, uygulamalı beceri sınavından 80 puan, dönem boyunca hazırladığı iş (ürün) dosyasından ise 90 puan aldığı belirlenmiştir. Sınavın %80, iş dosyasının %20 ağırlığa sahip olduğu bu sistemde öğrencinin yıl sonu beceri puanı kaç olur?",
    "options": [
      "80",
      "82",
      "85",
      "88"
    ],
    "answer": 1,
    "explanation": "9. Öğrenme Birimi (Sayfa 221): Beceri sınavı puanının %80'i (80 x 0,80 = 64) ile iş dosyası puanının %20'si (90 x 0,20 = 18) toplanarak 82 puan bulunur."
  }
];

if (typeof module !== "undefined") module.exports = { QUESTIONS };
