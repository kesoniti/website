import type { Content } from './en';

export const tr: Content = {
  locale: 'tr',
  langLabel: 'Türkçe',

  nav: {
    home: 'Ana Sayfa',
    about: 'Hakkımızda',
    services: 'Hizmetler',
    methodology: 'Metodoloji',
    industries: 'Sektörler',
    contact: 'İletişim',
    cta: 'Görüşme başlatın',
  },

  footer: {
    tagline:
      'S/4HANA üzerinde çalışan üreticiler için üretim planlama, detaylı çizelgeleme, kalite ve bakım alanlarında butik SAP danışmanlığı.',
    colNavigate: 'Sayfalar',
    colModules: 'Modül kapsamı',
    colContact: 'İletişim',
    address: '30 N Gould St # 11590, Sheridan, WY 82801, ABD',
    email: 'info@kesoniti.com',
    linkedin: 'LinkedIn',
    linkedinUrl: 'https://www.linkedin.com/company/kesoniti-llc',
    rights: 'Kesoniti LLC. Tüm hakları saklıdır.',
  },

  home: {
    metaTitle: 'Kesoniti — Üretim için SAP PP / PP-DS Danışmanlığı',
    metaDescription:
      'S/4HANA kullanan üreticiler için Üretim Planlama (PP), Detaylı Çizelgeleme (PP/DS), Kalite Yönetimi (QM) ve Bakım (PM) alanlarında uzmanlaşmış butik SAP danışmanlık firması.',
    hero: {
      eyebrow: 'SAP PP · PP/DS · QM · PM',
      heading: 'SAP’yi, fabrikanızın gerçekte çalıştığı gibi planlar hale getiriyoruz.',
      sub: 'Kesoniti; üretim planlama ve detaylı çizelgeleme odaklı butik bir SAP danışmanlık firmasıdır. Üretim şirketlerinin S/4HANA dönüşümünde planlama çekirdeğini — talep sinyalinden üretim sahasına kadar — tasarlamalarına, devreye almalarına ve stabilize etmelerine yardımcı oluyoruz.',
      ctaPrimary: 'Projenizi konuşalım',
      ctaSecondary: 'Hizmetlerimizi inceleyin',
      diagramAlt:
        'Üretim planlama akışının şematik gösterimi: talep, üretim planlama ve detaylı çizelgelemeyi besler; bu da saha yürütmesini yönlendirir. Kalite ve bakım sinyalleri planlamaya geri beslenir.',
      diagramLabels: {
        demand: 'Talep',
        planning: 'PP / PP-DS',
        execution: 'Üretim sahası',
        quality: 'QM',
        maintenance: 'PM',
        feedback: 'Geri besleme döngüsü',
      },
    },
    tiers: {
      eyebrow: 'Hizmet modeli',
      heading: 'Üç katman, tek planlama çekirdeği',
      intro:
        'Her proje, derin bir üretim planlama çekirdeği etrafında kurulur; değer ürettiği yerde genişletilir ve tekrarlanabilir bir yöntemle teslim edilir.',
      items: [
        {
          num: '01',
          name: 'Çekirdek uzmanlık — SAP PP & PP/DS',
          desc: 'Ana veri mimarisi, MRP stratejisi, sezgisel (heuristic) ve optimizer konfigürasyonu, planlama tahtası tasarımı, kapasite dengeleme ve çizelgeleme mantığı. Yaptığımız her işin ağırlık merkezi burasıdır.',
        },
        {
          num: '02',
          name: 'Genişleme hizmetleri — QM, PM & IBP',
          desc: 'Üretim akışına entegre kalite kontrol, kapasiteyle hizalanmış bakım planlama ve taktik planlamadan operasyonel planlamaya geçiş için IBP bağlantısı. Çekirdeğin disiplinini devralan uzantılar.',
        },
        {
          num: '03',
          name: 'Teslim metodolojisi',
          desc: 'Değerlendirmeden hypercare’e uzanan, yalın ekipler ve hızlı karar döngüleri için kurgulanmış yapısal bir yol — çalışan planlama mantığını projenin sonunda değil, en başından planlamacılarınızın önüne koymak üzere tasarlandı.',
        },
      ],
    },
    credibility: {
      eyebrow: 'Bir bakışta',
      items: [
        { value: '12+', label: 'Yıl üretim planlama ve endüstri mühendisliği deneyimi' },
        { value: '20+', label: 'Destek verilen üretim kuruluşu' },
        { value: '6', label: 'Tesis bazında devreye alma deneyimi olan ülke' },
        { value: '4+1', label: 'Kapsanan modüller: PP, PP/DS, QM, PM + IBP' },
      ],
    },
    modulesStrip: {
      heading: 'Sisteminizde nerede çalışıyoruz',
      items: [
        { code: 'PP', name: 'Üretim Planlama', blurb: 'MRP, ana veri, sipariş yönetimi, geri bildirim (backflush) ve teyit mantığı.' },
        { code: 'PP/DS', name: 'Detaylı Çizelgeleme', blurb: 'Heuristikler, optimizer, planlama tahtası, sonlu kapasite çizelgeleme.' },
        { code: 'QM', name: 'Kalite Yönetimi', blurb: 'Proses içi kontrol, kalite kapıları, üretim akışında kullanım kararları.' },
        { code: 'PM', name: 'Bakım Yönetimi', blurb: 'Üretim kapasitesini dikkate alan — ve besleyen — bakım planlaması.' },
      ],
    },
    cta: {
      heading: 'Planlama problemleri spesifiktir. Biz de öyleyiz.',
      sub: 'Planlama sürecinizin nerede tıkandığını anlatın — ana veri, çizelgeleme mantığı, saha geri beslemesi — size dürüstçe yardımcı olup olamayacağımızı ve nasıl yardımcı olabileceğimizi söyleyelim.',
      button: 'Kesoniti ile iletişime geçin',
    },
  },

  about: {
    metaTitle: 'Hakkımızda — Kesoniti',
    metaDescription:
      'Kesoniti; üretim şirketleri için üretim planlama ve detaylı çizelgeleme alanında uzmanlaşmış, kıdemli danışman liderliğinde butik bir SAP danışmanlık firmasıdır.',
    hero: {
      eyebrow: 'Kesoniti Hakkında',
      heading: 'Bilinçli olarak küçük, uzman bir firma.',
      sub: 'Kesoniti, üretim planlamanın SAP programlarında genelci kapasitenin yetersiz kaldığı alan olması nedeniyle var. Genişlik yerine derinliği seçtik — ve tüm firmayı bunun etrafında yapılandırdık.',
    },
    story: {
      heading: 'Neden varız',
      paragraphs: [
        'Çoğu S/4HANA programı üretim planlamayı diğerleri arasında sıradan bir iş kolu olarak ele alır. Sonuç tanıdıktır: kimsenin güvenmediği MRP koşuları, kimsenin kullanmadığı planlama tahtaları ve sessizce Excel’e geri dönen planlamacılar. Bir üreticinin SAP kullanmasının asıl nedeni olan planlama çekirdeği, sistemin en zayıf parçası haline gelir.',
        'Kesoniti bunun karşı ağırlığı olmak için kuruldu. Programlara kadro sağlamıyoruz; planlama problemleri çözüyoruz. Her proje, kariyeri tamamen SAP PP ve PP/DS üzerine kurulu kıdemli bir danışman tarafından yürütülür — işi dürüst tutan endüstri mühendisliği temeliyle: sistem modeli fabrikanın fiziğine uymak zorundadır, tersi değil.',
      ],
    },
    mission: {
      heading: 'Misyon',
      text: 'Üretim şirketlerine gerçekten güvendikleri bir planlama çekirdeği kazandırmak — gerçek kısıtları yansıtan, planlamacıların arkasında durduğu çizelgeler üreten ve canlıya geçişten sonra aşınmak yerine ölçülebilir şekilde iyileşen bir SAP planlama mantığı.',
    },
    model: {
      eyebrow: 'Çalışma modeli',
      heading: 'Nasıl çalışıyoruz',
      items: [
        {
          name: 'Kıdemli danışman liderliğinde',
          desc: 'Projenizin kapsamını belirleyen kişi, sisteminizi konfigüre eden kişidir. Kademeli ekip piramidi yok, junior kadroya devir yok.',
        },
        {
          name: 'Önce uzaktan, gerektiğinde sahada',
          desc: 'Tasarım ve konfigürasyon disiplinli bir ritimle uzaktan yürütülür. Saha turları, entegrasyon testleri ve canlıya geçiş desteği işin olduğu yerde yapılır.',
        },
        {
          name: 'Tasarım gereği yalın',
          desc: 'Küçük ekipler, kısa karar yolları ve biz ayrıldıktan sonra ekibinizin gerçekten sürdürebileceği dokümantasyon. Başarıyı, bize daha sonra ne kadar az ihtiyaç duyduğunuzla ölçeriz.',
        },
      ],
    },
    leadership: {
      eyebrow: 'Liderlik',
      heading: 'Kurucu & Baş Danışman',
      name: 'Eyup Aydemir',
      role: 'Kurucu & Baş Danışman, Kesoniti LLC',
      bio: [
        'Eyup Aydemir; üretim planlamada on iki yılı aşkın deneyime sahip bir endüstri mühendisi ve SAP Üretim Planlama uzmanıdır. Dumlupınar Üniversitesi Endüstri Mühendisliği lisans derecesine sahiptir ve kariyerine bir danışmanlık ofisinde değil üretim sahasında başlamıştır: önce tip değişim kayıplarını azaltmak için SMED, Kaizen ve Heijunka uygulayan bir metot mühendisi, ardından yüksek basınçlı alüminyum döküm ortamında MRP ve kapasite planlama yürüten bir planlama mühendisi olarak.',
        'Üç buçuk yıl boyunca bir Tier-1 otomotiv tedarikçisinde planlama uzmanı ve SAP PP anahtar kullanıcısı olarak görev yaptı; çok tesisli bir grupta JIT planlamadan sorumlu oldu ve uluslararası bir ECC devreye alma projesinde iş tarafının lideri olarak çalıştı. Önce planlamacı, sonra danışman olmak — Kesoniti’nin çalışma biçiminin temeli budur: sistem modeli fabrikanın fiziğine uymak zorundadır, çünkü uymadığında planla birlikte yaşamak zorunda kalan kişi kendisi olmuştur.',
        '2020’den itibaren tam zamanlı SAP danışmanlığına geçti; danışmanlıktan kıdemli danışmanlığa, oradan PP, PP/DS, QM ve PM ekip liderliğine yükseldi. Altı ülkede çok uluslu S/4HANA ve ECC programları yönetti; kısıt tabanlı sonlu kapasite çizelgeleme, PP/DS heuristikleri ve pegging, varyant konfigürasyonu ve konfigüre edilebilir malzemelerle MRP, Kanban tasarımı ve CIF, IDoc ile RFC üzerinden ERP–MES entegrasyonu alanlarında derinleşti. Kesoniti LLC’yi, bu uzmanlığı arada bir teslim piramidi olmadan doğrudan ABD’li üreticilere sunmak için kurdu.',
      ],
      credentialsLabel: 'Sertifikalar & tanınırlık',
      credentials: [
        'SAP Certified Associate — SAP S/4HANA Cloud Private Edition, Production Planning and Manufacturing (Kasım 2024)',
        'Discovering SAP Digital Manufacturing — Record of Achievement (SAP, 2025)',
        'Endüstri Mühendisliği Lisans Derecesi, Dumlupınar Üniversitesi',
        'IEEE Senior Member — değerlendirme sonucu, alanında kanıtlanmış başarıya sahip deneyimli profesyonellere verilen üyelik derecesi',
        'Raptors Fellowship — Fellow Member',
        'PP/DS çizelgeleme optimizasyonu, S/4HANA’da Kanban mantığı ve ERP–MES entegrasyon çerçeveleri üzerine üç hakemli konferans bildirisi yazarı',
        'Akademik dergiler ve uluslararası endüstri mühendisliği konferanslarında hakem',
      ],
    },
  },

  services: {
    metaTitle: 'Hizmetler — SAP PP, PP/DS, QM, PM Danışmanlığı | Kesoniti',
    metaDescription:
      'SAP Üretim Planlama, PP/DS Detaylı Çizelgeleme, Kalite Yönetimi ve Bakım danışmanlığında proje kapsamı, çözülen problemler ve hedeflenen sonuçlar.',
    hero: {
      eyebrow: 'Hizmetler',
      heading: 'Derin modül uzmanlığı, bütün üretim akışı perspektifiyle.',
      sub: 'Modül modül çalışırız ama asla izole değil: planlama kalitesi arayüzlerde belirlenir — talep ile MRP arasında, çizelge ile saha arasında, üretim ile kalite ve bakım arasında.',
    },
    scopeLabel: 'Tipik proje kapsamı',
    problemsLabel: 'Çözdüğümüz problemler',
    outcomesLabel: 'İyi sonuç neye benzer',
    modules: [
      {
        id: 'pp',
        code: 'PP',
        name: 'SAP Üretim Planlama',
        tagline: 'Omurga: gerçekte nasıl üretiyorsanız onu yansıtan ana veri, MRP ve sipariş yürütme.',
        scope: [
          'Üretim ana veri mimarisi: malzeme ana verileri, ürün ağaçları, rotalar, iş merkezleri, üretim versiyonları',
          'MRP strateji tasarımı: planlama stratejileri, parti büyüklüğü, emniyet mekanizmaları, MRP alanları',
          'Sipariş yönetimi: üretim/proses siparişleri, teyit ve backflush tasarımı, mal hareketi mantığı',
          'Planlama süreçlerinin S/4HANA’ya taşınması ve sadeleştirme kalemlerinin PP üzerindeki etkileri',
        ],
        problems: [
          'Parametreleri gerçekle hiç örtüşmediği için planlamacıların her gün elle düzelttiği MRP sonuçları',
          'Her planlama çıktısını güvenilmez kılan ana veri tutarsızlıkları',
          'Stok ve yarı mamul görünürlüğünü bozan teyit ve backflush tasarımları',
          'Yeniden tasarlanmadan S/4HANA’ya taşınan eski ECC planlama mantığı',
        ],
        outcomes: [
          'Planlamacıların sorgulamak yerine uyguladığı bir MRP koşusu',
          'Sahipliği net, temiz kalmasını sağlayan kuralları tanımlı ana veri',
          'Yönetime gerçek yarı mamul ve üretim resmi veren sipariş yürütme',
        ],
      },
      {
        id: 'ppds',
        code: 'PP/DS',
        name: 'Üretim Planlama & Detaylı Çizelgeleme',
        tagline: 'En derin uzmanlığımız: planlamacıların gölge Excel dosyalarını bırakacak kadar güvendiği sonlu çizelgeleme.',
        scope: [
          'S/4HANA’da PP/DS aktivasyonu ve entegrasyon modeli (gömülü PP/DS)',
          'Heuristik seçimi, sıralaması ve ince ayarı; gerçekten karşılığı olan yerlerde optimizer kurulumu',
          'Planlama tahtası tasarımı: düzenler, stratejiler, uyarılar ve istisna odaklı çalışma',
          'Sonlu kapasite çizelgeleme, setup matrisi tasarımı, blok planlama ve kampanya planlama',
          'Çizelgelerin gerçekle temasında ayakta kalması için pegging, sabitleme ve stabilite mantığı',
        ],
        problems: [
          'Planlama tahtası hiç kullanılabilir hale getirilmediği için Excel’de yapılan çizelgeleme',
          'Üretim sistemine göre mühendislik yapılmadan, kurulum varsayılanlarıyla bırakılmış heuristikler',
          'Bütçeyi tüketip kabul gören çizelge üretemeyen optimizer projeleri',
          'Standart MRP’nin göremediği sıra bağımlı setup’lar ve kampanya kısıtları',
        ],
        outcomes: [
          'Sistemde üretilen ve sahada gerçekten uygulanan sonlu bir çizelge',
          'Her gün planı yeniden kurmak yerine uyarılar üzerinden istisna ile çalışan planlamacılar',
          'Kişilerin hafızasında değil modelde yaşayan setup ve tip değişim mantığı',
        ],
      },
      {
        id: 'qm',
        code: 'QM',
        name: 'SAP Kalite Yönetimi',
        tagline: 'Üretim akışına gömülü kalite — yanında yürüyen paralel bir bürokrasi değil.',
        scope: [
          'Üretimle entegre kontrol planlama: proses içi, mal girişi ve son kontrol',
          'Kalite bilgi kayıtları, kontrol planları, kataloglar ve kullanım kararı tasarımı',
          'Sipariş akışında kalite kapıları: stok kayıtları, bloke stok yönetimi, parti serbest bırakma',
          'QM’in PP ana verisi ve parti yönetimiyle entegrasyonu',
        ],
        problems: [
          'Malzeme akışını korumak yerine birikip tıkayan kontrol partileri',
          'Kağıtta veya paralel araçlarda tutulan, planlamanın göremediği kalite verisi',
          'Üretimin gerisinde kalan ve kullanılabilir stoğu bozan kullanım kararları',
        ],
        outcomes: [
          'Üretime karşı değil, üretim taktıyla akan kontrol adımları',
          'Planlama kararlarının verildiği yerde görünür kalite sonuçları',
          'Elle geçici çözümler gerektirmeyen, savunulabilir ve denetlenebilir bir serbest bırakma süreci',
        ],
      },
      {
        id: 'pm',
        code: 'PM',
        name: 'SAP Bakım Yönetimi',
        tagline: 'Üretim kapasitesiyle çarpışmak yerine müzakere eden bakım planlaması.',
        scope: [
          'Teknik nesne yapıları: fonksiyon yerleri, ekipmanlar, görev listeleri',
          'Önleyici ve planlı bakım stratejisi, bakım planları ve çizelgeleme',
          'İş emri yönetimi, bildirim akışları ve kapasite planlamayla entegrasyon',
          'Bakım pencerelerinin üretim çizelgesiyle koordinasyonu (PM–PP/DS etkileşimi)',
        ],
        problems: [
          'Üretim planından habersiz çizelgelenen — veya arızaya kadar ertelenen — bakım',
          'Planlama ekibini her seferinde şaşırtan ekipman duruşları',
          'İçinden bir şey öğrenilemeyecek kadar yapısız bildirim ve iş emri verisi',
        ],
        outcomes: [
          'Üretim çizelgesinde gerçek kapasite kısıtı olarak görünen bakım pencereleri',
          'Tahmine değil ekipman geçmişine dayanan bir önleyici bakım programı',
          'Önceden planlanmış, sınırlandırılmış ve görünür duruş süreleri',
        ],
      },
    ],
    expansion: {
      eyebrow: 'Bitişik yetkinlik',
      heading: 'SAP IBP bağlantısı',
      text: 'SAP Integrated Business Planning kullanan veya değerlendiren müşteriler için taktik planlamadan operasyonel planlamaya geçişi tasarlıyoruz: IBP tedarik planlarının yürütülebilir PP/PP-DS planlamasına nasıl dönüşeceği ve saha gerçeğinin nasıl geri akacağı. IBP çalışmalarını yalnızca bu planlama arayüzü etrafında kapsamlandırıyoruz — çekirdeği genişletir, onun yerine geçmez.',
    },
    note: 'Yukarıdaki proje tanımları bilinçli olarak genel tutulmuştur. Spesifik referanslar, vaka çalışmaları ve sayısal sonuçlar müşteri gizliliği çerçevesinde görüşmelerde paylaşılır.',
  },

  methodology: {
    metaTitle: 'Metodoloji — Kesoniti Nasıl Teslim Eder',
    metaDescription:
      'SAP üretim planlama projeleri için beş fazlı teslim yaklaşımı: değerlendirme, tasarım, gerçekleştirme, devreye alma ve hypercare — yalın, kıdemli ekipler için kurgulandı.',
    hero: {
      eyebrow: 'Metodoloji',
      heading: 'Güvenilecek kadar yapısal. Hızlı hareket edecek kadar yalın.',
      sub: 'Her proje aynı beş fazlı omurgayı izler. Değişen şey derinlik ve süredir — bunlar proje ortasında keşfedilmez, değerlendirme aşamasında sizinle açıkça kararlaştırılır.',
    },
    phasesHeading: 'Beş faz',
    phases: [
      {
        num: '01',
        name: 'Değerlendirme',
        desc: 'Planlama gerçekliğinizi haritalarız: ana veri kalitesi, mevcut MRP davranışı, çizelgeleme pratiği (gayriresmî Excel’ler dahil) ve sahanızı gerçekte yöneten kısıtlar. Çıktı: bir bulgular raporu ile kapsamı ve sırası belirlenmiş bir öneri — yapmamanızı tavsiye ettiklerimiz dahil.',
      },
      {
        num: '02',
        name: 'Tasarım',
        desc: 'Planlama modeli kararları açıkça verilir ve yazıya dökülür: stratejiler, heuristikler, ana veri kuralları, entegrasyon noktaları, istisna yönetimi. Tasarım çalıştayları planlamacılarınız odadayken yapılır — başarıyı belirleyecek güven onların güvenidir.',
      },
      {
        num: '03',
        name: 'Gerçekleştirme',
        desc: 'Kısa döngüler halinde konfigürasyon ve geliştirme; her döngü, planlamacılarınızın sistemi kendi verinizle denemesiyle biter. Planlama mantığı, herhangi bir geçiş konuşmasından çok önce gerçek siparişler ve gerçek kısıtlarla doğrulanır.',
      },
      {
        num: '04',
        name: 'Devreye alma',
        desc: 'Geçiş planlaması, planlamayla ilgili nesneler için veri taşıma doğrulaması, provalar ve karar yetkisi tanımlı canlıya geçiş desteği — sorunlar yönlendirme komitesi toplantılarında değil, saatler içinde çözülsün diye.',
      },
      {
        num: '05',
        name: 'Hypercare & devir',
        desc: 'Ölçülebilir çıkış kriterleriyle stabilizasyon, anahtar kullanıcılarınıza yapılandırılmış bilgi aktarımı ve ekibinizin sürdürebileceği dokümantasyon. Hypercare’in bitişini en başında tanımlarız — sistem ve ekibiniz kendi ayakları üzerinde durduğunda ayrılırız.',
      },
    ],
    diffs: {
      eyebrow: 'Bizi farklı kılan',
      heading: 'Her projeyi üzerine kurduğumuz üç ilke',
      items: [
        {
          name: 'Heuristikler ayar değil, mühendisliktir',
          desc: 'PP/DS heuristikleri ve optimizer profilleri mühendislik ürünü olarak ele alınır: üretim sisteminizin gerçek davranışına göre seçilir, sıralanır ve test kanıtlarıyla ince ayar yapılır — varsayılanlarla aktive edilip sonucu umulmaz.',
        },
        {
          name: 'Erken aşamada çalışan yazılım',
          desc: 'Hızlı devreye alma duruşu: gerçekleştirmenin ilk döngülerinde kendi verinizde çalışan bir planlama dilimi. Gerçekle erken temas, bir SAP programının satın alabileceği en ucuz risk yönetimidir.',
        },
        {
          name: 'Sahadan ERP’ye bütünlük',
          desc: 'Bir plan ancak onu düzelten geri besleme kadar iyidir. Döngünün tamamını tasarlarız — teyitler, kalite sonuçları, bakım olayları — böylece çizelge sahayı yansıtır, saha da çizelgeye güvenebilir.',
        },
      ],
    },
  },

  industries: {
    metaTitle: 'Sektörler — Kesoniti’nin Hizmet Verdiği Üretim Sektörleri',
    metaDescription:
      'Otomotiv, hızlı tüketim, enerji ve yenilenebilir enerji, tekstil ve ambalaj üreticileri için SAP üretim planlama danışmanlığı.',
    hero: {
      eyebrow: 'Sektörler',
      heading: 'Farklı fizik, aynı disiplin.',
      sub: 'Her üretim sisteminin kendi kısıtları vardır — sıra bağımlı setup’lar, raf ömrü, kampanya mantığı, mevsimsel talep. Her birine aynı planlama disiplinini, sektörün fiziğine göre şekillendirerek getiriyoruz.',
    },
    sectors: [
      {
        name: 'Otomotiv & Tier-1 tedarikçileri',
        desc: 'Küresel OEM’lere yönelik zorlu just-in-time ve just-in-sequence çağrı mantığıyla takt bazlı, sıralama odaklı üretim. Burada planlama; stabil çizelgeler, doğru kapasite modelleri ve plan dondurmaları arasındaki disiplinli değişiklik yönetimiyle ayakta kalır.',
        tags: ['Sıralama', 'JIT / JIS call-off', 'Kapasite dengeleme'],
      },
      {
        name: 'Gıda, içecek & hızlı tüketim',
        desc: 'Raf ömrü, parti mantığı ve tip değişim matrislerinin belirleyici olduğu yüksek hacimli, kısa çevrimli üretim. Çok ülkeli şablon devreye almaları yaygındır; asıl iş, küresel süreç şablonunu yerel tesisin fiziksel olarak yapabildikleriyle bağdaştırmaktır.',
        tags: ['Raf ömrü & partiler', 'Kampanya planlama', 'Küresel şablon roll-out'],
      },
      {
        name: 'Tekstil & hazır giyim',
        desc: 'Teknik ve nonwoven tekstilden moda ve çorap üretimine kadar; derin çok kademeli ürün ağaçları, varyant zengini ana veri ve güçlü mevsimsellik. Zorluk, varyant mantığını yönetilebilir tutarken parti büyüklüğü davranışı çok farklı kademeler arasında çizelgeleme yapmaktır.',
        tags: ['Varyant yönetimi', 'Çok kademeli planlama', 'Mevsimsellik'],
      },
      {
        name: 'Enerji & yenilenebilir enerji',
        desc: 'Fotovoltaik ve enerji sistemleri üretiminin yanı sıra, uzun tedarik süreleri ve açık siparişlere akan mühendislik değişiklikleriyle proje etkisindeki üretim. Planlama, proje kilometre taşlarını tesisler arası kapasiteyle bağdaştırmak zorundadır.',
        tags: ['Çok tesisli birleştirme', 'Mühendislik değişikliği', 'Kanban ikmali'],
      },
      {
        name: 'Metal & ağır sanayi',
        desc: 'Entegre çelik, özel çelik ve alüminyum ekstrüzyon: her şeyi throughput, sıralama ve sürekli proses kısıtları belirler. Siparişe özel profil üretimi, çizelgeleme probleminin üzerine bir de konfigüre edilebilir ürün yapıları ekler.',
        tags: ['Throughput çizelgeleme', 'Siparişe mühendislik', 'Varyant konfigürasyonu'],
      },
      {
        name: 'Makine & ticari araçlar',
        desc: 'Treyler, şaft, güç aktarma ve tarım makineleri: konfigüre edilebilir ürünler, çok ülkeli tesisler ve uzun montaj zincirleri. Değer genellikle karakteristiğe bağlı rotalarla yapılan kısıt tabanlı sonlu çizelgelemededir.',
        tags: ['Konfigüre edilebilir ürünler', 'Çok ülkeli roll-out', 'Sonlu çizelgeleme'],
      },
      {
        name: 'Beyaz eşya & elektronik',
        desc: 'Güçlü ihracat teslimat taahhütleriyle yüksek hacimli, çok varyantlı montaj. Hat esnekliğini orta ve kısa vadeli planlama doğruluğu belirler; taktik planlamayla arz-talep hizalaması birinci sınıf bir mesele hâline gelir.',
        tags: ['Çok varyantlı montaj', 'Orta vadeli planlama', 'Arz-talep hizalaması'],
      },
      {
        name: 'İlaç & yaşam bilimleri',
        desc: 'Parti yönetimi, izlenebilirlik ve kalite kapılarının isteğe bağlı özellikler değil işletme kısıtı olduğu regüle üretim. Planlama ve kalite birlikte tasarlanmak, serbest bırakma yolu ise denetlenebilir olmak zorundadır.',
        tags: ['Parti izlenebilirliği', 'GMP uyumlu süreçler', 'Kalite kapıları'],
      },
      {
        name: 'Yapı malzemeleri & ahşap panel',
        desc: 'Üretim sıralamasının doğrudan verim ve fireyi belirlediği yüksek kapasiteli sürekli üretim. Buradaki planlama iyileştirmeleri malzeme kullanımında ve tip değişim kayıplarında hızla görünür hâle gelir.',
        tags: ['Sürekli üretim', 'Sıralama optimizasyonu', 'Fire azaltma'],
      },
    ],
    beyond: {
      heading: 'Listede yok musunuz?',
      text: 'Bunlar doğrudan proje deneyimimizin olduğu sektörler; ancak disiplin taşınabilir. Üretim sisteminizde kapasite kısıtları, sıra bağımlılıkları ve kimsenin güvenmediği bir planlama süreci varsa, problem bizim tanıdığımız bir problemdir — hattan ne çıktığından bağımsız olarak. Anlatın, doğru adres olup olmadığımızı dürüstçe söyleyelim.',
    },
    note: 'Sektör açıklamaları bilinçli olarak geneldir. Müşteri isimlerini yayınlamıyoruz. Referanslar; müşteri onayıyla ve gizlilik çerçevesinde görüşmelerde paylaşılır.',
  },

  contact: {
    metaTitle: 'İletişim — Kesoniti',
    metaDescription:
      'Üretim şirketiniz için SAP PP, PP/DS, QM veya PM danışmanlığını görüşmek üzere Kesoniti ile iletişime geçin.',
    hero: {
      eyebrow: 'İletişim',
      heading: 'Planlamanın nerede aksadığını anlatın.',
      sub: 'Durumunuzu birkaç cümleyle tarif edin — sistem altyapısı, modül alanı, çalışmayan şey. Karşılığında bir satış dizisi değil, bir danışmandan içerikli bir yanıt alırsınız.',
    },
    form: {
      name: 'Ad soyad',
      email: 'Kurumsal e-posta',
      company: 'Şirket',
      module: 'İlgilendiğiniz modül',
      modulePlaceholder: 'Bir modül seçin…',
      moduleOptions: ['SAP PP — Üretim Planlama', 'SAP PP/DS — Detaylı Çizelgeleme', 'SAP QM — Kalite Yönetimi', 'SAP PM — Bakım Yönetimi', 'SAP IBP entegrasyonu', 'Henüz emin değilim — genel başvuru'],
      message: 'Mesajınız',
      messagePlaceholder: 'Mevcut sistem altyapınız, yaşadığınız planlama problemi ve yaklaşık zaman planı…',
      submit: 'Gönder',
      privacyNote: 'Bilgilerinizi yalnızca başvurunuza yanıt vermek için kullanırız. Bülten yok, liste yok.',
      configNote: '[FORM UÇ NOKTASI YAPILANDIRILMADI — yayına almadan önce Formspree, Netlify Forms veya bir e-posta altyapısı bağlayın.]',
    },
    info: {
      heading: 'Doğrudan',
      addressLabel: 'Adres',
      address: '30 N Gould St # 11590\nSheridan, WY 82801\nAmerika Birleşik Devletleri',
      emailLabel: 'E-posta',
      email: 'info@kesoniti.com',
      linkedinLabel: 'LinkedIn',
      linkedin: 'linkedin.com/company/kesoniti-llc',
      linkedinUrl: 'https://www.linkedin.com/company/kesoniti-llc',
    },
  },
};
