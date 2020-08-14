const birdsData = [
    [       
      {
        id: 1,
        name: 'Голубь',
        species: 'Columba livia',
        description: 'Голуби – одни из самых распространенных и древних птиц на Земле, а по мнению многих ученых, первой птицей, прирученной человеком, был всем известный сизый голубь.',
        image: "https://live.staticflickr.com/65535/50205728911_8d741c89b3_q.jpg",
        audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/XC547561-Rock%20Pigeon2019-4-12-1.mp3'
		
      },
      {
        id: 2,
        name: 'Чиж',
        species: 'Spinus spinus',
        description: 'Самой дружелюбной птицей из семейства вьюрковых отряда воробьинообразных является чиж. Эти птицы очень неприхотливы в уходе, поэтому их содержат в неволе наряду с канарейками, к тому же эти птицы часто радуют своим звонкими трелями.',
        image: 'https://live.staticflickr.com/65535/50197130813_629334164f_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC575791-Train%20des%20aulnes%20migration%20au%20dessus%20de%20la%20Baltique.mp3'
      },
      {
        id: 3,
        name: 'Оляпка',
        species: 'Cinclus cinclus',
        description: 'Оляпка имеет и другие названия – водяной дрозд или воробей. А называется птица так потому, что любит водную стихию. Относится оляпка к отряду воробьинообразных.',
        image: 'https://live.staticflickr.com/65535/50201761917_9a18fea051_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC569095-Cincle%20plongeur%20cri%20de%20quemandage%20juv%20%2B%2B.mp3'
      },
      {
        id: 4,
        name: 'Лебедь-шипун',
        species: 'Cygnus olor',
        description: 'У лебедей очень длинная шея, вытянутое туловище, тело и голова средней величины с оранжево-красным клювом, у основания которого есть характерный чёрный нарост. Шипуном назван из-за звука, издаваемого при раздражении.',
        image: 'https://live.staticflickr.com/65535/50157163657_f85af1cf05_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RNMRWBXEZJ/XC489457-Knobbelzwaan%2C%20wingbeats%2C%20270719%2C%200443%20uur.mp3'
      },
      {
        id: 5,
        name: 'Южный киви',
        species: 'Apteryx australis',
        description: 'Киви – это красивые птицы, обитающие в Новой Зеландии, особенностью которых является отсутствие полноценных крыльев и наличие перьевого покрова, напоминающего шерсть.',
        image: 'https://live.staticflickr.com/1018/4725940989_0e6a72e682_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/NRUIFMFTXY/XC525925-Southern%20Brown%20Kiwi%20Oban%2020200201.mp3'
      },
      {
        id: 6,
        name: 'Пищуха',
        species: 'Certhia familiaris',
        description: 'Обыкновенная пищуха – это самый распространенный вид рода пищух и семейства пищуховых. Такое имя птица получила вероятнее всего за свой тонкий голосок, напоминающий писк.',
        image: 'https://live.staticflickr.com/65535/50202019692_9c26d3387c_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/QAJPWEPSTL/XC499015-waldbaum0803.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Краснохвостая ванга',
        species: 'Calicalicus madagascariensis',
        description: 'Краснохвостая ванга длиной 13—14 см, масса тела 14—19 г. Верх головы, шея и спина серые, радужная оболочка тёмная, лапы серые. У самцов чёрное горло и уздечки, лоб и кроющие уха белые, грудь и брюхо белые с розовым по бокам. Крылья коричневые, кроющие крыльев серые, верх хвоста красноватый. У самок горло, грудь и брюхо охряного цвета, крылья коричневые.',
        image: 'https://live.staticflickr.com/7337/12069289584_2e78b6665f_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/PWDLINYMKL/XC162779-Red-tailed%20VangaMP52013.mp3'
      },
      {
        id: 2,
        name: 'Рыжегорлый гусеницеед',
        species: 'Conopophaga lineata',
        description: 'Рыжегорлый гусеницеед — небольшая, пухленькая птица, 13 см длиной, с коротким хвостом и довольно длинными ножками. Оперение, в основном, красновато-коричневое. Над глазом есть белая (серая у самок) полоса, которая заканчивается на пучке перьев. Голос — серия тихих писков, которые постепенно становятся быстрыми и громкими.',
        image: 'https://live.staticflickr.com/829/41937079341_91efe93f7d_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/PVVQTVACLV/XC308464-160306-164735%20Conopophaga%20lineata.mp3'
      },
      {
        id: 3,
        name: 'Деряба',
        species: 'Turdus viscivorus',
        description: 'Деряба в среднем 27 см длиной, немного крупнее певчего дрозда, весом до 150 грамм. Внешне напоминает певчего дрозда. Окрас оперения серо-бурый сверху и белый с тёмно-бурыми пятнышками снизу. Крылья снизу белого цвета. Самцы и самки имеют одинаковую окраску.',
        image: 'https://live.staticflickr.com/65535/50205782982_f9148c2bf8_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/QAJPWEPSTL/XC536072-mistel0532.mp3'
      },
      {
        id: 4,
        name: 'Жулан',
        species: 'Lanius collurio',
        description: 'Длина тела составляет 16—18 см, размах крыльев — 28—31 см, длина крыла — 93 мм, масса тела — 28 г. Самец окрашен ярче и контрастнее самки. Верхняя часть тела у самцов красноватая. Голова серая, через глаза проходит типичная для данного семейства чёрная полоска — «маска».',
        image: 'https://live.staticflickr.com/65535/50224906717_3c8ce8616b_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/QAJPWEPSTL/XC576296-neuntö0842.mp3'
      },
      {
        id: 5,
        name: 'Кукша',
        species: 'Perisoreus infaustus',
        description: 'Кукша – маленькая птица с рыхлым и мягким оперением. Длина тела самцов 25.5-31.0, самок – 24.5-28.4 см. Особи мужского пола весят 81-97 г, самки — 73-89 г. Макушка и затылок черновато-бурого цвета, иногда с примесью сероватых оттенков. Перья возле ушей и щеки буроватые. Спина буро — оливковая с сероватым или рыжеватым отливом',
        image: 'https://live.staticflickr.com/65535/50119458422_68e067336d_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC495330-Lavskrika_16.mp3'
      },
      {
        id: 6,
        name: 'Рябинник',
        species: 'Turdus pilaris',
        description: 'Рябинник – это перелётная и зимующая птица, получившая своё название из-за любви к ягодам рябины. Относится к отряду воробьиных. Довольно крупный, имеет некоторые отличия от других разновидностей дроздов.',
        image: 'https://live.staticflickr.com/65535/50225084373_9641d5b235_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/VFCYBWXATC/XC572514-20200621_0333%20Grive%20litorne%20-%20song%20-%20master.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Черноголовая гаичка',
        species: 'Poecile palustris',
        description: 'Вид птиц из семейства синицевых. Длина тела до 14 см, а вес всего 12-15 гр. Верхняя половина головы и нижние перья крыльев окрашены в блестящий черный цвет. Такого же цвета есть пятно под клювом.',
        image: 'https://live.staticflickr.com/65535/50183436182_316129f685_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/UQGNGROIPL/XC355943-077A_170216_1250.mp3'
      },
      {
        id: 2,
        name: 'Вальдшнеп',
        species: 'Scolopax rusticola',
        description: 'Ва́льдшнеп — вид птиц семейства бекасовых, гнездящийся в умеренном и субарктическом поясе Евразии. На большей части ареала перелётная птица, ведёт скрытный ночной образ жизни.',
        image: 'https://live.staticflickr.com/7901/46820409882_db0b9c668d_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC575713-Becasse%20des%20bois%20croule%20puis%20cris%20d%20interaction%20%2B.mp3'
      },
      {
        id: 3,
        name: 'Фазан',
        species: 'Phasianus colchicus',
        description: 'Фазан – это птица, которая стоит во главе семейства фазановых, которое в свою очередь относится к отряду куриных.Фазаны имеют своеобразное запоминающееся оперение, которое является главной особенностью птицы.',
        image: 'https://live.staticflickr.com/65535/50206058892_f197020d7e_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/EDRTTPSCEN/XC541189-Faisan%20de%20Colchide%202004030CA%20Marais%20d%27Harchies.mp3'
      },
      {
        id: 4,
        name: 'Кедровка',
        species: 'Nucifraga caryocatactes',
        description: 'Кедровка – это удивительная представительница семейства врановых, небольшая птичка, по размерам уступающая галке, вес её равен в среднем 150 г. Но жизнедеятельность её настолько уникальна, что весьма способствует росту и распространению кедровых и ореховых деревьев.',
        image: 'https://live.staticflickr.com/65535/50188308796_9807697096_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC487089-Nötkråka_15.mp3'
      },
      {
        id: 5,
        name: 'Клёст-еловик',
        species: 'Loxia curvirostra',
        description: 'Лесная певчая птица из семейства вьюрковых. Характеризуется мощным клювом с перекрещивающимися кончиками и питанием семенами ели и других хвойных деревьев (отсюда русское название вида).',
        image: 'https://live.staticflickr.com/65535/50194932008_ceb7ef715f_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/EJIITXAJNY/XC497265-Kruisbek%20190713%20Kalmthoutse%20heide.mp3'
      },
      {
        id: 6,
        name: 'Лазоревка',
        species: 'Cyanistes caeruleus',
        description: 'Лазоревка — это маленькая, очень эффектного вида птичка, которая является разновидностью большой синицы. В народе ее еще называют “князек». По своим размерам лазоревка немного уступает своей родственнице, но во всем остальном очень на нее похожа. ',
        image: 'https://live.staticflickr.com/65535/50205660493_1c54a7bf64_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC541511-Mesange%20bleue%20chant%20%2B%2B.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Варакушка',
        species: 'Luscinia svecica',
        description: 'Варакушка — одна из самых красивых птиц, которая встречается в средней полосе России, и в Южной Азии, а также Северной Африке. Длина птицы не превышает 15 см, крыло 7–8 см, хвост до 4,5 см.',
        image: 'https://live.staticflickr.com/65535/50208734258_c45ff04881_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/JCPKCBKKAQ/XC497804-LUSSVE_190502_4942_RNN76_AireBaieSeine.mp3'
      },
      {
        id: 2,
        name: 'Дубонос',
        species: 'Coccothraustes coccothraustes',
        description: 'Птица относится к отряду воробьинообразных, семейству вьюрковых.Дубонос – обладатель 18 см тела. Размах крыльев становит 33 см. Вес 30 грамм.Отличительной чертой дубоноса является его массивный клюв, который окрашен в серо-белый цвет. Таким орудием, как клюв, дубонос отлично открывают косточки яз ягод.',
        image: 'https://live.staticflickr.com/65535/50188022092_eee6bd291c_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/HDPNLPFZHF/XC403252-LS110953.Appelvink.zang.Zalk.MP3'
      },
      {
        id: 3,
        name: 'Крапивник',
        species: 'Troglodytes troglodytes',
        description: 'Птица очень подвижная, с необычно громким голосом — самцы помечают свою обширную территорию, сидя на каком-нибудь возвышении и распевая свою своеобразную, торопливую песню, состоящую из очень звучных быстрых трелей.',
        image: 'https://live.staticflickr.com/65535/50114941943_1b2848513c_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/AGCYXCXXSH/XC564611-llucareta%202%206%2010.mp3'
      },
      {
        id: 4,
        name: 'Чечевица',
        species: 'Carpodacus erythrinus',
        description: 'Размером с воробья. У взрослого самца спина, крылья и хвост красновато-бурые, голова и грудь ярко-красные, брюшко (а у птиц из восточной части ареала — нередко и грудь) белое с розовым оттенком. Самки и молодые птицы буровато-серые, брюшко светлее спины.',
        image: 'https://live.staticflickr.com/65535/50055104883_543eeefcbe_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/KLADBSYAFL/77%20Carpodacus%20erythrinus%2C%20Neringa%20%28Lithuania%29%2C%2026-05-05.mp3'
      },
      {
        id: 5,
        name: 'Снегирь',
        species: 'Pyrrhula pyrrhula',
        description: 'Птица мелких размеров, чуть больше воробья. Голова сверху, вокруг клюва и глаз — чёрная. Маховые и рулевые перья тоже чёрные, с синим металлическим отливом. Поясница и подхвостье — белые. Спина, плечи и зашеек у самца серые. Щёки, шея снизу, брюхо и бока — красные. ',
        image: 'https://live.staticflickr.com/65535/50191007456_4c90aecf15_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/TLPLNAINFU/XC167991-ZOOM0025_Dompap_2301214knirk.mp3'
      },
      {
        id: 6,
        name: 'Cлавка',
        species: 'Ramphocaenus melanurus',
        description: 'Мелкая птица, длиной 12—13 см, весом 8—11 г. Имеет длинный тонкий клюв (до 23 мм) и короткий хвост. Верхняя часть тела серо-коричневая, голова по бокам рыжеватая. Горло белое, брюхо жёлтое. Хвост чёрный с белыми краями.',
        image: 'https://live.staticflickr.com/2933/14479746408_81d004917f_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/FJVXXGLFTR/XC308471-801_0529%20Rammel.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Балобан',
        species: 'Falco cherrug',
        description: 'Фотография хищной птицы балобанСокол балобан — смертельно опасный убийца и один из самых свирепых хищников, словно лев или гепард, но только среди пернатых, быстро и бесшумно убивающий свою добычу — именно такими словами можно описать эту хищную и красивую птицу.',
        image: 'https://live.staticflickr.com/65535/47101260974_b21e481049_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC412093-Falco_cherrug_%28%29-FL%20calls%20Boga%20Bogt%2027May17%204.27am%20LS111762a.mp3'
      },
      {
        id: 2,
        name: 'Беркут',
        species: 'Aquila chrysaetos',
        description: 'Беркут является птицей, которая представляет род орлов. Она считается одной из самых крупных представителей этого рода. От других птиц его отличает не только внушительные размеры, но и специфический окрас, который свойственен только беркутам. Эта величественная, мощная птица легко приспосабливается к любым условиям и может существовать практически в любой местности.',
        image: 'https://live.staticflickr.com/65535/50199237181_c83c4e2b62.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/YSDNMROVID/XC341722-236_aquchr_soidin2_Suomi_Ähtäri_2012-02-27.mp3'
      },
      {
        id: 3,
        name: 'Дербник',
        species: 'Falco columbarius',
        description: 'Дербник – маленький сокол, напоминает голубя. Птицы редкие, размножаются в различных местах на открытых площадках на Аляске, в Канаде, севере и западе США, Европе и Азии, обживают пригородные и городские районы..',
        image: 'https://live.staticflickr.com/65535/50174679603_b44f6b55dc_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/HNYFHZLJOD/XC572978-200702-ME%20clip.mp3'
      },
      {
        id: 4,
        name: 'Каракара',
        species: 'Caracara plancus',
        description: 'Каракара – довольно крупная птица, но в то же время стройная и подтянутая. Длина тела у нее до 60 см, размах крыльев достигает 130 см. Масса взрослых особей около 1,5 кг. Самец и самка внешне друг от друга не отличаются. Оперение на туловище каракары темных цветов: коричневого, серого или черного, брюшко и шея светлые, у некоторых особей белого цвета.',
        image: 'https://live.staticflickr.com/65535/50198087377_0be8a02942_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MNENFHYTAE/XC173710-Falconidae_Caracara_plancus_15_04_2012_H15_36_Faxinal_do_Braz_Vidal_Ramos.mp3'
      },
      {
        id: 5,
        name: 'Кобчик',
        species: 'Falco vespertinus',
        description: 'Кобчика – отдельный вид в семействе соколиных, хотя его часто путают и с соколом, и с пустельгой. Окрас и пропорции очень схожи. Различие — лишь в размере. Кобчик значительно уступает своим родственникам, как в величине тела, так и в размахе крыльев.',
        image: 'https://live.staticflickr.com/65535/50074472298_99d9222679_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/YEEQSGIKMT/XC145163-Red-footed%20Falcon_20130618_10_roep.mp3'
      },
      {
        id: 6,
        name: 'Хохлатый змееяд',
        species: 'Spilornis cheela',
        description: 'Это средний по величине, темно-коричневый коренастый орёл, с закругленными крыльями и коротким хвостом. Его короткий черно-белый веерообразный затылочный гребень придает ему вид толстой массивной шеи. Голая кожа лица и ноги желтые. Нижняя сторона туловища покрыта белым и желтовато-коричневым оттенком. При полёте крылья не доходят до конца хвоста.',
        image: 'https://live.staticflickr.com/65535/49791190103_efaefcb796_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/BPSDQEOJWG/XC124351-Crested-Serpent-Eagle-call-2012-12-26%2013.26-LS112640.mp3'
      }
    ],
    [
      {
        id: 1,
        name: 'Большой фрегат',
        species: 'Fregata minor',
        description: 'Длина тела — 85—105 см, размах крыльев 205—230 см. Гнездится крупными колониями на океанических островах, вне периода размножения держится вдали от суши. Перед началом брачного периода на горле у самцов развивается большой ярко-алый кожистый мешок. Во время ухаживания самец раздувает его, издавая при этом звуки, привлекающие самок.',
        image: 'https://live.staticflickr.com/65535/50131671291_e5c7a257e3_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/KTLCZCRCQX/XC114150-20110405-1653-1224-EC-GA-Isla%20Genovesa-Great%20Frig%20males.mp3'
      },
      {
        id: 2,
        name: 'Большой баклан',
        species: 'Phalacrocorax carbo',
        description: 'Большой баклан — крупная птица, его длина достигает 80-100 см, размах крыльев 130–160 см, масса 2–3 кг. Самки немного мельче самцов. Взрослые птицы черные, с зеленым и пурпурным блеском, спина и крылья темно-оливковые, с чешуйчатым черным рисунком. Оперенная часть «лица» белая, у некоторых подвидов белые низ шеи и грудь.',
        image: 'https://live.staticflickr.com/65535/50189453727_bcb9a87c5e_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/XUDFGWMRXG/XC522801-Cormorants_Calls%20at%20roost_Estany%20d%27Ivars_180120_1702.mp3'
      },    
      {
        id: 3,
        name: 'Полярная крачка ',
        species: 'Sterna paradisaea',
        description: 'Длина птицы — 36—43 см, размах крыльев — 74—84 см. Белого цвета, с чёрной шапочкой и серой мантильей, хвост вилочковый, сильно вырезанный. Весной и летом клюв становится красным. Лапы короткие, из-за чего ходит переваливаясь. Гнездится колониями в скалах или на пляжах.',
        image: 'https://live.staticflickr.com/65535/50155720558_379d323741_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC578975-Silvertärna_08.mp3'
      },
      {
        id: 4,
        name: 'Голубоногая олуша',
        species: 'Sula nebouxii',
        description: 'Голубоногая олуша длиной 80 см. Самки, как правило, крупнее и тяжелее самцов. Вес птиц составляет примерно 1,5 кг. Ноги птиц имеют ярко-синие плавательные перепонки — отличительный признак этого вида. Хвост и крылья обычно длинные и заострённые. Оперение коричнево-белое, клюв серо-зелёный. ',
        image: 'https://live.staticflickr.com/65535/50142673113_ba04b43733_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/RFRTVEHIZX/XC332857-160802c_Blue-footedBooby_chick_SanCristobel_OC.mp3'
      },
      {
        id: 5,
        name: 'Бургомистр',
        species: 'Larus hyperboreus',
        description: 'Бургомистр — одна из самых крупных чаек, достигающая 64—65 см в длину. Вес — 1,5—2 кг. Оперение имеет бледную окраску: основной цвет белый, спина и крылья голубовато-серые, кончики крыльев белые. Клюв жёлтый, ноги желтовато-розовые.',
        image: 'https://live.staticflickr.com/65535/49861097641_573d522d3a_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487687-2018-07-16%20Rif%20Onverdarnes%20grundafjordur%20180716%20Goeland%20bourgmestre%2011.mp3'
      },
      {
        id: 6,
        name: 'Тупик',
        species: 'Fratercula arctica',
        description: 'Длина тела 30–35 см, размах крыльев около 50 см, вес 450–500 г.[7] Самцы, как правило, немного крупнее самок. Спина, воротник на горле и голова чёрные. На боках головы есть большие светло-серые пятна. Глаза выглядят маленькими, почти треугольными из-за красных и серых кожистых образований вокруг них. Низ тела белый. Лапы оранжево-красные',
        image: 'https://live.staticflickr.com/65535/50142790638_17aed7e2f7_q.jpg',
        audio: 'https://www.xeno-canto.org/sounds/uploaded/TYEQKORVXJ/XC253830-Puffin%2024%20June%202015.mp3'
      }
    ]
  ];
  
  export default birdsData;