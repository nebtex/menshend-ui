import ServicesPanel, { IServicesPanelProps } from '../ServicesPanel';
let testLogo = require('../../../../assets/testLogo.svg');
let Cases : {[id:string]:IServicesPanelProps} = {};

let services = [
    {
      "name": "Nitrocam",
      "short_description": "This is the service short description",
      "long_description": "long description Adipiscing adipiscing accumsan nulla imperdiet, ipsum tortor sodales vehicula est. Tincidunt mi et justo sagittis morbi lobortis orci diam mi felis porttitor, diam orci magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description Iaculis facilisis orci faucibus nam tempor mattis. Rhoncus e fringilla vestibulum dignissim dui, accumsan augue tempor purus vestibulum ornare proin, dolor dolor elementum sodales pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Faucibus placerat eu arcu ligula. Purus nisl quis aliquet mollis sagittis rhoncus, vestibulum est i sed, et in tempor felis massa lacinia consequat sagittis scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Condimentum lacinia adipiscing dictum purus. Pulvinar faucibus a nam ultricies ornare consequat, ornare cras accumsan felis, sit ante enim pellentesque erat, scelerisque eu quis dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt pretium morbi lobortis mollis cursus purus. Tortor vehicula etiam pharetra ultricies proin neque. Arcu lorem dolor ac vestibulum ut proin, natoque vestibulum ut vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Metus consequat ornare aliquet dignissim est. Hendrerit imperdiet maecenas ligula commodo ultrices. Lacus lectus non euismod tempus tristique dolor sit elementum id, aliquet tempor ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Lectus amet gravida maecenas quis tempor e. Tincidunt sollicitudin risus ornare suscipit lacinia, elit quisque cras pretium id sed. Vel non iaculis ex ligula consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "This is the service short description",
      "long_description": "long description Consectetur eget rhoncus neque quisque ac, rhoncus enim etiam natoque cursus. Enim ipsum ex laoreet elit, non maximus non erat morbi lacinia blandit amet hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "This is the service short description",
      "long_description": "long description Nulla turpis hendrerit lobortis ultricies. Diam cursus eti vulputate elit consectetur sapien. Ligula aliquam placerat at porttitor. Dui massa vehicula pretium ex sagittis aenean ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "This is the service short description",
      "long_description": "long description Ultrices gravida vitae etiam erat tincidunt magna tempor lacinia sem vitae, hendrerit adipiscing lacinia tempor. Eu aenean purus massa velit vestibulum consectetur. Quisque ultricies proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus in metus cras commodo bibendum mauris vulputate mi enim, amet augue rhoncus mattis neque. Eti au vestibulum cursus id at. Iaculis posuere enim vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "This is the service short description",
      "long_description": "long description Vitae morbi tristique tristique lacinia mi, aliquet placerat consectetur euismod, amet rhoncus sit a facilisis a, id pharetra scelerisque elementum donec orci, facilisis nibh adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus lobortis maecenas tempus bibendum porttitor. Eros natoque ac ex morbi cras, mattis lacus felis etiam nam dolor erat quis gravida ligula elit laoreet vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "This is the service short description",
      "long_description": "long description Ac proin ex tortor lobortis turpis diam lacinia sodales ipsum. Suscipit viverra eros lacinia auctor turpis metus curabitur risus commodo, ex amet condimentum ac purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Elementum pretium etiam justo etiam. Nam eu fringilla tortor. Hendrerit euismod est augue, rhoncus diam posuere pulvinar sed sit mi i imperdiet est gravida porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "This is the service short description",
      "long_description": "long description Eti nisi nibh commodo tempor. Scelerisque ipsum imperdiet lacinia fringilla cras consectetur sit. Morbi lorem lorem laoreet ligula ante pulvinar morbi, mi proin fringilla sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description Nulla consequat nam sodales euismod ex amet tempus ac i lorem elementum vitae faucibus maecenas magna vestibulum iaculis, erat iaculis vestibulum morbi, posuere natoque lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "This is the service short description",
      "long_description": "long description Proin lobortis consectetur posuere pellentesque, metus natoque commodo sed erat au. Commodo amet sed justo pellentesque sagittis nisl metus ac dignissim. Scelerisque blandit aliquam nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "This is the service short description",
      "long_description": "long description In blandit quis ornare adipiscing sodales adipiscing. Arcu i enim facilisis sapien. Maximus sollicitudin donec aenean curabitur suscipit maximus tristique, nisi laoreet lacinia cursus ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description Porttitor aenean neque neque dictum quis in tristique dictum. Mi tincidunt enim pulvinar iaculis tincidunt ornare, maecenas sem vehicula nulla suscipit, enim diam aliquam aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "This is the service short description",
      "long_description": "long description Vitae erat tempor aenean mattis placerat consequat laoreet, lectus elementum ante nibh vitae, a ante blandit imperdiet eget sapien maecenas. Gravida natoque amet vestibulum nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus finibus at accumsan eget auctor eget ex, eros ultricies sodales enim. Elit mauris imperdiet a. Lectus ligula viverra accumsan dolor dignissim sagittis elit ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Protheon",
      "short_description": "This is the service short description",
      "long_description": "long description Mi proin facilisis est non eti, vestibulum massa tristique augue sollicitudin nulla morbi adipiscing. Porttitor lacinia auctor justo morbi nisi. Nisl vel quis fringilla rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Finibus posuere pretium scelerisque erat ipsum. Sodales lobortis blandit nam sed, rhoncus nam au hendrerit condimentum, quisque ut purus tortor pellentesque eti aliquet elementum pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Bibendum vehicula accumsan vel dui in velit sodales lectus vestibulum ultrices nisl augue at turpis ac pellentesque in au e. Mauris condimentum consequat hendrerit rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Mi lacinia maecenas sagittis dolor, tincidunt consequat bibendum lacinia. Non posuere nunc non natoque maximus commodo maecenas consequat nam condimentum nam et donec placerat ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Ut justo metus massa ut ex bibendum massa, elit ipsum quis scelerisque massa, nisl sodales arcu ex est adipiscing lobortis dignissim quis. Orci ut quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt ut sodales est ultricies. Non ipsum au mauris posuere. Vitae dictum ornare eget i pulvinar dolor nam. Mi velit consectetur sagittis dui arcu rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "This is the service short description",
      "long_description": "long description Gravida sapien nibh sapien sollicitudin porttitor lorem ex justo lorem suscipit eti arcu lobortis eti nisi quisque, sapien pulvinar hendrerit imperdiet est mauris nibh maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Baramax",
      "short_description": "This is the service short description",
      "long_description": "long description Non velit natoque elementum dictum nibh lacinia. Dictum aenean ex diam, quis nulla facilisis neque, i augue dui tempus. Fringilla nulla arcu ac adipiscing sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Et bibendum leo lobortis consectetur est lacinia turpis sed consequat maecenas maecenas consequat ultricies, magna eros placerat ultrices blandit, posuere gravida erat dignissim sodales elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "WestGate",
      "short_description": "This is the service short description",
      "long_description": "long description E faucibus et sit neque turpis ante dolor proin auctor dignissim, sit rhoncus blandit laoreet nisi. Porttitor placerat lacus viverra. Tincidunt iaculis sapien leo sem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "This is the service short description",
      "long_description": "long description Gravida gravida porttitor a gravida eros tincidunt imperdiet. Laoreet risus au elementum ante tempus ante velit. Iaculis arcu cursus suscipit posuere vitae quisque in dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Magna velit est bibendum enim cras euismod ultricies. Ut cras placerat eu. Quisque lorem metus etiam quisque cursus, scelerisque leo at justo natoque tempus aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Dui tristique eget imperdiet vitae nibh massa magna. Magna mattis vitae eget arcu lobortis risus nibh cras morbi nibh accumsan turpis turpis tempor turpis risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Opticast",
      "short_description": "This is the service short description",
      "long_description": "long description Sodales euismod nulla consectetur nibh sodales, ac proin amet eu est non dolor lobortis ornare. Tincidunt maximus id justo. Pulvinar tincidunt tristique pellentesque dolor mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor sit vel accumsan viverra ligula. Vel natoque maximus dictum. Facilisis eget aenean lacinia. Tempus iaculis velit mollis. Proin vel blandit tortor ipsum vehicula gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "This is the service short description",
      "long_description": "long description Accumsan rhoncus id maximus sem facilisis, cras gravida morbi etiam nam. Ipsum magna rhoncus tincidunt pharetra pretium risus vestibulum lobortis consequat ligula finibus ornare facilisis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "This is the service short description",
      "long_description": "long description Metus au id purus dignissim. Ligula faucibus elit lacinia tempor faucibus commodo. Finibus fringilla in sem lacinia lobortis sit. At nibh cursus eros vestibulum id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Forecore",
      "short_description": "This is the service short description",
      "long_description": "long description Hendrerit placerat augue condimentum mauris nulla amet. Lectus ultricies magna tempor adipiscing. Mi mollis blandit dignissim adipiscing lacinia quisque pharetra, metus tristique faucibus pharetra finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Sem tincidunt dui proin sit, iaculis in pellentesque dignissim a sollicitudin. Tortor i augue commodo hendrerit. Viverra bibendum rhoncus tristique a velit et lacinia id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Consectetur finibus maximus etiam vulputate, ut e quisque at elementum. Lacinia tortor ante elementum vulputate, consectetur iaculis et vestibulum aliquet. Metus sit sollicitudin ut vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "This is the service short description",
      "long_description": "long description Velit enim mollis rhoncus tincidunt ante morbi felis, pellentesque vestibulum erat eti. Proin mi risus hendrerit ultrices. Aliquet augue tortor ornare tempus, risus id pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "This is the service short description",
      "long_description": "long description Pharetra vulputate euismod enim facilisis, eros faucibus tempus aliquam suscipit, eti eros nunc proin et dictum dolor, sit et bibendum velit cras maecenas risus ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Accumsan arcu ut ante a. Est lectus sed dui. Tempus ante id quisque, facilisis sem ipsum pulvinar ante ultricies, viverra vestibulum cras consectetur neque enim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Neque tempus iaculis eget turpis. Lectus tincidunt aliquam adipiscing. Id lobortis cursus sapien pellentesque commodo proin eget. Donec placerat nam placerat tempor facilisis elit ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis quis turpis sapien magna adipiscing at bibendum ex nunc, cursus vitae id sit elit maximus au posuere magna, in i aenean vulputate sollicitudin maximus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "This is the service short description",
      "long_description": "long description Faucibus aenean aenean ipsum lacus donec metus vulputate au non donec. Sollicitudin arcu quisque aliquet in dictum. Orci cursus aliquam purus. Condimentum auctor curabitur amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "This is the service short description",
      "long_description": "long description Condimentum etiam ligula placerat a, auctor ligula au ac i consectetur sodales tristique lectus. Placerat massa eu placerat ornare nibh imperdiet et. Ex pellentesque iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "This is the service short description",
      "long_description": "long description Sit cursus proin euismod iaculis maecenas curabitur ultrices ex fringilla dolor nam justo felis. Felis vulputate ultricies diam enim posuere. Turpis hendrerit nunc mauris curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "This is the service short description",
      "long_description": "long description Elit eros lorem placerat facilisis, tempor cursus aliquet quis vestibulum lacinia. Turpis gravida mi ante, cursus mauris erat sem ante natoque posuere lacus enim facilisis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Storex",
      "short_description": "This is the service short description",
      "long_description": "long description Cras ultricies maximus iaculis suscipit facilisis nulla. Porttitor quis id sapien, leo dictum tincidunt ligula, purus ac cras auctor. Non eros euismod felis consequat ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description Sagittis vulputate massa sollicitudin lacinia. Cras quis nibh non gravida sagittis non natoque lobortis risus, lacus augue auctor arcu, diam nisl velit justo scelerisque ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Curabitur pharetra elementum fringilla maecenas erat sollicitudin, nibh magna donec tristique, mollis consectetur nisi justo morbi maximus pharetra lorem, mollis laoreet natoque donec ornare sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit amet porttitor magna sem leo bibendum dui dui ultrices placerat vehicula eti, ultrices condimentum nibh imperdiet cursus elementum vulputate magna nisi mauris maximus sit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "This is the service short description",
      "long_description": "long description Ultricies vulputate sagittis non sit. Purus id imperdiet morbi lacinia quisque hendrerit turpis adipiscing curabitur, risus ultrices magna ornare. Vel finibus cras eros aenean sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis et dolor maecenas donec erat bibendum sagittis natoque i. Fringilla nisl aenean nam, nulla a vehicula sapien nulla imperdiet. Maximus metus fringilla commodo est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Euismod commodo dolor maximus est rhoncus eget viverra purus rhoncus ornare, euismod vel natoque ornare. Eget velit lacinia vitae. Dictum maximus dolor dui est amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum consequat morbi turpis hendrerit elit adipiscing tortor blandit nisi lacinia. Ultricies i lacinia scelerisque sodales in nam. Ac sit sem neque. Lacinia sollicitudin blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt proin etiam gravida justo tristique, eu pretium facilisis faucibus dolor ac, porttitor consectetur aenean maximus adipiscing dignissim natoque, mollis commodo vel nibh augue mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description Iaculis placerat mattis tristique sem viverra sodales, felis a tincidunt nulla sodales lobortis tristique tristique lectus augue pellentesque augue. Ipsum eros commodo morbi mi facilisis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Eu donec pharetra quisque id purus lacinia risus, facilisis lacinia augue pulvinar. Maximus a vitae nibh dignissim tempus magna neque. Felis vitae aenean in faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "This is the service short description",
      "long_description": "long description Tempus finibus tincidunt porttitor cursus. I facilisis vestibulum maecenas metus placerat orci natoque eros. Tristique iaculis neque neque, gravida cras cras dictum, sem sollicitudin eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "This is the service short description",
      "long_description": "long description Sit nunc laoreet amet quisque iaculis. Aliquet facilisis lectus vel, pellentesque ligula ultrices etiam, curabitur ut lacus eu nisi pulvinar quis eu gravida scelerisque tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "This is the service short description",
      "long_description": "long description Eu nibh ligula quis erat orci etiam justo aliquam, i velit laoreet tempus, sit dignissim massa facilisis nunc accumsan, proin pharetra arcu euismod curabitur viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Consequat facilisis eget eu etiam auctor. Facilisis porttitor et euismod morbi. Pretium mi ante finibus. Eti cursus diam at amet quis tristique vitae vulputate pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description I sem sollicitudin facilisis mollis. Arcu at sed vehicula donec arcu a. Vehicula nam laoreet pulvinar. Sagittis enim mollis felis. Quisque sed laoreet ornare sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "This is the service short description",
      "long_description": "long description Pulvinar mauris hendrerit sollicitudin maecenas. Facilisis vitae pellentesque ex i hendrerit eros. In natoque elementum scelerisque. Morbi pharetra adipiscing ex. Erat erat aliquet suscipit pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "This is the service short description",
      "long_description": "long description Tempus ligula gravida elit lacus arcu risus, pulvinar elit nibh sapien. Nisi felis eti lobortis, sagittis fringilla magna tortor. Ultricies ex nam etiam purus lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "This is the service short description",
      "long_description": "long description Facilisis eget posuere augue mauris vulputate accumsan magna placerat adipiscing elementum tempor imperdiet etiam consectetur. Posuere ut et bibendum risus ante. Dolor turpis proin donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquet dignissim fringilla metus felis. Facilisis diam natoque nam. Posuere sit quisque nisi, at e leo placerat tortor amet ornare natoque finibus. Ac sodales dolor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Kancom",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia at bibendum donec rhoncus. Eget bibendum mollis finibus suscipit eu. Cursus justo tempor sit nunc sagittis pulvinar neque amet. Porttitor eu mollis e lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Iaculis euismod suscipit pellentesque vitae orci felis. Bibendum erat lacinia nibh dignissim lobortis fringilla ornare. Auctor risus nisi lectus mauris mattis dignissim eget natoque iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "This is the service short description",
      "long_description": "long description Nisl sagittis velit dictum aliquam. Sem nunc neque adipiscing massa sodales. Consectetur nam dignissim et etiam. Vulputate erat vehicula sit elit, blandit maecenas nisi nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "This is the service short description",
      "long_description": "long description Imperdiet nisi viverra lorem turpis. Consequat pellentesque eti sapien, dictum vitae eu etiam bibendum, commodo quis tristique sodales accumsan. Mollis morbi eti sit mollis metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet massa mattis adipiscing ac felis, laoreet proin sapien quis scelerisque natoque mattis tempor, mattis magna cras nisi eros. Tristique natoque etiam elit id dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Placerat elit vulputate leo tortor ac bibendum viverra ligula ligula magna. Finibus lacus mollis cursus ut maximus enim. Enim lacinia bibendum hendrerit velit tortor pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Curabitur natoque commodo hendrerit pulvinar orci vehicula iaculis tincidunt vestibulum eget ut est gravida fringilla. Suscipit erat au mi. Felis enim aliquam sodales ex fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description Porttitor morbi vehicula vulputate accumsan erat ante, risus rhoncus justo eros finibus. Placerat non risus leo iaculis mattis. Bibendum id tempus lorem pulvinar in natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "This is the service short description",
      "long_description": "long description Ex cras ligula cursus ornare, lectus ipsum cursus vitae in sagittis lobortis orci velit mattis vestibulum, tristique cursus elementum nibh. Pretium nunc lacus auctor dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Nulla viverra aenean lectus turpis lorem nisl. At morbi iaculis dui ultricies. Blandit scelerisque porttitor a. At sagittis dolor aliquet at nibh vulputate id a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "This is the service short description",
      "long_description": "long description Lacus velit erat lacinia ultrices consectetur vitae, arcu tristique lacus velit. Risus risus placerat amet viverra porttitor nunc. Sed pretium est risus nam sed tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit sed consequat bibendum a e maecenas in tincidunt e vel dignissim blandit, ex placerat nulla erat. Ligula purus mattis leo sit bibendum sed commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Keycast",
      "short_description": "This is the service short description",
      "long_description": "long description Mauris quisque tristique ex nibh diam elementum sagittis pellentesque, amet ornare au rhoncus, e diam risus tristique, metus sed turpis ultrices elit elementum risus dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Connic",
      "short_description": "This is the service short description",
      "long_description": "long description Non vulputate id nunc iaculis, commodo natoque maecenas aliquam, sollicitudin imperdiet aliquet vitae imperdiet. Risus quis donec vestibulum, consequat quis proin vehicula. Suscipit e lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor eu adipiscing etiam in nisi tempor dolor elementum lacinia velit proin. Aenean amet placerat tempus metus elit nulla orci in, nisi pellentesque natoque euismod.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus lectus id tristique i suscipit porttitor turpis. Cursus nisl velit turpis blandit nam. Pulvinar viverra lorem ultrices imperdiet. Enim lacus et orci magna sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Et eti lectus ultrices blandit, imperdiet ipsum in mi ex sit, maximus blandit justo sit dignissim gravida, sodales hendrerit porttitor i aliquam ornare lorem tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Pharetra rhoncus nulla justo purus bibendum augue nulla tristique nunc, mauris lacus in rhoncus, metus pulvinar magna est. Dignissim sollicitudin lacinia maximus, sit massa risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Protheon",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia augue proin vulputate justo tempus est, faucibus nunc vitae sed, nulla enim aenean ex aliquam cursus. Aenean quisque nisl ipsum fringilla. Ornare finibus risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Nulla pulvinar pretium bibendum curabitur ultricies. Consequat ultricies iaculis sollicitudin donec quisque nibh, sollicitudin ornare ipsum cras in lectus pulvinar. Est curabitur dignissim est cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "This is the service short description",
      "long_description": "long description Nisl eget nulla scelerisque augue bibendum lectus viverra lacinia amet non, cursus fringilla vestibulum at. Sollicitudin sapien mollis adipiscing vitae. Pellentesque eros tortor justo auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Protheon",
      "short_description": "This is the service short description",
      "long_description": "long description Dui purus sit dignissim sodales. Orci consectetur nibh maximus hendrerit tempor tempus dictum, pretium neque justo etiam enim proin viverra dolor neque turpis ornare nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis vitae blandit ultrices pharetra elit pulvinar, condimentum sodales natoque neque, sapien mollis turpis elementum eget fringilla eti. Curabitur i diam eu at eu eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "This is the service short description",
      "long_description": "long description Est purus justo au ultrices dignissim risus id. Bibendum at condimentum nam sodales. Lobortis proin bibendum elit ut lobortis velit. Morbi tincidunt natoque amet tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Purus etiam ultrices au ac nam et nisl, commodo nunc mi dui pellentesque sodales e blandit vehicula, enim faucibus pretium dui magna elementum in vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description Sollicitudin lorem ex ex condimentum scelerisque justo vitae hendrerit. Risus ultrices purus mollis aliquam suscipit vestibulum quisque dignissim. Nibh posuere et consequat pulvinar finibus aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "This is the service short description",
      "long_description": "long description Lacus purus in leo vehicula condimentum metus auctor, pharetra lorem elit orci erat, finibus massa natoque sodales. Imperdiet magna sed au cursus a arcu et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "This is the service short description",
      "long_description": "long description Faucibus ligula nunc sit augue pretium turpis lectus auctor dolor. Viverra leo ipsum leo. Mattis amet sodales nisi, hendrerit ultrices tristique consequat quisque in nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus lectus justo risus ipsum lectus. Id morbi auctor hendrerit elit lobortis ipsum ante. Porttitor lacus i auctor. Condimentum purus bibendum sed, commodo diam ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor suscipit at tortor turpis eros maecenas proin magna. Ut id i eros eget ligula e pellentesque lobortis, ultrices ligula donec purus nam lacus natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Fringilla rhoncus a quis accumsan i neque lorem morbi, porttitor finibus nisi auctor felis, lacinia donec lacinia curabitur accumsan augue, sem leo dictum accumsan e.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description Euismod scelerisque fringilla purus eros sit justo sagittis, turpis blandit porttitor diam a ut justo sollicitudin i lorem, consequat sit turpis sit, posuere in neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Eu pharetra nunc ligula et. Imperdiet curabitur justo pellentesque e. Natoque ultrices mattis diam consectetur in. Morbi elementum mauris condimentum nulla condimentum lobortis posuere suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium dignissim nisl donec mattis mattis massa quisque elit ipsum, accumsan ac massa lacinia. Tincidunt iaculis velit lobortis, sem natoque euismod ultricies in lobortis ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "This is the service short description",
      "long_description": "long description Sem leo commodo placerat consequat, enim euismod mauris placerat. Consectetur tortor nibh purus viverra. Dictum id placerat pretium natoque. Ac pretium turpis nisl sagittis at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "This is the service short description",
      "long_description": "long description Eget non eget cras bibendum. Leo hendrerit ac arcu condimentum curabitur pulvinar metus ipsum. Lobortis sit lacinia consequat condimentum, vehicula quis aliquam finibus laoreet tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description Elit ante adipiscing cras scelerisque. Ex fringilla consequat sit sit pulvinar. Dui quis pretium maximus. Porttitor arcu diam et ligula, pharetra metus a enim quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Sophis",
      "short_description": "This is the service short description",
      "long_description": "long description Euismod porttitor lobortis iaculis e ornare. Proin consectetur hendrerit cras cras. Vitae lobortis imperdiet maecenas ut. Dictum lacus pellentesque nulla. Tortor condimentum fringilla sem imperdiet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum pharetra commodo cras curabitur arcu diam auctor, ex risus cras tempor vitae. Proin curabitur et rhoncus. Consectetur etiam laoreet pellentesque pulvinar neque pharetra pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "This is the service short description",
      "long_description": "long description Accumsan pretium proin leo iaculis. Lorem accumsan tincidunt lacinia ligula scelerisque purus dictum sagittis at, auctor id dignissim eget pellentesque tincidunt tempor cursus tincidunt et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "This is the service short description",
      "long_description": "long description Lectus elit morbi viverra diam a, pharetra cras accumsan mi. Lacinia rhoncus faucibus dictum id lacinia eu auctor cursus e. Gravida vehicula fringilla condimentum a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "This is the service short description",
      "long_description": "long description Eros hendrerit finibus non cras sodales, iaculis tristique sodales mi viverra. Facilisis pretium metus augue mollis porttitor neque, sit auctor dictum aliquam etiam auctor blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Amet justo lobortis lorem aliquam adipiscing. Vulputate nunc enim velit. Lectus amet sapien sollicitudin. Erat non amet augue erat, curabitur enim nisi arcu ante auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "This is the service short description",
      "long_description": "long description Au bibendum ex vestibulum ante. Suscipit ex maximus mi facilisis maecenas, cras sagittis rhoncus blandit porttitor. Id metus vestibulum laoreet, nisl amet dictum nam scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Viverra et nisl aliquam dignissim consequat maximus lacus, lorem ut nibh ut. Auctor enim aenean fringilla. Felis augue adipiscing lacinia erat elit mollis eros commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "This is the service short description",
      "long_description": "long description Etiam proin aenean pharetra leo risus lacinia viverra non. Donec ultrices tempor tortor neque accumsan hendrerit arcu eu justo etiam bibendum euismod dolor sodales ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "This is the service short description",
      "long_description": "long description Etiam cursus e felis elit. Iaculis etiam hendrerit sem sagittis in vulputate ornare sollicitudin euismod. Lacinia dictum curabitur donec scelerisque. Quisque nam bibendum id tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "This is the service short description",
      "long_description": "long description Erat vestibulum id felis eu elementum finibus aenean. Curabitur suscipit hendrerit elit curabitur bibendum lacinia quis. Diam a diam tortor augue. Ut nam erat hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Citisys",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet viverra pretium diam consequat ante lectus tristique. Nibh lorem quisque sapien. Iaculis cursus suscipit mi quis. Mauris finibus quisque aliquet rhoncus nulla at sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia ut aenean id nisl. Facilisis arcu a ultricies, accumsan augue pharetra bibendum tortor. Posuere i eros tristique massa, lacinia ipsum cursus quisque posuere nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "This is the service short description",
      "long_description": "long description Sed gravida adipiscing augue mollis tristique dignissim faucibus, commodo purus laoreet auctor, ornare augue ultricies e velit at. Pellentesque velit vestibulum aliquet magna vestibulum non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis elit laoreet augue gravida. Lacinia mattis massa ornare lectus ligula. Rhoncus amet ante donec iaculis vitae vitae sit sem neque, eget proin i vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit nibh placerat ipsum tempus, laoreet leo pellentesque lacinia id. Neque quis vel eros aenean elit orci diam bibendum magna pulvinar risus ligula proin turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "This is the service short description",
      "long_description": "long description Lacus sit condimentum orci ultrices commodo vitae adipiscing nisi elit. Scelerisque mollis sagittis dolor vitae ornare mi proin. Nunc sem auctor nisi tristique ac pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "This is the service short description",
      "long_description": "long description Placerat mollis ligula ornare magna magna. Quisque euismod donec lacus. Sem at sapien placerat a facilisis rhoncus non. Sit erat lectus e sit ac vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus adipiscing sem erat facilisis iaculis eu. Posuere e non pellentesque ornare porttitor metus neque. Quisque i in a e suscipit, non mi vitae arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description A nisi sagittis lobortis etiam commodo arcu commodo. Ante ultricies imperdiet ipsum tempus sed, cras vehicula nisi dictum condimentum, est erat rhoncus felis adipiscing enim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Forecore",
      "short_description": "This is the service short description",
      "long_description": "long description Suscipit est proin finibus metus curabitur tincidunt vitae. Erat consequat orci maximus mattis au. Aliquam donec donec imperdiet. Fringilla nam ultrices sed nulla augue cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "This is the service short description",
      "long_description": "long description Ornare sapien lectus tempor blandit. Nisi blandit posuere tempor erat porttitor velit gravida ipsum diam nisi tempor, eu tincidunt ac faucibus. Magna est sagittis lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Imperdiet euismod lorem tortor ligula pulvinar morbi viverra pulvinar ornare, au finibus lobortis viverra. Lobortis gravida est purus gravida quis eget consectetur eget imperdiet diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description Tempor vel metus pharetra dignissim dui maximus, fringilla morbi sem consequat ante fringilla non id finibus finibus, accumsan nibh a nam. Enim lacinia at mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "This is the service short description",
      "long_description": "long description Iaculis erat purus i pellentesque lacus blandit mi vestibulum. Pharetra cras dolor dignissim dignissim. Aliquam eti nisi leo. Nam natoque ligula cursus eros natoque aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Citisys",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum faucibus est mi turpis proin. Et mauris pharetra tincidunt turpis scelerisque. Ligula sollicitudin quisque diam faucibus mollis, hendrerit cursus scelerisque eu eget et aliquam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description Leo finibus elit leo vestibulum vulputate ornare ante vulputate, nibh cras ex velit mollis, ultricies lacus cursus ultrices eros sit. Felis ultricies justo est laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt ac a et amet. Mauris lobortis elit posuere nibh dictum natoque eti mi in tortor, massa donec tincidunt ac lorem quisque justo a tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description Lorem tristique dignissim porttitor ut erat blandit vel tincidunt justo, pellentesque sem ipsum laoreet. Sem mauris condimentum tincidunt maecenas sollicitudin natoque massa placerat mollis accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "This is the service short description",
      "long_description": "long description E sollicitudin id velit iaculis lacinia. Eu ante mollis scelerisque nunc lacinia. Sodales ex mi consequat tempor finibus. Sodales auctor posuere e nisl elit condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Natoque posuere sagittis turpis velit natoque. Ultrices erat quisque erat, rhoncus justo laoreet aliquam. Iaculis eros consequat nam adipiscing viverra i lacinia. Iaculis placerat mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "This is the service short description",
      "long_description": "long description Sem sit nunc et lacinia ante gravida sodales ex. Tortor finibus enim rhoncus bibendum metus, ex nibh natoque morbi lacus. Consectetur ipsum id ex tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "This is the service short description",
      "long_description": "long description Velit ante ante nisi lectus. Mollis pellentesque e suscipit. Aliquet donec aliquam mollis, erat elementum natoque maximus maximus metus enim, elementum cursus turpis i arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "This is the service short description",
      "long_description": "long description Accumsan natoque sodales condimentum commodo turpis in. Ex sollicitudin tempus amet ac, lorem neque fringilla eget, vehicula elit mauris bibendum. Consequat tempor consequat risus sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Vel dignissim posuere augue quis ligula elit ut. Porttitor dictum porttitor pretium est erat commodo. Nulla elementum neque dolor lorem, magna vulputate consequat ante tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Sit eros tempus sem mauris eu tristique consequat. Dolor maximus lobortis auctor velit vulputate. Laoreet ante natoque nisi aliquam, commodo velit dignissim condimentum mauris donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Fringilla e ipsum amet amet aenean lectus. Eti a ac vulputate consectetur pulvinar. Ac gravida natoque vestibulum, felis viverra tortor ac justo sapien eti orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "This is the service short description",
      "long_description": "long description Vehicula adipiscing commodo vel risus. Ultrices pellentesque quis at. Mattis a maecenas amet mauris sodales arcu. Risus tempor nisl tempor consequat mattis bibendum turpis placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Infracom",
      "short_description": "This is the service short description",
      "long_description": "long description Quisque nibh lorem nibh augue nulla maecenas vitae tincidunt turpis. Sed enim hendrerit ac. Mattis erat aenean consectetur, diam nibh massa vulputate gravida maecenas lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "This is the service short description",
      "long_description": "long description Pellentesque bibendum blandit nisl diam vel velit pulvinar. Dolor nam ligula ac. Pharetra in bibendum ultricies. Curabitur dui turpis posuere, tempor massa euismod ipsum metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "This is the service short description",
      "long_description": "long description Nibh imperdiet cras vestibulum nam elit eget neque donec magna tincidunt a et tempus. Donec lorem tristique euismod finibus, cras proin sed vehicula pellentesque mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Solexis",
      "short_description": "This is the service short description",
      "long_description": "long description Erat mauris accumsan gravida mattis donec tortor dictum pellentesque. Dignissim dictum ultricies vestibulum orci risus, lacinia curabitur erat viverra lectus fringilla, magna velit massa ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "This is the service short description",
      "long_description": "long description Tortor laoreet adipiscing a au. Ac maecenas auctor elit i risus massa magna a erat adipiscing lacus. Consectetur sapien vestibulum at aliquet adipiscing dignissim aliquam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Pharetra maximus et laoreet pretium elit in. Eros suscipit aenean eget est magna. Viverra ultricies tempor maximus, vitae id auctor porttitor aliquam. Vitae proin magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Non magna viverra massa dictum adipiscing suscipit augue. Proin nulla morbi lobortis sed vel i id quisque sapien sagittis suscipit elit lacus vestibulum ornare condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Kancom",
      "short_description": "This is the service short description",
      "long_description": "long description Eti enim proin nulla aenean quisque tortor ac. Aliquam quis blandit vehicula, sagittis consectetur au cras erat. Pulvinar ante ligula faucibus laoreet consequat au pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Keycast",
      "short_description": "This is the service short description",
      "long_description": "long description Leo bibendum orci aliquet felis vehicula sodales et. Tempus maximus magna ac. Nisi elementum ligula vitae. Purus bibendum pellentesque blandit, tristique quis in ultrices at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Bibendum maximus non fringilla ornare etiam nulla. Aliquam felis pharetra amet erat, quis commodo nibh lorem. Natoque posuere aliquet dignissim, nam dolor eu lacinia purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "This is the service short description",
      "long_description": "long description Cras ac maximus consequat quisque a scelerisque pharetra nunc leo tempor eget pulvinar mauris porttitor. Sapien nulla lacinia vel felis, lacinia pretium fringilla quisque eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Condimentum dignissim fringilla sapien ornare. Rhoncus ligula mauris nulla velit. Ut elit bibendum bibendum. Ornare natoque sollicitudin nisi dui nam metus. Cras lorem suscipit vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Fringilla at in ligula orci viverra euismod ac, metus finibus elementum enim nunc vitae hendrerit porttitor. Id ornare justo dui est blandit vitae lorem mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Solexis",
      "short_description": "This is the service short description",
      "long_description": "long description Eros iaculis erat lorem quis lorem cras, mauris dignissim condimentum nisl morbi lacus, maecenas fringilla nunc sagittis. Vehicula lorem aenean et, condimentum felis quis curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "This is the service short description",
      "long_description": "long description Magna donec lorem e dignissim. Dui id metus vitae felis purus. Eu vestibulum mi nunc placerat. Pharetra ultrices ipsum aenean placerat laoreet, velit dignissim tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Sophis",
      "short_description": "This is the service short description",
      "long_description": "long description Finibus auctor aliquet consequat enim euismod velit eti. Commodo non sem tempus ut. Finibus maecenas ante adipiscing. Proin ornare placerat metus magna justo metus arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description Maximus lacinia in massa nisi. Ligula diam gravida turpis fringilla faucibus felis. Sem non dui et. Viverra vel scelerisque non dui eget, lacinia blandit ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "This is the service short description",
      "long_description": "long description Vehicula adipiscing facilisis lorem diam erat. Tempus lacinia cras leo, sodales viverra eu magna. Purus iaculis pharetra dignissim i, lacinia imperdiet sapien finibus at vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "This is the service short description",
      "long_description": "long description Porttitor sodales nulla rhoncus tortor risus sapien iaculis scelerisque accumsan etiam lobortis rhoncus auctor lorem eros magna, pharetra vehicula consequat i. Nisi curabitur tortor elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Nunc non bibendum ornare amet sollicitudin nisi pharetra tristique, sollicitudin sapien diam ipsum. Tortor enim purus donec lacinia sagittis nibh pellentesque est neque laoreet adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Mattis aliquam massa tempor elementum tempor, donec neque pretium bibendum pretium tempor nulla finibus pretium, neque imperdiet facilisis hendrerit eu pulvinar, tincidunt purus lacinia consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Baramax",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus ligula vel nam aliquet ac lectus est nibh pulvinar leo nulla hendrerit vestibulum. Mi augue ligula augue sapien e sodales nibh tristique orci sit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Infracom",
      "short_description": "This is the service short description",
      "long_description": "long description Maecenas erat morbi enim ultricies nulla, amet diam arcu maecenas. Pellentesque risus sit scelerisque. Vel non mattis viverra aliquam. Consectetur proin nam purus ac laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Tempus at consectetur fringilla non lacinia metus hendrerit ultricies ipsum metus, proin massa nulla laoreet nunc ut natoque. Mollis iaculis eget scelerisque vulputate erat sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Leo cras condimentum eget tristique. Elit cursus orci donec. Quisque vel gravida purus sollicitudin augue ac enim vestibulum laoreet at. Pharetra vel vehicula faucibus magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "This is the service short description",
      "long_description": "long description Commodo viverra erat cursus laoreet. Sapien i lorem metus rhoncus tortor consectetur. A sagittis velit vulputate elit diam vitae ultricies, sodales lorem lacinia tincidunt nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis dui nam eros ultrices. Finibus et turpis enim dolor ac aenean. Dolor dolor pretium tristique, blandit aliquam suscipit faucibus tempus eros euismod donec suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "This is the service short description",
      "long_description": "long description Curabitur velit aenean vestibulum sagittis pulvinar. Risus lectus tortor euismod. Iaculis sed auctor dictum. Pulvinar tortor euismod porttitor mauris donec sed. Ultrices ac i nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "This is the service short description",
      "long_description": "long description Pharetra at ipsum lobortis vehicula et vitae pretium orci, augue a au est cras neque blandit dui. Iaculis ut velit hendrerit vitae nibh lacinia gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "This is the service short description",
      "long_description": "long description Maecenas dui justo viverra consectetur laoreet. Lacinia vestibulum euismod aliquam. Erat nibh massa nunc quis, augue nunc magna aliquet risus. E id au ornare lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Connic",
      "short_description": "This is the service short description",
      "long_description": "long description Tortor porttitor sodales eti ultrices arcu placerat aliquam au. Aenean lorem pellentesque sem. Ante neque ut laoreet imperdiet velit ornare tortor, ac adipiscing accumsan natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description Arcu dui auctor bibendum aenean lobortis neque eu i proin tortor dui eget vestibulum sapien metus, id consectetur vulputate eros iaculis. Ipsum purus tortor nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Vitae imperdiet hendrerit tortor suscipit condimentum. Sit pretium ex eros eti mollis erat hendrerit ultrices. Viverra accumsan neque sed accumsan blandit blandit. Curabitur curabitur ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Superwire",
      "short_description": "This is the service short description",
      "long_description": "long description Ac pharetra vehicula sodales nibh ut purus, enim ultrices turpis id aenean. Etiam sit ligula quis mattis, tortor ut aliquam vitae vestibulum accumsan a iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Ut sollicitudin diam vulputate aenean, amet erat ornare hendrerit massa consequat lacinia gravida, viverra quis consectetur ultrices. Aenean lacinia faucibus eget proin erat consequat adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum tristique imperdiet maximus orci turpis ligula purus, nunc laoreet non turpis. Rhoncus e sed cursus leo. Erat sapien blandit ultrices accumsan curabitur sed auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "FastMart",
      "short_description": "This is the service short description",
      "long_description": "long description Au et dolor ornare blandit. Curabitur tortor sodales amet. Vehicula purus magna finibus, mollis laoreet enim hendrerit velit gravida vehicula. In ultrices neque enim mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis auctor lacinia hendrerit e. Porttitor quis accumsan turpis. Ipsum metus eros faucibus. Vulputate est au posuere viverra ante aenean. Ligula porttitor etiam pellentesque ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt ex euismod turpis mi leo dictum felis erat leo arcu, amet et ut sollicitudin. Erat mauris nam arcu, quis a turpis vel est nisl.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "This is the service short description",
      "long_description": "long description Id curabitur viverra proin consectetur, eu curabitur tristique i mollis ipsum. Fringilla curabitur ac mattis maximus. Dolor risus amet posuere a eu. Nibh vel proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Vulputate neque consectetur in a. Enim metus non sodales, tempus erat pretium laoreet ac, pharetra augue ultricies nisi. Metus sagittis risus lorem viverra fringilla donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "This is the service short description",
      "long_description": "long description Scelerisque mollis consequat sem auctor amet dui, arcu diam pretium etiam sollicitudin risus metus velit massa. Auctor et eu erat, turpis turpis a lobortis augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "This is the service short description",
      "long_description": "long description Pharetra lectus blandit felis dui. Nunc est id proin, eti bibendum mauris gravida massa. Pretium elementum sit tortor. Dolor elementum pharetra fringilla. Suscipit aenean condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description Nibh amet nunc dolor viverra vitae accumsan elementum, posuere laoreet ultricies aliquet mollis viverra lorem, euismod vestibulum in sem euismod lacinia. Auctor a ultrices ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus ut fringilla tortor adipiscing. Lacus lorem iaculis purus amet gravida vitae. Donec amet nibh id a, ac magna dignissim i lobortis finibus vulputate amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Donec sapien mollis tempor dolor. Quis lectus vulputate cras placerat. Euismod pulvinar vehicula porttitor. Dignissim auctor euismod ac, mauris cursus elementum neque nisl mattis rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Ac lorem dignissim aliquam tempus amet eros. Vestibulum tortor lorem in sapien. Hendrerit condimentum est sollicitudin sed suscipit justo erat, ex magna erat nulla felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Fringilla posuere gravida e vel erat viverra aliquam erat consectetur, pharetra a curabitur massa posuere pellentesque ex ex maecenas tincidunt pellentesque, tortor purus eti aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "This is the service short description",
      "long_description": "long description Faucibus porttitor fringilla suscipit iaculis eti fringilla hendrerit ante. Facilisis id sagittis dolor ut tempor finibus ultrices accumsan enim ornare, dictum sodales bibendum maecenas donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "This is the service short description",
      "long_description": "long description Elementum vestibulum commodo sed maecenas sagittis. Vel non vestibulum risus porttitor pretium erat e tempus leo gravida, consectetur enim tristique justo hendrerit. Justo tincidunt aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Tempor etiam tempor cras placerat eros, mauris tincidunt ut bibendum nam euismod. Vestibulum lorem nulla rhoncus. Neque quis id elementum pharetra dolor sodales consequat mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit pellentesque mollis eget hendrerit dictum scelerisque mauris sollicitudin, ipsum at nulla aliquet lacinia adipiscing sodales nibh natoque lectus. Mattis sed arcu leo et rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Pharetra nisi mollis i dignissim. Eti rhoncus sed vitae adipiscing cras dui. Eu arcu tempus euismod sed lectus. Magna tristique pharetra sem at augue arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis vel commodo magna erat lacus hendrerit, eu sagittis nunc tristique amet. Ante orci blandit auctor, finibus arcu dictum nisl, justo tortor natoque lobortis purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor velit lectus donec lobortis adipiscing ex. Neque scelerisque in ex sed vestibulum a. Ultrices dui nunc sapien au facilisis velit lacus vulputate mauris lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "This is the service short description",
      "long_description": "long description Diam purus elit aliquet maecenas gravida, iaculis au gravida a natoque amet amet mi metus nunc mi. Tempor eti accumsan suscipit mauris e suscipit dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "This is the service short description",
      "long_description": "long description Nunc nisi faucibus blandit nisl lacinia sagittis a et cras condimentum vulputate sagittis. Ex tincidunt orci gravida turpis iaculis, orci donec nisl nulla placerat tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Sophis",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus dui id ultrices donec dignissim. Nisi tortor diam blandit ultricies, ex sagittis sagittis etiam morbi posuere bibendum faucibus, enim ante imperdiet dui tristique ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "This is the service short description",
      "long_description": "long description Leo lectus at purus i. Ut porttitor vehicula est vitae. A ultricies maecenas justo erat maximus nisl. I aenean vestibulum blandit sed accumsan turpis lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Et eget facilisis mi justo scelerisque ex cursus at ornare. Tempus lacus aliquet nulla ut nam sollicitudin quisque lacinia tristique pulvinar. Proin lacinia lacinia aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Sophis",
      "short_description": "This is the service short description",
      "long_description": "long description Eu sit suscipit accumsan consectetur augue imperdiet bibendum au. Gravida lacus consectetur rhoncus. Gravida scelerisque vestibulum gravida in nam. Tristique morbi arcu euismod tristique aliquam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Keycast",
      "short_description": "This is the service short description",
      "long_description": "long description Elementum hendrerit consequat maximus nunc euismod ipsum et. Dictum purus pharetra ut erat sem maecenas gravida justo, condimentum et non viverra, sapien facilisis donec natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "This is the service short description",
      "long_description": "long description Lacus mattis faucibus hendrerit aliquam sagittis i lobortis elementum quis. Diam ipsum aliquet aliquam, lobortis facilisis curabitur justo bibendum. Eu at dignissim sodales sit a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "This is the service short description",
      "long_description": "long description Amet pellentesque suscipit id donec pellentesque est auctor dictum. Eu arcu elit proin eget arcu eros sed vulputate. Orci etiam est gravida vulputate etiam vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Gravida sodales tristique euismod scelerisque. Dignissim ultricies leo ornare vel eros. Auctor ante ut nibh pellentesque mi turpis. Auctor lobortis sapien id tempus augue viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Maximus rhoncus au mattis posuere. Lectus lobortis tristique aenean sapien, est ipsum in erat, nisi tincidunt arcu amet. Consequat tincidunt et nunc sollicitudin hendrerit nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "This is the service short description",
      "long_description": "long description Nulla pellentesque ultricies orci mauris. Consequat aenean sodales e. Ultricies ac lacinia au. Aenean at ipsum neque. Ultricies eget mauris etiam lacinia donec bibendum a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt aliquam elit natoque eget tristique facilisis scelerisque in fringilla tristique proin bibendum commodo augue cras sollicitudin imperdiet sit neque tristique lacus accumsan vulputate auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Proin leo elementum tortor placerat. Quisque lorem placerat hendrerit. Maecenas risus iaculis turpis, finibus risus rhoncus bibendum. A cras condimentum mauris tristique gravida eget turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Sit id sodales at mi a eget placerat, nisl tempus hendrerit massa ligula sapien eros neque turpis erat quisque a. Bibendum pulvinar facilisis purus velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "This is the service short description",
      "long_description": "long description Vestibulum fringilla finibus porttitor laoreet pellentesque. Faucibus dolor neque blandit justo au erat, ornare ante placerat sit, facilisis sodales diam au euismod aenean au sit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "This is the service short description",
      "long_description": "long description Ligula mi amet natoque suscipit placerat magna, tempus lacus pretium metus quisque auctor tortor pretium. Pharetra ipsum viverra imperdiet a. Quisque ultrices tempor et mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Mi tempus nulla lacus pretium vel bibendum curabitur. Cursus cras vehicula cursus sodales. Porttitor massa mauris ligula quis. At accumsan aliquam facilisis, euismod laoreet cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Sed quisque lorem justo nisl in lacinia. Vulputate arcu commodo magna etiam tempor au mauris et. Non massa lobortis magna, dictum ipsum risus dolor tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus etiam neque nisl non dictum pretium sem, eti condimentum ut ex at in. Nunc facilisis diam consectetur lorem hendrerit tortor cras nibh justo eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit ipsum placerat lacinia tempor mollis magna. Imperdiet fringilla viverra mauris facilisis vitae nam natoque eti. Fringilla sit sit sem turpis orci lacus aliquam scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Logico",
      "short_description": "This is the service short description",
      "long_description": "long description Tempor dolor massa vulputate lorem. Scelerisque posuere sodales dictum ante scelerisque facilisis. Diam risus pretium eget ante, aliquam pulvinar aliquet leo elementum, finibus lobortis at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Superwire",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis a suscipit mattis eget vehicula, laoreet mattis vel sed hendrerit pharetra nibh augue lobortis scelerisque neque neque bibendum. Tristique nam accumsan quisque consequat diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "This is the service short description",
      "long_description": "long description Fringilla tincidunt maximus ex bibendum erat felis condimentum, viverra purus ultricies consectetur ex. Maximus lobortis lorem at dolor. Bibendum nunc cursus ut, dolor dui au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Adipiscing ultricies dictum enim magna euismod lectus sagittis tempor curabitur ut posuere tempor orci cras tortor amet. Diam neque nisi diam. Elementum risus facilisis sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "This is the service short description",
      "long_description": "long description Mattis et amet sodales mollis facilisis donec, pretium mauris id etiam tempus sagittis dignissim. Vestibulum arcu sollicitudin dolor laoreet laoreet, proin sodales sollicitudin imperdiet pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "This is the service short description",
      "long_description": "long description Finibus nunc metus euismod enim ornare. Id aliquam lacinia vulputate adipiscing tempor morbi aenean. Arcu sapien felis ipsum, tincidunt adipiscing accumsan ligula tortor dignissim e.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Opticast",
      "short_description": "This is the service short description",
      "long_description": "long description Justo dolor tempus dolor iaculis finibus suscipit sollicitudin tempor a. Sit nisi fringilla purus purus eti, accumsan vehicula massa neque. Pharetra eti diam fringilla vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description Nisl lacinia dolor ante gravida massa nisl vehicula. Nam scelerisque elit finibus orci. Nisl ligula i neque au quis. Vestibulum orci pharetra sapien consequat metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "This is the service short description",
      "long_description": "long description Aenean nulla aenean porttitor sagittis turpis. Nunc imperdiet dignissim auctor, vehicula auctor pellentesque massa, eu sapien blandit natoque vestibulum, faucibus ornare elit dignissim lobortis tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Nibh viverra non lobortis enim, rhoncus natoque eget tristique ligula ornare eti ipsum, eros est lorem eu erat. Rhoncus lacinia nam i dignissim dignissim a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Eros viverra at ultricies mauris lacinia et, aliquam blandit at cras nam a erat pulvinar, rhoncus cras felis justo sed quisque, quisque lacinia lacinia leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "This is the service short description",
      "long_description": "long description Mattis metus lacinia elementum lobortis. Suscipit sem quisque id lobortis gravida, at faucibus ultricies nisi. Vulputate imperdiet donec maecenas tempus. Fringilla donec eros iaculis imperdiet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Dui mauris eget vestibulum maecenas lorem, pulvinar dignissim pulvinar scelerisque, scelerisque enim eget dictum blandit. Ultrices dictum purus ac quis enim arcu. Lobortis suscipit sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Eros posuere dictum curabitur tortor, rhoncus id ante bibendum neque nunc mauris auctor. Laoreet euismod bibendum a dolor nisi nibh justo. Auctor eros auctor dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Dui aliquet euismod vehicula euismod. I aliquet tempor erat, mollis faucibus dictum euismod, sapien gravida risus augue sodales nibh laoreet porttitor laoreet aliquet laoreet eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description Proin tempor finibus vitae ultrices. Eu cras cursus justo dignissim vulputate. Magna lacinia metus hendrerit sollicitudin nulla dignissim dictum justo imperdiet iaculis, posuere eros sem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Nunc iaculis eti pellentesque sapien. Non ac morbi erat mauris. Etiam mattis lectus quisque. Est fringilla mattis mollis scelerisque risus. Sapien vitae quisque faucibus mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Citisys",
      "short_description": "This is the service short description",
      "long_description": "long description Lectus lacinia placerat consequat quis consequat lacinia tincidunt ex dignissim sollicitudin nam condimentum ex pretium. Posuere cursus dictum nisi curabitur vehicula ipsum, ac adipiscing sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Lectus augue ultricies nulla nisi eti. Mattis ligula finibus elit nunc donec ante, augue cursus nulla erat. Ac aliquam adipiscing felis. Auctor elit proin et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "This is the service short description",
      "long_description": "long description Consectetur au auctor accumsan vel adipiscing, erat bibendum eget pellentesque. Lacinia dolor nulla maecenas curabitur, est hendrerit posuere augue non. At est accumsan erat dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia lobortis finibus dolor velit. Lacinia lacinia sollicitudin sapien viverra, proin id ac euismod etiam accumsan lorem fringilla ligula eti commodo. Eu ornare erat faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Eros a tincidunt pharetra magna elit, ex ante ac nunc, a maximus elementum ante scelerisque maximus vulputate consequat vehicula. Iaculis non adipiscing eti mi et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Erat leo risus pulvinar nunc dignissim blandit tristique, elementum etiam aliquet sodales mauris iaculis accumsan, velit mattis risus maximus eti nam quis dignissim pretium dolor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Keycast",
      "short_description": "This is the service short description",
      "long_description": "long description Tortor aliquet ultricies dui nam consequat sed ex. Sodales maecenas et dolor. Ante pharetra a etiam dignissim lobortis suscipit. Viverra tempus dolor dolor dui tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia lobortis lobortis etiam elementum tempor. Lacinia leo ligula aliquet pellentesque tortor donec est, id sodales ut at eget. Quis lectus neque pulvinar proin nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Viverra sapien dictum facilisis cras laoreet. Donec turpis quisque nisl, vulputate aliquet tincidunt augue, pretium finibus dignissim mi. Viverra eu velit adipiscing aliquam dolor finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Mauris ultricies enim ante et augue, cursus nunc non mauris eti rhoncus massa dolor ac auctor facilisis orci faucibus diam. Sem dolor velit mi euismod.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "This is the service short description",
      "long_description": "long description Faucibus tempus ultricies vestibulum sodales ipsum, natoque tempus sodales placerat nunc leo elit scelerisque eti pulvinar maecenas pretium bibendum. Mi aliquet pretium in leo aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "This is the service short description",
      "long_description": "long description Nam consectetur sagittis faucibus lacus dictum. Dignissim in vel nibh auctor leo quis. Adipiscing eti finibus sapien. Vel maximus etiam posuere aliquam vestibulum turpis pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "This is the service short description",
      "long_description": "long description Nibh lorem ipsum lectus pellentesque sodales dui dui. Enim diam finibus tincidunt, blandit elementum nulla ante imperdiet. Quis quisque pharetra sapien maecenas, mattis faucibus i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "This is the service short description",
      "long_description": "long description Au elit non dictum vestibulum mollis, gravida curabitur maecenas tincidunt, vel lectus vehicula maecenas ultrices vulputate, erat turpis maximus diam nisi suscipit. Et rhoncus tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "This is the service short description",
      "long_description": "long description Arcu viverra orci erat ultricies amet sodales diam in pellentesque, lectus pulvinar ex iaculis. Leo dolor vehicula maecenas auctor neque. Accumsan sollicitudin lacinia quisque suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Ac consectetur nulla natoque in iaculis bibendum mi risus lorem. Est amet aliquam fringilla fringilla. Aenean euismod commodo e dignissim aenean. Sapien tincidunt ante a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Non ultricies erat est quisque, natoque non commodo est lacinia natoque. Accumsan sapien au est imperdiet bibendum blandit lacinia lectus imperdiet natoque vulputate ultricies tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "This is the service short description",
      "long_description": "long description Ornare sollicitudin fringilla leo sed nulla. Ipsum maecenas leo sem nam. Curabitur au sit lorem mattis tortor enim. Lobortis ut quis eros curabitur justo dolor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Baramax",
      "short_description": "This is the service short description",
      "long_description": "long description Sagittis diam non metus sagittis. Accumsan eros donec sagittis, lorem id proin faucibus vitae aliquam dignissim ligula ipsum erat sem ex. Aenean cursus proin au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Gravida bibendum nunc pharetra au ultricies, ex nam quisque cursus sagittis posuere. Auctor consequat accumsan vestibulum in morbi, lobortis pretium in adipiscing. Ac dictum suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "This is the service short description",
      "long_description": "long description Augue aliquam vitae quis purus euismod vitae ac neque, sapien ultrices turpis tincidunt. Cursus justo nibh mi diam elementum. Massa aliquam suscipit eu sit placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "This is the service short description",
      "long_description": "long description Vehicula nibh cras viverra nibh sapien lobortis auctor pulvinar quis lacus sed, mauris turpis a aliquet dui tristique curabitur pretium mollis turpis tempus maecenas ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Dolor cras adipiscing sollicitudin hendrerit dolor, pellentesque nibh commodo a facilisis nam. Erat aenean quis aliquet vel tempus. Vestibulum proin aliquam erat mi vestibulum pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "This is the service short description",
      "long_description": "long description Nulla turpis hendrerit eti tristique. Pulvinar elementum consectetur viverra, elementum gravida ornare faucibus diam ac imperdiet quisque. Tempor maecenas maximus euismod sed ex faucibus suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Sodales posuere dictum velit vehicula a tortor ipsum. Porttitor erat a sagittis. Facilisis elit diam purus facilisis lacinia augue proin mi condimentum nunc bibendum maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "This is the service short description",
      "long_description": "long description Lorem mollis diam amet nam donec orci, velit mauris imperdiet aliquet amet et suscipit, bibendum et nibh sem eu felis purus consectetur viverra dictum bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Diam bibendum eti i aenean dignissim sem elit, consequat eu euismod au rhoncus enim, aliquam sem mauris quisque elementum. Condimentum lacus fringilla ornare in suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "This is the service short description",
      "long_description": "long description Tristique dolor non ipsum ac. Et dignissim proin metus fringilla massa, dolor tincidunt sagittis mauris lobortis. Ex ultrices sollicitudin lacinia. Dolor id amet mattis quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis turpis enim nisl ac tristique. Sed natoque magna ex nisi ultricies eti, maximus ex fringilla mauris aenean laoreet lobortis nam tincidunt. Etiam nunc morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Forecore",
      "short_description": "This is the service short description",
      "long_description": "long description Proin facilisis pellentesque ultrices sed fringilla vitae natoque. Ipsum nunc cras tempor, ante pharetra in maecenas posuere. Velit euismod iaculis vulputate amet non diam sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Et sodales sodales vulputate turpis facilisis at. Turpis scelerisque amet sit, placerat lobortis tristique lectus gravida justo. Gravida neque ut gravida ultrices quis orci felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "FastMart",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquam hendrerit dictum nisi hendrerit finibus imperdiet. Dignissim nibh nam lectus tristique, maecenas orci pellentesque aliquam sagittis at. Ornare metus consequat pellentesque non tristique ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "This is the service short description",
      "long_description": "long description Ante maecenas ac lobortis nisi arcu consectetur. Metus elit nam ipsum suscipit, ipsum vestibulum blandit ornare. Lacinia iaculis magna dolor, ligula augue elit vestibulum elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description Erat accumsan ante tempus nibh. Ante pellentesque commodo aenean maecenas. Consectetur i suscipit blandit arcu consequat pharetra curabitur quisque pretium lacinia scelerisque, accumsan pellentesque dolor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Placerat ipsum ligula lacinia morbi lacinia facilisis tortor ex. Facilisis facilisis ultricies natoque quisque neque lacus tortor ligula tincidunt, augue nulla tristique consequat viverra cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description Ornare orci iaculis lacinia eti ultricies, facilisis scelerisque rhoncus iaculis dui, elit orci erat scelerisque placerat eti faucibus, arcu sem eget sapien commodo mattis sit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Solexis",
      "short_description": "This is the service short description",
      "long_description": "long description Massa posuere maximus vestibulum erat non consequat, finibus est nisl turpis. Id ultricies accumsan mi. Cursus pulvinar euismod sodales ornare rhoncus proin est tempor lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "This is the service short description",
      "long_description": "long description Ac felis e vulputate viverra enim id fringilla et dignissim et condimentum lacinia vehicula nam. Ut enim metus curabitur suscipit mi. Hendrerit scelerisque pellentesque cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "This is the service short description",
      "long_description": "long description Tempor in eget nibh porttitor finibus. Rhoncus porttitor euismod sagittis, facilisis au quisque vehicula faucibus, non elementum purus auctor euismod. Morbi massa velit mi ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Freecast",
      "short_description": "This is the service short description",
      "long_description": "long description Metus et metus consequat blandit, cursus dui vestibulum imperdiet elementum, laoreet et nisl risus. Etiam au leo euismod amet iaculis posuere rhoncus, vitae sem pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "This is the service short description",
      "long_description": "long description Ultrices fringilla est eu consequat eros. Imperdiet risus eti aliquam elementum ultricies. Vitae id ipsum arcu auctor quis. Ut lacus elit tempus. Accumsan ornare nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Suscipit sem dui amet ligula rhoncus neque. Aenean felis natoque amet accumsan lectus, gravida tincidunt etiam mauris ut suscipit felis mattis. Sagittis elit tempor dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description Purus risus au lobortis nulla id. Placerat au curabitur ultricies, pulvinar fringilla ultrices maecenas etiam. Pulvinar sagittis erat leo dui tincidunt etiam lectus blandit lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Diam curabitur pharetra tempus imperdiet imperdiet curabitur aliquet. Nunc condimentum nunc augue. Vestibulum tincidunt augue elit fringilla etiam. Non elementum non pellentesque sagittis scelerisque quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "This is the service short description",
      "long_description": "long description Finibus tortor facilisis felis ligula metus proin at. Ex viverra maximus scelerisque aliquam proin mattis pulvinar gravida. Vel porttitor hendrerit mi ipsum ante condimentum i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis posuere vel dui eros. Imperdiet consequat placerat sagittis. Faucibus aenean lacinia neque. Dui natoque vestibulum diam sollicitudin aenean nisl. Ex mattis euismod erat felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "This is the service short description",
      "long_description": "long description Faucibus sit enim nunc ultricies eti placerat ex orci viverra finibus tristique. Maximus donec facilisis cras lobortis, eget ac adipiscing pharetra commodo. Au id mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description Consequat fringilla aliquam commodo vehicula. Sed sapien pretium facilisis scelerisque. Nam fringilla nulla felis ultrices nisi magna, maximus lectus sollicitudin condimentum euismod hendrerit bibendum ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Iaculis mi consequat dolor lorem. Natoque rhoncus ultricies purus. Eti non sagittis vulputate mattis maecenas a mi erat posuere, aliquet lobortis tincidunt velit cras sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "This is the service short description",
      "long_description": "long description Velit eu cursus elit gravida lacinia. Morbi tempus orci aenean blandit nam, laoreet turpis condimentum vel. Neque pellentesque metus dolor etiam nunc in pellentesque viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Forecore",
      "short_description": "This is the service short description",
      "long_description": "long description Morbi sit ut tempus condimentum. Vitae porttitor at curabitur curabitur nunc nibh felis lectus. Bibendum tempor mauris elit enim morbi tristique non ut a vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Sit mauris ac aliquet leo accumsan. Ex finibus e aliquet pellentesque, lobortis mollis tortor lobortis et ultrices tortor, mollis enim aliquet erat, placerat condimentum natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "This is the service short description",
      "long_description": "long description Vulputate ac adipiscing elit sollicitudin fringilla maximus, scelerisque lobortis mattis dignissim. Risus sapien diam diam curabitur pharetra pellentesque felis dignissim euismod ex sem sagittis proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description Vulputate sagittis ligula e quis non sagittis, ultrices mi sollicitudin mollis magna id tristique dictum, vitae massa mauris lectus mollis cursus maecenas maecenas nibh fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus lorem mattis adipiscing bibendum iaculis augue. Lacinia maecenas blandit in. Posuere nisl magna iaculis bibendum. Ligula faucibus ornare eu, e nisl velit pellentesque pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Sagittis sed ligula consequat in. A adipiscing sed posuere morbi at est mi. Lorem risus id morbi, dolor gravida curabitur curabitur. Dolor sodales gravida tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Tempor eu diam hendrerit massa curabitur leo mauris condimentum faucibus. Tempus tempus metus massa turpis porttitor metus lobortis eget nibh. Dolor elit au risus mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Ac mattis cras maximus consectetur tortor. Purus ut sed at. Consequat purus enim nisi. Sagittis nam mollis dolor velit, curabitur id orci proin commodo ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis finibus nisl donec fringilla pellentesque eti eti tincidunt facilisis id vitae pulvinar mi in proin natoque elit ligula. Dictum cras accumsan lobortis dolor mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "This is the service short description",
      "long_description": "long description Ligula sapien sagittis lacinia posuere pretium. Pharetra sodales ac eti, maximus mollis maecenas lacus, quis proin nisi ex aliquet sed. Massa nibh natoque etiam tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis nam non tortor mi, ipsum aliquam tortor ex. At lobortis turpis consectetur sed mauris scelerisque. Consequat sodales augue ultricies porttitor, eros nam erat tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus pretium etiam nisl laoreet finibus adipiscing. Sit lectus ultrices lorem, lobortis accumsan suscipit au ultricies, vel pellentesque sit lacinia eros. Consectetur ipsum etiam finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor pretium ultrices neque pellentesque. Sed lorem ornare at, aliquet eti ultrices ligula. Vestibulum eros elit quis sem. Cursus lacinia scelerisque nam lacinia maecenas aliquam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description Erat nam aenean maximus finibus, erat est pulvinar ultricies, purus in gravida id. Ornare tincidunt etiam rhoncus, tortor purus lacinia erat. Pharetra lectus vehicula vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "This is the service short description",
      "long_description": "long description Nibh placerat metus arcu mauris facilisis adipiscing gravida, ac lectus at magna vitae. Tempor ultricies justo ut. Tristique mauris rhoncus mauris ac, aliquet orci rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Galcom",
      "short_description": "This is the service short description",
      "long_description": "long description E eu dolor et vestibulum at. Lectus ac lobortis tempor. Enim ornare maximus facilisis, risus dolor justo massa tortor maximus, donec nisi sodales ante finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Porttitor eu au dictum non tincidunt. Orci bibendum vehicula felis aliquam morbi, iaculis vestibulum facilisis sollicitudin risus, accumsan fringilla elementum tortor ipsum dui lobortis justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet massa maximus ligula consectetur accumsan et id ultricies ac ligula auctor, pellentesque aenean dolor lectus lacinia, placerat ex cras facilisis, ultrices consectetur mollis ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "This is the service short description",
      "long_description": "long description Eti consectetur scelerisque ultricies leo. Mattis vehicula elementum pretium ligula commodo, mattis finibus ex tristique lacinia, gravida sodales tristique lobortis eti. Nisi sit mi sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "This is the service short description",
      "long_description": "long description Nibh vestibulum viverra augue vehicula pharetra et fringilla. Mauris sapien pellentesque lacinia nam sodales cras, rhoncus sit condimentum eti etiam sollicitudin pellentesque lectus tempor porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "This is the service short description",
      "long_description": "long description E hendrerit rhoncus leo nam, gravida gravida blandit est mi eget quisque ultricies felis laoreet aliquam scelerisque tempor pretium. Bibendum orci cras ac ipsum ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Freecast",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum vulputate orci enim e. Proin aliquet hendrerit tortor aenean turpis. Pretium ornare eget lobortis nulla posuere tincidunt lacinia eu. Tincidunt fringilla placerat accumsan ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Porttitor etiam iaculis mollis maximus ultricies consequat. Commodo ornare tempus tortor suscipit sem. Elit tempor sapien adipiscing auctor, ex tristique turpis nibh massa arcu turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "This is the service short description",
      "long_description": "long description Porttitor tempor aliquam quis tristique, est aliquet erat quisque morbi blandit maximus facilisis dolor, turpis posuere pulvinar sapien vestibulum massa nulla. Eget au commodo arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor elementum facilisis natoque vulputate, erat dui ultrices justo tincidunt. Eget maecenas sit pretium quis, laoreet nisl placerat tempor quisque facilisis proin, ipsum faucibus nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "This is the service short description",
      "long_description": "long description Sapien turpis ac faucibus morbi natoque purus leo. Tincidunt proin consectetur cursus. Amet sapien non ante ultricies nulla, aliquam massa dui lacinia. Porttitor pulvinar pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "This is the service short description",
      "long_description": "long description Ut ante felis diam nulla elit. Justo tempus blandit tristique lobortis sagittis sed vitae vitae tristique. Purus i nisi fringilla, mi at sollicitudin dictum lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus elementum ex nulla aenean eu nunc cras, maximus vehicula tempus adipiscing, elementum gravida hendrerit aliquet. Quis iaculis magna proin faucibus pharetra iaculis gravida auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "This is the service short description",
      "long_description": "long description Magna pharetra lacinia cras pulvinar eget eget tempus aliquam. Morbi lacinia gravida ante. Sem bibendum leo a porttitor. Suscipit morbi sem ante id ipsum et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Euismod tortor blandit eget sem nibh massa elit scelerisque vehicula aenean. Consectetur pretium purus laoreet. Sodales lobortis sodales est. Mi au vestibulum ipsum eros scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "This is the service short description",
      "long_description": "long description Metus neque consectetur elementum tortor consectetur neque mi quis curabitur curabitur. Sed facilisis ultrices eu, vehicula purus mattis tempor in eti a finibus tincidunt viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Mi sed euismod scelerisque maximus. E ligula pretium leo aliquet dui cras ultrices, tristique imperdiet velit vitae a neque nibh. Nam risus massa posuere mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "This is the service short description",
      "long_description": "long description In mi nisl diam adipiscing, finibus purus condimentum cursus ante condimentum, lacinia eti pellentesque et vitae, condimentum au felis lacinia, ac velit au lacus lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description Commodo elit pellentesque pharetra arcu tristique. Justo leo sollicitudin i enim, magna diam enim laoreet, porttitor elit ut quisque nulla. Ut finibus ultricies condimentum lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium lorem commodo finibus ut, cursus maximus non finibus vehicula. A ultricies hendrerit condimentum cursus proin aenean. Tincidunt dignissim dignissim diam, maximus erat sodales lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "This is the service short description",
      "long_description": "long description Tortor non eget lacinia curabitur in suscipit bibendum proin sem magna. Posuere augue enim bibendum orci. Neque consequat pretium vitae sed dui leo donec mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Mattis ac lobortis nisi felis. Placerat diam natoque vulputate euismod sagittis ipsum dolor a, lectus erat curabitur blandit dolor sollicitudin curabitur, sodales amet lectus auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Consequat posuere mauris justo posuere massa aenean mattis rhoncus felis elit, blandit tristique pellentesque metus cursus ipsum lobortis nibh nunc mauris turpis amet faucibus metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "This is the service short description",
      "long_description": "long description At tempor imperdiet ultricies ipsum est donec, curabitur maximus est au aenean viverra nibh curabitur sodales sodales hendrerit leo non hendrerit ligula aliquam pretium lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "This is the service short description",
      "long_description": "long description Eti imperdiet pretium accumsan tempor sit. Eros sem tempor eti, natoque dui eu placerat. Est et ex ac. Ipsum aliquet blandit morbi, turpis natoque ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Forecore",
      "short_description": "This is the service short description",
      "long_description": "long description Purus aliquam blandit elementum dictum. Lacinia nisi nam sollicitudin natoque curabitur. Pulvinar gravida scelerisque vitae ex. Au diam cursus aenean i fringilla natoque vehicula felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description E maecenas sollicitudin vitae nunc, velit etiam nunc faucibus risus pharetra. Arcu blandit accumsan consequat, mollis ornare augue in vehicula ornare, quis magna e lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "This is the service short description",
      "long_description": "long description Et id sem sapien maecenas cursus natoque mollis accumsan vitae, accumsan diam e imperdiet ipsum ultrices est. Condimentum tristique risus accumsan etiam viverra vitae condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "WestGate",
      "short_description": "This is the service short description",
      "long_description": "long description Elementum ut non velit ligula placerat mattis velit. Commodo vitae ultricies lacinia pharetra, ipsum consectetur tempus at vel nibh amet. Proin i e ligula blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "This is the service short description",
      "long_description": "long description Ac natoque dignissim morbi lobortis aenean lobortis. At finibus nisl lorem lacus faucibus non. At massa commodo arcu pretium adipiscing mauris elit. Orci massa natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "This is the service short description",
      "long_description": "long description Diam natoque viverra finibus quis, consequat non mollis turpis, sit risus sollicitudin adipiscing metus non. Natoque orci dui tempus pharetra. Lacinia eget in mattis augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Metus au mi e nisl, placerat aenean dolor ultrices morbi justo vel mi placerat et vehicula quis magna. Aliquet a augue lectus facilisis augue porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "FastMart",
      "short_description": "This is the service short description",
      "long_description": "long description Ipsum risus ipsum fringilla at. Eget tincidunt placerat eget eu, risus ante dui consequat pulvinar quisque. Enim porttitor nisl sollicitudin. Faucibus nisl quis ipsum nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis sagittis adipiscing proin aliquam. Auctor maximus et proin i. Posuere e mollis rhoncus suscipit erat. Nam au bibendum mi sodales mollis et ante bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description A amet arcu pretium aenean, donec euismod pulvinar curabitur ligula pharetra. Lacinia aliquet pulvinar sed, pharetra mollis maximus sagittis vulputate eu nunc aliquet augue consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "This is the service short description",
      "long_description": "long description Purus placerat quisque i sed, a nibh arcu sem. Cras a suscipit finibus, e nibh lorem purus ante, sollicitudin pharetra mi euismod vestibulum rhoncus erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Vitae euismod sagittis elit placerat tempor. Massa nibh lectus a rhoncus mauris laoreet. Ac sem mollis cras scelerisque tincidunt accumsan auctor orci sit iaculis augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis est tincidunt purus condimentum. Quisque massa hendrerit magna accumsan sapien, felis proin ante mollis at tempus gravida nibh. Mi dui lacinia purus iaculis accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description Eu arcu ligula a finibus magna commodo turpis bibendum orci, natoque scelerisque au mattis eros, nam cras pharetra lorem non vel facilisis euismod erat scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Lectus tincidunt ultricies mauris justo lorem bibendum elementum vitae sem nam finibus consequat aliquam dictum quis ultrices quis. Ante sem amet elementum augue eget purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Sollicitudin diam accumsan tempor pellentesque elit vitae consequat, quisque condimentum lorem imperdiet tempor ultricies quis mattis vehicula, consequat ante eu quisque. Imperdiet cras maecenas ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "This is the service short description",
      "long_description": "long description Hendrerit proin morbi nulla lacinia nisl donec ultricies. Laoreet dolor aenean at mollis. Vehicula condimentum nulla ultricies ante sem in, lectus magna turpis hendrerit at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet vehicula dignissim viverra sodales augue. Augue turpis consequat mollis. Nunc et at a. I euismod aliquet adipiscing, nam consequat pharetra magna justo posuere proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis ante eu felis maximus consectetur id diam elit eros, au consectetur enim nisl faucibus, ultricies rhoncus ultrices sagittis gravida. Consectetur accumsan tempor maximus sit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Bibendum massa vehicula bibendum elit sollicitudin. Sapien arcu consequat neque cursus aenean proin, enim sapien lacinia blandit adipiscing. Sem erat id ac ultrices sagittis erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Mauris vestibulum lobortis sed auctor maximus, ante nisi fringilla bibendum orci leo blandit, eros i tristique faucibus arcu tincidunt maecenas vestibulum, i tincidunt euismod tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "This is the service short description",
      "long_description": "long description Diam lorem proin velit pulvinar placerat iaculis nibh morbi, in eget a tristique massa, faucibus mollis massa eti lorem eu ornare, est posuere posuere quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "This is the service short description",
      "long_description": "long description Neque cras nunc nunc condimentum i, ac erat id hendrerit, tortor maximus cursus eros eu quis ultrices lobortis maecenas dictum ut eti nibh tortor nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Lectus faucibus ligula felis quisque leo, auctor est vestibulum vel justo sollicitudin maecenas tortor accumsan cras maecenas, in enim et tristique, au placerat pharetra proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus justo elementum viverra hendrerit. Pulvinar nunc etiam metus massa ante. Massa placerat e aliquet, ante etiam cursus hendrerit sagittis finibus ornare mattis ornare nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "This is the service short description",
      "long_description": "long description Dolor ante eros nisl dolor suscipit quis facilisis porttitor erat tempus nisi lacus hendrerit eti. Vitae ultricies imperdiet bibendum tempus nisi facilisis. Et turpis lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "This is the service short description",
      "long_description": "long description Tempor id magna placerat amet, id dignissim lacus nulla ligula mi aliquet. Pharetra proin morbi maximus erat porttitor mi magna pulvinar. Velit vitae ut orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Sagittis purus nisi eget vel dui. Quis suscipit fringilla dignissim arcu, leo curabitur eti cras tortor, fringilla dictum aenean facilisis. Euismod hendrerit dolor dui vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Euismod tristique ligula ultricies risus commodo, nibh risus leo vestibulum et consectetur, mattis aliquam tortor etiam orci magna, et lacus blandit viverra diam mauris mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt sed au pulvinar blandit maecenas ipsum, velit au e sagittis aenean pulvinar mi ac, sodales tincidunt sodales sapien dignissim. Ultrices ultricies tempor curabitur pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "This is the service short description",
      "long_description": "long description Sapien nulla a lacinia ex. Nulla lorem tincidunt sit euismod massa vulputate mauris nibh sed vitae ultricies, vestibulum at eti placerat elit nisi curabitur morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description Massa imperdiet vel aliquam e ipsum, nam tempor adipiscing enim tristique vulputate leo leo. Sapien gravida aliquet auctor. Id condimentum aliquet tincidunt, et nulla eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "This is the service short description",
      "long_description": "long description Accumsan at mollis nisi morbi pulvinar mi mattis, dui maximus lacinia sit eget aliquet morbi. Cursus ante sed massa nisl. Viverra ipsum quisque nisl nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description Dui sem aliquet ac cras gravida. Sit enim morbi elit, id augue donec adipiscing, velit tristique enim accumsan rhoncus nisi id lacinia. Eros sem eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Posuere sapien aenean ante facilisis. Tempus laoreet cursus e. Bibendum vehicula scelerisque non aliquam. Tincidunt blandit pharetra non id eros maecenas. Aenean faucibus commodo tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt eu lectus cursus faucibus sodales ultricies mauris consectetur nisi. Sit scelerisque ipsum mattis mauris elementum morbi velit ut tempor auctor tristique tempor proin rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "This is the service short description",
      "long_description": "long description E elit ante au e ex curabitur mollis, id amet viverra rhoncus metus, velit est id pellentesque tristique dignissim, viverra cursus sollicitudin posuere nibh accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Citisys",
      "short_description": "This is the service short description",
      "long_description": "long description Natoque dictum dui dui porttitor bibendum lacinia. Massa felis auctor erat. Accumsan natoque auctor rhoncus magna eros sed tristique donec elit. Ac et vel elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Vitae tristique blandit justo ultricies euismod aliquet accumsan suscipit. Dictum cras ornare lectus posuere auctor ut posuere faucibus euismod mauris ornare turpis nisl nibh ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis felis vitae a enim dolor bibendum porttitor iaculis porttitor enim quisque gravida. Natoque at pulvinar consequat id lorem. Purus arcu faucibus proin cras ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "This is the service short description",
      "long_description": "long description Risus eros et dignissim nisl. Id condimentum adipiscing imperdiet quisque. Risus velit non dictum, condimentum sollicitudin porttitor tincidunt orci, est etiam enim ut tristique non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "This is the service short description",
      "long_description": "long description Enim au turpis tempus risus et ut felis pellentesque est. Laoreet natoque eu in natoque ex maximus aenean, aenean amet nunc nisi curabitur hendrerit aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Erat massa lacinia quisque laoreet curabitur nam au commodo consectetur fringilla at mi lacinia sapien bibendum. Est eti sed hendrerit vulputate, ex mollis tortor lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "This is the service short description",
      "long_description": "long description Sem auctor fringilla ac sem dolor bibendum. Aenean pulvinar maecenas vitae. Arcu sapien tincidunt ipsum, aliquet nibh nisi vel viverra lobortis natoque. Vestibulum dignissim mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Superwire",
      "short_description": "This is the service short description",
      "long_description": "long description Non porttitor etiam condimentum pharetra rhoncus, nam turpis pellentesque laoreet, enim sollicitudin orci tortor. Fringilla lacinia cras elementum au, imperdiet aenean rhoncus sed sed rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Pellentesque proin augue lacus gravida scelerisque pulvinar cursus amet sem, mollis nisi lacinia blandit ac, au enim ipsum consectetur morbi consequat finibus. Nisi vehicula tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Forecore",
      "short_description": "This is the service short description",
      "long_description": "long description Au elementum vestibulum nibh id. Au ex purus aenean vel tincidunt. Proin vestibulum purus vel ut, porttitor rhoncus dolor scelerisque pulvinar facilisis. Pulvinar leo sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "This is the service short description",
      "long_description": "long description Eti amet nibh viverra porttitor. Lorem euismod non cras vestibulum arcu pellentesque justo. Donec lobortis sagittis est pharetra tempus. Bibendum hendrerit at placerat donec consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "This is the service short description",
      "long_description": "long description Lectus curabitur at blandit nisi augue, imperdiet massa mattis a. Pretium gravida eros ac, tortor ante sem sed sodales mauris accumsan elementum, tortor lacinia faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description Vulputate leo proin pretium est lacinia mollis donec donec nibh donec. Pulvinar magna mauris maecenas ipsum imperdiet natoque nibh placerat enim diam imperdiet pellentesque tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus mi eros euismod eti vel suscipit tempus diam nibh rhoncus ultricies e nisl sagittis faucibus i lacinia adipiscing tincidunt. Consectetur ut arcu mi vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Sagittis sollicitudin dui ex fringilla vestibulum bibendum diam cras. Blandit elit felis et vitae tortor quisque dignissim. Tristique felis nulla donec pulvinar. Nam mattis accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "This is the service short description",
      "long_description": "long description Mauris elit aenean nibh facilisis nisi. Tempor consectetur lectus metus. Ultrices tempus cras leo tortor elementum vulputate. Suscipit risus imperdiet sem ornare, est orci dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description Dui natoque aliquam mollis purus faucibus accumsan mollis, iaculis viverra ornare dolor, lobortis erat erat cursus a purus. Eti dignissim lorem proin, adipiscing arcu ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Est lacus suscipit sed ut. Iaculis gravida suscipit sodales posuere ante est aenean. Vitae ipsum enim justo pretium, justo sapien mi mauris quisque placerat lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum sapien ac faucibus proin. Maximus bibendum ultrices pellentesque donec erat. Eu nulla ut tristique. Facilisis maecenas nunc cras tristique massa mollis, ex est natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Donec tempus vel bibendum dictum sodales, arcu eu nisl posuere vestibulum, vestibulum imperdiet lacus vestibulum elit lacinia tristique non fringilla felis euismod justo scelerisque tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description A blandit non i arcu, aliquet morbi dui placerat lacinia magna cursus cursus sagittis ante metus lacinia, mattis iaculis ornare scelerisque proin. Turpis lacinia sit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "This is the service short description",
      "long_description": "long description Mattis est erat leo etiam. Sit mauris sapien laoreet nisi pulvinar. Mi sem scelerisque consequat quis rhoncus. Pretium pellentesque ut massa, elementum lobortis i sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "This is the service short description",
      "long_description": "long description Facilisis adipiscing purus nisi bibendum sed dui erat suscipit sem. Elementum felis augue etiam dignissim. Sollicitudin purus vehicula nibh felis sapien cras vitae nisi mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "This is the service short description",
      "long_description": "long description Elit laoreet nibh ac nisl. Accumsan in aliquam est aliquam dictum. Commodo enim condimentum vel. At vehicula vestibulum arcu erat tristique imperdiet ipsum dignissim nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Erat lorem ligula metus at iaculis vehicula lorem. Aliquet lacinia elit porttitor vulputate eros sagittis erat, proin tempor tempus nibh mauris felis, felis justo pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "This is the service short description",
      "long_description": "long description Metus cras erat lobortis vulputate orci sit, mollis aenean ornare condimentum arcu ultrices. Augue curabitur nisi dolor, curabitur neque ex facilisis euismod vel dictum dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "This is the service short description",
      "long_description": "long description Cras ex maecenas rhoncus etiam vehicula sem, laoreet leo sapien accumsan ut turpis elementum quisque mi. Erat leo ut e au, hendrerit aenean imperdiet ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Orci condimentum e sapien diam iaculis, gravida pharetra lobortis nam, neque neque risus pellentesque, scelerisque viverra cursus lorem amet erat. Tortor posuere dignissim id eu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Orci lobortis fringilla sollicitudin proin. Orci hendrerit et ultricies ultrices tempus accumsan mattis lacinia ut dignissim adipiscing laoreet proin, mollis elit i viverra ante vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "This is the service short description",
      "long_description": "long description Tristique commodo etiam tempus suscipit leo velit massa elementum, auctor eget dignissim tempus, accumsan laoreet in felis condimentum curabitur donec sed augue ipsum pulvinar vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Protheon",
      "short_description": "This is the service short description",
      "long_description": "long description Pellentesque proin faucibus nam vulputate ornare. Augue velit sollicitudin nibh. Natoque vitae condimentum pharetra facilisis lorem. Nam imperdiet sagittis tincidunt, tempus maximus quis pretium accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis scelerisque hendrerit massa posuere sed accumsan bibendum ultrices. Hendrerit vitae lorem felis. Accumsan eros arcu tempus. Vestibulum fringilla diam dictum faucibus, amet fringilla nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "This is the service short description",
      "long_description": "long description Massa commodo eros e quis. Nisl ut ut sagittis sem blandit leo orci, porttitor laoreet suscipit ipsum. Blandit aliquam adipiscing justo posuere lacinia rhoncus lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Citisys",
      "short_description": "This is the service short description",
      "long_description": "long description Tristique metus imperdiet sollicitudin vel velit ac condimentum enim commodo. Ante i velit pharetra ac i in massa. Posuere felis pretium felis i ultricies ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium enim vulputate lacinia maximus adipiscing nibh tincidunt sollicitudin dolor justo. Iaculis imperdiet nibh maecenas lacinia donec maecenas. Ac condimentum tincidunt non morbi eu aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description Eti vulputate eros hendrerit i elit tincidunt. Sem cursus quis orci, hendrerit scelerisque ac nisi placerat. Augue eti leo at, finibus purus proin faucibus magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis justo rhoncus finibus ac aenean posuere lobortis nulla adipiscing condimentum, tincidunt tempor augue iaculis justo. Massa sodales ac consequat enim metus etiam vehicula mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Infracom",
      "short_description": "This is the service short description",
      "long_description": "long description Au tempus commodo pellentesque lacinia id consequat euismod hendrerit, faucibus vehicula ac auctor. Nulla est ipsum cursus lacinia nam lacinia. Id etiam natoque justo vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Connic",
      "short_description": "This is the service short description",
      "long_description": "long description Leo pulvinar tristique ac eti lectus elementum, nisi nisi imperdiet elit. Turpis vel proin a diam, elit posuere orci pharetra nisl nisl mauris viverra consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "This is the service short description",
      "long_description": "long description Maximus fringilla mollis dui maecenas tempus maximus, ornare placerat at eros orci maecenas auctor sapien ut. A orci ligula diam, ut cursus quis at accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "This is the service short description",
      "long_description": "long description Ut sollicitudin est dignissim i, vestibulum elit euismod rhoncus sed lectus mollis. Facilisis metus pellentesque hendrerit imperdiet tristique eti commodo amet finibus euismod finibus est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "This is the service short description",
      "long_description": "long description Vestibulum leo mattis sed felis dolor at nibh dolor ipsum proin. Felis aenean massa gravida. Vitae imperdiet suscipit maximus aliquam vulputate. Justo ligula cursus dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis eu augue sagittis neque sollicitudin nisl. Laoreet erat ipsum velit dignissim dui. Commodo ut metus sem, orci tempus augue viverra lectus. Mattis risus curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum non aliquet tristique sed placerat. Sed tincidunt e eti lobortis eros, risus sapien consectetur amet laoreet, posuere leo lacus amet neque hendrerit scelerisque ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Vehicula vitae sed consectetur ut nulla nisi. Adipiscing euismod nisl eu ultricies lorem cras aenean felis ex, amet consequat sit elit finibus. At pulvinar curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum mi i eu dolor bibendum viverra, vehicula et risus tempor elit, sit quis adipiscing tortor, eti laoreet gravida amet, sed ultrices at turpis velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Mattis lorem a tincidunt tempus vestibulum mattis. Consectetur cursus lectus eu consectetur, lacus pellentesque morbi turpis. A id vulputate sodales. Scelerisque tortor bibendum sollicitudin augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Bibendum scelerisque at a dui elit vestibulum eti ultrices, iaculis porttitor eti lacus neque condimentum. Elit nibh auctor hendrerit. Mattis vel viverra etiam dui augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "This is the service short description",
      "long_description": "long description Massa augue euismod imperdiet sapien sagittis, quis bibendum suscipit ante, pellentesque neque ex vitae dictum pharetra vel. Lacinia commodo e aenean ac velit suscipit diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Superwire",
      "short_description": "This is the service short description",
      "long_description": "long description Commodo facilisis pharetra elit sapien orci. Cursus in eget maximus, vitae amet mi tempor dolor mi vehicula. Ligula eu mi a nunc. Vulputate auctor at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Neque orci ac tortor fringilla nisi gravida aliquet lacinia sodales, mi pharetra porttitor leo mauris vulputate pharetra iaculis sit tempus pretium lacus etiam facilisis nisl.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Id gravida et turpis vulputate sit, placerat augue lectus posuere bibendum. In diam placerat faucibus quisque etiam turpis leo. Natoque aenean sit turpis quisque finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description Pulvinar tempus morbi morbi vel. Sed lectus blandit velit augue pellentesque. Cras nam sollicitudin mi viverra condimentum in auctor, dictum fringilla laoreet cursus morbi risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "This is the service short description",
      "long_description": "long description Enim vehicula dui mi cras euismod dui, curabitur accumsan placerat mattis nam. Justo euismod faucibus leo. Au porttitor suscipit augue blandit tempus mollis vulputate dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Tristique felis velit lorem tempor tristique ultricies elit euismod nisl, viverra blandit natoque eget lacinia laoreet proin in vulputate. Quis pulvinar enim porttitor turpis purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Solexis",
      "short_description": "This is the service short description",
      "long_description": "long description Ac eti sit tempor aliquam sem non, dictum hendrerit gravida justo lobortis pretium pharetra, curabitur pulvinar adipiscing ut. Curabitur facilisis id purus. Iaculis lacus id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Nunc consectetur sollicitudin eu ultrices. Quis enim pulvinar i tempor velit consequat eget sollicitudin amet tortor ultrices eu, ligula posuere porttitor tempus, magna imperdiet ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis gravida scelerisque pellentesque tempus natoque mi ultrices tristique tristique mi. Non blandit justo lorem blandit vulputate blandit eti au. Finibus sodales ex viverra eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Connic",
      "short_description": "This is the service short description",
      "long_description": "long description Lectus eu vulputate sem finibus rhoncus, hendrerit nisl sollicitudin pellentesque. Maximus ligula sit velit ipsum finibus lacinia proin erat. Pulvinar augue gravida enim pharetra pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Cras sagittis nisl dignissim pharetra vulputate risus diam mauris scelerisque. Enim et adipiscing tempor. Sollicitudin faucibus sodales nam viverra. Vehicula ultrices consectetur ut bibendum eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor metus mauris imperdiet justo rhoncus eti vehicula nulla nunc id purus quisque leo diam lacinia. Id finibus augue magna cras aenean sem et rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Imperdiet placerat id etiam nisl auctor. Adipiscing felis non suscipit aliquet fringilla morbi ultricies curabitur. Sapien eu nunc sagittis in mauris sem posuere ligula dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "This is the service short description",
      "long_description": "long description Pharetra mollis pharetra lorem nulla aliquam. Felis sem massa i auctor, finibus mi maximus justo, augue massa augue e, tempus rhoncus bibendum elit ut eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Vulputate suscipit diam sodales risus id natoque, ultricies eu neque massa e, tristique enim nulla augue auctor aliquam ultrices, maximus consectetur elementum faucibus gravida tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Nisi dignissim nulla pulvinar curabitur. Dui vehicula metus vehicula non ultricies elit. Eget diam eros cras consequat sollicitudin, proin tristique quisque quis tincidunt lacus laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "This is the service short description",
      "long_description": "long description Dignissim vel pretium fringilla porttitor neque, condimentum nam lacus magna. Purus euismod ultrices mollis aliquet, a placerat ultrices sodales et eget erat ac sagittis lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "This is the service short description",
      "long_description": "long description Purus augue hendrerit nisi suscipit i iaculis condimentum. Viverra risus rhoncus arcu iaculis. Massa ipsum magna rhoncus elementum, aliquet ac hendrerit arcu placerat justo lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "This is the service short description",
      "long_description": "long description Mattis vitae non fringilla est. Finibus vitae tempus felis iaculis, etiam tempor pretium dictum, hendrerit quisque nisl sem. Morbi cras ante cursus. Id lorem ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Ut a leo sem metus. Maximus massa blandit dolor, natoque adipiscing elit proin sed. Turpis natoque vulputate a non laoreet etiam. Bibendum diam tempor eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Consectetur euismod ex tempus metus. Laoreet tempus nunc suscipit lobortis felis, pulvinar dolor in sodales fringilla. Facilisis maximus lacinia aenean augue velit etiam vitae mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description At placerat quis diam a ligula i, augue adipiscing ut lorem, tempor ornare donec massa tortor arcu. Cursus hendrerit nisi aliquam. Diam hendrerit non cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "This is the service short description",
      "long_description": "long description Iaculis quisque ultricies mi sapien ultricies amet bibendum maecenas posuere ante metus. Ex donec lacinia massa felis ante vehicula faucibus quis. Porttitor purus i ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum eu accumsan sapien maximus au laoreet auctor massa. Imperdiet eget consequat ligula. Cras a suscipit eu sit. Suscipit fringilla quisque cras lobortis in arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "This is the service short description",
      "long_description": "long description Est maximus e sodales sodales aliquet vel adipiscing in vehicula facilisis tortor tincidunt placerat. Fringilla orci sapien ut lectus nibh pretium diam nibh condimentum tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Mi viverra dignissim nunc curabitur elementum euismod. Proin velit neque in vitae. Cras lorem maecenas lacinia mollis nibh id tempor magna lacinia dignissim eti consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "This is the service short description",
      "long_description": "long description Sit est mauris tempor est natoque imperdiet natoque. Quis cursus ac lectus, felis aliquam nulla turpis diam. Elit fringilla leo arcu, erat tempus lobortis ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "This is the service short description",
      "long_description": "long description Pellentesque vehicula cras id ligula commodo. Consequat enim blandit lacinia. Turpis donec eu velit. Nisi vel aliquam pellentesque at ornare enim tempor quis bibendum auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "This is the service short description",
      "long_description": "long description Ex facilisis i tempus cras eget augue nam pharetra neque pellentesque. Eti fringilla tincidunt ante. Turpis in sollicitudin ligula nibh dictum lacinia erat erat aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "This is the service short description",
      "long_description": "long description Consectetur ornare ultrices commodo consequat sollicitudin, sed tortor non ut. Facilisis dolor ipsum id. Metus vitae massa aenean. Tempus ornare in vel. Adipiscing donec felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "This is the service short description",
      "long_description": "long description Nunc ligula lacinia sed dictum nibh pellentesque. Non eti gravida finibus a proin, e ex in maximus ut, in elementum aliquam mollis consequat mattis enim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Logico",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis a nulla nisl morbi ut purus. Neque vestibulum auctor quisque hendrerit. Placerat id proin gravida morbi euismod, blandit tristique in vestibulum hendrerit id natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Mauris quisque ultricies e est, ut cras condimentum tincidunt blandit leo mi mattis, nisl e lacinia erat enim. Commodo vel erat dui facilisis consectetur eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "This is the service short description",
      "long_description": "long description Mattis justo dolor mauris neque, at nunc dignissim vehicula. Gravida donec tempor maximus proin velit sed eu finibus dictum. Risus enim porttitor maximus risus euismod.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet laoreet pretium porttitor lacinia risus. Viverra neque faucibus condimentum ultrices curabitur quis velit, tristique pharetra consequat laoreet mi. Id pretium felis mi non enim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet bibendum ipsum lacinia ligula, sed ut ante hendrerit velit. Nulla lacus fringilla hendrerit a consequat. Enim eros sem at pretium. Risus vehicula purus sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "This is the service short description",
      "long_description": "long description Felis laoreet ac eu curabitur ante. Mollis eros erat lacinia proin vel. Commodo nisl imperdiet accumsan, curabitur consectetur eget eget a. Ultrices laoreet risus sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "This is the service short description",
      "long_description": "long description Sollicitudin sed sed ligula eu vel maecenas commodo dolor, sapien nisl quisque est sapien. Facilisis iaculis donec donec augue porttitor, et accumsan sagittis nisi lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description Mi nisi neque suscipit ex. Lobortis ex nibh lectus. Adipiscing lacus nisl maximus cursus dignissim. Enim viverra lacus non. Cursus nisi gravida mauris faucibus laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "This is the service short description",
      "long_description": "long description Id vehicula mauris augue quisque non, et pellentesque maecenas faucibus. Dolor justo proin eti. Tempus gravida at viverra nibh. Maximus felis accumsan in scelerisque risus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "WestGate",
      "short_description": "This is the service short description",
      "long_description": "long description Suscipit neque eget posuere tempor velit nisi quisque dictum, tempus curabitur justo neque. Metus lorem adipiscing blandit nunc arcu finibus proin suscipit. Eu posuere ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Est morbi imperdiet sit eget lorem donec sagittis bibendum et nisi pharetra. Condimentum nulla est maximus ante non lacus. Enim ligula ante eti mauris accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor erat velit nisi ipsum lacinia laoreet nam sem pharetra. Ex imperdiet orci justo sem. Eget mi felis condimentum sit aliquam dignissim mollis suscipit aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Nam finibus ligula et eu placerat proin. Ornare velit id au vel gravida mi a euismod, placerat adipiscing enim cursus aenean mauris imperdiet a ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Logico",
      "short_description": "This is the service short description",
      "long_description": "long description Commodo blandit eros eget posuere commodo lobortis est et velit diam aliquet. Eget pulvinar ornare cras quisque. Hendrerit tempor neque tristique sit tempor finibus lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description In vestibulum gravida hendrerit id tincidunt quis nibh lacinia. Aliquet iaculis risus a justo. Id sed porttitor suscipit, ligula curabitur maecenas eu etiam gravida eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Neque adipiscing proin placerat eti vestibulum est eros est purus massa felis. Sodales mattis at mauris. Dictum blandit consequat ultrices pharetra laoreet vulputate consequat elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis dolor sit eget aliquet nibh. A orci aenean magna nulla. Est pellentesque morbi in nulla mauris sed orci vestibulum purus pulvinar sodales nibh natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "This is the service short description",
      "long_description": "long description Euismod justo massa sodales magna ligula, dictum tempus finibus tempor vulputate maecenas quisque imperdiet elit. Dictum augue blandit ultricies mollis amet, purus maecenas consectetur pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "This is the service short description",
      "long_description": "long description Ac vulputate velit euismod cursus metus e lectus, placerat nulla id enim lobortis elementum vestibulum tristique pretium quisque mollis. Hendrerit nisi non facilisis blandit nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "This is the service short description",
      "long_description": "long description Ac velit proin quisque dictum felis vulputate ligula, scelerisque elit tortor e, i lacinia nisl nisi risus, maecenas neque au orci felis. Lobortis euismod aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "This is the service short description",
      "long_description": "long description Diam sodales rhoncus non erat et donec. Ut suscipit pharetra mollis placerat accumsan. Proin quis imperdiet elementum sed, sodales lorem mollis nibh dolor bibendum ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Accumsan imperdiet donec ante pellentesque. Nibh morbi viverra a sit lacinia lorem velit in ac. Arcu tincidunt ultricies mattis. Eu tincidunt a cras magna purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Ultricies risus nunc ut curabitur viverra et imperdiet, facilisis elementum ac cras lacinia pulvinar turpis morbi sodales nunc, aenean at pharetra maecenas in auctor scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Storex",
      "short_description": "This is the service short description",
      "long_description": "long description Massa sollicitudin elit justo blandit, magna placerat nisi tempor euismod tempus. Commodo sed scelerisque aenean. Blandit scelerisque condimentum facilisis, consequat amet vel nunc maecenas erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Imperdiet mollis arcu ut iaculis. Placerat consequat tincidunt velit non tincidunt fringilla ante mollis posuere arcu lacinia i eu sem, ex ornare accumsan sagittis ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Nitrocam",
      "short_description": "This is the service short description",
      "long_description": "long description Purus erat etiam sit bibendum augue aenean euismod aenean. Justo lobortis cursus sed adipiscing. Lacinia velit hendrerit magna sollicitudin, dignissim velit lectus iaculis velit donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Maecenas ipsum mi enim tempor dui facilisis. Tortor lacinia arcu metus mattis sed, eu dolor pellentesque ante condimentum magna condimentum in vitae. Vel orci maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "This is the service short description",
      "long_description": "long description Sapien leo enim vel scelerisque metus porttitor a viverra dolor augue metus, amet felis nam donec bibendum massa commodo. Posuere laoreet et ornare arcu lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum nibh sapien sagittis faucibus i tempor pellentesque morbi scelerisque elit amet, non cursus vulputate accumsan quisque mi in vitae a eget, ultrices tristique consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Placerat iaculis pulvinar est augue. Finibus pulvinar finibus maximus, consectetur pulvinar nunc eros tempor. Justo dolor quis mauris. Fringilla nisl magna metus. Placerat sagittis maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "This is the service short description",
      "long_description": "long description Quis neque non pretium tincidunt i ligula, risus tristique laoreet tortor consectetur, nibh lacus eros natoque, eu justo tortor porttitor eu, morbi massa e vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit nisl ex proin posuere cursus ante, proin proin ultrices lacus auctor nisi dui. Viverra finibus pretium quis hendrerit. Sodales porttitor tempus auctor erat at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt bibendum mattis quisque ex elit condimentum. Porttitor pretium ac fringilla donec. Eti at maximus ligula tempus faucibus etiam scelerisque nam vel dui purus tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Infracom",
      "short_description": "This is the service short description",
      "long_description": "long description Facilisis vulputate mattis vestibulum eros diam, etiam iaculis lacinia maximus elit pulvinar dolor tortor, erat sagittis pulvinar turpis erat, eti lacinia au elit tristique orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Etiam elit magna et morbi ipsum nulla velit curabitur. Nisi sollicitudin sed laoreet mattis condimentum elit felis bibendum. Leo aliquet fringilla mollis enim tempus nisl.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "This is the service short description",
      "long_description": "long description Eros dolor blandit ornare sollicitudin neque ut purus. Tortor erat quisque ornare in enim ipsum cras fringilla lorem facilisis tempor, eu nisi diam auctor sem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Ultrices metus morbi viverra posuere tempor sollicitudin enim, amet adipiscing ut vestibulum morbi. Tristique mollis quisque enim bibendum, vitae natoque viverra orci commodo suscipit dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet rhoncus finibus pharetra maecenas. Posuere metus suscipit sit porttitor pharetra enim. Quis aliquam justo neque sagittis, pulvinar rhoncus erat tempus risus mollis enim aenean.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis sollicitudin purus pulvinar elementum velit turpis eros risus magna. Nisi augue e fringilla lectus id donec sodales sit pretium pellentesque, gravida au augue mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis ac nibh dignissim pharetra id neque sed metus nisi sapien quisque aliquam, a scelerisque orci ut lectus mollis a tempor elementum nulla eget purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Protheon",
      "short_description": "This is the service short description",
      "long_description": "long description Felis scelerisque suscipit elementum ipsum facilisis. Nunc suscipit metus vitae, erat eget vitae maecenas posuere, facilisis condimentum a viverra sed, sollicitudin faucibus aenean commodo maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "This is the service short description",
      "long_description": "long description Felis porttitor sed dui orci. Tincidunt a quisque ultrices pharetra sed justo. Ex eros faucibus consectetur, iaculis suscipit aliquam massa vestibulum, finibus tempus mauris pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum imperdiet lacus ex laoreet eget imperdiet. In elit lacus elit orci posuere proin. Commodo vel magna mollis curabitur, scelerisque viverra in consequat morbi ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis e eu faucibus au donec mattis dignissim. Auctor lacinia consectetur eget sodales nisi i consectetur. Hendrerit blandit erat nunc dui, felis lacinia cras leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Galcom",
      "short_description": "This is the service short description",
      "long_description": "long description Curabitur mauris condimentum consequat etiam lacinia, vulputate et i nibh donec nunc nibh. Elementum in suscipit ultrices maximus id ac. Auctor sapien sollicitudin au nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Vel auctor aliquam aliquam magna. Id auctor dolor risus id. Vel vehicula ligula laoreet. Eu cras quisque ac elit vel consectetur eros. Ut tincidunt blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "This is the service short description",
      "long_description": "long description Cras nunc sodales dignissim natoque neque. Mollis laoreet auctor lacinia etiam amet morbi eu. Accumsan commodo nam e, posuere tortor accumsan ex iaculis sed sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description Nibh massa fringilla erat i, sollicitudin lobortis nisl bibendum quis cras, quis sem maecenas ex ante scelerisque. Dignissim a pharetra lectus commodo. Justo sem faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Kancom",
      "short_description": "This is the service short description",
      "long_description": "long description Velit metus tristique sodales sagittis nunc placerat dignissim massa finibus ornare. Pulvinar neque euismod nunc. Nam ut dictum turpis. Mauris euismod maximus lacinia vulputate elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Freecast",
      "short_description": "This is the service short description",
      "long_description": "long description At i mattis neque condimentum. Tempus tristique sodales tortor, tincidunt mollis arcu eu e. Quis morbi proin finibus magna enim accumsan maximus sit maximus consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Kancom",
      "short_description": "This is the service short description",
      "long_description": "long description Tempus felis nisi tortor nulla. Sodales curabitur nulla ac. Maecenas sagittis at id. Enim nunc arcu commodo nibh, pulvinar in lacus proin elementum aliquam quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "This is the service short description",
      "long_description": "long description Cras e enim metus ultrices curabitur arcu neque. Metus sapien lacinia vehicula accumsan euismod, faucibus vehicula elit in. Bibendum consectetur tempus scelerisque ultrices neque magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "This is the service short description",
      "long_description": "long description Facilisis ipsum quis diam ornare etiam mi est blandit, aenean porttitor quisque mattis amet mauris e maximus nisl eros ac natoque. Fringilla nisi rhoncus vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description At fringilla auctor scelerisque lacinia, diam gravida dignissim condimentum, sodales mauris nisi mattis tempus, eu sed elementum arcu vestibulum, ultricies velit nam placerat purus quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Est ut lacinia suscipit donec vulputate ornare risus natoque consectetur sem. Rhoncus vitae aliquet lacinia finibus felis ornare. Sodales diam sapien ut et i vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "This is the service short description",
      "long_description": "long description Euismod at ultrices mi donec lacinia maximus. Eu leo ac cursus mattis au nisl hendrerit. Adipiscing purus morbi sollicitudin enim, facilisis au proin cursus dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Superwire",
      "short_description": "This is the service short description",
      "long_description": "long description Bibendum laoreet condimentum mauris elit ut lorem sapien. E adipiscing euismod mi, erat posuere tempus sapien vestibulum condimentum e tristique cursus facilisis nunc magna ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Condimentum ultrices diam iaculis nisi facilisis. Dui mi id eget. Sollicitudin lobortis augue felis metus mattis ornare justo a, ut maecenas mattis condimentum sem quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "This is the service short description",
      "long_description": "long description Amet suscipit ex ac id sollicitudin au lacinia scelerisque, i tempor scelerisque nunc posuere at, erat pellentesque faucibus tristique est eu lectus ipsum massa eu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Sagittis ultricies ornare mauris massa pulvinar lorem cras. Augue quis eget e bibendum. I eget lectus faucibus sagittis. Turpis amet id maecenas au diam eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "This is the service short description",
      "long_description": "long description Ligula augue dictum suscipit elementum adipiscing, tristique tempor cras mauris lacinia id ligula in. Vitae quis laoreet dictum. Amet adipiscing amet erat sem lacinia quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Infracom",
      "short_description": "This is the service short description",
      "long_description": "long description Vel ultrices ultrices fringilla consectetur imperdiet id. Placerat amet blandit ipsum lacinia ultrices curabitur pharetra. Nisl iaculis mauris mi. Posuere eget etiam suscipit tincidunt sem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Opticast",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium dolor e dictum curabitur diam rhoncus. Lorem quis consectetur turpis. Metus commodo laoreet ex. Dignissim ultricies laoreet augue condimentum nunc amet neque orci vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "This is the service short description",
      "long_description": "long description Suscipit mi eti e ipsum leo. Iaculis posuere at sollicitudin aliquet tincidunt dolor erat morbi maximus. Bibendum elit pellentesque metus, dictum orci ex consectetur diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "This is the service short description",
      "long_description": "long description Mauris ultricies curabitur mollis quis sem quisque dictum nisi dignissim. Felis sodales nibh ex ornare vel morbi vitae laoreet vehicula. Magna curabitur sagittis gravida nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Nitrocam",
      "short_description": "This is the service short description",
      "long_description": "long description Aenean quis condimentum orci donec, cras eget pharetra nulla, rhoncus neque eti vitae. Augue morbi sed sagittis, eget erat i aliquet sit. Eti purus fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis dolor ac lacus pulvinar eu, mattis sit at etiam est sollicitudin arcu. Orci tortor sed mattis faucibus nam. Magna eros mauris enim vulputate amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Aenean nunc mauris enim mauris maximus eu auctor natoque, vestibulum natoque adipiscing turpis. Nam cursus e quisque, arcu ex sagittis mollis i arcu tortor ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description Fringilla faucibus ornare purus tincidunt quisque auctor ante. Mollis ultricies sodales consequat dictum ornare. Quis ornare aliquet dignissim, euismod eti dignissim e adipiscing in fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "This is the service short description",
      "long_description": "long description Pellentesque tincidunt eros tristique fringilla ex ornare purus ut, sollicitudin aliquet nulla vulputate. Nunc mi turpis purus sagittis, cras neque tincidunt accumsan, porttitor au rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Kancom",
      "short_description": "This is the service short description",
      "long_description": "long description Orci tristique mattis quisque tempus felis, sollicitudin a enim cursus, mattis sapien tempor maecenas nisi, mauris purus iaculis ipsum. Dictum aenean bibendum proin at proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Storex",
      "short_description": "This is the service short description",
      "long_description": "long description Lacus sed commodo risus nisi ut vehicula ut, non maximus hendrerit vel vitae. Erat condimentum pulvinar nam lacinia aliquet euismod, vel faucibus eu pulvinar magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Protheon",
      "short_description": "This is the service short description",
      "long_description": "long description Eget pharetra finibus dignissim gravida mi eti. Magna erat posuere eu imperdiet tristique lacinia ligula sagittis accumsan auctor maximus. Ultricies posuere nisl gravida non pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Facilisis finibus rhoncus sodales cursus. Posuere erat gravida natoque quis ex dictum natoque laoreet. Amet amet eros et eti. Laoreet sit adipiscing vitae proin mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "This is the service short description",
      "long_description": "long description Purus nibh auctor et elementum posuere, posuere eu rhoncus cras maximus aliquam est, magna imperdiet eros orci amet. Quisque orci elit lobortis cursus lacinia donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "This is the service short description",
      "long_description": "long description Suscipit nulla au sollicitudin risus, eget sem vestibulum suscipit condimentum, mattis risus metus metus lacinia, rhoncus maecenas ligula fringilla ante, orci iaculis a suscipit aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "This is the service short description",
      "long_description": "long description Eti pretium et proin velit sapien adipiscing imperdiet scelerisque leo consectetur condimentum, nulla eti scelerisque tortor leo, bibendum bibendum massa velit maximus curabitur tincidunt nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "This is the service short description",
      "long_description": "long description Et eros i eros laoreet, nulla sapien lectus auctor sollicitudin ipsum eros ornare risus. Faucibus vulputate vitae gravida pretium tristique. Lectus laoreet faucibus pulvinar arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Protheon",
      "short_description": "This is the service short description",
      "long_description": "long description Placerat leo nunc in imperdiet i tempus dignissim dignissim, finibus euismod curabitur posuere proin maximus, sapien viverra ut hendrerit, aliquet tempor tristique nisl commodo sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Nunc i quis cras ultrices scelerisque morbi. Sit laoreet dignissim eget ante, massa maecenas pellentesque diam, placerat tristique pulvinar nibh e. At tempus et dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Justo iaculis purus proin tempor. Eu ut laoreet pretium sapien. Sed vitae elit quisque i neque dui. E lorem nam pulvinar mattis, nunc a sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Baramax",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis mauris commodo sed elit aliquet eu sodales lacinia porttitor sit justo elementum, nam cursus diam dictum scelerisque non quis vel felis ante i lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Viverra tincidunt rhoncus non condimentum i, nisi laoreet dictum eget. Arcu sit cras vulputate scelerisque. Placerat sem tristique gravida leo, elementum posuere lobortis felis auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Felis nisi pretium leo vulputate, et maecenas neque risus at massa, vel maecenas tortor metus, consequat nunc lectus porttitor. Cras finibus leo mi tempor eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor neque accumsan suscipit nunc, e e arcu nunc blandit condimentum aliquam lacus, cursus vulputate nunc tempus quisque adipiscing vulputate etiam lectus eti eti sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "This is the service short description",
      "long_description": "long description Mi sapien quisque eros vehicula, ac quis elit blandit pretium tempus. Velit maximus mauris orci eget, donec au nunc quisque erat vel elementum hendrerit consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "This is the service short description",
      "long_description": "long description Tempor accumsan commodo elementum lectus posuere, gravida sed vel accumsan orci. Risus turpis eu justo fringilla. Sodales lacinia donec imperdiet. Dui magna lobortis rhoncus orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "This is the service short description",
      "long_description": "long description A neque vestibulum neque suscipit facilisis. Lorem vulputate in eti pellentesque accumsan lacinia, morbi aliquam finibus vitae. Eros tincidunt consectetur diam. Eu aliquet quisque lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Kancom",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor est cursus vulputate fringilla, vestibulum in curabitur ligula sapien viverra iaculis risus. Porttitor dictum dictum au lacinia tempus lobortis, quisque bibendum natoque purus condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "This is the service short description",
      "long_description": "long description Adipiscing amet i tempor turpis blandit neque. Nunc et porttitor proin felis leo diam. Porttitor porttitor ligula porttitor. Sollicitudin bibendum eu natoque nunc id auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "This is the service short description",
      "long_description": "long description Morbi tincidunt nunc arcu lacus, id lacinia sit sapien diam maximus proin etiam. In pulvinar sodales pellentesque sit ac proin. Dignissim au magna sollicitudin enim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "This is the service short description",
      "long_description": "long description Maecenas commodo erat e dictum non pellentesque tortor, pharetra sodales tempor tortor, sit tincidunt ligula velit placerat. Aliquet euismod leo nunc natoque. Metus mi nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "This is the service short description",
      "long_description": "long description Sem et consectetur au lacinia sed lorem elementum mattis leo commodo. A pharetra vel lacinia ex sed risus ex vestibulum facilisis. Aliquet maecenas ac maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis curabitur lectus id tristique auctor scelerisque id tempor. Non condimentum felis aliquet euismod. Viverra laoreet lacinia orci, pretium pellentesque nam leo mollis at scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Neque quisque purus mi aliquet nulla. Aenean pellentesque magna morbi vehicula. In ornare ultrices quis nisi cras scelerisque quis aliquam ligula a, facilisis condimentum i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia iaculis nisl auctor gravida, suscipit id iaculis dolor viverra mollis. Maecenas consectetur neque neque tristique, aliquet quisque nisi consectetur sit ac hendrerit consectetur velit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "This is the service short description",
      "long_description": "long description Proin hendrerit mollis finibus metus, mauris laoreet cras non natoque lacinia. Euismod ornare viverra felis i tincidunt, placerat nunc maecenas magna pharetra a tincidunt sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "This is the service short description",
      "long_description": "long description Sem commodo finibus erat non. Condimentum nam accumsan ultricies nam, ligula massa justo tincidunt turpis nam nisi risus purus, ante accumsan ultrices consequat aliquam suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "This is the service short description",
      "long_description": "long description Risus lacus blandit quisque lorem. Vel elit a nunc mi. Ac cursus hendrerit diam pharetra gravida, maecenas sodales mattis iaculis sagittis pellentesque pellentesque nibh adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "This is the service short description",
      "long_description": "long description Justo erat lacinia a ipsum rhoncus suscipit. Porttitor id lacinia massa ligula nunc felis et. Ante leo nisi neque. Natoque justo suscipit maecenas donec au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "This is the service short description",
      "long_description": "long description Sodales natoque hendrerit suscipit bibendum, enim magna e faucibus. Ultrices morbi proin bibendum. Au gravida adipiscing dignissim. Eu viverra mauris tortor condimentum, finibus turpis mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Facilisis eti sollicitudin nisl pellentesque lobortis etiam pharetra pretium sollicitudin dictum. Risus maximus cras neque dignissim lobortis quis accumsan facilisis mauris ante ut ex imperdiet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "This is the service short description",
      "long_description": "long description E mi ex purus eros consequat felis morbi sagittis aliquet. In vel mi ac vehicula. Amet facilisis lobortis scelerisque condimentum, dolor et ligula lacus id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor sodales sit erat vehicula curabitur, vehicula vel i purus vitae etiam. Nulla ex eget scelerisque faucibus massa scelerisque ex finibus, sapien commodo mi eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Viverra lacus non facilisis au. Pharetra sagittis cras magna ornare. Viverra pulvinar mattis at porttitor. Elit erat dictum quis consequat etiam id vitae e consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "This is the service short description",
      "long_description": "long description Enim cras ut adipiscing eu. Lobortis nibh suscipit sagittis auctor, lorem posuere metus quisque, euismod lacinia vitae dictum nisi nulla non magna non lacinia lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Morbi amet sapien pharetra hendrerit massa ante, bibendum orci finibus e. Nisl placerat nunc viverra. Nibh aenean eti dui. Tortor blandit natoque eros elit tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "This is the service short description",
      "long_description": "long description Posuere tempor leo vehicula sit, nulla suscipit a ex ultrices mi. Erat nulla iaculis nunc aenean eti finibus consectetur elementum fringilla eros e bibendum tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Opticast",
      "short_description": "This is the service short description",
      "long_description": "long description Hendrerit elementum nam aliquet vulputate in maecenas erat nulla. Turpis lacinia turpis lobortis faucibus porttitor. Nisl turpis arcu cursus neque, placerat eros erat sem nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description Pellentesque massa diam blandit mollis, proin scelerisque fringilla mollis. Vulputate hendrerit ornare sodales maximus sapien natoque, in sit lorem etiam augue consequat nisl ex dolor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Sollicitudin at etiam vitae pretium arcu, lacinia mi commodo nibh, dignissim dictum aliquam commodo amet, quis vitae magna adipiscing aenean enim ex neque maximus sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Imperdiet nam non metus amet suscipit quisque. Id bibendum velit sem nam neque mi bibendum vulputate imperdiet. Ut justo ultricies elementum condimentum. Eros lectus sem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Bellgate",
      "short_description": "This is the service short description",
      "long_description": "long description Commodo sem aliquet tincidunt lacinia, morbi lorem ultrices lorem nisl elit hendrerit tincidunt placerat. Donec etiam vehicula arcu vehicula. Eti hendrerit gravida tempor iaculis consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Etiam imperdiet massa tempor accumsan. Commodo curabitur arcu orci quis tortor. Fringilla arcu tempor nam cras donec iaculis. Sagittis justo aliquam tristique tristique justo ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "This is the service short description",
      "long_description": "long description Adipiscing accumsan hendrerit mi magna. Vitae auctor elit dolor blandit erat lorem, orci placerat tempor diam aliquam ut magna justo. Amet purus a pulvinar vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Dui lacinia aliquam vestibulum vulputate, lacinia pellentesque eget iaculis ut, amet arcu id eti metus, e adipiscing pellentesque accumsan. Accumsan massa consectetur tempor orci est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit ante mauris maximus eget. Elementum rhoncus mattis cursus, ornare facilisis massa elementum scelerisque enim, pellentesque accumsan lorem lorem aliquet dignissim quisque posuere enim rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "This is the service short description",
      "long_description": "long description Accumsan fringilla sem ac leo. Neque ipsum mattis maximus. Dignissim dictum nam pharetra est aenean imperdiet commodo ac lorem, mi facilisis felis diam au euismod.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis sit amet nisi arcu. Leo accumsan nisl etiam dignissim sodales, vestibulum laoreet pharetra adipiscing elementum sem ultrices dui. Dignissim dignissim sodales leo tempus bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description Tempor lobortis lacinia arcu i pellentesque, enim dignissim iaculis eget neque. Gravida finibus neque sodales sapien laoreet scelerisque, ultrices suscipit curabitur fringilla, magna facilisis consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "This is the service short description",
      "long_description": "long description Justo aliquet eu rhoncus sodales. Eti nulla non dolor mauris sit. Risus tempor ante massa nisi gravida, diam finibus imperdiet maximus. Sagittis vehicula at donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Sophis",
      "short_description": "This is the service short description",
      "long_description": "long description Suscipit nulla aliquet commodo arcu. Posuere mollis quisque aliquam. Ipsum donec vitae maecenas. Non in eget tristique. Metus dolor scelerisque vestibulum placerat justo lacinia tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis nisl eget ac nisl dictum dolor, fringilla cras augue lacinia au mollis arcu. Eget vehicula diam mauris velit. Aliquet cursus posuere mollis sed ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Connic",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus pulvinar nulla quis vulputate quisque faucibus dignissim i, mauris ante risus turpis sagittis vestibulum proin cursus. Eros i vel sollicitudin. Leo diam vulputate porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "This is the service short description",
      "long_description": "long description Nam commodo velit dolor lacinia finibus maecenas pretium. Faucibus vestibulum purus lectus vestibulum. Orci e aliquam nunc. Nisl ut sem tempor cras, vel cras elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Vitae lacinia i leo tristique ex pellentesque donec dolor. Lectus morbi tortor sem vestibulum sollicitudin. Au rhoncus ante gravida ex maecenas. Sed eti ultrices quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "This is the service short description",
      "long_description": "long description Sagittis orci nisl elementum accumsan. Neque pharetra tristique eget eget imperdiet diam, sed eu mollis lacus. Dignissim sapien e placerat erat, turpis vitae elit faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description I nisl nulla e commodo. Viverra lacus vel dignissim. Mi sem gravida etiam. Elementum sagittis cras lectus i et in, risus dignissim au sit turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "This is the service short description",
      "long_description": "long description Neque non nisl ante blandit purus. Quisque proin ligula sem aliquet elit. Tincidunt au quisque lacinia tempus ut dui, etiam vulputate curabitur posuere lacinia sem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "This is the service short description",
      "long_description": "long description Vulputate eti vulputate pretium sagittis. Lacus donec viverra vel au risus ultricies. Viverra pellentesque cursus elementum au vel cras est. Tristique leo pulvinar proin metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "This is the service short description",
      "long_description": "long description Donec facilisis bibendum e consectetur enim pellentesque. Porttitor tristique eti dignissim lectus. Pulvinar est rhoncus consequat, ornare hendrerit tortor nisl in, sollicitudin nibh ac tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium nisi nibh laoreet nam. Eros au ligula enim metus mollis vehicula. Suscipit suscipit cras pulvinar. Vestibulum fringilla ligula mollis nisi fringilla non blandit maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Connic",
      "short_description": "This is the service short description",
      "long_description": "long description Augue est leo commodo in, quis proin gravida in. Tempor eu purus massa, risus cras felis non. Maecenas lacinia ante augue proin. Ultrices lacus ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "This is the service short description",
      "long_description": "long description Tempus dolor sapien tortor mauris, dictum nibh maecenas aenean iaculis, pulvinar nibh i massa. Leo vestibulum eu ornare. Lacinia consequat cras maecenas felis tempor a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "This is the service short description",
      "long_description": "long description Faucibus massa purus bibendum purus velit tempus consequat. Euismod magna tortor donec. Etiam lacus dignissim enim. Suscipit aliquet sapien magna sem nam at augue hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "This is the service short description",
      "long_description": "long description Et tortor a sollicitudin facilisis, leo ipsum consectetur cursus. Eros pretium velit metus commodo. Ornare etiam auctor neque, curabitur leo consectetur eti est adipiscing mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "This is the service short description",
      "long_description": "long description Finibus ornare tempus pretium au lorem e diam magna lobortis, sem mi pretium eu condimentum consequat placerat adipiscing ex. A sapien vulputate eros non mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "This is the service short description",
      "long_description": "long description Tempus erat nulla est nulla. Elementum vel sodales vel pharetra. Magna quis ultricies ornare lacus vitae, pellentesque sit ante justo ac suscipit non neque tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Storex",
      "short_description": "This is the service short description",
      "long_description": "long description Nibh risus mollis eros ligula pharetra mi purus proin bibendum id in au cras, sem non risus nam mollis i. Sit eti adipiscing aliquam diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description Scelerisque ipsum quis dolor blandit blandit, tempus sem porttitor mattis, sapien elit rhoncus auctor. Elementum purus finibus consequat non sit nam proin placerat tempor sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "This is the service short description",
      "long_description": "long description Eget elementum sem aenean proin mi in nunc auctor, vestibulum vestibulum mollis nisi nisi ipsum pretium eros commodo metus. Pellentesque i suscipit metus morbi porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Mauris dictum cras proin bibendum dictum, nunc maecenas donec turpis pretium viverra bibendum diam sapien. Ipsum bibendum purus posuere sodales etiam. Leo nisl vehicula vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Protheon",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium vehicula eti sodales finibus ante elementum pellentesque. In faucibus orci mattis, cursus et arcu lacinia rhoncus. Nisi ligula quis imperdiet, nibh dictum lacinia auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia neque elementum cras finibus, cursus magna sapien amet, enim sodales quis sapien, tristique massa viverra donec at eros, quis dolor consequat sodales condimentum lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Vel ultricies sapien ut nibh, mollis in et eti maecenas dignissim felis eti. Ultrices dignissim eget enim non. Elit pretium facilisis risus aenean euismod adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Opticast",
      "short_description": "This is the service short description",
      "long_description": "long description Maecenas aliquam sapien bibendum bibendum dictum cursus, a facilisis magna morbi gravida, finibus curabitur augue fringilla auctor ligula. Sollicitudin eti ornare risus lacinia aenean tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Neque posuere purus natoque magna. Nisi ex non vehicula scelerisque dignissim. Cursus erat dui consectetur maecenas. Hendrerit elit imperdiet hendrerit felis. Hendrerit faucibus purus et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "This is the service short description",
      "long_description": "long description Etiam eget justo sollicitudin dictum tempus dignissim accumsan risus turpis mollis, proin suscipit scelerisque consequat. Placerat proin cursus vulputate, nunc neque vulputate mattis cras auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "This is the service short description",
      "long_description": "long description Vehicula velit sapien lorem cras risus commodo et, hendrerit commodo mauris ex, et hendrerit dolor diam augue pellentesque viverra. Nam pretium maximus at in adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "This is the service short description",
      "long_description": "long description Consequat tristique fringilla vulputate vulputate faucibus blandit. Neque quis felis finibus a nisi. Dui diam natoque lectus. Tempus vestibulum est metus au. Metus posuere i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "This is the service short description",
      "long_description": "long description Justo ultricies quisque mi fringilla velit lobortis sodales, ipsum eros nibh posuere faucibus, sem hendrerit massa bibendum tristique elit, faucibus placerat morbi ex diam elementum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "This is the service short description",
      "long_description": "long description Hendrerit dictum donec placerat dolor hendrerit eti. Tempor tortor aliquam placerat ornare. Lacus cursus aliquam etiam scelerisque, natoque orci cursus pulvinar lacinia mi nulla condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "This is the service short description",
      "long_description": "long description Nisl sollicitudin morbi dignissim vel nulla, arcu lobortis ante pulvinar condimentum elit consequat mauris. Elementum e vel ipsum, in ante et placerat dolor aliquet ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Sed ligula dictum gravida mauris. Ipsum vulputate gravida nulla consectetur sem a lacinia imperdiet, ultrices gravida finibus velit. Non aliquam e sodales mauris vitae finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium mollis sit ligula maecenas neque leo nunc est ex. Nunc posuere et sollicitudin. Metus cursus donec posuere maximus iaculis aliquet lobortis. Iaculis imperdiet finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus leo pharetra nisi bibendum. Commodo mi tincidunt maecenas vulputate, nibh ultrices risus mi. Blandit cras lorem consequat. Augue placerat mi et diam placerat a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "This is the service short description",
      "long_description": "long description Nisi pretium lacinia justo faucibus finibus. Maecenas hendrerit risus vulputate viverra iaculis nunc, dictum augue hendrerit ipsum adipiscing sodales gravida. Vulputate non ornare diam viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Vulputate dolor eros sem finibus, imperdiet massa nibh lacinia et enim, curabitur elit pellentesque eros at purus vestibulum. Sodales vulputate metus maecenas felis et neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "This is the service short description",
      "long_description": "long description Dolor ante nisi ultricies rhoncus, consectetur sit felis sit velit posuere magna turpis eget, donec augue pulvinar lorem pulvinar. Viverra consectetur at maximus dolor sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description Risus eget velit consequat pretium morbi gravida placerat dignissim. Proin consequat placerat vestibulum, mattis ultrices tristique mauris curabitur. Suscipit ante id pretium hendrerit neque lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Faucibus felis maecenas sem suscipit turpis auctor neque ipsum lacinia lacus, velit a amet enim sed hendrerit risus quisque. Dolor vehicula condimentum natoque pretium mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Solexis",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus consectetur ac rhoncus ex quis. Massa commodo nunc vulputate consectetur purus ultrices nisl tempus elementum imperdiet gravida massa nam elementum iaculis, maximus lobortis sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "This is the service short description",
      "long_description": "long description Velit est ligula facilisis fringilla purus mauris eti suscipit ante, vel lectus lectus aliquam hendrerit ligula scelerisque aenean. Dictum ornare donec dui euismod sed maximus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Galcom",
      "short_description": "This is the service short description",
      "long_description": "long description Ligula iaculis eu mollis etiam. Velit pellentesque aenean ex blandit posuere lacinia pellentesque consectetur. Ipsum eu in purus euismod mollis nam. Erat mi nunc faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus sagittis lorem amet nunc purus justo ante arcu ut auctor auctor. Sem auctor arcu sem, mi posuere purus tortor fringilla sem ultricies pharetra quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium nam facilisis cras aliquam felis ut vehicula faucibus diam nulla. Dignissim lobortis tempor magna amet vel, at morbi hendrerit ut lacinia mi cras lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit vulputate dignissim tempus ultricies euismod nulla sodales iaculis. Erat pharetra sem fringilla dolor. Dignissim scelerisque mi velit. Ligula diam cras curabitur. Enim porttitor donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Suscipit orci lorem aenean au. Mollis bibendum eti amet. Pharetra adipiscing proin posuere aenean lectus nulla. Lobortis mollis facilisis lobortis ipsum ex. Fringilla vehicula porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "This is the service short description",
      "long_description": "long description Eros erat non tortor lacinia viverra, ultricies nibh nisl imperdiet lacinia condimentum lacinia ac pellentesque, iaculis sit massa ut, commodo nunc ultrices dignissim nam proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Gravida faucibus magna nisi diam quis. Massa aenean sapien finibus nulla aenean quisque placerat tempus. Et hendrerit ac consectetur rhoncus. Consequat scelerisque ipsum est bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Galcom",
      "short_description": "This is the service short description",
      "long_description": "long description Finibus purus vitae au blandit finibus mollis eu. Adipiscing ipsum posuere tempor sagittis mauris adipiscing magna. Dignissim a ipsum erat porttitor aenean sapien aliquam mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "This is the service short description",
      "long_description": "long description Natoque accumsan commodo cursus proin. Ultricies condimentum justo augue at ex accumsan vestibulum, mollis est ipsum imperdiet a ac laoreet pulvinar. Ultricies sagittis laoreet rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "This is the service short description",
      "long_description": "long description Ipsum nibh laoreet placerat sollicitudin. Vitae risus eros augue quis viverra nibh rhoncus tortor ut mi viverra imperdiet nulla magna etiam, a hendrerit non eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Posuere viverra ipsum lacinia natoque faucibus i sollicitudin pretium. Sed et vestibulum dignissim vehicula id, maximus id massa neque. Eti accumsan faucibus elementum pretium justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "This is the service short description",
      "long_description": "long description Non ut augue cursus auctor, ornare maximus blandit id. Vitae natoque i ultrices. Finibus imperdiet amet eu sem. Ac pharetra ornare eget, nisl tempor mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "This is the service short description",
      "long_description": "long description In arcu tempus cursus tortor. Viverra blandit ornare faucibus. I sollicitudin mollis ante pulvinar. Sapien placerat sollicitudin quisque bibendum nulla accumsan sagittis, condimentum viverra lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "This is the service short description",
      "long_description": "long description Velit suscipit risus lacinia lectus, felis faucibus consequat scelerisque lacinia condimentum nulla condimentum laoreet in eget id sapien, nisl tortor rhoncus eu, e a vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Finibus dolor accumsan suscipit ornare maximus vestibulum sem ultrices tempor ultricies. Ante turpis porttitor sem sollicitudin nam lobortis ipsum, cursus consequat tempus cras quis aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Chromaton",
      "short_description": "This is the service short description",
      "long_description": "long description Auctor at eros et quisque metus. Nibh morbi tincidunt maecenas vulputate. I sem justo nam ultrices sem augue proin metus cras ut ac au sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "This is the service short description",
      "long_description": "long description Orci ultricies imperdiet tristique felis ultrices augue ut sagittis lorem dui purus morbi vel eu dolor ligula nisi lobortis tortor auctor sem. Curabitur placerat accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "This is the service short description",
      "long_description": "long description Ornare quis euismod natoque nulla eget arcu, ligula eti elementum consequat maecenas facilisis. Blandit est tempus ligula metus. Lacus tortor sem mollis nisi quis hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Eget maecenas ipsum curabitur maximus massa sed, hendrerit diam risus arcu erat. Orci donec turpis ut ligula natoque. Scelerisque lectus vestibulum ut eti iaculis tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Solexis",
      "short_description": "This is the service short description",
      "long_description": "long description Consequat massa faucibus commodo nisl ipsum. Mauris iaculis cras tortor mollis quis sed rhoncus. Natoque velit est mauris condimentum maximus. Neque eros ante fringilla proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "This is the service short description",
      "long_description": "long description Tempor tempor tempor ex dui scelerisque natoque. In ex maximus posuere augue. Arcu gravida fringilla i fringilla. Blandit maximus adipiscing consequat. Pulvinar massa dolor dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Est porttitor condimentum ultricies adipiscing elementum lacinia. Dui scelerisque suscipit quisque aenean. Lobortis viverra mollis viverra dignissim eti vitae ornare ante leo, e facilisis i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "This is the service short description",
      "long_description": "long description Et dignissim laoreet rhoncus auctor arcu est vitae placerat rhoncus. Pretium sem arcu orci nulla laoreet. Dignissim eros euismod lacinia vulputate non. Neque magna auctor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Ultricies euismod ligula justo condimentum, blandit diam auctor pellentesque mauris, maximus lacinia placerat dolor pretium dictum eu aliquam hendrerit. Porttitor nam a lacinia dictum faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "This is the service short description",
      "long_description": "long description Bibendum aenean proin posuere viverra finibus nisl pellentesque, at orci sodales porttitor neque cursus. Tempus diam pulvinar lacus amet id nisi vel tortor enim metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "This is the service short description",
      "long_description": "long description Enim leo ultricies au ex mattis euismod scelerisque laoreet bibendum cras, nisl porttitor leo sagittis tincidunt amet aenean porttitor a gravida non elementum fringilla eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description In accumsan metus faucibus nisi. Pharetra iaculis viverra metus nisl, augue elit pellentesque ultrices, vestibulum enim porttitor id laoreet e ultrices porttitor tortor nisi neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "This is the service short description",
      "long_description": "long description Sit magna placerat eros finibus tristique lectus natoque diam massa nunc. Arcu nunc lacinia consequat laoreet sem hendrerit dignissim velit i. Nisl maximus consectetur sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "This is the service short description",
      "long_description": "long description Quis aenean purus i pellentesque commodo. Lacus porttitor placerat blandit, vulputate fringilla maximus placerat curabitur, augue vitae lacinia natoque consequat curabitur eti blandit hendrerit nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "This is the service short description",
      "long_description": "long description Mauris donec justo consectetur ultrices. Eu accumsan au commodo in orci eti et maecenas. Mi pretium adipiscing ornare adipiscing rhoncus facilisis. Nam eget ligula lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Sagittis donec velit bibendum lectus. Iaculis pretium enim laoreet turpis nisi eros, suscipit cursus quisque scelerisque elit. Mattis pellentesque iaculis placerat et. Vehicula lectus ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Forecore",
      "short_description": "This is the service short description",
      "long_description": "long description Sapien pharetra gravida etiam auctor, placerat lectus viverra suscipit mattis. Ut tempor pretium laoreet sit elementum. Lacinia nulla sem mollis natoque, id mattis risus est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Neque sem laoreet auctor ligula, amet non quisque tempor maximus mauris nunc aliquet, augue pretium sodales pretium enim neque dui. Porttitor mauris sapien sagittis sodales.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Freecast",
      "short_description": "This is the service short description",
      "long_description": "long description Dui mattis vitae ac suscipit. Nulla tristique commodo a, ornare mauris faucibus viverra nunc, auctor id elit turpis. Turpis arcu hendrerit nibh id mattis pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Storex",
      "short_description": "This is the service short description",
      "long_description": "long description Euismod quis quisque pellentesque eti pellentesque auctor, sed euismod felis quis mauris dictum sodales velit consectetur pharetra e risus pulvinar vitae, mi ornare dictum laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Galcom",
      "short_description": "This is the service short description",
      "long_description": "long description Morbi tristique condimentum orci tempor tempus imperdiet gravida proin dignissim at. Donec eros neque massa tincidunt. Lacinia eros dolor nibh ex non commodo eget placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Keycast",
      "short_description": "This is the service short description",
      "long_description": "long description Lorem tincidunt sem eget sed bibendum lobortis erat, erat nulla massa dolor iaculis at finibus consequat, hendrerit blandit viverra blandit, arcu lorem facilisis eros aliquam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Freecast",
      "short_description": "This is the service short description",
      "long_description": "long description Metus eros vitae nisi risus rhoncus curabitur, quisque quis au vestibulum orci imperdiet adipiscing aliquet eu aliquam. At auctor sollicitudin mattis mattis purus nulla maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus viverra sollicitudin mauris aliquam. Enim ac eget ex. Laoreet magna elementum viverra ac nisi proin mattis condimentum, arcu mi ornare suscipit tristique placerat hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "This is the service short description",
      "long_description": "long description Ultrices enim vitae laoreet cursus. Arcu tristique faucibus sed viverra, lacus vulputate lacinia aliquet at arcu. Elementum euismod aliquet accumsan, auctor leo e hendrerit imperdiet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "This is the service short description",
      "long_description": "long description Nunc lobortis gravida viverra pellentesque gravida nulla nisl fringilla arcu. Blandit vehicula accumsan dictum, et dui facilisis turpis sit. Cursus cras condimentum sed metus natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Tristique iaculis tortor suscipit justo sem sollicitudin lacinia, bibendum aliquam ut scelerisque dictum, mauris elementum cursus arcu. A amet quis nunc viverra mi finibus tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description Donec accumsan sed aenean vel tempus nibh. Ultricies est nisl pharetra est, dignissim at placerat ornare tempor. Euismod amet justo magna non suscipit tempus a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "This is the service short description",
      "long_description": "long description Dui enim accumsan sapien est cursus viverra sit. Elementum ligula dui a. Et ut felis ultricies scelerisque dui auctor placerat, vel amet quis et ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description Risus orci rhoncus nisi vitae a augue mi. Velit adipiscing quis sollicitudin pulvinar augue enim eti. Maximus sed ac imperdiet sagittis leo mi gravida lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Nitrocam",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus scelerisque amet pharetra vestibulum erat non, erat ornare viverra vulputate pharetra auctor pellentesque eget pharetra. Dolor sodales tempus turpis. Consectetur nunc ornare neque curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum magna justo lacus gravida id. Lacinia natoque facilisis consequat dolor magna adipiscing sit finibus quisque maximus vestibulum natoque pulvinar. Accumsan pellentesque proin nibh mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Elit orci condimentum sollicitudin sem ex. Ultrices mattis maecenas cursus, mauris sodales finibus non maximus cursus lectus au, euismod sapien au fringilla ligula iaculis aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "This is the service short description",
      "long_description": "long description Lorem etiam ac facilisis euismod etiam. Hendrerit lacinia viverra ac. Dictum blandit enim massa suscipit lobortis lacinia, auctor aliquam i turpis gravida, placerat elementum at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "This is the service short description",
      "long_description": "long description Arcu ultricies ornare ultricies ornare sollicitudin euismod. Diam nisl neque lacinia. Faucibus purus pellentesque eu augue suscipit ultricies. Laoreet faucibus quisque finibus, scelerisque sem metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt natoque i condimentum gravida. Eget vestibulum condimentum etiam. Ipsum ut nunc ornare fringilla justo eget ante diam fringilla tempor faucibus lacinia et elementum curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description Pulvinar tempus amet felis gravida e, neque ligula maximus pharetra. Mattis ante justo ultricies. Sem facilisis accumsan mi mauris eu nibh. Tempus pellentesque elit fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia porttitor metus pretium maximus, est sapien ornare proin cursus. Eget mollis lacinia ut, diam fringilla mauris ante viverra auctor, scelerisque eget amet tristique posuere.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus vel morbi aliquet ultrices ut ornare, gravida sapien tempor lacinia eros fringilla maximus vestibulum. Velit sagittis accumsan sollicitudin lacinia, elit bibendum eget gravida gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description Lacus arcu ac ligula orci. Sagittis condimentum mollis at purus. Cursus pharetra dignissim velit condimentum. Erat purus fringilla sit laoreet mollis lectus, cras sed nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Velit at vulputate laoreet proin ut, aliquet blandit augue lacinia pretium. Neque e lobortis maecenas at lacus morbi maximus. Imperdiet facilisis faucibus mattis amet cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "This is the service short description",
      "long_description": "long description Accumsan pretium ut auctor lacinia tristique porttitor lacus, finibus aliquam sit turpis ut sem ipsum, lacinia nulla dictum cras dolor nunc morbi. Dictum a au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "VTGrafix",
      "short_description": "This is the service short description",
      "long_description": "long description Etiam dolor fringilla morbi laoreet. Facilisis ultrices facilisis enim. Commodo vestibulum ut amet diam turpis au, condimentum imperdiet blandit et accumsan curabitur. Nam viverra nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Consequat consectetur faucibus pretium vitae quisque quis. Massa pretium tristique condimentum lobortis augue. Nunc ultricies hendrerit neque maximus morbi pretium. Erat lobortis imperdiet neque ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "This is the service short description",
      "long_description": "long description Sed pretium gravida eget gravida hendrerit e viverra, ante mollis sem ultricies, dignissim quisque placerat euismod pulvinar faucibus sollicitudin adipiscing scelerisque. Pretium lacinia cursus sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia euismod velit scelerisque tristique. Etiam quisque sapien mi et nunc elit maximus aliquam massa pulvinar augue vehicula eu fringilla facilisis non. Posuere erat vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "This is the service short description",
      "long_description": "long description Velit e pretium lacinia in aenean, felis elementum natoque ante purus accumsan viverra posuere leo purus. Porttitor sapien ligula nibh eget. Consectetur tincidunt tincidunt dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Sit euismod e maecenas maecenas mi. Ex neque arcu lacinia. Lectus justo curabitur ipsum. Ipsum tortor natoque metus. At enim tempor diam ex tortor consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt at orci natoque risus euismod, pellentesque ipsum elit maximus lectus lacus. Neque dignissim dignissim facilisis mattis tempor nisl cursus aliquet. I felis sit lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Logico",
      "short_description": "This is the service short description",
      "long_description": "long description Sed ex vehicula eti au. Etiam pellentesque lacinia cras in, risus ac nisl non natoque in. Sapien magna hendrerit finibus turpis commodo eti sagittis tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "This is the service short description",
      "long_description": "long description Placerat vestibulum ex mollis condimentum ex maecenas, metus nunc i accumsan etiam, lacinia nulla maecenas cras, in neque tincidunt purus ac, tincidunt aenean scelerisque porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Infracom",
      "short_description": "This is the service short description",
      "long_description": "long description Ex a scelerisque turpis elit nam ligula quis. Non vel posuere nunc maecenas. Cursus adipiscing lorem iaculis. Vestibulum sem ac tristique, finibus nisl lacus commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquam ante velit curabitur scelerisque tristique pellentesque, tortor pretium mi commodo, faucibus euismod turpis lectus lacus donec facilisis sit, fringilla tempus lectus sapien enim est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description Morbi id donec leo euismod. Vel natoque pulvinar ultrices consequat vitae augue, a sollicitudin finibus au morbi nibh. Eros amet placerat commodo hendrerit vulputate pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Opticast",
      "short_description": "This is the service short description",
      "long_description": "long description Vel neque laoreet eget gravida, sagittis mattis in maecenas cursus velit. Tempus tempor arcu ante consequat eti lobortis erat, finibus vehicula auctor turpis tincidunt proin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "WestGate",
      "short_description": "This is the service short description",
      "long_description": "long description Dui pellentesque sagittis dolor lacinia augue tortor suscipit, imperdiet felis ultricies eti non. Massa tristique augue faucibus risus vulputate vitae tempus elit proin e in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Sophis",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis at i elit diam nunc i morbi felis, orci magna finibus ornare nunc dolor ex. Sed lorem scelerisque diam quis. Ut maecenas vestibulum magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia faucibus laoreet cursus tristique eros nam. Euismod lacinia accumsan justo. Risus mauris sollicitudin metus eros sollicitudin, amet est sodales nibh massa. Pretium cras bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description Sapien iaculis at quis felis etiam sapien ante cras sed. Enim eget risus donec orci fringilla, aliquet imperdiet morbi non, cursus augue vel finibus in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "This is the service short description",
      "long_description": "long description E ultricies faucibus ut nibh sed sagittis, curabitur in ornare ornare, felis auctor mi condimentum mollis sit ipsum ornare, vehicula vitae maecenas erat lobortis sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "This is the service short description",
      "long_description": "long description Posuere tempus pretium ornare lobortis tempus. Mi mauris consectetur pellentesque blandit nisl turpis pellentesque adipiscing amet. Quisque orci risus leo natoque. Curabitur tincidunt hendrerit ligula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "This is the service short description",
      "long_description": "long description Quis scelerisque metus eti sapien cursus au placerat nisi nisi e dictum sit at lacinia porttitor, dui blandit commodo condimentum elit felis tincidunt erat morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Hendrerit nisl hendrerit posuere cursus, id tincidunt sodales maximus. Sed maecenas neque amet. Non massa orci augue dolor, cursus est eu nibh. Vulputate viverra dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Viverra justo eti dui gravida dignissim quisque risus nibh elementum adipiscing. Consequat mi condimentum lacus elit mattis ultrices, vel cursus orci au metus tempus et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Keycast",
      "short_description": "This is the service short description",
      "long_description": "long description Enim lacinia eget lacinia commodo. Elit eros lacinia pulvinar justo enim nam nibh morbi non rhoncus cursus nisl. Metus lobortis posuere enim est au eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "This is the service short description",
      "long_description": "long description Mauris eti lobortis auctor eu, eros lectus ut auctor pretium lectus gravida sem. Diam felis bibendum dignissim vehicula quis sed, tempus aliquam ut vehicula tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Finibus maecenas euismod aliquam nunc. Aliquam lacinia diam dignissim laoreet, nulla i quis felis arcu eu, bibendum ipsum diam ante, id eu et tempor vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "WestGate",
      "short_description": "This is the service short description",
      "long_description": "long description Sapien accumsan ut finibus lacinia. Quis sed condimentum mattis. Eu augue eros cras cras pretium vehicula ipsum mattis. Cras neque mi amet aliquet vulputate lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Ac mattis e e orci eget nisi, id imperdiet non aliquet tristique iaculis. At maximus eros lacinia sed pharetra, lobortis finibus eu condimentum posuere finibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquam maximus ipsum sagittis au, rhoncus erat proin cursus nisl, quisque elit purus hendrerit bibendum in suscipit. Proin aenean ornare at. Etiam commodo in ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Orci erat proin sed etiam lobortis. Eu placerat sapien sagittis, placerat lacinia mauris consequat lobortis nam metus. Porttitor augue sem elit aliquet pellentesque sodales ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Hendrerit velit et in ex magna mollis laoreet tortor consequat, placerat id pharetra condimentum amet. Lorem magna ultrices id, proin scelerisque lacus eros metus ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "This is the service short description",
      "long_description": "long description Metus vehicula leo aliquet massa, lorem vulputate auctor scelerisque e donec curabitur ipsum mi finibus orci vel in ex nisl. Augue facilisis sagittis magna quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "This is the service short description",
      "long_description": "long description Ut suscipit ex mollis a gravida maecenas. Scelerisque morbi vitae bibendum sem. Amet maximus bibendum pharetra maecenas. Ac lacinia vulputate bibendum ante nunc in ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Pulvinar non cras amet vestibulum e blandit. Tortor nam quisque viverra purus mattis. Eros viverra posuere cras. Turpis rhoncus auctor au nisi facilisis sit neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "This is the service short description",
      "long_description": "long description Accumsan consequat vel dictum accumsan. Vulputate nisl au nunc tempor maecenas justo sagittis. Elit rhoncus amet id ante eget, ut ex e maecenas bibendum ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Consectetur posuere posuere pulvinar arcu, scelerisque aliquam sed ultricies etiam lacinia rhoncus, erat vitae enim magna. Leo bibendum lacinia suscipit. Ultrices amet iaculis mattis ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "This is the service short description",
      "long_description": "long description Au cursus auctor hendrerit lacinia. Felis nisl sit nisl augue lorem magna curabitur euismod pharetra ultrices vulputate eros aenean nulla. Vitae commodo nam sem quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Erat finibus vestibulum neque a purus pretium quis ut erat quisque vel. Au in felis non ut velit diam. Consequat accumsan cras nunc gravida consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "This is the service short description",
      "long_description": "long description Augue facilisis justo porttitor lorem vel a orci. Au bibendum aliquet cras nulla tristique, turpis non condimentum tempus, sed faucibus quis id mauris scelerisque iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "This is the service short description",
      "long_description": "long description Dolor sed vitae a amet lacinia tempus sapien vitae nisi rhoncus hendrerit dolor mattis suscipit lorem. Posuere pharetra eu eu, elit sem pulvinar maximus faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Mattis aliquam au scelerisque felis lectus ultrices diam justo, at amet imperdiet arcu. Finibus rhoncus orci ex at. Cras quis eti bibendum, tempor lacinia dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "This is the service short description",
      "long_description": "long description Ornare ultrices tincidunt maximus natoque curabitur vehicula. Consectetur lacus risus vulputate elementum. Tortor vulputate porttitor i ipsum metus bibendum pellentesque auctor rhoncus. Leo ultricies orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "This is the service short description",
      "long_description": "long description Tempus adipiscing mauris cras scelerisque donec. Lacinia dignissim aenean sapien. Id tempor maecenas nisi id sem augue tempus. Bibendum dolor porttitor accumsan consectetur tempor hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "This is the service short description",
      "long_description": "long description Neque diam proin tortor curabitur mattis, imperdiet tortor cursus eu. Lobortis imperdiet ultricies condimentum, amet etiam iaculis viverra. Proin natoque ornare nisl nisl mauris quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia faucibus mauris vulputate aliquam ligula felis, tincidunt pellentesque sodales pellentesque. Ligula aenean vel dolor sagittis tempor curabitur commodo i consequat id erat pellentesque facilisis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Adipiscing nisi viverra lobortis quis amet sagittis at suscipit. Auctor at at morbi sapien mauris. Adipiscing laoreet auctor eget eget dolor. Ligula au lacinia sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "This is the service short description",
      "long_description": "long description Eros orci augue lorem erat sagittis nunc in laoreet eti nunc at scelerisque auctor curabitur lacinia nam natoque faucibus finibus eti curabitur at arcu placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description In adipiscing sit pretium enim posuere, iaculis maecenas morbi et gravida, euismod quis id tristique sodales maecenas nam enim elit sem nunc lobortis amet a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Vestibulum sollicitudin aenean maecenas sodales id. Erat id sapien nibh, eu leo ex morbi neque a faucibus viverra. Maecenas facilisis consequat quisque ornare mauris est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "This is the service short description",
      "long_description": "long description Iaculis blandit eget erat nisi. Dignissim rhoncus aliquet consequat consectetur amet. Blandit sodales turpis posuere aliquam nunc finibus morbi quisque blandit suscipit nibh tristique eget.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "This is the service short description",
      "long_description": "long description Leo fringilla placerat nulla ultricies ornare euismod commodo etiam. Id lobortis id magna, sed et ornare tortor nam, quis suscipit commodo sodales tortor laoreet dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquam scelerisque erat suscipit risus. I ac vehicula dolor. Eget facilisis at euismod. Vehicula tortor mauris sem. Vehicula eti dui iaculis iaculis, lacinia morbi bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Cras lobortis auctor velit magna sollicitudin. Auctor ligula i amet. Dignissim ac ipsum sodales morbi accumsan diam sapien ultrices ante donec aliquam scelerisque leo gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "TrueXT",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus maximus lacinia quis elementum. Ligula lacinia et proin, turpis porttitor rhoncus nunc. Nulla eti pharetra a, velit aenean pretium leo purus, etiam rhoncus lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description Ultrices faucibus ex diam elit et. Sed euismod ornare dignissim eget. Porttitor porttitor facilisis commodo in nibh ut bibendum dolor, diam purus pharetra nam tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "This is the service short description",
      "long_description": "long description Id commodo dictum id elit elit hendrerit placerat, arcu donec non in nisl, ante lacinia au lorem mi. Nisi ornare dignissim lectus lacus eu posuere.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "This is the service short description",
      "long_description": "long description Placerat ornare non gravida imperdiet adipiscing, viverra donec curabitur cras, metus nam au elit finibus gravida hendrerit, id dignissim i sagittis enim. Porttitor blandit augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Hendrerit orci mollis augue maecenas sagittis, lacus pulvinar turpis bibendum, suscipit posuere ante eros. Eti ac fringilla diam. Turpis sem aenean neque. Enim donec maecenas.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Infracom",
      "short_description": "This is the service short description",
      "long_description": "long description Sagittis sapien purus a nam cras. Scelerisque justo accumsan lacus consectetur aliquet i ex imperdiet magna porttitor, adipiscing rhoncus e neque eu consectetur sollicitudin scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquet condimentum diam maecenas pharetra magna dui auctor. Quis tristique ligula laoreet, purus placerat ultricies faucibus mattis, sodales eti laoreet sem iaculis nisl viverra hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Kancom",
      "short_description": "This is the service short description",
      "long_description": "long description Eros est placerat vitae arcu porttitor laoreet gravida. Nam aenean dictum dui sapien. Nunc condimentum ac bibendum vestibulum, pulvinar orci at est, aenean metus nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "This is the service short description",
      "long_description": "long description I non id mauris ut elit hendrerit. Consectetur tristique augue leo mollis diam gravida dignissim augue sed laoreet nunc justo mauris, non tempor rhoncus in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "This is the service short description",
      "long_description": "long description Cras sagittis sollicitudin amet iaculis tempor sed ac finibus, tristique vulputate quisque eu scelerisque aliquet sodales amet in nulla posuere vestibulum. Augue commodo leo ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Fringilla dictum risus mi posuere amet. Lobortis bibendum id ultricies vulputate. Lorem aliquam mollis id lobortis consectetur imperdiet mi pharetra. Non posuere ligula lacinia gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquet sodales curabitur ligula suscipit accumsan aliquet sed, eti aenean dignissim sapien bibendum, sit dictum facilisis etiam, dignissim elementum aliquam aenean maecenas mattis faucibus bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "This is the service short description",
      "long_description": "long description Hendrerit aenean sagittis vulputate vulputate natoque ante. Consequat natoque nisi tincidunt. Finibus quis pellentesque massa aliquet, quis ligula enim pretium. Pharetra placerat neque orci e.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia mi dictum lacinia turpis et. Sapien eros elit vel, magna consectetur consequat porttitor rhoncus ex, quis quisque justo nulla pellentesque eu, consequat ultricies sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Freecast",
      "short_description": "This is the service short description",
      "long_description": "long description Eti maximus laoreet scelerisque aenean, mattis neque scelerisque pretium, euismod euismod nibh finibus eros erat, nulla lobortis vehicula arcu commodo viverra. Ex et lectus facilisis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Opticast",
      "short_description": "This is the service short description",
      "long_description": "long description Justo a nunc tortor accumsan ipsum sit. Sit diam porttitor elementum massa dictum sodales. Massa dictum rhoncus ligula vehicula fringilla. Iaculis accumsan cursus neque viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Ornare rhoncus i erat sodales auctor. Euismod ac vulputate sapien eros pellentesque lectus sapien, aliquet pretium tempus maximus au vulputate augue facilisis ornare dolor nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "This is the service short description",
      "long_description": "long description Commodo arcu porttitor justo ut ultricies mauris vehicula. Consectetur eget risus nibh pulvinar scelerisque magna tristique. Sollicitudin mi massa nisl. Pretium non sed faucibus commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus sit etiam aenean aenean, commodo ultrices morbi magna aliquam, cras natoque nam aenean sem leo, mauris at et et. Pulvinar faucibus cursus cras leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Amet at euismod gravida quis metus, est tortor hendrerit pharetra lacinia, mauris bibendum imperdiet ultricies nisl lorem dictum nunc mauris enim. Risus vitae nulla purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "This is the service short description",
      "long_description": "long description Dui et blandit in arcu, dolor donec in donec, sapien mauris aliquam laoreet commodo, eros tempor felis tristique enim ut. Lectus dolor dictum i mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "This is the service short description",
      "long_description": "long description Id euismod at auctor fringilla vehicula lacus aliquam. Iaculis condimentum vestibulum euismod fringilla ac ex, auctor pulvinar at pulvinar sodales nulla faucibus. Dignissim ante condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit dui sodales est mattis. Fringilla mattis ante donec vestibulum tempor. Commodo tincidunt eti lobortis, pellentesque eti cursus facilisis. Ex ornare scelerisque proin nisi nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description Maximus eros iaculis mauris natoque, vitae ultrices sem ex nulla lobortis. Felis ipsum dui commodo augue a tempus. Vehicula nisl ultrices ex nisi i ac.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit est tristique posuere tempor. Quis ante felis auctor vel accumsan auctor. Suscipit nisl lorem purus accumsan. Dignissim suscipit at sodales mattis. Suscipit ex dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis i turpis ante a aenean. Lacus pretium i nulla. Neque laoreet vitae laoreet. Maecenas aenean tincidunt tempus ante. In nisi metus ultrices ex eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "CoreMax",
      "short_description": "This is the service short description",
      "long_description": "long description Natoque ipsum nisi hendrerit ex erat i vehicula sapien elementum sit est laoreet mollis, faucibus non lectus dolor leo, vestibulum i rhoncus vel blandit rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Enim bibendum purus risus lacinia pulvinar posuere rhoncus ut. Pretium euismod magna vehicula vestibulum viverra. Magna viverra gravida enim aliquam nibh turpis. Proin risus pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "This is the service short description",
      "long_description": "long description Mi ex risus mattis eti, rhoncus mauris suscipit nisi sit enim massa sollicitudin euismod pretium, pretium porttitor leo eros velit bibendum tempor nisl aliquam tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "This is the service short description",
      "long_description": "long description Aenean nisi ultrices vitae leo scelerisque vitae, nulla viverra justo adipiscing. Aliquam pretium suscipit leo, accumsan imperdiet orci euismod ac. Scelerisque pellentesque sagittis posuere nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Ut elementum ex posuere felis ornare, tristique tincidunt pellentesque morbi vulputate facilisis lobortis nisl accumsan turpis, curabitur lobortis non quisque, diam nisi ultricies aliquet leo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Massa pharetra pellentesque mollis tempor bibendum lacinia turpis cras. Consequat tempus at elementum. Lacinia gravida porttitor at ex e elementum. Magna velit finibus ante donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description I mattis au purus nulla, quis scelerisque quisque ac, lacinia nam ac faucibus proin felis blandit, placerat tempor quisque etiam imperdiet. Nisi blandit quisque posuere.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Est ipsum ante consectetur neque fringilla. Eu commodo etiam tristique ac. Turpis mauris tincidunt tortor. Scelerisque tincidunt sodales sodales massa ac risus. Blandit magna dictum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet faucibus ut morbi au condimentum tortor, velit morbi elit purus ultricies etiam, orci eti eu ligula hendrerit purus blandit. Auctor turpis eget natoque ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Cirpria",
      "short_description": "This is the service short description",
      "long_description": "long description Sollicitudin ornare laoreet scelerisque natoque aliquet consequat natoque purus mi quis ex felis sollicitudin au commodo aliquet tempor. Sapien quis purus sapien, id fringilla laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Keycast",
      "short_description": "This is the service short description",
      "long_description": "long description Nulla a id natoque felis. Lacinia au donec pulvinar mollis nunc nisi imperdiet natoque natoque. Ultricies orci bibendum facilisis, justo ornare mi ex dolor arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "WestGate",
      "short_description": "This is the service short description",
      "long_description": "long description Ipsum elementum euismod vehicula maecenas auctor. Et elementum est adipiscing vehicula leo cras commodo i arcu facilisis. Accumsan quis augue mauris tristique placerat massa dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Facilisis blandit cras quisque aliquam proin tristique, lectus dictum etiam aliquam, sed nibh posuere placerat orci sodales massa eti sit tortor tempus bibendum proin tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "This is the service short description",
      "long_description": "long description Tortor maximus id facilisis eget, facilisis eros turpis ante sollicitudin. Sed et aliquam tortor ac turpis aenean tempus lectus natoque pellentesque turpis. Aenean eros pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "This is the service short description",
      "long_description": "long description Elementum cursus proin vehicula pellentesque, nisl facilisis cursus lectus turpis, nunc ornare sed consectetur vehicula. Natoque quis mi ex vel. Augue eros pharetra vehicula arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum lacinia vulputate sagittis at fringilla neque. Tristique pharetra vestibulum ante orci e. Magna id commodo lectus velit est, pellentesque quisque purus dolor dignissim quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description Consectetur i bibendum imperdiet tempus nibh, magna vitae erat ornare eti. Cursus neque leo maecenas aliquam tortor faucibus sodales. Mollis adipiscing dui ipsum id quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "This is the service short description",
      "long_description": "long description Velit ultrices ante ut finibus aenean viverra finibus auctor. Au purus magna sagittis, massa elementum consequat mauris, sem dictum porttitor at nisl ante dui condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "This is the service short description",
      "long_description": "long description Maximus sed dui eu a aliquet scelerisque, suscipit placerat mollis iaculis viverra ac ultrices adipiscing. Facilisis faucibus ligula purus arcu tristique in gravida maximus elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Sophis",
      "short_description": "This is the service short description",
      "long_description": "long description Mattis curabitur proin pretium proin, enim in nam etiam etiam. Magna auctor nisi facilisis lacus pharetra vel mattis felis ante nam, posuere elementum sollicitudin vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Eti felis consequat sodales justo ante. Sem in pulvinar elementum. Pharetra vulputate porttitor mollis lacinia orci faucibus placerat sem nulla. Faucibus eu id nunc arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Polycore",
      "short_description": "This is the service short description",
      "long_description": "long description Curabitur orci morbi quis pharetra ac. Scelerisque rhoncus euismod mollis, neque posuere sollicitudin euismod vel elementum nunc, adipiscing diam porttitor e au tortor morbi rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium etiam natoque donec est. Elementum erat nisl quisque non. Lacinia condimentum morbi vel lectus rhoncus, eu nunc placerat suscipit. Viverra lacinia amet lacinia mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Hypervision",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum metus posuere vulputate dignissim. Rhoncus erat justo tristique, vitae orci accumsan massa au elit ac lacinia nisi ex etiam. Accumsan turpis condimentum bibendum pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Keycast",
      "short_description": "This is the service short description",
      "long_description": "long description Tempus i blandit turpis pulvinar aliquet a cursus placerat maximus viverra nisl, commodo consequat au tortor euismod, commodo nisi bibendum mi a justo ac bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Quisque pretium risus ante aliquet, ultrices au proin aenean. Gravida orci sed sollicitudin lectus diam eget nisi posuere. Ex blandit gravida non lectus sem suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "WestGate",
      "short_description": "This is the service short description",
      "long_description": "long description Nulla erat gravida eu viverra aenean. Lacus laoreet elit dictum pretium consequat. Vehicula fringilla facilisis imperdiet. Vulputate viverra accumsan placerat mauris quis blandit laoreet cursus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis sapien finibus posuere condimentum suscipit enim natoque blandit. Commodo scelerisque tempus quisque dolor mi fringilla turpis placerat mi placerat vehicula lacinia quisque cras neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "This is the service short description",
      "long_description": "long description Sagittis faucibus facilisis placerat tincidunt dui dolor. Donec pharetra orci consectetur faucibus sodales. Quisque bibendum id donec scelerisque. Lacus eu at maximus elit tristique vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "OmniTouch",
      "short_description": "This is the service short description",
      "long_description": "long description Ut eget non au velit ante ut. Accumsan tortor et elementum nulla eget. Facilisis finibus velit elementum. Velit maecenas donec sed eros cursus pharetra lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "This is the service short description",
      "long_description": "long description Scelerisque ut risus eget elementum turpis. Eti mi etiam nunc pellentesque accumsan. Nibh elementum leo pretium, au adipiscing blandit augue, vitae vitae euismod lacinia e.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description Sed ac imperdiet cursus lacus ut ante cursus est cras, amet augue viverra mollis finibus natoque, magna diam arcu nunc justo fringilla velit dui blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "This is the service short description",
      "long_description": "long description Ante sollicitudin auctor maximus accumsan sodales euismod blandit. Non lacus sodales curabitur a. Lectus au neque nisl mattis ornare nisl nulla pretium consequat sollicitudin vel.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "This is the service short description",
      "long_description": "long description In ut mollis pellentesque eget. Nunc vel augue vel, erat viverra at magna nam bibendum vulputate iaculis, amet facilisis curabitur ac eti consequat cras laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquam mauris placerat nulla faucibus, risus justo vitae au cursus condimentum eget eget, imperdiet pellentesque adipiscing dui, vel tempus lorem lacinia, i imperdiet blandit dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "This is the service short description",
      "long_description": "long description Ultricies nisi a viverra aliquam nibh maecenas mi ultricies augue vehicula, porttitor blandit magna e. Natoque blandit at lorem, sagittis velit commodo leo e ipsum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium placerat sapien mi consectetur iaculis cras ultrices. Lacinia sed iaculis felis. Natoque finibus suscipit fringilla massa, dolor maximus donec lacus blandit tincidunt ultrices tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Kancom",
      "short_description": "This is the service short description",
      "long_description": "long description Dolor etiam amet tincidunt nibh lobortis viverra, eu suscipit auctor dui facilisis proin porttitor leo cras lacinia. Euismod id condimentum tempor non. Sagittis in etiam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Hendrerit dolor dictum tempor imperdiet. Posuere velit quis cras, fringilla mattis sem ultricies nibh. Lacinia eget dignissim est mi commodo. Adipiscing elit vestibulum ipsum tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Sem bibendum augue finibus mauris nibh nisi, nunc adipiscing auctor magna vestibulum natoque dolor, neque euismod etiam sem est, e nisi sit vestibulum orci sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "This is the service short description",
      "long_description": "long description Elementum eget eti porttitor eu. Donec aliquam suscipit maecenas nisi auctor. Mollis blandit imperdiet ut ut massa, scelerisque magna vulputate au, aliquam facilisis ac id.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Scelerisque vel ac tincidunt scelerisque enim non, vestibulum maximus risus lacinia. Sagittis ipsum a eros lacus sapien purus, augue faucibus imperdiet sollicitudin accumsan vehicula nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description Posuere vehicula condimentum nibh est ut quis, mauris dignissim aliquet lobortis amet, vehicula i porttitor ante, sed amet aenean eu nisi vulputate neque scelerisque rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "This is the service short description",
      "long_description": "long description Ipsum natoque donec nulla sit lacinia consequat faucibus donec, aliquam ornare pretium ligula diam sollicitudin ornare euismod consequat, mi quisque maximus donec cursus vel neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis cras vehicula turpis nisi viverra dictum. Vitae et eu mauris vehicula sapien natoque ligula. Sem imperdiet aenean mauris laoreet sodales risus rhoncus ipsum a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia eget tincidunt felis e, velit enim rhoncus cras. Facilisis magna vulputate cursus. Gravida sed risus velit mollis blandit dictum, cras dictum ac mauris turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description Nisl dui sagittis ut maecenas, finibus posuere justo leo. Orci arcu orci ut risus sapien purus. Felis tortor eu cras commodo at lacinia natoque iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis erat lorem dictum amet blandit aliquam ante metus scelerisque tortor. Id lorem eros lobortis sollicitudin pretium, justo elementum vestibulum elit, sollicitudin velit et bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Justo aliquet etiam suscipit pharetra aliquam at metus, dui laoreet pellentesque sapien aliquam lobortis eros, porttitor nunc ultrices vehicula eget. Orci sem dignissim lectus scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "This is the service short description",
      "long_description": "long description Eros pharetra sodales morbi felis. Eros posuere bibendum lacus dictum erat etiam maecenas hendrerit tristique curabitur, orci sapien ac morbi, auctor vehicula turpis velit pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description Rhoncus faucibus placerat ante nunc lacus, mollis donec vitae vitae. Donec condimentum mollis sem. Lacus tempor etiam massa. Dui non vitae lacinia faucibus dui nulla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Euismod ex lobortis sit pellentesque. Metus ultrices suscipit metus metus e consectetur. Ultrices sollicitudin ex eget erat. Laoreet ultrices dictum laoreet sit ac gravida turpis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Citisys",
      "short_description": "This is the service short description",
      "long_description": "long description Mauris rhoncus est mauris facilisis dignissim. Eu neque ipsum augue. Bibendum euismod elit sollicitudin maecenas arcu velit lacinia enim erat lorem dui. Iaculis eti eu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Forecore",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis fringilla orci ut vel. Enim vehicula ipsum condimentum, curabitur massa euismod tempor. Diam consectetur placerat neque sodales. Sollicitudin adipiscing ultrices velit tempus eget pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet tortor vehicula scelerisque vulputate maximus auctor nam morbi. Dictum aenean tempor sagittis nunc amet. Vitae vestibulum tristique curabitur consectetur, enim quis erat porttitor tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "This is the service short description",
      "long_description": "long description Neque augue gravida vestibulum tincidunt erat hendrerit ante. Blandit laoreet dignissim neque tempor, lacus vel at placerat curabitur erat. Sodales nisl mi nisi amet sed.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "This is the service short description",
      "long_description": "long description At laoreet tempus dignissim tortor mollis tempor. Posuere mauris tristique erat viverra scelerisque nibh, est tempus id magna sagittis condimentum. At tortor lacinia consequat tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Nisi eros auctor dui mi et lacinia mauris eros tempus pulvinar. Sapien mauris lacinia pellentesque. Pellentesque ante hendrerit consequat pharetra mauris. Adipiscing justo facilisis rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description Nisl laoreet metus vulputate elit ultrices. Pulvinar pellentesque mollis hendrerit erat nunc vel. Cras elit porttitor quisque. Vestibulum nunc i amet scelerisque, elit erat diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Placerat accumsan eu quis enim enim. Porttitor cursus eu bibendum. Quisque aliquam ornare rhoncus facilisis e. Justo finibus justo sodales bibendum est maximus augue consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Risus pellentesque facilisis lacinia finibus, consequat metus scelerisque vulputate purus, massa vestibulum elementum blandit, vehicula dolor vitae ante gravida, donec erat ac eu magna tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "GrafixMedia",
      "short_description": "This is the service short description",
      "long_description": "long description Eget ante eros mollis cursus, aliquam mauris augue pulvinar sagittis. Donec nulla quisque au, mattis commodo augue augue nunc tincidunt gravida ex sed mi iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "This is the service short description",
      "long_description": "long description Et porttitor ac in aliquam. Mi etiam lobortis mi adipiscing consectetur at sagittis diam tincidunt nunc accumsan suscipit vestibulum hendrerit bibendum a tempor elit pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Baramax",
      "short_description": "This is the service short description",
      "long_description": "long description Felis non ultrices velit nunc pretium i, quisque morbi adipiscing diam vestibulum a erat quis. Maximus e aliquet i curabitur bibendum. Natoque consequat cras mauris.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "This is the service short description",
      "long_description": "long description Cras est vestibulum dictum elit aliquet sagittis imperdiet non auctor. Rhoncus maecenas iaculis quisque nisi nisl hendrerit lacus blandit. Placerat sagittis imperdiet quisque pretium aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "This is the service short description",
      "long_description": "long description Curabitur in amet porttitor nisl mattis i tempus diam a a viverra i, sed gravida ante augue fringilla. Au enim est pharetra. Consequat metus non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Galcom",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquet scelerisque at turpis ultricies natoque, dui laoreet ante pharetra. Massa est eros tortor vulputate maecenas, blandit ex au vestibulum nam aliquam dui consectetur ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Vestibulum arcu eros sollicitudin aenean donec elementum laoreet. Sem commodo vel pretium. Velit sapien quisque cras mattis commodo rhoncus, sed tristique pulvinar donec mollis viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Commodo nisi hendrerit aliquet vestibulum dictum faucibus eu lacinia, vestibulum nunc vestibulum gravida orci viverra laoreet finibus consectetur id nibh laoreet rhoncus. Ac turpis ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "This is the service short description",
      "long_description": "long description Ex cras aliquam sed augue leo elit pellentesque, cras nisl placerat non i purus natoque magna commodo at nam blandit lacinia. Mauris euismod lacinia nisl.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "LoopSys",
      "short_description": "This is the service short description",
      "long_description": "long description Amet cras dui dignissim amet consectetur sapien viverra, fringilla amet etiam commodo auctor id lacus elementum rhoncus, sit sollicitudin facilisis etiam hendrerit porttitor gravida massa.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "This is the service short description",
      "long_description": "long description Felis viverra sapien sodales eros neque amet, neque aliquam scelerisque sed nisi. Tincidunt natoque natoque euismod non, at purus iaculis donec ipsum dolor pellentesque arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Arcu placerat velit vehicula laoreet mi at aenean. Bibendum a felis mollis ultricies, faucibus posuere sagittis massa lacus. Velit viverra facilisis e. Justo vitae au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description Eros nulla mattis i faucibus tristique bibendum, sit hendrerit est metus at id tempor cursus. Nisl ex ligula bibendum natoque accumsan tempus scelerisque proin non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Freecast",
      "short_description": "This is the service short description",
      "long_description": "long description Lacus au consequat elit posuere mattis. Commodo lacus leo condimentum auctor justo quis. Eget placerat lectus accumsan lacus aliquet at. Dignissim maecenas nulla massa lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "This is the service short description",
      "long_description": "long description Euismod vehicula elit nunc morbi consequat posuere tincidunt ultricies, adipiscing purus natoque aenean consequat porttitor cras. Ut dignissim fringilla sollicitudin, velit massa mollis neque lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Consectetur id laoreet ultrices risus consectetur proin. Sed lobortis quis id felis purus. Nunc cursus imperdiet ac aliquam elementum felis tempor. Natoque imperdiet orci quis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet eros au nulla ligula maximus in pretium. Metus nulla aenean et lacus felis sem id imperdiet nisi. Pellentesque morbi neque morbi turpis amet cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "This is the service short description",
      "long_description": "long description Ut natoque pretium iaculis rhoncus. Euismod posuere viverra e. Non massa velit aliquam orci, vestibulum e nunc tortor au sagittis nisl, viverra nunc viverra erat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "CoreRobotics",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquam erat a blandit mi aliquam, eget finibus mattis nulla consequat sagittis. Magna sem elementum pulvinar imperdiet sollicitudin eti nam arcu. Erat lectus sapien amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Curabitur mauris mi sodales au turpis, ultricies vitae turpis eu, e finibus rhoncus consequat curabitur suscipit consectetur tristique au finibus proin. Eros vel id pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Tristique quis au nibh quisque sapien. Sed tincidunt nibh consequat donec, quis vulputate lobortis tincidunt, faucibus bibendum maecenas felis. Lorem neque nulla posuere lectus vitae.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "This is the service short description",
      "long_description": "long description In quis commodo facilisis aliquam non finibus, etiam ipsum velit nam mollis pharetra id. Turpis hendrerit nam vehicula. Vitae pharetra justo pharetra at condimentum fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis etiam quisque aliquam tortor, massa bibendum placerat cras aliquet, sit sollicitudin laoreet iaculis ut dictum. Auctor orci e fringilla quisque, at at sapien etiam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "This is the service short description",
      "long_description": "long description Lectus sagittis pharetra euismod id nunc suscipit neque ultricies lacinia, curabitur sapien mollis facilisis, a ornare eget pharetra. Pharetra fringilla lacus curabitur eu pretium ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "This is the service short description",
      "long_description": "long description Pulvinar suscipit iaculis at eros consequat risus laoreet, donec turpis scelerisque adipiscing massa ut sit tempus, bibendum suscipit orci tristique id gravida eti ac morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "This is the service short description",
      "long_description": "long description Sem eu nunc mauris amet sapien, leo ipsum dolor a gravida cras eget lectus blandit viverra orci facilisis in, au non pretium massa lacinia au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Ante ultrices lacinia auctor scelerisque nisl cursus eget quisque leo vestibulum purus, curabitur lectus sodales est sapien blandit. At elit nulla dictum purus mollis tincidunt.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Baramax",
      "short_description": "This is the service short description",
      "long_description": "long description Porttitor consequat nam dui aliquam. Ornare vehicula metus bibendum. E magna nunc nibh dolor ex et ultricies lacus quisque ex ac consectetur. Quis orci ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Ex elit dignissim pellentesque auctor fringilla. Rhoncus ligula justo adipiscing maecenas tincidunt. Eget porttitor nisl nulla. Ipsum a ipsum sodales, consequat placerat sapien nunc augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Terralabs",
      "short_description": "This is the service short description",
      "long_description": "long description Bibendum ligula neque faucibus posuere tempor suscipit pulvinar blandit sagittis laoreet ultricies auctor, faucibus mollis pharetra pellentesque purus. Metus in au erat, lacinia mauris massa.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Gravida mauris blandit mi fringilla quis laoreet. Mauris consequat nisi ultrices sem. Id maximus fringilla mi posuere sollicitudin, nisi ac sodales maecenas consectetur aliquet tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Freecast",
      "short_description": "This is the service short description",
      "long_description": "long description Non eros donec i finibus. Fringilla aliquam placerat nam neque, neque lectus eros nibh augue, nisl eget scelerisque sodales cursus condimentum morbi. Imperdiet sodales ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "This is the service short description",
      "long_description": "long description Placerat elementum eti eget enim dignissim ultricies ex enim facilisis a cras condimentum. Nunc accumsan eu elit velit lacus blandit. Eu etiam bibendum vel cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description Vehicula maximus nam lacinia e lorem, amet dolor ipsum facilisis ultrices in, in erat finibus orci laoreet suscipit eros, massa viverra cursus mattis tristique lorem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Dynaroc",
      "short_description": "This is the service short description",
      "long_description": "long description Ultricies lectus mi mollis nulla natoque. Tempus erat ultrices accumsan nibh, nulla facilisis faucibus dictum. Adipiscing vitae pretium vehicula nibh consectetur. Sem enim consectetur est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Quis hendrerit placerat metus sapien elementum condimentum velit ante placerat. Tristique donec pretium in. Magna commodo dictum iaculis. Hendrerit sapien pellentesque dolor risus leo est.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "This is the service short description",
      "long_description": "long description Ex gravida erat pellentesque vehicula at. E vulputate lobortis arcu, orci tincidunt adipiscing mi iaculis, massa adipiscing non vulputate. Mattis at magna leo commodo ex.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "This is the service short description",
      "long_description": "long description In facilisis posuere ornare cras. Aliquam sapien aenean purus laoreet. E tempus at diam. Sapien at ex enim dui, velit amet sem hendrerit sapien dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description I maximus amet nam placerat dolor. Purus ornare tincidunt et eget, natoque massa placerat dui. Curabitur lobortis iaculis pharetra eros ipsum, nisi arcu nisi eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "TurboSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Mi ligula dui cursus morbi dignissim, nulla quisque pulvinar fringilla mi. Pulvinar sem sit nunc aliquet lobortis est tempor commodo accumsan bibendum sollicitudin dictum maximus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis viverra donec consectetur pretium neque, aliquam nam aenean eti, dictum purus neque sem mollis ac. Sapien pretium justo mollis justo amet, eros erat mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet lacus nam euismod consectetur gravida. Lacinia nisl ultricies quis, vulputate et dui proin augue e diam consectetur, sollicitudin gravida pharetra cursus. Cras ex laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "This is the service short description",
      "long_description": "long description Commodo lobortis pharetra metus porttitor. Mauris tortor lacinia quis rhoncus. Tristique diam lectus cursus orci vestibulum, lorem quis metus elementum, risus enim e bibendum natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "This is the service short description",
      "long_description": "long description Ut sem magna eget iaculis mollis scelerisque proin commodo donec sed laoreet laoreet vel leo scelerisque. Turpis magna vel risus mauris ante iaculis risus placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Pulvinar orci hendrerit euismod posuere condimentum ultricies mauris orci, lacus scelerisque lectus proin vestibulum. Id cursus facilisis accumsan posuere. Ut iaculis elementum massa cras diam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Amsquare",
      "short_description": "This is the service short description",
      "long_description": "long description Mi dictum aliquam aenean massa non. Commodo non ut vitae, vestibulum neque nam hendrerit aenean elementum lorem, facilisis tempus neque et. Lorem augue nibh ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium pulvinar auctor laoreet eget auctor lobortis, aliquam i vel nisl. Leo nisi nam eu facilisis. Tortor tincidunt fringilla iaculis sapien nam cursus risus lacus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Ligula eget finibus maecenas eu eros. Bibendum erat tincidunt sem eget. Non tincidunt fringilla elit sem euismod vitae. Commodo vestibulum blandit mauris. Quis maecenas sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Iridimax",
      "short_description": "This is the service short description",
      "long_description": "long description Imperdiet mollis sagittis tempor aenean vulputate sagittis porttitor orci vulputate lorem et laoreet felis. Au neque dictum imperdiet curabitur, massa eget aliquet curabitur lectus tempus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Superwire",
      "short_description": "This is the service short description",
      "long_description": "long description Nunc sodales imperdiet eros magna vehicula ante. Ligula vestibulum finibus commodo, hendrerit natoque commodo enim eti sodales. Orci erat tempus risus, adipiscing iaculis auctor et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Solexis",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium pretium velit sem purus nam. Elementum e tristique cursus purus commodo vulputate erat ante ultricies nunc et, magna justo lobortis eros nisl laoreet fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquam tortor id nunc maximus. Vestibulum consectetur bibendum donec, euismod faucibus ipsum sem lobortis. Consectetur consequat donec augue iaculis lectus posuere, orci et etiam pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Sagittis hendrerit vehicula pellentesque au sagittis lorem rhoncus quis non vehicula. Mollis i rhoncus aliquam curabitur. Viverra mollis mauris nunc pretium. Proin pharetra scelerisque vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Laoreet id natoque felis ultricies proin imperdiet lobortis nulla amet dui au rhoncus dictum vulputate, ultrices cras pulvinar natoque sem blandit. Elementum turpis turpis mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Protheon",
      "short_description": "This is the service short description",
      "long_description": "long description Sollicitudin i curabitur mi euismod pharetra, ut quis pretium et pulvinar, aliquam ante ligula ante, rhoncus orci adipiscing mattis. Tempor consectetur mauris tempus donec adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Logico",
      "short_description": "This is the service short description",
      "long_description": "long description Donec adipiscing magna ligula i. Amet felis turpis et id a morbi, ex auctor augue mattis, leo eros nisi turpis, nisi orci amet iaculis ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Freecast",
      "short_description": "This is the service short description",
      "long_description": "long description Donec nam magna at mauris tincidunt, lobortis aliquam arcu sollicitudin. Elementum eros faucibus lacus ut accumsan, condimentum suscipit rhoncus ut, pretium consectetur posuere curabitur ultricies.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Felis neque leo dictum et. Tempor fringilla accumsan amet adipiscing lacinia. Leo condimentum et metus a cursus. Mauris etiam mattis viverra. Erat morbi sapien dolor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Ut aliquet pellentesque justo curabitur. Ultrices finibus ultrices etiam ultrices. Donec placerat sit leo. Elit auctor sem condimentum, adipiscing nisl etiam placerat velit arcu ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Et tempor maecenas erat lacus. Enim orci nulla consectetur risus pretium sollicitudin. Lacinia felis accumsan finibus gravida suscipit dignissim a laoreet pretium donec maecenas pretium.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Iaculis eros felis iaculis porttitor, etiam pharetra consequat lacinia. Sed lobortis dui maximus enim. Et ornare eget felis. Aenean quis viverra lacinia. Tempor hendrerit au.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Kancom",
      "short_description": "This is the service short description",
      "long_description": "long description Natoque ante eti tempor commodo eget justo scelerisque ut nunc dolor vehicula. Vestibulum est elementum quis tristique lacinia. Ligula quis suscipit sem vel purus tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis lectus lacinia blandit iaculis au mauris imperdiet sapien. Iaculis aliquet nisi leo ornare mi nulla maecenas, lacinia curabitur justo aenean etiam iaculis consequat mi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Baramax",
      "short_description": "This is the service short description",
      "long_description": "long description Posuere nisi viverra vel eros mi, enim natoque nam proin consectetur. Maecenas sodales ac sem ut eget. E bibendum eti aliquet ut dolor et nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Dictum e aliquet ex pellentesque orci erat. Bibendum natoque curabitur elementum erat. Aliquet eu hendrerit mi tempus, blandit ipsum aliquam tincidunt au vitae erat maximus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Haltheon",
      "short_description": "This is the service short description",
      "long_description": "long description E maximus commodo condimentum mattis, morbi lacus dignissim donec pulvinar ut i, blandit ante bibendum tempor. Lectus vulputate quis auctor posuere i. Pellentesque lacinia a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "This is the service short description",
      "long_description": "long description Sapien cras tincidunt metus pellentesque pulvinar adipiscing, quisque non au sit. Consectetur imperdiet a sed. Euismod pulvinar maecenas aenean risus. Pretium enim erat justo ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia eu id sagittis nam porttitor imperdiet ultrices sapien dignissim. Lacinia vel proin amet iaculis iaculis. Iaculis elementum nibh mauris lectus donec. Rhoncus blandit purus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Zatheon",
      "short_description": "This is the service short description",
      "long_description": "long description Iaculis lorem dui elit risus curabitur. Adipiscing bibendum i et enim aliquet nibh dignissim lacus. E nulla diam tincidunt cursus hendrerit ac rhoncus sagittis elit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description Iaculis gravida mattis est dui, pharetra donec vehicula purus, neque cursus adipiscing maecenas. Vel laoreet nunc rhoncus ante au eti turpis proin porttitor in posuere.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description A vitae sapien eti pretium, viverra ac orci aenean at sed, laoreet proin sem enim et. Eros nisi proin lacinia imperdiet scelerisque, ligula ligula nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Thermatek",
      "short_description": "This is the service short description",
      "long_description": "long description Accumsan maximus hendrerit mollis at dui hendrerit nulla bibendum. Diam nisi pellentesque pharetra posuere sit nam condimentum facilisis purus nulla i. Dolor etiam aliquet metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "StrategyLine",
      "short_description": "This is the service short description",
      "long_description": "long description Pellentesque turpis felis lorem ex est. Sapien vulputate mollis iaculis placerat. Aenean nam turpis porttitor. Vehicula tristique tempor rhoncus sollicitudin finibus imperdiet, vestibulum cursus fringilla.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt ultricies purus rhoncus lacus auctor sagittis, ipsum eget etiam vitae gravida, blandit accumsan ultricies maximus metus neque ante dui. Lacinia condimentum lacinia elit aliquam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis quis nam nisl commodo, eti augue au nunc. Scelerisque condimentum condimentum gravida, felis hendrerit porttitor risus. Eti orci vitae tortor condimentum placerat lacus vestibulum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "PeerSys",
      "short_description": "This is the service short description",
      "long_description": "long description Et etiam curabitur lectus elementum etiam aenean consequat facilisis maximus. Ligula sollicitudin pulvinar tortor ut euismod. Hendrerit diam auctor proin. Gravida imperdiet quis rhoncus massa.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Infracom",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquet elit nisl adipiscing lorem nisi. Ultricies diam morbi vulputate. Aliquam in nunc lacinia. Rhoncus bibendum blandit dictum. Diam tortor lectus vehicula nam eros neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Acousticom",
      "short_description": "This is the service short description",
      "long_description": "long description Hendrerit nisi viverra proin quisque mauris non. Fringilla facilisis leo placerat ac. Elementum lacinia enim non dolor eu. Sollicitudin amet sagittis finibus et donec in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "This is the service short description",
      "long_description": "long description Sit erat ornare ornare eti dui lacus. Aliquet sit massa ac lobortis. Pellentesque neque commodo maximus gravida. Nisi non quis aliquet cras sodales vel consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Baramax",
      "short_description": "This is the service short description",
      "long_description": "long description Vel euismod elit sit viverra. Pellentesque justo commodo tristique at vehicula consectetur. Purus ipsum arcu et augue tempus nunc est posuere. Facilisis nisl morbi at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Adipiscing ex iaculis lobortis blandit ipsum quisque mollis auctor mauris nam. Sodales aliquet lacus finibus. Dui lectus maximus est, viverra ipsum ligula a placerat faucibus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Adipiscing magna tempus elit enim turpis eti finibus. Ante suscipit vehicula ex. Quisque erat rhoncus est dui lacinia ac tristique erat sollicitudin vitae sagittis facilisis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Storex",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus eti elementum eti tincidunt cursus. Cras ultrices ex vitae, ante et tempus nulla. Maximus elementum dignissim non, lorem accumsan nulla risus faucibus velit metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Freecast",
      "short_description": "This is the service short description",
      "long_description": "long description Quisque sem etiam justo enim eros. Aenean dictum e suscipit scelerisque, maximus sit elementum ante, consectetur felis lacinia proin leo. A commodo ipsum adipiscing justo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Eros lacinia nibh amet vestibulum placerat. Velit imperdiet a laoreet leo. Accumsan dictum consequat eti dui, lorem donec est ornare maecenas. Auctor mattis nisl felis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia natoque augue orci cursus dignissim. Ipsum nisi consequat viverra, cras risus arcu bibendum. Quis tristique elementum nisl facilisis, etiam et magna i quisque nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Optiplex",
      "short_description": "This is the service short description",
      "long_description": "long description Tempor blandit vehicula sollicitudin sed accumsan. Eros proin imperdiet maximus e i neque tincidunt finibus accumsan vestibulum. Sapien facilisis maximus quisque, commodo et diam vulputate.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "This is the service short description",
      "long_description": "long description Vel aenean erat sodales faucibus aliquam cursus erat neque. Augue hendrerit commodo natoque, aliquam maximus imperdiet elit mollis nam. Cursus sapien ligula donec suscipit laoreet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "DynaAir",
      "short_description": "This is the service short description",
      "long_description": "long description Ultrices aenean non massa condimentum quisque, fringilla maximus posuere aenean maecenas, posuere mollis nibh ligula ipsum, arcu dolor accumsan eu justo velit est scelerisque lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Polygan",
      "short_description": "This is the service short description",
      "long_description": "long description Mattis i vehicula nisl sit magna vestibulum placerat. Ultrices pulvinar i diam sagittis. Pulvinar lacinia placerat mollis augue. Velit facilisis est purus eget nisi lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Ante sollicitudin dui eu suscipit arcu vestibulum curabitur maximus ut nisl. Lacinia pellentesque adipiscing gravida. Lorem augue tempus quisque. Risus tortor vulputate commodo ac lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Ulogica",
      "short_description": "This is the service short description",
      "long_description": "long description Diam eti vel ac erat. Leo nisi aliquet nunc viverra auctor maximus mauris, maecenas purus ipsum adipiscing. Consectetur quisque vulputate sagittis. Iaculis proin tempus dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Dolor viverra imperdiet finibus elementum nisi aliquet au lorem ornare cursus cras non. Elementum rhoncus suscipit tristique. Rhoncus donec augue velit. Nam au dictum natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Proline",
      "short_description": "This is the service short description",
      "long_description": "long description Vel dui lacus ac etiam consectetur turpis curabitur arcu auctor. Nunc vitae vitae amet mollis. Laoreet ipsum facilisis dui lectus a arcu sed dignissim natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit purus vestibulum consequat dictum vulputate, nibh porttitor aenean consequat auctor, lacinia nisl ultricies vulputate. Enim imperdiet quis hendrerit vel dui viverra blandit dolor non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Sunopia",
      "short_description": "This is the service short description",
      "long_description": "long description Nisl lacus sem mattis euismod faucibus condimentum. Pretium sit justo in nisl vehicula turpis. Magna amet lacinia eti sodales eu enim sed sapien tortor neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Unilogic",
      "short_description": "This is the service short description",
      "long_description": "long description I morbi cras magna faucibus placerat fringilla, sem lacinia eget fringilla mollis, lectus donec neque velit leo vestibulum ex mauris nunc vestibulum id rhoncus ante.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Forecore",
      "short_description": "This is the service short description",
      "long_description": "long description Nibh lectus dictum pellentesque nisi tincidunt ipsum au etiam in quis ac nam suscipit natoque i laoreet sapien, nibh nam faucibus pulvinar cursus nam lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Massa nibh nulla sit in proin arcu. Lacinia i tincidunt leo vel nisi ultricies etiam ultricies diam scelerisque, nunc ex pharetra pellentesque, id mattis porttitor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Sealine",
      "short_description": "This is the service short description",
      "long_description": "long description Nisl tristique accumsan finibus hendrerit faucibus dignissim sagittis elementum auctor risus curabitur sodales mi, sit velit commodo elit cursus curabitur felis vulputate iaculis dolor aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Forecore",
      "short_description": "This is the service short description",
      "long_description": "long description At sapien et lacinia lorem. Cursus porttitor hendrerit vulputate sem felis consectetur auctor, lobortis lacinia aenean placerat, hendrerit vestibulum sit condimentum mollis sem lorem pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Conixco",
      "short_description": "This is the service short description",
      "long_description": "long description Ligula cras purus maximus consequat pharetra. Pulvinar ut hendrerit blandit. Suscipit metus vestibulum quis mollis lectus eu eti ut condimentum. Turpis at sem lacinia cras.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Opticast",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquet nulla mattis diam aenean velit rhoncus, sit mattis accumsan nunc tempus vitae, fringilla maximus leo dolor ultrices est lectus viverra. Leo dictum dictum mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "This is the service short description",
      "long_description": "long description Turpis at ultricies ex donec mollis. Vulputate aenean morbi non auctor. Aliquet laoreet dignissim curabitur. Arcu ex adipiscing justo. Donec au eu mauris diam in.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Keycast",
      "short_description": "This is the service short description",
      "long_description": "long description Nisi eros dictum est pretium pulvinar non, nam i non proin, suscipit donec sit quis faucibus in. Sapien blandit tristique lobortis nunc. Velit consectetur morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Viewtopia",
      "short_description": "This is the service short description",
      "long_description": "long description Lacinia faucibus bibendum est aliquam accumsan au aliquam mollis dictum. Lacinia donec laoreet vulputate donec lectus, blandit laoreet scelerisque lacinia sodales aliquet vel pulvinar et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus neque risus magna at id ac. Suscipit vel est enim eros risus sollicitudin auctor tristique velit mauris etiam bibendum mi adipiscing suscipit ante curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "This is the service short description",
      "long_description": "long description Euismod ipsum aliquam accumsan eu vel placerat, accumsan non consectetur ornare eget velit ipsum, blandit justo scelerisque nulla, amet sit au vehicula. Lorem condimentum non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Storex",
      "short_description": "This is the service short description",
      "long_description": "long description Magna turpis a ligula commodo at, cras dolor ac viverra proin. Et consequat vulputate sit. Est arcu vel accumsan consequat et. Scelerisque augue scelerisque rhoncus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Eros adipiscing cursus tempor tristique imperdiet iaculis dui i. Mauris dolor imperdiet augue. Massa sem quisque faucibus nisl hendrerit lectus suscipit tortor. Nibh elementum sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "CorpTek",
      "short_description": "This is the service short description",
      "long_description": "long description Ex consectetur fringilla a faucibus risus gravida. Laoreet magna placerat scelerisque. Lobortis at scelerisque posuere nisi hendrerit. Vulputate laoreet sapien eget euismod faucibus curabitur augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "VenStrategy",
      "short_description": "This is the service short description",
      "long_description": "long description Nisl tristique sit arcu iaculis magna. Arcu massa pellentesque eros i magna dolor pharetra pulvinar iaculis, dictum tortor vulputate orci enim lacinia mauris proin natoque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Cameratek",
      "short_description": "This is the service short description",
      "long_description": "long description Ultrices vestibulum commodo bibendum suscipit aliquam. Faucibus tempus dolor cras maecenas euismod etiam, ac ut aenean pulvinar cras placerat. Hendrerit amet est curabitur vel neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Templatek",
      "short_description": "This is the service short description",
      "long_description": "long description Enim donec pellentesque donec non adipiscing augue cras iaculis dictum pretium donec vestibulum ligula lacinia, accumsan quisque leo lacinia gravida. Aliquet pretium laoreet scelerisque hendrerit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Quadtek",
      "short_description": "This is the service short description",
      "long_description": "long description Dignissim vel lacinia vestibulum ultricies. Nibh ornare orci cras pulvinar tristique. Justo augue est mattis, sagittis vel velit tempus lectus felis eu tortor lacinia iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Freecast",
      "short_description": "This is the service short description",
      "long_description": "long description Ornare tortor vulputate curabitur adipiscing a elit, aliquet consectetur pretium lectus fringilla euismod. Ultricies lorem blandit nibh posuere consectetur ultrices dictum. Lobortis sem aliquet morbi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "NitroSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Gravida rhoncus tristique vitae pretium viverra, metus donec nisi sodales et auctor. Sit sapien nisl risus. Velit imperdiet curabitur fringilla etiam. Etiam quis blandit orci.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Thermolock",
      "short_description": "This is the service short description",
      "long_description": "long description Vitae lobortis ligula eu felis aenean et. Sodales blandit justo non proin, bibendum lacus elementum tempus. Nisl tincidunt ultrices enim vulputate. Cras enim et sit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Keycast",
      "short_description": "This is the service short description",
      "long_description": "long description Aliquet felis porttitor tortor eget curabitur. Elementum ante mi augue ipsum nisi accumsan in rhoncus a dui. Nibh imperdiet eget au in. Tempus sed a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "This is the service short description",
      "long_description": "long description Iaculis dolor cursus sodales lobortis risus eget commodo. Morbi donec orci i lacinia donec aliquam. Sollicitudin nisl faucibus sed, lacinia tempor condimentum lacus pulvinar donec.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "TrioSys",
      "short_description": "This is the service short description",
      "long_description": "long description Viverra aenean lobortis lobortis lacinia lectus, e au vehicula lacinia vehicula fringilla nisi, justo au erat sollicitudin. Scelerisque pellentesque pretium morbi amet, diam enim arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "This is the service short description",
      "long_description": "long description Ut est au sit eget dui hendrerit, tempor cursus purus sed. Porttitor ultricies aenean gravida, posuere elit cras tortor faucibus mi aenean lorem lectus sagittis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Nitrocam",
      "short_description": "This is the service short description",
      "long_description": "long description Tristique mi proin vestibulum tempor massa. Velit tempor pretium mi, natoque a pulvinar sodales magna condimentum pulvinar, pellentesque erat mattis pellentesque mollis bibendum proin tristique.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description Fringilla maecenas gravida blandit proin. Finibus scelerisque quisque consequat tortor ligula velit rhoncus sagittis, ipsum nulla elit tristique. Posuere elit felis eget. Porttitor lacus a.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt mattis tempor e au. Scelerisque et eu aenean pretium augue aenean facilisis adipiscing vitae, natoque adipiscing eu nunc. Imperdiet rhoncus eros enim vel adipiscing.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Erat sodales vehicula arcu eu amet fringilla. Orci condimentum fringilla blandit, velit tempus vel eget. Condimentum condimentum ligula justo i euismod porttitor, i sollicitudin dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Tecomix",
      "short_description": "This is the service short description",
      "long_description": "long description Tortor erat lectus fringilla curabitur posuere maecenas, mattis nulla sit sed consectetur pellentesque orci curabitur ut mauris eget, vehicula suscipit metus laoreet lacus mollis pellentesque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "LexiconLabs",
      "short_description": "This is the service short description",
      "long_description": "long description Quis eti pharetra augue hendrerit diam, finibus sapien sollicitudin cras au est. Euismod sed tempus sit nisl leo orci tristique sapien, mi sapien ultrices posuere.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Helixicon",
      "short_description": "This is the service short description",
      "long_description": "long description Ex purus augue iaculis amet, non nam nisl sagittis euismod neque. At faucibus bibendum non ultrices nulla commodo. Placerat ac tristique ante, erat eti bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "FortyFour",
      "short_description": "This is the service short description",
      "long_description": "long description Velit ante maximus dignissim vehicula, cras natoque commodo pretium e aliquam, amet aliquam dignissim id, turpis commodo vel proin ac, morbi mauris ultrices eti tortor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "MultiServ",
      "short_description": "This is the service short description",
      "long_description": "long description Dui maecenas lacinia dolor dignissim suscipit a neque faucibus, neque tortor lacus euismod nisi. Eros nam consequat tortor. Ex hendrerit lacinia posuere purus et non.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Sodales euismod augue au lobortis tortor. Felis morbi vestibulum erat sagittis pharetra. Lacinia quis maximus commodo, eu sodales ultrices ligula sagittis. Elit eget metus dui.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Maxcast",
      "short_description": "This is the service short description",
      "long_description": "long description Eget tempor mi pharetra facilisis laoreet auctor enim au, tristique au et vitae ultrices bibendum vitae. Mi vitae posuere sem tempus i erat donec magna.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "This is the service short description",
      "long_description": "long description Finibus tincidunt blandit orci tempus. Lacinia bibendum i nunc pretium ut tristique euismod. Nisl rhoncus bibendum au, justo cras scelerisque tempus vitae eti metus accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Hivemind",
      "short_description": "This is the service short description",
      "long_description": "long description Mollis vehicula euismod sodales mi scelerisque, mollis laoreet aenean eu tempus quisque pellentesque viverra. Elit maecenas adipiscing lacinia. Massa dictum bibendum nisi proin maecenas pharetra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "SkyCenta",
      "short_description": "This is the service short description",
      "long_description": "long description Sed viverra lobortis vestibulum justo dui purus vestibulum porttitor, aliquet tortor consectetur ut, vulputate natoque tempus mi pellentesque maximus. Tincidunt ipsum sed sit mi et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "This is the service short description",
      "long_description": "long description Proin metus lacinia et dui aliquet, proin lobortis pellentesque sapien nulla, facilisis mollis dignissim ipsum donec vulputate. Natoque sit proin cras. Gravida mattis turpis commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "SixtySix",
      "short_description": "This is the service short description",
      "long_description": "long description Nibh arcu consequat sodales tincidunt, vel quisque tortor a hendrerit. Laoreet commodo augue nunc scelerisque, id sapien non eti sagittis. Turpis a lobortis vulputate eu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description In lacus diam ornare aliquam eu maecenas tortor elementum vitae. Etiam i turpis nulla, iaculis morbi lacinia quisque ultricies, felis sit natoque non au pulvinar.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Infracom",
      "short_description": "This is the service short description",
      "long_description": "long description Augue nisi ex lacus nam diam rhoncus fringilla eti ornare nunc lobortis quis curabitur blandit a quis lorem. Consequat bibendum lacinia rhoncus neque dolor consequat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Keysoft",
      "short_description": "This is the service short description",
      "long_description": "long description Mi facilisis pharetra pharetra metus elit pretium aenean eros ipsum. Purus est blandit mauris est. Dignissim enim aliquam est ac ultricies, sit enim suscipit scelerisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Eros gravida velit risus arcu. Proin maecenas sed nam e nulla nisi amet. Eget lectus pretium viverra, lorem facilisis facilisis ipsum vel auctor porttitor mattis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Lobortis at ligula proin iaculis, neque facilisis est ultricies etiam. Nam morbi dui cras quis natoque lacinia rhoncus morbi, est ac mi scelerisque a iaculis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Dalserve",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt accumsan pharetra viverra e. Finibus elementum tristique quisque mattis sit vulputate lacinia eti pretium e mattis lacinia. Felis rhoncus augue viverra tortor tempus accumsan.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Sophis",
      "short_description": "This is the service short description",
      "long_description": "long description I turpis eti pharetra arcu sit tempus ligula tortor donec risus. Id cursus vitae mi sem nam tristique proin ultricies, velit sollicitudin curabitur dolor nibh.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "MediaDime",
      "short_description": "This is the service short description",
      "long_description": "long description Enim lectus cras maximus scelerisque pulvinar mauris i. Pulvinar donec diam est tincidunt sagittis, aliquet in ante dui arcu. Hendrerit vestibulum sagittis sem neque amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "CoreXTS",
      "short_description": "This is the service short description",
      "long_description": "long description Maecenas quis tincidunt dolor cras elementum tempus leo. Cursus consectetur auctor elit. Magna vulputate scelerisque vel leo posuere nibh commodo, elementum vehicula leo aliquet metus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Sophis",
      "short_description": "This is the service short description",
      "long_description": "long description Vehicula au etiam nisi enim consectetur pulvinar. Facilisis nisl sem suscipit tortor cras et nisl gravida, id posuere eu nulla nisl. Natoque ultricies magna eros.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Dynalab",
      "short_description": "This is the service short description",
      "long_description": "long description Eti velit orci turpis au, non cras tincidunt ac vulputate facilisis, ultrices vulputate porttitor purus blandit est vel au id imperdiet e, consectetur posuere et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Forecore",
      "short_description": "This is the service short description",
      "long_description": "long description Au eu finibus lectus dictum gravida erat. Rhoncus rhoncus ut ultrices faucibus pulvinar auctor. Tempor purus sit nibh bibendum nam lacus natoque. Sodales vitae sit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Creatonix",
      "short_description": "This is the service short description",
      "long_description": "long description Etiam dolor commodo neque laoreet velit justo ut neque. Magna etiam ligula sagittis at sem felis, elit tincidunt i vestibulum ex in pulvinar commodo lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Galcom",
      "short_description": "This is the service short description",
      "long_description": "long description Vulputate e rhoncus cras vestibulum natoque nisl, ac pellentesque tristique tristique tempus, nam vestibulum vestibulum sollicitudin leo diam et vulputate. Ultricies nulla rhoncus aliquet suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Anaplex",
      "short_description": "This is the service short description",
      "long_description": "long description Condimentum vulputate lobortis vitae laoreet consequat dictum ante euismod ut erat. Proin tristique vitae aliquet aliquet, justo iaculis ipsum ex pretium pulvinar accumsan ipsum amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "WestGate",
      "short_description": "This is the service short description",
      "long_description": "long description Bibendum eget adipiscing mi sollicitudin ultricies maecenas id sed gravida, amet adipiscing pulvinar cras at nulla curabitur ligula eu vitae. Facilisis ut ligula id curabitur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Nunc accumsan tincidunt etiam arcu neque. Augue faucibus au aliquet. Iaculis dolor mi vitae natoque. Et aliquam i eget at quis arcu proin lacinia et.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "QuadNet",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus a cras aliquam dictum metus justo leo eget elit cras maecenas maximus, augue orci aenean curabitur tempus velit lobortis orci, ultrices donec dui gravida.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Hendrerit neque sodales non tortor velit iaculis ipsum, sagittis imperdiet turpis au nisi. Ipsum aliquam fringilla magna velit nunc dolor. Orci mauris velit risus sapien.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Adipiscing augue i imperdiet lobortis neque pretium. Etiam posuere enim pretium fringilla posuere. Ornare sodales in elit vulputate. Neque aliquam ligula auctor condimentum pretium sem.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 4"
      ]
    },
    {
      "name": "ForeTrust",
      "short_description": "This is the service short description",
      "long_description": "long description Dui lorem purus ultricies mauris, nibh leo iaculis est, mi adipiscing nibh amet i pulvinar euismod. Cursus quis vestibulum consectetur nunc, adipiscing pretium imperdiet commodo.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description Arcu bibendum leo euismod at, nunc dui leo sodales magna vel. Neque donec metus sem euismod. Viverra vel pretium nisi, vitae tempor at accumsan vehicula.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "Solexis",
      "short_description": "This is the service short description",
      "long_description": "long description Nisl pharetra lorem commodo i. Lorem leo aliquet magna dictum aliquet eros sapien ipsum. Magna leo non id scelerisque augue fringilla. Eget ligula i i.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Qualcore",
      "short_description": "This is the service short description",
      "long_description": "long description Cursus sodales tempor pellentesque massa consequat. I ultricies ex maximus porttitor ultricies nisi ligula at rhoncus. Nibh tempus tempus hendrerit nulla aliquam, tortor bibendum quisque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Ultrices accumsan faucibus rhoncus natoque. Amet placerat tempor justo. Nisi auctor at at, vestibulum nulla non quis a vestibulum cras nulla dictum nunc lacinia dignissim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Placerat enim ipsum a elementum dictum ipsum. Fringilla et viverra e laoreet pellentesque sed id in tempus. Gravida elementum fringilla etiam, erat lacinia finibus nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "OpenServ",
      "short_description": "This is the service short description",
      "long_description": "long description Tempor gravida ligula justo pharetra dignissim dolor aenean eros. Aliquam ex ultrices risus. Cursus non velit magna, viverra velit sollicitudin imperdiet consequat adipiscing leo at.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Playtech",
      "short_description": "This is the service short description",
      "long_description": "long description Au augue mi lectus morbi lacus commodo in, suscipit finibus vitae maximus. Lobortis diam pulvinar vel ex, eti tempus bibendum dolor at mi nam amet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "MultiLingua",
      "short_description": "This is the service short description",
      "long_description": "long description Dolor leo leo vehicula cursus tincidunt consequat. Sagittis ac et ultricies lectus au, nibh i nam a facilisis tincidunt nam at diam hendrerit sapien lacinia.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Infratouch",
      "short_description": "This is the service short description",
      "long_description": "long description Suscipit sit consectetur est cras pellentesque, laoreet sed tristique au scelerisque maecenas rhoncus eti erat aliquam. Metus aliquam gravida aenean curabitur auctor, nulla purus suscipit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Hassifix",
      "short_description": "This is the service short description",
      "long_description": "long description Neque laoreet ut augue cras, aliquet commodo consectetur pellentesque ac. Blandit tristique vel morbi magna vel aliquam eros cursus purus lacus pharetra. Sodales adipiscing blandit.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Porttitor aliquet bibendum curabitur ornare tincidunt. Au lacinia vulputate vulputate. Nunc viverra eget cursus felis ante, risus blandit hendrerit metus aliquet, cras mollis et sollicitudin.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Galcom",
      "short_description": "This is the service short description",
      "long_description": "long description Blandit ut a auctor euismod, viverra natoque nibh sed. Gravida ultricies lorem fringilla massa lacus mauris quis cras ultrices, porttitor e ipsum blandit commodo neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Westercom",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt amet id lorem ut quisque non. Mauris ac cursus fringilla, auctor condimentum eu sagittis fringilla curabitur tempus, laoreet hendrerit in maecenas massa vulputate lobortis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Tomiatech",
      "short_description": "This is the service short description",
      "long_description": "long description Et vestibulum vulputate magna tempor. Elementum aliquet eget imperdiet dui ante pharetra donec. Sem ut nisl ut maecenas magna, lacinia elit hendrerit quis nam neque.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "WestGate",
      "short_description": "This is the service short description",
      "long_description": "long description Elit nam purus blandit eros nisl orci. Lacinia vestibulum lectus sapien a aliquet sapien. Ligula neque sollicitudin faucibus suscipit leo. Eu posuere tortor morbi lectus.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    },
    {
      "name": "FastFreight",
      "short_description": "This is the service short description",
      "long_description": "long description Pretium facilisis vulputate cursus viverra scelerisque. Cursus pulvinar curabitur faucibus accumsan ultricies lectus neque sollicitudin. Condimentum auctor et imperdiet aenean lobortis, maecenas diam risus eti.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Seelogic",
      "short_description": "This is the service short description",
      "long_description": "long description Non lacinia dignissim natoque lobortis, ante ex blandit lorem justo est lobortis. Elit magna nunc accumsan, eget suscipit lorem mattis cras, sagittis eros accumsan posuere.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Eluxa",
      "short_description": "This is the service short description",
      "long_description": "long description Augue laoreet lobortis justo purus nisi pretium. Erat eu cursus lacinia nunc. Pharetra lorem bibendum tempus vestibulum lacinia rhoncus purus at. Ac commodo consequat nam.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 4"
      ]
    },
    {
      "name": "Pancast",
      "short_description": "This is the service short description",
      "long_description": "long description Nisl pretium at nunc maecenas sem. Suscipit nibh dictum felis pulvinar. Curabitur condimentum rhoncus lacinia. Massa proin ac lorem sollicitudin, dolor justo dictum pulvinar e.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Airconix",
      "short_description": "This is the service short description",
      "long_description": "long description Non in quis rhoncus posuere felis diam rhoncus. Ut vulputate scelerisque curabitur tristique justo e arcu non adipiscing hendrerit. Sit enim faucibus nisi viverra tempor.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "This is the service short description",
      "long_description": "long description Condimentum pharetra pellentesque eros placerat, pulvinar ipsum elementum faucibus gravida, cursus scelerisque purus pulvinar porttitor eget. Est et tempor id, ut adipiscing ac etiam condimentum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Britech",
      "short_description": "This is the service short description",
      "long_description": "long description Ante fringilla erat quis dui donec, dignissim mollis tincidunt iaculis, fringilla lacinia elementum tristique quis ultricies maximus. Ut dui au consequat. Cras laoreet aliquam ut.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 5"
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Nisi quisque commodo dolor ipsum pretium, tortor proin quis lacinia etiam sodales lacinia. Aliquet placerat lectus ipsum mattis viverra, elementum mattis diam quis turpis nunc.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "SmartSystems",
      "short_description": "This is the service short description",
      "long_description": "long description Tortor ex viverra euismod vestibulum purus, neque eu at fringilla non lacus quis. Auctor ipsum at suscipit lacus curabitur orci nisl sodales dictum elit viverra.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Coolinga",
      "short_description": "This is the service short description",
      "long_description": "long description Quis ante commodo auctor donec dui aenean neque mattis porttitor erat purus velit. Pharetra diam sit mollis tristique. Iaculis in lacinia placerat auctor proin mollis.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Xenosys",
      "short_description": "This is the service short description",
      "long_description": "long description Tincidunt sit i accumsan i lacinia, gravida magna dignissim nulla massa sapien, quisque sagittis nisi rhoncus nam, proin non imperdiet vel erat est tincidunt ultrices.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "DuoServe",
      "short_description": "This is the service short description",
      "long_description": "long description Ligula risus arcu nibh e. Porttitor etiam viverra ligula lobortis. Pretium lacinia scelerisque porttitor, lorem erat ipsum purus lacinia aliquam morbi. Rhoncus vel sed euismod.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Opticast",
      "short_description": "This is the service short description",
      "long_description": "long description Finibus nam dolor scelerisque tincidunt curabitur lectus eu. Diam et au sodales dignissim purus rhoncus nulla accumsan rhoncus tristique at. Tristique et aliquet diam placerat.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Celmax",
      "short_description": "This is the service short description",
      "long_description": "long description Tristique commodo ligula nulla pellentesque proin nibh consectetur quisque est ipsum at. Bibendum commodo auctor augue eget adipiscing ex vulputate. Sapien tempor justo ornare nisi.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 5"
      ]
    },
    {
      "name": "Superwire",
      "short_description": "This is the service short description",
      "long_description": "long description Lacus nisl sit sem tristique orci ex ultrices imperdiet dolor. Commodo ultricies tempus laoreet aliquet augue accumsan orci vitae, cras erat viverra eget a enim.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "WestGate",
      "short_description": "This is the service short description",
      "long_description": "long description Placerat cras purus vel augue. Ultricies lacinia fringilla vehicula scelerisque. Massa amet erat faucibus dignissim blandit dictum a tempor finibus enim scelerisque erat lacus arcu.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Terrasys",
      "short_description": "This is the service short description",
      "long_description": "long description Imperdiet felis tristique mattis eti ac tortor tortor eu mattis turpis aliquam posuere posuere sed vulputate elementum. Imperdiet tincidunt dolor est non, tortor euismod ornare.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 3",
        "role 6"
      ]
    },
    {
      "name": "Opticast",
      "short_description": "This is the service short description",
      "long_description": "long description Neque nam e mollis et, vel vestibulum tempor facilisis a. Facilisis neque cursus in lobortis nunc adipiscing tristique turpis maecenas mi. Sodales consequat consequat aliquet.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 4"
      ]
    },
    {
      "name": "Cryosoft",
      "short_description": "This is the service short description",
      "long_description": "long description Augue sodales quisque lectus sit. Pharetra tincidunt leo ut, ultrices sit commodo sollicitudin aenean i, natoque quisque facilisis pharetra neque vel. Tortor scelerisque amet bibendum.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 2",
        "role 6"
      ]
    },
    {
      "name": "Logico",
      "short_description": "This is the service short description",
      "long_description": "long description Donec maximus eros lacinia at vehicula purus est vitae finibus. Nisi velit cursus fringilla faucibus. Tempus metus imperdiet adipiscing eget natoque. Lacus pulvinar pharetra augue.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 6"
      ]
    },
    {
      "name": "Cryptonica",
      "short_description": "This is the service short description",
      "long_description": "long description Nam risus morbi sem accumsan sagittis purus. Amet felis tristique adipiscing etiam est posuere suscipit neque, sagittis euismod metus sed. Eros lobortis ac ipsum consectetur.",
      "logo": "http://placehold.it/64x64",
      "roles": [
        "role 1",
        "role 5"
      ]
    }
  ];

Cases['Default'] = {
  roles:['role1', 'role2', 'role3', 'role4'],
  services: services ,
  user: {
    isLogged: true,
    expiresAt: Date.now() + 3600000,
    isAdmin: true,
	  canImpersonate:true
  }
}

export default Cases;