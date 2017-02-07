import ServicesPanel, { IServicesPanelProps } from '../ServicesPanel';
let testLogo = require('../../../../assets/testLogo.svg');
let Cases : {[id:string]:IServicesPanelProps} = {};

let services = 
  [
    {
      "name": "PeerSys",
      "short_description": "short description Est aenean pharetra condimentum lectus est sem nisl sit pharetra.",
      "long_description": "long description Natoque condimentum eget placerat elementum eti. Sapien quisque gravida lobortis lacus placerat amet sollicitudin morbi. Justo id natoque placerat ultricies, tincidunt porttitor morbi scelerisque sed natoque, enim et tempus nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Scelerisque.",
          "At.",
          "Etiam."
      ]
    },
    {
      "name": "Westercom",
      "short_description": "short description Mauris neque gravida imperdiet amet tempus donec, pulvinar tincidunt etiam.",
      "long_description": "long description In non natoque leo nunc fringilla quis eros. Et tortor diam risus vel. Ultrices bibendum arcu neque erat proin suscipit. Nunc laoreet sit arcu cras, tristique justo natoque amet leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "Ultrices.",
          "Viverra."
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "short description Rhoncus justo morbi massa amet hendrerit tincidunt pellentesque pellentesque ipsum.",
      "long_description": "long description Mauris enim proin pulvinar lobortis. Tincidunt facilisis mi porttitor massa accumsan. Massa massa imperdiet curabitur tristique nunc tempus ex nulla. Dui lectus magna facilisis magna et euismod donec sodales accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cursus.",
          "Eget.",
          "Etiam."
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "short description Nam ornare a sagittis eu viverra. Arcu ornare auctor consectetur.",
      "long_description": "long description Ultrices dictum rhoncus pretium euismod. Metus faucibus suscipit cras accumsan non auctor gravida massa suscipit a augue. Consequat mi dolor sit tristique. Gravida elit neque scelerisque natoque, nisl viverra faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Est.",
          "Quisque."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Lobortis hendrerit dictum sed vestibulum blandit tempor viverra mattis nibh.",
      "long_description": "long description Placerat massa maximus porttitor eros vestibulum est ultricies non. Natoque etiam auctor est rhoncus justo ac. Rhoncus viverra nunc sodales lacinia. Cursus quis diam massa porttitor amet, consectetur rhoncus porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Vulputate.",
          "Placerat."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Nunc vitae ac massa risus at vulputate a lorem maximus.",
      "long_description": "long description Sapien lobortis maximus dolor sagittis laoreet, enim ante maximus elit dolor faucibus sagittis velit vulputate tempor nisl imperdiet rhoncus. Nulla quis aliquam cursus eu scelerisque. Non lacinia mattis imperdiet vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultrices.",
          "Elementum.",
          "Cursus."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description I cursus in nunc cursus sollicitudin purus non massa in.",
      "long_description": "long description Vulputate felis risus posuere tincidunt eros id suscipit diam diam ultricies eget vehicula, tempus maecenas au ultricies lacinia enim. Dictum mollis porttitor vestibulum euismod mollis mollis aenean. Nunc natoque arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Cras.",
          "Nisl."
      ]
    },
    {
      "name": "Solexis",
      "short_description": "short description Eti diam lorem augue bibendum tempor, consectetur erat aliquam nisl.",
      "long_description": "long description Curabitur aliquam rhoncus pulvinar pretium augue mattis. Quisque iaculis ligula massa sodales augue elementum mollis. Laoreet enim elementum cras. Suscipit suscipit ipsum felis purus, velit maximus nam lacus sodales ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pellentesque.",
          "Natoque.",
          "Magna."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Pellentesque mauris enim pharetra rhoncus. Finibus commodo posuere scelerisque e.",
      "long_description": "long description Nibh diam placerat maecenas lacinia aenean ac risus erat amet auctor donec leo. Ante leo lacinia mauris arcu mattis mauris sollicitudin in natoque. Imperdiet curabitur aliquam enim ornare vestibulum i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Gravida.",
          "Massa."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Faucibus mollis nunc justo mollis purus. Suscipit non lacinia felis.",
      "long_description": "long description Metus e et consequat quis dignissim tristique euismod vitae ultrices a natoque facilisis, lacinia enim dolor gravida, diam bibendum cras ut dolor curabitur auctor, sodales scelerisque ac et au et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pretium.",
          "Nulla.",
          "Morbi."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Ornare aliquet bibendum eti pharetra. Lectus tempor sapien hendrerit aliquet.",
      "long_description": "long description Nibh fringilla tempus sem tortor ex sodales orci tincidunt dolor nulla ut vitae pharetra. Suscipit curabitur quisque i. Vestibulum nisi ex ultricies etiam eu, mattis curabitur mattis velit elit pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisi.",
          "Non.",
          "Consectetur."
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "short description Nulla etiam tempus elit vestibulum. Auctor vestibulum dui neque sem.",
      "long_description": "long description Id au sagittis dui mollis, sapien et purus purus dui, purus sagittis a nisl velit elit pellentesque blandit elementum, dignissim aenean et dui velit. Sit cursus placerat tincidunt natoque leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nibh.",
          "Tortor.",
          "Iaculis."
      ]
    },
    {
      "name": "Logico",
      "short_description": "short description I vehicula sollicitudin sagittis maximus diam porttitor i magna purus.",
      "long_description": "long description Lectus condimentum nulla maecenas magna, sed aliquam in sem facilisis. Sit neque cursus imperdiet, consequat et lacinia consectetur. Pellentesque facilisis maecenas imperdiet eros diam, purus rhoncus tincidunt maximus amet sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eu.",
          "Elit.",
          "Donec."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Ex suscipit euismod curabitur condimentum consequat euismod at commodo laoreet.",
      "long_description": "long description Ac scelerisque ac dui lacus etiam lacinia ante. Eget nisl ligula vel orci metus eros dictum, ac natoque pharetra justo. Purus elit sit aenean suscipit. Cursus felis e iaculis eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Faucibus.",
          "Eu.",
          "Dui."
      ]
    },
    {
      "name": "Logico",
      "short_description": "short description Mauris massa erat eros purus. Tempor leo turpis ultricies quisque.",
      "long_description": "long description Au placerat lacinia i condimentum nibh ultricies id, nam vel quis mollis fringilla, i facilisis vehicula amet. Fringilla tincidunt mollis elit sed augue, et quis tempus i, eget morbi lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Non.",
          "Eget.",
          "Aliquam."
      ]
    },
    {
      "name": "Logico",
      "short_description": "short description Velit aliquet gravida enim massa, vulputate morbi gravida sed in.",
      "long_description": "long description Id rhoncus sed donec dui. Quisque erat gravida facilisis auctor purus. Metus dui iaculis lacus. Faucibus est lacus tristique. Et vel mauris laoreet nam augue tempor vulputate eti sodales condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Quisque.",
          "Sapien.",
          "Facilisis."
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "short description Aliquet cursus eget nam vulputate. Nam cursus et curabitur quisque.",
      "long_description": "long description Pharetra adipiscing rhoncus sollicitudin mollis purus consectetur non mauris. Rhoncus lectus tortor blandit consectetur laoreet eget sem lacinia natoque. Cras metus viverra gravida hendrerit sollicitudin. Eti pretium eti vitae tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nunc.",
          "Ex.",
          "Au."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Ligula orci ultrices nibh arcu. Etiam felis ipsum placerat dui.",
      "long_description": "long description Lacinia quisque ut hendrerit eti. Elit scelerisque ipsum vehicula. Aliquet sapien curabitur elementum. Auctor eu lectus tempor tortor natoque imperdiet sit. Placerat adipiscing maecenas consectetur scelerisque. Lorem id massa tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ante.",
          "Amet.",
          "Leo."
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "short description Fringilla tempor vel sem leo fringilla a turpis sem eu.",
      "long_description": "long description Facilisis lorem diam posuere dolor. Ac sapien neque nisl. Sapien massa suscipit euismod commodo blandit ac sem in a. Imperdiet cursus pellentesque lorem mauris diam. Nibh bibendum velit tristique eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eti.",
          "Suscipit.",
          "Ligula."
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "short description Gravida imperdiet suscipit lacinia amet i vel iaculis suscipit eti.",
      "long_description": "long description Pharetra vehicula metus donec pellentesque vestibulum leo tincidunt vel massa suscipit tempus, iaculis mollis ante adipiscing. Pulvinar nunc tristique placerat maximus nulla risus hendrerit mi mattis. Mollis commodo proin viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lectus.",
          "Vel.",
          "Pharetra."
      ]
    },
    {
      "name": "Freecast",
      "short_description": "short description Accumsan sem massa nisi ultricies. Dui hendrerit iaculis ultrices nisl.",
      "long_description": "long description Nulla condimentum facilisis euismod metus elit vehicula dignissim sodales, adipiscing dictum diam tempus eros, maecenas non lacinia maximus, gravida morbi purus at. Blandit massa elementum iaculis orci, elementum lectus dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Donec.",
          "Morbi.",
          "Erat."
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "short description Imperdiet rhoncus natoque vel tempus sollicitudin mollis lacinia natoque quis.",
      "long_description": "long description Natoque aliquam faucibus ut pellentesque metus euismod arcu tortor, vulputate in vel ac, a at elementum purus eget iaculis porttitor aenean. Maecenas amet neque et. Condimentum arcu massa accumsan etiam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vestibulum.",
          "Suscipit.",
          "Sed."
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "short description Faucibus risus commodo morbi non erat bibendum eget turpis mi.",
      "long_description": "long description Risus et commodo i enim imperdiet accumsan, suscipit vulputate dolor facilisis blandit orci aenean, e mollis finibus etiam. Auctor bibendum risus pretium tortor tortor. Risus nam velit lacus hendrerit eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Scelerisque.",
          "Sapien.",
          "Nam."
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "short description Vulputate sollicitudin rhoncus aenean metus erat nibh euismod neque id.",
      "long_description": "long description Eu pellentesque aliquam pulvinar porttitor aenean. Metus leo a turpis felis felis. Velit pharetra eti pellentesque pellentesque commodo elementum etiam mi massa mi, consequat morbi lobortis blandit, fringilla leo proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Ante.",
          "Tincidunt."
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "short description Augue enim quisque blandit cursus eti tempus condimentum condimentum metus.",
      "long_description": "long description Iaculis justo lectus aliquam morbi curabitur pretium iaculis, cursus maximus natoque faucibus. Gravida eros accumsan mattis cras tortor tempus ex suscipit neque erat viverra tortor felis lobortis elit i vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Posuere.",
          "Proin.",
          "Tincidunt."
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "short description Commodo pulvinar cras etiam lacinia sed nulla ante eu lacinia.",
      "long_description": "long description Ultrices tempus morbi morbi auctor metus pharetra lacinia au sapien. Lacus metus dignissim lacinia condimentum porttitor, est placerat pellentesque pellentesque auctor pulvinar elit, tristique faucibus enim aliquet ante nibh consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Amet.",
          "Nam.",
          "Eti."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description Ipsum tortor finibus ex eu, purus velit mattis hendrerit orci.",
      "long_description": "long description Curabitur massa ante eget mi, cras pulvinar lacinia diam proin pretium leo. Augue lectus tortor ipsum sagittis at. Lacus maximus ex erat i. Posuere ut pretium mauris rhoncus metus pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Magna.",
          "Consectetur.",
          "Orci."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Turpis morbi commodo condimentum posuere sodales scelerisque dignissim tempus tristique.",
      "long_description": "long description Commodo non mattis nulla justo vitae, adipiscing erat mauris nulla mollis tortor erat, curabitur adipiscing auctor felis donec ipsum condimentum vitae velit. Ornare cursus consectetur nam enim leo tortor mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempus.",
          "Imperdiet.",
          "Metus."
      ]
    },
    {
      "name": "WestGate",
      "short_description": "short description Massa sollicitudin non consequat ultrices proin finibus purus justo accumsan.",
      "long_description": "long description I auctor cursus leo eu aliquet curabitur leo. Aliquam elit pharetra lobortis dolor etiam iaculis euismod, lectus vitae augue eros suscipit gravida commodo est finibus amet neque eti risus tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Morbi.",
          "Neque.",
          "Tempor."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description Elementum blandit justo nam felis eros elementum tristique est rhoncus.",
      "long_description": "long description Vulputate et elementum sagittis porttitor et, sagittis id magna a, curabitur lobortis a amet. Augue magna turpis gravida vestibulum consectetur imperdiet dignissim iaculis maecenas nam. Lobortis ex nulla ultrices justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Placerat.",
          "Donec.",
          "Mattis."
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "short description Diam au dui lobortis justo. Turpis nunc fringilla mollis cursus.",
      "long_description": "long description Accumsan auctor enim nulla i tempor. Rhoncus metus eros justo. Sem auctor neque pretium aliquet facilisis, augue ultricies a orci nisi, maximus accumsan rhoncus dignissim enim pulvinar e tempor pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "Proin.",
          "Lobortis."
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "short description Sit laoreet ultricies ex sapien, vestibulum nunc elit eros iaculis.",
      "long_description": "long description Nisi lacinia sollicitudin ipsum purus, fringilla adipiscing finibus risus viverra, mauris faucibus a dolor diam faucibus quis eu, natoque leo nunc elementum, amet mauris sodales lectus nam nibh nibh hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Justo.",
          "Posuere.",
          "Etiam."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Velit rhoncus proin est nunc auctor faucibus. Ultrices tincidunt dignissim.",
      "long_description": "long description Eros curabitur i viverra id metus euismod quis erat blandit, id fringilla maximus sollicitudin, lacinia euismod posuere turpis, consectetur dictum faucibus sed pulvinar arcu. Massa ex rhoncus felis laoreet finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Magna.",
          "Proin.",
          "Arcu."
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "short description Sit fringilla ipsum pulvinar tincidunt viverra lacinia sagittis tempus commodo.",
      "long_description": "long description Cras felis natoque sagittis ipsum ac aliquet quis. Orci pulvinar tempor vel augue vulputate aenean quis, mauris proin condimentum tempus felis gravida sapien nibh nibh condimentum suscipit, ultricies cursus metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sapien.",
          "Dignissim.",
          "Et."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Rhoncus leo et ultrices accumsan pharetra commodo amet sem mollis.",
      "long_description": "long description Iaculis euismod ut porttitor euismod euismod, adipiscing elementum metus eu, vehicula imperdiet enim maximus. Etiam consectetur ac euismod porttitor, amet aenean elit at mauris amet tempus ac. Enim scelerisque au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Donec.",
          "Cursus.",
          "Fringilla."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Proin pharetra faucibus arcu maecenas, nibh posuere tincidunt maximus aliquam.",
      "long_description": "long description Nibh imperdiet adipiscing id orci, mi elit est diam, posuere neque pulvinar consectetur. Adipiscing nisi placerat vitae ipsum consectetur mattis gravida morbi. Ultrices nam non massa purus. Sodales tempor erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Augue.",
          "Accumsan.",
          "Consectetur."
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "short description Cras tristique gravida augue pharetra in nulla. Tempor mattis ultrices.",
      "long_description": "long description Mi au curabitur dignissim lectus adipiscing eti. Accumsan lobortis pharetra ante. Metus sollicitudin augue tempus vehicula iaculis. Ultrices eu ut ex tempus vestibulum gravida ornare ultrices, eget tristique non cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Velit.",
          "Ultrices.",
          "Risus."
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "short description Bibendum mi dignissim pretium vitae, elit nam velit scelerisque velit.",
      "long_description": "long description Felis pretium dictum mi a bibendum quis nam mollis rhoncus, ultrices lectus pharetra neque. Et donec eu adipiscing e diam, lobortis ipsum gravida sem, nunc mauris euismod sed aliquet est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Quis.",
          "Sit."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Nibh au curabitur finibus viverra iaculis, et vehicula turpis turpis.",
      "long_description": "long description Eros pretium vehicula neque nunc. Et quis at ligula diam, vitae au nulla fringilla arcu vulputate condimentum massa euismod dictum. Tincidunt eti au morbi. Finibus mauris turpis justo lectus augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Justo.",
          "Sagittis."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Porttitor neque at placerat sit at porttitor, pulvinar sodales dignissim.",
      "long_description": "long description Lobortis leo leo elit vitae blandit ante. Neque maecenas adipiscing dolor, quisque vulputate scelerisque ornare suscipit aliquet lobortis. Mattis dictum morbi iaculis sed hendrerit, pretium in commodo ex maximus tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultrices.",
          "E.",
          "Porttitor."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description Pulvinar sodales euismod non suscipit quisque elit lacinia turpis diam.",
      "long_description": "long description Neque nulla lacus pulvinar ultricies elementum ipsum curabitur nisi sodales porttitor eti nunc. Nisi purus ac quisque nam auctor blandit. Natoque ex erat purus. Metus vehicula felis laoreet diam eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Massa.",
          "Natoque.",
          "Dictum."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Pellentesque mi sem blandit diam donec. Facilisis rhoncus facilisis maximus.",
      "long_description": "long description Leo sodales quis nam mi justo fringilla scelerisque consequat tempor fringilla. Mi nulla dui vehicula au consequat lobortis porttitor sed id nisl pharetra id nisi porttitor aliquam hendrerit imperdiet consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nam.",
          "Lorem.",
          "Dictum."
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "short description Cras nisl dui hendrerit in diam morbi. Mauris morbi ut.",
      "long_description": "long description Nam in a imperdiet purus natoque, au bibendum euismod a pellentesque maximus cras ut tincidunt. Justo metus dui accumsan. Fringilla gravida sollicitudin morbi a sollicitudin cursus. Sodales neque mi a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Quis.",
          "Porttitor.",
          "Proin."
      ]
    },
    {
      "name": "WestGate",
      "short_description": "short description Placerat morbi ex felis metus porttitor. Mauris risus sagittis nibh.",
      "long_description": "long description Dictum lacinia dolor cras mollis posuere ac ex suscipit morbi, euismod dictum fringilla aliquet tortor curabitur, purus ac finibus ex. Lacinia velit proin pulvinar ultricies augue. Tempor proin eti dolor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vulputate.",
          "Nibh.",
          "Ultrices."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Adipiscing dignissim faucibus elit blandit. Metus nunc dictum natoque proin.",
      "long_description": "long description Felis maecenas tristique auctor blandit. Nulla cras dictum tempor et, purus quis tristique iaculis, viverra natoque in purus. Nunc mi i faucibus imperdiet, augue sagittis facilisis lobortis. Turpis lacinia ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tincidunt.",
          "Neque.",
          "A."
      ]
    },
    {
      "name": "Britech",
      "short_description": "short description Commodo ipsum eros faucibus finibus. Risus a eget erat porttitor.",
      "long_description": "long description Est ut commodo elementum mattis, massa vulputate at dolor euismod justo, iaculis elementum elit magna donec dignissim ante. Tincidunt neque sodales nibh enim condimentum maecenas, porttitor rhoncus cursus quisque blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ac.",
          "Facilisis.",
          "Massa."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description Diam mollis faucibus pretium a aliquam, in nisl nisi suscipit.",
      "long_description": "long description Amet ultrices auctor elementum tortor. Dictum gravida ligula felis nisl pretium leo quisque, tempor ligula dolor aenean lacinia nulla. Nisl pulvinar sem quisque. Euismod auctor euismod et dignissim risus fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Tempor.",
          "Hendrerit."
      ]
    },
    {
      "name": "Polycore",
      "short_description": "short description Aenean eti auctor non eget vel, lacinia ut morbi tempor.",
      "long_description": "long description Etiam id enim nisl mauris fringilla placerat nam, cursus enim leo vulputate vitae vehicula lobortis. Gravida faucibus accumsan sodales. Porttitor tincidunt nisi eget ante hendrerit, ante ac metus mollis ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Pharetra.",
          "Vel."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Turpis arcu morbi maecenas fringilla mattis dui. Orci metus dui.",
      "long_description": "long description Nulla nulla ligula quis pretium, vel sit fringilla quis sagittis lobortis. Elementum lectus erat facilisis vulputate. Viverra lacus sodales arcu lacinia, mauris ligula sodales ultrices. Eros sem morbi ultricies placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maecenas.",
          "Tortor.",
          "Gravida."
      ]
    },
    {
      "name": "Baramax",
      "short_description": "short description Vulputate justo placerat quis ante, sodales quisque tortor felis ultrices.",
      "long_description": "long description Sit ipsum tempus non non, e maecenas auctor maximus consequat elementum quisque pretium natoque sagittis tempor i curabitur ut sollicitudin, ipsum pharetra iaculis dignissim scelerisque. Ante fringilla sem in nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Est.",
          "Ex."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Lacinia viverra tempus lacinia maximus est. Erat amet eti vehicula.",
      "long_description": "long description Magna metus au a est lectus mattis aenean ut. Purus lectus consectetur imperdiet. Felis suscipit viverra bibendum. Aenean turpis posuere et est diam lacus diam vehicula justo, iaculis tristique hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vestibulum.",
          "Justo.",
          "Lacus."
      ]
    },
    {
      "name": "Templatek",
      "short_description": "short description Laoreet vulputate dictum consequat nunc purus quisque dui augue magna.",
      "long_description": "long description Cras sed imperdiet massa ut. Velit est tempor au, a leo etiam cursus. Commodo ultrices augue euismod. Quisque nunc leo nunc ut cras blandit sapien bibendum dui, curabitur vulputate orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "E.",
          "Diam.",
          "Ac."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description Pulvinar adipiscing tempor dolor tempus in gravida in vehicula massa.",
      "long_description": "long description Eu scelerisque purus ante vitae. Tristique bibendum nam commodo. Cursus vehicula arcu nisl placerat, gravida nibh mauris mi fringilla et. A lorem justo pharetra. Ipsum mauris vitae diam tristique maximus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Ex.",
          "Sagittis."
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "short description Euismod leo turpis purus metus mi gravida viverra velit at.",
      "long_description": "long description Blandit elit mattis eti nisi ut natoque, aliquam tortor nam hendrerit nisi vitae, ligula faucibus placerat ipsum viverra sodales orci pellentesque, condimentum lorem elementum eget sem ornare. Eu etiam nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cursus.",
          "Arcu.",
          "Amet."
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "short description Tortor pharetra in ut quisque sapien, facilisis ultricies ultricies quis.",
      "long_description": "long description E blandit i adipiscing sem erat elit accumsan finibus adipiscing at. A justo ligula est pharetra sagittis viverra lacinia. Condimentum magna nulla ante, nulla ultrices lacinia morbi accumsan condimentum maximus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Arcu.",
          "Neque.",
          "Aliquet."
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "short description Fringilla mollis e cursus massa porttitor erat porttitor sed a.",
      "long_description": "long description Felis ligula ligula nulla amet lectus gravida finibus. Sit aliquet enim bibendum lobortis justo hendrerit lectus sodales. Purus nunc etiam aliquam. Iaculis maecenas maecenas vestibulum, morbi vestibulum viverra elit tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Auctor.",
          "E."
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "short description Morbi cras nunc erat neque. Tortor eti pellentesque sagittis vehicula.",
      "long_description": "long description Dignissim in vitae vitae bibendum lobortis. Eti suscipit turpis at non id cras id lacinia. Etiam viverra mauris donec. Vitae fringilla maecenas lacus donec donec accumsan. Blandit lectus justo lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vitae.",
          "Suscipit.",
          "Aliquet."
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "short description Tincidunt diam nulla condimentum gravida justo, hendrerit lectus viverra dui.",
      "long_description": "long description Hendrerit tristique e erat etiam. Justo lacinia cras neque euismod e morbi bibendum nam lacinia arcu sit maximus gravida mollis adipiscing, diam elementum etiam suscipit. Maecenas ornare e finibus eu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Imperdiet.",
          "Scelerisque.",
          "Sem."
      ]
    },
    {
      "name": "Solexis",
      "short_description": "short description Rhoncus tristique mattis tortor sodales, facilisis elementum suscipit ultrices aliquet.",
      "long_description": "long description Eget e euismod eti etiam facilisis turpis. Eget elit viverra commodo, nunc tempus pellentesque e. Lorem ex tempus metus magna eget. Euismod massa consectetur i, sapien euismod aliquam pretium tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ac.",
          "Natoque.",
          "Morbi."
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "short description Curabitur blandit condimentum consequat dui, aliquam rhoncus maecenas morbi scelerisque.",
      "long_description": "long description Quisque justo auctor e aenean neque, aliquam massa arcu pellentesque nunc ornare vehicula. Ligula pretium commodo vitae nulla mollis pulvinar amet neque turpis morbi orci maximus metus lacinia vitae justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Velit.",
          "Aliquam.",
          "Dui."
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "short description Pulvinar turpis felis tortor porttitor. Curabitur nulla ornare nulla massa.",
      "long_description": "long description I neque consectetur et nisi etiam. Non eget gravida at, pretium quis elit i. At ex finibus suscipit, nulla condimentum vel nulla sapien tempus viverra eu rhoncus turpis placerat vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Sagittis.",
          "Non."
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "short description Porttitor lacinia adipiscing dignissim ipsum scelerisque sagittis dictum ultrices cras.",
      "long_description": "long description Arcu iaculis imperdiet mollis leo euismod consequat mi metus. Ornare turpis condimentum amet dui porttitor. Ante quis lectus iaculis. Blandit iaculis ut sagittis, in viverra auctor ultricies. Donec condimentum rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Natoque.",
          "Aenean.",
          "Morbi."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Ex maecenas id justo aliquet. Sapien mauris vehicula lobortis laoreet.",
      "long_description": "long description Ex ultricies diam lacus suscipit ante pharetra, cras metus dignissim elementum, nam nibh tincidunt mattis scelerisque vel nibh etiam orci, metus augue in donec imperdiet a mollis ligula ipsum eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Porttitor.",
          "Eget.",
          "Quis."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Id aliquet amet purus e maximus ante. Faucibus viverra nibh.",
      "long_description": "long description Commodo scelerisque tortor enim auctor. Mollis nulla pulvinar dictum donec viverra, morbi pretium ultrices aenean vestibulum cursus tristique dictum dictum. Et pulvinar euismod donec eu placerat posuere cursus vulputate donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Placerat.",
          "Ornare.",
          "Est."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Ante lacinia scelerisque ornare felis suscipit, fringilla ex nam vel.",
      "long_description": "long description Ut lobortis nisl nulla massa. Orci faucibus rhoncus vel. Erat amet eget dui iaculis condimentum arcu nunc, posuere massa mauris auctor turpis. Ante curabitur nunc natoque. Diam ac viverra imperdiet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Non.",
          "Erat.",
          "Donec."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Tempor amet dolor pretium magna elit proin. Vehicula lectus ante.",
      "long_description": "long description Faucibus vestibulum sollicitudin consequat mauris donec. Orci hendrerit eti scelerisque. Elit lectus massa sodales, maximus aliquam mauris metus sapien donec velit maecenas, facilisis aenean porttitor placerat donec velit pellentesque facilisis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Orci.",
          "Viverra."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Finibus finibus imperdiet dolor consequat risus aliquam purus id lorem.",
      "long_description": "long description Lacinia scelerisque scelerisque laoreet purus, imperdiet lorem auctor mauris. Au accumsan magna morbi. Mauris ornare maximus risus est nam suscipit finibus ut. I consequat augue amet justo. Nam consectetur aliquam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Diam.",
          "Felis.",
          "Mauris."
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "short description Eu est donec posuere nisi rhoncus amet ligula morbi vitae.",
      "long_description": "long description Etiam ligula hendrerit pharetra sagittis nisi. Au scelerisque quisque ultricies rhoncus natoque sollicitudin, auctor accumsan nisi ornare. Risus metus diam commodo. Posuere erat placerat aenean, ex scelerisque i magna natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vulputate.",
          "Sed.",
          "Suscipit."
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "short description Sapien dignissim justo blandit enim. Nibh blandit amet vulputate maecenas.",
      "long_description": "long description Etiam cras iaculis mattis donec pharetra turpis ex nisi non faucibus a maecenas dictum nisi, risus proin morbi maecenas e sollicitudin. Curabitur aenean ut iaculis, blandit sollicitudin vulputate hendrerit vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Posuere.",
          "Vehicula.",
          "Accumsan."
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "short description Diam lobortis hendrerit vitae non suscipit nisl elit nibh eget.",
      "long_description": "long description Pellentesque turpis adipiscing nisl accumsan natoque cras. Eros aenean vehicula viverra, a ante dui aliquam aliquet ante nisl, natoque sed cras dictum nam enim morbi ut. Dui posuere vehicula nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Leo.",
          "Suscipit.",
          "Facilisis."
      ]
    },
    {
      "name": "Polycore",
      "short_description": "short description Arcu velit massa ornare et at iaculis sodales ornare finibus.",
      "long_description": "long description Felis purus orci posuere adipiscing, vehicula sit dignissim condimentum etiam gravida accumsan arcu neque. Scelerisque blandit tristique sagittis velit mattis curabitur eget id, dignissim viverra vitae dignissim velit gravida consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Laoreet.",
          "Velit.",
          "Amet."
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "short description Sit donec diam dignissim finibus, nunc vulputate nibh orci sollicitudin.",
      "long_description": "long description Viverra non suscipit sem cursus a, consectetur e elit turpis. Eu ante aliquet elit. Mi orci est rhoncus, enim tempor ligula velit tortor. Sit lacinia eros sem in suscipit metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ac.",
          "Lectus.",
          "Massa."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description Tortor sit arcu eget natoque sodales adipiscing pellentesque nisi maximus.",
      "long_description": "long description Sagittis ut sem ornare vitae dignissim massa morbi. Mattis enim finibus eget, quis augue mattis in, diam vulputate orci maximus consectetur blandit, tempus euismod ac fringilla eti quis ipsum elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Porttitor.",
          "Eros.",
          "Nulla."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description Laoreet sodales gravida a ultrices maecenas au. Lectus au risus.",
      "long_description": "long description Proin bibendum enim cras vitae. Tincidunt aenean velit bibendum cursus. Gravida iaculis viverra at vulputate pharetra accumsan. Viverra quisque curabitur pellentesque. Scelerisque faucibus cras morbi e. Mattis vitae a fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Purus.",
          "Dui.",
          "Sit."
      ]
    },
    {
      "name": "Templatek",
      "short_description": "short description Purus i facilisis tempus erat porttitor, hendrerit risus donec tortor.",
      "long_description": "long description Au cras orci orci enim nibh, ipsum pretium ac curabitur lectus orci posuere, sollicitudin pulvinar nisi non leo tristique arcu. Non lobortis gravida lectus elit tempus accumsan, consequat suscipit posuere.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dui.",
          "Arcu.",
          "Sapien."
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "short description Etiam pharetra ornare lacus blandit euismod consectetur mattis quisque massa.",
      "long_description": "long description Mauris purus nisl nam eget sagittis mattis sodales vel e aliquam. Ex lorem a quis tempus sagittis diam imperdiet sit. Lobortis at ipsum dignissim elit lacinia. Morbi ipsum quis vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacus.",
          "Nisi.",
          "Tempor."
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "short description Erat erat pulvinar amet blandit. At suscipit sodales consequat sed.",
      "long_description": "long description Blandit lacinia pellentesque consectetur faucibus. Morbi dignissim quisque pharetra tortor pharetra auctor tortor. Natoque velit dictum ultricies mauris sem iaculis ut placerat vestibulum. Ipsum eti pharetra mi. Est eu pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cras.",
          "Porttitor.",
          "Nunc."
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "short description Eget etiam eti tempor orci aenean, ornare ligula sem fringilla.",
      "long_description": "long description Faucibus lacus blandit ac tempor. Sollicitudin dignissim et placerat, etiam i non condimentum. Maximus id mi iaculis facilisis mollis lectus. Pharetra lacus eti purus tincidunt. Nulla justo sapien morbi diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Commodo.",
          "Dictum.",
          "Neque."
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "short description In nibh purus dui fringilla euismod viverra aliquet mollis proin.",
      "long_description": "long description Nisi turpis morbi tempus dui condimentum i nisl. Nisl non nam condimentum. Sollicitudin finibus condimentum natoque, nibh viverra ut ligula maximus. Nibh erat tortor vestibulum eget. Facilisis gravida lectus vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Lectus.",
          "Vestibulum."
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "short description Nunc pulvinar tempor tristique ultricies pharetra posuere ut mollis lorem.",
      "long_description": "long description Elit erat pulvinar ultricies turpis faucibus ipsum pellentesque ultrices. Velit ipsum quis in, cursus vel i ac. Facilisis mauris dignissim vestibulum dignissim. A velit donec eti suscipit. Mauris finibus amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sem.",
          "Velit.",
          "Aliquam."
      ]
    },
    {
      "name": "Polygan",
      "short_description": "short description Aliquet imperdiet eu iaculis turpis. Leo morbi magna laoreet diam.",
      "long_description": "long description Quisque sed tempor dui sed. Facilisis cras aliquet elit, ex mollis nam arcu natoque ornare. Risus felis sapien fringilla vestibulum dolor est placerat viverra viverra euismod adipiscing viverra hendrerit finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tortor.",
          "Augue.",
          "Viverra."
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "short description Sed ipsum tincidunt vel at tortor dolor curabitur cras vulputate.",
      "long_description": "long description Bibendum scelerisque aliquet sollicitudin turpis. Lacus ex non vulputate pretium erat tempus. Mollis nisl laoreet euismod velit porttitor placerat. Nisi ex at nam. Mi laoreet quis maecenas i lobortis etiam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Massa.",
          "Gravida.",
          "Cursus."
      ]
    },
    {
      "name": "Opticast",
      "short_description": "short description Sollicitudin elementum enim ultricies tristique hendrerit i turpis pretium sapien.",
      "long_description": "long description Dignissim non lobortis sed quis pharetra a, tristique sit mollis sagittis magna eros dignissim enim magna faucibus i aenean, vitae dignissim magna diam laoreet scelerisque justo imperdiet justo sollicitudin ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aenean.",
          "Sit.",
          "Gravida."
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "short description Pretium in eu curabitur dui i aliquam blandit porttitor purus.",
      "long_description": "long description Massa bibendum proin e posuere ex vitae nisl. Sed est justo nisi sit ligula iaculis vel, au at dignissim laoreet placerat leo nunc. Et consectetur et gravida id porttitor porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Maximus.",
          "Proin."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Aenean mattis sagittis massa elementum condimentum quis consectetur sodales elementum.",
      "long_description": "long description Natoque aliquet posuere dictum lectus. Purus sed a cursus ex sodales felis ac, cursus gravida natoque nibh etiam nibh sem pulvinar felis. Tempus massa sit placerat mollis ante est ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisl.",
          "Neque.",
          "Mollis."
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "short description Magna vehicula donec pretium etiam enim gravida ex mi ut.",
      "long_description": "long description Finibus natoque bibendum scelerisque cras mauris. Mattis nunc eti nulla. Tempor vitae auctor felis, tincidunt lacinia consequat lectus vestibulum eros. Gravida pharetra ante felis. Aliquet lobortis erat risus arcu in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "At.",
          "Au.",
          "Tristique."
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "short description Mi scelerisque lacinia auctor nam eros ex aliquet quisque maecenas.",
      "long_description": "long description Elementum diam nisi vel mauris nibh pulvinar arcu bibendum. Purus metus eti est maecenas tempus, quis felis nisl quisque lorem. Neque bibendum tortor tortor lacinia id. Quis tempus aenean eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sapien.",
          "Finibus.",
          "Justo."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Imperdiet sed neque sagittis sollicitudin, mattis elementum dictum e condimentum.",
      "long_description": "long description Sem ultricies pharetra mattis sit sem vel eti eros lorem arcu neque felis scelerisque i i. Maecenas euismod aliquam adipiscing. Non nisi consequat viverra. Leo dignissim bibendum dui ultricies viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "A.",
          "Blandit.",
          "Laoreet."
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "short description Lacinia at i lobortis finibus quis purus imperdiet rhoncus vitae.",
      "long_description": "long description Quis commodo enim tristique id orci, leo lorem dui non massa arcu morbi aliquam. Neque mauris amet gravida, purus a pellentesque finibus laoreet aenean, placerat ornare vitae placerat gravida i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ligula.",
          "Consectetur.",
          "Leo."
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "short description E euismod sollicitudin lorem euismod aenean sit finibus commodo faucibus.",
      "long_description": "long description Quisque augue eti adipiscing felis placerat euismod, sit auctor rhoncus au. Id metus mollis iaculis aliquam ornare elementum, nibh e ultricies quis et a, pulvinar ipsum neque sapien dignissim ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tincidunt.",
          "Ligula.",
          "Purus."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Nisl elementum sapien sagittis dictum sed aliquet purus natoque nam.",
      "long_description": "long description E nunc massa at eget. Sem nisi ut auctor augue turpis, au quisque scelerisque ultrices dui, nibh natoque et neque. A rhoncus sodales proin, tortor mi auctor turpis sed vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Au.",
          "Vulputate.",
          "Maximus."
      ]
    },
    {
      "name": "Sophis",
      "short_description": "short description Curabitur mi vestibulum non velit ipsum morbi nunc non facilisis.",
      "long_description": "long description Tortor nisl pharetra elementum nisl erat tempor, etiam lorem lorem vestibulum. Et ac turpis sem aenean porttitor eti morbi. Enim laoreet eget mollis. Gravida dictum porttitor nam scelerisque pellentesque viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquet.",
          "Ultricies.",
          "Lacinia."
      ]
    },
    {
      "name": "Sealine",
      "short_description": "short description Fringilla laoreet arcu mollis suscipit quis nisi tincidunt ligula posuere.",
      "long_description": "long description Commodo auctor orci donec facilisis natoque placerat, eu posuere cursus nunc iaculis. At elit enim consequat velit proin vehicula at velit, ante accumsan vitae arcu blandit vulputate. Leo id facilisis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Scelerisque.",
          "Leo.",
          "Neque."
      ]
    },
    {
      "name": "Freecast",
      "short_description": "short description Au ante a nam vel quisque maximus quis accumsan ornare.",
      "long_description": "long description Ornare at tortor lacinia lorem. Orci pellentesque turpis pulvinar dictum vestibulum est mattis, ut ut nisl quis, turpis sodales dignissim nibh. Dui mollis scelerisque ultricies suscipit pretium proin etiam risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eu.",
          "Turpis.",
          "Augue."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description At nulla tincidunt mauris sodales curabitur, et mollis fringilla lobortis.",
      "long_description": "long description Dictum bibendum ex imperdiet sit finibus mauris, lobortis donec mi turpis, quisque scelerisque faucibus ultrices massa, sed aenean sit hendrerit. Maximus pulvinar ante massa. Cras sit iaculis consectetur mollis morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Quisque.",
          "Tempor.",
          "Ex."
      ]
    },
    {
      "name": "Templatek",
      "short_description": "short description Maximus laoreet elementum vitae orci vitae ultrices. Velit justo facilisis.",
      "long_description": "long description Proin porttitor posuere pellentesque neque quisque massa consequat, mauris hendrerit eti a aliquet sit. Lobortis consectetur pellentesque aliquet scelerisque ultrices. Dolor amet tincidunt ac. Dignissim pretium natoque diam amet auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dictum.",
          "Diam.",
          "Tempor."
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "short description Ligula placerat eget vitae ligula. Leo mattis neque adipiscing i.",
      "long_description": "long description Purus nulla suscipit rhoncus risus. Vel purus sem nisl morbi arcu ante ante. In faucibus lectus i. Laoreet id a diam tempor felis. Nisl id augue erat. Faucibus vestibulum ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eti.",
          "Ligula.",
          "Sed."
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "short description Laoreet ornare i metus quisque maecenas. Adipiscing euismod sem est.",
      "long_description": "long description Dolor adipiscing cras etiam ultricies vitae euismod facilisis. Ex turpis natoque tempor maximus. Lacinia blandit placerat rhoncus eros lacinia e. Au morbi sollicitudin lacinia dignissim enim arcu nisl metus commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nulla.",
          "E.",
          "Nisi."
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "short description Fringilla nisi tincidunt accumsan natoque viverra purus aenean fringilla eget.",
      "long_description": "long description Elementum tortor adipiscing euismod et tempus lacus sem curabitur. Commodo est aliquet facilisis ut ultrices etiam massa aenean proin massa. Aliquam turpis lorem accumsan sapien leo velit, pulvinar massa sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Leo.",
          "Laoreet.",
          "Et."
      ]
    },
    {
      "name": "Pancast",
      "short_description": "short description Lobortis e viverra mauris augue hendrerit viverra. Morbi pretium ultricies.",
      "long_description": "long description Iaculis gravida in aenean sodales. Arcu ut consequat cras. Lectus aenean eu lorem, eu lorem mattis pellentesque. Ornare mauris dignissim posuere, purus dignissim finibus maecenas mi ac magna tristique consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aenean.",
          "Blandit.",
          "Id."
      ]
    },
    {
      "name": "Nitrocam",
      "short_description": "short description Vitae massa lobortis hendrerit dolor bibendum. Dictum morbi pretium in.",
      "long_description": "long description Porttitor eti porttitor ultrices maximus accumsan tristique neque, eget laoreet bibendum quisque eti ultrices, tortor lorem eget diam elementum. Suscipit au magna leo, eget posuere sed mauris. Dignissim magna magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Felis.",
          "Sapien.",
          "Aenean."
      ]
    },
    {
      "name": "Templatek",
      "short_description": "short description Vel aliquet maximus lobortis vestibulum pharetra neque finibus pharetra sit.",
      "long_description": "long description Dignissim velit vestibulum fringilla finibus posuere non. Hendrerit mollis massa vitae lobortis arcu magna, ornare ornare tincidunt neque vitae velit elementum metus consectetur, morbi finibus facilisis pharetra tempus massa justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mattis.",
          "Maecenas.",
          "Consequat."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Nisi euismod condimentum consectetur vel magna imperdiet quisque nunc au.",
      "long_description": "long description Scelerisque tristique leo dignissim tempus, nam adipiscing leo felis blandit eget. Eget tempus sodales risus nisi pretium pulvinar nulla lacinia nisi enim augue. Tempor aliquam lacus au nisl vestibulum cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ipsum.",
          "Ornare.",
          "Eros."
      ]
    },
    {
      "name": "Sophis",
      "short_description": "short description Curabitur tristique posuere i turpis, sit facilisis eget tincidunt mattis.",
      "long_description": "long description Ut nisl tempor est consequat. Ipsum mattis justo risus non. Tempus orci nam auctor. Pulvinar ac nulla ex aliquet dolor justo. Ut faucibus curabitur vel ligula. Risus mollis est neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquet.",
          "Lobortis.",
          "Nibh."
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "short description Ligula commodo e auctor blandit maecenas condimentum bibendum massa maecenas.",
      "long_description": "long description Tincidunt tristique aliquam euismod massa, imperdiet tristique vehicula cursus commodo felis eu facilisis pharetra ex ultrices eget sit justo vestibulum diam. Ultrices tempor risus posuere blandit dui nibh commodo metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aenean.",
          "Porttitor.",
          "In."
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "short description Nunc fringilla tempus proin quisque, nunc fringilla sed adipiscing aliquet.",
      "long_description": "long description Blandit nisl commodo lacus purus. Magna morbi faucibus nunc natoque enim vel adipiscing, tristique elementum dui iaculis e, suscipit ut lobortis nam. Turpis sagittis mattis ultricies orci diam massa nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Facilisis.",
          "Ornare.",
          "Sodales."
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "short description I in a nam non nibh. Vitae amet mi placerat.",
      "long_description": "long description Arcu sollicitudin consequat viverra tincidunt, est placerat morbi pharetra accumsan sagittis est mollis diam tincidunt dictum. Bibendum non in posuere mi cras ex placerat, morbi elementum iaculis maximus nibh et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Felis.",
          "Adipiscing.",
          "Sagittis."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Massa porttitor ex laoreet cursus nisi augue laoreet tincidunt accumsan.",
      "long_description": "long description Est elit proin a velit curabitur, ante diam eu nunc finibus placerat laoreet est donec id finibus aliquet. Ut leo aliquam curabitur augue sed. Eros pulvinar ultricies suscipit enim imperdiet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisi.",
          "Id.",
          "Nisi."
      ]
    },
    {
      "name": "Britech",
      "short_description": "short description Donec aliquam facilisis bibendum faucibus cursus accumsan ultricies tempor arcu.",
      "long_description": "long description Est nam porttitor facilisis cursus nibh. Proin facilisis maecenas a eros dignissim eu lacinia. Tincidunt nam dictum non nisi enim consectetur eu aliquam proin non i. Tortor blandit diam sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Facilisis.",
          "Erat.",
          "Ex."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Rhoncus condimentum sem lacinia ultricies vulputate rhoncus ex mollis vehicula.",
      "long_description": "long description Proin amet tempus maecenas risus mauris. Nunc ornare enim ex sagittis amet lobortis proin, in gravida est accumsan ultricies euismod risus mollis, condimentum est proin vulputate metus vehicula scelerisque tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eti.",
          "Justo.",
          "Euismod."
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "short description Metus etiam cursus nibh quisque. Consectetur augue nam lobortis lobortis.",
      "long_description": "long description Nam i dolor in vehicula adipiscing pellentesque, leo ante elementum eros aliquam laoreet natoque au, commodo mi pulvinar vel augue, scelerisque pulvinar id pretium ipsum, fringilla lobortis etiam felis et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Commodo.",
          "Tempor.",
          "Amet."
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "short description Massa orci ipsum ut pretium eti eti ipsum dignissim maximus.",
      "long_description": "long description Placerat elit mauris morbi sollicitudin, eget sit metus sed blandit, curabitur non porttitor at elit, suscipit lacinia lacinia hendrerit leo, sollicitudin fringilla lacinia eget, cras vel ex eu ultricies vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sagittis.",
          "Quis.",
          "A."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Blandit magna mollis vel massa bibendum ligula. Imperdiet cursus eros.",
      "long_description": "long description Ac mattis pulvinar dolor quisque. Scelerisque diam tempor lacus leo eti a pellentesque sem vestibulum adipiscing, nunc elementum augue natoque accumsan ex lacinia tempus mauris adipiscing leo viverra tortor auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consequat.",
          "Magna.",
          "Mattis."
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "short description Gravida elit etiam non e maecenas hendrerit ut laoreet condimentum.",
      "long_description": "long description Velit ultricies quis lacinia aliquet diam, sed felis mattis hendrerit proin facilisis imperdiet natoque lectus viverra. Accumsan elementum ipsum erat, justo a consequat etiam at. Condimentum natoque posuere aliquam mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sed.",
          "Proin.",
          "Arcu."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description Amet lobortis maecenas enim erat aliquam. Gravida tempus facilisis porttitor.",
      "long_description": "long description Aliquam i dolor faucibus consequat sollicitudin a, justo finibus sagittis dui, sollicitudin tristique massa vulputate iaculis sodales vestibulum ultricies amet. Consectetur adipiscing rhoncus cursus finibus amet. Tincidunt commodo neque blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Id.",
          "Fringilla.",
          "Sodales."
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "short description Hendrerit sollicitudin vitae amet nisl aliquet fringilla. Metus finibus commodo.",
      "long_description": "long description Etiam maximus ultricies iaculis elit risus velit. Auctor consequat quis lacinia. Sagittis nam imperdiet lacus vel ipsum, elit donec eros massa etiam metus lobortis, pellentesque turpis neque vel non quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mauris.",
          "Gravida.",
          "Vitae."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description Vel e maximus proin metus mauris pretium porttitor faucibus commodo.",
      "long_description": "long description Pellentesque lectus aliquam neque risus, ex nunc risus elementum curabitur nibh, pellentesque facilisis leo sollicitudin et ligula dictum placerat sollicitudin leo faucibus i, mattis ultricies massa sem ante scelerisque orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Etiam.",
          "Proin."
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "short description Proin consequat sed orci erat. Dui rhoncus nulla nam maximus.",
      "long_description": "long description Mi mauris hendrerit leo et, consequat magna commodo sollicitudin, cursus velit rhoncus cras diam, posuere iaculis nulla justo cras id morbi aliquam, arcu aliquet ut et nisl ante orci sem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "In.",
          "Sapien.",
          "Laoreet."
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "short description Sodales mollis ultricies dui bibendum dictum au. Dictum felis proin.",
      "long_description": "long description Metus sollicitudin sed ex lorem eget sagittis etiam et arcu sagittis ultricies. Lacinia etiam leo neque aenean pulvinar, vitae aliquet nisl nisl. Pretium ligula e lectus nulla ultrices arcu justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Natoque.",
          "Massa.",
          "Ultricies."
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "short description Enim pulvinar euismod ut maximus. Vulputate dignissim ac tincidunt placerat.",
      "long_description": "long description Condimentum lorem ut magna lacinia lorem. Dolor dolor amet maximus. Ante etiam mollis leo felis, au gravida imperdiet scelerisque, diam e enim ultrices curabitur. Leo tincidunt vel bibendum nam tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Adipiscing.",
          "Cras."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Auctor scelerisque eti nulla est dictum sodales justo purus nunc.",
      "long_description": "long description Posuere vestibulum ac pharetra metus. Ipsum diam porttitor imperdiet mollis, posuere dignissim natoque nisl quisque et finibus nulla sodales pulvinar, ex bibendum maximus dolor. Vitae tristique placerat nisi lorem ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Rhoncus.",
          "Dui.",
          "Consectetur."
      ]
    },
    {
      "name": "Pancast",
      "short_description": "short description Aliquet aenean lectus mauris nisl. Purus pellentesque massa sollicitudin est.",
      "long_description": "long description Dictum gravida donec purus felis pharetra sapien, risus sit eu lacinia, tempor porttitor turpis natoque dui curabitur natoque e, sodales ipsum tempus maximus, elit eros turpis placerat. Condimentum vehicula lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Adipiscing.",
          "Velit.",
          "Ac."
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "short description Ut quis mauris ipsum vulputate scelerisque. Augue nisi nunc imperdiet.",
      "long_description": "long description Turpis ultricies auctor i lorem blandit orci finibus blandit lectus dignissim elit risus porttitor dolor lacinia sagittis, lobortis ex lobortis vehicula pretium justo proin lectus pretium mi mi nibh ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Nam.",
          "Amet."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Sollicitudin a facilisis eu tristique elementum morbi aenean nisi lectus.",
      "long_description": "long description Lobortis leo dolor condimentum cursus bibendum nulla, purus etiam finibus auctor donec vitae cursus, mattis leo lacus lorem vel, iaculis e gravida velit euismod euismod neque aenean fringilla ex felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eros.",
          "Facilisis.",
          "Amet."
      ]
    },
    {
      "name": "Nitrocam",
      "short_description": "short description Gravida vehicula nisi vehicula nibh ligula dictum. A sodales dictum.",
      "long_description": "long description Scelerisque condimentum tortor blandit mattis. Curabitur pharetra sed ornare auctor vitae, neque nisl velit massa, neque viverra natoque id faucibus orci. Orci et lacinia suscipit fringilla massa laoreet purus lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Gravida.",
          "Ornare.",
          "Ornare."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description Finibus magna consectetur mattis pellentesque. Tempus pellentesque sodales eti ac.",
      "long_description": "long description Ac i hendrerit orci est faucibus. Justo tempus consectetur euismod proin vitae mauris placerat, erat lectus ac id donec, tempor ante id faucibus. Pretium lectus faucibus proin. Adipiscing au leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquet.",
          "Non.",
          "Blandit."
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "short description Mattis tortor aenean sodales tincidunt scelerisque fringilla finibus tristique eget.",
      "long_description": "long description Commodo vulputate cursus quisque sit. Non i ante scelerisque ex pharetra, a cursus dignissim porttitor vulputate lacinia turpis nibh, dolor lobortis au euismod ac. Gravida ut lacus i sodales ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Viverra.",
          "Maximus.",
          "Suscipit."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Curabitur elit lectus donec leo. Vulputate nibh curabitur aliquam id.",
      "long_description": "long description Nulla in scelerisque ultrices rhoncus ultricies mi, viverra ligula sem sem nunc ante. Ultrices finibus ante rhoncus. Tincidunt neque tortor diam elit viverra finibus vulputate dolor, consequat aliquam dictum e.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Justo.",
          "Nulla.",
          "Ornare."
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "short description Tristique viverra amet aliquam lacus natoque imperdiet leo sem placerat.",
      "long_description": "long description Placerat arcu adipiscing elit mi enim. Mi posuere eti enim blandit justo felis, finibus maecenas ac fringilla magna lacinia etiam, imperdiet vestibulum eget elit, ante sit eti mollis nunc purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sodales.",
          "Consectetur.",
          "Lacinia."
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "short description Dignissim i metus placerat leo, risus lectus dictum diam elementum.",
      "long_description": "long description Ante cras imperdiet blandit vehicula lacinia ornare nam dolor. Ultrices elit eu ac tortor condimentum placerat. Cursus laoreet lacus condimentum mattis quis. Auctor ultricies quis placerat. Mi suscipit lacinia et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Est.",
          "Morbi.",
          "Auctor."
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "short description Ut condimentum pretium dolor lobortis. Laoreet scelerisque facilisis dignissim tempus.",
      "long_description": "long description Aliquet vitae vehicula leo nibh facilisis ac. Suscipit neque in elit. Vulputate risus velit aliquam quis felis, eget lacinia tristique eti. Mauris iaculis ante pellentesque maecenas a et diam lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consequat.",
          "Risus.",
          "Mi."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Maximus elementum sit iaculis eget, consectetur sed vestibulum sollicitudin bibendum.",
      "long_description": "long description At euismod tempus dictum dictum, tincidunt proin felis amet non nam pulvinar lobortis, fringilla in purus arcu. Morbi erat commodo in. Consequat facilisis magna magna non porttitor aenean ante dolor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tristique.",
          "Sem.",
          "Leo."
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "short description Tincidunt ultricies mollis nisi nibh donec fringilla turpis diam au.",
      "long_description": "long description Viverra iaculis enim eu tincidunt morbi sit proin. Turpis vehicula sem ultrices adipiscing felis. Sem purus pulvinar dignissim tortor. Finibus velit nunc sollicitudin maximus vehicula ligula ultrices facilisis tincidunt nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ex.",
          "Ut.",
          "Massa."
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "short description Mauris dictum e eget adipiscing diam, lorem turpis eu lectus.",
      "long_description": "long description Tortor facilisis commodo accumsan cras laoreet, lacus id adipiscing tempus pulvinar iaculis, diam mollis eti id tincidunt, scelerisque dignissim quisque arcu auctor donec ipsum curabitur vel nisi ultrices suscipit tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "A.",
          "Tempus.",
          "Sollicitudin."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Scelerisque vel lacinia ipsum elementum. Au laoreet purus imperdiet et.",
      "long_description": "long description In etiam blandit sapien nisi. Cursus in consequat rhoncus ornare nunc velit mattis massa adipiscing aliquet. Mattis nibh nisi nunc vehicula pellentesque pulvinar, elementum velit sed ac, consequat vestibulum ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vestibulum.",
          "Commodo.",
          "Proin."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Ultrices nulla faucibus et orci. Ornare nunc elementum massa nulla.",
      "long_description": "long description Arcu nisl lobortis tincidunt amet iaculis, natoque vitae iaculis ultrices neque. Sapien consectetur ornare justo sagittis maecenas. Scelerisque ultricies dignissim orci et bibendum commodo augue bibendum, tincidunt velit hendrerit fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Tempus.",
          "Quis."
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "short description Et laoreet vitae leo id turpis quisque vel augue finibus.",
      "long_description": "long description Nulla cursus scelerisque lacinia sapien lorem nisi auctor quisque sodales felis suscipit condimentum pulvinar id, commodo hendrerit pellentesque ante dui dictum vulputate. Eget in lacinia neque aenean, lectus commodo velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mollis.",
          "Tincidunt.",
          "Vitae."
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "short description Iaculis pulvinar tempor sagittis elit. Rhoncus ac condimentum condimentum ut.",
      "long_description": "long description Lobortis porttitor au proin dolor morbi consectetur sem orci. Laoreet massa ipsum ultrices. Sed morbi faucibus vel. Commodo eget quisque et laoreet, amet lacinia scelerisque tempus consectetur vulputate au au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eget.",
          "Velit.",
          "Purus."
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "short description Etiam risus adipiscing metus i, sagittis tincidunt a tristique scelerisque.",
      "long_description": "long description Sapien imperdiet vehicula enim dictum. Neque i sem maximus i, gravida gravida in at vitae quisque vel mollis pulvinar. Magna lorem eti eu mollis elementum. Ac erat auctor i orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Velit.",
          "Augue.",
          "Augue."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Nibh est pellentesque nam quis, metus elit ultrices gravida consequat.",
      "long_description": "long description Id e in mi pharetra pellentesque magna, tincidunt mauris posuere donec sem, velit i nisl mollis, auctor ornare est leo, iaculis eget diam tempor sollicitudin. Imperdiet pellentesque pretium metus pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "A.",
          "Vehicula."
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "short description Arcu lacus pulvinar in finibus vulputate. Fringilla bibendum leo sollicitudin.",
      "long_description": "long description Euismod metus amet eros adipiscing commodo pharetra ultrices, tortor vitae nisl ex diam metus placerat vehicula eros justo nunc. Eros dictum tincidunt diam. Sit lectus adipiscing porttitor a nisl augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ut.",
          "Hendrerit.",
          "In."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description Augue vel lectus orci donec donec faucibus. I lacinia diam.",
      "long_description": "long description Dolor suscipit lobortis condimentum ac aenean. Viverra vitae i aliquam finibus nulla. Ac purus sem felis justo ante massa. Nibh consectetur quis faucibus quis. Orci neque ultrices pulvinar ipsum justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mauris.",
          "Velit.",
          "Ornare."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Lorem aenean pulvinar mauris rhoncus ex mattis in nisl eros.",
      "long_description": "long description Ultricies bibendum ac sem eti ultricies, commodo et viverra etiam hendrerit commodo nam hendrerit. Non felis enim fringilla laoreet. Porttitor accumsan eti condimentum mauris proin iaculis, suscipit porttitor risus vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "At.",
          "Vestibulum.",
          "Facilisis."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Tempor fringilla dui mollis ut eros. Est ipsum ex orci.",
      "long_description": "long description Nibh lacinia purus tristique mollis pretium. Laoreet tortor tristique accumsan. Purus curabitur ex lorem. Velit et morbi mauris lacus. Nisi quis natoque magna accumsan ultrices sit condimentum iaculis est sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Faucibus.",
          "Faucibus.",
          "Massa."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Pulvinar et au metus elementum. Fringilla mollis nibh ut felis.",
      "long_description": "long description Ultricies ligula placerat ipsum au, fringilla arcu mauris mollis hendrerit, posuere eu elit porttitor iaculis magna nunc ut leo. Arcu vehicula pharetra gravida mauris justo vehicula morbi. Hendrerit aliquet amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tortor.",
          "Non.",
          "Ultrices."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Euismod eget eu amet tortor euismod purus proin tristique pretium.",
      "long_description": "long description Posuere i eu tempus sed nibh mattis. Quis ornare lacus sed dui rhoncus. Aenean consequat euismod vulputate, massa mattis felis quis. Placerat imperdiet velit scelerisque risus. Eget lacinia mi eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Posuere.",
          "Tortor.",
          "Pretium."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Placerat tempus natoque ante risus vel, laoreet bibendum erat tortor.",
      "long_description": "long description Bibendum a aliquam sagittis est dictum. Eget et lacinia sodales dui. Dictum hendrerit tristique vitae et adipiscing imperdiet, mollis tincidunt arcu hendrerit dui dui augue accumsan curabitur au finibus maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eros.",
          "Purus.",
          "Consectetur."
      ]
    },
    {
      "name": "Storex",
      "short_description": "short description Sodales et aenean tortor ex. Auctor sapien sed porttitor mauris.",
      "long_description": "long description Cursus a accumsan purus eti quis accumsan suscipit ex turpis erat nisl felis sit iaculis eros sem lacinia vitae metus e. Nisl non est condimentum. Magna sed hendrerit laoreet proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "Etiam.",
          "At."
      ]
    },
    {
      "name": "Solexis",
      "short_description": "short description At sagittis magna magna purus, adipiscing mauris natoque consequat elit.",
      "long_description": "long description Sed facilisis cursus ex nulla purus. Felis adipiscing scelerisque rhoncus diam augue morbi, au augue au tristique. Risus orci etiam dui, faucibus fringilla donec consequat dictum nunc aliquam i laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Risus.",
          "Non.",
          "Quisque."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Tincidunt scelerisque massa massa laoreet sed nisl non et quis.",
      "long_description": "long description Vitae etiam dictum donec lacinia. Ante purus sem i aliquet. Mollis blandit natoque dictum. Aenean blandit leo diam aliquet. Nisi curabitur fringilla mattis vulputate augue est proin. Tempus pharetra cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Finibus.",
          "Lacinia.",
          "Pharetra."
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "short description Neque tempor id mollis ornare eros. Hendrerit diam tempus mauris.",
      "long_description": "long description Faucibus quis nunc mattis quisque pretium lacus, pretium mattis mi sit mauris iaculis finibus arcu erat amet, vitae accumsan eget gravida massa pharetra. Vehicula est elementum risus dui maecenas cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Et.",
          "Lacinia.",
          "Tincidunt."
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "short description Ornare sollicitudin augue non facilisis. Nunc iaculis in dignissim imperdiet.",
      "long_description": "long description Finibus dolor id vehicula neque, adipiscing etiam sollicitudin maximus ornare consectetur proin lacinia nunc tempor leo ipsum aenean eros pulvinar accumsan lacinia nisl. Fringilla vel mi adipiscing au nisl aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Elit.",
          "Diam.",
          "Justo."
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "short description Mattis morbi eu posuere ipsum sem turpis. Consectetur sem augue.",
      "long_description": "long description Scelerisque augue finibus diam fringilla vehicula. Neque tempor purus aenean ut, dui massa vulputate aenean vulputate, commodo massa mi a porttitor. Imperdiet adipiscing augue gravida lacus elit amet elementum nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Porttitor.",
          "Au.",
          "Donec."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Ipsum morbi tempor nibh scelerisque tortor, auctor justo etiam eu.",
      "long_description": "long description Leo suscipit felis mi accumsan massa. Sapien nunc nunc ac maximus sagittis posuere suscipit, enim in placerat erat nunc i i. Etiam tempus purus pharetra quisque mattis sed auctor laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Iaculis.",
          "Accumsan.",
          "Vitae."
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "short description Diam dui tempor laoreet lacinia. Ligula ante augue mollis maecenas.",
      "long_description": "long description Dictum lacinia proin donec dignissim ornare, sollicitudin gravida vestibulum ac, dolor curabitur amet lacinia non dui, bibendum sed tempor aenean justo, eti ex tincidunt porttitor lobortis mi, ut sollicitudin in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Proin.",
          "Quis.",
          "Velit."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Vulputate consequat arcu fringilla etiam elementum pellentesque elementum non e.",
      "long_description": "long description Natoque nam hendrerit cras iaculis condimentum, lacinia euismod finibus est scelerisque nisi. Sagittis aliquam tortor viverra aenean dignissim sollicitudin aliquam nibh au. Dignissim natoque ac neque. Eros sem ultricies nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquet.",
          "Donec.",
          "Mauris."
      ]
    },
    {
      "name": "Britech",
      "short_description": "short description Auctor euismod est at est. Condimentum nisi ante dictum amet.",
      "long_description": "long description Aliquet imperdiet rhoncus pretium turpis rhoncus consequat mollis magna commodo vestibulum sapien placerat augue condimentum velit eti posuere elementum. Lacus sit pretium iaculis, ultrices eros scelerisque proin. Nisi laoreet ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nunc.",
          "Finibus.",
          "Dui."
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "short description Mollis rhoncus accumsan nam posuere arcu proin i i au.",
      "long_description": "long description Suscipit tempor at justo scelerisque nam, eros faucibus e massa curabitur amet aenean, lacinia aliquam massa tempus nibh, maecenas nisl vulputate ultricies eu posuere consequat sapien nulla laoreet faucibus euismod.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Faucibus.",
          "Sem.",
          "Neque."
      ]
    },
    {
      "name": "Sophis",
      "short_description": "short description Au cursus proin diam pellentesque nunc eros eros neque ipsum.",
      "long_description": "long description Ut diam mauris dictum ipsum sollicitudin. Curabitur nibh nulla euismod lacinia. Ut tempor euismod ornare rhoncus. Au ornare eu porttitor. Natoque sollicitudin mauris blandit. Viverra diam ante ligula imperdiet sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eti.",
          "Enim.",
          "Vel."
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "short description Nulla at nisl tortor vulputate elementum cursus mauris neque pretium.",
      "long_description": "long description Facilisis dignissim ut pellentesque rhoncus proin, lectus eget adipiscing ipsum, ipsum purus nibh purus natoque, gravida auctor porttitor tincidunt nisl lobortis mi dui dui non lorem dictum. Placerat amet etiam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "Massa.",
          "A."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Placerat a arcu felis est fringilla. In dolor blandit amet.",
      "long_description": "long description Tincidunt dolor vitae consequat morbi condimentum, nam cursus curabitur a finibus. Laoreet risus lobortis neque enim nibh augue. Faucibus donec hendrerit lectus i aliquam enim ac etiam, adipiscing eget est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Leo.",
          "Quis.",
          "Consectetur."
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "short description Adipiscing dui sapien tempus dui justo commodo. Risus vel est.",
      "long_description": "long description Diam dictum eget porttitor lacinia pellentesque sed hendrerit, turpis amet tortor iaculis maximus blandit ultricies finibus nam tempor adipiscing, nam curabitur faucibus morbi, pulvinar morbi elit consequat. Lacinia ultrices eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Euismod.",
          "Eu.",
          "Consequat."
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "short description Sed faucibus a etiam vulputate pretium mauris. At eti vulputate.",
      "long_description": "long description Id porttitor nisl ultricies lacus nisl. Natoque hendrerit posuere dui, euismod at et aliquet, iaculis porttitor massa rhoncus. Sodales lobortis blandit ornare sed. Lorem sapien magna eti, neque etiam au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacus.",
          "Amet.",
          "Velit."
      ]
    },
    {
      "name": "Sophis",
      "short_description": "short description Euismod aliquet est velit donec quisque. Aenean viverra at commodo.",
      "long_description": "long description Sed nulla massa tortor vel, aenean e ex sed sagittis dui sed e dui. Massa in quisque lacinia, auctor imperdiet leo et etiam, vestibulum vehicula morbi cursus. At ultricies ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Nulla.",
          "Sem."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Eu nibh cras lacinia ornare e nibh in mattis erat.",
      "long_description": "long description Sollicitudin maecenas neque lorem amet blandit morbi quisque justo aliquet. Eu ultricies scelerisque curabitur. Laoreet viverra mi tristique vitae purus auctor, massa nisl tortor tincidunt hendrerit porttitor. Finibus vehicula lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Commodo.",
          "Sapien.",
          "Euismod."
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "short description Curabitur placerat enim erat consectetur lobortis, metus aenean sapien est.",
      "long_description": "long description Bibendum faucibus faucibus massa adipiscing. Mi tristique tincidunt elementum. Bibendum euismod dictum sollicitudin lacinia. Natoque mollis orci sollicitudin etiam viverra nam bibendum ante mauris bibendum ac ligula, mattis scelerisque magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Laoreet.",
          "Blandit.",
          "Rhoncus."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Proin ipsum sit vestibulum porttitor. Ac dignissim elementum tincidunt eros.",
      "long_description": "long description Hendrerit et quis ex augue blandit euismod erat est turpis vitae, elementum cursus vestibulum pellentesque. Vel justo ante cras donec. Vitae est metus id augue, erat ultricies felis finibus commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Facilisis.",
          "Laoreet."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Risus enim ligula a fringilla imperdiet bibendum sapien quis cursus.",
      "long_description": "long description Au tempor lorem risus lobortis. Lorem metus placerat diam imperdiet id facilisis augue erat hendrerit, viverra laoreet pellentesque ligula. Velit eget aliquam velit diam, blandit massa bibendum nulla quisque consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eu.",
          "Posuere.",
          "Ultricies."
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "short description Lacus lacus maximus commodo enim proin ante consectetur au orci.",
      "long_description": "long description Suscipit faucibus vulputate consectetur sit aliquam hendrerit vulputate dui e pharetra, condimentum lorem consectetur elementum imperdiet hendrerit sollicitudin pretium. Mi elit mi turpis ornare pharetra commodo. Natoque magna pretium ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Gravida.",
          "Nunc.",
          "Ac."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Cursus eu sollicitudin fringilla blandit mauris ipsum massa maximus lobortis.",
      "long_description": "long description Aliquet eget au dui tristique ante sit sed id. Dui amet mattis nunc natoque maecenas cras dignissim massa lobortis purus. Diam nam viverra felis. Etiam at tristique elementum tempus porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pellentesque.",
          "Tempus.",
          "Lorem."
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "short description Vehicula lorem pulvinar sapien nunc cras pulvinar, mauris au id.",
      "long_description": "long description Vehicula elementum i ante i ultricies nam lacinia. Mollis ipsum eros fringilla ut, consequat au blandit amet, ac massa lacinia scelerisque, consequat iaculis au enim, magna etiam ipsum porttitor gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Proin.",
          "Viverra.",
          "Accumsan."
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "short description Amet tortor maecenas vel massa proin, e vitae velit sapien.",
      "long_description": "long description Sapien sit gravida eu fringilla. Facilisis at mauris non risus maecenas. Maecenas maecenas sagittis posuere curabitur ultrices enim auctor sit donec orci sagittis ornare tortor faucibus est. Sed condimentum id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Consectetur.",
          "Purus."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Maecenas condimentum elementum orci enim. Aenean at massa orci lacinia.",
      "long_description": "long description Sapien dictum sollicitudin felis quisque hendrerit morbi sed. Turpis arcu curabitur ligula euismod, posuere felis ante ex i. Est nisi vitae mauris. Curabitur consequat mollis sapien erat scelerisque arcu aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Enim.",
          "Facilisis.",
          "Et."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Pretium eros viverra ornare rhoncus hendrerit in placerat mauris mattis.",
      "long_description": "long description Dui nunc nunc mollis dignissim mi condimentum porttitor sodales, ipsum lorem velit condimentum nibh diam lacinia, arcu tempus in lacinia i adipiscing, purus consequat et placerat porttitor lobortis natoque ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Curabitur.",
          "Vehicula.",
          "Cras."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Aliquam erat sagittis sed accumsan. Scelerisque faucibus auctor au finibus.",
      "long_description": "long description Condimentum lorem dignissim purus pharetra leo pellentesque e sagittis tristique nunc pulvinar, ultrices purus i maximus ultricies aenean e sodales consequat sit et nunc. Hendrerit eget bibendum tortor lectus erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisl.",
          "Accumsan.",
          "Lobortis."
      ]
    },
    {
      "name": "Sophis",
      "short_description": "short description Posuere sit eros curabitur lacinia ligula tortor donec pulvinar placerat.",
      "long_description": "long description Sapien mi turpis blandit aliquam iaculis tempus iaculis, justo ante nibh ipsum nibh aliquam in, nam vitae ipsum sodales nunc ut mollis magna dictum. Facilisis vulputate accumsan nibh rhoncus elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eros.",
          "Donec.",
          "Natoque."
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "short description Quis commodo maecenas adipiscing metus, elementum vel dolor fringilla ultricies.",
      "long_description": "long description Tempor elit pharetra etiam purus. Enim eu metus consectetur iaculis, ex bibendum donec eget mauris in. Ipsum mauris suscipit lobortis aliquam, dui at tortor mauris ornare. Massa dui elit non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Augue.",
          "Tempus.",
          "Non."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Dictum proin non leo posuere orci eget diam cras tempor.",
      "long_description": "long description Aliquet viverra quis lobortis at quis placerat rhoncus at mi dictum pellentesque ante gravida, sem nunc elementum a arcu, ac placerat magna leo arcu. Quis sodales ut tempor pretium posuere.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Tristique.",
          "Mollis."
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "short description Iaculis nisl consequat imperdiet cras vitae commodo finibus hendrerit lacinia.",
      "long_description": "long description Bibendum gravida dolor pretium sit arcu finibus. Velit finibus id id, au imperdiet nibh au ultricies, non bibendum a ex sodales. Blandit dolor tristique magna felis vitae sodales i arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "At.",
          "Massa.",
          "Bibendum."
      ]
    },
    {
      "name": "Sophis",
      "short_description": "short description Finibus faucibus justo donec ornare nisi morbi. In vel hendrerit.",
      "long_description": "long description Curabitur dictum hendrerit lectus amet consectetur, rhoncus lacus at natoque. Eu imperdiet iaculis suscipit gravida mollis. Lobortis at nisi euismod, lacinia arcu amet metus vulputate scelerisque ornare cras posuere tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ligula.",
          "Dolor.",
          "Eti."
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "short description Mi suscipit tempus erat aenean. Et bibendum morbi faucibus proin.",
      "long_description": "long description Ex ex tincidunt ante placerat pulvinar nibh, laoreet rhoncus faucibus placerat sagittis. Ornare aliquam nunc nisl ornare. Sapien sed ante maximus viverra neque neque. Donec lacus dignissim sagittis auctor ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Ultricies.",
          "Viverra."
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "short description Eros blandit tortor tristique nulla, purus vulputate mollis consequat risus.",
      "long_description": "long description I neque turpis lacinia finibus tempor consectetur. Natoque ligula lacus eti lorem laoreet eti cras tincidunt quis, posuere pellentesque auctor leo vehicula sollicitudin dui erat. Augue tortor elementum mattis id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eti.",
          "Pellentesque.",
          "Hendrerit."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Sapien gravida maecenas pharetra purus. Orci mi arcu auctor diam.",
      "long_description": "long description Velit condimentum aenean rhoncus vulputate iaculis. Gravida ultrices ac consectetur proin natoque. Metus lobortis sed laoreet suscipit vulputate. Pretium aliquet consequat sed eti imperdiet justo. Tortor bibendum risus est nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sit.",
          "I.",
          "Vehicula."
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "short description Erat magna elementum ac lacus arcu, dui sapien dolor mollis.",
      "long_description": "long description Gravida nulla consectetur maecenas ante pharetra sem tempus at cursus nulla, lacinia enim ligula tempor natoque mattis imperdiet vehicula mollis tincidunt neque erat condimentum lacus scelerisque. Nulla quis etiam lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tristique.",
          "Consequat.",
          "Dictum."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Vestibulum scelerisque scelerisque mollis auctor. Vehicula nunc dignissim ex adipiscing.",
      "long_description": "long description Sem proin vitae finibus vitae lobortis accumsan sollicitudin mauris. Mollis a lobortis tempus ut orci, ante imperdiet iaculis dui dui scelerisque tincidunt euismod magna sollicitudin commodo, accumsan laoreet eu pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempus.",
          "Pretium.",
          "In."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Amet ultrices mi pharetra bibendum, orci felis consequat laoreet bibendum.",
      "long_description": "long description Tempor cras tristique euismod nisl sapien ultrices. Lacus in aenean gravida consectetur dignissim nibh neque aliquam. Est sapien nisi nibh, aliquet suscipit gravida pulvinar erat eget nulla mattis porttitor metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Faucibus.",
          "Dignissim.",
          "Augue."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Aenean a eti ante accumsan diam sagittis vehicula posuere turpis.",
      "long_description": "long description Magna est dui elementum justo. Nunc augue purus fringilla sodales. Augue curabitur ultrices accumsan hendrerit arcu posuere gravida. Auctor hendrerit eti natoque i euismod, tincidunt laoreet natoque sapien dignissim au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nulla.",
          "Consequat.",
          "Curabitur."
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "short description In proin aliquet cras pharetra cursus, mattis vel natoque eti.",
      "long_description": "long description Cras eti iaculis erat lacus felis. Sagittis non hendrerit ligula. Pretium ultricies magna sodales mauris aenean gravida quisque. Pretium amet sollicitudin lacinia tristique consectetur neque, metus ornare vestibulum enim lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vestibulum.",
          "Nulla.",
          "Euismod."
      ]
    },
    {
      "name": "Polygan",
      "short_description": "short description Finibus vestibulum felis sagittis non. Aliquam etiam id felis justo.",
      "long_description": "long description Commodo laoreet imperdiet et sed. Sapien lacus in turpis sit dignissim, non natoque blandit vulputate. Aenean maximus pellentesque nibh ut, ante condimentum commodo aenean. Eti nulla eros tempus consequat rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Magna.",
          "Sollicitudin.",
          "Augue."
      ]
    },
    {
      "name": "Pancast",
      "short_description": "short description Eti maximus felis au nam felis condimentum purus hendrerit et.",
      "long_description": "long description Quis eros nulla auctor nam. Sed mollis aliquet in facilisis, eu quisque consectetur maecenas accumsan cras eros finibus, maximus porttitor velit elit magna dui posuere cras ut ultrices sagittis nisl.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Massa.",
          "Mollis."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Risus amet justo natoque mauris morbi quisque. Pellentesque i felis.",
      "long_description": "long description Nam posuere i cursus viverra pulvinar. Sodales posuere vehicula lacinia. Vulputate lobortis tempor enim proin orci morbi, ultrices curabitur arcu elementum ligula, pellentesque suscipit accumsan ante, morbi metus imperdiet maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nam.",
          "Scelerisque.",
          "Faucibus."
      ]
    },
    {
      "name": "Storex",
      "short_description": "short description Vitae i vehicula mi vulputate curabitur aliquam ornare mattis posuere.",
      "long_description": "long description Aliquet vestibulum lorem vehicula aliquam ante. Tempus justo aliquet at, imperdiet turpis consectetur pharetra dolor. Orci nulla suscipit justo, eros sodales justo nulla quisque. Cursus ac au tempus ultricies eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maecenas.",
          "Dignissim.",
          "Maximus."
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "short description Ornare enim finibus i dignissim turpis laoreet posuere lectus nisl.",
      "long_description": "long description Quisque commodo consequat tempor aliquet augue, tempus ex pharetra imperdiet maximus, erat eti ultricies condimentum dui. Natoque vehicula bibendum viverra. Facilisis elit massa lacinia tortor nulla condimentum aenean auctor non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Velit.",
          "Dui.",
          "Lorem."
      ]
    },
    {
      "name": "Sealine",
      "short_description": "short description Ipsum placerat amet pellentesque posuere. Ac amet ex adipiscing i.",
      "long_description": "long description Aliquet sit lacinia placerat ultrices quis. Enim et nisi nisi nunc, imperdiet nisi blandit eget, elementum eros donec massa vehicula condimentum ut vehicula, vitae viverra est aliquam maecenas maecenas lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Purus.",
          "A.",
          "Leo."
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "short description Ex aliquet dignissim risus ultricies. Leo maecenas consequat erat lobortis.",
      "long_description": "long description Suscipit adipiscing neque maximus accumsan. Ex curabitur nam felis sollicitudin. Facilisis ipsum natoque i, nam nulla lacinia pellentesque, i vulputate quisque vel dignissim ac quis maecenas ultrices. Mauris commodo in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Vitae.",
          "Ac."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Massa neque tempor erat lacinia maecenas. Dui magna maximus a.",
      "long_description": "long description Ligula quisque commodo ipsum aenean consectetur risus tempus aliquam neque est. Turpis vel ligula augue massa mauris. Blandit consectetur vestibulum faucibus consequat ultrices. Curabitur aliquet scelerisque tristique dolor sapien e.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Mauris.",
          "Eti."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Tempor vitae tincidunt facilisis fringilla, elit est hendrerit elementum sagittis.",
      "long_description": "long description Augue maecenas curabitur aliquet enim, e id cursus eti commodo. Vestibulum velit commodo tempus lorem, dictum risus fringilla gravida porttitor, nunc i consequat non lacinia elit auctor adipiscing gravida aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Tempor.",
          "Auctor."
      ]
    },
    {
      "name": "WestGate",
      "short_description": "short description Dui erat bibendum tristique tortor pulvinar euismod hendrerit cras placerat.",
      "long_description": "long description Aenean suscipit quis mauris leo tristique. Consectetur eros justo et elementum bibendum eget ut. E euismod adipiscing in nunc purus. Vitae bibendum e augue vehicula a curabitur massa euismod eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Amet.",
          "Tristique.",
          "Vel."
      ]
    },
    {
      "name": "Nitrocam",
      "short_description": "short description Metus dolor ante nam ex, risus elit purus eros ultrices.",
      "long_description": "long description Euismod lorem suscipit massa donec non tortor posuere. Eget auctor lacinia euismod lobortis ante tristique, nam vel pretium accumsan. I blandit pharetra cras porttitor ipsum, nibh massa lectus enim ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultrices.",
          "Quis.",
          "Vulputate."
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "short description Velit tristique sapien rhoncus aliquam ligula eget risus dui nisl.",
      "long_description": "long description Sapien ornare fringilla pellentesque iaculis tempor iaculis a natoque mauris, lacus aenean est eros fringilla faucibus mollis posuere ante est iaculis. Amet dolor sem ex vehicula vehicula lectus gravida lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Facilisis.",
          "Ac.",
          "Ante."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Mi faucibus ligula cras suscipit laoreet tincidunt eu ligula sem.",
      "long_description": "long description Tempus viverra ornare justo a hendrerit condimentum ante lacinia. Et in at vel proin scelerisque. Sodales purus eros a, mollis tempor et elit, pretium etiam lobortis id etiam purus vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vehicula.",
          "Etiam.",
          "Ultrices."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Tincidunt au suscipit felis ut bibendum, curabitur pharetra nibh vel.",
      "long_description": "long description Orci nunc nisi tempor nulla massa pellentesque justo massa mauris. Lacinia elementum elementum au, iaculis imperdiet natoque tempor euismod id consequat imperdiet velit e ultrices pellentesque dictum pretium ligula id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Sodales.",
          "Tempor."
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "short description Imperdiet finibus magna metus faucibus. Mattis erat scelerisque ipsum auctor.",
      "long_description": "long description Lectus tempus mattis etiam turpis eget. Eget nibh facilisis magna, et eros sagittis massa justo est lorem, e at ipsum arcu natoque euismod aenean. Finibus vehicula gravida metus in ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Sit.",
          "Est."
      ]
    },
    {
      "name": "Celmax",
      "short_description": "short description Enim dignissim risus in massa suscipit vestibulum lorem pellentesque e.",
      "long_description": "long description Justo iaculis a faucibus sollicitudin ultrices fringilla mattis vel, felis blandit magna velit in. Turpis fringilla maximus tempus. Eros amet tempor hendrerit mauris euismod. Enim quis in enim vel condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Imperdiet.",
          "Posuere.",
          "Suscipit."
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "short description Diam tempor elit quis fringilla gravida maximus turpis tempus mollis.",
      "long_description": "long description Porttitor at nisi at fringilla, fringilla aliquam ornare nam eti. Faucibus ex fringilla vestibulum sodales lacinia mattis massa eget. Turpis dignissim ipsum elementum. In lobortis suscipit finibus turpis diam metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sem.",
          "Arcu.",
          "Ultrices."
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "short description Pharetra gravida aliquam elementum fringilla morbi magna neque leo orci.",
      "long_description": "long description Quisque quis pulvinar enim vel lobortis dignissim, adipiscing elit fringilla sagittis, nulla sodales accumsan imperdiet euismod lectus pharetra. Id nulla aenean lobortis ultricies sagittis hendrerit. Gravida consequat laoreet magna in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacus.",
          "Ante.",
          "Mauris."
      ]
    },
    {
      "name": "Pancast",
      "short_description": "short description E sodales mattis sit iaculis. Faucibus donec erat tincidunt commodo.",
      "long_description": "long description Eget pellentesque tincidunt sagittis mauris. Sapien ut cursus pharetra posuere ornare morbi, lobortis rhoncus metus elementum. Eu magna purus ultrices leo, accumsan turpis quis vel, lectus curabitur et i elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Nisl.",
          "Metus."
      ]
    },
    {
      "name": "Polygan",
      "short_description": "short description Turpis sed diam in pharetra pretium hendrerit. Lacus pulvinar ante.",
      "long_description": "long description Metus cras ex curabitur gravida gravida tortor aenean velit risus vitae, gravida non eget natoque cursus. Metus condimentum mi vulputate non curabitur purus tempor consequat tristique mattis mollis viverra massa.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Condimentum.",
          "Fringilla.",
          "Metus."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Tortor est iaculis lacus sagittis sagittis. Augue aliquet aliquam ornare.",
      "long_description": "long description Suscipit ante aliquam morbi dolor cursus in rhoncus, vestibulum proin eu pulvinar orci lacus dui aenean eu lacus, facilisis a a donec i, arcu rhoncus commodo mattis scelerisque sapien consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eu.",
          "Mattis.",
          "Eu."
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "short description Pretium rhoncus pharetra ex accumsan. Porttitor non imperdiet dignissim natoque.",
      "long_description": "long description Vel tempus mi et ipsum neque dictum natoque, viverra morbi felis faucibus ornare rhoncus justo. Vehicula vehicula donec imperdiet blandit mattis au sem vulputate. Tincidunt sagittis ultricies lobortis lacus lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Proin.",
          "Ornare.",
          "Sodales."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Finibus vehicula morbi mi turpis ornare pretium massa maximus tincidunt.",
      "long_description": "long description Donec aliquam tincidunt donec purus facilisis morbi vehicula placerat cursus orci felis non eget commodo dictum mollis vestibulum lacinia curabitur sollicitudin placerat, tortor faucibus vestibulum eti posuere sollicitudin au maximus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dictum.",
          "Aliquam.",
          "Fringilla."
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "short description Accumsan lacus facilisis turpis ultrices eget, tristique suscipit sem lacinia.",
      "long_description": "long description Lacinia pulvinar hendrerit sagittis id mi. Cursus proin sodales lorem. Augue sem aliquam eros tincidunt purus scelerisque vehicula finibus, vestibulum pretium proin finibus rhoncus nam id ultrices a ultrices blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consequat.",
          "Nunc.",
          "Augue."
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "short description Justo blandit eu mi e, aenean eu enim sagittis a.",
      "long_description": "long description Aliquam dolor e lacinia neque scelerisque commodo lacinia metus lorem. Ligula etiam vulputate bibendum ultricies etiam dui rhoncus aliquet sollicitudin. Ornare turpis hendrerit lectus imperdiet. I ultrices nam imperdiet ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dui.",
          "Mi.",
          "Magna."
      ]
    },
    {
      "name": "Sophis",
      "short_description": "short description Velit iaculis cras viverra nunc dignissim vestibulum facilisis au sit.",
      "long_description": "long description Ac leo ultricies risus magna tristique felis e. Risus blandit pellentesque enim. Mauris est tempus eu. Sit magna aenean ultrices eti. Facilisis hendrerit mattis fringilla eu ultricies lacinia nisi vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sapien.",
          "Elementum.",
          "Maximus."
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "short description Auctor lacinia dui justo au nisl, blandit id orci pretium.",
      "long_description": "long description Nisi justo cras augue maximus, lectus dictum nunc porttitor, dolor quisque consequat nisi, condimentum justo orci leo gravida consectetur fringilla pulvinar, sodales turpis eros sodales dictum, quis magna commodo dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Neque.",
          "Dolor.",
          "Tempus."
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "short description Ligula donec condimentum ac nulla eget morbi blandit mattis donec.",
      "long_description": "long description Rhoncus laoreet tincidunt imperdiet cras neque ligula, dolor pretium erat au ligula, e non enim a lacinia suscipit neque, vitae donec ut felis. Aliquet cursus turpis metus. Ante faucibus suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dignissim.",
          "Id.",
          "Dictum."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description Ex risus laoreet erat consectetur finibus. Sagittis scelerisque tempus euismod.",
      "long_description": "long description Aenean tempor donec auctor fringilla eti sodales euismod pretium. Maximus vel curabitur ex eti ornare fringilla et. Lacinia ac et vulputate, vitae pulvinar nulla euismod maecenas placerat. Orci dui proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Quis.",
          "Quisque.",
          "Risus."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Pulvinar tempor hendrerit rhoncus etiam mollis lacus dictum adipiscing leo.",
      "long_description": "long description Laoreet velit fringilla cursus au. Amet placerat ornare aliquet. Tortor sagittis lacinia rhoncus maecenas in. Pulvinar vitae eu sollicitudin quis turpis commodo, dui vel ac id nisi. Eti aliquam lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dignissim.",
          "Blandit.",
          "Adipiscing."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description Sagittis sed proin maximus i purus e tincidunt accumsan et.",
      "long_description": "long description Placerat morbi sagittis tincidunt finibus et, cursus donec ut lectus orci. Imperdiet diam neque felis facilisis neque. Cursus metus condimentum ante mattis sed, consectetur donec dignissim dignissim ipsum velit est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pellentesque.",
          "Lacinia.",
          "Lacinia."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Viverra auctor pharetra metus etiam finibus. Neque enim lacinia elementum.",
      "long_description": "long description Mattis risus nisl arcu felis cursus mollis. Felis aliquet vulputate aenean sit. Imperdiet blandit viverra sodales. Quis dolor aliquam at leo hendrerit, dolor diam quisque cras vel pharetra imperdiet in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Eros.",
          "Ipsum."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description E sapien lobortis bibendum diam dolor, justo porttitor e suscipit.",
      "long_description": "long description Consequat eti porttitor dui porttitor aliquet fringilla. Iaculis sem elit lacus sapien. Magna lobortis ipsum placerat facilisis lacinia mi maecenas. E a placerat imperdiet tortor. Velit viverra sapien tempor nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Facilisis.",
          "Lacus.",
          "Lacinia."
      ]
    },
    {
      "name": "Britech",
      "short_description": "short description Finibus metus pharetra auctor morbi bibendum ligula commodo tristique tempor.",
      "long_description": "long description Etiam sit viverra tortor risus maximus. Nunc eros consectetur augue sodales, sodales condimentum dolor au augue. Facilisis neque lacus cras purus elit. Porttitor adipiscing consectetur quis auctor arcu velit morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cursus.",
          "Suscipit.",
          "Adipiscing."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Turpis risus adipiscing pharetra ligula. Accumsan lorem est nibh viverra.",
      "long_description": "long description Tortor donec turpis massa nunc curabitur quisque ligula natoque orci blandit et, lobortis lorem lacinia natoque mi. Gravida nibh at massa, ipsum sem nunc vitae arcu, finibus tempor vehicula nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Metus.",
          "Tortor.",
          "Placerat."
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "short description Eros sagittis sed bibendum etiam. Finibus lobortis nunc vehicula eti.",
      "long_description": "long description Porttitor ipsum quis porttitor arcu dolor maximus felis accumsan. Enim magna porttitor tortor. Imperdiet auctor magna quis risus mattis, hendrerit tempus etiam cras. Lorem a augue ex. Est blandit eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ante.",
          "Ultrices.",
          "Lacus."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Suscipit iaculis quis tempor amet eu, mi aenean orci id.",
      "long_description": "long description Magna vestibulum nunc tempor eros sollicitudin maximus posuere. Tempus lacinia vitae orci facilisis. Bibendum adipiscing lorem mollis. Porttitor tempus ultricies ligula aliquam i vulputate consectetur, eros mattis augue placerat sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultricies.",
          "Sit.",
          "Et."
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "short description Commodo proin tempus elit magna diam vestibulum curabitur dictum ultrices.",
      "long_description": "long description Auctor ipsum eti amet lectus in. Commodo tincidunt lacinia tempor, mauris orci orci proin. Pulvinar erat massa lectus ipsum. Sem sollicitudin iaculis ex sit accumsan orci fringilla tempus faucibus sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Finibus.",
          "Commodo.",
          "Enim."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Sit ultrices facilisis nisl eget. Amet eget vitae ut nisi.",
      "long_description": "long description Vitae nibh in arcu quis. Au ultricies aliquam dolor, hendrerit massa diam aliquet eti bibendum, risus sed tortor aenean mollis sollicitudin nisl. Diam felis lacinia dignissim placerat dui vulputate mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Natoque.",
          "Ipsum.",
          "Pharetra."
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "short description Maecenas diam at magna a lacus leo ex elementum natoque.",
      "long_description": "long description Finibus suscipit lectus arcu neque ultricies lacus pretium nisi risus laoreet pretium sollicitudin aliquam eget. Proin ac au pulvinar. Proin dictum turpis nam a. Sollicitudin euismod faucibus sollicitudin porttitor et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultrices.",
          "Sit.",
          "Enim."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Tincidunt aliquam risus auctor felis. Maximus aliquam sodales lacinia cursus.",
      "long_description": "long description Arcu a consequat lacinia pellentesque, elit dignissim lacinia pretium. Mollis eti gravida aliquet au, morbi facilisis facilisis tincidunt adipiscing ex proin. Ut faucibus condimentum cras cursus non lacus risus est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Mauris.",
          "Maximus."
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "short description Gravida scelerisque adipiscing proin ornare. Finibus facilisis nisl neque finibus.",
      "long_description": "long description Eros lacus sit placerat i porttitor pharetra. A eros at euismod nulla, eu eti vel au et aliquam velit dui sed, maximus mollis justo pretium iaculis sem a bibendum vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nam.",
          "Eu.",
          "Nisi."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Faucibus nulla sit au quis ultrices. Gravida scelerisque pharetra maximus.",
      "long_description": "long description Bibendum ante tincidunt lacinia au. Et metus sagittis justo suscipit porttitor est, placerat ultricies vel viverra. Eu id cursus in. Sapien maecenas cursus imperdiet vitae nisi. Orci magna sem aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Facilisis.",
          "Donec.",
          "Sollicitudin."
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "short description Pretium imperdiet morbi suscipit tortor posuere, nulla i scelerisque eget.",
      "long_description": "long description Enim morbi nisi proin vitae non tempor orci arcu eget, viverra consequat morbi lacus. Nulla a purus etiam. Diam vulputate maximus au dolor dictum ultrices imperdiet pulvinar lorem nisl lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "Consequat.",
          "Imperdiet."
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "short description Elementum lectus pharetra metus vitae bibendum aliquam sed maecenas iaculis.",
      "long_description": "long description Iaculis tincidunt id adipiscing est. Donec adipiscing posuere ornare, sem aliquam maximus pretium, posuere sollicitudin auctor elit mi, aliquam et vehicula enim quisque. Porttitor hendrerit etiam e euismod leo fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vehicula.",
          "Commodo.",
          "Eros."
      ]
    },
    {
      "name": "Sealine",
      "short_description": "short description Mollis gravida curabitur maximus curabitur. Vehicula ultricies arcu lectus sit.",
      "long_description": "long description Adipiscing ex enim blandit commodo, maximus mollis suscipit sed. Scelerisque morbi maecenas ex mauris commodo facilisis. Purus consequat cursus ipsum eros. Vestibulum vitae eti fringilla, pretium a massa eros eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisi.",
          "Eros.",
          "Curabitur."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Eti ornare sit elit tincidunt neque. Lectus elit a augue.",
      "long_description": "long description Sollicitudin auctor auctor ex dignissim porttitor eget, ut nisi suscipit est. Vulputate ex proin nunc bibendum lacinia ut nunc, hendrerit nisl scelerisque faucibus, eros mi maecenas in posuere facilisis ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Natoque.",
          "Mi.",
          "Ornare."
      ]
    },
    {
      "name": "Polygan",
      "short_description": "short description Vitae au elementum adipiscing rhoncus. Nam accumsan lacus ligula non.",
      "long_description": "long description Auctor ornare amet neque i vitae. Elementum tristique gravida nunc aliquet sollicitudin nulla nibh quisque, dui pharetra sagittis nisl, vestibulum suscipit metus nam ligula scelerisque augue. Quis auctor tempus erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dolor.",
          "Orci.",
          "Cras."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Sit mauris sollicitudin turpis neque leo, lobortis dui quisque nibh.",
      "long_description": "long description Condimentum ex massa ultrices est, orci vel bibendum massa ante au dolor vitae aliquet gravida sem i etiam augue ultrices. Velit bibendum faucibus nam purus cras. Eros bibendum dolor consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Curabitur.",
          "Faucibus.",
          "Felis."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Erat nunc hendrerit pretium imperdiet non bibendum. Turpis dolor velit.",
      "long_description": "long description Lectus vehicula e vel ac. Orci est curabitur augue natoque, eros aliquam nam maecenas tristique. Curabitur dolor pretium eros quis. Quisque erat ex dictum risus, iaculis tortor eros non elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Pellentesque.",
          "Ac."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Cursus ex cras consectetur pharetra mauris. Enim aliquam cursus ex.",
      "long_description": "long description Ut lacinia sodales arcu dignissim blandit. Aliquet lacus amet orci hendrerit adipiscing. Velit maecenas maximus neque massa vel. Natoque lobortis vulputate au suscipit purus placerat. Sed vitae orci morbi eu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Amet.",
          "In.",
          "Nibh."
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "short description Cras felis maximus lacinia nisi iaculis. Leo lacinia vulputate donec.",
      "long_description": "long description Lacinia ultrices sodales pharetra aliquam, e tristique a lacinia at velit amet sit lacinia neque, felis purus mollis facilisis, aliquet amet iaculis vestibulum. In i mauris sodales faucibus maecenas tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Neque.",
          "Erat.",
          "Imperdiet."
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "short description Accumsan consequat quisque vel posuere. Lacinia cursus vehicula consectetur amet.",
      "long_description": "long description Ornare augue hendrerit leo ultrices. Condimentum dictum aenean ultrices nunc. Commodo diam sollicitudin pulvinar orci mauris ornare lacinia. Laoreet blandit quis eros cursus tempus hendrerit blandit aenean. Vitae pulvinar velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempus.",
          "Ut.",
          "Dictum."
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "short description Nulla lacinia sem elementum tristique. Scelerisque et viverra elementum ligula.",
      "long_description": "long description Posuere maecenas ultricies tincidunt vel fringilla, turpis condimentum dui e fringilla, dignissim leo tortor dignissim au, i lacus pretium at. Lobortis maximus laoreet lacinia. Felis pharetra diam pellentesque mollis et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Sapien.",
          "Natoque."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description I sodales ac eros auctor quis. Mauris iaculis leo mauris.",
      "long_description": "long description Tempus condimentum nulla quis neque sem, nulla posuere pellentesque scelerisque accumsan i aliquet blandit morbi ultricies in vehicula neque. Mollis lacinia lectus sodales. Tempus nunc tortor pellentesque dictum massa justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Condimentum.",
          "Turpis.",
          "Bibendum."
      ]
    },
    {
      "name": "Celmax",
      "short_description": "short description Porttitor vitae posuere condimentum lectus, mollis quisque lobortis hendrerit nam.",
      "long_description": "long description Quis in mi lacinia commodo sed diam risus felis. Purus porttitor vestibulum at. Vel porttitor est diam. Ultrices risus viverra pretium. Morbi cras morbi hendrerit dignissim finibus curabitur lectus aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Diam.",
          "Finibus.",
          "Nam."
      ]
    },
    {
      "name": "Proline",
      "short_description": "short description Donec maecenas auctor amet in, blandit velit finibus sem iaculis.",
      "long_description": "long description Id ornare etiam vitae ac, bibendum nisi justo etiam facilisis dui dignissim elementum. Purus fringilla risus diam, purus nulla et non. Nulla justo i a. Ultrices ligula dolor tortor turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Velit.",
          "Ornare.",
          "Tincidunt."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Aenean mollis cursus in facilisis nulla sollicitudin nulla tempus lectus.",
      "long_description": "long description Massa pretium quisque auctor tincidunt natoque ultrices ultricies, maximus ut gravida risus in velit eu eu lacinia lectus ante rhoncus laoreet mollis arcu cursus mattis ut nisi, a pellentesque velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "In.",
          "Sapien.",
          "Condimentum."
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "short description Tincidunt bibendum nisl eti pellentesque auctor viverra laoreet consectetur finibus.",
      "long_description": "long description Sit laoreet dignissim nisi au erat dignissim. Sapien eti laoreet natoque orci, faucibus amet id arcu, hendrerit faucibus adipiscing sollicitudin commodo elit accumsan non, ut aliquam magna sollicitudin donec sem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sagittis.",
          "Vulputate.",
          "Iaculis."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description Turpis donec ex e eros pretium, cras sapien eu facilisis.",
      "long_description": "long description Fringilla a ante diam vel pharetra maecenas. Vitae ipsum tempor gravida. Iaculis imperdiet elementum vestibulum elementum consectetur lacinia. Purus tristique eget aliquet pulvinar, leo lacinia dictum nisl i neque enim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquet.",
          "A.",
          "Enim."
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "short description Mollis placerat fringilla eu eu felis aliquam lorem eti mauris.",
      "long_description": "long description Adipiscing arcu elit mi finibus et. Non laoreet rhoncus vel eget cras felis. Purus ligula dolor sollicitudin dolor, consequat euismod sodales aenean etiam sagittis, quis faucibus bibendum ornare scelerisque aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Turpis.",
          "Ultricies.",
          "Iaculis."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Felis neque mattis orci pharetra ac, pharetra vulputate metus laoreet.",
      "long_description": "long description Tortor mauris augue sagittis ligula posuere nulla, curabitur pretium ante felis porttitor tempor, purus suscipit bibendum dui felis. I ex ac erat. Ac magna tincidunt natoque. Ipsum vulputate velit aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eget.",
          "Hendrerit.",
          "Elit."
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "short description Maecenas mollis lorem hendrerit et. Blandit laoreet nisi nisl non.",
      "long_description": "long description Mollis eros sodales rhoncus ultrices finibus condimentum mi, vel iaculis posuere laoreet nisl etiam condimentum enim maecenas sit non. Aliquam eros eti turpis. Iaculis eros hendrerit fringilla lectus cras gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Adipiscing.",
          "Maximus.",
          "In."
      ]
    },
    {
      "name": "Logico",
      "short_description": "short description Tempor dolor suscipit facilisis mattis pharetra magna id sit viverra.",
      "long_description": "long description Bibendum scelerisque purus purus dictum turpis commodo. Enim vehicula at posuere commodo, risus lorem erat finibus tortor tortor. Dui tortor sit hendrerit. Porttitor morbi ipsum donec. Ultricies maecenas sem massa.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "At.",
          "Dui.",
          "Sed."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description Porttitor lorem eros gravida faucibus mattis proin. At tempor vulputate.",
      "long_description": "long description Mi auctor maecenas proin etiam nisi. Gravida eti ex bibendum felis, mi suscipit commodo dui. Etiam scelerisque tristique suscipit. Curabitur felis natoque orci cursus bibendum elementum lacinia. Ac neque mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "At.",
          "Justo.",
          "Hendrerit."
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "short description Felis felis placerat auctor gravida rhoncus est donec dignissim lacinia.",
      "long_description": "long description Ipsum ornare et risus laoreet mauris. Leo ornare sapien facilisis, fringilla adipiscing mi mauris porttitor etiam. Ut curabitur pulvinar dignissim sodales at vel natoque suscipit augue. Eti consequat elit morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Non.",
          "Pharetra.",
          "Lorem."
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "short description Tortor nisl velit vestibulum e ante gravida, ut dignissim turpis.",
      "long_description": "long description Massa leo felis laoreet lobortis lacus. Mollis sodales auctor at tortor faucibus tincidunt iaculis ornare augue i aenean vehicula, nulla euismod erat suscipit elit rhoncus nulla, ornare etiam placerat tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Metus.",
          "Consectetur."
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "short description Est pharetra e rhoncus cras imperdiet viverra accumsan sagittis hendrerit.",
      "long_description": "long description Maximus dictum laoreet diam amet at. Dictum ex leo euismod, eti tortor gravida quisque tempor. Vel amet a iaculis blandit est neque, ac finibus tempus tortor mi magna eti nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Ultrices.",
          "In."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description Mattis ultrices augue lobortis consectetur. Pretium at lorem tortor sapien.",
      "long_description": "long description Erat blandit turpis eti nunc, at nisl placerat orci dolor sit. Sapien est morbi nisi. Accumsan ac at lacus augue quis iaculis ornare pellentesque eu. Ut justo consequat ex morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Faucibus.",
          "Nam."
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "short description Et cras amet sem dui finibus ac, eget accumsan ex.",
      "long_description": "long description Elementum nisi tincidunt elit tortor, aliquet vehicula risus massa tempor rhoncus morbi metus au leo risus ultrices pulvinar maecenas ac, i eget finibus elit pretium lacinia, nam maximus elit tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eros.",
          "Porttitor.",
          "Arcu."
      ]
    },
    {
      "name": "Solexis",
      "short_description": "short description Erat tincidunt neque gravida morbi risus diam. I ex tempus.",
      "long_description": "long description Etiam pharetra faucibus accumsan au gravida, amet condimentum a rhoncus ultricies posuere. Dolor pretium mollis tempor diam facilisis dolor ante, consequat ac vitae faucibus vestibulum ipsum, elit viverra adipiscing elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Suscipit.",
          "A."
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "short description Sollicitudin pellentesque condimentum bibendum maecenas dignissim accumsan. Tristique felis nisl.",
      "long_description": "long description Nulla consectetur scelerisque tempus condimentum lorem magna mauris au ultrices porttitor porttitor in. Dictum eget ultricies auctor est magna finibus a nibh consequat, tincidunt donec e sapien curabitur cras arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dui.",
          "Nam.",
          "Facilisis."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description I ut lobortis ut curabitur lacinia facilisis lacinia ante iaculis.",
      "long_description": "long description Erat pharetra dictum dictum nisl purus. Lectus ultricies eti tempus in scelerisque ultrices purus, laoreet condimentum sapien velit rhoncus et ultricies purus sem lacinia suscipit gravida, nam dui elit nisl.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Et.",
          "Tempor.",
          "Neque."
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "short description Donec at faucibus mi ante. Sed neque scelerisque consectetur sapien.",
      "long_description": "long description Est au cras orci hendrerit lectus aliquam elit suscipit amet finibus posuere morbi. Ornare dictum nulla sed imperdiet viverra faucibus sodales ultrices. Finibus sapien maximus quis et natoque lobortis proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vulputate.",
          "Laoreet.",
          "Nulla."
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "short description Ex vel massa ultricies magna sed pretium nisl et eti.",
      "long_description": "long description Viverra placerat sagittis tempor dictum magna vitae, cursus sed dignissim vestibulum ut lobortis. Natoque nisi lacinia tempor magna elementum non. Finibus pellentesque laoreet purus ac, purus nunc lacus vehicula pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dictum.",
          "Adipiscing.",
          "Ligula."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description Natoque pretium est consequat tempor laoreet id justo risus velit.",
      "long_description": "long description Condimentum ex bibendum orci magna ut, lectus etiam diam lacinia. Laoreet quis scelerisque ultrices. Lacinia nisl finibus pulvinar natoque i, cras mauris in id bibendum, aenean aliquam nibh velit aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vestibulum.",
          "Mauris.",
          "Lacinia."
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "short description Lorem nisi posuere tincidunt imperdiet suscipit, cursus at adipiscing laoreet.",
      "long_description": "long description Justo aliquam pretium erat leo vitae. Posuere adipiscing at consectetur pulvinar. Vel eget dui natoque curabitur. Sed natoque tempus massa viverra, dignissim suscipit i diam eti suscipit tempor au bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Metus.",
          "Pellentesque.",
          "Eros."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Dictum posuere ut pretium nulla arcu. I quis facilisis proin.",
      "long_description": "long description Cursus finibus tortor tristique laoreet tempor ultricies, natoque vitae mauris orci laoreet, cursus mi eros in vel vestibulum. Ut nisl eros pharetra, tempus ultricies tempus vel porttitor vel cras placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ipsum.",
          "Maximus.",
          "Nam."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Posuere sed metus at suscipit, aliquet proin euismod consequat consectetur.",
      "long_description": "long description At sodales lacinia vestibulum ultrices bibendum finibus ornare blandit curabitur porttitor neque eros lacinia, dignissim lectus eti pulvinar, commodo justo dolor nulla, eti bibendum nunc e erat sapien arcu orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vel.",
          "Orci.",
          "Tristique."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description Eti magna consequat mi nibh mi proin. Massa viverra curabitur.",
      "long_description": "long description Massa sit id adipiscing auctor dui, neque orci orci suscipit eti enim facilisis dignissim, at aliquam pharetra pulvinar pretium. Morbi lobortis ultrices euismod elit, maecenas finibus magna lacinia dictum augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Elit.",
          "Eget.",
          "Purus."
      ]
    },
    {
      "name": "Polygan",
      "short_description": "short description Laoreet ipsum tempus massa lacinia sollicitudin pretium in vulputate felis.",
      "long_description": "long description Gravida etiam amet risus tincidunt laoreet finibus. Elit ante etiam imperdiet. Rhoncus quisque elit eti i euismod. Sed at blandit lacus. Scelerisque augue erat blandit blandit, imperdiet laoreet gravida pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Justo.",
          "Cursus.",
          "Orci."
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "short description Viverra suscipit posuere pretium i. Leo porttitor risus dui vitae.",
      "long_description": "long description Ex sollicitudin au placerat i augue quis cras tincidunt tristique, non risus ut donec quis eros e condimentum sagittis, nibh justo ultricies cras nulla lobortis in eti lacus tincidunt justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vel.",
          "Eti.",
          "Ultrices."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Commodo eget est turpis euismod sagittis laoreet vehicula turpis sed.",
      "long_description": "long description Erat dui arcu et euismod. E arcu au nisl nibh, auctor sagittis sit blandit mattis auctor ipsum. Ultricies pellentesque eti euismod enim. Etiam dictum pulvinar ipsum, ex elit fringilla consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacus.",
          "Suscipit.",
          "Au."
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "short description Posuere pulvinar bibendum lectus tempus, augue au sed sem sed.",
      "long_description": "long description Ligula maecenas mi et proin. Metus lacinia curabitur mattis. Adipiscing vitae sollicitudin sagittis adipiscing nunc maecenas, eu maximus ac felis, nisi eti tincidunt mi ante sollicitudin consequat. Augue hendrerit lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lectus.",
          "Faucibus.",
          "Imperdiet."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description Ex massa felis pharetra enim risus ligula mattis placerat facilisis.",
      "long_description": "long description Consequat faucibus orci diam neque purus nam, posuere vulputate quis porttitor commodo blandit ut vitae. Et enim est at natoque iaculis i diam. Magna velit sit vitae arcu lacinia mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Iaculis.",
          "Nisi.",
          "Dui."
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "short description Pulvinar adipiscing finibus laoreet eti dui ligula nulla blandit cursus.",
      "long_description": "long description Posuere diam cras bibendum cras tristique. Lectus eu lacus purus nunc dictum porttitor, neque sapien massa facilisis lobortis. Mattis euismod lectus cras. Ultrices tempus ultricies ex placerat. Consequat morbi vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Laoreet.",
          "Viverra.",
          "Leo."
      ]
    },
    {
      "name": "Templatek",
      "short_description": "short description Augue turpis ipsum posuere facilisis, vel laoreet ultrices quisque aliquam.",
      "long_description": "long description Tincidunt laoreet ornare tincidunt dolor placerat metus vestibulum natoque turpis iaculis natoque, at scelerisque arcu massa condimentum lectus erat, erat donec magna maecenas vel. Sem placerat finibus diam augue proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Massa.",
          "Felis.",
          "Nam."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Dolor amet vel est ultricies velit. Condimentum faucibus tristique velit.",
      "long_description": "long description Faucibus tincidunt curabitur cursus sapien neque, justo elit risus consectetur laoreet hendrerit finibus pretium. Ipsum vulputate imperdiet fringilla suscipit imperdiet i suscipit curabitur risus curabitur, erat morbi aliquam sagittis elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Curabitur.",
          "Maximus.",
          "Nisl."
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "short description Maecenas laoreet elementum sem pellentesque. Consectetur tempus lobortis cursus tempus.",
      "long_description": "long description Mi nulla turpis sollicitudin euismod dictum cursus commodo dui, tempor felis euismod ex, sapien erat dictum dignissim ex pellentesque justo morbi. Diam dolor tortor accumsan nibh vulputate. Magna tincidunt pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Aliquet.",
          "Imperdiet."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Sodales vitae ligula neque ipsum. Accumsan mattis fringilla sapien nulla.",
      "long_description": "long description Dignissim facilisis neque sollicitudin faucibus. Eu amet tristique lacinia laoreet sollicitudin lobortis felis ipsum neque. Faucibus purus condimentum gravida sagittis elementum. Facilisis quisque purus laoreet maximus bibendum mattis placerat tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Enim.",
          "Aliquam.",
          "Tortor."
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "short description Ante mauris sed eu e bibendum. Metus maximus pellentesque e.",
      "long_description": "long description Aliquet magna felis pulvinar amet mattis lacinia nunc e morbi gravida i neque ultricies sed aliquam tempor commodo ultricies bibendum condimentum blandit, massa elementum purus lobortis erat iaculis sit pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Rhoncus.",
          "Turpis.",
          "Orci."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description Blandit viverra enim felis porttitor mauris sed leo risus purus.",
      "long_description": "long description Nam leo bibendum tempus vitae facilisis. Neque velit justo auctor. Blandit ut rhoncus id finibus at adipiscing morbi finibus. Dolor ultricies non mollis pharetra arcu. Ultrices imperdiet cursus et amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Iaculis.",
          "Neque.",
          "Velit."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description Mollis nam sapien fringilla mi ornare donec aliquam eros fringilla.",
      "long_description": "long description Ultrices tempus velit dolor tortor tempus nam quis nisl, turpis ac maximus erat at cras adipiscing ante augue. Finibus non metus quisque tempus facilisis, tempus ornare sagittis diam sem facilisis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tortor.",
          "Dui.",
          "Sed."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description In imperdiet turpis vehicula dui tristique mauris nulla quisque dolor.",
      "long_description": "long description Consequat condimentum sagittis eti purus. Vestibulum tempor in justo, i lobortis tincidunt consequat. Cras vitae arcu auctor, arcu sollicitudin ante cras. Sagittis velit elementum magna bibendum proin. Mauris turpis lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Donec.",
          "Eget.",
          "Arcu."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Etiam maximus donec quis diam non mi amet ultrices sagittis.",
      "long_description": "long description Nibh auctor sagittis morbi quisque non, aenean orci pretium risus imperdiet risus mauris dui. Mollis tempus iaculis quisque. Curabitur cursus i tempus, amet ut massa nulla aliquet, diam lorem ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nibh.",
          "Amet.",
          "Nam."
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "short description Elementum ultricies facilisis ipsum augue. Viverra nulla sit tincidunt nibh.",
      "long_description": "long description Curabitur lorem quisque fringilla eros aliquam, pulvinar placerat eti consectetur, porttitor rhoncus ultrices viverra. Viverra curabitur neque adipiscing facilisis, commodo rhoncus lectus faucibus turpis felis dui donec vulputate mollis tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultricies.",
          "Ultricies.",
          "Velit."
      ]
    },
    {
      "name": "Solexis",
      "short_description": "short description Dignissim pellentesque sodales lobortis e au enim. Sollicitudin suscipit i.",
      "long_description": "long description Cras cursus posuere erat mauris commodo. Lorem pellentesque velit iaculis euismod dolor finibus velit, quis dui consectetur iaculis nibh gravida bibendum adipiscing eros aliquam. Condimentum arcu ac tincidunt nisl ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Laoreet.",
          "Eti."
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "short description Elit consequat lacus felis dolor consectetur ut euismod suscipit erat.",
      "long_description": "long description Non enim elementum mi nunc. Quisque quis magna ante donec nisl mauris maecenas. Cras eros risus donec erat at mattis nunc commodo laoreet eget facilisis. Vestibulum at sed mauris tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ipsum.",
          "Amet.",
          "Nibh."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description Ipsum erat justo ultrices pellentesque nunc. Fringilla lorem blandit risus.",
      "long_description": "long description Bibendum nam iaculis ut sit in erat, ipsum nisi scelerisque nulla. Euismod magna condimentum etiam gravida porttitor et lacus. Dui aliquam dictum au. Hendrerit porttitor accumsan au est nibh ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ac.",
          "Aliquam.",
          "Dolor."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Ut pellentesque justo id dolor quisque vehicula. Consectetur in ornare.",
      "long_description": "long description Mi blandit tristique arcu a maximus massa. Mauris gravida imperdiet aenean gravida mauris leo aenean. Massa facilisis massa maximus. Cursus cursus ultricies donec. Aenean tempor vel erat proin sit faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nam.",
          "Maximus.",
          "Ultrices."
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "short description Sit condimentum iaculis eget rhoncus rhoncus gravida laoreet nisi au.",
      "long_description": "long description Cras porttitor tristique nulla sollicitudin suscipit, aliquet suscipit suscipit nisl hendrerit. Massa ac magna risus posuere consequat auctor tempus, fringilla erat vulputate ligula sit, tempus proin metus consectetur lorem leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Fringilla.",
          "Nunc.",
          "Maximus."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Dictum euismod sem etiam lacinia rhoncus ornare lobortis sit placerat.",
      "long_description": "long description Nam auctor ipsum vitae maximus lectus lacus fringilla, mauris ornare erat e metus. Sagittis fringilla sagittis cras sagittis. Ornare ligula aliquam risus. Pellentesque vestibulum adipiscing elementum. Pharetra adipiscing sapien cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mattis.",
          "Rhoncus.",
          "Tristique."
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "short description Ligula e cras justo augue ligula nibh arcu ac justo.",
      "long_description": "long description Ante facilisis nisi scelerisque suscipit at lacinia finibus. Consequat ac dui lobortis. Tempor ac ut iaculis, purus curabitur massa hendrerit tempor. Commodo imperdiet ac massa. Lorem consequat suscipit elementum quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempus.",
          "Sollicitudin.",
          "Velit."
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "short description Tortor ligula eu nulla lobortis at nam, lacinia nam nunc.",
      "long_description": "long description Imperdiet ac scelerisque quis posuere aliquam, tristique etiam proin nam gravida aliquam. Vehicula leo natoque finibus augue aliquet ligula. Cursus auctor laoreet auctor pellentesque pulvinar, sed blandit viverra magna eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Laoreet.",
          "Quisque.",
          "Nisi."
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "short description Lacinia scelerisque condimentum hendrerit pellentesque ultricies erat turpis tristique tincidunt.",
      "long_description": "long description Lacinia aenean vitae a augue tempor faucibus risus magna cursus, aliquam lorem i etiam blandit tortor et. Sed maecenas arcu ultricies vulputate, ipsum morbi maximus i bibendum. Donec risus nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Curabitur.",
          "Mi.",
          "Dui."
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "short description Au mollis ipsum etiam nisl sed. Pulvinar suscipit amet diam.",
      "long_description": "long description Mauris e pretium aenean ipsum, condimentum nulla ex adipiscing curabitur cras. Cras au tempus dui augue diam id. Non tristique ac i fringilla tincidunt. Magna hendrerit finibus quis cursus blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Ultrices.",
          "Sapien."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description I mi lectus donec nam nisl i mi tincidunt amet.",
      "long_description": "long description Justo vitae lacinia ultricies commodo dictum ornare i donec, magna mollis vitae vitae. Hendrerit cursus vestibulum blandit consequat vulputate, lacinia eti at pretium donec turpis morbi, metus eros donec lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eti.",
          "Est.",
          "Au."
      ]
    },
    {
      "name": "WestGate",
      "short_description": "short description Placerat aenean sem pharetra tempor vulputate. Auctor condimentum vehicula ultrices.",
      "long_description": "long description Tempus curabitur ut auctor lacus, porttitor vehicula facilisis purus curabitur imperdiet in auctor, auctor sagittis justo ipsum, gravida pellentesque velit au, vel nibh commodo cursus ligula in, eu erat condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Curabitur.",
          "Accumsan.",
          "Cras."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description Aliquet ultrices scelerisque lacinia quisque. E orci commodo non neque.",
      "long_description": "long description Nunc amet ipsum gravida laoreet, curabitur consequat sodales sed est aliquam, sodales nisl diam bibendum commodo elementum. Ultricies accumsan accumsan a auctor, ut ultrices dignissim ligula, commodo massa erat felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Donec.",
          "Non."
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "short description Lectus purus in turpis dolor. Pellentesque nulla commodo mauris nunc.",
      "long_description": "long description Adipiscing erat faucibus morbi sollicitudin arcu turpis. Nulla eros nisi scelerisque. Sagittis bibendum eu tempor lorem, neque justo vel dui. Accumsan lobortis est tempus. Diam eget ut euismod nulla in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mattis.",
          "Tincidunt.",
          "Dignissim."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Vehicula non donec vulputate suscipit iaculis. Ornare eget ligula condimentum.",
      "long_description": "long description Nibh neque velit lacinia sem pulvinar a lectus. Cursus neque mauris adipiscing. Facilisis lacinia adipiscing sagittis aliquam eget mattis mauris. Tristique aliquet eti quisque magna, est aliquam ut maximus vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tortor.",
          "Auctor.",
          "Natoque."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Hendrerit lacinia enim velit e gravida mollis suscipit ligula euismod.",
      "long_description": "long description Nisl dui curabitur eu nisi maecenas au lacinia tempor auctor ut cursus mattis elementum, leo nisi porttitor placerat condimentum pharetra purus massa ex nisi natoque felis, dolor pretium orci ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ipsum.",
          "Nisi.",
          "Imperdiet."
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "short description Hendrerit vitae erat turpis consectetur tincidunt, au mattis massa pharetra.",
      "long_description": "long description Proin tristique vestibulum quisque sed au eget orci blandit curabitur eros velit turpis, leo risus augue nibh orci lacinia suscipit. Mattis facilisis au tortor neque eros, sapien placerat quisque cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Massa.",
          "Placerat.",
          "Nulla."
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "short description Ac scelerisque magna vitae i nulla vehicula turpis consequat ex.",
      "long_description": "long description Aliquam ac elementum ex maecenas. Natoque neque faucibus imperdiet nibh, suscipit felis tristique arcu auctor a sagittis laoreet morbi. Ante sagittis ultrices e suscipit. Maximus erat pretium faucibus massa arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dictum.",
          "Maximus.",
          "Facilisis."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Erat id non pretium suscipit quisque. Massa sit hendrerit enim.",
      "long_description": "long description Lacinia e tristique erat vitae nulla, vulputate metus lacinia tempor, vestibulum aenean nam pulvinar justo vitae tristique amet. Aenean commodo velit bibendum. Dictum lacinia maximus lectus. Curabitur diam lorem ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dui.",
          "Eti.",
          "Lectus."
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "short description I consequat ex dui cursus in porttitor, eros blandit commodo.",
      "long_description": "long description Vehicula non arcu in ultricies vitae. Mattis velit nisi pharetra, gravida aliquam tortor bibendum tortor fringilla et pulvinar at neque elementum, pretium metus a sit elit, id consequat laoreet tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dolor.",
          "Id.",
          "Felis."
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "short description Donec scelerisque mollis vehicula gravida, arcu eti bibendum tortor et.",
      "long_description": "long description Sodales vehicula turpis ex risus enim eu cursus lorem justo eros. Justo turpis donec tortor au faucibus elementum nisl curabitur. Quis eu metus lacinia. Ante cras a donec ultricies eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Iaculis.",
          "Aliquam.",
          "Pulvinar."
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "short description Condimentum non nisl scelerisque placerat. Neque quisque felis diam blandit.",
      "long_description": "long description Bibendum sed dui vulputate blandit eu. Imperdiet sagittis adipiscing morbi maximus, sollicitudin dictum nam ut lacus, ex cursus turpis nulla gravida ipsum, a justo non etiam, purus ac commodo ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eget.",
          "Suscipit.",
          "Tempor."
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "short description Nulla quisque i lorem dolor orci tristique sagittis et placerat.",
      "long_description": "long description Massa morbi adipiscing cursus sodales sed magna nunc mollis, quisque morbi rhoncus ut et. Vitae natoque lacus commodo. Facilisis adipiscing mauris pharetra pretium id. Curabitur dui bibendum nisi nunc risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Commodo.",
          "Proin.",
          "Lacus."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Curabitur justo porttitor pellentesque hendrerit dignissim. In facilisis felis ac.",
      "long_description": "long description Finibus ipsum hendrerit au vel ac id, facilisis massa blandit dictum, quisque mollis imperdiet pretium lacinia aliquam. Massa non sapien commodo ornare mauris mi tincidunt proin. Velit ipsum leo lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempus.",
          "Ipsum.",
          "Metus."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Tempus cras cursus fringilla auctor fringilla nam, cras purus blandit.",
      "long_description": "long description Nibh metus ornare erat i porttitor sapien accumsan. Rhoncus eti tempus ac vel at ut. Au orci faucibus porttitor sapien lorem felis. Mauris vitae bibendum mauris. Lacinia nulla ut risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Id.",
          "Curabitur.",
          "Tristique."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Condimentum mauris pulvinar nisi consequat eget, pellentesque sed euismod lobortis.",
      "long_description": "long description Mi consequat dui maecenas purus ornare. Lacus mattis et arcu sit elit nisi. Bibendum proin nisi maximus ornare elementum faucibus ultrices. Aliquet accumsan hendrerit blandit vitae adipiscing. Sapien amet et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Facilisis.",
          "Sagittis.",
          "Eget."
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "short description Suscipit ante maximus gravida morbi. Tempor nam nunc tempus elit.",
      "long_description": "long description Facilisis orci vulputate laoreet nunc facilisis justo consequat. Accumsan vitae mattis fringilla, massa ipsum lorem lorem enim amet quisque aenean vel aenean finibus. Massa condimentum massa mattis. A scelerisque ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ante.",
          "Lacinia.",
          "Facilisis."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Est aenean aliquet ipsum lectus cursus, sodales cursus laoreet posuere.",
      "long_description": "long description Nam aenean dolor non eu suscipit id imperdiet bibendum eu lectus suscipit maecenas curabitur, id erat mi ultricies magna, vulputate pellentesque nunc mi, etiam tempor au est pharetra erat lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Orci.",
          "Viverra.",
          "Mollis."
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "short description Nisl magna sit viverra leo rhoncus curabitur a erat vestibulum.",
      "long_description": "long description Arcu scelerisque quisque et maecenas sollicitudin. Sodales condimentum pulvinar neque imperdiet e scelerisque. Cras enim eget pellentesque imperdiet ex eti, dolor scelerisque bibendum lacinia nulla consequat finibus. Metus pulvinar quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Commodo.",
          "Aenean.",
          "Neque."
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "short description Laoreet diam lobortis condimentum risus ut ligula nisi in condimentum.",
      "long_description": "long description Commodo quis cras commodo ex, ultricies enim tincidunt neque augue dolor nulla. Enim cursus cras accumsan bibendum risus maecenas leo nisi. Faucibus posuere vel donec elementum arcu. Iaculis curabitur curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Amet.",
          "Lectus.",
          "I."
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "short description Mattis vehicula a lacus in, adipiscing donec porttitor sagittis sodales.",
      "long_description": "long description Lorem i facilisis blandit ligula sollicitudin velit sed tortor hendrerit. Posuere enim ex au elementum tristique viverra dignissim faucibus. Curabitur justo lorem ipsum quis id nam ipsum maximus maecenas in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Vestibulum.",
          "Mauris."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description Mauris a cras proin lobortis etiam orci, tortor vestibulum ex.",
      "long_description": "long description Morbi hendrerit quis fringilla lorem diam condimentum elit. Et ultrices magna sapien. Proin dui ipsum commodo. Maximus sapien sodales pulvinar orci iaculis. Auctor cursus vel tincidunt ac dictum turpis mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Turpis.",
          "Cras.",
          "Mi."
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "short description Adipiscing dui tristique sed consectetur condimentum scelerisque. Risus aliquet mollis.",
      "long_description": "long description Blandit nunc velit consequat ac. Condimentum lorem leo eget. Diam leo risus non sagittis lacinia, sapien iaculis enim nam. Laoreet nisi au ligula iaculis. Nisi bibendum elit tempor purus justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempus.",
          "Dolor.",
          "Accumsan."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Suscipit elit elit cras au eget finibus dictum tempor magna.",
      "long_description": "long description Enim maecenas tristique porttitor finibus, morbi maximus aliquam aliquet dolor mi accumsan, enim hendrerit accumsan lacinia iaculis non eget fringilla. Id ut aliquet tortor amet. Magna velit euismod tempus sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vulputate.",
          "Ut.",
          "Adipiscing."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description Mi laoreet ligula mollis tristique dui. A sed mauris orci.",
      "long_description": "long description I magna sodales donec iaculis donec natoque, faucibus lacinia gravida rhoncus. Aliquam erat nunc ante auctor lacinia orci ornare. Dignissim nibh porttitor tortor natoque. Tempor cursus massa accumsan nam aliquam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Elementum.",
          "Consequat.",
          "Donec."
      ]
    },
    {
      "name": "Storex",
      "short_description": "short description Ut gravida facilisis nisl felis. Quis id id massa e.",
      "long_description": "long description Aenean pharetra vehicula dolor leo, finibus dolor magna suscipit vestibulum. Cras commodo tortor amet neque. Pellentesque au ultrices faucibus mauris mattis pharetra placerat mattis eros, ac pretium mollis ornare lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lectus.",
          "Aliquam.",
          "Eget."
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "short description Vulputate vitae justo felis elementum nam mi aenean bibendum sagittis.",
      "long_description": "long description Vestibulum adipiscing magna laoreet vel nulla cras, sapien proin magna orci, sapien pulvinar arcu tincidunt. Quis eti tortor curabitur. Ac nulla a aliquet pretium vestibulum lobortis. Elementum condimentum rhoncus lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Lacus.",
          "Vel."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Risus in lectus id sed auctor in, rhoncus consectetur etiam.",
      "long_description": "long description Sodales mollis auctor risus nulla felis leo. Gravida euismod risus lacinia sed. Ligula nulla purus lobortis au leo eu tempor lorem risus, quis ultrices pellentesque lobortis neque nisi pellentesque pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sodales.",
          "Tincidunt.",
          "Elit."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Dictum curabitur eros velit ipsum purus risus massa facilisis velit.",
      "long_description": "long description Consequat e natoque cursus mollis eti ultrices. Mauris mauris vitae massa id sodales eros. Mattis sapien sit sapien lacus, nisl lobortis suscipit sapien aenean tristique placerat et tempor lorem sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ornare.",
          "Dui.",
          "Natoque."
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "short description Leo pharetra massa lacus enim, hendrerit amet nisi quisque dictum.",
      "long_description": "long description Sapien elementum enim eu pretium cursus felis. Cras dui ultricies mattis, dolor mauris i nibh, dignissim eti facilisis morbi commodo tempus. Bibendum neque tortor bibendum posuere risus, porttitor eti natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisl.",
          "Aenean.",
          "Tempus."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Suscipit eti ligula nibh tempus hendrerit suscipit metus posuere nulla.",
      "long_description": "long description Finibus vestibulum metus pulvinar sem, maecenas tincidunt id fringilla non mattis quisque scelerisque mattis e. Erat aenean consectetur ac quisque eros placerat, magna nibh au id. Risus est natoque scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Posuere.",
          "E.",
          "Porttitor."
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "short description Quis nisi facilisis pretium at nisl lacinia finibus vitae eu.",
      "long_description": "long description E etiam enim pharetra sollicitudin tempus, e justo arcu augue, a velit purus ipsum dictum mauris. Dignissim nulla et tempor diam posuere, pellentesque vestibulum iaculis dignissim. Donec aliquam ut et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ipsum.",
          "Et.",
          "Ipsum."
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "short description Bibendum metus viverra et e morbi. Dignissim au eros dui.",
      "long_description": "long description Adipiscing mollis sed auctor au. Diam nulla ante aliquet, proin ligula vulputate risus fringilla faucibus. Bibendum faucibus mattis vitae dictum ultrices. Vitae natoque proin erat i proin, bibendum maecenas nisl.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eget.",
          "Ipsum.",
          "Lectus."
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "short description Finibus vulputate ac mauris eu velit donec. Sodales non fringilla.",
      "long_description": "long description In augue quis ipsum purus sapien, donec neque pellentesque tempor. Adipiscing purus risus ligula in risus justo. Turpis sed arcu metus tortor, sit adipiscing curabitur ac, quisque enim curabitur leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Curabitur.",
          "Turpis.",
          "Ligula."
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "short description Nunc tempor tincidunt est morbi blandit a dolor donec imperdiet.",
      "long_description": "long description E eti etiam ornare sapien au, maecenas justo morbi ac mauris. Lacinia ipsum consequat est natoque donec. Vulputate ornare donec suscipit et, finibus risus quis nibh magna ut arcu ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Euismod.",
          "Maximus.",
          "Curabitur."
      ]
    },
    {
      "name": "Freecast",
      "short_description": "short description Accumsan erat euismod tempor sapien. Faucibus quis in ante nisl.",
      "long_description": "long description Tempus fringilla sollicitudin turpis sodales e ex suscipit, ornare viverra ut accumsan. Dolor velit eget sapien au consequat elit nisi, porttitor finibus lobortis finibus. Posuere cras at at blandit lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Etiam.",
          "Lectus.",
          "Cras."
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "short description Vel justo natoque viverra tempus donec, enim ut in amet.",
      "long_description": "long description Iaculis quisque eti lacinia lacinia. Quis elit lacinia at. Consequat finibus turpis ante, morbi tristique rhoncus lacus eti. Ante nam ornare at etiam fringilla ante. Pulvinar dui tristique sollicitudin ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Posuere.",
          "Quisque."
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "short description Faucibus sapien quisque arcu etiam, felis nibh lacinia a blandit.",
      "long_description": "long description Rhoncus est aliquet sollicitudin adipiscing aliquet euismod. Maecenas aliquam enim accumsan, scelerisque aliquet condimentum pharetra ac. Curabitur vulputate purus eti, non iaculis ex suscipit, bibendum auctor ligula posuere sapien magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nam.",
          "Cursus.",
          "Pellentesque."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Ut turpis e iaculis nisl elementum, ut tristique proin augue.",
      "long_description": "long description Imperdiet consequat tristique sagittis dignissim arcu aliquam ut. Nulla suscipit felis justo. Imperdiet tortor mattis dui cursus dolor. Laoreet facilisis pulvinar quis eget ante, vitae nam id aenean quisque i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Laoreet.",
          "Dictum.",
          "Adipiscing."
      ]
    },
    {
      "name": "Opticast",
      "short_description": "short description Maecenas sagittis lobortis facilisis vulputate. Id hendrerit fringilla leo bibendum.",
      "long_description": "long description Maecenas maximus morbi pharetra dui nisl. Tristique mi eget orci natoque cursus commodo. Dolor in nibh in. Dictum adipiscing vestibulum ex lacus, lacinia lectus pulvinar cras, ultrices vestibulum tristique tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Auctor.",
          "Enim.",
          "Tristique."
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "short description E accumsan ac ultrices tincidunt ut, bibendum amet condimentum proin.",
      "long_description": "long description Maximus aliquet orci aliquam lectus, iaculis risus ornare ultricies lacinia lobortis adipiscing nulla iaculis velit natoque aliquet, ultricies auctor orci nisi pretium, magna consequat condimentum auctor, felis eu cursus e.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquet.",
          "Ligula.",
          "Dignissim."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Sem nam felis porttitor rhoncus. Purus laoreet curabitur tempus vestibulum.",
      "long_description": "long description Porttitor faucibus nam faucibus a, lorem augue sagittis ultricies nunc. Leo tristique tempus magna. Facilisis purus vulputate hendrerit. Consectetur non pharetra est donec curabitur. Aliquet e vehicula mollis imperdiet aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Au.",
          "I.",
          "Scelerisque."
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "short description Sodales leo viverra hendrerit dignissim, aliquam sem nunc hendrerit vulputate.",
      "long_description": "long description Metus nam felis adipiscing aenean ultrices ipsum orci. Erat dignissim amet non, ultrices elit e morbi enim. Cursus condimentum natoque ornare lobortis in bibendum id. Eros ut leo purus viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Et.",
          "Purus."
      ]
    },
    {
      "name": "Sealine",
      "short_description": "short description Pretium adipiscing fringilla vitae scelerisque. I sem enim id sit.",
      "long_description": "long description Sed curabitur sed eros nam, tortor aenean sem at sem quis massa. Hendrerit e sed mi massa au rhoncus blandit tempus nulla elit diam cursus. Purus pharetra quis nam a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Quisque.",
          "Pretium.",
          "Porttitor."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Quisque pharetra cras ornare arcu tristique. Dignissim sem est curabitur.",
      "long_description": "long description Elementum gravida velit lobortis massa scelerisque purus vestibulum. Cursus laoreet eget ligula. Consequat sagittis ex et, porttitor pharetra lobortis sapien nam ac rhoncus eu elementum euismod. Cras rhoncus velit au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Condimentum.",
          "Posuere.",
          "Natoque."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Ligula non ut dolor mattis, eu nibh mollis consequat massa.",
      "long_description": "long description Vel eti neque mauris maximus. Neque ac sed quisque et. Purus velit maecenas nisl dictum ligula curabitur posuere. Sapien tincidunt turpis ornare non ex turpis accumsan, magna placerat elit dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dignissim.",
          "Dui.",
          "Purus."
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "short description Quisque sodales curabitur quis viverra a imperdiet nisi posuere justo.",
      "long_description": "long description Pulvinar hendrerit a i condimentum. Vel ex pretium vulputate non laoreet et erat. A eget sem ultrices tempor, bibendum mollis vitae donec i. At ultricies aliquet eros. Sit eu gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempor.",
          "Facilisis.",
          "Tempor."
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "short description Sollicitudin ac ornare turpis viverra i, a augue viverra sodales.",
      "long_description": "long description Consectetur vel massa cursus id lacinia, lacinia commodo elit purus commodo nibh tempus turpis lobortis, purus eros justo magna quis lectus. Massa blandit posuere nibh commodo, i augue vel arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cras.",
          "Ultrices.",
          "Dui."
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "short description Tincidunt e at accumsan curabitur metus nunc augue posuere felis.",
      "long_description": "long description Tempus nisi i vehicula eti eu iaculis condimentum natoque blandit eros natoque, massa aliquam eget diam sodales. Lobortis tristique ut iaculis nam. Leo tincidunt pulvinar id eu pretium faucibus iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Imperdiet.",
          "Nisl.",
          "Porttitor."
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "short description Lobortis eti est et commodo ultricies mattis aliquam laoreet ut.",
      "long_description": "long description Placerat nisl vestibulum scelerisque rhoncus finibus tempor, sollicitudin suscipit fringilla accumsan natoque maximus. Ligula hendrerit mattis lectus. Nibh etiam dictum elementum sollicitudin. Risus neque eti finibus massa consequat magna sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Porttitor.",
          "Mi.",
          "Consequat."
      ]
    },
    {
      "name": "Conixco",
      "short_description": "short description Tincidunt ornare eu eros viverra blandit leo neque ut arcu.",
      "long_description": "long description Elementum finibus nunc justo nam nunc adipiscing maximus ut. Finibus id tincidunt tincidunt hendrerit condimentum suscipit nisi, nunc donec porttitor pharetra bibendum erat sagittis sollicitudin. Proin laoreet justo donec mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Purus.",
          "Amet.",
          "Aliquet."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Donec sit placerat felis gravida lacinia. Lobortis vestibulum gravida elementum.",
      "long_description": "long description A pretium lorem a morbi. Bibendum dictum vestibulum diam ante eros aenean, faucibus est risus dolor dictum, sodales tortor felis sed. Imperdiet nisi vulputate nisi. Augue enim ultrices non ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Justo.",
          "Finibus.",
          "Etiam."
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "short description Quisque et vehicula facilisis gravida elementum tristique sapien purus pharetra.",
      "long_description": "long description Quis eros finibus euismod commodo euismod, sed pulvinar tempor lectus justo enim a sodales sollicitudin accumsan. Mauris e quis facilisis amet tristique. Morbi neque dolor quisque, aliquet porttitor dignissim bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vestibulum.",
          "Consectetur.",
          "Lacinia."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Suscipit nibh ac cras eros. Ultrices turpis suscipit eu vulputate.",
      "long_description": "long description Quis est sollicitudin sodales turpis in, rhoncus amet pharetra in amet vel, orci curabitur eu placerat id gravida ex auctor viverra blandit erat donec sapien lacinia curabitur commodo eti turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "I.",
          "Cras.",
          "Velit."
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "short description Tristique maecenas felis tempor turpis ligula. Facilisis eros ligula mollis.",
      "long_description": "long description Nam nunc scelerisque mattis eros, leo gravida et nunc ornare diam, lacus nisi suscipit diam mi elementum rhoncus placerat. Bibendum sollicitudin mauris adipiscing mi lacinia auctor maximus fringilla sed lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Aliquam.",
          "Mi."
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "short description Eros accumsan ipsum in blandit eros metus amet nisi mattis.",
      "long_description": "long description Tempor tortor lacinia blandit quisque vehicula nibh. Mollis consequat aliquet finibus. Commodo elementum risus amet nunc tincidunt lacus at pretium posuere. Neque placerat risus amet lorem sodales, bibendum ut ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Facilisis.",
          "Condimentum.",
          "Ligula."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Ipsum leo ante enim finibus lectus lectus consequat ultrices imperdiet.",
      "long_description": "long description Quisque diam vitae laoreet aliquet lacinia cras. Nulla iaculis tristique ut lectus purus mauris, est eti elementum eros pharetra elit lacus. Nulla porttitor leo justo donec turpis lobortis nam imperdiet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eros.",
          "Est.",
          "Mauris."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Finibus at pretium etiam risus. Au aliquam scelerisque adipiscing finibus.",
      "long_description": "long description Ex curabitur accumsan erat vestibulum sit elementum lobortis. Leo erat pulvinar rhoncus tristique sapien tempor, aenean auctor bibendum turpis tortor purus donec. Tortor lacus etiam sollicitudin, erat lacus placerat tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dictum.",
          "Natoque.",
          "Placerat."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Dictum est facilisis amet lacinia est. Sem vel ex vulputate.",
      "long_description": "long description Nunc enim rhoncus suscipit porttitor sem felis pulvinar justo adipiscing massa tempor donec sagittis nulla. Lacinia facilisis accumsan nam nam massa id in dictum. Tristique tempus ex tempor lectus turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "In.",
          "Facilisis.",
          "Eget."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Cras lacinia velit mauris curabitur. Vehicula viverra morbi ut adipiscing.",
      "long_description": "long description Placerat ex sagittis augue sit nisl laoreet est purus. Dignissim sem maecenas nunc quisque metus rhoncus tincidunt lobortis nulla tempus placerat euismod, tincidunt e ante vitae in ultrices e metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ipsum.",
          "Morbi.",
          "Maecenas."
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "short description Lobortis eros lacinia elementum ultricies elit consequat vestibulum leo metus.",
      "long_description": "long description Tincidunt curabitur ligula commodo leo consectetur, leo pellentesque vestibulum hendrerit curabitur, magna consequat leo pretium condimentum. Vestibulum laoreet mauris aliquet amet enim accumsan maecenas etiam, suscipit aenean tempus metus condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vel.",
          "Dolor.",
          "Curabitur."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Donec quis massa auctor gravida. Purus placerat enim elementum lorem.",
      "long_description": "long description Ligula posuere erat gravida at. Hendrerit bibendum pretium aenean. Felis rhoncus velit arcu sagittis tempor, ex augue dolor lorem vestibulum scelerisque, a eti ex bibendum blandit erat. Suscipit lectus faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nam.",
          "Imperdiet.",
          "Proin."
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "short description Ac lobortis curabitur bibendum lacinia. Dui erat nisl id ut.",
      "long_description": "long description Ipsum mi i tortor nam, mattis au lacinia sodales bibendum lorem lacinia morbi tortor pellentesque risus dui, massa mi enim et iaculis ligula in. Magna in dignissim morbi aliquam nisl.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Posuere.",
          "Eti.",
          "Sit."
      ]
    },
    {
      "name": "Proline",
      "short_description": "short description Dolor etiam rhoncus ornare a vel pretium aenean etiam pharetra.",
      "long_description": "long description Porttitor lacus iaculis iaculis elementum velit morbi. Sed consectetur morbi amet quis iaculis aliquam, scelerisque consequat faucibus ex. Quisque vitae ut velit, eu mauris vel laoreet, cursus leo sapien i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Non.",
          "Nunc."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Ultrices orci eu turpis rhoncus augue quis diam consequat nisl.",
      "long_description": "long description Elementum sollicitudin risus cursus massa. Id aliquam maecenas laoreet finibus arcu nibh rhoncus ex. Elementum dignissim mollis amet nisl. Tempor donec turpis suscipit in mollis tincidunt ultrices maximus pellentesque commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Neque.",
          "A.",
          "Tempor."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Condimentum neque dui metus orci. Etiam erat sed mollis leo.",
      "long_description": "long description Ac accumsan eti ac ut. Aenean iaculis erat aliquam, metus mattis elit mi. Sodales arcu quisque tortor proin. Vestibulum tortor eti augue dictum nulla, ligula iaculis curabitur tempor consequat scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Purus.",
          "Vel.",
          "Euismod."
      ]
    },
    {
      "name": "Opticast",
      "short_description": "short description Risus tristique eget proin consectetur gravida vitae. Fringilla pulvinar e.",
      "long_description": "long description Massa iaculis vel tristique felis donec dolor. Tristique diam neque lobortis, tempor sodales imperdiet natoque. Eu commodo purus vitae. Dolor adipiscing viverra porttitor fringilla pellentesque fringilla ornare vulputate vestibulum etiam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ac.",
          "Lobortis.",
          "Accumsan."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Iaculis ut hendrerit aliquam non felis ultrices. Pellentesque ex cursus.",
      "long_description": "long description Consectetur faucibus nisl eu nam bibendum gravida. Accumsan orci pulvinar natoque bibendum proin dictum, vestibulum magna dignissim dui accumsan mi ornare, pellentesque tortor tempus eget, tortor facilisis ex eros risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Au.",
          "Ipsum.",
          "Quisque."
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "short description Magna condimentum condimentum mauris suscipit nisi erat pellentesque porttitor ante.",
      "long_description": "long description A pulvinar dictum justo au eget. Donec massa facilisis sagittis, posuere vitae nulla eti justo dictum quisque. Finibus curabitur e diam posuere gravida leo. Eu i in arcu au id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Ut.",
          "Erat."
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "short description Aliquam aenean mollis sollicitudin pellentesque sed, felis consectetur sapien lectus.",
      "long_description": "long description Blandit tincidunt suscipit posuere nisl viverra. Risus euismod vehicula in blandit nam, lobortis vehicula erat tempus, iaculis risus gravida justo. I tristique turpis maecenas. Tortor i curabitur posuere sit amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mattis.",
          "Faucibus.",
          "Sit."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description I tempus nulla ligula nibh elit. Erat lacus ipsum id.",
      "long_description": "long description Nisl ex lectus etiam sapien, aliquet diam proin lacinia donec i finibus mattis risus cursus. Enim turpis justo lacinia, adipiscing id sagittis sit elementum dolor sodales diam risus euismod curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Elit.",
          "Pellentesque.",
          "E."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Sagittis id magna faucibus risus suscipit commodo a sollicitudin au.",
      "long_description": "long description In sodales dictum nunc iaculis auctor ornare. Non a ex tempor. Ipsum quisque consequat pulvinar. Nunc vitae donec neque augue aenean aliquet. Nisl velit lectus orci, euismod metus nibh finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consequat.",
          "Ex.",
          "Lorem."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Mattis ornare mauris pharetra fringilla. Donec sollicitudin a sed eget.",
      "long_description": "long description Purus sodales elit ornare rhoncus cras est. Massa cras eti diam. Dignissim tincidunt quisque non lorem eti aliquet pretium vehicula arcu, tristique ut vel amet aenean. Nam tempus ante arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vulputate.",
          "Scelerisque.",
          "Posuere."
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "short description Ultrices auctor rhoncus magna posuere pulvinar imperdiet id ipsum laoreet.",
      "long_description": "long description Posuere laoreet pellentesque sodales nibh ultrices bibendum. Orci at diam nam nunc, hendrerit mollis suscipit consequat proin proin. Cursus blandit lacus aenean purus. Nisi dolor porttitor nunc ligula ante vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Purus.",
          "Tincidunt.",
          "Sit."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description Non vel cras nisl est consequat consectetur, tempor nisl dolor.",
      "long_description": "long description Orci finibus ultrices faucibus hendrerit massa tempor etiam ut imperdiet. Mauris hendrerit vehicula felis in faucibus velit, vulputate eti nam eu. Tincidunt sollicitudin nunc dictum tristique eget. Mattis risus lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Placerat.",
          "Tincidunt.",
          "Dictum."
      ]
    },
    {
      "name": "Polygan",
      "short_description": "short description Aenean pulvinar aliquam metus faucibus. Vel et velit auctor tincidunt.",
      "long_description": "long description Natoque e nunc nulla nibh augue euismod au nunc, porttitor elit mollis scelerisque dui. Blandit mi in quis. Dolor cursus euismod justo blandit pharetra. Neque etiam ornare pulvinar posuere pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Elit.",
          "I.",
          "Risus."
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "short description Eros vitae auctor a sapien turpis tortor, adipiscing eu ornare.",
      "long_description": "long description Commodo neque mauris cras tempor justo viverra justo ipsum sed, consectetur consectetur ultrices id, tempus orci massa mauris etiam a eu fringilla. Ut lacinia pretium cras. Nisl maximus fringilla commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sapien.",
          "I.",
          "Suscipit."
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "short description Non aliquet lacinia nisi imperdiet dictum proin, natoque lacus lacinia.",
      "long_description": "long description Faucibus vulputate et consectetur mi, eros facilisis at tempor nulla sodales. Sapien lacus risus nunc elementum sagittis ornare faucibus, dui tristique quis neque nunc. Velit morbi placerat placerat sit proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Sollicitudin.",
          "Quisque."
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "short description Magna massa e nunc cursus. Quis vestibulum nunc et nunc.",
      "long_description": "long description Est nisi gravida ex gravida e condimentum, ac bibendum nibh bibendum justo cras elementum, risus viverra dui mauris facilisis ex facilisis hendrerit natoque ligula proin gravida. Elit pulvinar aliquam ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sodales.",
          "Augue.",
          "Sem."
      ]
    },
    {
      "name": "Sealine",
      "short_description": "short description Maecenas morbi ut sed lectus. Nibh commodo pellentesque natoque vehicula.",
      "long_description": "long description Consectetur felis imperdiet nibh nibh amet suscipit. Massa sodales magna vestibulum tristique tincidunt, turpis ante turpis pulvinar, eti curabitur eros rhoncus elementum ante porttitor donec vitae. Risus consectetur posuere tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consequat.",
          "Nisl.",
          "Sagittis."
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "short description Fringilla aliquam felis fringilla hendrerit erat. Proin fringilla condimentum finibus.",
      "long_description": "long description Pellentesque condimentum tempus purus proin enim neque et. Pulvinar i maximus sed viverra sollicitudin. Lacus diam leo bibendum justo ligula. Lacinia condimentum elementum bibendum auctor, augue quis sem lacus posuere.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Elit.",
          "I.",
          "Nisi."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Arcu accumsan e ornare rhoncus sem tristique nibh et risus.",
      "long_description": "long description Eti velit blandit justo vehicula ac tempus tortor, quis vehicula consequat non e, aenean au etiam hendrerit, diam arcu sollicitudin condimentum, elit sollicitudin eros i eget ornare tincidunt felis eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mauris.",
          "Quisque.",
          "Cras."
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "short description Placerat commodo ultricies metus pretium neque massa proin augue sit.",
      "long_description": "long description Cras aliquam mauris finibus ipsum magna iaculis turpis elit tristique purus e, leo ultricies tempor arcu. Faucibus commodo ultricies hendrerit, porttitor sollicitudin commodo a, diam orci bibendum tortor mi nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vel.",
          "Scelerisque.",
          "Elementum."
      ]
    },
    {
      "name": "Britech",
      "short_description": "short description Aliquet maecenas ex neque ultricies natoque ultrices, imperdiet mattis dui.",
      "long_description": "long description Condimentum quis sem ultrices suscipit est faucibus, quis ligula mi auctor ante maximus a condimentum morbi enim consequat, tristique metus condimentum risus sagittis sollicitudin pharetra hendrerit lacinia scelerisque vitae ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Viverra.",
          "Gravida.",
          "Diam."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Fringilla augue imperdiet est pulvinar. Pulvinar natoque accumsan magna quisque.",
      "long_description": "long description Risus at eget au mauris ac nisl laoreet tempor. I laoreet aenean velit i gravida. Diam condimentum aliquam quisque sem arcu nam, id ex nam erat. Augue aenean magna a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sed.",
          "Iaculis.",
          "Ipsum."
      ]
    },
    {
      "name": "Sophis",
      "short_description": "short description Est turpis cras rhoncus ligula proin nibh rhoncus ut consectetur.",
      "long_description": "long description Quisque blandit auctor i morbi. Ultrices hendrerit et eti tempus eti sagittis nunc orci cursus consequat, imperdiet ante ultrices justo morbi aliquam eu tempus au laoreet. Imperdiet porttitor cursus ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "E.",
          "Porttitor."
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "short description Orci augue tincidunt nisl sem cursus. A proin massa in.",
      "long_description": "long description Pharetra felis lacinia pretium eros nibh vehicula aliquam euismod diam lectus tincidunt ac eu proin tempor natoque ut. Blandit id lacus vestibulum. Cursus sollicitudin ut felis i dolor tempor gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Metus.",
          "Amet."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Ipsum ante magna e e. Ex eu diam lacinia mattis.",
      "long_description": "long description Ultrices nibh rhoncus leo rhoncus eros aenean aliquet eget tincidunt viverra id. Risus sodales mollis pretium suscipit eti pharetra ante diam. Non posuere eros faucibus curabitur suscipit augue dolor quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Nunc.",
          "Est."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Scelerisque consectetur mauris maecenas posuere auctor nisl metus ex quisque.",
      "long_description": "long description Vestibulum elit etiam orci ultricies e pulvinar lacinia viverra vitae, nunc aliquam proin lacinia risus sem pharetra nulla. Cursus auctor id nisl. Adipiscing consequat lorem vel etiam lacus scelerisque iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Consequat.",
          "Porttitor."
      ]
    },
    {
      "name": "Polycore",
      "short_description": "short description Finibus nulla laoreet leo cras sapien posuere, quis iaculis et.",
      "long_description": "long description Lacus diam sapien at condimentum. Nibh amet sagittis enim suscipit. Gravida lorem lectus pulvinar mollis purus iaculis vestibulum. Ultrices vehicula mollis tempus laoreet ornare consectetur adipiscing. Proin adipiscing vel vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Amet.",
          "Elementum.",
          "Lacinia."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description Pharetra elementum augue aliquam in nunc. Porttitor vel finibus tempor.",
      "long_description": "long description Curabitur pretium orci posuere arcu. Pulvinar maecenas vehicula nibh ultrices sollicitudin, risus nisi sapien blandit lacinia id neque auctor a porttitor enim mollis sollicitudin etiam lacus, sit lorem eti cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consequat.",
          "Neque.",
          "Rhoncus."
      ]
    },
    {
      "name": "Proline",
      "short_description": "short description Viverra consequat placerat aenean neque. Rhoncus augue felis vestibulum est.",
      "long_description": "long description Laoreet nibh quisque scelerisque amet tincidunt. Eti aliquam vehicula vehicula gravida, pharetra ut proin augue, ante velit nibh quisque hendrerit rhoncus placerat leo sed. Lectus nunc suscipit non finibus fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Curabitur.",
          "Lacus.",
          "Rhoncus."
      ]
    },
    {
      "name": "Storex",
      "short_description": "short description Adipiscing iaculis aenean finibus lacus morbi auctor. Eu risus metus.",
      "long_description": "long description Erat pellentesque cras rhoncus posuere velit, pellentesque lorem sodales nam. Vulputate magna facilisis ultricies. Commodo pharetra mattis sed ultrices pharetra facilisis in erat blandit. Maecenas lectus pellentesque consectetur proin massa.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aenean.",
          "Adipiscing.",
          "Mattis."
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "short description Tempus mattis dictum mi arcu. Ut iaculis rhoncus cursus magna.",
      "long_description": "long description Vestibulum facilisis et risus pulvinar ex massa. Placerat lobortis velit tempus consequat. Sagittis e in etiam velit magna curabitur natoque. Dui dolor finibus sollicitudin sodales. Imperdiet risus etiam eti sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aenean.",
          "Vitae.",
          "Eu."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Metus id vulputate eros neque rhoncus justo iaculis ipsum at.",
      "long_description": "long description Vulputate sodales leo ultrices enim sem mollis. Ligula i natoque accumsan ex. Commodo sodales au e massa lorem metus dolor lectus nisl, magna lacinia vehicula eti e aliquam a a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Elit.",
          "Tempor."
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "short description Erat consectetur auctor leo maximus mauris eget maecenas ultricies ut.",
      "long_description": "long description Lectus pulvinar sodales lorem curabitur sollicitudin erat mattis rhoncus. Amet accumsan proin vulputate, etiam vehicula gravida aliquet ex au a lacinia. Dignissim nunc metus elementum mi. Pretium lobortis tincidunt sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vulputate.",
          "Erat.",
          "Placerat."
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "short description Placerat erat placerat cras neque, lacus id augue risus a.",
      "long_description": "long description Erat enim enim nulla tortor pulvinar, quis accumsan enim massa, dui vel posuere viverra. Tortor leo nam laoreet, mauris magna sapien vulputate lobortis viverra. Lobortis laoreet et id aliquam maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Viverra.",
          "Quis.",
          "Nam."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Arcu metus e nunc consequat ligula elementum sit tincidunt diam.",
      "long_description": "long description Metus enim a scelerisque vulputate. Lacinia erat mattis maecenas sollicitudin sed tempus rhoncus. Blandit dignissim risus consectetur. Etiam nunc vestibulum auctor fringilla posuere dolor hendrerit, lacinia ex pulvinar iaculis iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cras.",
          "Rhoncus.",
          "Massa."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Eros velit metus vehicula cras. Sit vulputate pellentesque maximus ex.",
      "long_description": "long description Porttitor lacinia elit eu adipiscing ex. Quisque aliquet pharetra ipsum. In elementum leo vehicula, velit nibh a turpis. Viverra nam nulla nibh. Felis ante elementum nisi, etiam aenean pulvinar tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Natoque.",
          "Sagittis.",
          "Dolor."
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "short description Elit enim mollis cras laoreet tristique au. Fringilla euismod faucibus.",
      "long_description": "long description Id id sem tortor pharetra at. Mattis blandit facilisis nunc placerat in. Auctor suscipit facilisis a lobortis. Accumsan tempor sapien lobortis dictum non dui lorem maecenas id nulla blandit mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Gravida.",
          "Risus.",
          "Magna."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Suscipit purus maecenas scelerisque donec lobortis dignissim pulvinar facilisis mauris.",
      "long_description": "long description Au elit dui nam quisque leo. Sollicitudin ante elit e auctor lacinia nibh orci eu consequat dignissim magna vestibulum. Mauris nulla ultrices sollicitudin commodo tempus lacus. Leo amet a elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dignissim.",
          "Blandit.",
          "Elementum."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Ante fringilla pulvinar proin sodales ex. Eti adipiscing ex porttitor.",
      "long_description": "long description Orci purus et posuere ut, placerat amet sem blandit at placerat maximus dui, vel nisl sed leo. Suscipit natoque bibendum vulputate ultrices ex condimentum aenean nunc arcu. Aenean metus morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pellentesque.",
          "Dui.",
          "Blandit."
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "short description In erat sapien sed diam i dictum tempus commodo tortor.",
      "long_description": "long description Diam ipsum vitae proin orci diam, aliquet sodales etiam metus. Morbi sodales eget nam sollicitudin. Leo sollicitudin faucibus cursus a diam imperdiet turpis erat erat, porttitor tempor maximus eros ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dignissim.",
          "Neque.",
          "Turpis."
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "short description Sed donec fringilla aenean consectetur. Vel est mauris sollicitudin finibus.",
      "long_description": "long description Eget maximus ante ligula pretium. Aliquet sit ut porttitor est. Erat consectetur eget vestibulum. Dignissim auctor nisi est sodales faucibus risus ante maximus. Cursus ante i laoreet. Pellentesque pretium maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempor.",
          "Viverra.",
          "Aliquet."
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "short description Eros au leo nulla finibus lobortis, donec eget purus risus.",
      "long_description": "long description Non facilisis neque eget commodo ultricies neque lectus, mi accumsan viverra nulla. Metus fringilla ut at, justo nunc aliquam magna a. Nunc dolor maecenas purus eget dui sagittis massa mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Eti.",
          "Ex."
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "short description Iaculis faucibus cursus tincidunt maecenas adipiscing maximus lectus euismod magna.",
      "long_description": "long description Velit accumsan in sagittis ante eti, mi dui pellentesque mattis consectetur posuere sapien justo tristique accumsan lacinia. Nisl tincidunt consequat in. Vulputate mattis eros auctor donec maximus ac arcu vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Diam.",
          "Vehicula.",
          "Aliquet."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Nisl id lacinia aliquam enim pellentesque dictum imperdiet sed curabitur.",
      "long_description": "long description Eti tincidunt diam eti aliquet dignissim nisi vestibulum id sit consectetur purus quisque nibh. Lacinia dui iaculis gravida. Augue neque in non, pretium ornare felis vulputate, turpis purus ligula sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Ante.",
          "Non."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Vitae auctor morbi quisque augue nunc. Mauris hendrerit quis mi.",
      "long_description": "long description Tempor etiam proin pulvinar arcu diam i ultricies gravida i proin est placerat cursus vitae. Consequat pretium mattis enim enim maecenas auctor au massa dignissim. Erat morbi non maecenas orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Viverra.",
          "Suscipit.",
          "Sollicitudin."
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "short description Aenean scelerisque curabitur imperdiet morbi. Non ornare ut quisque vehicula.",
      "long_description": "long description Aliquet erat augue faucibus elementum pellentesque adipiscing porttitor ante. Orci euismod e commodo, arcu non lobortis sapien, suscipit pretium pellentesque ipsum a, erat natoque sagittis leo, lobortis cras metus et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pretium.",
          "Sollicitudin.",
          "Mauris."
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "short description Felis diam ipsum eti nam tristique. Est nisi arcu quis.",
      "long_description": "long description Maecenas amet facilisis mattis elit dui commodo turpis, lorem blandit sit finibus tincidunt condimentum tempus ac lobortis faucibus metus ipsum. Consequat mollis nulla sodales. Ac pretium adipiscing sollicitudin mollis risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Imperdiet.",
          "Purus.",
          "Eu."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Nisl a iaculis non eros ipsum dignissim consectetur ultrices lacinia.",
      "long_description": "long description Sed dignissim nisi cursus lacinia pulvinar. I lectus etiam sapien i tincidunt vitae elit laoreet risus. Iaculis faucibus felis finibus. Tristique hendrerit at tristique nibh lacinia non, quis sed eu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Iaculis.",
          "Eu.",
          "Sapien."
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "short description Risus sapien imperdiet sed lacinia enim faucibus orci leo faucibus.",
      "long_description": "long description Hendrerit lectus condimentum non augue arcu, purus ut ornare nisl. Pellentesque iaculis lacus sagittis consequat non, nunc auctor diam adipiscing. Et pulvinar nam felis dui commodo tortor natoque accumsan elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Elit.",
          "Diam.",
          "Vehicula."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Viverra finibus cras consectetur elit. Leo ante aenean est at.",
      "long_description": "long description Amet tempor vel fringilla commodo posuere lacinia, a eget tempus eu. Vulputate eros ante consequat, ex nisl lacus adipiscing, sem mauris fringilla aliquet sed orci scelerisque est nunc purus pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Vestibulum.",
          "Sodales."
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "short description Nisl auctor eu eros sed laoreet consequat. Hendrerit tortor vulputate.",
      "long_description": "long description E erat felis porttitor at. Ac lacinia enim nulla auctor, lectus morbi mattis cursus dolor et. Et lacinia tristique aenean. Commodo dui laoreet eti. Pretium iaculis cras nisl vel velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Euismod.",
          "Rhoncus."
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "short description Nunc felis maximus accumsan accumsan sem aenean vestibulum nisi pretium.",
      "long_description": "long description Dignissim maximus turpis ipsum imperdiet. Velit vel placerat cursus facilisis. Mattis ornare i quisque accumsan, viverra in metus laoreet condimentum bibendum, faucibus i aliquam i ultrices, commodo ligula cras e.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Augue.",
          "Iaculis.",
          "Adipiscing."
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "short description Purus diam et magna consequat blandit sed tortor laoreet orci.",
      "long_description": "long description Hendrerit lacinia sapien orci consequat. Dignissim ligula est bibendum tempus laoreet velit, dui leo bibendum tristique. Sapien mollis justo vestibulum a. Felis accumsan viverra sagittis, posuere tristique mollis ultricies elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Condimentum.",
          "Fringilla.",
          "Elit."
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "short description Ex in accumsan gravida elementum donec, cras auctor a proin.",
      "long_description": "long description Sodales in id a tempor ornare pellentesque in, lacus aliquet condimentum nibh est neque lobortis vulputate sem, maecenas aliquam condimentum cursus orci, dictum dui ligula sapien. Sed in cras ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tortor.",
          "Lobortis.",
          "Orci."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Id mattis elit tristique lacus, bibendum velit maximus consectetur velit.",
      "long_description": "long description Augue purus sem pulvinar eros lobortis et blandit. Non neque eros aliquam. Finibus ligula laoreet condimentum eu scelerisque. Mi justo dictum au, mollis maximus accumsan id, suscipit tristique posuere ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vehicula.",
          "Neque.",
          "Mi."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Nibh id cursus mauris neque lorem. Porttitor facilisis nunc gravida.",
      "long_description": "long description Ipsum curabitur nunc eu fringilla, maximus maecenas justo etiam tempus. Hendrerit arcu at dignissim. In lobortis amet est morbi et nisi vestibulum mollis morbi proin sagittis quisque facilisis aenean consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacus.",
          "Ex.",
          "Ex."
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "short description Tempus e sapien est aliquam ex, quisque natoque au ligula.",
      "long_description": "long description Scelerisque et sed fringilla eu, vel posuere curabitur lacinia laoreet. Sapien vehicula au imperdiet. Rhoncus maximus auctor morbi tempus augue nunc massa est felis cursus. Ultricies aenean scelerisque lacinia et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "In.",
          "Sollicitudin.",
          "Mi."
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "short description Justo dignissim lacinia laoreet a diam placerat curabitur enim mollis.",
      "long_description": "long description Finibus non neque accumsan erat erat lacinia proin. Rhoncus justo vel eget ipsum nibh curabitur pellentesque hendrerit ornare consectetur mattis suscipit sit. Leo mollis mollis nulla etiam at dolor lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Rhoncus.",
          "Natoque.",
          "Porttitor."
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "short description Nunc sed velit iaculis metus, maximus nisl scelerisque eti nisl.",
      "long_description": "long description Au est finibus pharetra nisl, iaculis ante nisi sapien justo maecenas placerat dolor porttitor lobortis e lectus, justo tincidunt risus augue. Tincidunt scelerisque placerat erat. In fringilla sollicitudin a aliquam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Leo.",
          "Purus.",
          "Sagittis."
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "short description Tempus au gravida tristique ligula. Blandit turpis neque enim hendrerit.",
      "long_description": "long description Posuere velit est commodo mauris. Eget pretium rhoncus faucibus commodo vitae sodales suscipit, tincidunt a proin vehicula aenean nisl, metus laoreet mattis non. Nunc pretium vestibulum tempus. Eu nam et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "E.",
          "Arcu.",
          "Enim."
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "short description Etiam risus auctor velit ultrices sit, adipiscing condimentum adipiscing i.",
      "long_description": "long description Viverra pretium sit donec nisi, arcu placerat vehicula erat, consequat i scelerisque ultrices. Aliquet et et scelerisque. Dignissim tristique blandit placerat elit, sed i nunc nibh faucibus donec etiam nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Risus.",
          "Ex.",
          "Tortor."
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "short description Ultricies maecenas aliquam risus massa amet. Ornare nunc adipiscing accumsan.",
      "long_description": "long description Consectetur diam i donec pretium. Pellentesque ligula velit ipsum neque, at mauris eros neque quisque consectetur ut. Quisque sem neque quisque. Sem justo metus tristique. Consectetur et et aliquam sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sed.",
          "Accumsan.",
          "Lorem."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Finibus nunc sed ac iaculis metus vehicula e id risus.",
      "long_description": "long description Consequat dui velit elementum vestibulum, lacinia quis tincidunt id erat ornare, e aenean vulputate leo. Dolor diam ante tristique leo vulputate id, i nisi pharetra lacinia. Pulvinar tempor sem vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vitae.",
          "Augue.",
          "Nibh."
      ]
    },
    {
      "name": "Proline",
      "short_description": "short description Finibus etiam mattis quis blandit, ornare pellentesque ultrices cursus curabitur.",
      "long_description": "long description E cras scelerisque dictum morbi. Laoreet nam arcu pretium. Vehicula aenean felis elit au, justo lacinia vitae nulla sapien. Curabitur neque dictum id, eros consequat pretium tincidunt ornare aliquet purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Est.",
          "Ex.",
          "Ultrices."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Eros est nisi lacinia viverra euismod justo mattis ante commodo.",
      "long_description": "long description Faucibus id ligula hendrerit iaculis facilisis eti. Morbi proin in enim amet est. Auctor est risus rhoncus purus, enim dictum curabitur at mi et lacus augue vel aliquam auctor ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Laoreet.",
          "Lacus.",
          "Lectus."
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "short description Bibendum ex quis cursus maximus, vehicula ante vestibulum accumsan vulputate.",
      "long_description": "long description Accumsan finibus purus e e finibus, sagittis pharetra quis tempor commodo dignissim a lorem facilisis, magna bibendum blandit sapien posuere a placerat eros consequat tortor. Tincidunt leo euismod posuere in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Enim.",
          "Tempor.",
          "Purus."
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "short description Pretium est diam velit ornare mi eu fringilla orci elementum.",
      "long_description": "long description Lorem maximus id non sodales ultricies eget. Cras nibh diam faucibus erat, placerat elit accumsan orci sit, risus aliquet risus lacinia eu lacus. Sapien auctor diam faucibus. Viverra turpis dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Commodo.",
          "Commodo."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Nisi consequat facilisis diam ultricies rhoncus au sagittis blandit pellentesque.",
      "long_description": "long description Euismod elit eget gravida ut adipiscing au porttitor mi. Ante turpis dignissim arcu ornare. Accumsan proin ultricies consequat. Dui justo posuere fringilla, tempus enim magna ex scelerisque sodales arcu nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sed.",
          "Nisi.",
          "Iaculis."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Sem at vestibulum morbi accumsan at nam ut ac mollis.",
      "long_description": "long description Dignissim vitae mollis magna nibh dignissim consequat lobortis sollicitudin. Mollis arcu dui lacinia donec ligula imperdiet viverra massa ultricies turpis. Tempor euismod quis aliquet posuere in. Maximus aenean suscipit vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "Purus.",
          "Natoque."
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "short description Suscipit adipiscing pharetra aliquam natoque dui. Purus ut nulla eros.",
      "long_description": "long description Ultrices eu dolor imperdiet elementum arcu ante, placerat lacinia pellentesque lacus, posuere vitae vulputate eu quis, lectus accumsan pellentesque ex. Cursus felis felis eget maximus, au orci lacinia massa tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Suscipit.",
          "Nisl.",
          "Euismod."
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "short description I metus mi bibendum vestibulum lacinia. Viverra i pellentesque ut.",
      "long_description": "long description Pharetra e aliquet vel pellentesque, sit iaculis vel neque sit imperdiet dictum lacus i mattis vestibulum. Lectus elit cursus cursus. Mollis lorem mauris posuere aenean elit suscipit, finibus accumsan elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Porttitor.",
          "Enim.",
          "Nulla."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Euismod aliquet maximus purus dui. Gravida vestibulum finibus dui metus.",
      "long_description": "long description Lacinia condimentum turpis facilisis pretium leo lacinia dictum nisi augue, curabitur curabitur vulputate e, ligula sapien orci leo. Cras mollis in mi pulvinar lectus ex mi iaculis, ornare pharetra quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ut.",
          "Blandit.",
          "Viverra."
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "short description Euismod lobortis facilisis dolor proin purus eti mattis accumsan tempus.",
      "long_description": "long description Pretium quisque blandit magna nisi dui et. Fringilla maecenas vehicula morbi auctor, sed ac metus sem, aliquam cursus amet finibus neque, sed ligula ex turpis donec. Justo morbi augue proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sed.",
          "Elit.",
          "Ut."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description E sapien a faucibus turpis vestibulum, dignissim ultrices donec neque.",
      "long_description": "long description At lobortis posuere accumsan commodo i. Bibendum turpis amet ultricies aenean. Facilisis ut dui dui. Adipiscing id laoreet quis ac hendrerit lobortis a pharetra est consectetur lorem velit iaculis donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dui.",
          "Erat.",
          "Dignissim."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Diam aliquam proin morbi au, lacinia au dui ligula ut.",
      "long_description": "long description Pharetra ipsum magna mauris scelerisque, tincidunt turpis condimentum est eti auctor erat turpis eget pulvinar elementum, lectus pellentesque cursus sapien consectetur. Dictum aliquet lorem est ultricies iaculis turpis auctor purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vehicula.",
          "Dolor.",
          "Felis."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Mollis lacus dignissim hendrerit rhoncus. Scelerisque ac tempus tempus proin.",
      "long_description": "long description Proin a sed vehicula scelerisque posuere elementum tristique pretium id sollicitudin auctor tempor, dolor ante vehicula eros proin tempus lacinia, dolor neque nisi metus tortor ac lacinia. Eros mattis aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nibh.",
          "Elementum.",
          "Euismod."
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "short description Dolor lacus lacus quisque et adipiscing porttitor hendrerit imperdiet mi.",
      "long_description": "long description Iaculis eros pretium tortor curabitur aliquam vehicula nibh nulla vestibulum. Vitae nibh vestibulum euismod, tincidunt finibus donec maecenas iaculis sagittis id. Eu ligula lacinia et metus leo, eros augue velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Est.",
          "Consequat.",
          "Euismod."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Consectetur eros pulvinar ac lectus est rhoncus. Sapien massa faucibus.",
      "long_description": "long description Enim dui maximus sit felis. At dignissim ligula iaculis cras donec ligula mattis suscipit augue. Elit aliquam dolor aenean imperdiet, cursus euismod aenean maecenas, au laoreet vulputate et enim vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Finibus.",
          "Sollicitudin.",
          "Laoreet."
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "short description Maecenas sit elit lobortis maximus morbi auctor eu augue lobortis.",
      "long_description": "long description Ut ultrices auctor donec nibh, mollis condimentum facilisis id. Nulla maximus viverra ipsum, iaculis velit quisque orci elit enim adipiscing a, posuere etiam lobortis placerat. Erat et i eget magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ligula.",
          "Ipsum.",
          "Diam."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Ut sagittis leo natoque est amet. Tempor turpis sapien at.",
      "long_description": "long description Finibus mattis posuere placerat tempor. Bibendum sit mattis sagittis. In ipsum eget vel est ultrices. Lectus consequat pellentesque est laoreet leo. Ut vestibulum cursus imperdiet lacus ex, dignissim dolor condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ut.",
          "Nam.",
          "Rhoncus."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Tempus iaculis accumsan purus laoreet sapien. Suscipit pellentesque augue eu.",
      "long_description": "long description Vulputate maecenas dignissim a in ut magna. Eti ex ultrices turpis ante ante curabitur, scelerisque lobortis pretium lacinia auctor sodales donec faucibus cras, e orci aliquam vitae quis bibendum cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ligula.",
          "Finibus.",
          "Lectus."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Tempus fringilla tempor in id quisque porttitor consectetur adipiscing ut.",
      "long_description": "long description Au sapien pretium quisque consequat, et pretium au lacus vehicula, mattis tincidunt eu proin commodo, nisi condimentum augue donec. Vitae dignissim euismod eu, tortor lacus at velit commodo sed maximus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Gravida.",
          "Quis.",
          "Sem."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Vestibulum eget eget fringilla pharetra eti, rhoncus mollis vel scelerisque.",
      "long_description": "long description Ultricies eu nisi elementum pellentesque curabitur, mi iaculis viverra sodales nisl consectetur felis purus est, augue quisque dignissim gravida nisl neque lectus finibus pretium enim. Viverra dolor dignissim ante quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eti.",
          "Ornare.",
          "Tortor."
      ]
    },
    {
      "name": "WestGate",
      "short_description": "short description E auctor mi tempus placerat ac lacinia consectetur nisi blandit.",
      "long_description": "long description Ornare nunc ante mattis facilisis donec id nunc justo, lacus donec facilisis ex nisl id viverra amet diam ac au sem sagittis. Morbi diam nulla a massa. Sed id ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Enim.",
          "Sagittis."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description Etiam dolor in consectetur nunc tortor auctor. Sit faucibus ultrices.",
      "long_description": "long description Lorem viverra vehicula ut cras blandit. Euismod nam eget porttitor lacus et porttitor. Ac etiam auctor pulvinar sollicitudin, curabitur eros condimentum ornare mi blandit et hendrerit, nisl ex ligula leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "Iaculis.",
          "Sapien."
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "short description Eti tristique iaculis aenean fringilla pharetra, sodales laoreet est laoreet.",
      "long_description": "long description Bibendum posuere dignissim lobortis mollis sit, velit ornare suscipit orci maximus ornare eget porttitor suscipit mauris ante, justo magna dignissim arcu, natoque ipsum posuere au, turpis vestibulum rhoncus suscipit pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eros.",
          "Bibendum.",
          "Dictum."
      ]
    },
    {
      "name": "Proline",
      "short_description": "short description Morbi nisl aenean vitae maximus nibh, placerat bibendum sit eu.",
      "long_description": "long description Lobortis leo vel imperdiet tincidunt vehicula aenean faucibus accumsan i aliquam diam quisque i tempor elementum ligula. Mauris a velit auctor lectus. Ut morbi lectus imperdiet mi, posuere ut lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacus.",
          "Quisque.",
          "Auctor."
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "short description Ultrices mattis posuere scelerisque ultrices at commodo mi eti proin.",
      "long_description": "long description Natoque etiam placerat vestibulum eti accumsan dui nulla au orci enim. Fringilla faucibus leo nunc nibh purus scelerisque scelerisque au lacinia vel proin sed dictum amet, placerat pellentesque nam diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "I.",
          "Justo.",
          "Adipiscing."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Nam et ornare aliquam e proin in sagittis massa fringilla.",
      "long_description": "long description At magna neque orci vel vestibulum quis e sodales, tempus maecenas nam massa at consequat aliquet. Tincidunt arcu morbi donec dolor, vestibulum eti sed justo viverra fringilla donec ac pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Fringilla.",
          "Metus.",
          "Aliquam."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Lacinia lobortis arcu vestibulum vehicula nam ultricies vel mauris elit.",
      "long_description": "long description Viverra eu condimentum felis tincidunt at orci, ligula diam gravida mollis ut aliquam. Ultricies porttitor mattis nulla velit consequat. Lacus consequat amet commodo maecenas, orci consequat tristique pretium vitae vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Magna.",
          "Viverra.",
          "Laoreet."
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "short description Massa vulputate aenean nunc vel nunc. Nulla posuere vulputate i.",
      "long_description": "long description Accumsan sed accumsan rhoncus proin dui. Maximus nunc adipiscing eget tristique, suscipit at amet rhoncus amet, diam maecenas condimentum ultrices, aliquam enim ac id est, scelerisque sollicitudin nisi diam hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eu.",
          "Elit.",
          "A."
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "short description Blandit felis at dui augue amet. Amet vestibulum leo a.",
      "long_description": "long description Neque i justo gravida ultrices ipsum. Dictum euismod mollis arcu sapien erat. Tempor consectetur i mattis sodales mauris quisque lorem, lectus non donec vulputate lacinia cursus pellentesque natoque facilisis sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Gravida.",
          "Aliquet.",
          "Ac."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description Sollicitudin eti tortor viverra elementum ultrices, pharetra neque mollis tortor.",
      "long_description": "long description Ut justo maximus nunc pharetra aliquet massa sem ligula bibendum iaculis, blandit facilisis posuere risus morbi sodales aliquam. Condimentum aliquet adipiscing nam orci facilisis. Commodo cursus orci ligula fringilla et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Lacinia.",
          "Sollicitudin."
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "short description Maecenas amet est nunc nisl auctor, ligula quis ex bibendum.",
      "long_description": "long description Ligula quis risus au massa nulla. Euismod sit non risus pulvinar laoreet donec. Mauris nulla mi pellentesque sit enim tempor, elit hendrerit condimentum amet elit. Ornare posuere consectetur quisque pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Auctor.",
          "Tempus.",
          "Augue."
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "short description Quis commodo i elit at, scelerisque aliquet donec dui pulvinar.",
      "long_description": "long description Sodales lacinia dictum nibh amet dolor vulputate tincidunt aliquet viverra lorem iaculis elit. Est consectetur ac porttitor augue. Condimentum suscipit imperdiet aliquet leo turpis. Sollicitudin mauris sed at gravida blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempor.",
          "Neque.",
          "Maecenas."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Arcu sodales quisque eros adipiscing. Diam vestibulum dui neque nunc.",
      "long_description": "long description Sem risus aliquet consectetur mi finibus etiam risus accumsan, a pellentesque proin sit et sed nibh nisl sapien. Tristique sagittis condimentum enim lacus curabitur metus proin at cursus ultricies augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Metus.",
          "Sagittis.",
          "Vehicula."
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "short description A maecenas massa aliquam erat, mattis lectus eti arcu proin.",
      "long_description": "long description Sem pharetra sed blandit nibh auctor suscipit dui, porttitor dictum nibh lobortis ex lacus sagittis, ipsum sollicitudin ultricies lacinia. Cras proin nulla aenean, metus justo aenean hendrerit. Aliquet tincidunt est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ligula.",
          "Consectetur.",
          "Nulla."
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "short description Lacinia accumsan pretium mi viverra. Lacus nunc finibus tortor sit.",
      "long_description": "long description Ornare quis eget est ut, commodo viverra curabitur felis tempus est aliquet, scelerisque pharetra sagittis cras mattis accumsan sollicitudin. Euismod lacinia tincidunt sem ipsum natoque. Mi pretium nisl elit nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vitae.",
          "In.",
          "Sed."
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "short description Felis blandit ante purus justo non imperdiet proin metus adipiscing.",
      "long_description": "long description Lobortis ex adipiscing mauris condimentum, fringilla morbi quis a maximus erat. Suscipit enim nisl au maximus laoreet felis. Mi id tortor i. Suscipit aliquet curabitur id nibh a amet ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mollis.",
          "Erat.",
          "Aenean."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Sollicitudin etiam nisi massa augue. Massa iaculis tempor scelerisque nunc.",
      "long_description": "long description Nisl velit commodo id mi nam pulvinar. Lorem sem dui hendrerit imperdiet ex. Risus nisi cursus eti maecenas ac dolor dictum purus neque. Mollis viverra justo erat, nam posuere eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lectus.",
          "Ipsum.",
          "Sodales."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Sed lacinia proin risus est magna quis ultrices finibus mattis.",
      "long_description": "long description E ultrices velit lacus lacinia vitae. Nibh tempus vestibulum id et bibendum cras scelerisque. Ex vehicula sagittis pharetra, amet proin consectetur vel vulputate sem e aenean rhoncus purus est erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "Arcu.",
          "Ultricies."
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "short description Scelerisque lorem turpis tempor aenean, rhoncus pretium neque consectetur blandit.",
      "long_description": "long description I in sollicitudin turpis sed etiam turpis eti maximus non accumsan erat. Nisi commodo nisl consectetur diam eti, pretium dignissim vitae diam amet vestibulum ultrices. Scelerisque cursus pretium leo au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Arcu.",
          "Blandit.",
          "Consectetur."
      ]
    },
    {
      "name": "Solexis",
      "short_description": "short description Non porttitor arcu i sollicitudin ultrices. Vestibulum dictum dolor imperdiet.",
      "long_description": "long description Adipiscing a diam lorem a lobortis risus velit adipiscing amet neque. Sem maximus lectus dictum lorem natoque. Blandit euismod massa ipsum mi lectus. Leo porttitor ut elementum aliquet accumsan rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Adipiscing.",
          "Cursus.",
          "Imperdiet."
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "short description Lacinia facilisis aliquet maecenas arcu id tincidunt ornare tempus est.",
      "long_description": "long description Velit ornare mi neque metus posuere, lobortis finibus non porttitor ornare porttitor i consectetur. Ligula ante ex diam elit sed consectetur nisi. Viverra fringilla amet sed at elementum consectetur ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Lacinia.",
          "Est."
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "short description Natoque accumsan id aliquet mollis sed enim placerat quis fringilla.",
      "long_description": "long description Dui condimentum ipsum neque dui, sed massa diam nulla pretium. Justo adipiscing aliquam auctor. Au orci adipiscing commodo et tempor, scelerisque est metus ultricies nunc eu. Imperdiet pulvinar nam mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sapien.",
          "Auctor.",
          "Et."
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "short description Elit pulvinar erat viverra rhoncus. Consequat eros sollicitudin orci mollis.",
      "long_description": "long description Ornare nisi au cras lacus eget placerat. Eget sit magna i. Mi felis finibus auctor mi leo pharetra, enim ut elit ipsum erat ex mollis cursus nibh fringilla mattis curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eti.",
          "Quisque.",
          "Cursus."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description In natoque sit placerat aliquam. Pulvinar natoque neque ut auctor.",
      "long_description": "long description Tristique mollis vehicula adipiscing adipiscing metus vulputate metus enim nam curabitur, auctor gravida etiam donec rhoncus accumsan ultrices viverra eros porttitor consequat rhoncus. Adipiscing velit augue ligula neque natoque eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquet.",
          "Lobortis.",
          "Lobortis."
      ]
    },
    {
      "name": "Conixco",
      "short_description": "short description Placerat vulputate sed nunc sollicitudin velit mauris diam nibh vitae.",
      "long_description": "long description Natoque nulla morbi commodo facilisis tortor morbi. Sagittis au scelerisque sem elit quis felis lobortis imperdiet rhoncus facilisis, mattis e felis elementum fringilla tincidunt elementum ac. Nam velit bibendum lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Natoque.",
          "I.",
          "Felis."
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "short description At tristique curabitur facilisis maximus nam. Tincidunt condimentum nibh pellentesque.",
      "long_description": "long description Dui imperdiet neque facilisis mattis quis scelerisque quis vel magna nulla erat risus, nam felis ut lacinia. Sem amet maecenas iaculis auctor a mi adipiscing imperdiet. Nulla suscipit erat viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "Mollis.",
          "Metus."
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "short description Metus hendrerit mauris au cursus natoque dignissim sodales elementum adipiscing.",
      "long_description": "long description Vitae accumsan cras sagittis fringilla, cursus dui metus bibendum aliquam proin. Velit aliquam finibus ultrices. Suscipit orci vitae donec. Finibus vestibulum nam ipsum condimentum at lobortis magna, placerat au dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mattis.",
          "Viverra.",
          "Quisque."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Risus nunc lectus felis euismod. Pretium pulvinar quisque bibendum risus.",
      "long_description": "long description Dui sollicitudin nisi posuere eu tempus ex metus. Risus cursus sollicitudin sodales dignissim, nisi nibh mauris bibendum. Finibus magna suscipit fringilla risus in lectus tortor augue, ornare cursus scelerisque mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisi.",
          "Diam.",
          "Ultrices."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Nisi consequat lacinia eu sagittis vel, mattis sagittis velit ligula.",
      "long_description": "long description Tempor nam sit pulvinar mi, ante sapien vulputate felis lectus morbi pellentesque ex. Fringilla fringilla cursus amet id ex consectetur morbi ipsum ante quis arcu, eget natoque bibendum id metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Tempor.",
          "Ac."
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "short description Fringilla maecenas quis velit nam, e tincidunt eu curabitur lacus.",
      "long_description": "long description Sed hendrerit fringilla maximus nisi, laoreet e a a. Sagittis quis eu mi. Eros eget etiam imperdiet neque, curabitur imperdiet nibh imperdiet. Lacinia tincidunt iaculis ex eti turpis imperdiet cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Gravida.",
          "Mi.",
          "Pharetra."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description Diam risus condimentum lacinia mi eros eget nisi erat felis.",
      "long_description": "long description Dignissim eti aliquet dui sit. Dolor ex nisi aliquet viverra, placerat lacinia maecenas orci. Ac vel a mi. At facilisis cras augue tempor cursus adipiscing, lectus a nulla eti ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tincidunt.",
          "Mollis.",
          "Elit."
      ]
    },
    {
      "name": "Templatek",
      "short_description": "short description Dolor ligula curabitur dictum lectus arcu euismod nibh facilisis quis.",
      "long_description": "long description Sapien diam quisque a au sollicitudin pellentesque. Eu lectus facilisis leo. Pulvinar orci at fringilla. Placerat donec laoreet sed felis magna neque. Maecenas morbi donec faucibus mi. Morbi sed aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "I.",
          "Ultrices."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Commodo leo e nam maecenas, viverra maximus consequat aliquet sollicitudin.",
      "long_description": "long description Enim pellentesque finibus pellentesque diam iaculis vehicula lacinia tincidunt elit. Ac curabitur ante felis consectetur velit, suscipit consequat orci elit sodales purus rhoncus aenean. Magna eu quis velit scelerisque ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tristique.",
          "Eget.",
          "Auctor."
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "short description Accumsan dignissim dolor justo vehicula quisque vitae auctor diam non.",
      "long_description": "long description Massa lorem felis orci metus au. Elementum eget finibus i mattis lacinia, condimentum bibendum augue laoreet. Tincidunt eu pellentesque nam enim. Natoque adipiscing vel ipsum posuere. Ligula dignissim pharetra placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lectus.",
          "Lorem.",
          "Lectus."
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "short description Scelerisque elit sed vel cras accumsan orci mauris etiam mollis.",
      "long_description": "long description Cursus vestibulum eget posuere nam consequat porttitor tortor donec, a porttitor turpis eu natoque condimentum nisl sollicitudin maximus. Massa nunc e vitae lacinia sit id condimentum blandit magna pharetra non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Porttitor.",
          "Scelerisque.",
          "Mi."
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "short description Fringilla sodales nisl laoreet cras nulla, curabitur lacinia hendrerit sapien.",
      "long_description": "long description Lacinia aenean justo amet sem vitae at pharetra, mauris pharetra et consequat posuere pretium, at nisi amet aenean. Ante aliquet dignissim augue non porttitor. Ligula mattis curabitur nam velit fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Turpis.",
          "Id.",
          "Vel."
      ]
    },
    {
      "name": "Solexis",
      "short_description": "short description Non ligula mauris morbi mauris, diam iaculis eti etiam nam.",
      "long_description": "long description In sapien et rhoncus ante, accumsan curabitur augue quis pharetra id mauris iaculis et. Massa purus faucibus mollis iaculis blandit vel. Justo etiam nisl porttitor euismod gravida proin faucibus non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "Eros.",
          "Turpis."
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "short description Aenean nulla vestibulum imperdiet amet, diam eti cursus imperdiet a.",
      "long_description": "long description E dictum augue sagittis a, vehicula nisi gravida porttitor, tempus lorem commodo dignissim. Mi lacinia donec tempus ornare fringilla fringilla eu condimentum faucibus. Ultricies imperdiet e ante quisque non elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dui.",
          "Mi.",
          "Condimentum."
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "short description Justo eti pretium au a risus. Euismod sapien cras nibh.",
      "long_description": "long description Tristique a pharetra risus au sodales magna placerat. Ornare leo eti et curabitur blandit proin tortor, massa non euismod i. Maximus placerat dui sapien orci, lacinia sem natoque sem ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pellentesque.",
          "I.",
          "Vestibulum."
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "short description Sed ultrices diam condimentum aliquet gravida non. Aliquet mi quisque.",
      "long_description": "long description Eti dignissim donec mollis adipiscing. I ultrices tristique consectetur leo finibus proin lorem. Risus natoque purus vel. At est mattis eget, ligula mollis bibendum ante magna. Diam viverra metus sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Turpis.",
          "Sit.",
          "Imperdiet."
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "short description Est neque vulputate massa vel turpis, dolor tempus vehicula quis.",
      "long_description": "long description Eti faucibus auctor ac sem nisl gravida lectus, natoque lacus purus cursus in dignissim. Velit ac etiam faucibus neque commodo, vestibulum lacus ligula metus lacinia. Lacinia amet eget nibh ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Id.",
          "Lacinia."
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "short description Elementum mattis euismod nisi nisi tempus porttitor placerat condimentum placerat.",
      "long_description": "long description Lacus mauris lacinia ipsum sapien pellentesque hendrerit natoque ut aliquam aliquam finibus e porttitor. Tempor pulvinar porttitor adipiscing iaculis et i adipiscing tincidunt nibh facilisis elit ex, sagittis porttitor nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consequat.",
          "Ultrices.",
          "Ligula."
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "short description Cursus ex au dignissim leo ac tempor, dui donec ipsum.",
      "long_description": "long description Donec tincidunt lectus nisl felis, lacus gravida placerat curabitur dictum, est viverra ut ut ut maximus tortor quis lacinia cursus pharetra au enim sollicitudin lorem. Cursus sapien quis velit dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ante.",
          "Sodales.",
          "Pretium."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Cursus sollicitudin adipiscing vel nibh viverra elementum quis velit orci.",
      "long_description": "long description Proin auctor dui eu sed mauris. Iaculis lectus condimentum dui finibus. Ligula facilisis enim aliquet e. Enim eti ultrices donec aliquam eros tincidunt consequat condimentum. Ac turpis tristique commodo at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Iaculis.",
          "Ornare.",
          "Pellentesque."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Amet leo mollis erat enim. Quis nisl aliquam velit at.",
      "long_description": "long description Scelerisque dui vehicula quisque placerat scelerisque. A diam condimentum mattis aenean condimentum id, at i ante gravida vulputate faucibus, justo aliquet consectetur felis. Etiam vulputate eros aenean eti aenean ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Sapien.",
          "Aenean."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Nulla mollis ultricies sapien aliquet purus nibh. Cursus donec sed.",
      "long_description": "long description Sem nibh consequat ornare id elementum ligula posuere quisque lectus amet augue pharetra dui, erat risus ornare aliquam felis blandit mattis. Lacinia vestibulum metus metus. Hendrerit lectus bibendum consectetur elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Lobortis.",
          "Mattis."
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "short description Aliquam sodales gravida eros magna enim. Ac nisl diam nibh.",
      "long_description": "long description Porttitor orci morbi consequat ante est hendrerit. Lorem eros dolor ipsum est. Consequat et ante lacinia, lobortis lacinia curabitur vestibulum viverra natoque. Vulputate erat pellentesque gravida sapien, dignissim vel mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vitae.",
          "Ornare.",
          "Non."
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "short description Donec sit dui ex rhoncus mollis leo ante vitae placerat.",
      "long_description": "long description Ornare aliquet sagittis ante morbi, hendrerit aenean nisl scelerisque sem. Sit mi nunc rhoncus, turpis amet sollicitudin ut vel vel non faucibus finibus et sollicitudin au, natoque suscipit leo porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vitae.",
          "Curabitur.",
          "Ante."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description Eros id nulla in mollis, ac dictum leo morbi gravida.",
      "long_description": "long description Aenean est purus ultricies felis nisi pulvinar sit lorem, accumsan imperdiet bibendum faucibus sagittis id turpis. Dignissim dolor ultrices dolor metus. Amet ultricies suscipit accumsan. Elementum faucibus ex ornare lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "A.",
          "Rhoncus.",
          "Suscipit."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description Gravida viverra ante posuere diam nibh consequat mattis dictum tempor.",
      "long_description": "long description Ante faucibus laoreet proin diam auctor sit donec laoreet. Auctor ac ornare i faucibus cursus maecenas nisl ultricies viverra natoque, a euismod lorem lorem eget. Vehicula at purus aliquet lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eu.",
          "Adipiscing.",
          "Cras."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Sit etiam lorem tristique blandit arcu vehicula aliquam cras e.",
      "long_description": "long description Tortor arcu sit est natoque quisque ante et morbi ac ligula enim consequat, a pharetra aliquet vel, dignissim commodo ornare maximus sollicitudin, tincidunt vel sit suscipit metus, amet ultricies cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisi.",
          "Eros.",
          "Scelerisque."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Aliquam mi tempor ex rhoncus eget dictum morbi vulputate sit.",
      "long_description": "long description Orci finibus lacus condimentum blandit ornare lorem. Ultricies sit hendrerit accumsan, morbi au ligula eros. Placerat vulputate magna nisl ac etiam eget at. Massa nulla magna maecenas. Ultricies tincidunt ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sem.",
          "Faucibus.",
          "Blandit."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description Commodo vestibulum ante quis euismod, eros sem vehicula natoque laoreet.",
      "long_description": "long description Orci nunc porttitor au magna diam eti imperdiet mollis a ipsum, sed velit ornare vel leo. Dictum sapien gravida curabitur, diam nam cras sit, arcu sodales consectetur eros dui felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Turpis.",
          "Velit.",
          "Ornare."
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "short description Tristique lacinia dui tortor nunc vehicula, sapien morbi quis eget.",
      "long_description": "long description Augue accumsan auctor ipsum mauris adipiscing ac, a consequat vehicula donec non e ipsum, aenean tempus maximus purus bibendum. Augue sodales eti e massa vulputate vulputate aliquet finibus condimentum bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pretium.",
          "Dignissim.",
          "Ultrices."
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "short description Eget accumsan mollis lectus dui e pulvinar, nulla ligula quis.",
      "long_description": "long description Dolor sapien justo pharetra ac lacinia lacinia eget. E magna ipsum amet felis eu velit etiam. Proin augue cursus erat lacinia a, adipiscing nisi aenean turpis e cursus erat diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Finibus.",
          "Aliquet.",
          "Morbi."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Au dictum dui dignissim vulputate consectetur lobortis dignissim massa consectetur.",
      "long_description": "long description Viverra consequat elementum nam risus. Nisi amet tempor viverra aenean suscipit pharetra scelerisque finibus mauris maecenas, consectetur lorem sollicitudin quisque. Orci tincidunt augue ultrices. Vestibulum risus risus natoque a dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultricies.",
          "Hendrerit.",
          "Nibh."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Lorem pretium non leo sagittis, nisi maecenas morbi lacinia ligula.",
      "long_description": "long description Faucibus adipiscing dolor mi bibendum at proin, felis sed vel enim sed. Vel non a dictum e eros iaculis nisl sed ut hendrerit. Tempor risus sagittis tristique laoreet quisque condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Sed.",
          "Curabitur."
      ]
    },
    {
      "name": "Sealine",
      "short_description": "short description Tortor sed tempor iaculis sollicitudin condimentum nam. Enim diam dictum.",
      "long_description": "long description Pharetra scelerisque nulla lectus facilisis turpis. Enim faucibus i neque. Eros maecenas sapien lacinia imperdiet, vulputate enim bibendum ligula. Eros tempor quis placerat dictum. Non orci velit tincidunt porttitor nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Est.",
          "Ac.",
          "Tristique."
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "short description Justo amet condimentum aenean velit natoque lectus vestibulum imperdiet leo.",
      "long_description": "long description Eros id auctor proin natoque. Dictum lorem i sagittis curabitur augue a. Placerat placerat a turpis auctor ornare. Ut placerat eget nisi cras auctor in vel ante, natoque eu vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sagittis.",
          "Vestibulum.",
          "Morbi."
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "short description Ante donec dictum in laoreet, porttitor dignissim tristique neque augue.",
      "long_description": "long description Tempor proin aenean nam aliquet fringilla nulla, massa felis condimentum aliquam nibh elementum, bibendum maecenas rhoncus tristique vestibulum quisque vulputate lacinia sed nisl quisque blandit dui elementum dui amet dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Euismod.",
          "Eget.",
          "Tortor."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Placerat ultricies lobortis sed ultrices neque posuere sollicitudin cursus nulla.",
      "long_description": "long description At at enim aliquam elit facilisis ante id. Ultrices tristique metus ipsum vehicula laoreet tempor, pellentesque orci tortor orci. Sit finibus neque iaculis adipiscing lacinia vestibulum, leo eti ultricies mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mi.",
          "Cursus.",
          "Tincidunt."
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "short description Faucibus adipiscing quis ex sapien. Aenean finibus gravida mauris finibus.",
      "long_description": "long description Aliquet nibh tortor lacinia non. Porttitor turpis scelerisque cras, velit mi justo placerat non nulla suscipit natoque lacus, gravida mollis ultrices sagittis. Lobortis mollis cras eti vestibulum id ultricies placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Lectus.",
          "Hendrerit."
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "short description Mauris lectus tristique dignissim nulla finibus. Nisl sem et nibh.",
      "long_description": "long description Augue fringilla blandit dolor lacus, aenean ut consequat massa dolor at pulvinar ultrices porttitor. Diam quis hendrerit augue. Est vel mauris eu elit felis vel. Iaculis elementum ipsum lectus id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "A.",
          "Dui.",
          "Eros."
      ]
    },
    {
      "name": "Opticast",
      "short_description": "short description Ante consequat fringilla sodales elementum. Vehicula quis risus sapien lectus.",
      "long_description": "long description Nisl lacinia bibendum sed aliquet sollicitudin ante non, nulla vestibulum est placerat ultrices vitae, non natoque metus laoreet. Suscipit eros non nisl pharetra ligula iaculis pulvinar sagittis maecenas est mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Augue.",
          "Eros.",
          "Erat."
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "short description Tempor tincidunt ac sed vulputate. Mattis vestibulum nibh elementum pulvinar.",
      "long_description": "long description Dolor viverra nisi justo ipsum eros ex, arcu proin nulla i. E elit morbi au diam dui consectetur, eu id commodo maecenas tristique aliquet. Amet commodo hendrerit nibh vulputate mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Neque.",
          "Cras."
      ]
    },
    {
      "name": "Conixco",
      "short_description": "short description Dui sagittis ut aliquet at. Massa ipsum velit massa dui.",
      "long_description": "long description Pharetra euismod elit fringilla purus mollis, aenean risus lectus mauris. Faucibus etiam ultricies sodales tortor consectetur. Mauris bibendum hendrerit sem, justo ut faucibus aliquet lacus maximus, placerat nam elementum lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Porttitor.",
          "Curabitur.",
          "Natoque."
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "short description Turpis augue dui consequat magna, aliquet aliquet ut lectus sapien.",
      "long_description": "long description Neque eget sit i elit. Consectetur arcu nibh accumsan. Lacus blandit tortor at in. Gravida sem diam mi ligula. Sollicitudin vel vulputate metus ante eu pulvinar ac vitae leo nisl.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Erat.",
          "Suscipit.",
          "Condimentum."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description In sed eget velit lorem imperdiet. Sodales faucibus tristique eti.",
      "long_description": "long description Et nisl nunc sollicitudin ex, adipiscing magna aenean maximus. Sem accumsan tempor vitae nunc dignissim dui. A porttitor fringilla nulla arcu, bibendum nam nulla dignissim non ex. Sollicitudin morbi neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Gravida.",
          "Vulputate.",
          "Vehicula."
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "short description Eget maximus est fringilla et donec viverra, mi sapien quis.",
      "long_description": "long description Maximus vestibulum cras ipsum scelerisque tempus. Tincidunt pellentesque arcu lacinia, consectetur at rhoncus scelerisque, porttitor porttitor justo in, justo cras elit tempor finibus cras laoreet a, risus pharetra sollicitudin proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Tincidunt.",
          "I."
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "short description Viverra magna quis finibus gravida. Nibh hendrerit etiam ligula aenean.",
      "long_description": "long description Nibh vulputate sagittis felis donec amet fringilla nisl tristique imperdiet auctor. Vulputate a aliquam sed laoreet lacinia. Adipiscing gravida risus tincidunt. E eti quis fringilla enim pharetra gravida ipsum vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ipsum.",
          "Augue.",
          "Nisi."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Eti nisi eu bibendum bibendum ac enim maximus in quisque.",
      "long_description": "long description Sollicitudin imperdiet porttitor dignissim vestibulum adipiscing. Felis commodo a consequat aliquam sed quisque purus. Tempor placerat sollicitudin eros, risus aliquam auctor blandit eu adipiscing mi nunc felis aliquet magna a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dictum.",
          "Vulputate.",
          "Eros."
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "short description Sodales dictum suscipit enim neque nibh sollicitudin. Hendrerit tempor et.",
      "long_description": "long description Metus e ante sollicitudin nam. Sed bibendum proin tempor consectetur posuere vehicula consectetur consectetur tempus, condimentum ultrices nisl tortor suscipit eros ultrices, ex nulla nisi finibus vitae, tempor natoque vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Est.",
          "Magna.",
          "Et."
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "short description Nulla sodales et iaculis scelerisque, non sapien fringilla gravida pellentesque.",
      "long_description": "long description Aliquet nibh posuere orci sed pulvinar cursus tempor sed, in sed nisi eti etiam, elit maecenas gravida ante mollis donec imperdiet imperdiet, at lorem dolor faucibus au. Ipsum vel rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultrices.",
          "Vestibulum.",
          "Tortor."
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "short description Gravida eu lacinia id pharetra risus maximus maximus tincidunt finibus.",
      "long_description": "long description Eu metus dignissim maecenas ut id amet et diam pharetra nulla faucibus sodales. Lacinia felis lacus eget purus. Arcu vulputate fringilla mattis, aenean cras proin a auctor diam turpis ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Viverra.",
          "Suscipit."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Elementum euismod et consequat elementum, tincidunt maecenas ut fringilla pellentesque.",
      "long_description": "long description Maecenas eti scelerisque gravida tempus fringilla cursus dui tempus, erat sapien i rhoncus, in posuere facilisis ultricies curabitur erat sit auctor magna risus. Est nunc hendrerit condimentum pulvinar scelerisque metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "A.",
          "Est.",
          "Sem."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Placerat justo enim lobortis felis adipiscing, elit ut velit erat.",
      "long_description": "long description Ante ante nisl tristique etiam nunc suscipit lobortis. Vehicula sodales nibh placerat, purus lectus sit mollis felis. Euismod nisl sodales lacinia pulvinar id ante nunc, commodo est posuere donec mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Lectus.",
          "Mi."
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "short description Iaculis risus consequat facilisis euismod mollis, diam aliquam faucibus purus.",
      "long_description": "long description Aliquam sit lacus in vel. In maecenas elementum ut consequat, eget e ornare quis, mollis ligula cras at lacinia tincidunt tristique placerat ante. Metus non nunc augue. Consequat lorem euismod.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquet.",
          "Cras.",
          "Aenean."
      ]
    },
    {
      "name": "Opticast",
      "short_description": "short description Lectus porttitor ultricies lobortis a, e ut i lacinia metus.",
      "long_description": "long description Scelerisque felis lectus imperdiet ultricies. Nibh scelerisque ultrices consectetur a finibus elit et lacinia enim, erat orci dui sagittis proin placerat. Viverra vel arcu hendrerit au sollicitudin. Tristique mi accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Euismod.",
          "Ante.",
          "Eros."
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "short description Non blandit in leo commodo pellentesque rhoncus, metus consectetur ultricies.",
      "long_description": "long description Est adipiscing ac nisi tincidunt mauris. Lectus maximus vehicula aliquam. Nam sed lorem aliquam. Iaculis aenean ultricies vehicula. Eti ligula massa lacinia consectetur. Dolor adipiscing placerat arcu tincidunt arcu tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Et.",
          "Fringilla.",
          "Tempor."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description Maximus ac placerat tempor velit accumsan nulla. Natoque morbi lacinia.",
      "long_description": "long description Morbi in sodales turpis neque tempus. Aliquam blandit pulvinar velit. Pellentesque mauris ante mattis at ligula faucibus viverra diam ut orci. Au dictum etiam sem nunc commodo felis faucibus metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Natoque.",
          "Finibus.",
          "Quis."
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "short description Curabitur eu felis pretium nisl curabitur ligula. Suscipit consequat eti.",
      "long_description": "long description Pellentesque nulla commodo amet ac ex. Quisque vel blandit lectus eu, e nisi arcu nunc suscipit neque aliquam. Metus leo gravida elementum eu, elementum iaculis viverra pharetra. Vitae vel lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vehicula.",
          "Leo.",
          "Curabitur."
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "short description Ultricies velit placerat nunc curabitur aliquet. Vel tincidunt placerat au.",
      "long_description": "long description Commodo maximus au nam ac au quis metus scelerisque, vulputate consequat lectus bibendum porttitor viverra, ac sodales vestibulum euismod, rhoncus suscipit aenean ac massa. Tempus sem purus i elementum dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Arcu.",
          "Aliquet.",
          "Vestibulum."
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "short description Quis mollis risus ut etiam lacus dolor condimentum imperdiet justo.",
      "long_description": "long description Ex eu imperdiet dictum consequat, tincidunt pharetra bibendum proin. Condimentum tempus aliquam rhoncus suscipit. Faucibus sem imperdiet nulla, finibus mauris nunc nisl. Eros quis vitae sagittis, lorem massa aliquam mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ornare.",
          "A.",
          "Eros."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Diam nisi neque finibus eros maximus quis eros proin non.",
      "long_description": "long description Iaculis finibus ante mollis dignissim. Lacinia euismod lobortis imperdiet auctor dolor suscipit nisl rhoncus massa. Bibendum elit vehicula pulvinar sodales pharetra. Et aenean sit neque nam. Lacinia imperdiet dolor vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vulputate.",
          "Faucibus.",
          "Placerat."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Tincidunt aenean fringilla in au, consectetur eti lacinia ornare placerat.",
      "long_description": "long description Nam porttitor id id ipsum dignissim orci justo nisi. Ornare au faucibus non sed cursus amet sed quis dignissim augue vel mauris bibendum neque. Euismod at at ut non tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Purus.",
          "At.",
          "Pharetra."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Maximus imperdiet condimentum eget e enim. Gravida tincidunt magna ac.",
      "long_description": "long description Laoreet nunc faucibus maecenas condimentum faucibus, fringilla mollis erat non eget dui. Rhoncus ac cras accumsan nisl ornare donec justo, imperdiet in dolor aenean. Sodales ut justo lacinia erat pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Vulputate.",
          "Nisi."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Accumsan justo consequat viverra id donec hendrerit est porttitor viverra.",
      "long_description": "long description Bibendum vestibulum condimentum porttitor dolor, iaculis i pulvinar ornare ultricies viverra elementum faucibus ornare dolor, mi fringilla maximus ultricies proin natoque posuere. Vehicula vehicula orci eros. Tortor viverra finibus at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tristique.",
          "Pharetra.",
          "Leo."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description Etiam lorem nisl euismod tempus quis imperdiet viverra leo au.",
      "long_description": "long description Vehicula viverra pulvinar faucibus porttitor. Bibendum lacinia lacinia eget aliquam. Ornare elementum a metus. Nibh lacinia nibh placerat. E pulvinar orci est euismod accumsan tempus sollicitudin cursus etiam nam mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Proin.",
          "Lorem.",
          "Ex."
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "short description Sagittis blandit maximus consectetur sem risus i consequat augue risus.",
      "long_description": "long description Metus pulvinar maximus pharetra fringilla. Curabitur nisl nam aliquet i. Natoque eti sollicitudin suscipit, tempor pulvinar erat cras nam auctor. Leo massa sagittis nisi enim nam etiam accumsan id accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Natoque.",
          "Enim."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Elit sollicitudin lectus tempor scelerisque, mollis tempor velit pellentesque quis.",
      "long_description": "long description Gravida nunc velit est lacus natoque elementum, massa iaculis lorem nam, fringilla sed sollicitudin tristique aliquam arcu cursus, cursus sagittis vestibulum au sem lacinia vehicula in orci. Sed ultrices suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Auctor.",
          "Lacinia.",
          "Lacinia."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Maecenas vehicula eti sodales felis felis. Bibendum est cras sapien.",
      "long_description": "long description Au maecenas mi sit hendrerit. Elit arcu nibh nam, at vestibulum pellentesque in non. Mollis nunc nisl tortor. Mi eti sagittis faucibus orci eti. Rhoncus posuere proin pretium velit commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Magna.",
          "At."
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "short description Nisl nunc consequat sollicitudin lacinia. Mauris eu neque condimentum tristique.",
      "long_description": "long description Aliquam tristique nisi e dui enim. Sapien rhoncus curabitur nibh neque, hendrerit metus iaculis sollicitudin justo, risus sem donec lacinia. A viverra pellentesque placerat scelerisque posuere eti. Nunc mollis id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Nam.",
          "Lectus."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Morbi adipiscing risus mi viverra in. Lacinia consectetur quisque fringilla.",
      "long_description": "long description Felis consequat suscipit lorem turpis au, blandit ante neque mauris nisl curabitur pulvinar pretium erat lacus ligula sollicitudin, sollicitudin erat donec elementum, e arcu tempus pretium felis. Purus tempus aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Iaculis.",
          "Fringilla.",
          "Pulvinar."
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "short description A tincidunt enim id eget. Consequat tempor porttitor facilisis vehicula.",
      "long_description": "long description Nulla cras ac lobortis i. Cursus gravida auctor ultricies in ac massa. I velit eget maximus aliquam lobortis, lacus vehicula imperdiet lacinia ultrices sed. Turpis leo purus eti sollicitudin euismod.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sed.",
          "Euismod.",
          "Risus."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Justo diam elementum proin scelerisque morbi au sagittis ultricies consequat.",
      "long_description": "long description Lobortis sem elit blandit ultrices consequat nibh, ac justo velit facilisis arcu adipiscing proin nisi commodo massa, vel orci risus sed risus felis. Sit turpis aenean lobortis neque leo a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Commodo.",
          "Faucibus.",
          "Eu."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Lobortis cursus erat blandit eti posuere tortor. Nisi quis placerat.",
      "long_description": "long description Vulputate lacus lectus ultricies consectetur. Sem sapien eros gravida, eget ex leo porttitor maecenas. Ornare iaculis ultricies pulvinar. Faucibus elit sapien ipsum fringilla. Donec sit bibendum est quisque massa lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Orci.",
          "Justo.",
          "Adipiscing."
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "short description Eget i vestibulum ipsum blandit amet commodo. Sodales accumsan diam.",
      "long_description": "long description Diam mi eget purus ex vitae. E ut sagittis dignissim. Maecenas pellentesque ut nam etiam. Accumsan aenean vel elementum sed posuere aliquet sollicitudin. I dignissim tempor laoreet sit iaculis condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sem.",
          "Dui.",
          "Elementum."
      ]
    },
    {
      "name": "Sophis",
      "short_description": "short description Iaculis au maecenas tincidunt cursus in, nam adipiscing magna aliquam.",
      "long_description": "long description Ultrices tincidunt fringilla tristique mattis ultricies massa bibendum risus eti, sed pretium au quis dictum curabitur tortor mi scelerisque leo ut mollis morbi. Condimentum pharetra purus gravida maximus quisque lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Fringilla.",
          "Diam."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description Nunc consequat massa sodales justo lacinia orci. I mi est.",
      "long_description": "long description Vitae augue mi lobortis nunc sem fringilla mattis. Quisque lacinia elementum consequat bibendum dignissim lobortis, erat i maximus tincidunt auctor iaculis. Mollis neque orci non ultrices. Lectus vulputate sodales est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Posuere.",
          "Est.",
          "Donec."
      ]
    },
    {
      "name": "Pancast",
      "short_description": "short description In mi a nisl cras magna leo. Consectetur lacinia ex.",
      "long_description": "long description Eros posuere fringilla eros dictum dolor dignissim dui tempor, id hendrerit tortor lacinia ornare mattis sollicitudin vel, faucibus metus elementum id. Euismod ut eti risus sapien nibh sapien diam leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Dui.",
          "Proin."
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "short description Morbi diam arcu posuere accumsan, lacinia dictum maximus ligula cursus.",
      "long_description": "long description Nulla maximus euismod at posuere tempus lorem. Ac morbi porttitor posuere. Lobortis sollicitudin sed tempus, sapien nisi massa diam scelerisque pharetra e ut eget. Ligula pharetra sodales adipiscing felis dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Faucibus.",
          "Tincidunt.",
          "Dignissim."
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "short description Euismod risus consequat maecenas eti mattis sagittis mollis ligula enim.",
      "long_description": "long description Auctor velit eti commodo aenean mollis purus. Leo pulvinar accumsan viverra ultricies vel ac, pellentesque turpis porttitor laoreet felis nulla lobortis leo nisl dui lorem elementum velit, at vel consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Erat.",
          "Sapien.",
          "Magna."
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "short description Lorem ut sagittis consequat iaculis est. Suscipit sagittis pretium nibh.",
      "long_description": "long description Ac massa maximus tempor gravida. Mollis euismod tempor risus aliquet. E consectetur vulputate proin consectetur lacinia nibh laoreet scelerisque au, accumsan sapien ut bibendum sapien. I amet facilisis elit enim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Bibendum.",
          "Lacinia."
      ]
    },
    {
      "name": "WestGate",
      "short_description": "short description Quisque felis sapien cursus vulputate et. Cursus tristique a i.",
      "long_description": "long description Vulputate vestibulum velit dignissim quisque pretium nulla. Sem donec pharetra sagittis ut non. Tempus ac facilisis cras, accumsan rhoncus sed consectetur. Tempus risus diam hendrerit tempus ultricies tortor condimentum dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vulputate.",
          "Proin.",
          "Quis."
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "short description Leo magna justo nulla ex, eu accumsan diam imperdiet lacus.",
      "long_description": "long description Metus pellentesque rhoncus in nulla quisque faucibus accumsan eget lacus facilisis. Posuere natoque accumsan est velit, ac purus maecenas ornare quis lacinia e eti erat ornare quisque condimentum quisque auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Augue.",
          "Mollis.",
          "Cras."
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "short description Iaculis consequat magna nibh hendrerit in id sapien nisi vel.",
      "long_description": "long description Eros dolor vestibulum natoque magna eti maximus eu scelerisque vulputate faucibus in proin scelerisque commodo aliquam curabitur, mattis at aliquam ipsum. Pellentesque tempor leo vestibulum auctor. Sagittis i ante massa.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Pulvinar.",
          "Dictum."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Sapien lacinia sapien velit quis porttitor vehicula iaculis felis condimentum.",
      "long_description": "long description Natoque quis velit lobortis ex, ultrices orci ac non curabitur vestibulum accumsan velit vitae i condimentum. Amet pretium vestibulum dui e. Imperdiet cursus tincidunt elit. Ante lectus dignissim euismod nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Facilisis.",
          "Eget.",
          "Nisi."
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "short description Natoque at mattis mollis gravida metus euismod pharetra dignissim lacinia.",
      "long_description": "long description Consequat curabitur quisque nisi ultrices lobortis, laoreet etiam mi hendrerit e id hendrerit. Nunc maximus nibh au morbi orci, lectus bibendum eu consequat tempor nulla, dignissim faucibus nunc natoque erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Au.",
          "Maximus.",
          "Consequat."
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "short description Dignissim ut tortor nulla vel elit mollis amet tempus scelerisque.",
      "long_description": "long description Dui est tempor maximus id, aliquet consequat pulvinar augue. Lacinia risus donec mi ornare. Dictum sodales turpis vehicula, finibus leo enim faucibus facilisis tempus tristique aliquet maximus eros eros lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Metus.",
          "Suscipit.",
          "I."
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "short description Id donec donec viverra mollis pellentesque nulla. Viverra tincidunt porttitor.",
      "long_description": "long description Sapien pharetra leo turpis hendrerit vitae, massa finibus magna auctor iaculis at au tincidunt. Finibus posuere sed purus. Gravida ac fringilla au velit mi metus enim, vulputate porttitor vel donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempus.",
          "Justo.",
          "Pulvinar."
      ]
    },
    {
      "name": "Freecast",
      "short_description": "short description Lacinia eget facilisis dolor orci, posuere quis tortor vestibulum ornare.",
      "long_description": "long description Cursus finibus curabitur tristique curabitur erat quis. Mattis non mollis mi, nulla porttitor laoreet accumsan. Laoreet maximus quis arcu. A tincidunt velit quisque nam, vehicula sagittis maximus aenean aliquet condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ornare.",
          "Ipsum.",
          "Lobortis."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Tortor morbi i tortor ac. Porttitor accumsan arcu mauris felis.",
      "long_description": "long description Turpis pulvinar nisi pulvinar proin fringilla gravida diam, elementum ex metus nam id maximus. Tempor lacinia hendrerit maecenas, at i et non ante sapien tempus. Aenean blandit turpis turpis adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Erat.",
          "Justo.",
          "Sed."
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "short description Est augue blandit facilisis orci. Mattis suscipit vehicula ornare blandit.",
      "long_description": "long description Suscipit orci massa nibh aliquet pretium, pulvinar est eti dignissim sagittis, hendrerit rhoncus tempus dignissim elit, nisl finibus euismod nunc neque justo. Elit vehicula laoreet gravida lorem. Pellentesque et sem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Quis.",
          "Lacinia.",
          "Eti."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Pretium dignissim sapien condimentum aliquet vestibulum ultrices posuere massa cursus.",
      "long_description": "long description Vitae aenean bibendum tempus tempus, elementum non lacinia aliquam sagittis et faucibus suscipit dictum, mollis pulvinar ipsum non, mauris metus a nibh, felis proin metus mauris aenean, mollis porttitor aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Condimentum.",
          "Felis.",
          "Pellentesque."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Sollicitudin aliquam mauris enim faucibus elementum. Iaculis morbi aenean tortor.",
      "long_description": "long description Maximus in morbi etiam arcu cras, ac posuere lectus nisi adipiscing, pretium etiam augue enim nulla. Turpis massa tempor ornare, in ex sed amet. Est sodales pulvinar felis nisi sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Gravida.",
          "I.",
          "Mattis."
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "short description Porttitor au proin lorem risus posuere faucibus. Nulla consectetur porttitor.",
      "long_description": "long description Dolor bibendum vulputate e vulputate, leo a dui posuere. Vehicula non tortor mauris. Risus cursus nulla pulvinar faucibus pretium. Vehicula velit ut arcu mollis vestibulum vulputate sapien ac leo massa.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Id.",
          "Purus."
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "short description Au arcu fringilla nibh viverra rhoncus. Augue ex lectus cursus.",
      "long_description": "long description Morbi adipiscing fringilla quisque metus, viverra euismod fringilla pharetra quis ac. Iaculis etiam lobortis nulla auctor aliquet natoque. Neque nam massa dolor eu at laoreet eget tortor nisi lectus sem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ornare.",
          "Nisi.",
          "Facilisis."
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "short description Laoreet at nulla cras eros metus dictum. Commodo iaculis sit.",
      "long_description": "long description Dictum pretium fringilla ornare ultricies. Condimentum velit enim scelerisque mattis i. Ex eti sapien nibh blandit mi nunc pharetra nibh maximus. Ipsum iaculis arcu diam. Viverra vestibulum laoreet amet tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Felis.",
          "Aenean."
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "short description Id ultricies lobortis diam lacinia pulvinar tristique. Id accumsan lacinia.",
      "long_description": "long description Orci pellentesque adipiscing augue orci proin accumsan sit nunc eget cras imperdiet ornare pharetra auctor placerat turpis faucibus imperdiet turpis maximus lobortis. Sagittis iaculis pulvinar ultrices felis auctor etiam eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eu.",
          "Sed.",
          "Condimentum."
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "short description Nibh placerat neque nibh sollicitudin morbi adipiscing euismod condimentum auctor.",
      "long_description": "long description Gravida augue fringilla quis at iaculis sollicitudin risus nam. Lobortis finibus imperdiet euismod. Ut iaculis sed tempus metus mattis cras, nisl condimentum id donec auctor curabitur. Ultricies cras elit justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "Pharetra.",
          "Nisl."
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "short description Tincidunt est maximus neque hendrerit i mauris nam commodo consectetur.",
      "long_description": "long description Ac enim ipsum at ex. Dui porttitor mollis cursus nisl gravida nisi. Curabitur adipiscing gravida au lacus neque turpis tempus vel. Donec lacinia mi donec maximus ornare, arcu ex lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "I.",
          "In.",
          "Quisque."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Turpis scelerisque nam au finibus. Consectetur cras erat tortor et.",
      "long_description": "long description Consequat non velit lobortis suscipit lacinia. Et dignissim lacus augue tortor. Lacinia ipsum diam dictum. Enim est quis lobortis nulla non ornare. Bibendum tortor natoque iaculis mi tempor massa ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Velit.",
          "Dolor.",
          "Nam."
      ]
    },
    {
      "name": "Templatek",
      "short_description": "short description Tortor elit i vel imperdiet est massa, placerat eros condimentum.",
      "long_description": "long description Non ligula morbi quis mauris felis porttitor leo. Velit tempus hendrerit ipsum. Metus nulla lacus tempus. Scelerisque est faucibus velit eros sodales, etiam suscipit sollicitudin pellentesque. Lacinia gravida aliquet aliquam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Justo.",
          "Fringilla."
      ]
    },
    {
      "name": "Storex",
      "short_description": "short description In metus quisque sodales non mollis nibh, nisl hendrerit mattis.",
      "long_description": "long description Mi scelerisque sodales turpis sem sagittis. Bibendum facilisis mattis suscipit natoque ultricies. Non risus elementum tincidunt. Donec suscipit sapien eget leo elementum non iaculis nisi eros, pellentesque et pellentesque tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mauris.",
          "Tempor.",
          "Bibendum."
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "short description Aliquet sollicitudin placerat tincidunt quis quis arcu a leo auctor.",
      "long_description": "long description Vulputate viverra augue ultrices nulla nisl maecenas lobortis massa, risus pretium dignissim porttitor sagittis bibendum turpis. Scelerisque proin porttitor augue, eu sed posuere consectetur, aliquet sodales sit blandit leo arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Et.",
          "Velit.",
          "Dolor."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Nunc ac vulputate sollicitudin curabitur eu. Massa vel dui quis.",
      "long_description": "long description Sodales au maecenas morbi nulla, non commodo lorem aliquam dignissim sem et, diam bibendum tincidunt proin ipsum iaculis cras auctor, enim ut sit felis etiam ac leo purus sed orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dolor.",
          "Gravida.",
          "Non."
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "short description Augue ultricies sem cras scelerisque dui etiam nisl enim lorem.",
      "long_description": "long description Est porttitor accumsan nisi neque. Viverra quisque tortor posuere viverra lorem, ante a aenean laoreet tristique finibus commodo ante nunc vulputate felis, facilisis iaculis metus justo. Risus natoque et pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "E.",
          "Pharetra."
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "short description Sapien blandit diam lectus pharetra posuere tincidunt vestibulum sit felis.",
      "long_description": "long description Viverra turpis laoreet nisi diam eu sit sodales non nisi. Proin lorem sapien justo tortor lectus imperdiet, lorem amet lorem lacinia. Et eros gravida at, nisi eti ac leo purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Rhoncus.",
          "Bibendum.",
          "Faucibus."
      ]
    },
    {
      "name": "Britech",
      "short_description": "short description Lacinia vestibulum quis proin id magna eti justo velit ipsum.",
      "long_description": "long description Dignissim velit maximus nunc dignissim blandit ac mattis vehicula. Accumsan suscipit et tortor, suscipit cursus aenean accumsan rhoncus, mattis nunc tempor quis sapien, id condimentum mattis tincidunt, ultrices id pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ut.",
          "Maximus.",
          "Lobortis."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description Facilisis quisque suscipit auctor nunc cursus. Tempus id auctor tortor.",
      "long_description": "long description Finibus finibus felis imperdiet justo quis ex eros, etiam sem enim gravida dui sodales. Felis viverra eu scelerisque euismod. Orci risus faucibus eti. Aenean viverra lacus iaculis nunc tempor mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Quis.",
          "Aenean."
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "short description Elementum a posuere suscipit mi pharetra quis et vel tincidunt.",
      "long_description": "long description Cras elit ac pulvinar i. Sagittis felis maecenas curabitur, facilisis nam gravida auctor. Amet tortor suscipit pharetra. Ipsum sollicitudin suscipit mattis morbi quis consequat non vel enim elementum fringilla morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Iaculis.",
          "Orci.",
          "Facilisis."
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "short description Augue dui elementum nunc pulvinar id. Tristique e aliquet pretium.",
      "long_description": "long description Euismod sagittis aenean au tempor neque, fringilla aenean consectetur adipiscing nibh sed natoque imperdiet. Faucibus scelerisque erat mauris iaculis accumsan elementum dignissim tempus lacinia, nisl turpis elementum proin accumsan sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Turpis.",
          "Gravida.",
          "Erat."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description Proin orci elit mollis nisl mi, aliquam condimentum felis dolor.",
      "long_description": "long description Imperdiet in ultrices faucibus finibus condimentum ultricies orci orci vel velit dictum. Natoque ante i nisl, lectus lectus lobortis neque, blandit porttitor velit elementum non mollis. Curabitur laoreet vel dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tortor.",
          "Quisque.",
          "Lectus."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Dui velit scelerisque sollicitudin enim etiam. Laoreet ultricies ipsum vestibulum.",
      "long_description": "long description Eu fringilla nibh sem dui dolor adipiscing consectetur iaculis maecenas. Lacinia non blandit sapien morbi. Tortor mollis ex consectetur, lacus felis nisi eu imperdiet ut lacinia sagittis, auctor mauris ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Scelerisque.",
          "Nibh.",
          "Id."
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "short description Viverra nam vel sem ipsum. Lorem erat accumsan ultrices nibh.",
      "long_description": "long description Erat lacus cras pulvinar vehicula e. Felis ornare adipiscing in. Aenean ligula ornare etiam. Faucibus vel euismod suscipit proin finibus nulla pretium lectus nisi cras. Curabitur eros eti tempor ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Orci.",
          "Accumsan.",
          "Mollis."
      ]
    },
    {
      "name": "Storex",
      "short_description": "short description Aliquet nisi lacinia diam tempus. Imperdiet scelerisque ornare morbi nisi.",
      "long_description": "long description Maecenas arcu tristique leo vulputate turpis, ut justo ultrices nam vitae, ex tincidunt et sollicitudin imperdiet laoreet. Tortor bibendum morbi condimentum dolor aenean, felis suscipit sem i sagittis lectus aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisi.",
          "Aliquet.",
          "Maecenas."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Eget faucibus commodo turpis ante maecenas pretium. Cursus velit at.",
      "long_description": "long description I consequat erat dignissim in ut ut purus a, ac magna etiam bibendum maecenas. Est id lacinia consectetur aliquam. Mattis nulla ipsum i aliquam consectetur e, velit sagittis vel pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Metus.",
          "At.",
          "Vehicula."
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "short description Mi dolor hendrerit viverra ut nulla viverra. Dui suscipit orci.",
      "long_description": "long description Commodo arcu ultrices velit neque sapien posuere. Nisl orci au iaculis, neque elementum nunc faucibus, enim i ipsum est, leo natoque purus lacinia sapien. Gravida felis lectus enim a au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cursus.",
          "Quisque.",
          "Diam."
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "short description Maecenas commodo lacinia turpis finibus vel condimentum sit quisque gravida.",
      "long_description": "long description Pretium in leo au arcu pellentesque lacus nisl et vehicula. Tempus tempor purus au ultrices. Dictum consequat velit dolor lacus. Sapien massa sodales amet. Dictum id pulvinar nulla turpis arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Est.",
          "Tempus.",
          "Ultricies."
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "short description Suscipit dictum faucibus lectus at tortor. Iaculis imperdiet rhoncus blandit.",
      "long_description": "long description Mauris arcu id tempor ornare posuere dui nisi fringilla. Proin neque sagittis cras iaculis sem non hendrerit quis elit i aliquet ac. Mauris mi euismod cras. Elit velit pharetra pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maecenas.",
          "Maecenas.",
          "Lacinia."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Nisi tempus metus sollicitudin a pulvinar rhoncus. Vehicula ligula tincidunt.",
      "long_description": "long description Natoque erat sagittis id vulputate gravida, sapien ex non ultrices dictum vitae, laoreet accumsan laoreet ante. Leo tempor proin hendrerit iaculis. Mollis auctor euismod in. Ac tincidunt pretium aliquam ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Id.",
          "Ultrices.",
          "Eti."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description Pellentesque au sed ante quis tempus maecenas posuere augue aliquet.",
      "long_description": "long description Lacinia lacinia fringilla rhoncus arcu lectus, id placerat mi at aliquet. Bibendum mauris proin auctor, felis gravida aenean pellentesque suscipit gravida, i vitae elit proin lacus, lacinia vulputate curabitur cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Non.",
          "Sodales.",
          "Sem."
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "short description Velit lorem tempor ultrices mattis dui. Nunc felis maximus mauris.",
      "long_description": "long description Placerat at placerat imperdiet au. Massa sollicitudin vitae dui placerat tortor. Mollis cras dolor lectus erat lorem, hendrerit velit laoreet pretium, est mi amet ultrices accumsan. Eu rhoncus facilisis viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Erat.",
          "Id.",
          "Est."
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "short description Amet dolor dolor magna nibh. Sed ante est elit iaculis.",
      "long_description": "long description Lobortis lectus nisl scelerisque augue eget e non maximus scelerisque sem. Ligula arcu aliquet lacus. I eti lorem nam. Morbi pretium vel risus nam. Augue et nulla dignissim amet metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Imperdiet.",
          "Orci.",
          "E."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Vestibulum tortor facilisis fringilla dui lorem porttitor mollis mattis non.",
      "long_description": "long description I eu eti et blandit est. Ipsum aliquam magna lacinia non finibus fringilla hendrerit elit ut eros neque, laoreet lobortis sem pulvinar tortor felis. Ipsum maximus e i fringilla risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Vel.",
          "Purus."
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "short description Iaculis tempus pellentesque hendrerit nunc. Mi sollicitudin est vulputate non.",
      "long_description": "long description Nulla leo turpis in bibendum augue pellentesque. Adipiscing pellentesque felis nisl vestibulum hendrerit vestibulum porttitor tortor, vitae finibus facilisis e lacinia pretium eros. Eu pretium sodales leo lobortis ante ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Metus.",
          "Viverra.",
          "Sapien."
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "short description Tortor porttitor metus purus rhoncus. Imperdiet eros lacus mi massa.",
      "long_description": "long description Diam risus ut id nulla nibh proin mattis dignissim sollicitudin, e ligula leo pellentesque, tincidunt facilisis nisi rhoncus nisi neque. Nulla euismod blandit laoreet neque porttitor commodo lectus tristique vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Posuere.",
          "Accumsan.",
          "Hendrerit."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Pretium eu tortor hendrerit ut nunc lorem ultrices auctor at.",
      "long_description": "long description Porttitor aliquet sollicitudin lorem velit dictum. Vestibulum tristique eu tincidunt in, massa bibendum quisque ut sit. Pulvinar e ultricies adipiscing elementum. Suscipit sem lacinia nam lorem. Proin vitae tempor elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Amet.",
          "Pretium.",
          "Eget."
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "short description Tincidunt dignissim maecenas adipiscing nam in non, diam diam ultrices.",
      "long_description": "long description Posuere sollicitudin dictum mauris pellentesque, au sodales e lacinia placerat mauris metus vulputate gravida. Cursus i amet maximus, erat tristique consequat sit, sollicitudin ut dictum vulputate mauris imperdiet orci dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sit.",
          "Eti.",
          "Quis."
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "short description Dolor adipiscing curabitur quis quisque nulla elit tristique arcu ipsum.",
      "long_description": "long description Lectus magna cursus vehicula ante porttitor morbi lacinia ut tristique hendrerit. Adipiscing quisque tempor rhoncus vehicula elit pulvinar hendrerit ligula lacinia nisi laoreet aliquet non orci. Pretium ipsum quis elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempus.",
          "Mi.",
          "Sit."
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "short description Ultricies vehicula lectus nibh tempus aenean quisque porttitor lacus vehicula.",
      "long_description": "long description Non in ac auctor lacinia commodo. Imperdiet est faucibus amet nunc gravida cursus nulla laoreet mauris orci lobortis pellentesque. Lacinia sit scelerisque i vulputate e, viverra porttitor ac vehicula a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ornare.",
          "Blandit.",
          "Pharetra."
      ]
    },
    {
      "name": "Polycore",
      "short_description": "short description Lobortis lobortis tempor fringilla commodo ex hendrerit, donec vehicula vitae.",
      "long_description": "long description Pretium ultricies augue nulla ligula. Tristique ultricies ante pellentesque lacinia consectetur elit lectus. Cursus natoque vestibulum ipsum dignissim vel. Magna sollicitudin lacinia scelerisque. Enim ac blandit scelerisque iaculis mi a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisi.",
          "Aenean.",
          "Donec."
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "short description Faucibus vulputate sed neque sollicitudin lectus natoque elementum auctor consequat.",
      "long_description": "long description Purus erat pharetra rhoncus sollicitudin e tortor vitae placerat at. Ut laoreet nibh ipsum, sit mi natoque eget, bibendum tempus suscipit amet, gravida sit nisi sagittis cras. Mattis elit non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultricies.",
          "Dignissim.",
          "Cursus."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Natoque proin dui pretium maecenas ipsum aliquam. Curabitur dictum commodo.",
      "long_description": "long description Purus orci mi elit ultrices. Nam ac placerat non natoque maximus at. Lectus porttitor natoque sagittis magna. Auctor lobortis id neque i. Erat imperdiet tortor condimentum. Auctor maximus lacus suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mattis.",
          "Dignissim.",
          "Consequat."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Placerat eu laoreet mi facilisis, ante elit vehicula diam facilisis.",
      "long_description": "long description Est lorem maecenas lacus orci etiam felis mattis aliquet ultrices cursus, euismod viverra eget justo turpis laoreet ex accumsan, eti auctor eros enim diam, ante consectetur ultricies maecenas sagittis laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Non.",
          "Commodo.",
          "Tempor."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Amet pharetra a erat ac lacinia felis maximus nibh lobortis.",
      "long_description": "long description Condimentum dolor non eros ex aenean enim ornare. Adipiscing non nibh placerat turpis iaculis au. Scelerisque quisque augue iaculis maecenas quisque. Massa sollicitudin vitae accumsan. Natoque in amet massa au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nam.",
          "Sodales.",
          "Id."
      ]
    },
    {
      "name": "Freecast",
      "short_description": "short description I accumsan sagittis consequat e tincidunt i nunc e finibus.",
      "long_description": "long description Proin vehicula consequat eu vel. Ligula aenean finibus placerat dolor condimentum fringilla facilisis. Aliquam suscipit ante auctor, sapien lacinia sollicitudin at, neque euismod metus natoque tincidunt vel velit vehicula iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Imperdiet.",
          "Curabitur.",
          "Gravida."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Risus dui eros placerat pulvinar, ultricies ex suscipit sapien non.",
      "long_description": "long description Est aliquet sit finibus hendrerit etiam suscipit at tempor nisl ultricies ligula. Nibh quis nisi mollis. Scelerisque auctor orci sed metus ligula. Mattis placerat nibh rhoncus arcu sem finibus placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dignissim.",
          "E.",
          "Eget."
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "short description Quis massa purus posuere at eget justo, imperdiet hendrerit nisi.",
      "long_description": "long description Amet aliquet curabitur a etiam ultrices etiam massa, sed imperdiet augue tincidunt consectetur consequat vel proin elit metus justo sollicitudin elit sagittis adipiscing commodo tortor donec non, consectetur a tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Non.",
          "Mollis.",
          "Imperdiet."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description Sit quisque risus diam lectus eti tristique eget commodo sodales.",
      "long_description": "long description Ex rhoncus aliquam lorem nulla vehicula vulputate in metus nunc, proin curabitur scelerisque ut. Facilisis vehicula dui pharetra lacinia ante turpis sit tortor. Euismod sit consectetur fringilla nisl au gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Finibus.",
          "Mi."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Enim justo maximus etiam cras dolor, massa ultricies i euismod.",
      "long_description": "long description Consectetur justo eu mauris nunc ut. Mattis morbi suscipit nam hendrerit. Purus gravida fringilla turpis nunc posuere at diam. Leo felis sodales mollis id, orci ipsum nam nibh felis porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Quis.",
          "Ultrices.",
          "Amet."
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "short description Ligula dolor vel curabitur nisi ligula finibus. Imperdiet ipsum ligula.",
      "long_description": "long description Diam est maecenas nibh commodo, faucibus posuere placerat elit justo aenean at sed nisi tincidunt dignissim. Turpis neque ac aliquet nisi non ornare vulputate nibh lacus. Pharetra blandit ut commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Au.",
          "Et.",
          "Eros."
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "short description Porttitor commodo gravida lacinia posuere ultrices nunc ornare e donec.",
      "long_description": "long description Enim orci mi dictum dictum arcu dictum nam mattis ultricies blandit nam, aliquet pulvinar lorem mauris. Commodo finibus augue etiam. Et sem porttitor maximus. Aenean pretium faucibus donec leo ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Felis.",
          "Nunc.",
          "Proin."
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "short description Diam lorem nisi augue pellentesque. Elementum massa aliquam scelerisque et.",
      "long_description": "long description Elit vel fringilla massa mauris. Pretium velit quis i ornare etiam nibh. Justo e quisque lacinia condimentum aliquam at, proin vestibulum magna a. Condimentum ante nisl massa nibh ante augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Diam.",
          "Fringilla.",
          "Facilisis."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description Pellentesque sagittis id vestibulum sollicitudin. Curabitur gravida dignissim metus placerat.",
      "long_description": "long description Faucibus mi proin aenean maecenas. Vitae cursus cras arcu rhoncus erat consequat vel. Aliquet ac enim mattis scelerisque vestibulum sit ultrices scelerisque etiam. Morbi turpis sodales elementum auctor lacinia pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Id.",
          "Bibendum.",
          "Ligula."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Blandit dignissim vitae vulputate lacus tempor accumsan sodales i felis.",
      "long_description": "long description I nisl consectetur aliquet imperdiet. Scelerisque vestibulum aenean ultricies elementum quisque arcu justo. Orci consectetur imperdiet nisi lobortis. Pellentesque imperdiet at aliquet pharetra, lacinia sed mi dignissim diam dictum bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "I.",
          "Suscipit.",
          "Eget."
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "short description Maecenas vulputate gravida e mollis vehicula. Ligula suscipit sollicitudin laoreet.",
      "long_description": "long description Maximus sed aliquam nibh sodales condimentum gravida. Tincidunt aenean ultrices justo iaculis, i blandit nam dignissim, arcu gravida pellentesque non curabitur, gravida mollis pretium blandit. Sem nibh vestibulum etiam fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "I.",
          "Neque.",
          "Elit."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Vestibulum euismod posuere i ornare, nisi risus i au magna.",
      "long_description": "long description Turpis augue accumsan sapien bibendum sagittis lacinia in. Neque posuere dolor finibus aliquam morbi pulvinar donec pellentesque orci. Eget tempor vel purus, euismod nibh aliquet euismod sit erat dignissim diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Donec.",
          "Ornare.",
          "Tempus."
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "short description Quisque purus amet finibus lacus. Ut tristique eu dictum sollicitudin.",
      "long_description": "long description Dictum ipsum pharetra mauris dolor. A imperdiet tempus faucibus tempor, felis velit eti fringilla, risus augue lorem facilisis. Commodo mauris faucibus ac. Adipiscing elementum commodo justo consequat, enim lectus turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Au.",
          "Tincidunt.",
          "Nam."
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "short description Sagittis mi felis elementum dignissim, augue elementum curabitur erat consequat.",
      "long_description": "long description Nunc donec iaculis ac commodo aliquet euismod suscipit sollicitudin massa sit quis. Sodales erat finibus mi cursus enim tristique tortor. Au tincidunt tincidunt turpis purus vehicula. Sagittis e in eu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Donec.",
          "Ornare.",
          "Sollicitudin."
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "short description Quis bibendum ex rhoncus non cras. Vitae augue mattis velit.",
      "long_description": "long description Vitae ornare faucibus eros dui bibendum sem commodo scelerisque. Et sagittis nunc dolor lacinia cras. Dui id commodo suscipit massa finibus. Curabitur nulla elementum quis laoreet tortor. Enim ac tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Ultricies.",
          "Etiam."
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "short description Enim proin vehicula aenean lacus. Eget ex vehicula id sollicitudin.",
      "long_description": "long description Aliquam viverra pellentesque id eros, id quisque ultricies gravida ultricies lacinia aliquet viverra e ac elit id accumsan. Consequat blandit facilisis mauris ante. Au id laoreet sollicitudin aliquet ornare augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Ligula.",
          "Dui."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Eti suscipit fringilla facilisis ac eget tincidunt. Sagittis dignissim tempor.",
      "long_description": "long description Mattis orci metus aliquet ornare enim suscipit. Cras curabitur dignissim morbi velit purus. Ipsum eu etiam tristique nunc, sapien mattis lacinia accumsan eti, ultrices cras nibh aliquet, proin accumsan dolor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Aenean.",
          "Eros."
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "short description E curabitur id ligula sed arcu elit consectetur non sagittis.",
      "long_description": "long description Euismod lobortis aliquam lectus gravida, amet ultricies leo pellentesque consequat in. Fringilla turpis pulvinar non suscipit dignissim massa, felis purus lectus tempus quisque elit, eti ante curabitur lectus proin neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Enim.",
          "E."
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "short description Ultrices mi auctor condimentum amet elementum vehicula dolor faucibus ex.",
      "long_description": "long description Sodales posuere nibh commodo eti. Tempus pretium consequat ac. Commodo lacus lorem sed. Nam eget pellentesque ante accumsan quisque. Dignissim sollicitudin proin nibh curabitur, ligula facilisis est facilisis vel vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Leo.",
          "Amet.",
          "Hendrerit."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Neque euismod morbi metus eti. Nam hendrerit metus porttitor aliquam.",
      "long_description": "long description Lacinia diam sed justo imperdiet imperdiet. Eros fringilla auctor blandit, dolor maximus vestibulum elit mi sapien, ante mollis nisi et facilisis dui tristique accumsan, magna sit fringilla vitae natoque consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "In.",
          "Ornare.",
          "Vitae."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description Amet porttitor placerat eti porttitor pretium, velit a ex risus.",
      "long_description": "long description Ipsum maximus natoque i nibh ut lectus ex sapien etiam rhoncus. Auctor enim mollis lacinia gravida amet mauris tincidunt. Pretium sollicitudin eti eget pellentesque imperdiet nunc et laoreet nam tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Pharetra.",
          "Euismod."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Maecenas bibendum curabitur cras turpis dictum. Placerat eget sit in.",
      "long_description": "long description Lorem at est etiam vel, ex pellentesque pulvinar morbi cursus quis aliquam. Magna purus eu proin, ut vehicula euismod nulla ornare, eti sollicitudin au ante amet orci accumsan mi velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nibh.",
          "Accumsan.",
          "Sollicitudin."
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "short description Mi lorem sit rhoncus ultricies lobortis turpis arcu lobortis adipiscing.",
      "long_description": "long description Massa elit sollicitudin nisl cras ipsum nisl placerat pretium lacinia sem. Cursus dignissim ante sed, ante maecenas dignissim iaculis lorem au aenean eros. Viverra mollis dui lobortis fringilla turpis tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Purus.",
          "Elementum.",
          "Amet."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Elementum ut ultrices ac nam sollicitudin. Sit elementum dolor maximus.",
      "long_description": "long description At nunc est e vehicula. Arcu metus elementum ex natoque posuere, sodales i lobortis sed. I diam vehicula ac. A orci natoque nam. Lacus pellentesque elit justo facilisis lacinia sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tristique.",
          "Gravida.",
          "Euismod."
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "short description Vel bibendum lacus eget ultrices. Lacinia maecenas enim orci ante.",
      "long_description": "long description Ultrices enim pellentesque enim sollicitudin iaculis mauris tristique. Faucibus sagittis sodales justo tincidunt nisi. Adipiscing ex eu mollis maximus dolor blandit tempus. Ut aenean dolor suscipit. Dolor maecenas consequat elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cursus.",
          "Est.",
          "I."
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "short description Curabitur massa viverra facilisis ex. Au velit viverra ultrices commodo.",
      "long_description": "long description Amet dictum magna curabitur eti sodales sodales ut pulvinar laoreet, pretium sapien scelerisque risus cras augue. Dolor nisl laoreet vulputate. Iaculis a consequat est viverra. Pulvinar nisi rhoncus massa maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacus.",
          "At.",
          "Magna."
      ]
    },
    {
      "name": "Conixco",
      "short_description": "short description Accumsan etiam diam et ultrices enim, tempor au sollicitudin pulvinar.",
      "long_description": "long description Elementum diam porttitor ornare quisque metus. Elit ut auctor arcu. Ipsum imperdiet condimentum blandit auctor cursus sodales tortor cras. Id nam a tristique sem quisque erat, sagittis ultrices fringilla condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Consequat.",
          "Accumsan."
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "short description Aliquet etiam e faucibus ex. Hendrerit elementum aliquam ultrices tortor.",
      "long_description": "long description Ac scelerisque tristique viverra magna lacus. Mi nisl eros ante at fringilla consectetur tincidunt mollis aliquet pretium, ligula ultricies diam ultricies. Id pellentesque viverra vulputate euismod, aliquam bibendum consectetur ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Condimentum.",
          "Tortor.",
          "Morbi."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Lacinia est est ante tincidunt porttitor. Lectus blandit i sed.",
      "long_description": "long description Felis proin eu mi felis cras. Elit i mollis ultricies, enim massa quisque laoreet dolor. Vulputate pellentesque etiam mauris. Magna eti eu amet, metus magna aenean lorem faucibus sodales tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Natoque.",
          "Cras.",
          "Nam."
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "short description Nulla vitae mauris eget bibendum pretium finibus. Fringilla tristique tincidunt.",
      "long_description": "long description Suscipit imperdiet id blandit in, ac quis eget nibh, sed est tincidunt eti aliquet au enim ex tincidunt ipsum erat accumsan adipiscing, magna lacus sollicitudin cras eros felis natoque sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ante.",
          "Cursus.",
          "Et."
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "short description Nisl ornare ornare amet velit cras condimentum vestibulum nunc consequat.",
      "long_description": "long description Sapien nisi finibus bibendum tortor massa lacinia id. Tempus tempor eti dictum donec adipiscing, aliquam justo vulputate sit quis sagittis nunc. Dignissim e tempus augue. Tristique velit eget porttitor aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Adipiscing.",
          "Dictum.",
          "Pretium."
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "short description Dictum aenean ut imperdiet ligula ante sem lacinia viverra porttitor.",
      "long_description": "long description Sollicitudin dignissim viverra lacinia orci. Metus diam sit lacinia gravida eti. Vitae aenean elit nam ac condimentum facilisis, leo metus ultrices dictum hendrerit tempor purus ante cras a at lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pellentesque.",
          "Maximus.",
          "Ante."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Aliquet ac orci aenean maecenas. Auctor vulputate hendrerit et accumsan.",
      "long_description": "long description Tincidunt lobortis dui pulvinar aliquet. Sollicitudin fringilla a fringilla vestibulum au massa in e. Erat eros vehicula in elit pretium mauris. Tincidunt cursus auctor ornare enim. Euismod placerat ex i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sit.",
          "Pellentesque.",
          "Dignissim."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Amet maximus mauris commodo consequat placerat hendrerit elit elementum mattis.",
      "long_description": "long description Tempus leo bibendum ultricies facilisis. Eros nibh lobortis dignissim hendrerit aliquam metus eu finibus accumsan tempor, euismod ex posuere sagittis. Dolor fringilla imperdiet turpis pharetra magna posuere. Natoque mollis natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vestibulum.",
          "I.",
          "E."
      ]
    },
    {
      "name": "Conixco",
      "short_description": "short description Pharetra ex eti tristique curabitur vel, metus lacus condimentum curabitur.",
      "long_description": "long description Tortor est mi pharetra ex amet ante sem risus eget magna auctor elit, eu orci vitae enim. Tristique est leo lacinia vulputate erat maximus eti. Proin lacus ante magna lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Lobortis.",
          "Aenean."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description Natoque eu diam ante sit augue ut pharetra ut quis.",
      "long_description": "long description Turpis hendrerit curabitur aliquet tincidunt aliquet justo auctor metus quisque blandit faucibus sollicitudin, vulputate eti dolor rhoncus ultrices. Dui et pharetra eti natoque arcu, ultricies aliquam lorem et erat rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cras.",
          "Sapien.",
          "Magna."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Laoreet consequat tempor ex ante ex. Ligula natoque leo accumsan.",
      "long_description": "long description Cursus ultricies ultrices nulla ultrices posuere pretium nisi. Vitae aliquet au eros pulvinar pellentesque eu, arcu cras velit elementum commodo pharetra proin. Nunc mattis mauris fringilla arcu. Tincidunt est sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eros.",
          "Nam.",
          "Eget."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Suscipit turpis morbi elementum est id eu sem pharetra nam.",
      "long_description": "long description Augue etiam nunc tristique maximus ornare cursus. Elit morbi au nisl natoque. Sollicitudin accumsan tincidunt fringilla tortor, ultrices suscipit imperdiet commodo mi mi tincidunt est auctor, hendrerit dignissim tempor tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "Et.",
          "Augue."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description Pulvinar eget pellentesque orci augue lacus facilisis metus neque augue.",
      "long_description": "long description Gravida diam consectetur nam etiam, natoque massa lorem est et dignissim augue auctor auctor, scelerisque commodo dui laoreet. Sollicitudin curabitur eros laoreet elementum, i ex lacinia enim ultricies erat eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Rhoncus.",
          "Orci.",
          "Nunc."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Sit curabitur maximus ornare commodo a, et est mattis consequat.",
      "long_description": "long description Suscipit neque ut ut magna cras eros laoreet. Sapien vel aliquam eti gravida lectus tristique eros. Neque vestibulum dui amet dictum gravida. I faucibus proin scelerisque turpis. Commodo leo ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sem.",
          "Erat.",
          "Condimentum."
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "short description Justo posuere ex vestibulum adipiscing. Justo a maximus consectetur ac.",
      "long_description": "long description Massa euismod purus vulputate vulputate. Vel non diam magna et nibh aenean lacinia tortor consectetur. Porttitor maximus finibus nam mollis natoque tincidunt posuere, lectus erat quisque pretium. Fringilla commodo augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ut.",
          "Rhoncus.",
          "Nibh."
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "short description Dignissim enim eget sed metus aenean, tincidunt porttitor augue tempor.",
      "long_description": "long description E at nulla ipsum vel ante magna eti velit mi morbi vestibulum. Eget auctor diam diam. Leo et massa sem maecenas vulputate scelerisque. Pellentesque nam mattis amet scelerisque etiam nisl.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultrices.",
          "At.",
          "Sodales."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Natoque tempus in natoque quis commodo mi pellentesque lacinia eti.",
      "long_description": "long description Elementum ut quis velit viverra finibus. Amet purus porttitor au bibendum quis laoreet imperdiet mattis porttitor turpis. Suscipit nulla ultricies diam etiam eget orci, etiam est ante vulputate erat laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Faucibus.",
          "Cras.",
          "Quisque."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Arcu magna tincidunt cursus quis, pretium felis aliquet aenean lacus.",
      "long_description": "long description Ligula lorem placerat pretium morbi finibus. Pulvinar vestibulum arcu auctor nisl ultrices, ac lacinia tortor nisi lacinia sem nam, natoque consectetur risus ante est a cras sodales sem nunc eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Sodales.",
          "Dolor."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Turpis metus bibendum nisi euismod aliquet in ipsum sit lacinia.",
      "long_description": "long description Ex arcu e eget eu, tortor sollicitudin enim magna elit nulla. Viverra porttitor au lacinia. Massa risus ligula orci augue, lectus vulputate vel quisque, enim in e imperdiet lorem morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sed.",
          "Cursus.",
          "Sem."
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "short description Eu natoque justo placerat lorem suscipit. Sagittis neque ultricies hendrerit.",
      "long_description": "long description Vehicula proin condimentum sodales au. Diam purus aenean commodo vehicula. Dictum sodales curabitur pulvinar maximus erat. Est lorem mauris ultricies morbi, nibh est fringilla commodo consectetur eti eti sagittis hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Aliquam.",
          "Dui."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Lectus vulputate dignissim dui lacinia rhoncus facilisis imperdiet adipiscing suscipit.",
      "long_description": "long description Ultrices pulvinar et ante vehicula, bibendum porttitor erat mattis nulla vel. Tortor in sodales risus donec elit proin mauris, lobortis pharetra porttitor eti bibendum maximus accumsan pulvinar. Nulla aliquet at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vehicula.",
          "Placerat.",
          "Nibh."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Bibendum turpis at lectus risus, in vehicula ultrices sollicitudin ultricies.",
      "long_description": "long description Pretium maximus ex commodo pharetra lacus dui etiam viverra pharetra condimentum. Lacinia enim id mattis. Eros et dui quis. Curabitur amet condimentum elit amet. Augue cursus facilisis viverra aliquet natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquet.",
          "Laoreet.",
          "Magna."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Lacus dui quis tristique aliquam cras nulla euismod sodales ligula.",
      "long_description": "long description Ex metus leo eget purus natoque vehicula sagittis sollicitudin dignissim. Elit posuere euismod viverra tincidunt facilisis massa aliquet sollicitudin cursus a natoque aliquam gravida lacinia nunc. Vulputate risus massa tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "At.",
          "Bibendum.",
          "Ex."
      ]
    },
    {
      "name": "Pancast",
      "short_description": "short description Ligula blandit cursus cras ligula. Dolor sapien i lacinia vitae.",
      "long_description": "long description Pellentesque cras ultrices ac diam ornare maximus sit. Tincidunt donec vestibulum in eti posuere, i neque e felis at ornare amet cras. A mattis leo posuere, consectetur blandit fringilla neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vehicula.",
          "Adipiscing.",
          "Orci."
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "short description Magna enim mattis lacinia eros metus. Rhoncus nulla blandit ultricies.",
      "long_description": "long description Bibendum condimentum tristique nibh tincidunt adipiscing enim. Elit est ultrices lorem magna elementum, et adipiscing purus sodales nunc. Eti eti facilisis eti suscipit sit etiam mauris. Turpis enim iaculis faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "Sollicitudin.",
          "Rhoncus."
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "short description Commodo morbi commodo tincidunt ac, in e velit gravida pulvinar.",
      "long_description": "long description Ultrices erat mauris fringilla accumsan sed. Lacinia finibus sapien dui, quisque neque ipsum et turpis. Elit sodales dui consequat. Pharetra enim blandit ultricies sit felis id imperdiet cursus dolor tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tincidunt.",
          "Leo.",
          "Consequat."
      ]
    },
    {
      "name": "Solexis",
      "short_description": "short description Ultrices elit e vel commodo eu ante curabitur vulputate commodo.",
      "long_description": "long description Lacus sagittis vel mauris elementum suscipit ligula. Morbi e aliquet ornare est ultricies, facilisis orci mollis risus commodo lacus accumsan lacinia pretium ut sem felis amet sagittis sagittis placerat morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sodales.",
          "Laoreet.",
          "Nam."
      ]
    },
    {
      "name": "Kancom",
      "short_description": "short description Tortor sem pharetra enim nisl fringilla porttitor morbi pellentesque ipsum.",
      "long_description": "long description Mollis eti facilisis ligula lacinia elit consequat, non vestibulum a enim. Eu vulputate facilisis dictum viverra. I nisi mi tortor arcu mi metus nam justo nam pretium massa curabitur sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tincidunt.",
          "Nibh.",
          "Vehicula."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Ex et lectus sem quisque morbi sodales suscipit sem finibus.",
      "long_description": "long description Sit sagittis pellentesque lacinia posuere bibendum sollicitudin lacus vulputate, morbi lacinia mi natoque viverra aliquam aenean, i vulputate velit tristique elementum enim tempor, condimentum laoreet dui blandit nam ligula blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Sed.",
          "Dui."
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "short description Maecenas maximus tempor felis elementum augue accumsan donec dolor dignissim.",
      "long_description": "long description Scelerisque donec lacinia metus hendrerit. Eu cras bibendum justo, sapien nisl sem cursus. Massa faucibus leo consectetur at. Lacinia euismod ex sodales mi, tortor sit fringilla quisque pellentesque massa iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ligula.",
          "Ultricies.",
          "Fringilla."
      ]
    },
    {
      "name": "Freecast",
      "short_description": "short description Ac consequat tempus eget vulputate ipsum auctor. Hendrerit facilisis a.",
      "long_description": "long description Quis diam ex cras at lacus mi sodales aliquet. Turpis fringilla finibus ex ut quis, amet tristique mattis suscipit. Magna dui viverra pulvinar tempor. Suscipit leo erat lacinia est bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Consequat.",
          "Turpis."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description Pellentesque maecenas mollis adipiscing elit. Tempus quisque metus eget etiam.",
      "long_description": "long description Bibendum metus accumsan posuere tempor, bibendum mollis sodales neque dolor diam sapien. Eu adipiscing eros neque nisl non accumsan fringilla maximus maecenas ipsum. Dui finibus scelerisque tempor lacus eu imperdiet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Imperdiet.",
          "Imperdiet."
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "short description Maecenas magna lacinia eros finibus eu neque finibus mi felis.",
      "long_description": "long description Lectus eu ultricies facilisis placerat, bibendum vitae massa e elit, erat ultricies mattis aliquet maximus bibendum. Sed quisque sagittis fringilla justo adipiscing velit. Nunc eget ex metus posuere etiam gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sodales.",
          "Ultricies.",
          "Massa."
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "short description Iaculis imperdiet donec sit leo, tortor au felis mollis neque.",
      "long_description": "long description E diam ultricies tempor eu. Mattis auctor eros pretium consectetur posuere, placerat dolor lacinia scelerisque. Dolor augue ultricies eros commodo erat magna. Viverra quisque maximus vestibulum, eros donec posuere neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Facilisis.",
          "Elementum."
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "short description Pretium eti velit dictum lorem, maecenas ex vitae vehicula ipsum.",
      "long_description": "long description Arcu porttitor laoreet ultrices placerat lacinia, aliquet ornare quisque sagittis mi, mauris viverra faucibus ac lobortis, tempor nunc ornare non iaculis sapien. Dui euismod leo consectetur magna eti porttitor purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Justo.",
          "Dignissim."
      ]
    },
    {
      "name": "Kancom",
      "short_description": "short description Vitae non vel non sodales, finibus sapien aenean posuere neque.",
      "long_description": "long description Dignissim lacinia dignissim ex nulla mi rhoncus eget. Quis amet proin vehicula cras. Nam faucibus dui accumsan, et porttitor cras cursus vitae elit augue, vel sapien erat tortor massa ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Faucibus.",
          "Erat.",
          "Pharetra."
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "short description Est neque tristique non vel mi metus auctor nam velit.",
      "long_description": "long description Tincidunt euismod massa elit cursus, tincidunt laoreet non nisi aliquet tempor dictum adipiscing, imperdiet tempor diam i sollicitudin, felis etiam maximus mattis elit consequat neque accumsan. Maximus viverra adipiscing ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nunc.",
          "Maximus.",
          "Natoque."
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "short description Curabitur e suscipit vestibulum at ultrices posuere. Risus ultrices aliquam.",
      "long_description": "long description Quis felis gravida finibus imperdiet lacinia sit ultrices aliquet, euismod a tristique elit, sagittis arcu nisl tristique erat. Tempor accumsan mauris mi, facilisis i mi nibh, sollicitudin est ligula nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Elit.",
          "Commodo.",
          "Ac."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Justo et nisl ex et tristique, faucibus natoque pretium elementum.",
      "long_description": "long description Dui tempor orci pulvinar pretium sodales dictum a purus condimentum. Ultrices nisl enim enim, magna pulvinar quis ipsum. Quis gravida vehicula cursus. Leo posuere eros elit, e curabitur vehicula sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tincidunt.",
          "Augue.",
          "Id."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Velit nunc lobortis risus lacus. Sed ultrices in turpis felis.",
      "long_description": "long description Cras nibh sollicitudin placerat vestibulum eu tincidunt pellentesque risus, enim pharetra leo quisque facilisis in, mattis nibh sit vulputate, posuere aliquam tempus lacinia, vulputate ac vel tempor pharetra eu est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dui.",
          "Vehicula.",
          "Pulvinar."
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "short description Cras dictum massa sem elementum dictum mattis. Aliquet cras ut.",
      "long_description": "long description Natoque sollicitudin hendrerit nisl sem gravida nulla metus etiam. Velit pretium lacus ex ipsum diam ipsum etiam, enim etiam ligula vel accumsan nunc mollis. Maximus sagittis sed accumsan maximus mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Placerat.",
          "Hendrerit.",
          "Facilisis."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Purus lobortis tempus ex dolor, augue pulvinar enim ligula sit.",
      "long_description": "long description Pulvinar lectus vehicula lorem posuere tempor. Nisl consequat ultricies maximus mi a dignissim. Pellentesque posuere e lorem ipsum proin etiam purus. Finibus rhoncus imperdiet pharetra porttitor, mollis nisi augue bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Condimentum.",
          "Bibendum.",
          "Augue."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Orci auctor tempor lectus ac at. Lacinia consequat arcu pellentesque.",
      "long_description": "long description Bibendum sagittis ipsum sapien tincidunt, nibh bibendum dolor dictum risus magna arcu sapien. Condimentum consequat enim diam ut. Nam et leo nunc, nisl proin hendrerit at nunc est gravida magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "Lacinia.",
          "Aenean."
      ]
    },
    {
      "name": "Westercom",
      "short_description": "short description Au dolor turpis eti lacus, etiam laoreet ex in curabitur.",
      "long_description": "long description Ac faucibus pulvinar finibus sodales ornare a ultrices metus, non id augue rhoncus viverra. Gravida sit suscipit tortor. Tortor sagittis auctor dictum maximus metus. Sed aliquet tincidunt aliquet natoque tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Id.",
          "Curabitur.",
          "Aenean."
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "short description Tincidunt accumsan iaculis etiam scelerisque nibh ligula id porttitor tempor.",
      "long_description": "long description Sollicitudin proin mi gravida lobortis pellentesque. Nisi mattis elementum nibh purus, nisi eget sed suscipit, natoque augue vehicula lorem justo, blandit eti amet magna enim. Leo dictum id consectetur posuere.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Suscipit.",
          "Pellentesque.",
          "Commodo."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Sed justo dignissim sollicitudin ac finibus nibh rhoncus suscipit bibendum.",
      "long_description": "long description Sem pharetra eti neque nulla imperdiet sodales tortor lobortis purus facilisis nam. Ut tempus cras ipsum, quis tempor sem orci lorem blandit quisque felis e accumsan. Sed aliquam scelerisque tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Pulvinar.",
          "Porttitor."
      ]
    },
    {
      "name": "Celmax",
      "short_description": "short description Id nulla felis ligula enim metus bibendum sit pellentesque ultricies.",
      "long_description": "long description Erat nunc nam nunc finibus vehicula tempus dictum sit dolor et sit blandit faucibus nam sed. Purus dignissim nulla at facilisis auctor placerat, id donec natoque tristique ligula eget adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Commodo.",
          "Eti.",
          "Nulla."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Finibus maximus cras proin mollis. Vel facilisis sapien vitae imperdiet.",
      "long_description": "long description Maximus rhoncus lacus in vulputate. Ultrices massa lorem bibendum ligula erat sit placerat justo, aliquet ultrices orci mauris suscipit commodo viverra, lacinia risus ac eti viverra gravida, laoreet velit morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Metus.",
          "Consectetur.",
          "Morbi."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Tristique id sapien rhoncus tempus vulputate, fringilla justo et sed.",
      "long_description": "long description Curabitur morbi nam mollis tortor. Commodo laoreet purus sapien. Vitae ut e ultricies scelerisque iaculis, sapien nisl lobortis arcu velit est condimentum condimentum a consectetur tempus. Massa hendrerit velit orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Imperdiet.",
          "Natoque.",
          "Aliquet."
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "short description Porttitor at au maximus nunc consectetur, donec commodo ipsum velit.",
      "long_description": "long description Eu gravida pretium tempor eti enim natoque. Accumsan risus fringilla at etiam, porttitor cras donec imperdiet id ligula au rhoncus. Proin eti justo pretium neque ut vestibulum lorem nunc vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Id.",
          "Purus.",
          "Lectus."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Arcu pharetra nunc risus enim ligula nam dolor lectus laoreet.",
      "long_description": "long description Vehicula tempus dolor mollis vestibulum. Mollis condimentum nunc massa. Arcu curabitur condimentum sem elit sed ligula. Quisque porttitor mauris hendrerit lobortis porttitor porttitor eti dui, metus etiam tortor ultrices eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "A.",
          "Pharetra.",
          "Placerat."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Orci maecenas sit eti mollis, cras lacinia id arcu a.",
      "long_description": "long description Blandit maximus risus id tempus e vitae. Tristique morbi tristique elit et leo nibh e, hendrerit sed ornare dolor, e id sit vitae orci, pharetra diam at lectus at eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Faucibus.",
          "Vitae.",
          "E."
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "short description Nam accumsan condimentum maximus consequat lectus sed auctor consequat sodales.",
      "long_description": "long description Ipsum porttitor neque fringilla at leo quis vel rhoncus arcu arcu vitae vehicula. Consequat etiam sollicitudin auctor ac sapien hendrerit. Ante massa aliquam auctor massa viverra magna amet accumsan placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vehicula.",
          "Nulla.",
          "Lacinia."
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "short description Orci commodo a amet proin mattis blandit. Erat risus tortor.",
      "long_description": "long description Ipsum sodales at tincidunt morbi, vehicula lacinia magna maecenas. At proin tempor enim lacus ultricies. Massa e faucibus pulvinar lobortis magna. E mi finibus cursus. Elit consequat lacinia consequat proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vel.",
          "Eget.",
          "Nisi."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Facilisis fringilla non hendrerit placerat mauris, cras enim eros a.",
      "long_description": "long description Amet a consectetur sed est, blandit mollis neque ex suscipit cras ut, bibendum vehicula i mollis consectetur. Id suscipit euismod pellentesque sed dolor vulputate aenean lacus diam scelerisque commodo tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Ligula.",
          "Imperdiet."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description Metus vulputate dolor cursus ex curabitur nam sollicitudin nisl nam.",
      "long_description": "long description Elementum condimentum vehicula velit velit in tincidunt mi nisl massa lectus. Pulvinar quisque suscipit a. Eget ipsum adipiscing faucibus curabitur. Magna laoreet ipsum eti iaculis. Nulla aliquam finibus gravida blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Euismod.",
          "Hendrerit."
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "short description Sollicitudin at vehicula arcu amet, aliquam ante ipsum natoque eros.",
      "long_description": "long description Pretium arcu felis ultricies gravida enim arcu ultrices quisque vehicula lobortis ornare mattis leo ligula dolor aliquet magna maximus nunc, condimentum non maecenas sagittis pellentesque. Vestibulum et vel leo sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "Porttitor.",
          "Massa."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Mi ac scelerisque maecenas nam iaculis. Donec enim metus donec.",
      "long_description": "long description Commodo commodo commodo ornare sodales pharetra ipsum risus. Sed etiam quisque non ut etiam cras nam. Tortor donec ultrices massa. Lacinia sapien consequat donec lacinia morbi ut. Enim sagittis rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Suscipit.",
          "Nulla.",
          "Vitae."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description Maecenas i blandit aliquam commodo dictum massa in tincidunt facilisis.",
      "long_description": "long description Vel sit adipiscing felis sodales. Aliquam dignissim commodo pulvinar tincidunt lobortis sem. Condimentum nisi eget a vulputate morbi amet. Elit et id finibus nibh mollis porttitor. Vitae maximus nam non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisl.",
          "Pharetra.",
          "Bibendum."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Consectetur mattis nisl donec eget enim commodo bibendum condimentum sit.",
      "long_description": "long description Lobortis enim lacus pulvinar turpis id, cursus ligula dui finibus vestibulum at. Vitae aliquam sed bibendum. Faucibus diam sem pharetra i. Felis cursus ipsum blandit risus sagittis diam viverra faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sodales.",
          "Nunc.",
          "Sapien."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Nibh velit vestibulum enim morbi, at enim e donec enim.",
      "long_description": "long description Eu maximus nibh proin arcu. Tempus neque massa proin aliquam purus porttitor. Consectetur imperdiet tincidunt orci nunc mauris. Felis facilisis tempor lectus pretium ac felis. Sollicitudin finibus lectus maximus ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Id.",
          "Accumsan."
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "short description Bibendum quisque a nam id porttitor, consequat sodales donec mattis.",
      "long_description": "long description Lacinia vulputate vestibulum commodo at arcu. Consectetur vel gravida dignissim sapien blandit sodales proin sed velit metus. Pharetra eti nulla lacus curabitur ligula justo. Hendrerit ipsum tempor donec hendrerit vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mi.",
          "Sagittis.",
          "Tristique."
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "short description Faucibus dolor sed et ornare, eu ornare orci dictum sem.",
      "long_description": "long description Adipiscing augue scelerisque sollicitudin vel, nisi consequat eti purus ante suscipit dui pellentesque hendrerit. Pretium justo augue condimentum orci cursus viverra diam ex, vehicula bibendum vestibulum justo magna a cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aenean.",
          "Scelerisque.",
          "Sem."
      ]
    },
    {
      "name": "Celmax",
      "short_description": "short description Suscipit i maecenas proin nibh est sem orci eget mauris.",
      "long_description": "long description Non imperdiet tempor et tempor, diam i pellentesque donec. Arcu magna at nunc, diam augue viverra au elementum donec. Ipsum tempus a i consequat, quis hendrerit pulvinar pretium i orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Risus.",
          "Purus.",
          "Vulputate."
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "short description Consequat placerat fringilla vulputate dui sem, posuere tortor velit mauris.",
      "long_description": "long description Vitae etiam risus lacinia pellentesque at, adipiscing dolor a lobortis natoque sit. Dictum elementum justo justo ultricies risus dignissim. Laoreet tristique quis lacinia. Nulla purus curabitur adipiscing, dolor eti felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Erat.",
          "Ante.",
          "Suscipit."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Pellentesque diam erat pretium lacinia dictum cursus, tempor morbi tortor.",
      "long_description": "long description Vel magna faucibus aliquet maximus maecenas. Aenean tempus finibus arcu mattis. Diam dignissim mattis finibus, ultricies donec nisi eget, nisl ex donec elementum accumsan est accumsan. Consequat mauris pulvinar tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultricies.",
          "Scelerisque.",
          "Tempus."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Id i quis finibus quisque amet sed nibh purus lacus.",
      "long_description": "long description Quis rhoncus elit donec lacus, consectetur ex tempus metus iaculis ultricies dolor. Est commodo maximus nibh, nisl ligula eget cras ligula imperdiet ex fringilla faucibus, ante leo ultrices ut iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maecenas.",
          "Nam.",
          "Morbi."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Justo pharetra et enim quis elementum lacinia elit vulputate i.",
      "long_description": "long description Nam i lacinia purus ligula. Maecenas laoreet cursus tempus consequat tempus posuere posuere elit at euismod maximus i. Au ex natoque ac. Finibus felis scelerisque quis placerat proin non donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Finibus.",
          "Neque."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Vulputate e lacinia massa rhoncus. Lacinia placerat lacinia ex tristique.",
      "long_description": "long description Maecenas lorem sodales nunc risus sit maecenas tempus, id viverra mi lobortis. Faucibus maximus justo justo. Eget neque vestibulum tortor etiam ut dui, tincidunt sollicitudin adipiscing nisi commodo tincidunt at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Sem.",
          "Rhoncus."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Lacus quisque tempus elit pharetra magna finibus eti nulla adipiscing.",
      "long_description": "long description Consequat curabitur aliquet blandit posuere consequat. Iaculis lorem nam turpis. Rhoncus aliquam magna massa. Finibus ultricies auctor sed, fringilla dolor eros e neque quis imperdiet consequat, vulputate arcu consequat fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Amet.",
          "Aliquet."
      ]
    },
    {
      "name": "Templatek",
      "short_description": "short description Arcu eget euismod aliquam lobortis. Pretium eti non risus porttitor.",
      "long_description": "long description Placerat e vulputate nisi pretium a turpis consectetur adipiscing. Lacus elementum faucibus ornare lorem amet ante consequat, fringilla fringilla sit sagittis ac mauris. Maecenas dignissim sollicitudin at, commodo maecenas porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Orci.",
          "Mauris.",
          "Maximus."
      ]
    },
    {
      "name": "Solexis",
      "short_description": "short description Maximus donec gravida gravida donec eu. Viverra enim maecenas a.",
      "long_description": "long description Curabitur eros leo sapien turpis a diam i fringilla viverra, i felis posuere ante, au ut gravida metus dolor e, sodales rhoncus blandit nibh enim dolor bibendum sagittis cursus iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mi.",
          "Sagittis.",
          "Lacinia."
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "short description Aenean lectus dolor posuere tristique ultrices sodales au curabitur nisl.",
      "long_description": "long description Vitae ultrices ut purus turpis lobortis nisl nisi sem mauris euismod erat, et placerat tortor proin faucibus sed. Ante placerat mi magna. Natoque gravida vehicula cras lobortis, adipiscing scelerisque e.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Donec.",
          "E.",
          "A."
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "short description Mauris tristique bibendum augue lorem aliquet au diam risus orci.",
      "long_description": "long description Rhoncus tincidunt quisque nisl ultrices lorem. Ac lectus dui lacinia auctor ligula. Lorem dignissim neque magna. Quisque bibendum a neque. Mollis adipiscing mollis donec imperdiet dolor, eti eti blandit faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Placerat.",
          "Vitae.",
          "Dolor."
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "short description Nam fringilla ultricies vestibulum sodales. Velit fringilla nam lacinia id.",
      "long_description": "long description Non eti placerat risus est nulla eget ex ultrices commodo. Dolor curabitur mollis consequat natoque euismod mi nulla. Arcu purus laoreet massa vestibulum felis tristique pretium, au felis dictum morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Est.",
          "Nunc.",
          "Neque."
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "short description Quis mollis i sollicitudin placerat fringilla. Neque non adipiscing eu.",
      "long_description": "long description Id vel tortor neque at laoreet ultricies felis nibh a, tempus metus ante natoque curabitur consectetur viverra maecenas tristique sodales vehicula ut condimentum vitae. Tincidunt maecenas maecenas euismod elit eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sit.",
          "Risus.",
          "Facilisis."
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "short description Dui dictum nam rhoncus quis. Arcu mauris consequat faucibus magna.",
      "long_description": "long description Vitae turpis laoreet mauris rhoncus curabitur proin. Dictum pellentesque aliquam at. Sem lobortis ornare risus ut tempor, tristique lacinia arcu felis accumsan maecenas etiam. Cursus vulputate lacinia leo au maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pellentesque.",
          "Tincidunt.",
          "Adipiscing."
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "short description Non faucibus elementum non magna ligula orci vulputate imperdiet commodo.",
      "long_description": "long description Dolor nulla amet turpis orci. Arcu quis scelerisque ipsum purus. Non e morbi ante vulputate etiam, risus eu hendrerit a mauris eros, dui nisi dui mauris bibendum lectus augue eu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Neque.",
          "Pharetra.",
          "Ante."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Aliquet et nam vehicula iaculis dignissim accumsan consequat cras diam.",
      "long_description": "long description Ante ex pulvinar ac ipsum donec au hendrerit. Aliquet et ultrices risus in. Bibendum posuere quis ornare cursus, erat maximus sodales nam. Elit dolor ligula tempus velit, lectus lacinia ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dignissim.",
          "Diam.",
          "Proin."
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "short description Diam maecenas laoreet lectus leo morbi diam consectetur tincidunt mattis.",
      "long_description": "long description Mollis orci hendrerit ultricies nisl eu lacinia ac tristique suscipit dictum nisi risus enim felis et nisl elementum vel turpis nisl sed, mi maximus metus i mauris. Pretium i ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Orci.",
          "Orci.",
          "Eros."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Ex tincidunt fringilla sodales morbi nulla. Arcu lectus pharetra accumsan.",
      "long_description": "long description Dui ut e consectetur scelerisque etiam, pulvinar vel tincidunt curabitur hendrerit. Elit aliquam scelerisque blandit augue. Curabitur vitae augue lacinia mi. Mi erat sapien porttitor, id maecenas nam amet bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Scelerisque.",
          "Id.",
          "Felis."
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "short description Et tortor consequat dictum adipiscing quisque in eget vel lacinia.",
      "long_description": "long description Neque quis adipiscing elit ut. Turpis ipsum eros posuere purus fringilla nisi etiam, laoreet et orci aliquam bibendum. Lacinia ultrices consectetur quisque leo eget justo arcu dui rhoncus ante risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nunc.",
          "Felis.",
          "A."
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "short description Ligula sollicitudin amet proin ex leo nulla, sapien sem vulputate.",
      "long_description": "long description Enim id erat dolor vel vehicula proin gravida sed. Velit proin viverra mollis cras blandit, massa ornare vel laoreet ligula pretium lacinia. Rhoncus non ipsum suscipit euismod. Ex amet sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maecenas.",
          "Donec.",
          "Et."
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "short description Lacinia commodo non tincidunt lacinia sagittis quisque metus auctor tempor.",
      "long_description": "long description Tristique lectus metus cras eget, et consectetur auctor scelerisque est ex tempor. Nibh dui nulla iaculis velit. Cursus lobortis ornare ligula facilisis. Leo tristique ex nisl. Ut aliquam quisque lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cras.",
          "Quisque.",
          "Ipsum."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Sit facilisis imperdiet quisque nisi enim. Blandit elementum velit finibus.",
      "long_description": "long description Ex eros massa sapien vulputate e turpis ut eti ligula placerat au. Maximus consequat pharetra est pharetra sollicitudin cursus metus maecenas fringilla e ante aliquet, aliquet sollicitudin mauris faucibus non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Nisi.",
          "Nunc."
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "short description Neque vehicula mollis aliquam ornare cursus mauris, auctor consequat velit.",
      "long_description": "long description Tempor nunc leo eu ex, accumsan nisi elementum ultrices au dignissim tincidunt velit ut lobortis. Mollis magna in pretium a. Quisque velit mauris mauris donec aenean turpis nulla felis lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Et.",
          "Viverra.",
          "Nibh."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description Commodo justo sagittis dignissim diam sem faucibus bibendum lacinia porttitor.",
      "long_description": "long description Eros pulvinar metus pellentesque mauris blandit. Massa rhoncus ex eros non ligula. Augue mauris natoque curabitur, auctor consequat accumsan diam cursus suscipit. Vel augue eros rhoncus nibh eget vehicula a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sodales.",
          "Neque.",
          "Sollicitudin."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Ligula a imperdiet mi turpis. Adipiscing dignissim condimentum proin lorem.",
      "long_description": "long description Vehicula natoque iaculis lacinia orci tempus suscipit nisi nibh vel arcu. Enim mi accumsan sem. Mauris eros maecenas consectetur lectus, eti ut aliquam pulvinar imperdiet eti e, maecenas sagittis finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Faucibus.",
          "Adipiscing.",
          "Morbi."
      ]
    },
    {
      "name": "Britech",
      "short_description": "short description Proin metus viverra enim eget. Proin diam hendrerit accumsan neque.",
      "long_description": "long description Laoreet pellentesque etiam lectus tempus enim vehicula dignissim. Non vitae consequat pretium pulvinar pretium scelerisque non, finibus tincidunt nisi sollicitudin blandit. Eros faucibus dolor tempor ornare. Suscipit diam lectus lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eros.",
          "Fringilla.",
          "Tristique."
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "short description Maecenas facilisis suscipit sapien pretium purus, condimentum lacinia dui eu.",
      "long_description": "long description Sit pulvinar leo finibus mi faucibus. Tempor eu diam vel, ante mi pharetra lacinia. Dolor gravida diam hendrerit aliquet. Enim lectus euismod placerat in. Faucibus sodales lobortis e id mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Felis.",
          "Sollicitudin.",
          "I."
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "short description Lectus mauris placerat mollis aenean. Laoreet suscipit amet mauris condimentum.",
      "long_description": "long description Amet consectetur ipsum ut at amet morbi sapien sem nam vulputate neque est lectus condimentum. Lacinia dignissim bibendum leo, leo et nunc i accumsan. Neque arcu placerat sem ut auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Orci.",
          "Sit.",
          "Lobortis."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Nulla maximus felis massa mi i hendrerit. Sodales eu leo.",
      "long_description": "long description Aliquam aliquet risus maecenas finibus condimentum, vulputate tempus ac dui dolor. Tempus condimentum cursus suscipit euismod. Vestibulum cursus tincidunt viverra. Dignissim felis adipiscing finibus, mattis vel erat amet sodales vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Neque.",
          "Posuere.",
          "Lectus."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description At risus etiam auctor aliquet lacinia eros ligula et sagittis.",
      "long_description": "long description Metus scelerisque nibh tortor vulputate. Ex nisi nibh pulvinar, proin nisl lobortis nibh sem sodales consectetur maecenas sollicitudin ultricies est aliquam viverra pulvinar. Maecenas vel i ex nunc neque sit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aenean.",
          "Maecenas.",
          "Fringilla."
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "short description Au sem donec augue natoque vel. Sagittis adipiscing commodo suscipit.",
      "long_description": "long description Maecenas natoque bibendum purus scelerisque, adipiscing pharetra porttitor facilisis bibendum massa vel pellentesque in placerat sit. Maximus erat tristique faucibus metus, tempus vulputate diam at lacinia, laoreet lacinia pharetra nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sapien.",
          "Eu.",
          "Ante."
      ]
    },
    {
      "name": "Opticast",
      "short_description": "short description Commodo lobortis donec elit tincidunt. Ut purus vehicula amet proin.",
      "long_description": "long description Gravida imperdiet vestibulum pretium bibendum natoque, consequat euismod orci nisi ut leo aliquam enim, sapien magna ante nulla arcu sem au, pulvinar sollicitudin finibus at. Commodo quis euismod in tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Justo.",
          "Amet."
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "short description Ac placerat morbi ex eros e id lacinia proin i.",
      "long_description": "long description Sed blandit dictum vehicula cursus vehicula. Tempor lacinia id pretium sodales, nibh morbi morbi lobortis. Metus curabitur purus dui quisque ut tempor vestibulum iaculis. E natoque eu enim fringilla pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ac.",
          "Pulvinar.",
          "Tincidunt."
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "short description Ligula amet gravida tristique enim sollicitudin. Leo risus pretium ante.",
      "long_description": "long description Leo sagittis pulvinar lacus condimentum. Rhoncus sagittis aliquet gravida scelerisque suscipit eti tempus erat pulvinar. Mauris finibus mollis lorem, consequat adipiscing i tortor euismod. Lacinia mattis ante scelerisque nisi leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Enim.",
          "Laoreet.",
          "Mollis."
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "short description Nibh finibus morbi bibendum mi condimentum mauris at pellentesque au.",
      "long_description": "long description Dignissim est sollicitudin sem purus. Mi consectetur aliquam orci accumsan i ultricies id. Ut nunc dolor dui orci. Maecenas consequat lacus viverra leo eros sit non, blandit vehicula gravida magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquet.",
          "Pulvinar.",
          "Cras."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description I auctor tempor at vitae id at, arcu lacus amet.",
      "long_description": "long description Pellentesque facilisis commodo in in auctor justo. Risus eu pharetra rhoncus. Est sollicitudin vel hendrerit auctor augue felis. Ex pharetra eu morbi rhoncus ante consectetur consequat nam mauris in i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sed.",
          "At.",
          "Consectetur."
      ]
    },
    {
      "name": "Storex",
      "short_description": "short description Tempus tempor hendrerit mi lacinia, felis placerat tempus au vitae.",
      "long_description": "long description Dignissim posuere consectetur accumsan pretium posuere nisl tristique nam donec, lorem lacinia posuere accumsan, finibus morbi quis vulputate mi iaculis nibh, hendrerit quisque neque pulvinar tempor rhoncus maecenas a fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Finibus.",
          "Iaculis."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description Consequat nibh leo blandit placerat bibendum adipiscing. Cursus tincidunt augue.",
      "long_description": "long description Vehicula sodales sem a proin auctor ipsum eu leo. Augue magna ligula lorem sem blandit eget risus natoque lorem scelerisque, id massa ipsum hendrerit quisque sapien posuere ultrices risus ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lectus.",
          "Consequat.",
          "Lacinia."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Adipiscing consequat natoque tempor pellentesque faucibus vulputate, lobortis nulla quis.",
      "long_description": "long description Ex porttitor natoque euismod pellentesque finibus lorem. Tristique finibus nunc eget erat. Placerat eti ac laoreet, sit sodales rhoncus a sapien i maximus lacinia tincidunt dolor mattis condimentum euismod commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Arcu.",
          "Au.",
          "Vehicula."
      ]
    },
    {
      "name": "Logico",
      "short_description": "short description Scelerisque sollicitudin facilisis tempor aliquet mattis gravida laoreet ante tortor.",
      "long_description": "long description Commodo vestibulum scelerisque etiam quis, lorem in orci neque. Elit lobortis faucibus pretium, mollis nunc consequat i maximus. Mi rhoncus natoque turpis tincidunt, erat nulla tempus quisque id euismod morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Et.",
          "Nisi.",
          "Morbi."
      ]
    },
    {
      "name": "Westercom",
      "short_description": "short description Vitae facilisis mauris purus arcu i. Lacinia orci finibus bibendum.",
      "long_description": "long description Sodales gravida sit ex scelerisque ut, sit nisi porttitor felis. Lobortis au aliquet tortor. Est euismod aliquet justo dignissim. Tempor viverra dui ante scelerisque maximus placerat dolor posuere vitae dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consequat.",
          "Non.",
          "Hendrerit."
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "short description Facilisis proin nunc vitae vulputate vulputate pulvinar dui ligula placerat.",
      "long_description": "long description Tincidunt suscipit curabitur commodo pharetra, turpis eros faucibus ligula sem leo purus vitae fringilla nulla, maximus adipiscing at velit quis, posuere consectetur gravida pellentesque commodo au, ultrices eti dictum cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tortor.",
          "Felis.",
          "Morbi."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Aliquet tristique porttitor nibh felis eros. Pellentesque hendrerit nisl imperdiet.",
      "long_description": "long description Ac blandit iaculis euismod scelerisque hendrerit tempor, magna nibh augue placerat commodo, maecenas accumsan curabitur curabitur sollicitudin purus, etiam id a maximus elit lobortis ornare, nibh porttitor euismod auctor ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Iaculis.",
          "Eu.",
          "Dignissim."
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "short description Adipiscing cras eu tempus iaculis quisque. Blandit ac condimentum sodales.",
      "long_description": "long description Condimentum placerat euismod consequat elementum, facilisis nulla id lorem accumsan tristique rhoncus imperdiet sodales metus risus enim auctor lacinia e. Enim commodo nunc euismod augue risus nisi dolor quis tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cursus.",
          "Magna.",
          "Vitae."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Orci quis vestibulum maecenas viverra. Ligula risus purus elementum auctor.",
      "long_description": "long description Non donec metus vestibulum vitae. Arcu laoreet faucibus blandit vehicula tortor nibh sapien pulvinar sem ligula. Sapien ornare laoreet mi. Eti lacinia mollis blandit maximus pharetra imperdiet i iaculis fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Est.",
          "Nibh."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Vitae tristique leo sagittis risus est purus vel sem ac.",
      "long_description": "long description Lacinia diam etiam ultrices nibh eros enim porttitor purus nisl, rhoncus ligula maecenas sit magna. Condimentum donec ut mauris. Velit pellentesque ultrices ultricies porttitor est nam metus eros au ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aenean.",
          "Nam.",
          "Pulvinar."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Tempus i elementum neque leo sollicitudin, lacus tincidunt tristique nunc.",
      "long_description": "long description Mi vel lorem sed euismod. Pharetra faucibus imperdiet sem commodo. Posuere lacus lacinia bibendum vel tristique gravida vehicula, proin mauris sed ante vehicula, cras facilisis sapien pharetra, faucibus suscipit porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pretium.",
          "Mattis.",
          "Gravida."
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "short description Lobortis lectus mauris e in blandit iaculis elit consequat mauris.",
      "long_description": "long description Ac id proin metus felis maecenas massa at mauris, i mauris massa dignissim lobortis. Tristique eu vel sodales ipsum. E e ipsum quisque, felis enim ipsum pharetra eti dignissim augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempus.",
          "Mi.",
          "Laoreet."
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "short description Arcu in lacinia lacinia nisi. Ut vel placerat nisi faucibus.",
      "long_description": "long description Est vehicula euismod euismod etiam rhoncus proin, et ligula maximus hendrerit. Scelerisque posuere natoque tristique tempus suscipit quis ornare. Rhoncus enim sagittis lobortis augue justo, placerat au pellentesque a lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Et.",
          "Adipiscing.",
          "Blandit."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Vehicula viverra ultricies ex bibendum, eti at ut diam erat.",
      "long_description": "long description Lorem tincidunt bibendum sapien dolor et sodales lacinia, nam sodales vitae justo rhoncus consectetur tortor sem posuere ultrices eu tempor, sodales lectus eros vitae nam vestibulum pulvinar quisque lorem iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Orci.",
          "Dolor.",
          "Arcu."
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "short description Accumsan tempor lacinia turpis placerat lacinia sapien scelerisque commodo fringilla.",
      "long_description": "long description Placerat dignissim est mollis cursus. Mattis id elementum maecenas id scelerisque sapien aliquet laoreet, nulla in neque massa metus sapien etiam e cursus ut eti ex, arcu turpis risus id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Commodo.",
          "At.",
          "Aenean."
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "short description Arcu orci mauris pretium mauris curabitur morbi dolor cursus blandit.",
      "long_description": "long description Ut ante mattis eget e pretium orci sed eu iaculis in. Mollis nulla lacus ac ultrices maximus vulputate laoreet cursus viverra etiam. Posuere proin cursus aliquet mi enim nam vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sapien.",
          "Facilisis.",
          "Nisl."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Eu viverra nulla maximus condimentum. Lacinia porttitor au ultricies sed.",
      "long_description": "long description Erat auctor amet lectus ex. Elit dictum quisque velit sagittis. Neque maecenas mattis non eu morbi posuere, eros justo aliquet eros ante a non. Vel blandit vel accumsan justo tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "Lacus.",
          "A."
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "short description I magna vulputate est at viverra non, commodo eros au.",
      "long_description": "long description Non purus maximus ex vel cras a est tristique, curabitur nisi laoreet ut dui. Proin posuere tincidunt facilisis fringilla risus. At at erat quis i. Dolor etiam dignissim iaculis est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pellentesque.",
          "Facilisis.",
          "Magna."
      ]
    },
    {
      "name": "Kancom",
      "short_description": "short description Ex adipiscing nulla maecenas vitae ex tristique diam sed pharetra.",
      "long_description": "long description Dui vitae eros quis massa commodo morbi fringilla, pharetra magna at adipiscing. Vitae bibendum pulvinar porttitor elementum, eti leo sed massa. Augue dignissim arcu tincidunt pellentesque quisque. Nam iaculis neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nunc.",
          "Massa.",
          "Enim."
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "short description Lobortis neque facilisis sollicitudin mi. Elit elementum a vehicula auctor.",
      "long_description": "long description Cras diam finibus viverra orci euismod. Ex dignissim viverra vulputate, bibendum aliquam ultricies tempus lacinia lorem et fringilla neque elit, risus magna iaculis felis. Risus erat ipsum mauris neque ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ipsum.",
          "Tincidunt.",
          "Purus."
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "short description Velit nisl elit euismod leo consectetur. Morbi mollis lobortis facilisis.",
      "long_description": "long description Id metus euismod mollis vitae. Blandit eti et elit enim. Curabitur facilisis euismod aliquet dui condimentum orci, lacinia iaculis mattis lectus dui, morbi nulla cursus pretium, faucibus i ultricies ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Augue.",
          "Ligula.",
          "Ornare."
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "short description Metus augue donec iaculis ac tristique mi elit mauris pretium.",
      "long_description": "long description Nunc tempus mollis pharetra elementum. Ornare leo tempor fringilla ut aliquam aenean sit placerat lacus nisl natoque. Donec elit dui nisl aenean elit porttitor eti. Tempor lacus est augue risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisl.",
          "Vestibulum.",
          "Facilisis."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description Gravida finibus pulvinar nibh ligula scelerisque. Lacinia augue metus e.",
      "long_description": "long description Augue ex pharetra posuere rhoncus elementum velit tempor eget. Turpis accumsan vulputate ex maximus tristique vestibulum. Diam nulla consequat dictum est diam elementum a sodales commodo. Viverra ex velit ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mauris.",
          "Orci.",
          "Cras."
      ]
    },
    {
      "name": "Templatek",
      "short_description": "short description Massa suscipit euismod lectus ac, mi enim aliquam sagittis maximus.",
      "long_description": "long description Felis id mi ac auctor. Metus vehicula ornare tristique hendrerit maecenas, sem arcu fringilla diam auctor dignissim dictum enim ante neque cursus, risus placerat risus viverra sapien ex ultricies elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "At.",
          "Diam.",
          "Vestibulum."
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "short description Sollicitudin sagittis consectetur lacinia ipsum pulvinar aenean nisi vehicula consectetur.",
      "long_description": "long description Pretium tempus nisi elementum auctor. Augue pharetra at sapien. Auctor cursus massa i ligula at condimentum dolor. Et curabitur au auctor est tempor ut. Sodales cras tortor sodales eu fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "E.",
          "Ligula.",
          "Nisl."
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "short description Non enim dignissim sed justo faucibus mi mollis lectus gravida.",
      "long_description": "long description Curabitur enim sem eros erat suscipit maecenas, bibendum nunc mauris sollicitudin, ipsum sem ut massa elementum. Nam sagittis lobortis aenean elementum. Sagittis dolor tincidunt tristique euismod blandit enim turpis ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ornare.",
          "Nam.",
          "Elementum."
      ]
    },
    {
      "name": "Conixco",
      "short_description": "short description Sodales tempor laoreet adipiscing at viverra nibh. Hendrerit imperdiet lacus.",
      "long_description": "long description Ex non amet aliquam ut sollicitudin, maximus hendrerit viverra fringilla orci maximus. Nisl ante a pharetra ac ut rhoncus vestibulum, nibh eget augue est mi orci maximus. Rhoncus fringilla ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Leo.",
          "Gravida.",
          "Tortor."
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "short description Tristique ex non pulvinar condimentum suscipit erat. Scelerisque sed rhoncus.",
      "long_description": "long description Est au augue nisi euismod, dolor id nam leo cras justo quis lacinia, posuere lacinia ultricies id enim, at dolor augue mi, tortor arcu aliquam eu. Lobortis diam suscipit eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Metus.",
          "Maecenas.",
          "Tortor."
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "short description Natoque vulputate blandit posuere laoreet, turpis sed donec lorem elit.",
      "long_description": "long description Leo lacinia sed purus justo quisque, nibh rhoncus curabitur viverra, arcu dolor viverra pellentesque. Enim nunc turpis erat. Elementum i tortor scelerisque velit. Viverra auctor nunc lobortis fringilla mi hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Id.",
          "Maximus.",
          "Euismod."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Ipsum lectus sit sodales eti leo natoque eros nam dolor.",
      "long_description": "long description Sit ante imperdiet erat pellentesque. Amet sit nibh eti maecenas aliquam. Risus imperdiet nisl bibendum. Metus non mauris et. Pulvinar cras cras auctor aenean non massa sapien vel leo in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vel.",
          "Rhoncus.",
          "Erat."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Dolor aliquet tristique mi ipsum finibus accumsan magna ultricies porttitor.",
      "long_description": "long description Lacus euismod ultricies a neque, cras iaculis purus ornare. Est nulla augue porttitor. Mollis sed etiam non tincidunt massa sollicitudin hendrerit elit pulvinar lorem accumsan, e morbi nunc eu quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eu.",
          "Dictum.",
          "Dolor."
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "short description Vestibulum turpis vehicula orci id lorem, etiam rhoncus vulputate ligula.",
      "long_description": "long description Euismod ante vel adipiscing tempus consequat quis etiam id dignissim a e morbi, tristique ut maximus velit cras. Auctor bibendum laoreet a non. Viverra ipsum rhoncus tristique, lorem in ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Sodales.",
          "Ac."
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "short description Gravida lorem cras adipiscing i est lobortis maximus sodales placerat.",
      "long_description": "long description Vestibulum consectetur consequat eget nulla, a leo orci in at proin sapien ultrices ipsum in sit, cras vulputate tempor consequat, bibendum pharetra aenean ornare risus natoque. Enim dictum ornare ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eget.",
          "Quisque.",
          "Placerat."
      ]
    },
    {
      "name": "Celmax",
      "short_description": "short description Quisque velit i hendrerit metus, elit morbi proin vel justo.",
      "long_description": "long description Est lacus nulla ut risus leo condimentum. Vitae leo vel vestibulum euismod imperdiet etiam posuere pellentesque. Tincidunt turpis enim natoque. Pharetra id pellentesque tempus elit. Elementum augue erat neque nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Adipiscing.",
          "Aenean."
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "short description Nam aenean porttitor vel sem iaculis amet curabitur auctor massa.",
      "long_description": "long description Magna ut fringilla et ultricies ultrices, vel sapien lorem ut enim pretium orci morbi tincidunt dignissim fringilla, nulla lacus cursus nibh adipiscing gravida. Imperdiet quis lacinia id. Pellentesque quisque in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Diam.",
          "Tempor.",
          "Accumsan."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Sed risus et sed morbi sit turpis ultricies leo facilisis.",
      "long_description": "long description Cras quisque amet cras quisque. Mattis curabitur sit mollis nisi lorem cursus. Massa auctor vestibulum sem lacus. Gravida fringilla vehicula sagittis. Lobortis lacinia sapien ligula. Felis leo ultricies sed vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pretium.",
          "Nam.",
          "Tempor."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description Fringilla felis consequat ante nisl. Nisi velit ultrices maecenas elementum.",
      "long_description": "long description Posuere dictum lacinia velit elit vulputate, au neque porttitor arcu. Nunc tincidunt lacus elementum proin viverra a et dignissim, magna pellentesque ipsum ex. Facilisis laoreet diam eget. Arcu dignissim adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pretium.",
          "Velit.",
          "Augue."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Nam consectetur purus ut adipiscing commodo. Ultricies mi consequat tristique.",
      "long_description": "long description Vitae at felis enim elementum, tincidunt tincidunt i lacinia. Donec tempus ultrices lobortis viverra consectetur orci. Velit purus lorem sapien. Placerat mauris cursus diam ac leo. Ligula pellentesque tincidunt turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dictum.",
          "Lacinia.",
          "In."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Tristique maecenas ex magna sed. Ante neque ante ex felis.",
      "long_description": "long description Massa quisque dignissim purus fringilla a au, viverra mattis maximus eros est e dictum vestibulum est nunc cras. Dolor erat nunc tempus amet massa. Ornare quis scelerisque pretium condimentum mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Vitae.",
          "Arcu."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description Imperdiet sit risus id maecenas. Dictum vitae e quisque ac.",
      "long_description": "long description Dignissim adipiscing purus maximus aliquet orci, ultricies ac consectetur est eu facilisis eti. Morbi tincidunt ornare sapien ultrices, augue ac ligula augue. Lorem lectus sed aliquam. Sollicitudin sapien nunc proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Posuere.",
          "Fringilla.",
          "Tempor."
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "short description Hendrerit au augue tristique tortor dignissim cursus vel lacinia aenean.",
      "long_description": "long description Accumsan ultrices laoreet arcu eros auctor lobortis natoque. Massa ornare au quis, erat proin cursus gravida, ipsum mollis pretium bibendum. Enim vestibulum dui consequat eu natoque, dolor pulvinar elit nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mattis.",
          "Sem.",
          "Posuere."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description Lorem ultrices blandit ultrices ante. Posuere sollicitudin in purus sem.",
      "long_description": "long description Nulla donec adipiscing posuere felis ac ac magna est lacinia faucibus au dui. Lorem morbi lorem viverra suscipit dolor enim sit lobortis. Eget fringilla ligula nisl facilisis mollis ligula quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Justo.",
          "Lacinia.",
          "Adipiscing."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Viverra bibendum finibus eget metus. Et pretium risus pulvinar euismod.",
      "long_description": "long description Mattis nam laoreet hendrerit neque dignissim sed, porttitor at elit at. Lacinia sollicitudin tristique diam. Lorem maximus pulvinar id eu. I cras facilisis amet maecenas vulputate consequat dignissim ante suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Massa.",
          "Fringilla.",
          "Dictum."
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "short description Ut e etiam tempus id aenean pretium. Hendrerit proin metus.",
      "long_description": "long description Ligula vehicula eu suscipit pellentesque, eget vulputate iaculis imperdiet nisi dui. Neque viverra lacus vehicula mi consequat sapien orci facilisis amet, ante scelerisque tempor pharetra purus facilisis, a sapien ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mi.",
          "Cursus.",
          "Nibh."
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "short description Sagittis dui tortor et tristique maximus cursus non faucibus vehicula.",
      "long_description": "long description Turpis maximus porttitor lacus ipsum metus enim, eu eti faucibus aliquet placerat ex in lacus. Augue lorem etiam ac, erat nam sodales risus nibh sit consequat eget risus curabitur sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "Quisque.",
          "Tempus."
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "short description Eros dui scelerisque placerat augue. Mauris adipiscing maecenas dui felis.",
      "long_description": "long description Dui accumsan nisl ligula finibus accumsan maximus felis. Purus a tincidunt elit, i rhoncus porttitor mauris tempor pellentesque consequat. Dui sagittis nisl quis i. Au leo leo nisl pulvinar proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vitae.",
          "Donec.",
          "Natoque."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Blandit eros sagittis lacinia au sapien e enim ornare elit.",
      "long_description": "long description Tortor ac imperdiet e arcu. Metus eti vitae ornare ut in, gravida gravida aenean lectus pellentesque etiam non. In nulla pharetra dictum lacus vehicula leo purus pulvinar tortor vitae diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Gravida.",
          "In.",
          "Nisl."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Sodales magna maecenas ac ante. Est proin nam sodales tristique.",
      "long_description": "long description Non sed mi eget cursus rhoncus massa orci sem gravida nunc donec, lectus mauris euismod turpis non, vestibulum pharetra lacinia placerat adipiscing, metus vel lectus adipiscing iaculis, auctor enim id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultrices.",
          "Suscipit.",
          "Vehicula."
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "short description Porttitor amet non dolor ornare. Cras pharetra quisque i scelerisque.",
      "long_description": "long description Dignissim dui finibus eros curabitur. Etiam eti nulla sodales. Ante condimentum faucibus mi. Aliquet dignissim sed amet donec ultricies. Enim pharetra dolor elementum. Ligula vulputate elit vel, consectetur dui e.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Etiam.",
          "Condimentum.",
          "Risus."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Etiam leo augue posuere at, lacinia nisl turpis tempus maximus.",
      "long_description": "long description Morbi hendrerit eget turpis curabitur a, maximus placerat amet sollicitudin sollicitudin metus ipsum felis sem ut, leo commodo sem faucibus lacinia. Tempus placerat natoque rhoncus eros accumsan. Cursus pulvinar condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Laoreet.",
          "Pharetra.",
          "Nisi."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Sit enim tempor turpis ultrices porttitor condimentum e lacus lacinia.",
      "long_description": "long description Neque dictum imperdiet mauris aenean nam facilisis, nisi suscipit amet adipiscing ex sed. Nam sed felis cursus sollicitudin risus adipiscing ac non turpis morbi etiam. Posuere leo consectetur ac tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ipsum.",
          "Consectetur.",
          "Finibus."
      ]
    },
    {
      "name": "Templatek",
      "short_description": "short description Ultrices nulla accumsan dolor eros. Velit dui sit e mauris.",
      "long_description": "long description Arcu morbi massa sem facilisis iaculis eu pulvinar dui. Mauris vel fringilla vestibulum. Est in scelerisque nam orci hendrerit au maecenas quisque eget, erat arcu nibh massa. Sapien quisque massa.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maecenas.",
          "Orci.",
          "Sodales."
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "short description Gravida tincidunt ultrices condimentum vulputate tempor hendrerit arcu nam leo.",
      "long_description": "long description Iaculis nibh tincidunt nunc aenean placerat enim ligula, mi ac lectus at. Leo iaculis pulvinar iaculis. Orci aenean imperdiet i nulla cras e porttitor augue, sed faucibus sem bibendum elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Porttitor.",
          "Sodales."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description Mollis ultrices lectus tristique purus. Rhoncus euismod rhoncus neque et.",
      "long_description": "long description Curabitur aliquam eros faucibus aenean morbi. Enim massa proin nam eros condimentum mollis. Maecenas tempus proin lacinia maecenas. Dolor placerat cras morbi, consectetur iaculis sollicitudin ipsum tempor imperdiet diam vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eu.",
          "Pulvinar.",
          "Pretium."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Pellentesque pharetra turpis in arcu. Eget ornare sit amet blandit.",
      "long_description": "long description Massa eu dui porttitor eu tempor hendrerit sit leo blandit finibus, est tristique viverra imperdiet a mauris, ex metus in eros blandit, nisi viverra nulla vestibulum tincidunt massa tristique nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Finibus.",
          "Lectus.",
          "Ornare."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Vitae donec pulvinar eros neque, donec magna lorem eu aliquet.",
      "long_description": "long description Arcu fringilla mauris vel aliquam neque, commodo consectetur vel iaculis vitae sagittis. Pretium et nibh ut lacinia ante. Dui neque dui in. Neque condimentum nunc pretium tempus eu tempor nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Massa.",
          "Pellentesque.",
          "Vel."
      ]
    },
    {
      "name": "Conixco",
      "short_description": "short description Auctor condimentum lorem iaculis dictum imperdiet. Tempor suscipit bibendum mattis.",
      "long_description": "long description Auctor sit curabitur nisi sollicitudin donec. Mattis etiam eu euismod vel quisque, dignissim porttitor amet dignissim augue at viverra ornare scelerisque commodo nam. Commodo sapien faucibus fringilla euismod elementum ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Vel.",
          "Dolor."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description Facilisis amet aenean scelerisque nunc non tristique purus cras consequat.",
      "long_description": "long description Fringilla tincidunt justo dictum dui nisl. Iaculis risus diam curabitur, cras tortor pharetra proin enim. Ligula facilisis purus ante, curabitur cras metus e, tristique tempor imperdiet gravida vulputate scelerisque laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Et.",
          "Pellentesque.",
          "Ornare."
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "short description Dignissim lacinia mi sapien ut, sem hendrerit pellentesque non bibendum.",
      "long_description": "long description Ornare diam eu e rhoncus vestibulum enim curabitur dictum auctor sollicitudin diam vel e metus aliquam lorem i. Gravida mauris nam vitae, curabitur tristique turpis sollicitudin tortor elit i ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aliquam.",
          "Ac.",
          "Magna."
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "short description Au eu aliquet rhoncus sollicitudin facilisis fringilla. Etiam nibh ultrices.",
      "long_description": "long description Arcu sed e maecenas metus, tempus hendrerit ornare velit nisi. Curabitur maecenas facilisis pulvinar iaculis. Id fringilla natoque pulvinar sed, mi mattis cursus id lacinia, vitae pellentesque amet eros consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maecenas.",
          "Metus.",
          "Pharetra."
      ]
    },
    {
      "name": "Pancast",
      "short_description": "short description Placerat laoreet vitae id est proin. Laoreet finibus vel euismod.",
      "long_description": "long description Mauris non lacinia pretium vel blandit leo. Euismod non neque purus, vitae auctor tortor nisl risus nam velit a. Adipiscing lacinia neque rhoncus, natoque ornare tincidunt pharetra. Tempor fringilla massa.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Condimentum.",
          "Leo.",
          "Elit."
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "short description Aliquet elit mauris finibus arcu. Ornare velit a purus amet.",
      "long_description": "long description Arcu ante i bibendum lobortis sed velit dignissim, turpis ligula elit aliquet sagittis. Mollis rhoncus sem curabitur nibh ante bibendum, eget proin non ex, felis massa in vel metus curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Proin.",
          "Condimentum.",
          "Velit."
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "short description Turpis aliquam amet purus ex auctor. Vitae sodales felis maecenas.",
      "long_description": "long description Dui tempus natoque sodales dictum ornare quis vestibulum i. Vitae auctor lobortis mattis i dignissim sed. Neque e elit vitae ex tempor lectus aenean sed ex velit vehicula iaculis dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ornare.",
          "Iaculis.",
          "Accumsan."
      ]
    },
    {
      "name": "WestGate",
      "short_description": "short description Scelerisque pulvinar suscipit vel porttitor sapien natoque sed placerat natoque.",
      "long_description": "long description Tincidunt est blandit dignissim faucibus. Lectus augue tempor lobortis mi lobortis natoque au mattis bibendum consequat euismod mauris nibh commodo nam, magna mollis metus id at purus mattis sapien eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nunc.",
          "Donec.",
          "Nisl."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Sit sollicitudin faucibus at aenean quisque, i nulla natoque au.",
      "long_description": "long description Vulputate lobortis euismod est sem. Quisque nibh tristique rhoncus lorem. Maecenas orci leo tempus enim risus dignissim adipiscing, scelerisque sollicitudin orci maecenas vulputate lobortis pulvinar mauris, natoque maximus rhoncus a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Nibh.",
          "Dolor."
      ]
    },
    {
      "name": "Sealine",
      "short_description": "short description Bibendum vulputate ligula ultricies faucibus augue et justo sapien adipiscing.",
      "long_description": "long description Sit ante faucibus accumsan mollis consectetur nisl, purus eros mollis e au lorem. Dolor laoreet lorem orci vestibulum maecenas ut. Accumsan blandit lacinia erat bibendum diam tempor. Sapien euismod purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ligula.",
          "Vestibulum.",
          "Lorem."
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "short description Eti maximus mattis et vel, amet ligula mollis rhoncus ante.",
      "long_description": "long description Scelerisque placerat vehicula i erat eget erat dui dignissim maecenas. Etiam massa accumsan fringilla. Felis amet laoreet massa, dui vel sollicitudin nam risus lobortis. Arcu ante est aliquam velit erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Curabitur.",
          "Ac.",
          "Ipsum."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description At suscipit mi lobortis gravida justo, lobortis commodo finibus aliquam.",
      "long_description": "long description Non tortor natoque a tristique. Nunc ligula consequat commodo non imperdiet bibendum. Augue id maecenas fringilla, ipsum ligula pretium ipsum lobortis pellentesque iaculis cursus quis leo ligula. Eget auctor tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mauris.",
          "Sagittis.",
          "E."
      ]
    },
    {
      "name": "Polycore",
      "short_description": "short description Finibus ligula lectus eros bibendum. Mattis orci lectus bibendum maecenas.",
      "long_description": "long description Dolor sagittis elementum velit ante. Amet sodales sagittis aliquet eu suscipit laoreet, sapien justo curabitur adipiscing, mauris sit nisi velit nisl elit vitae diam. Lacus morbi nunc ex tristique faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vulputate.",
          "In.",
          "Eu."
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "short description Accumsan metus fringilla sem in, est faucibus purus ante sem.",
      "long_description": "long description Nibh sed ultrices aliquet cursus. Fringilla morbi lobortis nisi metus, leo iaculis eti tincidunt, posuere ut turpis lectus purus, tempor pulvinar elit eti id justo tristique, curabitur bibendum donec donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Suscipit.",
          "Massa.",
          "Porttitor."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Mattis aliquet mollis finibus aliquam lacinia accumsan nibh posuere e.",
      "long_description": "long description Tempus hendrerit non placerat sed tempor. Elit pharetra velit dui. Accumsan i tincidunt diam. Natoque in augue aliquet tristique ac tempus. Lacinia ultrices hendrerit nibh. Natoque hendrerit nisi neque in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Id.",
          "Ornare.",
          "Justo."
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "short description Leo viverra gravida non lacinia. Lobortis condimentum imperdiet hendrerit at.",
      "long_description": "long description Adipiscing elementum euismod dolor lectus tempor purus sagittis nunc. Auctor mauris nisi vulputate, maecenas nunc morbi ultricies ligula, faucibus massa justo vel commodo vestibulum magna, lorem sagittis ultricies etiam rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "In.",
          "Accumsan."
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "short description Morbi finibus maximus at blandit, quis mauris e donec sodales.",
      "long_description": "long description Purus leo sem eros lobortis enim. Ex lacus rhoncus rhoncus lectus ex est id aliquam. Gravida auctor vehicula au elementum hendrerit cursus. Tristique tempus eros natoque augue. Maximus eros mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Augue.",
          "Arcu.",
          "Iaculis."
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "short description Etiam commodo ipsum neque ipsum eros. Facilisis tristique lacus velit.",
      "long_description": "long description Ultricies lacinia accumsan rhoncus scelerisque mollis lacinia donec nulla placerat. Etiam pharetra elit consectetur eu. Nam maecenas finibus eu ut ex nunc, lectus aliquet lacinia dui, aliquet maximus ornare etiam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisl.",
          "Vel.",
          "Enim."
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "short description Non sodales ipsum mauris erat diam dolor. Purus e scelerisque.",
      "long_description": "long description Turpis ac natoque ex lectus. Dolor enim cursus sed morbi etiam finibus natoque enim. Orci morbi pellentesque aliquet. Arcu a scelerisque ipsum tincidunt vestibulum facilisis blandit. Mauris facilisis vitae vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Arcu.",
          "Dignissim."
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "short description Sit dolor neque tortor arcu placerat tortor sit purus nulla.",
      "long_description": "long description Elit diam in sed pulvinar, felis ac imperdiet nisl maximus eti quis, proin commodo at elementum i non erat, tempor viverra iaculis rhoncus eros, cursus tristique ex vulputate erat vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Mi.",
          "Sit."
      ]
    },
    {
      "name": "Opticast",
      "short_description": "short description A non non id tempus, donec pellentesque ac condimentum elementum.",
      "long_description": "long description Quisque rhoncus metus eu in quisque vitae, a elementum posuere tincidunt condimentum, nisi i nisl massa elementum pretium posuere i. Arcu aliquam felis au. Au ipsum vulputate lacinia proin non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Arcu.",
          "Orci."
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "short description Purus tristique magna enim lectus hendrerit lobortis nunc vehicula lectus.",
      "long_description": "long description Mi eros ipsum a ultrices ligula. Neque lorem dignissim vestibulum morbi scelerisque. At ex sapien finibus, cursus mi leo blandit aliquam dignissim tristique. Lacinia eu vehicula scelerisque fringilla cursus porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ex.",
          "In.",
          "E."
      ]
    },
    {
      "name": "Kancom",
      "short_description": "short description Elementum eget rhoncus sollicitudin scelerisque. Lectus hendrerit blandit mi proin.",
      "long_description": "long description Id etiam facilisis ante consequat erat donec sit, suscipit ex risus au quis magna neque cursus laoreet. Non fringilla au i dignissim vitae condimentum quisque. Eti dui vulputate gravida vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dignissim.",
          "Eget.",
          "A."
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "short description Placerat tortor ultricies eu etiam ipsum. Magna ultricies donec posuere.",
      "long_description": "long description Vel metus ac posuere et vestibulum porttitor mattis est. Erat iaculis dignissim lobortis. Est finibus au i in pretium. Posuere mauris erat mattis in massa, sit pulvinar nibh elementum turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Erat.",
          "Velit.",
          "Consequat."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Euismod sapien dui pellentesque cursus. Nisl aliquam accumsan condimentum et.",
      "long_description": "long description Lacinia natoque elementum ultricies vulputate sagittis. Risus lacinia orci sodales, laoreet vulputate quisque maximus ornare, sit massa pellentesque quisque non aliquet risus i mauris bibendum lorem dignissim ultricies sagittis tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacus.",
          "Etiam.",
          "Morbi."
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "short description Amet felis donec tempor sapien, in auctor neque ligula lorem.",
      "long_description": "long description Justo lobortis lacinia dui au, dictum mi sit rhoncus ligula fringilla au lorem imperdiet, vitae orci diam iaculis auctor, tincidunt nisl cras arcu erat. Hendrerit id aenean ultricies lectus lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dolor.",
          "Risus.",
          "Est."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Blandit suscipit rhoncus vestibulum suscipit sollicitudin metus rhoncus vehicula pellentesque.",
      "long_description": "long description Placerat eu mollis erat turpis. Eget fringilla sem vel ex risus tempus, lacus nisi nibh risus, natoque tristique vitae quisque, curabitur nulla arcu nisl a cras condimentum iaculis lobortis vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lectus.",
          "E.",
          "Sit."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Tortor consequat nibh diam nunc massa eget eget lacinia aenean.",
      "long_description": "long description Placerat vel iaculis augue diam. Scelerisque lacinia ipsum fringilla justo metus i eti, maecenas massa morbi arcu, posuere magna ultrices massa. Enim ante vel etiam, enim posuere imperdiet leo viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "In.",
          "Ante."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Maximus nam facilisis lorem orci. Condimentum augue at suscipit sapien.",
      "long_description": "long description Scelerisque condimentum lectus cras pulvinar nibh. Vitae euismod id au eti imperdiet e sodales. Sapien quis viverra bibendum diam. Eu maximus accumsan mattis, nunc mattis velit tristique velit cras nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sapien.",
          "Purus.",
          "Tortor."
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "short description Morbi risus hendrerit aliquet facilisis nisi. Elementum commodo non commodo.",
      "long_description": "long description Auctor sem lacus ut lectus orci dignissim vestibulum. Magna elementum dui vitae e. Ut ut amet scelerisque. Aliquam sollicitudin tempus mi consectetur proin dictum metus natoque cursus ut laoreet mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vitae.",
          "Blandit.",
          "Natoque."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description Tincidunt posuere scelerisque vulputate maecenas orci magna. Maecenas condimentum nisi.",
      "long_description": "long description Ornare sollicitudin auctor scelerisque magna vel eget finibus arcu mauris fringilla quis. At felis eros adipiscing, nisl rhoncus iaculis vehicula, leo suscipit justo facilisis ornare ante porttitor ac faucibus ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "A.",
          "Aenean.",
          "Ac."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description Quis suscipit porttitor nisl euismod magna vitae turpis pharetra amet.",
      "long_description": "long description Elit cras mollis proin eu vulputate tempor faucibus amet. Diam metus erat nisl, at est tempus elit etiam. Imperdiet ultrices aliquam vulputate vel velit vehicula. Nulla nunc maecenas cursus diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dolor.",
          "Ornare.",
          "Facilisis."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Donec ut tortor erat tortor sollicitudin. Laoreet nam sit tempor.",
      "long_description": "long description Velit cursus fringilla natoque dictum fringilla est au velit placerat dolor natoque a sollicitudin mi amet quisque sagittis bibendum. Nunc quisque orci amet magna, arcu amet au morbi tempus sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Arcu.",
          "Elementum.",
          "Fringilla."
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "short description In non pretium massa laoreet pharetra quisque iaculis mollis i.",
      "long_description": "long description Tempus mattis lobortis vel fringilla etiam nibh. Lacus ornare leo etiam sem nibh. Dignissim tristique est sapien ipsum vestibulum mollis proin felis metus felis justo condimentum natoque blandit aenean au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Scelerisque.",
          "Rhoncus."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Proin enim aliquet non ante. Tortor mollis at lorem mi.",
      "long_description": "long description Cras eget lacinia nisl iaculis. In bibendum augue ligula aenean pharetra laoreet. Lacinia sollicitudin dictum vulputate. Mi magna enim quisque amet ultrices. Dignissim eu faucibus non vehicula. Iaculis cras vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Auctor.",
          "Vulputate."
      ]
    },
    {
      "name": "Sealine",
      "short_description": "short description Magna nibh in quis adipiscing nunc e ligula pharetra ac.",
      "long_description": "long description Porttitor mi purus proin tempor lacinia vestibulum tristique. Facilisis neque natoque dignissim purus lectus. Lectus ac arcu quisque risus sollicitudin velit, massa auctor rhoncus vulputate sed, suscipit risus diam fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Id.",
          "Sollicitudin.",
          "I."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Lorem diam cras id dignissim. Nunc lobortis sem nisi elementum.",
      "long_description": "long description Vulputate sodales nulla facilisis quis. Fringilla consequat at sit pulvinar. Iaculis lacinia cursus eti consectetur tempor dolor viverra dictum vulputate, dui neque rhoncus ipsum bibendum, ligula elementum pretium ornare maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Quis.",
          "Eu.",
          "Proin."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description At finibus tincidunt dolor eti eti dictum ligula viverra etiam.",
      "long_description": "long description Ultricies laoreet sodales blandit ac. Velit sapien maximus lacinia adipiscing. Tristique nam bibendum justo aliquam eget erat pharetra, euismod faucibus proin eu proin enim maximus cras, augue elementum hendrerit eu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sapien.",
          "Dui.",
          "Aliquet."
      ]
    },
    {
      "name": "Polycore",
      "short_description": "short description Ipsum pellentesque velit enim porttitor aliquam tempor ultricies vehicula aliquet.",
      "long_description": "long description Tempor ipsum eti turpis maecenas sapien. Bibendum ligula auctor hendrerit ornare adipiscing proin. Proin felis bibendum curabitur mauris mattis erat, bibendum suscipit sapien i vel, commodo quis viverra diam orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cras.",
          "Eros.",
          "Maecenas."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description Diam suscipit i amet aliquam purus in au magna justo.",
      "long_description": "long description Aenean imperdiet facilisis vehicula risus sed vitae. Lobortis imperdiet imperdiet sagittis laoreet, curabitur diam finibus maecenas etiam vestibulum etiam. Non rhoncus at nibh posuere ligula id, risus viverra est id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Ut.",
          "Hendrerit."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Nam vel condimentum vestibulum sem maecenas, tristique tortor eti accumsan.",
      "long_description": "long description At dictum velit risus adipiscing suscipit. Nunc laoreet nam tempor lectus mi ut. Neque mattis tempor diam id aenean eros. Vulputate at pulvinar mattis eu. Et sed sapien au consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Auctor.",
          "Nibh.",
          "At."
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "short description Elit gravida euismod sodales mattis posuere leo. Pellentesque maximus ante.",
      "long_description": "long description E nisi eget natoque laoreet vitae dictum, orci a ornare elementum tempus, aenean porttitor consequat vestibulum, in suscipit e sem natoque natoque nam lorem, nunc blandit sit justo aliquam lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Scelerisque.",
          "Massa.",
          "Nisi."
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "short description Aliquam vehicula ut suscipit faucibus in est augue elementum mollis.",
      "long_description": "long description Laoreet diam ante ut donec. Lobortis maecenas orci facilisis ornare mauris curabitur aenean, lacinia vitae nam adipiscing, purus consectetur id au in. Dignissim laoreet finibus a hendrerit ut ultricies sit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ac.",
          "Enim.",
          "Commodo."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description Consectetur ornare etiam diam blandit augue non sollicitudin laoreet tempor.",
      "long_description": "long description Tincidunt non felis sollicitudin adipiscing nam quisque. Ligula cursus facilisis i, nulla tortor adipiscing placerat etiam. Posuere felis sed lectus. Suscipit elementum mattis arcu lectus. Mattis aliquam curabitur sagittis sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Massa.",
          "Nisi."
      ]
    },
    {
      "name": "Storex",
      "short_description": "short description Cursus aliquet enim quis augue dui pulvinar tincidunt vitae diam.",
      "long_description": "long description Finibus iaculis ornare metus aliquet. Accumsan lorem dui sit curabitur. Proin eget leo vitae fringilla proin erat, faucibus vehicula eget ante i e mi lorem finibus nisi. Dictum magna faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "E.",
          "Elit.",
          "Nibh."
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "short description Etiam nisi sodales hendrerit leo. Ornare elit dui i tincidunt.",
      "long_description": "long description Nulla id erat orci maecenas auctor risus imperdiet nisi in non, quis sapien mauris commodo aenean cras imperdiet elit augue purus at donec, morbi pellentesque dignissim amet, tempor iaculis lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Maecenas.",
          "Turpis."
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "short description Morbi lacinia iaculis sodales leo, euismod curabitur mollis elementum quisque.",
      "long_description": "long description Suscipit amet etiam imperdiet pellentesque ultricies rhoncus ex aenean mollis. Est magna sagittis lacinia risus. Porttitor tempus auctor vulputate vulputate. Eti etiam tristique pharetra sed curabitur. Mi porttitor ornare vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Quis.",
          "Suscipit.",
          "Commodo."
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "short description Porttitor rhoncus euismod orci elit vel. Id rhoncus maecenas sem.",
      "long_description": "long description Nam aenean mattis eti justo pulvinar massa pharetra, arcu consectetur fringilla tempus massa accumsan ante sed posuere donec vulputate pretium cras mattis sapien. Eget nulla lacinia mollis non a pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Viverra.",
          "Aliquet.",
          "Etiam."
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "short description Nulla elit etiam viverra commodo ultricies nam porttitor ornare morbi.",
      "long_description": "long description Ligula ipsum eros vestibulum etiam elit, dolor tempus in proin vulputate dictum eros. Laoreet augue augue finibus a, sapien nunc consequat metus. Nunc lectus facilisis ultricies dolor. Lacinia fringilla consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Auctor.",
          "Velit.",
          "Sollicitudin."
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "short description Dolor vulputate amet sapien sapien vel sollicitudin elementum posuere auctor.",
      "long_description": "long description Cras lobortis accumsan ultricies fringilla ultrices pulvinar iaculis velit. Donec vestibulum nisl sollicitudin lacus. Bibendum natoque eu faucibus. Eros sit tempus sollicitudin gravida. Lectus dolor au arcu. Euismod morbi nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Diam.",
          "Au.",
          "Euismod."
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "short description Massa dolor eu sed elit, dolor sollicitudin rhoncus eros quisque.",
      "long_description": "long description Dolor justo eu turpis nisl, felis dui donec elit, pharetra dictum morbi donec, tincidunt amet nam aliquet tempus ut mollis in metus amet mollis pulvinar ante, tincidunt ultrices tortor au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mi.",
          "At.",
          "Maecenas."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description Purus facilisis quisque porttitor magna pulvinar ut ut lacus sed.",
      "long_description": "long description Pharetra pellentesque cras facilisis lacinia. Maximus placerat rhoncus elementum nisi, eros aliquet sed ex lectus mauris. Erat risus sapien purus. Posuere mi massa scelerisque, justo dictum ornare hendrerit orci velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Id.",
          "Vestibulum.",
          "Natoque."
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "short description Dignissim posuere sem sit eros. Lectus neque mi mollis lacus.",
      "long_description": "long description I ex nibh auctor dictum. Nulla pellentesque euismod maximus lorem etiam vulputate adipiscing elit turpis. Aliquam tempor mollis finibus sed. Gravida sodales aenean erat tempor lectus, neque risus e velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Enim.",
          "Vitae.",
          "Elementum."
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "short description I vel commodo erat lacinia finibus. Ante pretium erat mattis.",
      "long_description": "long description Ut suscipit eget pretium felis natoque vulputate lobortis massa. Suscipit lorem aliquam blandit a. Eros mauris leo condimentum sodales e facilisis aenean etiam. Est ultrices lobortis suscipit sollicitudin au consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Nunc.",
          "Mollis."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description Sapien aliquam nulla sollicitudin lorem iaculis nisi. Vehicula elementum est.",
      "long_description": "long description Mauris nisi felis vel e ligula consequat. Curabitur pellentesque quisque maecenas. Arcu posuere non ut massa mollis turpis suscipit viverra. Nisi natoque velit neque. A pretium vulputate porttitor mauris at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tincidunt.",
          "Erat.",
          "Au."
      ]
    },
    {
      "name": "Nitrocam",
      "short_description": "short description Leo a lorem tempus imperdiet. Turpis orci tincidunt a tincidunt.",
      "long_description": "long description Vestibulum tempus condimentum iaculis rhoncus, suscipit porttitor eget vehicula at, auctor nunc faucibus aliquam. Metus pulvinar vel ultrices et. Sit morbi tempor ultrices lacus, consectetur aliquet lobortis quis auctor natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Scelerisque.",
          "Placerat.",
          "Arcu."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Auctor euismod risus curabitur tempus lacinia morbi. I sem curabitur.",
      "long_description": "long description Dolor tristique maximus proin consequat risus. Sed non et id. Accumsan orci nisl nisi. Pulvinar cursus vestibulum sapien nulla. Dictum nibh facilisis mi eti lacinia maximus id sodales aliquet ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aenean.",
          "Ornare.",
          "Gravida."
      ]
    },
    {
      "name": "Britech",
      "short_description": "short description Maximus mi etiam enim tristique consectetur. Rhoncus gravida donec pellentesque.",
      "long_description": "long description Quisque sollicitudin commodo sodales posuere nulla ex nisl. Eros posuere sapien iaculis curabitur nisi lobortis natoque tortor. Vulputate tristique cras hendrerit gravida scelerisque, non lacus condimentum pulvinar maecenas dictum ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Orci.",
          "Lacus.",
          "Condimentum."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description Etiam facilisis maecenas consequat adipiscing vestibulum lectus pretium justo sollicitudin.",
      "long_description": "long description Fringilla lectus mi ornare lorem. Est lectus lacinia vel ornare massa, tristique lectus curabitur eros euismod mi, ornare mollis nam cursus magna. Dolor pharetra tristique dignissim ex augue aliquam eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Non.",
          "Quis.",
          "Porttitor."
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "short description Sagittis mi sem risus placerat, risus lacus aliquam sagittis diam.",
      "long_description": "long description Turpis ligula aliquam bibendum aliquet morbi elementum suscipit quisque velit est. Pulvinar nibh donec au. Diam placerat nibh facilisis. Etiam au proin leo. Non lectus finibus tempus posuere donec viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Finibus.",
          "Maecenas.",
          "Vestibulum."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Commodo i aliquam velit placerat dignissim at, facilisis sodales est.",
      "long_description": "long description Metus aenean mattis elementum ornare aliquam sapien ligula. Mauris lobortis erat aliquet, commodo lacus i facilisis elementum dui laoreet risus accumsan vel. Lacus facilisis hendrerit e. Dolor arcu au pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Erat.",
          "Mi.",
          "Accumsan."
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "short description A magna leo sagittis maecenas. I aliquet at vulputate dictum.",
      "long_description": "long description Tempus vel felis ultricies au placerat tortor quisque neque, amet tempus sit maecenas ex blandit enim adipiscing i turpis, laoreet proin ligula elit curabitur proin eti pellentesque dictum diam nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pellentesque.",
          "Orci.",
          "Imperdiet."
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "short description Ut lorem vulputate vestibulum iaculis mauris tempor eti lorem orci.",
      "long_description": "long description Dictum pellentesque adipiscing consequat mollis eu donec orci mauris. Arcu at lacus aenean. Mi vulputate porttitor mollis bibendum adipiscing sem, accumsan morbi facilisis placerat neque mattis orci, blandit imperdiet amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Risus.",
          "Lobortis.",
          "Iaculis."
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "short description Sodales magna viverra ligula magna magna purus dignissim ultrices e.",
      "long_description": "long description Sed dictum placerat e facilisis tortor au, lectus morbi lacus maximus orci ac massa, quis auctor viverra eget elementum pulvinar elementum placerat i leo. Suscipit curabitur pharetra pellentesque ligula i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Morbi.",
          "Vulputate.",
          "Dui."
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "short description Consequat diam nam orci turpis et at pretium elit tempus.",
      "long_description": "long description Aenean dictum dictum enim sem auctor leo e a, sapien ornare quis ultrices arcu lobortis, i finibus suscipit in, e sodales morbi elementum vehicula nibh scelerisque, ligula felis massa purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maecenas.",
          "Velit.",
          "Maximus."
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "short description Cras natoque ornare risus risus morbi, pulvinar vitae donec commodo.",
      "long_description": "long description Tempor ante maecenas i mattis lectus. Eu mollis massa hendrerit posuere iaculis porttitor, nisl aliquam eros lacinia tincidunt. Quisque sed sodales nisl hendrerit sit finibus metus. Ante pulvinar enim vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cras.",
          "Viverra.",
          "Dui."
      ]
    },
    {
      "name": "Galcom",
      "short_description": "short description Neque est pulvinar cursus tempus, sollicitudin vel donec pretium mauris.",
      "long_description": "long description Nunc turpis tempor vehicula sem vulputate. Sagittis id tempor adipiscing tincidunt. Vulputate et vehicula ante eu justo. Leo adipiscing vel leo. Ac ipsum fringilla ac, nisi nisi vulputate consectetur risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Curabitur.",
          "Metus.",
          "Pharetra."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Orci justo dignissim vehicula est. Sagittis tortor au pharetra sapien.",
      "long_description": "long description Auctor nulla ornare imperdiet mattis enim facilisis sodales sollicitudin erat nisl gravida, sodales arcu vitae eros tristique sed sed et nunc, mollis ipsum metus ultricies. Et accumsan aenean lacus au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vel.",
          "Nam.",
          "Gravida."
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "short description Morbi vestibulum erat suscipit aliquet nulla adipiscing, tristique viverra mi.",
      "long_description": "long description Tempor posuere mattis vulputate gravida. A sed dui diam mattis mi. Blandit condimentum ipsum leo. Enim enim laoreet rhoncus. Tempor fringilla lacinia sapien facilisis. Ac donec facilisis nunc consequat in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Leo.",
          "Nibh.",
          "Bibendum."
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "short description Ultricies turpis bibendum fringilla gravida in orci lacinia eti placerat.",
      "long_description": "long description Eti posuere ornare facilisis sit, enim au elit ligula. Aenean aenean facilisis eget sollicitudin finibus, pharetra auctor eu ornare cras, amet amet nibh risus, a vulputate iaculis laoreet proin elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "In.",
          "Blandit.",
          "Lacinia."
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "short description Tempus nisl neque tristique purus curabitur sollicitudin faucibus auctor proin.",
      "long_description": "long description Elementum etiam mi risus maecenas. Metus lectus imperdiet commodo iaculis. Cras nulla vitae at lorem au curabitur nisl. Vehicula proin quisque tempor, nam id purus nulla. Ultrices nunc rhoncus faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultrices.",
          "Nulla.",
          "Proin."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description Pulvinar orci vitae aenean sodales massa quisque. Pellentesque nam placerat.",
      "long_description": "long description Nibh mauris tempor vehicula tempor dignissim in laoreet arcu lacus curabitur suscipit finibus, mattis lorem aenean condimentum condimentum lacinia finibus fringilla hendrerit. Elit risus nisl imperdiet consequat tempor consectetur commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ex.",
          "Sem.",
          "Iaculis."
      ]
    },
    {
      "name": "Freecast",
      "short_description": "short description In nisi sagittis commodo consectetur rhoncus faucibus felis orci nulla.",
      "long_description": "long description Condimentum justo euismod ipsum neque gravida proin auctor magna, mollis est ipsum morbi quis viverra, ut imperdiet mollis i elit, finibus sollicitudin velit mattis arcu. Adipiscing pharetra aliquam turpis tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Placerat.",
          "Consequat.",
          "Eti."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description Imperdiet non porttitor mattis lacinia. Condimentum curabitur sodales quis orci.",
      "long_description": "long description Sapien consectetur ultricies aenean sagittis. Condimentum vehicula nulla eget pulvinar nam. Maecenas ante at nibh. Diam a adipiscing tempor, vel orci dignissim id erat eti curabitur scelerisque et magna eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Curabitur.",
          "Dolor.",
          "Vel."
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "short description Enim lorem suscipit orci pharetra porttitor. Quis felis gravida accumsan.",
      "long_description": "long description Sit massa ante turpis e finibus ultricies. Dignissim in etiam curabitur euismod natoque dui, risus euismod viverra auctor. Iaculis dignissim iaculis sem. Velit elit velit ante, nam lacinia leo ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "At.",
          "Dictum.",
          "Ante."
      ]
    },
    {
      "name": "Proline",
      "short_description": "short description Mi metus sollicitudin ac felis, elementum est diam turpis proin.",
      "long_description": "long description Sollicitudin nisi adipiscing eget ante accumsan fringilla iaculis gravida nam ultricies tempus tristique, dictum vitae sed sodales nulla posuere metus eu et dui sapien, quis nulla laoreet maecenas non adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Gravida.",
          "Pharetra.",
          "Imperdiet."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Neque lacus vehicula eget aenean, lorem maecenas cras consequat ut.",
      "long_description": "long description Eros purus curabitur placerat lectus hendrerit nunc blandit mollis, consequat posuere pharetra id. Aenean fringilla lacus orci arcu, quis aenean tortor id. Enim iaculis pellentesque ornare. Consequat pellentesque tortor lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "E.",
          "Ac.",
          "Arcu."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Dictum e tempor maecenas ex cras elit accumsan commodo vel.",
      "long_description": "long description Curabitur elementum quisque i id e. Vulputate sodales consequat lobortis mattis ante au pharetra. Dolor cursus condimentum sollicitudin ut lacinia. Consequat e consequat augue metus dignissim, lacinia finibus bibendum vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Et.",
          "Aenean.",
          "Nunc."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Ornare nisl eros augue i elementum. Eu ornare turpis vitae.",
      "long_description": "long description Vestibulum aenean accumsan ipsum orci etiam, mauris morbi suscipit lobortis. Purus consequat eros nulla id. Dui cursus facilisis dolor ultricies neque, eros nibh maximus orci tincidunt commodo nisi consequat adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Imperdiet.",
          "Pellentesque.",
          "Sapien."
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "short description Ipsum vestibulum pulvinar scelerisque imperdiet. Arcu magna finibus eti quisque.",
      "long_description": "long description Et tortor eros accumsan amet lobortis mi eros ipsum ligula hendrerit sagittis i. Mollis mollis dui ultricies iaculis. Enim aenean vitae sem ex. Vel eu i mi. Elementum ac maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Augue.",
          "Dictum.",
          "Placerat."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Nibh vitae aliquam non quisque a cras placerat vehicula lorem.",
      "long_description": "long description Est dolor ornare pretium eget. Neque ligula a au risus eu natoque. Nulla vehicula et nisl tortor. At massa justo gravida hendrerit est hendrerit nisl. Sit maximus maximus dui aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ligula.",
          "Justo.",
          "Massa."
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "short description Aenean commodo adipiscing auctor sem scelerisque nunc, auctor eget justo.",
      "long_description": "long description Et vehicula erat aliquam neque purus. Pharetra aliquam maximus imperdiet non suscipit, eros maecenas felis elit ut. Enim facilisis enim posuere massa donec dolor maecenas faucibus lacinia sapien eros elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pretium.",
          "Mauris.",
          "Facilisis."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Commodo consectetur tempus leo lacinia, nam tristique scelerisque dolor risus.",
      "long_description": "long description Dignissim eros nulla e eget posuere ante nisi finibus consequat laoreet blandit nisi felis augue sollicitudin sagittis, felis ligula mi gravida sit, nibh commodo et vitae, quisque nulla purus accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eros.",
          "Felis.",
          "A."
      ]
    },
    {
      "name": "Storex",
      "short_description": "short description Lacinia facilisis rhoncus i porttitor ac ultricies tincidunt pulvinar ultricies.",
      "long_description": "long description Aliquet accumsan vestibulum ultrices gravida. Scelerisque scelerisque pellentesque fringilla ipsum. Velit in consequat tortor. Augue sapien mi faucibus vitae suscipit ante ipsum facilisis non, turpis tristique sed ultricies pulvinar vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Morbi.",
          "Finibus.",
          "Maximus."
      ]
    },
    {
      "name": "Proline",
      "short_description": "short description Massa consequat auctor massa lobortis. Quis cras lacinia condimentum leo.",
      "long_description": "long description Placerat purus blandit sapien eu porttitor aliquam. Tempus mauris quisque porttitor ipsum posuere sollicitudin. Nulla ultrices scelerisque tortor quis dui metus id. I erat lobortis euismod quisque euismod i leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cursus.",
          "Bibendum.",
          "Tincidunt."
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "short description Viverra aliquam elementum accumsan faucibus massa. Ligula placerat in augue.",
      "long_description": "long description Purus orci aenean in sed, cras suscipit tortor ante. Ultricies elit nisl in velit, leo aliquet consequat scelerisque justo, purus viverra maximus viverra pretium eu lobortis eu aliquam vitae sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Elit.",
          "Iaculis."
      ]
    },
    {
      "name": "Freecast",
      "short_description": "short description Aenean curabitur porttitor lacus nulla pulvinar. Sem leo elit elit.",
      "long_description": "long description Orci consequat sed gravida sollicitudin nulla, sed tristique tristique pharetra sed maximus fringilla, in rhoncus tortor imperdiet. Quis curabitur diam imperdiet e curabitur proin metus lobortis curabitur. Mattis metus scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cras.",
          "Dui.",
          "Pulvinar."
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "short description Nunc posuere enim massa lacus et, metus accumsan aliquam ac.",
      "long_description": "long description Pulvinar erat au purus lorem nam. In condimentum velit nibh. Magna nam pulvinar at, augue sem sapien tortor scelerisque. I sapien mi eros ante e, lacinia mi lacus amet elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tortor.",
          "Faucibus.",
          "Ipsum."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Non bibendum aenean lorem vel rhoncus aliquam lorem non sollicitudin.",
      "long_description": "long description Consequat erat erat nisl sollicitudin, sit nibh tortor justo bibendum sem mattis scelerisque. Tristique blandit pharetra adipiscing mattis mollis maecenas id et quis laoreet, metus porttitor nunc ultricies tristique diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "I.",
          "Eros.",
          "Ornare."
      ]
    },
    {
      "name": "Templatek",
      "short_description": "short description Non elit accumsan pellentesque morbi non adipiscing posuere ornare morbi.",
      "long_description": "long description Euismod ante consectetur consectetur pulvinar. Ultricies ac accumsan dignissim, eget nisi porttitor blandit. Vulputate ipsum quis lobortis pellentesque e vel tincidunt erat in, tincidunt pulvinar arcu tempor. Ultrices in non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Posuere.",
          "Maecenas.",
          "Felis."
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "short description Id justo maecenas elit i elementum iaculis nisi justo augue.",
      "long_description": "long description Mi amet pharetra i enim, nam scelerisque ultricies iaculis, aenean au felis nunc mauris. Nulla vitae mauris euismod. Magna ipsum cursus tortor felis ipsum adipiscing curabitur magna. Velit pellentesque hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vel.",
          "Tincidunt.",
          "Eu."
      ]
    },
    {
      "name": "Celmax",
      "short_description": "short description Scelerisque ultricies elementum turpis sem laoreet fringilla consectetur massa tempus.",
      "long_description": "long description Lacinia rhoncus eros enim aenean condimentum vel facilisis. Rhoncus lacinia nam vel, euismod lorem magna facilisis. Nam lobortis et vehicula augue bibendum commodo. In nulla metus sapien ex bibendum mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ligula.",
          "Tortor.",
          "Lobortis."
      ]
    },
    {
      "name": "Proline",
      "short_description": "short description Imperdiet amet lobortis e augue morbi. Orci diam rhoncus tortor.",
      "long_description": "long description Ante tristique blandit morbi elit e augue, curabitur aliquet arcu dolor ultrices facilisis facilisis, lorem risus ligula pretium ultricies quis. Dignissim dictum euismod nisi ex leo, id tempus aliquet sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dictum.",
          "Justo.",
          "Commodo."
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "short description Mi ut e pellentesque placerat. Dui facilisis condimentum maecenas suscipit.",
      "long_description": "long description Enim iaculis pharetra sollicitudin e eti rhoncus nunc nam nam. Blandit in pulvinar felis bibendum risus. Elementum maecenas metus erat. Nisl tincidunt lacinia mauris erat. Tincidunt sit curabitur arcu lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Suscipit.",
          "Sollicitudin.",
          "Gravida."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Justo et et suscipit ligula adipiscing vel. Viverra felis nibh.",
      "long_description": "long description E condimentum elementum finibus id ante maecenas pellentesque ornare mattis ultricies in etiam justo, nunc scelerisque etiam massa, mattis nisl eget risus curabitur, sem sodales laoreet lacus auctor massa commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Scelerisque.",
          "Purus.",
          "Commodo."
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "short description Donec vehicula sodales maximus commodo sollicitudin amet. Magna enim aliquet.",
      "long_description": "long description Purus sem nisl consequat nisi metus consequat. Pharetra e arcu mattis ultricies. Aenean imperdiet blandit nisl sagittis ornare morbi. Mi pretium mollis vestibulum gravida vehicula. Adipiscing imperdiet et aenean et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eros.",
          "Eti.",
          "Condimentum."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description E tempus tristique condimentum eros porttitor ac scelerisque orci diam.",
      "long_description": "long description Maximus ultricies vitae lorem sed tristique. Ipsum au felis elit ipsum. Massa et mauris augue. Vel eget vulputate vehicula e pellentesque, au risus orci arcu mattis a, velit pellentesque ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Quis.",
          "Tempus.",
          "Vitae."
      ]
    },
    {
      "name": "Britech",
      "short_description": "short description Pharetra tortor lacus augue tortor au ultricies maecenas tempor suscipit.",
      "long_description": "long description Neque lorem eu proin euismod porttitor, ornare condimentum donec erat, risus gravida morbi lacinia metus, aliquam velit porttitor sagittis. Eget ornare mi metus augue imperdiet, aliquam sed et vulputate bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Au.",
          "Porttitor.",
          "Vulputate."
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "short description Finibus ex sapien vestibulum eros, sagittis accumsan ex magna tristique.",
      "long_description": "long description Faucibus elit mattis laoreet au commodo e. Tempor nibh scelerisque consequat etiam i. Mattis adipiscing blandit nunc curabitur metus donec, scelerisque at hendrerit turpis. Lacinia pharetra blandit ut elit felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Purus.",
          "Sem.",
          "Vestibulum."
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "short description Morbi lobortis laoreet au tincidunt. Posuere quis tempus bibendum adipiscing.",
      "long_description": "long description Consectetur suscipit dictum mauris ligula natoque, metus etiam cras nam. Morbi ornare felis nunc, pretium amet sapien mattis quis. Aliquet orci au donec. Mollis maximus donec euismod, nunc commodo eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisi.",
          "In.",
          "Maximus."
      ]
    },
    {
      "name": "Solexis",
      "short_description": "short description Condimentum imperdiet commodo dolor faucibus pretium maximus tempor felis ultricies.",
      "long_description": "long description Neque nibh turpis lobortis id aenean in arcu maecenas quis in dictum au aliquet. Bibendum magna facilisis tincidunt, et faucibus lectus nulla blandit adipiscing pellentesque risus, rhoncus pulvinar augue risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sapien.",
          "Eu.",
          "Aliquam."
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "short description Purus in aliquet augue cursus elementum rhoncus, lectus gravida turpis.",
      "long_description": "long description Ligula eros tempus auctor ligula enim lobortis. Pretium ligula lectus mauris velit leo id pellentesque velit aenean. Elit sagittis ex imperdiet ornare sagittis lacinia amet enim. Vel posuere erat ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eros.",
          "Eti.",
          "Maecenas."
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "short description Purus iaculis ligula nunc gravida lacinia porttitor. Ante justo sem.",
      "long_description": "long description Lacinia vel dui nulla ex tincidunt i, nisi i dictum lacus. Ut laoreet eros laoreet massa in velit scelerisque hendrerit tempor tortor. Justo sapien auctor in sodales ornare sodales aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Massa.",
          "In.",
          "Fringilla."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Adipiscing finibus nibh lorem blandit, ultrices et finibus quisque tortor.",
      "long_description": "long description Quisque dignissim ultrices posuere ut. Mauris vitae ultrices fringilla lobortis velit, metus metus finibus tortor. Elit commodo mauris quis nisl, aenean eros consequat velit tempus etiam ac. Vehicula faucibus mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nibh.",
          "Nisl.",
          "Pretium."
      ]
    },
    {
      "name": "Solexis",
      "short_description": "short description Blandit curabitur id arcu mollis mauris cursus felis quis lacus.",
      "long_description": "long description Nibh ornare nisi scelerisque donec lacinia turpis purus felis id rhoncus condimentum accumsan. Accumsan i ut lacinia accumsan amet, vehicula viverra maximus vulputate. Lobortis lacinia magna ornare iaculis mi porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Fringilla.",
          "Sed.",
          "Consequat."
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "short description Vestibulum lacinia nulla etiam blandit justo au at dictum lobortis.",
      "long_description": "long description Ante sapien bibendum mi e. Pulvinar amet elementum mollis vehicula ultrices tristique aliquet, ultrices nisi in tristique. Leo et condimentum nulla et, amet cras pretium arcu dolor aenean neque aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Hendrerit.",
          "Elementum.",
          "Turpis."
      ]
    },
    {
      "name": "Pancast",
      "short_description": "short description Amet curabitur commodo eget orci. Fringilla nunc pellentesque at aenean.",
      "long_description": "long description Velit mi condimentum proin lacinia risus aenean posuere ultricies. Vestibulum dictum hendrerit placerat nulla id. Commodo turpis ornare bibendum blandit bibendum adipiscing lacus cursus, consectetur bibendum vehicula purus tortor au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Arcu.",
          "Proin.",
          "Fringilla."
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "short description Vehicula sit ac proin eget non, lacus mauris tempus magna.",
      "long_description": "long description Pretium mollis augue justo iaculis, faucibus lacus dui mattis. Pellentesque cursus quisque augue a. Accumsan vulputate sit iaculis vestibulum suscipit, eget viverra quis finibus non mi tempus mauris amet nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ante.",
          "Felis.",
          "Sem."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Nulla justo nisi lobortis turpis. Viverra ultricies ante dictum pretium.",
      "long_description": "long description Tempor velit ante elit sem tempor nunc. Aenean justo vitae adipiscing nisi diam ante, vehicula eu lorem velit. Tortor metus lacinia commodo, laoreet imperdiet tincidunt eget sed maecenas velit est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "E.",
          "Purus.",
          "Consequat."
      ]
    },
    {
      "name": "Polycore",
      "short_description": "short description Pulvinar viverra tempus viverra imperdiet, nulla vestibulum lectus orci finibus.",
      "long_description": "long description Sollicitudin etiam maecenas gravida sagittis. Diam vestibulum sapien pellentesque tempor dictum. Morbi metus finibus dui, vel justo nisi mi metus placerat posuere sed mi. Amet commodo mollis nisl lacinia vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sapien.",
          "Neque.",
          "Consectetur."
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "short description Tempus lacus id mauris lacinia. Blandit sodales quis vitae consectetur.",
      "long_description": "long description Vehicula sit gravida ex iaculis dolor. Purus consectetur pretium id lacinia cras posuere, etiam adipiscing augue vitae dictum scelerisque. Lacus blandit quisque orci ultrices eti auctor maecenas ligula elementum donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "A.",
          "Aliquet.",
          "Suscipit."
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "short description Elementum ultricies metus quis dolor, pellentesque cursus nunc turpis diam.",
      "long_description": "long description Pellentesque nibh aenean curabitur metus natoque et diam vehicula elit aliquet euismod quis sagittis cursus tincidunt. Sit vitae justo ornare vel, nunc tortor in leo bibendum. Nam lacinia quisque accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Lacinia.",
          "Diam."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description Pulvinar lacinia aliquet non massa lorem nisl adipiscing ac eu.",
      "long_description": "long description Rhoncus consequat gravida erat magna sem, tristique commodo augue eti porttitor sollicitudin e turpis natoque elementum ultrices scelerisque est i eu. Cursus augue eget dui dignissim metus est euismod magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lectus.",
          "Porttitor.",
          "Consectetur."
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "short description Elementum nam viverra nunc maecenas. Consequat sapien sapien gravida cursus.",
      "long_description": "long description Ipsum natoque dignissim rhoncus lacus justo. Est consequat tempor vehicula eti erat ut. Metus sem sodales nunc aliquet dolor, at curabitur at nulla non mattis quis. Ultricies sed nibh curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pellentesque.",
          "Arcu.",
          "Dignissim."
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "short description Lorem vitae eu elementum i nisi. Facilisis facilisis bibendum vulputate.",
      "long_description": "long description Pretium mauris turpis et vitae justo iaculis. Turpis eros vitae porttitor, nisi laoreet iaculis scelerisque. Enim est ante lacinia metus elementum, arcu in quisque curabitur, elit maecenas sollicitudin placerat pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Etiam.",
          "Elit.",
          "Etiam."
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "short description Mollis arcu posuere purus blandit, laoreet donec ipsum hendrerit felis.",
      "long_description": "long description Vulputate tempus in lectus justo, fringilla nulla dignissim risus pretium vehicula. Consectetur amet e dolor tempus. Proin faucibus ornare vel purus, vitae pulvinar est fringilla. Aliquam accumsan risus ornare vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Proin.",
          "Ut.",
          "Massa."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Lacinia sodales lobortis et cras dolor porttitor lacinia sollicitudin aliquet.",
      "long_description": "long description Hendrerit sodales nam iaculis a dictum posuere nisl elementum, quis aliquet cursus elit nisi natoque a viverra, massa scelerisque mollis tempus. In lorem nulla dolor sem enim. Sapien facilisis imperdiet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vulputate.",
          "Pulvinar.",
          "Ipsum."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description Lacus orci ornare vulputate leo. Lacinia aliquet metus tortor hendrerit.",
      "long_description": "long description Ultrices consectetur nulla lorem pellentesque, au dui quisque ac, mollis nam pulvinar vel lobortis sit, porttitor proin facilisis velit eu curabitur vehicula dui. Nisi quis lacinia adipiscing, consequat aenean pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lectus.",
          "Morbi.",
          "Magna."
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "short description Hendrerit rhoncus amet mauris donec ligula. Quisque sit commodo suscipit.",
      "long_description": "long description Maximus tristique vitae laoreet a, quis tincidunt dolor curabitur. Au vehicula ipsum orci dolor tempor adipiscing. Eget accumsan aenean amet pharetra. Lacus viverra porttitor ut nisi gravida. Arcu quisque felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Suscipit.",
          "Nam.",
          "Neque."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Adipiscing ultrices mauris morbi neque eu aliquam natoque morbi maximus.",
      "long_description": "long description Nulla nibh laoreet mi au id finibus ultrices, et tristique ultrices non suscipit sem non cras lectus eti eu pretium, commodo risus arcu facilisis est natoque lacus quisque tristique pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Ac.",
          "Et."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Lacinia consequat lorem ultricies morbi vestibulum natoque, e id nibh.",
      "long_description": "long description E felis pretium lacinia pretium finibus ut vel consequat sed elit eros augue auctor. In sollicitudin proin ut blandit lacinia. Consectetur placerat euismod ligula. Natoque dignissim maximus cras nisl rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lectus.",
          "Vulputate.",
          "Adipiscing."
      ]
    },
    {
      "name": "Kancom",
      "short_description": "short description Sagittis maximus in imperdiet dui nisl vulputate in blandit sit.",
      "long_description": "long description Risus pellentesque pellentesque donec tincidunt iaculis, neque bibendum vulputate iaculis justo, lacinia consectetur commodo adipiscing tempor at sem maximus gravida neque, ornare nisl a ultricies erat. Ex lectus rhoncus bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vel.",
          "Tempor.",
          "Diam."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Lacus scelerisque velit erat ex. Sagittis nunc porttitor rhoncus posuere.",
      "long_description": "long description A mi justo facilisis id nisi sagittis quisque. Pellentesque lacinia est placerat a, consectetur ornare ultrices leo erat justo nisl aliquet pellentesque morbi eu elit. Lobortis mauris ultricies lacinia ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eti.",
          "Morbi.",
          "Lobortis."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Nunc turpis pretium ligula faucibus felis. Maecenas nunc etiam adipiscing.",
      "long_description": "long description Iaculis lacus auctor ipsum quis est vel laoreet proin, vestibulum aliquam pharetra eu facilisis vulputate. Lacus mi in ultricies vestibulum condimentum lacinia finibus tristique imperdiet enim, finibus vitae ornare velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempus.",
          "Maecenas.",
          "Au."
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "short description Eros commodo gravida proin ultricies. Auctor et ut aliquet donec.",
      "long_description": "long description Velit maximus euismod lorem sodales vitae adipiscing ornare imperdiet ex donec et. Morbi ultrices suscipit suscipit. Nunc i commodo pulvinar gravida quisque. Sodales est ac elit id ornare at leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Elementum.",
          "Gravida.",
          "Mollis."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description Aenean ac placerat sit in, tortor vehicula suscipit posuere at.",
      "long_description": "long description Nunc elementum placerat lacus scelerisque quis. Sapien magna metus ac sit mi diam iaculis eu suscipit. Ut sollicitudin ac proin. Massa maximus quisque fringilla vestibulum i blandit eget et curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Felis.",
          "Metus.",
          "Lorem."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Lacinia tempor lacus neque metus mattis risus non id sem.",
      "long_description": "long description Hendrerit purus ultrices i imperdiet erat dictum. Est lorem et consequat facilisis nulla, nisl purus vulputate hendrerit lacinia velit magna laoreet cras ultrices, lobortis scelerisque nulla porttitor tempor nulla et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Diam.",
          "Ex.",
          "Cras."
      ]
    },
    {
      "name": "Infracom",
      "short_description": "short description Ornare arcu pulvinar non aenean velit fringilla. Ac curabitur faucibus.",
      "long_description": "long description Lobortis donec eu non nulla. Dictum magna leo risus. Tortor e ut iaculis, dolor non faucibus ornare ultrices vehicula scelerisque, sit finibus eu purus non mollis arcu lacinia orci tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Erat.",
          "Sapien.",
          "Felis."
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "short description Vitae risus tristique non imperdiet. Arcu consequat est purus morbi.",
      "long_description": "long description Porttitor i eti mi ac. Fringilla cursus at pharetra at ornare gravida eu mi maecenas. Nisi mauris porttitor purus augue magna faucibus au pharetra placerat. Dolor magna aliquet eu finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Accumsan.",
          "Mattis."
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "short description Ipsum pellentesque sed metus enim, eget tempor diam turpis sed.",
      "long_description": "long description Sagittis lectus proin eros eget maecenas commodo, metus ornare leo fringilla, at i adipiscing ante consequat velit tristique aenean, vitae adipiscing arcu ligula. Erat id sed cras etiam aenean felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maecenas.",
          "Mollis.",
          "Rhoncus."
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "short description Orci adipiscing condimentum porttitor vel quisque ut nibh mollis etiam.",
      "long_description": "long description Aenean nisl enim sem mi. Scelerisque nam lectus i elit nunc enim ornare. Diam nisi mollis suscipit mi morbi hendrerit mattis orci tristique, risus ante aliquet lorem metus velit ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Ut.",
          "Mi."
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "short description Laoreet in adipiscing proin purus. Eu nisl lorem cras in.",
      "long_description": "long description Tristique arcu tempor ex rhoncus, leo massa mattis tristique nisl. Ipsum a mi condimentum curabitur. Enim ligula augue et finibus elit natoque diam pellentesque auctor, mollis aenean vitae suscipit tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lobortis.",
          "Consectetur.",
          "Cras."
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "short description Adipiscing finibus risus quis ultricies. Enim consequat id facilisis lacus.",
      "long_description": "long description Sed lobortis at finibus quis pretium condimentum diam. Metus velit tortor eu faucibus, quisque quisque et pulvinar quisque. Aenean id natoque nulla erat, elit metus neque nisi. Felis dolor ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Massa.",
          "Tortor.",
          "Cursus."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Velit risus id vestibulum magna. Hendrerit cursus sollicitudin magna risus.",
      "long_description": "long description Eget gravida sapien dignissim leo pretium. Accumsan finibus cursus hendrerit iaculis risus sagittis dolor maecenas natoque a tempus gravida vestibulum in velit justo tempor, bibendum id nisi magna suscipit fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "Quisque.",
          "Vitae."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Sapien dignissim a lectus ut bibendum nunc quisque sem imperdiet.",
      "long_description": "long description Ligula imperdiet vitae auctor cras. Bibendum pharetra elementum quis nam sit vestibulum viverra e viverra. Tempor bibendum lacinia i sapien, dictum ut scelerisque nulla. Proin tortor lobortis cras etiam turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Arcu.",
          "Dictum.",
          "Orci."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description Orci at sodales risus au. Suscipit au laoreet sodales sapien.",
      "long_description": "long description Iaculis elementum vulputate finibus vel fringilla gravida e dignissim nibh gravida nibh ligula tristique pellentesque sapien facilisis consequat. Est hendrerit justo nam sagittis. Placerat rhoncus massa imperdiet lacinia pellentesque nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tristique.",
          "Suscipit.",
          "Amet."
      ]
    },
    {
      "name": "Pancast",
      "short_description": "short description Proin proin sem a lectus. Elit id vitae lacinia commodo.",
      "long_description": "long description Magna sed accumsan augue augue, in aliquet aliquam placerat, id leo ex dolor ultrices, aliquet eros neque diam sit aenean au a, mauris mauris neque ultricies eget metus id euismod.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Proin.",
          "Finibus.",
          "Arcu."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Imperdiet au porttitor donec aenean sem purus nisl hendrerit lacus.",
      "long_description": "long description Dolor tristique felis lacinia elit au commodo au lacinia, dignissim dolor ultricies cursus amet tincidunt i nunc tortor ultrices. Eget nunc laoreet turpis est ut non morbi tristique vitae vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Viverra.",
          "Facilisis.",
          "Lectus."
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "short description Lectus velit diam ante sit tempus tristique pharetra vel vitae.",
      "long_description": "long description Dignissim justo ultricies fringilla condimentum lobortis euismod elementum. Quisque erat felis nisl magna, mi rhoncus maximus purus nunc tortor. Neque vitae sodales massa pharetra velit eti eti elit aenean consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ac.",
          "Non.",
          "Condimentum."
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "short description Scelerisque scelerisque i etiam bibendum tristique vestibulum eros viverra sapien.",
      "long_description": "long description Placerat adipiscing aliquet leo finibus mattis orci justo ligula au e ultrices natoque, maximus neque tempor eros tempus. Auctor donec dictum vehicula ultricies ultrices curabitur ornare auctor proin etiam cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Blandit.",
          "Aliquam.",
          "Tempus."
      ]
    },
    {
      "name": "Baramax",
      "short_description": "short description Porttitor justo velit ornare vehicula. Blandit vehicula et ornare a.",
      "long_description": "long description Neque elementum neque id bibendum arcu leo maximus sodales nam scelerisque quisque i turpis, condimentum maximus pharetra purus etiam. Blandit ultrices arcu cursus. Rhoncus risus posuere consequat felis e in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vel.",
          "Augue.",
          "Metus."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Natoque quis sollicitudin adipiscing donec quisque, eti lacinia adipiscing placerat.",
      "long_description": "long description Erat a ante imperdiet sollicitudin dui euismod. Proin arcu eget pulvinar turpis cursus eros, in sed leo pretium maximus, risus vel ultricies massa, curabitur nisi i vehicula, hendrerit ipsum nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pulvinar.",
          "Lacinia.",
          "Mauris."
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "short description Sollicitudin amet gravida eros eu sapien vulputate. Risus pellentesque proin.",
      "long_description": "long description Ipsum mauris aliquet finibus bibendum, felis vehicula nulla justo lorem morbi in ornare euismod ex mattis, eu eros mi e velit, pretium sapien vel ante enim erat metus commodo erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Auctor.",
          "Nulla.",
          "Hendrerit."
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "short description Hendrerit at morbi sollicitudin adipiscing mi tincidunt. Lacinia maecenas ligula.",
      "long_description": "long description Ipsum ligula tempor porttitor dignissim. Vehicula leo ex massa ante ipsum, ipsum ut ornare au. Turpis sagittis eti etiam e justo, nibh nisl velit ultricies facilisis dignissim augue aenean accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempor.",
          "Fringilla.",
          "Leo."
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "short description Pharetra nunc hendrerit magna at cursus adipiscing consectetur at accumsan.",
      "long_description": "long description Eti eu etiam ipsum pretium. Scelerisque hendrerit tempor sodales. Ipsum quis pretium at commodo sollicitudin, pulvinar sagittis rhoncus accumsan vehicula fringilla risus vulputate finibus morbi. Velit au au auctor ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tincidunt.",
          "Cras.",
          "Lorem."
      ]
    },
    {
      "name": "FastMart",
      "short_description": "short description I facilisis pretium finibus ut mollis hendrerit natoque lorem sit.",
      "long_description": "long description Nibh vitae facilisis erat fringilla gravida sem velit vitae bibendum, porttitor proin amet magna, ligula maximus finibus facilisis pulvinar accumsan. Hendrerit gravida purus vehicula laoreet, orci sit eget tortor laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nunc.",
          "Pretium.",
          "Tempor."
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "short description Nisl lacus laoreet donec velit. Au pretium leo faucibus pulvinar.",
      "long_description": "long description Orci nisi proin massa hendrerit. Sagittis eu ipsum ultricies. Nam rhoncus tortor tincidunt sagittis vulputate massa tristique. Condimentum ultrices sem lectus. Suscipit placerat maecenas lorem. Aliquet quis fringilla pellentesque ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dignissim.",
          "Vehicula.",
          "Et."
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "short description Curabitur placerat leo vestibulum velit proin, cursus quisque bibendum arcu.",
      "long_description": "long description Suscipit rhoncus curabitur orci elit metus tempor velit. Morbi sagittis etiam arcu nibh ornare faucibus. Sollicitudin cursus eu bibendum mauris vel sed. Justo eget turpis accumsan. Lacinia iaculis bibendum erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Sagittis.",
          "Lacinia."
      ]
    },
    {
      "name": "Keycast",
      "short_description": "short description Sed sagittis tortor a dictum nam, hendrerit nisl etiam consectetur.",
      "long_description": "long description Ultricies lacus dolor orci i. Scelerisque etiam ornare vitae. Arcu id natoque lacus maecenas. Pellentesque sit consequat quisque aliquam risus accumsan risus curabitur leo. Dolor ultricies lacinia ipsum ac pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Amet.",
          "Sed.",
          "Blandit."
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "short description Tortor hendrerit rhoncus bibendum lacinia pharetra. Accumsan laoreet ac auctor.",
      "long_description": "long description Tempus faucibus vitae lobortis eros. Nunc non nunc lacinia, au aliquet lectus bibendum eros quis finibus tortor purus magna viverra. Maximus ac etiam scelerisque sagittis. Imperdiet nisl lorem adipiscing morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mi.",
          "Id.",
          "Ultricies."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Pellentesque sodales lectus e et, nulla aliquam turpis sem cras.",
      "long_description": "long description Ante ornare lobortis consectetur vel quis eget aliquam enim. Eti mollis lacinia proin. Quisque condimentum mollis purus erat donec, ipsum vel adipiscing vitae morbi sollicitudin, augue metus mi amet blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Velit.",
          "Etiam.",
          "Augue."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Nisi eti velit et au. Ante commodo suscipit risus vulputate.",
      "long_description": "long description Tincidunt auctor aliquet id dictum i porttitor, lacinia at suscipit accumsan nisl, sodales laoreet ipsum turpis, in lacinia laoreet turpis vulputate nam, vestibulum ex eget at, ante pellentesque ante donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eu.",
          "Au.",
          "A."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Eu lacinia mollis aliquet est amet arcu donec dolor suscipit.",
      "long_description": "long description Ipsum sollicitudin ante posuere viverra tortor rhoncus metus. Pretium et lectus tincidunt elementum proin pulvinar, purus lectus eros at diam. Vitae at quis e, metus arcu morbi cursus tempus ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Dolor.",
          "Vulputate.",
          "Proin."
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "short description Lectus lectus sem sollicitudin ut morbi. Orci lorem magna accumsan.",
      "long_description": "long description Ornare sollicitudin magna morbi metus. Pellentesque eget tincidunt lorem ex sagittis imperdiet. Vehicula fringilla nulla commodo, morbi quis maximus dolor condimentum nulla tempor, sollicitudin sed purus dictum e massa au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Quis.",
          "Arcu.",
          "Consectetur."
      ]
    },
    {
      "name": "Protheon",
      "short_description": "short description At maximus elementum mi rhoncus fringilla eti. Suscipit tristique adipiscing.",
      "long_description": "long description Risus quis amet ipsum erat, at lobortis elementum au augue augue eu, orci commodo aliquet justo. E dignissim metus nibh turpis vel finibus. Nisi vulputate et at ut imperdiet blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Commodo.",
          "Tempus.",
          "Mattis."
      ]
    },
    {
      "name": "Superwire",
      "short_description": "short description Vehicula nisi placerat massa lectus morbi nunc condimentum eros amet.",
      "long_description": "long description Tempus sem elementum accumsan risus nam rhoncus. Eros ultrices sodales proin mi e consectetur. Curabitur au fringilla vitae vehicula, cursus vitae eu facilisis, a i ipsum elit nam quis dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aenean.",
          "Facilisis.",
          "Vulputate."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Curabitur dui nam porttitor quis. Turpis eros augue mollis ex.",
      "long_description": "long description Pretium arcu ac justo maecenas. Vulputate mi gravida dictum, natoque metus a mi. Finibus iaculis natoque erat accumsan adipiscing. Vel augue dignissim ultrices at consequat vitae, mollis nisi nam orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vel.",
          "Condimentum.",
          "Dignissim."
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "short description E au condimentum cursus condimentum et, natoque mauris vel adipiscing.",
      "long_description": "long description Enim eros adipiscing hendrerit eros, posuere neque elementum non laoreet sagittis a dignissim. Pretium massa nisi orci consequat au dolor, blandit donec a in, vitae nisl blandit consequat nulla viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Auctor.",
          "At.",
          "Non."
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "short description Eu lobortis enim consectetur eros. Enim blandit consectetur velit maecenas.",
      "long_description": "long description Elementum ultricies mollis ligula orci a justo. Tortor turpis faucibus sapien nunc. Quis mi eget blandit placerat a au tincidunt lectus eget ante. Mauris pharetra neque faucibus purus ultrices nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Iaculis.",
          "Neque.",
          "Ante."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Sem sodales purus natoque sem diam viverra, lacinia ultrices ipsum.",
      "long_description": "long description Justo vitae ante aliquet et, sed ante accumsan ultricies fringilla felis faucibus tortor morbi. Aliquam justo vulputate viverra aliquam. Pulvinar mollis dui gravida vitae natoque, eros tincidunt ornare justo augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "At.",
          "Proin.",
          "Erat."
      ]
    },
    {
      "name": "Conixco",
      "short_description": "short description Massa mauris facilisis erat commodo eget nibh vestibulum elementum ligula.",
      "long_description": "long description In elit mollis dui laoreet enim mollis quisque eu nulla vulputate quis proin lacinia leo tortor mi id consectetur magna condimentum euismod sit lectus, ac cursus neque aliquet hendrerit neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sem.",
          "Tristique.",
          "Curabitur."
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "short description Placerat ante quis nunc eti enim nisi dolor lorem facilisis.",
      "long_description": "long description Eti sit non cras morbi sem, cursus magna sollicitudin eu dictum gravida lacus, maximus ultricies tincidunt elementum gravida. Dolor ac elit cursus mollis. Tristique ultrices dui pharetra etiam eti nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ultricies.",
          "I.",
          "Massa."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description Pellentesque vitae i non hendrerit pharetra. Rhoncus fringilla erat sollicitudin.",
      "long_description": "long description Scelerisque lacus pretium vestibulum dolor arcu justo sollicitudin sodales au, tristique aliquet enim aliquet, blandit lorem at ut ac tortor placerat pellentesque pellentesque dictum cras eti blandit accumsan curabitur neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cras.",
          "Finibus.",
          "Ultricies."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description Viverra posuere condimentum eu in, bibendum ligula elit massa curabitur.",
      "long_description": "long description Nibh in dolor sodales nisl vehicula. Faucibus justo dui lorem. Enim pulvinar arcu vel sem, dolor lobortis cursus id sagittis risus natoque, scelerisque blandit est natoque a sit sapien purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Viverra.",
          "Iaculis.",
          "Vulputate."
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "short description At faucibus eu tincidunt adipiscing turpis lorem, sit pulvinar ex.",
      "long_description": "long description Magna ligula ac tortor orci nibh placerat ultricies, aliquet diam mollis ultricies. Orci maximus placerat maximus, sodales sollicitudin elementum proin. Leo dolor pulvinar felis natoque. Consectetur pharetra arcu orci mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Orci.",
          "Adipiscing."
      ]
    },
    {
      "name": "Freecast",
      "short_description": "short description Sit ultricies maximus ut velit mi dictum metus sed quis.",
      "long_description": "long description Aliquam bibendum felis ac ultrices nulla, orci elit gravida nisl et turpis, ligula lorem etiam iaculis sed. Natoque nulla mauris morbi pellentesque mattis, at vestibulum pellentesque massa, blandit aliquam nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Laoreet.",
          "Arcu.",
          "Pellentesque."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Eti dui mauris neque enim. Pellentesque quis erat orci lacinia.",
      "long_description": "long description Cursus auctor lectus arcu ligula dignissim fringilla morbi, vehicula risus nunc porttitor. Vel ornare turpis hendrerit. Sed proin i iaculis lacus neque ultrices. Diam lobortis lacinia mollis, eti quis non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Leo.",
          "Dictum.",
          "Gravida."
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "short description Lacinia justo facilisis adipiscing pharetra in. Aenean mollis eros mi.",
      "long_description": "long description Augue etiam condimentum et sem pretium. Nisl commodo finibus tempus pulvinar. Felis natoque ante maecenas quisque. Dignissim eget tempor augue au. Gravida quisque etiam scelerisque. Imperdiet e donec ac porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Bibendum.",
          "Quisque.",
          "At."
      ]
    },
    {
      "name": "Conixco",
      "short_description": "short description Lobortis placerat mauris amet rhoncus consequat felis etiam vestibulum ultrices.",
      "long_description": "long description Ornare ut pharetra mauris posuere proin lacus sagittis adipiscing. Neque pulvinar sodales ut velit facilisis laoreet. Eti ac est lacinia ligula pellentesque aliquet. Nisi ultricies euismod nulla mattis iaculis vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Purus.",
          "Dictum.",
          "Neque."
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "short description Maecenas donec nisl ultrices est. Maximus ultrices ex cras massa.",
      "long_description": "long description Dignissim commodo nunc maecenas pretium. Tempor nulla turpis laoreet donec. Eros bibendum mauris tempus tristique facilisis viverra eu. Erat iaculis sem curabitur auctor ornare, vel est curabitur consequat bibendum purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vitae.",
          "Posuere.",
          "Sit."
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "short description Sem augue orci ac condimentum aenean pellentesque, nibh mauris purus.",
      "long_description": "long description Neque nam ultrices aliquet massa at tristique enim maecenas, turpis eros lectus vestibulum viverra. Nibh commodo mi donec orci vitae. I vitae velit bibendum. Elementum nisi euismod id dolor ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Eget.",
          "Natoque.",
          "Ultrices."
      ]
    },
    {
      "name": "Citisys",
      "short_description": "short description Felis pharetra finibus consectetur condimentum leo pharetra posuere tincidunt risus.",
      "long_description": "long description Pulvinar vehicula leo id bibendum tristique nunc posuere at consectetur, vel ultricies non cursus au gravida. Ornare lobortis nisl imperdiet sed augue. Purus sagittis accumsan commodo porttitor quisque sagittis ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Rhoncus.",
          "Dictum.",
          "Gravida."
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "short description Commodo purus ultrices porttitor faucibus eget bibendum consequat justo morbi.",
      "long_description": "long description Erat e sed consectetur tortor leo commodo. Orci euismod bibendum mattis bibendum, lorem est gravida nibh maximus dignissim magna sed. Id commodo faucibus hendrerit consequat nunc. Lorem non etiam quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mattis.",
          "Proin.",
          "Lorem."
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "short description Fringilla turpis a natoque curabitur, blandit dictum e mauris maecenas.",
      "long_description": "long description Hendrerit morbi ac nisi adipiscing suscipit placerat. Iaculis hendrerit commodo curabitur dui est etiam finibus lobortis magna aliquam facilisis. Ut eget nibh sem, nisl finibus pellentesque massa ultrices sollicitudin blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nam.",
          "Ornare.",
          "Neque."
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "short description Iaculis adipiscing adipiscing condimentum sem diam placerat, au donec suscipit.",
      "long_description": "long description Pharetra donec natoque lorem tempor lobortis, mauris eu enim sodales accumsan augue est blandit porttitor nibh purus commodo, auctor felis imperdiet donec sem. Sollicitudin ut iaculis nisl sodales donec adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Massa.",
          "Lectus.",
          "Faucibus."
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "short description Mauris viverra mattis nunc porttitor. Auctor eu facilisis in arcu.",
      "long_description": "long description Ligula adipiscing eros mattis dui. Ut sapien id ornare. Eti dictum amet enim. Nibh erat massa mi consequat. Magna augue proin natoque ipsum velit mattis nisi vulputate. Pretium lacus ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Orci.",
          "Vulputate.",
          "Leo."
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "short description Fringilla mollis nam lorem bibendum rhoncus, dolor a purus facilisis.",
      "long_description": "long description Ac amet turpis i sit cras ligula e, elit cras proin amet tempus, elementum maximus eros auctor. Ut commodo dictum lacus in nam maximus mattis viverra elementum maximus nunc amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nam.",
          "Lacinia.",
          "Sagittis."
      ]
    },
    {
      "name": "Celmax",
      "short_description": "short description Laoreet accumsan e mauris sem. Tincidunt pharetra ex ornare tortor.",
      "long_description": "long description Donec imperdiet fringilla auctor placerat euismod nisi fringilla nulla. Elementum tortor vulputate id leo vulputate auctor tincidunt sodales eros, commodo gravida i ligula dolor mattis ipsum, posuere porttitor dui erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Vehicula.",
          "In.",
          "I."
      ]
    },
    {
      "name": "Connic",
      "short_description": "short description Lacinia etiam e facilisis eti rhoncus facilisis ipsum sodales eu.",
      "long_description": "long description Aenean justo vitae ligula dui mi purus. Ornare mollis metus facilisis sit eti auctor, posuere aenean hendrerit ex scelerisque. Massa magna pharetra euismod dictum etiam non, consectetur sagittis turpis dolor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Aenean.",
          "Sem.",
          "Rhoncus."
      ]
    },
    {
      "name": "Freecast",
      "short_description": "short description Blandit ornare nam amet eros curabitur arcu consectetur ac nulla.",
      "long_description": "long description Ligula gravida a nisl condimentum sodales. Consectetur ex nulla justo, nunc in lobortis laoreet. Lectus mauris velit tristique lectus sagittis a. Pulvinar sed au adipiscing, ultricies cursus morbi natoque auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Iaculis.",
          "Laoreet.",
          "Pretium."
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "short description Arcu nibh pretium ac nulla eu. Diam lobortis magna i.",
      "long_description": "long description Sapien tincidunt facilisis amet vehicula ipsum. Curabitur est dictum mi, quisque faucibus risus consequat i id, turpis aenean lobortis commodo sed lacus id. Dictum et elit suscipit, fringilla et sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Cras.",
          "Id.",
          "Ultricies."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Sagittis posuere eget curabitur magna. Nulla eu pretium iaculis dictum.",
      "long_description": "long description Sapien nulla porttitor massa morbi eu sed. Aliquam est quisque cursus, rhoncus blandit nisl natoque. Porttitor suscipit lobortis massa, tempor placerat lacinia curabitur. Eget tristique scelerisque et dignissim iaculis dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ipsum.",
          "Lectus.",
          "Gravida."
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "short description Augue etiam maecenas lobortis hendrerit, lacinia ante rhoncus arcu eu.",
      "long_description": "long description Eget quisque ipsum enim sit. Orci leo nulla lectus, tristique pretium nam tortor aenean quis. Ultricies rhoncus finibus ex, amet tortor est euismod etiam sagittis imperdiet nibh lacinia massa natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Viverra.",
          "Mattis.",
          "Pellentesque."
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "short description Commodo pharetra curabitur adipiscing nibh gravida maximus dignissim ipsum erat.",
      "long_description": "long description Tortor diam consectetur pretium pharetra curabitur consectetur. Quisque augue at finibus, vel ac risus vitae ante placerat. Sapien tempus vestibulum commodo gravida vitae placerat dictum. Mauris metus aliquet dictum aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sem.",
          "Suscipit.",
          "Amet."
      ]
    },
    {
      "name": "Storex",
      "short_description": "short description Pellentesque amet ipsum metus vulputate, cras consequat natoque justo mi.",
      "long_description": "long description Cursus enim ut accumsan cursus i arcu, nunc dignissim lectus metus nisl nam nisi laoreet accumsan proin proin velit eget, imperdiet ut leo ut. Quis velit maximus eu auctor tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Au.",
          "Quisque.",
          "Quisque."
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "short description Donec consectetur lorem sollicitudin tempor, ante vehicula viverra leo sem.",
      "long_description": "long description Curabitur ultricies fringilla velit elementum cursus. Mollis mattis est felis diam consequat hendrerit. Neque scelerisque adipiscing vel eti aliquam fringilla, ante aenean gravida au arcu. Eget eu aenean pretium vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "A.",
          "Porttitor.",
          "Elit."
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "short description Ex tempus euismod aliquam lorem, lacinia risus viverra auctor ultricies.",
      "long_description": "long description Eget commodo lorem pulvinar dolor viverra proin, elementum adipiscing et enim. Cursus scelerisque lacinia enim vehicula ultricies adipiscing, sollicitudin aliquam morbi dignissim posuere blandit. Pharetra eti lacus tortor mattis justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Consectetur.",
          "Mollis.",
          "Ultrices."
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "short description Cras ac i proin ac nam. Rhoncus sodales risus condimentum.",
      "long_description": "long description Risus commodo velit tempor felis aliquam, etiam condimentum lacinia sapien neque. Placerat maecenas nibh magna donec, quisque quis risus aliquam. Nisl dictum laoreet pulvinar. Blandit enim tempus dui ante justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Suscipit.",
          "Elit.",
          "Posuere."
      ]
    },
    {
      "name": "Celmax",
      "short_description": "short description E velit faucibus sem commodo aliquet consectetur, scelerisque arcu mattis.",
      "long_description": "long description Cursus lacus id placerat bibendum velit. Nibh ultrices tortor orci vestibulum. Lectus diam consectetur lacus. Proin vel elit mattis. Eget magna lobortis lorem. Sollicitudin bibendum tortor diam ultricies ultrices metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pretium.",
          "Vulputate.",
          "Nunc."
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "short description Curabitur vel maximus gravida ut curabitur vitae, purus maximus viverra.",
      "long_description": "long description Consequat i leo suscipit aliquet. Dignissim etiam commodo nunc sollicitudin. Turpis purus orci amet rhoncus mollis. Id finibus et finibus, quis sagittis tempor placerat. Vel tempus vel nibh pulvinar sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Enim.",
          "Erat.",
          "Dignissim."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Facilisis mollis lacus leo donec nunc leo nam facilisis eti.",
      "long_description": "long description Justo pulvinar lacinia donec purus aenean. Nibh sodales commodo nulla arcu diam. Pretium sapien porttitor natoque velit erat bibendum aenean leo lacinia, au diam natoque non lacinia id tincidunt ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Arcu.",
          "Commodo.",
          "Turpis."
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "short description Nam tincidunt finibus velit fringilla diam et ex morbi vestibulum.",
      "long_description": "long description Ornare maximus pellentesque massa tempor. Sed ligula risus non, vitae consectetur posuere consectetur gravida, velit commodo felis porttitor vel pharetra. Maecenas tortor curabitur mollis proin, pretium leo id gravida nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Au.",
          "Posuere.",
          "Neque."
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "short description Aliquet sagittis enim lobortis au nam pellentesque purus dictum vel.",
      "long_description": "long description Fringilla maecenas sodales ac eu cras, est maximus rhoncus sodales consequat proin nulla auctor nisl laoreet dictum imperdiet lacus. E euismod eti justo, e sagittis vestibulum est lacinia commodo maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tempus.",
          "Vitae.",
          "Iaculis."
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "short description Consequat lorem nulla suscipit rhoncus diam. In donec sit consequat.",
      "long_description": "long description At ac felis e i cras, dolor lacinia mattis eti commodo. Ac nunc facilisis donec tincidunt fringilla amet, orci est quis fringilla ultricies velit erat turpis lacus natoque morbi lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Felis.",
          "Risus.",
          "Pulvinar."
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "short description Vel nisi vulputate maecenas dui euismod, nunc dui augue risus.",
      "long_description": "long description Mauris elit finibus dignissim ligula cras curabitur dolor mollis nam augue gravida ornare ac amet accumsan eti, maecenas suscipit bibendum dui neque facilisis arcu a at scelerisque maximus accumsan iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maecenas.",
          "Gravida.",
          "Eros."
      ]
    },
    {
      "name": "Opticast",
      "short_description": "short description Lectus sit maecenas facilisis eu laoreet ac et nam eget.",
      "long_description": "long description Non pharetra id sollicitudin dolor. Velit augue felis magna, lectus commodo felis ut sem vulputate lacinia, neque id ligula aliquam. Velit tincidunt ex hendrerit blandit ipsum. Pretium dui eti sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lorem.",
          "Sollicitudin.",
          "Nisi."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Cursus faucibus lacinia placerat neque curabitur metus lacinia at quis.",
      "long_description": "long description Ex nisl ornare condimentum bibendum lobortis elementum natoque facilisis adipiscing. Porttitor nam nulla proin lectus. E blandit ligula turpis blandit, morbi non laoreet dictum e magna aenean scelerisque dignissim lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pellentesque.",
          "Blandit.",
          "Vehicula."
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "short description Dolor amet fringilla aenean bibendum, dignissim metus lorem diam fringilla.",
      "long_description": "long description Posuere amet orci sodales sodales turpis enim, lacus ultricies non turpis at diam. Pharetra erat curabitur sagittis eros tempus e euismod, dictum eti nunc commodo at, nisi quis sodales ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Suscipit.",
          "Mattis.",
          "Sodales."
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "short description Felis vitae ultrices vehicula felis dolor tortor consectetur adipiscing felis.",
      "long_description": "long description Lectus aenean ultrices mollis suscipit consectetur morbi sed rhoncus ultrices id i, vehicula nisi finibus mi consequat rhoncus, vulputate accumsan diam rhoncus lobortis fringilla curabitur, sem tempus lacus faucibus est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacus.",
          "Au.",
          "Porttitor."
      ]
    },
    {
      "name": "Freecast",
      "short_description": "short description Eti ante dignissim nam donec lectus justo et at eu.",
      "long_description": "long description Tortor donec vehicula au lectus lectus cras mi. Aliquam consequat ultricies imperdiet scelerisque faucibus finibus. Vitae amet mattis ultrices enim at lorem, enim purus dui euismod leo pellentesque faucibus commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maecenas.",
          "Pharetra.",
          "Tristique."
      ]
    },
    {
      "name": "Sealine",
      "short_description": "short description Vestibulum mattis mauris maecenas bibendum purus vehicula ut natoque tempus.",
      "long_description": "long description Suscipit condimentum in purus rhoncus. Vitae nunc i elementum. Proin facilisis eros lectus cursus tortor curabitur sagittis sagittis dui, laoreet eu vestibulum eros felis, auctor dignissim at elit et leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Facilisis.",
          "Rhoncus.",
          "Lacinia."
      ]
    },
    {
      "name": "Polygan",
      "short_description": "short description Pretium morbi blandit ultricies sapien pulvinar. Finibus sem lacinia eros.",
      "long_description": "long description Purus augue eu diam maecenas, velit nulla viverra tempus nunc mattis sollicitudin mattis dui. Sodales ligula ultricies tempor quis, nibh ac a elit elit facilisis ut. A aenean quis suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Lacinia.",
          "Elementum.",
          "Gravida."
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "short description Natoque ultrices consequat consequat mi bibendum elit arcu maecenas mi.",
      "long_description": "long description Ipsum eros finibus turpis purus nam, aliquet etiam maximus id euismod a neque vel finibus turpis dictum accumsan arcu dui, dignissim risus hendrerit sapien eti, maecenas pellentesque massa enim eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "Iaculis.",
          "Nam."
      ]
    },
    {
      "name": "Forecore",
      "short_description": "short description Quisque lectus justo imperdiet ante suscipit. Pharetra etiam nunc etiam.",
      "long_description": "long description Justo maximus sed quis purus nulla metus. Maecenas felis neque morbi dignissim at aenean i enim at leo lacinia donec ligula mi, cras donec ultrices nulla quis vehicula turpis neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Id.",
          "Ex.",
          "Etiam."
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "short description A imperdiet commodo aliquam ante. In erat in laoreet adipiscing.",
      "long_description": "long description Magna tempor arcu erat natoque facilisis eget lobortis fringilla cursus risus natoque e in, aenean sit euismod magna nam rhoncus. Tristique bibendum curabitur gravida. Metus lacinia i aliquam mattis i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Justo.",
          "Eu.",
          "Nunc."
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "short description Nisi gravida leo et turpis cursus sodales rhoncus vel faucibus.",
      "long_description": "long description Nulla finibus natoque gravida nisi ex ex. Justo vestibulum a quisque amet tempor, nulla ipsum sit tortor neque cras lectus. Blandit elementum accumsan justo dui nulla, purus tincidunt felis ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Tristique.",
          "Tempus.",
          "Id."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Vulputate sollicitudin vulputate consectetur maximus. Nisi maecenas dui e in.",
      "long_description": "long description Placerat a pulvinar finibus nisl magna nulla adipiscing. Diam ex posuere maximus. Tristique placerat enim nam, suscipit dolor lacus dolor, donec erat auctor consectetur fringilla, tempor sit tincidunt id ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Faucibus.",
          "Ex.",
          "Vitae."
      ]
    },
    {
      "name": "Nitrocam",
      "short_description": "short description Est amet curabitur maecenas cras maximus, eros augue lacus sem.",
      "long_description": "long description Mauris dui dignissim augue suscipit aliquam. Facilisis elit pulvinar nunc. Mauris placerat gravida dui finibus. Enim cursus adipiscing e. Etiam natoque donec justo lobortis nunc auctor. Gravida ligula quisque vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Bibendum.",
          "Lacinia."
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "short description Maecenas sit id felis gravida risus auctor. Nisi mauris turpis.",
      "long_description": "long description Dignissim nisi ipsum at imperdiet. Gravida ante vel tempus lorem. Neque amet lectus ante tempus. Ornare vulputate vestibulum lacus, lacinia placerat diam facilisis erat pharetra cras. Maximus bibendum placerat nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "In.",
          "Augue.",
          "Sed."
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "short description Pellentesque tortor i condimentum scelerisque morbi velit ultricies consectetur faucibus.",
      "long_description": "long description Sollicitudin et est dignissim felis auctor sapien. Dui elementum nulla tempus i e. Pulvinar turpis gravida tempor faucibus i. Aenean viverra placerat in. A dictum ac justo. Ultrices lectus arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisi.",
          "Elementum.",
          "Iaculis."
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "short description Viverra sit imperdiet iaculis diam elementum aliquet porttitor sagittis tempor.",
      "long_description": "long description Mattis cursus eget nisi elit, lacus elit scelerisque consectetur ipsum a nisl ipsum, sed condimentum cursus pulvinar condimentum, purus viverra adipiscing magna. Maecenas eros arcu ac turpis eti cursus nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Mollis.",
          "Pharetra.",
          "Enim."
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "short description Cras pharetra eros adipiscing donec, tristique sodales magna etiam eti.",
      "long_description": "long description Nibh consequat ultrices purus faucibus sem eu purus eget accumsan sem quisque eros aliquet. Eti vestibulum natoque metus, porttitor amet donec lorem sapien lectus gravida. Vulputate metus dignissim i a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Nisi.",
          "Natoque.",
          "Pharetra."
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "short description Faucibus rhoncus magna consectetur pulvinar. Au lectus ipsum porttitor neque.",
      "long_description": "long description Commodo enim nisl nisi condimentum in i. Tortor pretium posuere in erat. Consectetur in cras sagittis turpis lacinia purus au ultricies etiam sodales auctor eros amet orci sollicitudin mi ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sollicitudin.",
          "Suscipit.",
          "Lacinia."
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "short description Tempor proin hendrerit ac mattis. Suscipit mattis eti quis rhoncus.",
      "long_description": "long description Justo sed au fringilla ac. Nunc orci fringilla tempor. Turpis lobortis vehicula laoreet curabitur, lacinia at dolor commodo ante nam mattis consequat arcu, sagittis ex curabitur nunc tempor nunc sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Ut.",
          "Accumsan.",
          "Tincidunt."
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "short description Natoque placerat lacinia neque bibendum ac. Non e metus bibendum.",
      "long_description": "long description Eros vel natoque scelerisque vestibulum. Risus leo diam turpis. Fringilla ultricies neque vestibulum vehicula accumsan, accumsan enim erat vestibulum. Sed enim donec euismod finibus. Sed etiam aliquam metus quis ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Sem.",
          "Proin.",
          "Dui."
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "short description Pellentesque eros faucibus id eu est sodales. Vel aliquam porttitor.",
      "long_description": "long description Imperdiet in ipsum neque suscipit ex sodales ex aliquam lectus nisi. Ultricies neque eu at gravida iaculis, aenean lobortis facilisis erat enim eros adipiscing a mi quisque tempor neque lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Donec.",
          "Nibh.",
          "Lorem."
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "short description Orci rhoncus dictum tempor rhoncus, id augue at dictum curabitur.",
      "long_description": "long description Magna curabitur ante sit ultrices. Rhoncus gravida maximus elit, lobortis lacinia nisl a euismod. Tortor e tempor hendrerit proin justo tortor non. Hendrerit maecenas et et metus lacinia lectus maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Leo.",
          "Amet.",
          "Velit."
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "short description Leo velit id adipiscing arcu. Lacus finibus metus lacinia dui.",
      "long_description": "long description Pellentesque eti ante facilisis hendrerit. Erat i bibendum arcu sed et elementum tincidunt vestibulum risus cursus, cursus dolor pellentesque nisi metus posuere. At sodales turpis quis sed neque imperdiet maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "Maximus.",
          "Nunc."
      ]
    },
    {
      "name": "Kancom",
      "short_description": "short description Eu scelerisque rhoncus purus eti, tempor vitae tortor ultrices elit.",
      "long_description": "long description Neque consectetur lorem lobortis pellentesque vehicula augue nisl blandit sollicitudin ac mi sodales dictum bibendum, natoque gravida lectus porttitor quis, hendrerit lectus nam massa magna. Eti sed maecenas in gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Pharetra.",
          "Cursus.",
          "Sapien."
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "short description Quisque tempor iaculis scelerisque ligula ex adipiscing, commodo elementum eu.",
      "long_description": "long description Mauris viverra aenean ex sodales, aliquet cras at ultricies. Sodales natoque enim vitae eget condimentum maecenas. At sodales hendrerit elit aliquet sagittis. Suscipit natoque at sollicitudin lacinia. Massa lacinia justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Fringilla.",
          "Ut.",
          "Commodo."
      ]
    },
    {
      "name": "Playtech",
      "short_description": "short description Aliquam consequat pulvinar erat pellentesque elit natoque ipsum hendrerit dolor.",
      "long_description": "long description Dolor turpis tempus vehicula leo. Vehicula quisque erat sem, eros vulputate consequat aliquet nibh curabitur tristique purus sollicitudin tortor pellentesque tristique consequat. Morbi tempus ut diam mollis quisque mi proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Amet.",
          "Finibus.",
          "Blandit."
      ]
    },
    {
      "name": "Airconix",
      "short_description": "short description Pharetra sit eu ante tempor. Maecenas dolor adipiscing quis dictum.",
      "long_description": "long description Elit tempor pulvinar tempor eros, imperdiet sem vehicula tempor tempus ornare, i dignissim ut vehicula hendrerit pulvinar, massa condimentum purus tristique adipiscing posuere sapien. Tempor magna tincidunt posuere non ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Accumsan.",
          "Suscipit.",
          "Eti."
      ]
    },
    {
      "name": "Polygan",
      "short_description": "short description Nisl a dolor sapien etiam etiam. Mauris vulputate iaculis au.",
      "long_description": "long description Quisque vel fringilla ultricies nam quisque sodales i. Pellentesque etiam bibendum leo blandit. Mi arcu elit ultricies. Est aenean facilisis vestibulum. Nulla justo ligula ac viverra quis condimentum pellentesque au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
          "Maximus.",
          "Tempus.",
          "Euismod."
      ]
    }
  ];

Cases['Default'] = {
  services: services ,
  user: {
    isLogged: true,
    expiresAt: Date.now() + 3600000,
    isAdmin: true,
	  canImpersonate:true
  }
}

export default Cases;