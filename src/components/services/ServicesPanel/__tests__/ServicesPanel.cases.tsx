import ServicesPanel, { IServicesPanelProps } from '../ServicesPanel';
let testLogo = require('../../../../assets/testLogo.svg');
let Cases : {[id:string]:IServicesPanelProps} = {};

let services = 
  [
    {
      "id": "roles/role-0/subdomain-0",
      "roleId": "role-0",
      "subDomain": "subdomain-0",
      "logo": "http://placehold.it/64x64",
      "name": "OmniTouch",
      "longDescription": "Leo sed e justo facilisis nam lectus, iaculis adipiscing vestibulum mauris nam blandit. Maecenas tempor sem mattis cursus posuere fringilla.",
      "longDescriptionUrl": "omnitouch.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-1/subdomain-1",
      "roleId": "role-1",
      "subDomain": "subdomain-1",
      "logo": "http://placehold.it/64x64",
      "name": "Quadtek",
      "longDescription": "Arcu at aenean tristique dolor sit viverra. Euismod leo ipsum finibus. Pharetra enim commodo pretium enim. Aliquet fringilla nunc nisi.",
      "longDescriptionUrl": "quadtek.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-2/subdomain-2",
      "roleId": "role-2",
      "subDomain": "subdomain-2",
      "logo": "http://placehold.it/64x64",
      "name": "Chromaton",
      "longDescription": "Ligula non dolor at velit natoque ex et nam mauris. Placerat sagittis quisque aenean mattis. Sit adipiscing orci augue lectus.",
      "longDescriptionUrl": "chromaton.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-3/subdomain-3",
      "roleId": "role-3",
      "subDomain": "subdomain-3",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Aliquam tincidunt metus eti nunc morbi pulvinar. Est mauris nisi massa. Lacinia tempus tristique amet. Curabitur ut aliquet vitae tempor.",
      "longDescriptionUrl": "helixicon.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-4/subdomain-4",
      "roleId": "role-4",
      "subDomain": "subdomain-4",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Vel massa sit nisl cras et accumsan, non sed tristique adipiscing. A faucibus ultricies natoque tincidunt sed. Ex ultrices auctor.",
      "longDescriptionUrl": "proline.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-5/subdomain-5",
      "roleId": "role-5",
      "subDomain": "subdomain-5",
      "logo": "http://placehold.it/64x64",
      "name": "StrategyLine",
      "longDescription": "Etiam ipsum eti suscipit hendrerit elementum, leo nibh mattis justo gravida tristique eti. Donec pellentesque nunc sodales neque nisl scelerisque.",
      "longDescriptionUrl": "strategyline.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-6/subdomain-6",
      "roleId": "role-6",
      "subDomain": "subdomain-6",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Dui vehicula ante adipiscing sagittis lacus ut proin consequat, eti consequat pharetra purus vitae vel natoque. Lacinia lacus tempus felis.",
      "longDescriptionUrl": "zatheon.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-7/subdomain-7",
      "roleId": "role-7",
      "subDomain": "subdomain-7",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Commodo accumsan dignissim condimentum e a turpis tincidunt vulputate maecenas tincidunt. Etiam pharetra lectus pretium finibus quisque mauris pellentesque orci.",
      "longDescriptionUrl": "sixtysix.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-8/subdomain-8",
      "roleId": "role-8",
      "subDomain": "subdomain-8",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Sapien nibh enim finibus posuere scelerisque, viverra quisque vel nisi. Donec pretium pharetra magna mollis, lobortis laoreet nisi velit consectetur.",
      "longDescriptionUrl": "fastfreight.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-9/subdomain-9",
      "roleId": "role-9",
      "subDomain": "subdomain-9",
      "logo": "http://placehold.it/64x64",
      "name": "Terralabs",
      "longDescription": "Sollicitudin commodo ultrices mollis curabitur mi, pretium auctor maximus bibendum. Eu dui justo nulla, quis lacinia euismod pharetra mattis proin.",
      "longDescriptionUrl": "terralabs.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-10/subdomain-10",
      "roleId": "role-10",
      "subDomain": "subdomain-10",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Pharetra vitae enim felis fringilla lorem. Est e sollicitudin risus id. Sem mattis tincidunt massa nisi ultrices lorem eget natoque.",
      "longDescriptionUrl": "proline.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-11/subdomain-11",
      "roleId": "role-11",
      "subDomain": "subdomain-11",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Quis posuere laoreet curabitur mauris iaculis orci in mi lacinia vulputate mollis lorem. Vehicula sagittis i erat scelerisque augue euismod.",
      "longDescriptionUrl": "proline.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-12/subdomain-12",
      "roleId": "role-12",
      "subDomain": "subdomain-12",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Justo vehicula felis eti ut cursus, commodo tortor dui eu laoreet aenean etiam e tristique felis. Fringilla natoque augue lacus.",
      "longDescriptionUrl": "celmax.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-13/subdomain-13",
      "roleId": "role-13",
      "subDomain": "subdomain-13",
      "logo": "http://placehold.it/64x64",
      "name": "Britech",
      "longDescription": "Amet tempus lectus quisque rhoncus. Maecenas aliquet rhoncus velit lobortis posuere ac tristique. Condimentum auctor ut ex augue pulvinar ornare.",
      "longDescriptionUrl": "britech.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-14/subdomain-14",
      "roleId": "role-14",
      "subDomain": "subdomain-14",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Nunc mollis leo proin auctor tempor. I sem finibus erat pharetra pretium. Aenean dui mi pharetra cras. Sed viverra felis.",
      "longDescriptionUrl": "corptek.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-15/subdomain-15",
      "roleId": "role-15",
      "subDomain": "subdomain-15",
      "logo": "http://placehold.it/64x64",
      "name": "Terralabs",
      "longDescription": "Eros dui turpis sodales donec. Nisi cursus cras facilisis. Vel et ultrices pulvinar. Pharetra et ultrices dolor lacus vel vitae.",
      "longDescriptionUrl": "terralabs.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-16/subdomain-16",
      "roleId": "role-16",
      "subDomain": "subdomain-16",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Accumsan mauris ac tempus dui porttitor faucibus mattis. Aliquet fringilla justo diam vel ac, lorem blandit lacinia i tristique lacinia.",
      "longDescriptionUrl": "eluxa.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-17/subdomain-17",
      "roleId": "role-17",
      "subDomain": "subdomain-17",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Pellentesque sollicitudin aliquet eget sollicitudin, non sagittis vel est. Non natoque lacus viverra. Arcu erat adipiscing ultricies consequat tristique nulla.",
      "longDescriptionUrl": "thermolock.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-18/subdomain-18",
      "roleId": "role-18",
      "subDomain": "subdomain-18",
      "logo": "http://placehold.it/64x64",
      "name": "ForeTrust",
      "longDescription": "Porttitor erat commodo consectetur pulvinar gravida tortor. Velit gravida imperdiet iaculis condimentum elementum. Accumsan nam i mi nisi auctor lacinia.",
      "longDescriptionUrl": "foretrust.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-19/subdomain-19",
      "roleId": "role-19",
      "subDomain": "subdomain-19",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Mattis bibendum fringilla gravida bibendum. A nisi maecenas dui sapien vulputate natoque, vehicula maecenas elit bibendum curabitur diam sollicitudin vestibulum.",
      "longDescriptionUrl": "solexis.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-20/subdomain-20",
      "roleId": "role-20",
      "subDomain": "subdomain-20",
      "logo": "http://placehold.it/64x64",
      "name": "Cameratek",
      "longDescription": "Tortor velit risus metus dolor, etiam nisi ipsum sodales sed i ornare ut, consectetur tortor eros mollis donec augue magna.",
      "longDescriptionUrl": "cameratek.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-21/subdomain-21",
      "roleId": "role-21",
      "subDomain": "subdomain-21",
      "logo": "http://placehold.it/64x64",
      "name": "CoreRobotics",
      "longDescription": "Pretium hendrerit ex metus eros. Sapien tempus tempus nisl ante. Lacus morbi enim sagittis ut auctor massa eget eu ligula.",
      "longDescriptionUrl": "corerobotics.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-22/subdomain-22",
      "roleId": "role-22",
      "subDomain": "subdomain-22",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Ex ut fringilla est elementum aenean ut euismod, neque sagittis eros quis metus tincidunt lacinia elementum ligula. Vulputate pellentesque viverra.",
      "longDescriptionUrl": "smartsystems.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-23/subdomain-23",
      "roleId": "role-23",
      "subDomain": "subdomain-23",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Auctor fringilla scelerisque lobortis ipsum, pulvinar bibendum maecenas vestibulum. Laoreet fringilla aenean in, magna eu a ante laoreet commodo vestibulum.",
      "longDescriptionUrl": "connic.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-24/subdomain-24",
      "roleId": "role-24",
      "subDomain": "subdomain-24",
      "logo": "http://placehold.it/64x64",
      "name": "Maxcast",
      "longDescription": "Dignissim ligula id metus eti velit elit, facilisis maximus leo i eu rhoncus. Ut quisque viverra sit quis nulla justo.",
      "longDescriptionUrl": "maxcast.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-25/subdomain-25",
      "roleId": "role-25",
      "subDomain": "subdomain-25",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Orci augue sit facilisis hendrerit et mauris. Euismod viverra felis pretium. Lacus iaculis lorem neque imperdiet tortor adipiscing at lacinia.",
      "longDescriptionUrl": "connic.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-26/subdomain-26",
      "roleId": "role-26",
      "subDomain": "subdomain-26",
      "logo": "http://placehold.it/64x64",
      "name": "Cirpria",
      "longDescription": "Dui enim neque metus ligula cras gravida hendrerit ex enim, bibendum iaculis sapien maximus vel cras eros suscipit et nisi.",
      "longDescriptionUrl": "cirpria.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-27/subdomain-27",
      "roleId": "role-27",
      "subDomain": "subdomain-27",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Non nam ex posuere erat. Posuere vestibulum consequat finibus lectus. Dolor aliquet vehicula imperdiet vestibulum porttitor. Elit tempus elit dictum.",
      "longDescriptionUrl": "thermolock.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-28/subdomain-28",
      "roleId": "role-28",
      "subDomain": "subdomain-28",
      "logo": "http://placehold.it/64x64",
      "name": "Amsquare",
      "longDescription": "Etiam ligula id ultricies leo elit e orci, vehicula lacinia neque viverra. Morbi rhoncus laoreet dignissim, leo lacinia viverra sapien.",
      "longDescriptionUrl": "amsquare.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-29/subdomain-29",
      "roleId": "role-29",
      "subDomain": "subdomain-29",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Accumsan tincidunt turpis blandit amet, imperdiet arcu sit pharetra pulvinar sed. Imperdiet laoreet sapien at curabitur. Dictum maecenas natoque risus.",
      "longDescriptionUrl": "cryptonica.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-30/subdomain-30",
      "roleId": "role-30",
      "subDomain": "subdomain-30",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Etiam sed pellentesque enim natoque leo mattis condimentum, cursus sagittis quisque risus ipsum laoreet nam vel suscipit au felis sodales.",
      "longDescriptionUrl": "fastfreight.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-31/subdomain-31",
      "roleId": "role-31",
      "subDomain": "subdomain-31",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Iaculis aliquam rhoncus lorem adipiscing, iaculis blandit maecenas neque mollis augue. Vel cras ornare dictum morbi maecenas cras au quisque.",
      "longDescriptionUrl": "fortyfour.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-32/subdomain-32",
      "roleId": "role-32",
      "subDomain": "subdomain-32",
      "logo": "http://placehold.it/64x64",
      "name": "Sophis",
      "longDescription": "Id ipsum metus maecenas pharetra tincidunt. Leo consectetur finibus vestibulum nibh lacinia eti velit pulvinar. Sit eti sodales faucibus posuere.",
      "longDescriptionUrl": "sophis.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-33/subdomain-33",
      "roleId": "role-33",
      "subDomain": "subdomain-33",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Lobortis felis au vulputate sodales velit purus blandit. Quis magna lacinia placerat. Leo dui leo fringilla ac. Finibus imperdiet auctor.",
      "longDescriptionUrl": "qualcore.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-34/subdomain-34",
      "roleId": "role-34",
      "subDomain": "subdomain-34",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Massa vestibulum accumsan natoque a rhoncus orci etiam, mauris tempus sodales purus ipsum. Turpis consectetur pellentesque erat hendrerit erat pretium.",
      "longDescriptionUrl": "sunopia.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-35/subdomain-35",
      "roleId": "role-35",
      "subDomain": "subdomain-35",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "Ornare porttitor viverra ligula morbi pharetra quis arcu cras, eget aliquam maecenas eget tristique, lacinia faucibus maximus diam hendrerit ex.",
      "longDescriptionUrl": "westgate.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-36/subdomain-36",
      "roleId": "role-36",
      "subDomain": "subdomain-36",
      "logo": "http://placehold.it/64x64",
      "name": "Dalserve",
      "longDescription": "Fringilla curabitur tortor e curabitur metus ac justo ex purus quisque morbi, porttitor at leo a pretium leo ac fringilla.",
      "longDescriptionUrl": "dalserve.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-37/subdomain-37",
      "roleId": "role-37",
      "subDomain": "subdomain-37",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "Posuere elit leo scelerisque erat orci. Dolor posuere non aliquet vehicula. Pulvinar sit aenean mollis maximus eget elementum leo blandit.",
      "longDescriptionUrl": "templatek.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-38/subdomain-38",
      "roleId": "role-38",
      "subDomain": "subdomain-38",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Vel natoque eros tempor nisl orci finibus, commodo iaculis iaculis e, mollis facilisis sagittis curabitur. Aliquet imperdiet morbi adipiscing a.",
      "longDescriptionUrl": "helixicon.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-39/subdomain-39",
      "roleId": "role-39",
      "subDomain": "subdomain-39",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Velit placerat posuere sit ultricies elementum curabitur quis hendrerit fringilla. Erat etiam pharetra augue magna tempus eros eget mollis risus.",
      "longDescriptionUrl": "proline.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-40/subdomain-40",
      "roleId": "role-40",
      "subDomain": "subdomain-40",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Tortor est enim sem laoreet natoque ligula lacus. Sem dolor nunc bibendum. Neque elit ipsum velit. Sem massa arcu velit.",
      "longDescriptionUrl": "connic.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-41/subdomain-41",
      "roleId": "role-41",
      "subDomain": "subdomain-41",
      "logo": "http://placehold.it/64x64",
      "name": "MultiLingua",
      "longDescription": "Ac sapien ipsum maximus felis nibh est bibendum, a sit et velit, ultrices nisi justo orci a sagittis turpis sem.",
      "longDescriptionUrl": "multilingua.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-42/subdomain-42",
      "roleId": "role-42",
      "subDomain": "subdomain-42",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Nulla sem morbi vestibulum nisl eti, cursus sit leo porttitor au nisi lobortis tempus id leo et vitae finibus ultrices.",
      "longDescriptionUrl": "solexis.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-43/subdomain-43",
      "roleId": "role-43",
      "subDomain": "subdomain-43",
      "logo": "http://placehold.it/64x64",
      "name": "OmniTouch",
      "longDescription": "Natoque turpis vulputate pulvinar eros. Sodales i non eget, gravida ex etiam turpis. Metus euismod morbi nunc rhoncus eu euismod.",
      "longDescriptionUrl": "omnitouch.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-44/subdomain-44",
      "roleId": "role-44",
      "subDomain": "subdomain-44",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Curabitur auctor a suscipit quis. Elit gravida eti a ante leo quisque mi quis. Adipiscing hendrerit pretium eti condimentum facilisis.",
      "longDescriptionUrl": "helixicon.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-45/subdomain-45",
      "roleId": "role-45",
      "subDomain": "subdomain-45",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Ligula proin rhoncus tortor etiam proin massa tempus. Turpis hendrerit tincidunt bibendum. Vitae aliquam ante bibendum sem dictum lacinia proin.",
      "longDescriptionUrl": "storex.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-46/subdomain-46",
      "roleId": "role-46",
      "subDomain": "subdomain-46",
      "logo": "http://placehold.it/64x64",
      "name": "Logico",
      "longDescription": "Accumsan etiam eros pharetra mi, vel viverra pulvinar diam velit pretium purus porttitor hendrerit. Scelerisque elementum gravida vestibulum laoreet nisl.",
      "longDescriptionUrl": "logico.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-47/subdomain-47",
      "roleId": "role-47",
      "subDomain": "subdomain-47",
      "logo": "http://placehold.it/64x64",
      "name": "Sophis",
      "longDescription": "Rhoncus eu ut porttitor au pellentesque vel, ex pellentesque dolor dolor. Imperdiet lobortis massa lacinia. Pulvinar sapien lacus iaculis risus.",
      "longDescriptionUrl": "sophis.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-48/subdomain-48",
      "roleId": "role-48",
      "subDomain": "subdomain-48",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "Consectetur justo orci accumsan nisi gravida maecenas. Eti lobortis sem ante non. Augue commodo sed nulla finibus adipiscing e dui.",
      "longDescriptionUrl": "conixco.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-49/subdomain-49",
      "roleId": "role-49",
      "subDomain": "subdomain-49",
      "logo": "http://placehold.it/64x64",
      "name": "MediaDime",
      "longDescription": "Dictum et sollicitudin vel non orci. Justo eget proin posuere eget, posuere sodales iaculis i lacinia. Cursus vehicula lectus turpis.",
      "longDescriptionUrl": "mediadime.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-50/subdomain-50",
      "roleId": "role-50",
      "subDomain": "subdomain-50",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Proin ac ac sapien dui maecenas aliquam iaculis ultricies vulputate, natoque ante tempus morbi tristique leo. Lacus arcu mi sit.",
      "longDescriptionUrl": "lexiconlabs.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-51/subdomain-51",
      "roleId": "role-51",
      "subDomain": "subdomain-51",
      "logo": "http://placehold.it/64x64",
      "name": "Kancom",
      "longDescription": "Tortor in arcu erat lacinia nunc blandit diam vitae. Vel lectus maximus sagittis auctor ac. Est curabitur donec a lacus.",
      "longDescriptionUrl": "kancom.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-52/subdomain-52",
      "roleId": "role-52",
      "subDomain": "subdomain-52",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "Ex natoque fringilla scelerisque imperdiet, fringilla pharetra sapien sodales dolor. Mauris tempus imperdiet maximus iaculis dui, maecenas lacus felis posuere.",
      "longDescriptionUrl": "templatek.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-53/subdomain-53",
      "roleId": "role-53",
      "subDomain": "subdomain-53",
      "logo": "http://placehold.it/64x64",
      "name": "Polycore",
      "longDescription": "Sed eros nisi neque ipsum, lacinia ipsum natoque metus. Quis viverra tortor vel ligula vitae vehicula, ac velit consectetur ipsum.",
      "longDescriptionUrl": "polycore.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-54/subdomain-54",
      "roleId": "role-54",
      "subDomain": "subdomain-54",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Pulvinar lacinia sagittis massa amet imperdiet quisque massa fringilla lacinia risus, vestibulum augue blandit i eget orci, dictum erat ultrices.",
      "longDescriptionUrl": "lexiconlabs.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-55/subdomain-55",
      "roleId": "role-55",
      "subDomain": "subdomain-55",
      "logo": "http://placehold.it/64x64",
      "name": "CoreMax",
      "longDescription": "Ex erat euismod lacus aliquam, sollicitudin adipiscing massa laoreet imperdiet orci i vulputate, sit imperdiet leo vel tortor vitae faucibus.",
      "longDescriptionUrl": "coremax.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-56/subdomain-56",
      "roleId": "role-56",
      "subDomain": "subdomain-56",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Vestibulum tempus euismod enim augue eget pellentesque lorem ac est. Consequat cursus tempor magna curabitur purus ultricies mauris sed nisl.",
      "longDescriptionUrl": "westercom.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-57/subdomain-57",
      "roleId": "role-57",
      "subDomain": "subdomain-57",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Porttitor lectus dui sed dignissim vehicula tincidunt tempor, nisl lectus porttitor vehicula finibus. Dui lacinia erat pulvinar nisl in elementum.",
      "longDescriptionUrl": "connic.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-58/subdomain-58",
      "roleId": "role-58",
      "subDomain": "subdomain-58",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Lacus augue eros laoreet e arcu scelerisque aliquam accumsan lorem eu sapien arcu, accumsan porttitor elit placerat vel commodo ligula.",
      "longDescriptionUrl": "connic.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-59/subdomain-59",
      "roleId": "role-59",
      "subDomain": "subdomain-59",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Suscipit ornare vel ornare quis scelerisque. Sapien placerat in risus dui facilisis risus nunc. E porttitor rhoncus tempus morbi adipiscing.",
      "longDescriptionUrl": "openserv.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-60/subdomain-60",
      "roleId": "role-60",
      "subDomain": "subdomain-60",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Eu leo justo cras proin nam morbi, hendrerit nibh dui vel tortor a ex felis rhoncus, etiam rhoncus nulla dignissim.",
      "longDescriptionUrl": "sunopia.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-61/subdomain-61",
      "roleId": "role-61",
      "subDomain": "subdomain-61",
      "logo": "http://placehold.it/64x64",
      "name": "Tecomix",
      "longDescription": "Aliquam tristique scelerisque dui ut adipiscing quisque. In iaculis metus iaculis quis dolor. Mi elit hendrerit vulputate magna suscipit adipiscing.",
      "longDescriptionUrl": "tecomix.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-62/subdomain-62",
      "roleId": "role-62",
      "subDomain": "subdomain-62",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Aenean nisi sagittis nam lacus. Nisi quis tincidunt sodales imperdiet facilisis amet. Placerat eu risus hendrerit erat ultricies diam neque.",
      "longDescriptionUrl": "storex.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-63/subdomain-63",
      "roleId": "role-63",
      "subDomain": "subdomain-63",
      "logo": "http://placehold.it/64x64",
      "name": "Xenosys",
      "longDescription": "Maecenas orci eti dui amet, accumsan metus erat vehicula. Auctor morbi accumsan vel, metus sit e at orci nulla aenean.",
      "longDescriptionUrl": "xenosys.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-64/subdomain-64",
      "roleId": "role-64",
      "subDomain": "subdomain-64",
      "logo": "http://placehold.it/64x64",
      "name": "Amsquare",
      "longDescription": "Cras sit tempus nunc magna. Viverra enim morbi elit, posuere tempor ut lectus nisl curabitur dictum vestibulum. Sodales nunc sit.",
      "longDescriptionUrl": "amsquare.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-65/subdomain-65",
      "roleId": "role-65",
      "subDomain": "subdomain-65",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Tempus gravida felis enim blandit vel lobortis, mauris purus ante eti quis magna. Vulputate aliquam dui diam donec diam massa.",
      "longDescriptionUrl": "triosys.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-66/subdomain-66",
      "roleId": "role-66",
      "subDomain": "subdomain-66",
      "logo": "http://placehold.it/64x64",
      "name": "CoreMax",
      "longDescription": "Natoque lacus sagittis i e lorem. Tincidunt consequat in laoreet. Ut eti purus imperdiet lacinia. Nulla mattis purus pharetra maximus.",
      "longDescriptionUrl": "coremax.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-67/subdomain-67",
      "roleId": "role-67",
      "subDomain": "subdomain-67",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Nam maecenas curabitur lectus rhoncus placerat hendrerit, neque diam a euismod eu, rhoncus elit cursus viverra, risus erat laoreet lobortis.",
      "longDescriptionUrl": "storex.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-68/subdomain-68",
      "roleId": "role-68",
      "subDomain": "subdomain-68",
      "logo": "http://placehold.it/64x64",
      "name": "Baramax",
      "longDescription": "Nisl eti sapien tempus quisque. Amet velit pulvinar scelerisque amet non vitae vulputate iaculis. Sem pulvinar mattis aliquet non dignissim.",
      "longDescriptionUrl": "baramax.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-69/subdomain-69",
      "roleId": "role-69",
      "subDomain": "subdomain-69",
      "logo": "http://placehold.it/64x64",
      "name": "Bellgate",
      "longDescription": "Ut nam consequat tincidunt finibus. Lectus id turpis aenean et, sit viverra amet risus. Cursus vitae consequat felis pretium placerat.",
      "longDescriptionUrl": "bellgate.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-70/subdomain-70",
      "roleId": "role-70",
      "subDomain": "subdomain-70",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "Tortor aliquam viverra massa ac eget erat rhoncus, lobortis imperdiet est e. Est nisl sapien in felis mollis suscipit mattis.",
      "longDescriptionUrl": "conixco.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-71/subdomain-71",
      "roleId": "role-71",
      "subDomain": "subdomain-71",
      "logo": "http://placehold.it/64x64",
      "name": "ForeTrust",
      "longDescription": "Etiam augue gravida enim condimentum consectetur eu dolor. Sollicitudin cursus donec finibus maximus lectus pellentesque. Pharetra commodo erat i massa.",
      "longDescriptionUrl": "foretrust.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-72/subdomain-72",
      "roleId": "role-72",
      "subDomain": "subdomain-72",
      "logo": "http://placehold.it/64x64",
      "name": "Sealine",
      "longDescription": "Diam lacinia facilisis porttitor cras vitae rhoncus facilisis. Purus dictum mollis tempor ante pretium posuere ex scelerisque viverra justo etiam.",
      "longDescriptionUrl": "sealine.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-73/subdomain-73",
      "roleId": "role-73",
      "subDomain": "subdomain-73",
      "logo": "http://placehold.it/64x64",
      "name": "Keysoft",
      "longDescription": "Pulvinar aliquam ex natoque non blandit. Dictum diam finibus donec et eros tortor. Tincidunt neque ornare purus tincidunt adipiscing dignissim.",
      "longDescriptionUrl": "keysoft.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-74/subdomain-74",
      "roleId": "role-74",
      "subDomain": "subdomain-74",
      "logo": "http://placehold.it/64x64",
      "name": "TurboSystems",
      "longDescription": "Sollicitudin turpis ex aenean tristique, bibendum ligula arcu ultrices euismod lacinia. Tempor condimentum ultricies ultricies, aenean eros facilisis ultrices au.",
      "longDescriptionUrl": "turbosystems.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-75/subdomain-75",
      "roleId": "role-75",
      "subDomain": "subdomain-75",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Iaculis pulvinar blandit est metus. Cras commodo augue massa blandit diam e ultrices, natoque tempor risus porttitor iaculis i lacus.",
      "longDescriptionUrl": "infratouch.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-76/subdomain-76",
      "roleId": "role-76",
      "subDomain": "subdomain-76",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Proin erat mollis in sapien dignissim aliquet amet. Cras velit mauris tempus orci tincidunt. Auctor porttitor maximus aenean imperdiet ipsum.",
      "longDescriptionUrl": "thermolock.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-77/subdomain-77",
      "roleId": "role-77",
      "subDomain": "subdomain-77",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Massa suscipit sollicitudin vulputate vel felis dui. Ex gravida diam morbi lacus commodo massa faucibus nam aenean, mi condimentum pharetra.",
      "longDescriptionUrl": "unilogic.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-78/subdomain-78",
      "roleId": "role-78",
      "subDomain": "subdomain-78",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Ante mauris placerat pellentesque amet i dignissim. Lacinia lacus id iaculis tempor dignissim laoreet, purus gravida i pulvinar erat sodales.",
      "longDescriptionUrl": "fastfreight.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-79/subdomain-79",
      "roleId": "role-79",
      "subDomain": "subdomain-79",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Tortor turpis et arcu pellentesque, vel vitae in au enim sem. Amet fringilla dignissim pellentesque finibus maecenas velit bibendum neque.",
      "longDescriptionUrl": "infratouch.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-80/subdomain-80",
      "roleId": "role-80",
      "subDomain": "subdomain-80",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Nisi natoque tincidunt sem eu. Morbi eti lacinia facilisis lorem au maximus porttitor lorem eti lacus erat imperdiet elementum quisque.",
      "longDescriptionUrl": "solexis.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-81/subdomain-81",
      "roleId": "role-81",
      "subDomain": "subdomain-81",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Erat auctor rhoncus cursus curabitur, neque cursus finibus blandit ultrices aenean, ipsum condimentum scelerisque sed gravida pellentesque elementum sit amet.",
      "longDescriptionUrl": "hassifix.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-82/subdomain-82",
      "roleId": "role-82",
      "subDomain": "subdomain-82",
      "logo": "http://placehold.it/64x64",
      "name": "Forecore",
      "longDescription": "Orci ipsum vitae donec sodales mollis ultricies auctor pharetra aliquam sodales dictum ante faucibus erat. Aliquet iaculis maximus elit et.",
      "longDescriptionUrl": "forecore.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-83/subdomain-83",
      "roleId": "role-83",
      "subDomain": "subdomain-83",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Ornare non non erat dolor turpis. Nunc quisque dolor proin. Dictum aliquet proin velit sed mollis ligula et lectus lorem.",
      "longDescriptionUrl": "westercom.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-84/subdomain-84",
      "roleId": "role-84",
      "subDomain": "subdomain-84",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Lacus vulputate bibendum enim cras pharetra ultricies. Sollicitudin lacinia morbi in. Placerat suscipit tempor porttitor, tortor bibendum enim id natoque.",
      "longDescriptionUrl": "corptek.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-85/subdomain-85",
      "roleId": "role-85",
      "subDomain": "subdomain-85",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Nulla imperdiet pharetra vestibulum morbi donec. Scelerisque vel nisl maximus neque bibendum non curabitur euismod diam maecenas felis quisque tempor.",
      "longDescriptionUrl": "corptek.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-86/subdomain-86",
      "roleId": "role-86",
      "subDomain": "subdomain-86",
      "logo": "http://placehold.it/64x64",
      "name": "TrueXT",
      "longDescription": "Aliquam ultrices ornare nunc suscipit. Lacus sit justo pellentesque tincidunt, cursus dictum augue lacinia ante tempor et orci sit massa.",
      "longDescriptionUrl": "truext.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-87/subdomain-87",
      "roleId": "role-87",
      "subDomain": "subdomain-87",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Morbi nisl ante turpis a id, aliquam metus lacinia posuere eu. Lectus posuere justo aenean turpis, est lorem vestibulum lacinia.",
      "longDescriptionUrl": "terrasys.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-88/subdomain-88",
      "roleId": "role-88",
      "subDomain": "subdomain-88",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Purus laoreet bibendum ex purus nisl aenean etiam, hendrerit posuere ipsum euismod, pretium lorem eti natoque id dictum curabitur maecenas.",
      "longDescriptionUrl": "qualcore.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-89/subdomain-89",
      "roleId": "role-89",
      "subDomain": "subdomain-89",
      "logo": "http://placehold.it/64x64",
      "name": "VenStrategy",
      "longDescription": "Augue nibh natoque justo lorem ipsum. Euismod mauris curabitur pharetra mattis. Arcu metus orci tempor, donec ultrices lorem curabitur ac.",
      "longDescriptionUrl": "venstrategy.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-90/subdomain-90",
      "roleId": "role-90",
      "subDomain": "subdomain-90",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Eti diam fringilla tempor consectetur tempus viverra ante, eros curabitur ultricies nam, vitae quis i consectetur. Facilisis aliquet porttitor porttitor.",
      "longDescriptionUrl": "cryptonica.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-91/subdomain-91",
      "roleId": "role-91",
      "subDomain": "subdomain-91",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Auctor blandit arcu adipiscing ultricies, i pretium sodales lacinia, ex quisque diam posuere consectetur scelerisque maecenas. Cursus neque dignissim tincidunt.",
      "longDescriptionUrl": "westercom.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-92/subdomain-92",
      "roleId": "role-92",
      "subDomain": "subdomain-92",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Quisque dignissim mi ornare ipsum, cras proin imperdiet quisque hendrerit aliquam bibendum neque. Mauris at nisl non fringilla hendrerit dignissim.",
      "longDescriptionUrl": "corptek.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-93/subdomain-93",
      "roleId": "role-93",
      "subDomain": "subdomain-93",
      "logo": "http://placehold.it/64x64",
      "name": "Galcom",
      "longDescription": "Pharetra tortor eu lacinia tincidunt augue quis vitae, aliquet sodales i enim enim in in viverra. Nisi dignissim elementum ornare.",
      "longDescriptionUrl": "galcom.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-94/subdomain-94",
      "roleId": "role-94",
      "subDomain": "subdomain-94",
      "logo": "http://placehold.it/64x64",
      "name": "DynaAir",
      "longDescription": "Curabitur viverra elit quis neque lacinia tortor. Sodales nunc posuere natoque pharetra id. Condimentum pellentesque consectetur augue sagittis curabitur quisque.",
      "longDescriptionUrl": "dynaair.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-95/subdomain-95",
      "roleId": "role-95",
      "subDomain": "subdomain-95",
      "logo": "http://placehold.it/64x64",
      "name": "DuoServe",
      "longDescription": "Consequat enim nunc leo quis lacus erat orci ornare imperdiet, finibus tempor eti dui. Pharetra erat purus purus ipsum tristique.",
      "longDescriptionUrl": "duoserve.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-96/subdomain-96",
      "roleId": "role-96",
      "subDomain": "subdomain-96",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Nulla mattis blandit aliquam pulvinar faucibus scelerisque, sodales scelerisque nam vel auctor turpis mi proin sapien, massa laoreet arcu consectetur.",
      "longDescriptionUrl": "smartsystems.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-97/subdomain-97",
      "roleId": "role-97",
      "subDomain": "subdomain-97",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Faucibus in mi aenean lacus sit consectetur et. Ut nam adipiscing at elementum. Tincidunt imperdiet au mollis fringilla iaculis ex.",
      "longDescriptionUrl": "infratouch.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-98/subdomain-98",
      "roleId": "role-98",
      "subDomain": "subdomain-98",
      "logo": "http://placehold.it/64x64",
      "name": "Hivemind",
      "longDescription": "Curabitur dolor euismod tempor erat dui, consequat imperdiet nunc ipsum in enim, vestibulum posuere tempus ac mi dictum nam magna.",
      "longDescriptionUrl": "hivemind.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-99/subdomain-99",
      "roleId": "role-99",
      "subDomain": "subdomain-99",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Imperdiet purus euismod placerat orci e curabitur vulputate, bibendum consequat pretium ligula aliquet tortor, mollis aenean eget vehicula natoque faucibus.",
      "longDescriptionUrl": "skycenta.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-100/subdomain-100",
      "roleId": "role-100",
      "subDomain": "subdomain-100",
      "logo": "http://placehold.it/64x64",
      "name": "Sophis",
      "longDescription": "Natoque ultrices orci ut morbi, rhoncus sit leo nulla pellentesque, condimentum posuere dictum ultricies mauris eget lacus. Au consequat cursus.",
      "longDescriptionUrl": "sophis.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-101/subdomain-101",
      "roleId": "role-101",
      "subDomain": "subdomain-101",
      "logo": "http://placehold.it/64x64",
      "name": "TrueXT",
      "longDescription": "Mauris commodo adipiscing fringilla rhoncus vitae. Arcu ut nibh ultrices sapien condimentum, pharetra euismod i dolor vehicula sagittis dolor porttitor.",
      "longDescriptionUrl": "truext.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-102/subdomain-102",
      "roleId": "role-102",
      "subDomain": "subdomain-102",
      "logo": "http://placehold.it/64x64",
      "name": "Amsquare",
      "longDescription": "Aliquam scelerisque hendrerit hendrerit scelerisque. Massa diam sit laoreet sapien. Metus vitae vehicula suscipit leo. Vitae sollicitudin cursus maximus vel.",
      "longDescriptionUrl": "amsquare.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-103/subdomain-103",
      "roleId": "role-103",
      "subDomain": "subdomain-103",
      "logo": "http://placehold.it/64x64",
      "name": "Galcom",
      "longDescription": "Ornare maximus eros leo sed, pretium nulla rhoncus finibus viverra, sollicitudin pellentesque metus auctor bibendum magna scelerisque. Etiam auctor lorem.",
      "longDescriptionUrl": "galcom.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-104/subdomain-104",
      "roleId": "role-104",
      "subDomain": "subdomain-104",
      "logo": "http://placehold.it/64x64",
      "name": "QuadNet",
      "longDescription": "Cursus consequat lobortis blandit placerat consequat enim cursus ipsum euismod, e facilisis dui vitae eget metus sed pulvinar augue mattis.",
      "longDescriptionUrl": "quadnet.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-105/subdomain-105",
      "roleId": "role-105",
      "subDomain": "subdomain-105",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Sapien erat lectus aenean mattis. Felis tempus massa i lectus massa facilisis. Dolor quis mattis tempor pharetra placerat in sodales.",
      "longDescriptionUrl": "fortyfour.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-106/subdomain-106",
      "roleId": "role-106",
      "subDomain": "subdomain-106",
      "logo": "http://placehold.it/64x64",
      "name": "Dynalab",
      "longDescription": "Nibh pulvinar sit nisl etiam i. Ante sollicitudin suscipit faucibus pulvinar. Dolor dictum gravida neque ac eget suscipit et dolor.",
      "longDescriptionUrl": "dynalab.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-107/subdomain-107",
      "roleId": "role-107",
      "subDomain": "subdomain-107",
      "logo": "http://placehold.it/64x64",
      "name": "Citisys",
      "longDescription": "Scelerisque fringilla placerat lectus euismod lobortis, justo purus sit consectetur viverra ultricies hendrerit. Iaculis arcu sed morbi, iaculis scelerisque id.",
      "longDescriptionUrl": "citisys.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-108/subdomain-108",
      "roleId": "role-108",
      "subDomain": "subdomain-108",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Leo ipsum turpis tristique tortor nisi pharetra, consectetur et sagittis elementum maecenas diam. Pellentesque vestibulum auctor magna. Arcu iaculis mollis.",
      "longDescriptionUrl": "triosys.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-109/subdomain-109",
      "roleId": "role-109",
      "subDomain": "subdomain-109",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Lectus facilisis bibendum enim euismod pretium pretium cursus tristique nibh condimentum. Blandit pharetra risus facilisis, erat accumsan laoreet tincidunt cras.",
      "longDescriptionUrl": "fastfreight.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-110/subdomain-110",
      "roleId": "role-110",
      "subDomain": "subdomain-110",
      "logo": "http://placehold.it/64x64",
      "name": "Haltheon",
      "longDescription": "Metus porttitor amet quis id, nisl magna dolor porttitor. Blandit ultrices maecenas pellentesque, arcu fringilla sollicitudin tempor. Donec lacinia lacinia.",
      "longDescriptionUrl": "haltheon.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-111/subdomain-111",
      "roleId": "role-111",
      "subDomain": "subdomain-111",
      "logo": "http://placehold.it/64x64",
      "name": "Protheon",
      "longDescription": "Accumsan vulputate posuere mauris elit sagittis, nulla mauris nisl augue. Natoque commodo sapien ex lectus iaculis. Ut nulla vehicula nibh.",
      "longDescriptionUrl": "protheon.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-112/subdomain-112",
      "roleId": "role-112",
      "subDomain": "subdomain-112",
      "logo": "http://placehold.it/64x64",
      "name": "Freecast",
      "longDescription": "Quis sodales iaculis maximus diam accumsan. Dui iaculis sollicitudin imperdiet finibus. Elementum lacinia tempus orci, natoque ultricies maximus vestibulum curabitur.",
      "longDescriptionUrl": "freecast.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-113/subdomain-113",
      "roleId": "role-113",
      "subDomain": "subdomain-113",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Cursus est ut tempus pulvinar pulvinar aliquet lacinia. Ex lacinia a neque sagittis. Hendrerit mattis felis aliquet massa suscipit mollis.",
      "longDescriptionUrl": "unilogic.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-114/subdomain-114",
      "roleId": "role-114",
      "subDomain": "subdomain-114",
      "logo": "http://placehold.it/64x64",
      "name": "Cryosoft",
      "longDescription": "Maximus lacinia eu magna fringilla morbi ante purus ultrices mollis eget. Eu et aenean commodo. Sagittis ultricies e leo viverra.",
      "longDescriptionUrl": "cryosoft.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-115/subdomain-115",
      "roleId": "role-115",
      "subDomain": "subdomain-115",
      "logo": "http://placehold.it/64x64",
      "name": "Amsquare",
      "longDescription": "Consectetur arcu in in ante, finibus pellentesque est dictum non risus, au neque faucibus placerat aenean cursus ut in magna.",
      "longDescriptionUrl": "amsquare.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-116/subdomain-116",
      "roleId": "role-116",
      "subDomain": "subdomain-116",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Consectetur nisi suscipit ac vitae blandit mauris id ipsum maximus ante in elit consectetur aliquam. E lacinia scelerisque sapien a.",
      "longDescriptionUrl": "storex.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-117/subdomain-117",
      "roleId": "role-117",
      "subDomain": "subdomain-117",
      "logo": "http://placehold.it/64x64",
      "name": "Iridimax",
      "longDescription": "Placerat nisi ultricies sagittis est nulla. Sodales imperdiet vitae lacus nunc rhoncus e massa. Porttitor dolor ante neque ante finibus.",
      "longDescriptionUrl": "iridimax.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-118/subdomain-118",
      "roleId": "role-118",
      "subDomain": "subdomain-118",
      "logo": "http://placehold.it/64x64",
      "name": "Anaplex",
      "longDescription": "Aliquam et mattis vehicula sagittis proin. Felis hendrerit pellentesque tincidunt faucibus au. Euismod sem metus consequat. Ut hendrerit auctor tempor.",
      "longDescriptionUrl": "anaplex.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-119/subdomain-119",
      "roleId": "role-119",
      "subDomain": "subdomain-119",
      "logo": "http://placehold.it/64x64",
      "name": "CoreMax",
      "longDescription": "Lobortis natoque dictum dui lacinia. Vel dignissim est vestibulum ex nulla. Fringilla eget ultrices enim maximus, nibh ut placerat at.",
      "longDescriptionUrl": "coremax.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-120/subdomain-120",
      "roleId": "role-120",
      "subDomain": "subdomain-120",
      "logo": "http://placehold.it/64x64",
      "name": "Ulogica",
      "longDescription": "Mauris ut ultricies turpis maximus scelerisque amet. Sapien natoque ultrices elit. Ante vel curabitur ex, gravida erat velit laoreet sed.",
      "longDescriptionUrl": "ulogica.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-121/subdomain-121",
      "roleId": "role-121",
      "subDomain": "subdomain-121",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Laoreet maecenas risus nulla at augue, ut fringilla elementum dictum consectetur arcu elementum enim magna bibendum, viverra et lectus accumsan.",
      "longDescriptionUrl": "smartsystems.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-122/subdomain-122",
      "roleId": "role-122",
      "subDomain": "subdomain-122",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Pretium ultrices nulla enim est. At consequat maximus tempus nunc nam. Est leo natoque faucibus iaculis porttitor. Ultricies sit natoque.",
      "longDescriptionUrl": "storex.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-123/subdomain-123",
      "roleId": "role-123",
      "subDomain": "subdomain-123",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Eros au sem augue justo viverra cras morbi in. Euismod turpis sem commodo. Pulvinar elit turpis aenean scelerisque et eros.",
      "longDescriptionUrl": "fastfreight.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-124/subdomain-124",
      "roleId": "role-124",
      "subDomain": "subdomain-124",
      "logo": "http://placehold.it/64x64",
      "name": "Forecore",
      "longDescription": "Ligula tortor ac nisl sagittis est eros enim natoque porttitor mattis. Sagittis dictum leo i rhoncus etiam accumsan eget euismod.",
      "longDescriptionUrl": "forecore.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-125/subdomain-125",
      "roleId": "role-125",
      "subDomain": "subdomain-125",
      "logo": "http://placehold.it/64x64",
      "name": "Terralabs",
      "longDescription": "Eu ex commodo turpis et quis condimentum i, vulputate tincidunt finibus erat quis sodales. Sed natoque arcu blandit metus arcu.",
      "longDescriptionUrl": "terralabs.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-126/subdomain-126",
      "roleId": "role-126",
      "subDomain": "subdomain-126",
      "logo": "http://placehold.it/64x64",
      "name": "DynaAir",
      "longDescription": "Facilisis velit nisl aenean in lorem ultricies proin proin ligula laoreet nam finibus dignissim mollis. Dui rhoncus sapien massa tristique.",
      "longDescriptionUrl": "dynaair.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-127/subdomain-127",
      "roleId": "role-127",
      "subDomain": "subdomain-127",
      "logo": "http://placehold.it/64x64",
      "name": "Sealine",
      "longDescription": "Nibh sit ligula hendrerit condimentum dictum ac neque fringilla posuere nulla leo. Eti in quis dolor et dictum auctor eros.",
      "longDescriptionUrl": "sealine.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-128/subdomain-128",
      "roleId": "role-128",
      "subDomain": "subdomain-128",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Amet nulla au risus et. Gravida fringilla porttitor consectetur augue consequat amet. Proin lobortis pulvinar amet quisque etiam sit felis.",
      "longDescriptionUrl": "triosys.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-129/subdomain-129",
      "roleId": "role-129",
      "subDomain": "subdomain-129",
      "logo": "http://placehold.it/64x64",
      "name": "StrategyLine",
      "longDescription": "Justo auctor cras fringilla vehicula dui ultricies, maximus amet risus cras. Placerat metus ac ex. Est i finibus vestibulum id.",
      "longDescriptionUrl": "strategyline.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-130/subdomain-130",
      "roleId": "role-130",
      "subDomain": "subdomain-130",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Mollis metus donec aliquam nunc lacinia. Diam eget imperdiet massa cras faucibus proin, sapien maximus fringilla condimentum cursus arcu in.",
      "longDescriptionUrl": "infratouch.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-131/subdomain-131",
      "roleId": "role-131",
      "subDomain": "subdomain-131",
      "logo": "http://placehold.it/64x64",
      "name": "QuadNet",
      "longDescription": "Bibendum vulputate gravida imperdiet proin natoque ac neque sed. Suscipit ligula hendrerit tempus ipsum, i au blandit pretium diam ultricies.",
      "longDescriptionUrl": "quadnet.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-132/subdomain-132",
      "roleId": "role-132",
      "subDomain": "subdomain-132",
      "logo": "http://placehold.it/64x64",
      "name": "Superwire",
      "longDescription": "Sed pulvinar porttitor eu sit euismod orci. Lorem dui neque au dictum, nunc sapien rhoncus justo elit. Mattis quisque tristique.",
      "longDescriptionUrl": "superwire.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-133/subdomain-133",
      "roleId": "role-133",
      "subDomain": "subdomain-133",
      "logo": "http://placehold.it/64x64",
      "name": "Hypervision",
      "longDescription": "Amet purus fringilla aliquet pretium eu maecenas. Massa tincidunt aliquet natoque accumsan. Nam cursus nam est blandit, ac iaculis vehicula.",
      "longDescriptionUrl": "hypervision.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-134/subdomain-134",
      "roleId": "role-134",
      "subDomain": "subdomain-134",
      "logo": "http://placehold.it/64x64",
      "name": "MultiServ",
      "longDescription": "Elit purus metus maecenas posuere id tristique. Tempus etiam turpis purus in augue donec finibus mauris au ipsum laoreet cursus.",
      "longDescriptionUrl": "multiserv.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-135/subdomain-135",
      "roleId": "role-135",
      "subDomain": "subdomain-135",
      "logo": "http://placehold.it/64x64",
      "name": "Dalserve",
      "longDescription": "Faucibus maecenas ut justo leo lacinia dictum in. Auctor e vitae aliquet, euismod aenean aenean lorem. Enim magna ex enim.",
      "longDescriptionUrl": "dalserve.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-136/subdomain-136",
      "roleId": "role-136",
      "subDomain": "subdomain-136",
      "logo": "http://placehold.it/64x64",
      "name": "Viewtopia",
      "longDescription": "Curabitur nisl quis in pellentesque tincidunt dictum tristique metus hendrerit, sodales ultricies laoreet elementum, aliquam quis non pellentesque est commodo.",
      "longDescriptionUrl": "viewtopia.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-137/subdomain-137",
      "roleId": "role-137",
      "subDomain": "subdomain-137",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Etiam elit id consectetur velit magna maximus mauris curabitur eget vulputate commodo, est commodo pretium etiam sapien cras scelerisque elementum.",
      "longDescriptionUrl": "westercom.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-138/subdomain-138",
      "roleId": "role-138",
      "subDomain": "subdomain-138",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Cras bibendum elementum lacinia commodo leo mattis est aenean ut nam. Sit i lacinia vehicula, justo felis bibendum augue sollicitudin.",
      "longDescriptionUrl": "fastfreight.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-139/subdomain-139",
      "roleId": "role-139",
      "subDomain": "subdomain-139",
      "logo": "http://placehold.it/64x64",
      "name": "Playtech",
      "longDescription": "Quis scelerisque nulla tempor eti. Erat massa sem aliquet. I laoreet arcu euismod, lacinia id eti enim, suscipit ornare cursus.",
      "longDescriptionUrl": "playtech.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-140/subdomain-140",
      "roleId": "role-140",
      "subDomain": "subdomain-140",
      "logo": "http://placehold.it/64x64",
      "name": "Creatonix",
      "longDescription": "Placerat turpis accumsan ultricies turpis. Vitae lacus justo tempus augue. Sodales tristique magna nisi faucibus. Morbi nisi vel lorem ut.",
      "longDescriptionUrl": "creatonix.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-141/subdomain-141",
      "roleId": "role-141",
      "subDomain": "subdomain-141",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Finibus velit adipiscing laoreet ornare, laoreet curabitur tincidunt elit quisque tortor, aliquet accumsan diam donec imperdiet tempus aliquam quisque natoque.",
      "longDescriptionUrl": "cryptonica.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-142/subdomain-142",
      "roleId": "role-142",
      "subDomain": "subdomain-142",
      "logo": "http://placehold.it/64x64",
      "name": "Cryosoft",
      "longDescription": "Mollis euismod condimentum justo faucibus sit. Sapien tincidunt sit mollis mollis eget faucibus. Ligula nam accumsan consequat lobortis bibendum quisque.",
      "longDescriptionUrl": "cryosoft.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-143/subdomain-143",
      "roleId": "role-143",
      "subDomain": "subdomain-143",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Magna adipiscing augue placerat placerat, etiam ligula nisl ornare natoque felis imperdiet velit e, vulputate porttitor ac cras dictum faucibus.",
      "longDescriptionUrl": "qualcore.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-144/subdomain-144",
      "roleId": "role-144",
      "subDomain": "subdomain-144",
      "logo": "http://placehold.it/64x64",
      "name": "MultiLingua",
      "longDescription": "Quisque ultrices lacinia aliquam elit tempor imperdiet tortor. Vestibulum sollicitudin faucibus condimentum. Orci cras maecenas donec ornare porttitor turpis risus.",
      "longDescriptionUrl": "multilingua.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-145/subdomain-145",
      "roleId": "role-145",
      "subDomain": "subdomain-145",
      "logo": "http://placehold.it/64x64",
      "name": "CoreXTS",
      "longDescription": "Viverra mauris mauris felis eros ultrices tempor sapien est ipsum, pharetra at fringilla dignissim rhoncus sollicitudin vehicula scelerisque curabitur laoreet.",
      "longDescriptionUrl": "corexts.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-146/subdomain-146",
      "roleId": "role-146",
      "subDomain": "subdomain-146",
      "logo": "http://placehold.it/64x64",
      "name": "Ulogica",
      "longDescription": "Bibendum dignissim consequat faucibus lacinia enim rhoncus, dui mattis pretium arcu enim tempor placerat facilisis placerat eros sit in elit.",
      "longDescriptionUrl": "ulogica.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-147/subdomain-147",
      "roleId": "role-147",
      "subDomain": "subdomain-147",
      "logo": "http://placehold.it/64x64",
      "name": "Thermatek",
      "longDescription": "Aliquet tortor consectetur enim ornare in ultrices. Ac ante eros quis sodales, ut pulvinar mattis au imperdiet e fringilla amet.",
      "longDescriptionUrl": "thermatek.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-148/subdomain-148",
      "roleId": "role-148",
      "subDomain": "subdomain-148",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Sagittis sagittis a et tempus mollis donec tincidunt posuere aliquet justo augue morbi morbi sodales nulla non. Porttitor vestibulum proin.",
      "longDescriptionUrl": "fortyfour.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-149/subdomain-149",
      "roleId": "role-149",
      "subDomain": "subdomain-149",
      "logo": "http://placehold.it/64x64",
      "name": "DynaAir",
      "longDescription": "Aenean vitae tortor condimentum a pretium pulvinar. Eget adipiscing felis ac, condimentum orci id nunc auctor condimentum. Nunc finibus e.",
      "longDescriptionUrl": "dynaair.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-150/subdomain-150",
      "roleId": "role-150",
      "subDomain": "subdomain-150",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Etiam magna augue neque i eros, eti aenean tristique proin euismod. Suscipit tortor proin velit posuere aliquam sollicitudin dui nulla.",
      "longDescriptionUrl": "zatheon.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-151/subdomain-151",
      "roleId": "role-151",
      "subDomain": "subdomain-151",
      "logo": "http://placehold.it/64x64",
      "name": "Hypervision",
      "longDescription": "Aliquet ipsum amet leo sit massa. Vehicula viverra lacus lorem. Iaculis sollicitudin facilisis tincidunt dolor. Bibendum mauris a vulputate fringilla.",
      "longDescriptionUrl": "hypervision.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-152/subdomain-152",
      "roleId": "role-152",
      "subDomain": "subdomain-152",
      "logo": "http://placehold.it/64x64",
      "name": "NitroSystems",
      "longDescription": "Elit dictum curabitur porttitor sem vel. Dignissim suscipit commodo sed sed quis quis non maecenas cursus. Magna natoque dignissim ut.",
      "longDescriptionUrl": "nitrosystems.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-153/subdomain-153",
      "roleId": "role-153",
      "subDomain": "subdomain-153",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "Vitae auctor scelerisque tristique risus au vestibulum, iaculis ligula commodo eros massa augue lorem. Rhoncus mi tempus bibendum risus risus.",
      "longDescriptionUrl": "opticast.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-154/subdomain-154",
      "roleId": "role-154",
      "subDomain": "subdomain-154",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Facilisis neque in pretium felis pellentesque. Cras consectetur laoreet mi. Consequat tempus laoreet cras placerat. Pretium vulputate pharetra hendrerit tincidunt.",
      "longDescriptionUrl": "helixicon.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-155/subdomain-155",
      "roleId": "role-155",
      "subDomain": "subdomain-155",
      "logo": "http://placehold.it/64x64",
      "name": "GrafixMedia",
      "longDescription": "Dolor vitae auctor arcu faucibus, porttitor facilisis consequat quis ultricies, dictum nulla posuere pretium. Bibendum risus tortor iaculis nulla elit.",
      "longDescriptionUrl": "grafixmedia.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-156/subdomain-156",
      "roleId": "role-156",
      "subDomain": "subdomain-156",
      "logo": "http://placehold.it/64x64",
      "name": "Logico",
      "longDescription": "Mollis et scelerisque nisl nisl, pharetra iaculis eu nunc risus euismod eros, est sapien dolor magna enim tristique a sapien.",
      "longDescriptionUrl": "logico.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-157/subdomain-157",
      "roleId": "role-157",
      "subDomain": "subdomain-157",
      "logo": "http://placehold.it/64x64",
      "name": "Creatonix",
      "longDescription": "Nisl maximus id arcu eros nibh quis lobortis facilisis, rhoncus vehicula dignissim massa blandit elementum consectetur, ultrices hendrerit ultrices vel.",
      "longDescriptionUrl": "creatonix.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-158/subdomain-158",
      "roleId": "role-158",
      "subDomain": "subdomain-158",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Ut finibus donec nunc quisque sed ultrices at, euismod aliquet justo euismod. Imperdiet curabitur blandit adipiscing pulvinar ultricies felis hendrerit.",
      "longDescriptionUrl": "zatheon.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-159/subdomain-159",
      "roleId": "role-159",
      "subDomain": "subdomain-159",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "Morbi lectus eros e sagittis, vestibulum accumsan vel purus natoque imperdiet, ornare lorem pharetra commodo. Enim leo purus i e.",
      "longDescriptionUrl": "conixco.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-160/subdomain-160",
      "roleId": "role-160",
      "subDomain": "subdomain-160",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Risus sagittis porttitor euismod aenean justo orci nunc lectus velit nulla condimentum, vitae et auctor tortor. Felis e finibus nam.",
      "longDescriptionUrl": "sunopia.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-161/subdomain-161",
      "roleId": "role-161",
      "subDomain": "subdomain-161",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Sodales mauris consequat mi dui posuere mattis. Viverra eti et ligula laoreet. Ut scelerisque blandit iaculis, natoque pulvinar lobortis ante.",
      "longDescriptionUrl": "storex.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-162/subdomain-162",
      "roleId": "role-162",
      "subDomain": "subdomain-162",
      "logo": "http://placehold.it/64x64",
      "name": "Haltheon",
      "longDescription": "Laoreet sit aliquet vitae quisque. Euismod enim facilisis posuere eros. Eti proin leo facilisis. Ac cras tempus facilisis tortor etiam.",
      "longDescriptionUrl": "haltheon.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-163/subdomain-163",
      "roleId": "role-163",
      "subDomain": "subdomain-163",
      "logo": "http://placehold.it/64x64",
      "name": "FastMart",
      "longDescription": "Sagittis pharetra sit quisque hendrerit. Tincidunt hendrerit quis sed euismod suscipit et cursus laoreet magna leo, aliquet natoque vulputate posuere.",
      "longDescriptionUrl": "fastmart.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-164/subdomain-164",
      "roleId": "role-164",
      "subDomain": "subdomain-164",
      "logo": "http://placehold.it/64x64",
      "name": "Bellgate",
      "longDescription": "Lacinia facilisis vestibulum e sapien. Cras tristique purus lacus tortor laoreet e ac, erat ac euismod orci. Neque vulputate vitae.",
      "longDescriptionUrl": "bellgate.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-165/subdomain-165",
      "roleId": "role-165",
      "subDomain": "subdomain-165",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Consequat quis curabitur lacus quis pellentesque. Fringilla amet donec vehicula aliquet, scelerisque velit gravida fringilla nibh vel aliquet mi aenean.",
      "longDescriptionUrl": "fastfreight.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-166/subdomain-166",
      "roleId": "role-166",
      "subDomain": "subdomain-166",
      "logo": "http://placehold.it/64x64",
      "name": "MultiServ",
      "longDescription": "Cursus nunc facilisis auctor placerat risus ante ac augue sagittis neque. Sodales aenean non maximus. Nibh consequat turpis condimentum orci.",
      "longDescriptionUrl": "multiserv.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-167/subdomain-167",
      "roleId": "role-167",
      "subDomain": "subdomain-167",
      "logo": "http://placehold.it/64x64",
      "name": "Keycast",
      "longDescription": "Iaculis consectetur lacus at adipiscing finibus au facilisis risus eti sapien eget, fringilla cras non pharetra tincidunt eti purus nisl.",
      "longDescriptionUrl": "keycast.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-168/subdomain-168",
      "roleId": "role-168",
      "subDomain": "subdomain-168",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Magna bibendum leo posuere maecenas etiam, velit elementum adipiscing tempor quisque risus mattis. Donec lacinia vulputate auctor tempus massa tristique.",
      "longDescriptionUrl": "sunopia.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-169/subdomain-169",
      "roleId": "role-169",
      "subDomain": "subdomain-169",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Ligula dui mauris dui aliquam eu vulputate erat, nam pellentesque etiam ut donec dolor nisi orci gravida turpis sodales finibus.",
      "longDescriptionUrl": "celmax.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-170/subdomain-170",
      "roleId": "role-170",
      "subDomain": "subdomain-170",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Fringilla pellentesque felis in non iaculis at massa natoque commodo. Velit id pretium placerat rhoncus etiam cursus placerat aliquet condimentum.",
      "longDescriptionUrl": "skycenta.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-171/subdomain-171",
      "roleId": "role-171",
      "subDomain": "subdomain-171",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Porttitor sapien augue tristique aliquet. Mauris nam neque quis. Leo iaculis auctor sollicitudin eu ante ultricies facilisis vestibulum nulla blandit.",
      "longDescriptionUrl": "qualcore.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-172/subdomain-172",
      "roleId": "role-172",
      "subDomain": "subdomain-172",
      "logo": "http://placehold.it/64x64",
      "name": "Pancast",
      "longDescription": "Ac ultricies sem finibus sodales ipsum eros au velit massa, maximus risus diam natoque. Au tempor justo eti vehicula tristique.",
      "longDescriptionUrl": "pancast.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-173/subdomain-173",
      "roleId": "role-173",
      "subDomain": "subdomain-173",
      "logo": "http://placehold.it/64x64",
      "name": "Infracom",
      "longDescription": "Eti in vestibulum lacinia sodales. Lacus elementum amet adipiscing condimentum arcu commodo. Proin nisi dui condimentum placerat ultrices sapien tincidunt.",
      "longDescriptionUrl": "infracom.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-174/subdomain-174",
      "roleId": "role-174",
      "subDomain": "subdomain-174",
      "logo": "http://placehold.it/64x64",
      "name": "Cryosoft",
      "longDescription": "Accumsan facilisis lacinia dui au, leo lorem ornare nibh ultrices. Mauris auctor pulvinar leo tempus. Proin risus id non sem.",
      "longDescriptionUrl": "cryosoft.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-175/subdomain-175",
      "roleId": "role-175",
      "subDomain": "subdomain-175",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Etiam id gravida pulvinar scelerisque mauris. Enim natoque pharetra vulputate. Aliquet bibendum aliquet est, justo viverra nunc lacinia leo tempus.",
      "longDescriptionUrl": "helixicon.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-176/subdomain-176",
      "roleId": "role-176",
      "subDomain": "subdomain-176",
      "logo": "http://placehold.it/64x64",
      "name": "Keysoft",
      "longDescription": "Id diam eget viverra mauris est pharetra maecenas purus pulvinar consequat, dignissim placerat sapien neque nulla. Iaculis nibh quis aliquam.",
      "longDescriptionUrl": "keysoft.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-177/subdomain-177",
      "roleId": "role-177",
      "subDomain": "subdomain-177",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Auctor arcu id eti imperdiet. Sed gravida mauris nisl, non vehicula facilisis sollicitudin diam ut, curabitur posuere mattis pellentesque aliquam.",
      "longDescriptionUrl": "eluxa.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-178/subdomain-178",
      "roleId": "role-178",
      "subDomain": "subdomain-178",
      "logo": "http://placehold.it/64x64",
      "name": "Freecast",
      "longDescription": "Accumsan nibh viverra a id tempus, lacinia lobortis rhoncus nibh. Est eti non in. Pretium i pretium elementum blandit massa.",
      "longDescriptionUrl": "freecast.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-179/subdomain-179",
      "roleId": "role-179",
      "subDomain": "subdomain-179",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "At tincidunt mi eu adipiscing est. Erat finibus maecenas ornare, ornare finibus ex elit arcu. Vehicula nibh sollicitudin tristique i.",
      "longDescriptionUrl": "templatek.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-180/subdomain-180",
      "roleId": "role-180",
      "subDomain": "subdomain-180",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Posuere viverra blandit suscipit velit risus consectetur, eti laoreet diam pulvinar, id ipsum ut a metus velit. E ut lacinia.",
      "longDescriptionUrl": "celmax.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-181/subdomain-181",
      "roleId": "role-181",
      "subDomain": "subdomain-181",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Elit eros id leo nisl, ultrices hendrerit nunc sagittis etiam facilisis, a lectus au ut pellentesque ornare viverra gravida lacinia.",
      "longDescriptionUrl": "fastfreight.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-182/subdomain-182",
      "roleId": "role-182",
      "subDomain": "subdomain-182",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Proin augue tortor viverra lectus dignissim tristique, condimentum dolor placerat erat, et donec est ex. Vestibulum eget mattis nunc scelerisque.",
      "longDescriptionUrl": "terrasys.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-183/subdomain-183",
      "roleId": "role-183",
      "subDomain": "subdomain-183",
      "logo": "http://placehold.it/64x64",
      "name": "Optiplex",
      "longDescription": "At pellentesque gravida commodo dignissim, elementum elementum amet pharetra vulputate. Nisl pellentesque massa consequat, ex mauris lacus sagittis lacinia accumsan.",
      "longDescriptionUrl": "optiplex.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-184/subdomain-184",
      "roleId": "role-184",
      "subDomain": "subdomain-184",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Purus condimentum risus hendrerit sem sagittis eu. Ultricies placerat faucibus imperdiet ex elit sem lacinia dui. Consectetur viverra tortor risus.",
      "longDescriptionUrl": "qualcore.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-185/subdomain-185",
      "roleId": "role-185",
      "subDomain": "subdomain-185",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Bibendum consequat dignissim leo aliquam. Donec sollicitudin elementum velit condimentum. Felis dui nibh lobortis mollis, diam fringilla aenean dignissim nisl.",
      "longDescriptionUrl": "solexis.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-186/subdomain-186",
      "roleId": "role-186",
      "subDomain": "subdomain-186",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Erat vitae blandit tortor lacinia. Nisl nibh lacinia lobortis euismod lectus magna. Lacinia erat risus imperdiet, porttitor elit at pulvinar.",
      "longDescriptionUrl": "terrasys.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-187/subdomain-187",
      "roleId": "role-187",
      "subDomain": "subdomain-187",
      "logo": "http://placehold.it/64x64",
      "name": "Haltheon",
      "longDescription": "Vehicula neque purus condimentum tristique ligula proin risus. Orci eget mollis orci bibendum. Pharetra sapien porttitor mollis, finibus lacinia laoreet.",
      "longDescriptionUrl": "haltheon.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-188/subdomain-188",
      "roleId": "role-188",
      "subDomain": "subdomain-188",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Vehicula sagittis diam aliquet vel cursus. Dictum lobortis rhoncus quisque suscipit quisque consequat. Orci sem nunc consectetur maximus sagittis fringilla.",
      "longDescriptionUrl": "hassifix.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-189/subdomain-189",
      "roleId": "role-189",
      "subDomain": "subdomain-189",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Placerat lectus dignissim commodo eu lobortis accumsan ornare. Lacinia leo aliquam risus, nam amet felis mi faucibus ex fringilla ac.",
      "longDescriptionUrl": "unilogic.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-190/subdomain-190",
      "roleId": "role-190",
      "subDomain": "subdomain-190",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Neque vulputate ornare nisl proin in e suscipit maximus iaculis, turpis lacus a dictum amet elementum consectetur sem maximus blandit.",
      "longDescriptionUrl": "westercom.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-191/subdomain-191",
      "roleId": "role-191",
      "subDomain": "subdomain-191",
      "logo": "http://placehold.it/64x64",
      "name": "Bellgate",
      "longDescription": "Placerat ipsum nisi euismod porttitor natoque ultrices. Quisque scelerisque nisl porttitor sit. Laoreet porttitor tempor hendrerit, elementum magna euismod ligula.",
      "longDescriptionUrl": "bellgate.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-192/subdomain-192",
      "roleId": "role-192",
      "subDomain": "subdomain-192",
      "logo": "http://placehold.it/64x64",
      "name": "Anaplex",
      "longDescription": "Gravida lacus eu dignissim felis. Ante sem pulvinar sit, finibus sit vehicula mi. Proin mauris ac vitae. Arcu natoque euismod.",
      "longDescriptionUrl": "anaplex.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-193/subdomain-193",
      "roleId": "role-193",
      "subDomain": "subdomain-193",
      "logo": "http://placehold.it/64x64",
      "name": "Superwire",
      "longDescription": "Eti consectetur arcu placerat blandit. Mollis adipiscing vulputate pellentesque vitae purus adipiscing. Ante at eget sagittis et e elementum hendrerit.",
      "longDescriptionUrl": "superwire.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-194/subdomain-194",
      "roleId": "role-194",
      "subDomain": "subdomain-194",
      "logo": "http://placehold.it/64x64",
      "name": "Sealine",
      "longDescription": "Risus lectus iaculis euismod lacinia morbi. Accumsan id fringilla neque tempus sagittis finibus. Justo lacinia sit cras maecenas aenean sagittis.",
      "longDescriptionUrl": "sealine.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-195/subdomain-195",
      "roleId": "role-195",
      "subDomain": "subdomain-195",
      "logo": "http://placehold.it/64x64",
      "name": "Keycast",
      "longDescription": "Gravida dui condimentum aenean metus, elit quis laoreet commodo tincidunt risus, hendrerit sed sed ultrices, neque ante arcu erat neque.",
      "longDescriptionUrl": "keycast.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-196/subdomain-196",
      "roleId": "role-196",
      "subDomain": "subdomain-196",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "Cras porttitor nisi erat leo ultrices, neque etiam lobortis e. Ornare sagittis diam amet laoreet pulvinar proin felis scelerisque proin.",
      "longDescriptionUrl": "templatek.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-197/subdomain-197",
      "roleId": "role-197",
      "subDomain": "subdomain-197",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Pharetra posuere quis tristique maximus non fringilla finibus dolor cras tristique. Mattis auctor in imperdiet placerat dictum amet finibus quis.",
      "longDescriptionUrl": "infratouch.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-198/subdomain-198",
      "roleId": "role-198",
      "subDomain": "subdomain-198",
      "logo": "http://placehold.it/64x64",
      "name": "NitroSystems",
      "longDescription": "Etiam commodo aliquam purus mi. Curabitur iaculis consequat commodo ultricies. Ultricies dignissim ligula pharetra dui mollis, ut ultrices vehicula nam.",
      "longDescriptionUrl": "nitrosystems.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-199/subdomain-199",
      "roleId": "role-199",
      "subDomain": "subdomain-199",
      "logo": "http://placehold.it/64x64",
      "name": "Thermatek",
      "longDescription": "Sed accumsan eu leo mattis turpis. Ante sodales id pellentesque augue placerat porttitor tortor e porttitor metus aenean amet dictum.",
      "longDescriptionUrl": "thermatek.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-200/subdomain-200",
      "roleId": "role-200",
      "subDomain": "subdomain-200",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "Curabitur accumsan imperdiet pharetra nam. Ligula iaculis lectus enim curabitur. Enim condimentum curabitur faucibus mollis a leo augue rhoncus adipiscing.",
      "longDescriptionUrl": "templatek.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-201/subdomain-201",
      "roleId": "role-201",
      "subDomain": "subdomain-201",
      "logo": "http://placehold.it/64x64",
      "name": "Forecore",
      "longDescription": "Turpis purus ex vehicula natoque non. Sapien curabitur ante velit quisque augue. Tincidunt morbi vehicula ultrices. Eti ante consectetur donec.",
      "longDescriptionUrl": "forecore.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-202/subdomain-202",
      "roleId": "role-202",
      "subDomain": "subdomain-202",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Sem enim sit eget eros laoreet, erat nunc sodales curabitur, blandit pretium suscipit ac consequat lacus eti cursus accumsan commodo.",
      "longDescriptionUrl": "eluxa.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-203/subdomain-203",
      "roleId": "role-203",
      "subDomain": "subdomain-203",
      "logo": "http://placehold.it/64x64",
      "name": "Logico",
      "longDescription": "Nunc ultricies amet maecenas velit rhoncus gravida dolor. A dui commodo justo ac. Nisi morbi suscipit condimentum arcu metus au.",
      "longDescriptionUrl": "logico.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-204/subdomain-204",
      "roleId": "role-204",
      "subDomain": "subdomain-204",
      "logo": "http://placehold.it/64x64",
      "name": "Britech",
      "longDescription": "Vitae metus morbi natoque est tempus vestibulum lorem. Tempor at tempor diam tempus sed, ut pretium sem rhoncus tristique lacinia.",
      "longDescriptionUrl": "britech.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-205/subdomain-205",
      "roleId": "role-205",
      "subDomain": "subdomain-205",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Ultrices maximus commodo leo a ornare dignissim, risus viverra ante turpis. Sagittis dui imperdiet massa. Pretium at enim magna consectetur.",
      "longDescriptionUrl": "hassifix.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-206/subdomain-206",
      "roleId": "role-206",
      "subDomain": "subdomain-206",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "Maecenas sollicitudin aliquam condimentum justo aliquet ipsum massa. Dictum leo eu est vel leo, lorem erat hendrerit arcu blandit ante.",
      "longDescriptionUrl": "templatek.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-207/subdomain-207",
      "roleId": "role-207",
      "subDomain": "subdomain-207",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Sagittis erat facilisis fringilla risus purus diam accumsan a dolor. Neque magna dolor sapien iaculis porttitor erat placerat aliquam vulputate.",
      "longDescriptionUrl": "corptek.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-208/subdomain-208",
      "roleId": "role-208",
      "subDomain": "subdomain-208",
      "logo": "http://placehold.it/64x64",
      "name": "OmniTouch",
      "longDescription": "Morbi sed risus curabitur sollicitudin, eget lacinia purus e scelerisque. Ac non i eu, aliquet maecenas facilisis felis eu laoreet.",
      "longDescriptionUrl": "omnitouch.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-209/subdomain-209",
      "roleId": "role-209",
      "subDomain": "subdomain-209",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Sodales vulputate nisi pretium lacinia mollis tincidunt dolor consectetur. Dolor maecenas viverra tortor. Magna id tempor i vitae donec natoque.",
      "longDescriptionUrl": "sixtysix.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-210/subdomain-210",
      "roleId": "role-210",
      "subDomain": "subdomain-210",
      "logo": "http://placehold.it/64x64",
      "name": "Cameratek",
      "longDescription": "Turpis faucibus vel neque dictum pharetra nisl metus maximus vel tempor mollis laoreet, non tempus sed nam sodales maximus ante.",
      "longDescriptionUrl": "cameratek.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-211/subdomain-211",
      "roleId": "role-211",
      "subDomain": "subdomain-211",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "In tempus mauris ultrices mauris quisque adipiscing. Porttitor lobortis vitae orci neque rhoncus erat suscipit scelerisque fringilla e adipiscing dui.",
      "longDescriptionUrl": "cryptonica.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-212/subdomain-212",
      "roleId": "role-212",
      "subDomain": "subdomain-212",
      "logo": "http://placehold.it/64x64",
      "name": "Logico",
      "longDescription": "Massa commodo eget tincidunt pellentesque eti, metus blandit ac porttitor velit consequat. Vestibulum enim orci eros. Facilisis nisi augue donec.",
      "longDescriptionUrl": "logico.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-213/subdomain-213",
      "roleId": "role-213",
      "subDomain": "subdomain-213",
      "logo": "http://placehold.it/64x64",
      "name": "Nitrocam",
      "longDescription": "Iaculis ultrices rhoncus vulputate at quis quisque morbi dolor. Diam mauris ut euismod morbi posuere. Mauris ex felis nisi rhoncus.",
      "longDescriptionUrl": "nitrocam.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-214/subdomain-214",
      "roleId": "role-214",
      "subDomain": "subdomain-214",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Sapien velit et lobortis pellentesque hendrerit. Ex donec dictum consequat. Scelerisque rhoncus augue turpis au bibendum au. Commodo curabitur ornare.",
      "longDescriptionUrl": "westercom.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-215/subdomain-215",
      "roleId": "role-215",
      "subDomain": "subdomain-215",
      "logo": "http://placehold.it/64x64",
      "name": "Polycore",
      "longDescription": "Enim non cras neque lacinia ante. Lacinia laoreet sapien sit, cursus maximus consequat condimentum ultrices mollis, turpis suscipit mollis arcu.",
      "longDescriptionUrl": "polycore.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-216/subdomain-216",
      "roleId": "role-216",
      "subDomain": "subdomain-216",
      "logo": "http://placehold.it/64x64",
      "name": "Quadtek",
      "longDescription": "Dui sollicitudin ac faucibus lacinia imperdiet nunc metus curabitur sem elit etiam sem, condimentum mauris quis iaculis velit laoreet eti.",
      "longDescriptionUrl": "quadtek.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-217/subdomain-217",
      "roleId": "role-217",
      "subDomain": "subdomain-217",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Ornare aenean blandit turpis ac proin non, tincidunt arcu finibus amet curabitur pharetra, ex scelerisque at maecenas. Neque magna enim.",
      "longDescriptionUrl": "terrasys.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-218/subdomain-218",
      "roleId": "role-218",
      "subDomain": "subdomain-218",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Lacinia orci diam auctor sapien sem. Posuere lacus ac elit dui ultricies tortor, neque auctor eti eros leo tortor tincidunt.",
      "longDescriptionUrl": "fastfreight.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-219/subdomain-219",
      "roleId": "role-219",
      "subDomain": "subdomain-219",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Lacinia at lacinia maecenas accumsan ex tortor blandit bibendum nulla metus lectus magna. In pellentesque non curabitur, posuere metus lacinia.",
      "longDescriptionUrl": "thermolock.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-220/subdomain-220",
      "roleId": "role-220",
      "subDomain": "subdomain-220",
      "logo": "http://placehold.it/64x64",
      "name": "MultiServ",
      "longDescription": "Risus porttitor nunc sem neque consectetur ultricies ante condimentum aliquam quisque i tempus posuere. Mi ante ligula eros eget commodo.",
      "longDescriptionUrl": "multiserv.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-221/subdomain-221",
      "roleId": "role-221",
      "subDomain": "subdomain-221",
      "logo": "http://placehold.it/64x64",
      "name": "Kancom",
      "longDescription": "I morbi tempor purus sodales condimentum morbi finibus vitae eti mauris quisque ex commodo elementum, leo blandit lacinia tempus dui.",
      "longDescriptionUrl": "kancom.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-222/subdomain-222",
      "roleId": "role-222",
      "subDomain": "subdomain-222",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Ex lacinia elementum neque nulla. Cursus facilisis dolor cursus mauris au orci, lectus augue nibh quisque fringilla, dolor aenean lorem.",
      "longDescriptionUrl": "celmax.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-223/subdomain-223",
      "roleId": "role-223",
      "subDomain": "subdomain-223",
      "logo": "http://placehold.it/64x64",
      "name": "MultiLingua",
      "longDescription": "Eu id elementum finibus dui facilisis. Erat lacinia consequat tempor hendrerit elit amet eti dignissim sagittis au. Nulla auctor leo.",
      "longDescriptionUrl": "multilingua.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-224/subdomain-224",
      "roleId": "role-224",
      "subDomain": "subdomain-224",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Turpis tempus pulvinar adipiscing curabitur a erat tortor elementum. Vehicula mollis vel porttitor iaculis. Eros est lacus scelerisque massa justo.",
      "longDescriptionUrl": "triosys.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-225/subdomain-225",
      "roleId": "role-225",
      "subDomain": "subdomain-225",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Tincidunt dolor ex vitae auctor i nisi tortor lacus, mollis aliquet vel ultrices. Dignissim ac ultrices eget imperdiet gravida dignissim.",
      "longDescriptionUrl": "qualcore.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-226/subdomain-226",
      "roleId": "role-226",
      "subDomain": "subdomain-226",
      "logo": "http://placehold.it/64x64",
      "name": "NitroSystems",
      "longDescription": "Viverra lorem vehicula lectus arcu facilisis. Cursus ipsum auctor ante id ac ante. Maecenas adipiscing consectetur nunc mollis vel tortor.",
      "longDescriptionUrl": "nitrosystems.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-227/subdomain-227",
      "roleId": "role-227",
      "subDomain": "subdomain-227",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "Finibus laoreet est sem euismod rhoncus eget cras rhoncus lobortis mi. Velit consequat euismod arcu dictum eget. Viverra cras donec.",
      "longDescriptionUrl": "opticast.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-228/subdomain-228",
      "roleId": "role-228",
      "subDomain": "subdomain-228",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Turpis non viverra e maecenas nisl, lacinia eget in ultricies. Pharetra lobortis mi aliquam. Consequat amet eu a viverra tortor.",
      "longDescriptionUrl": "lexiconlabs.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-229/subdomain-229",
      "roleId": "role-229",
      "subDomain": "subdomain-229",
      "logo": "http://placehold.it/64x64",
      "name": "FastMart",
      "longDescription": "Pellentesque nam leo rhoncus mattis maximus ultrices. Euismod at facilisis aliquam gravida. Mauris cursus cursus tempus eu quis porttitor amet.",
      "longDescriptionUrl": "fastmart.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-230/subdomain-230",
      "roleId": "role-230",
      "subDomain": "subdomain-230",
      "logo": "http://placehold.it/64x64",
      "name": "FastMart",
      "longDescription": "Maecenas porttitor turpis eget tristique sem quis dignissim nunc. Imperdiet nulla ante mollis. Ex neque tortor lacinia. Donec aliquam amet.",
      "longDescriptionUrl": "fastmart.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-231/subdomain-231",
      "roleId": "role-231",
      "subDomain": "subdomain-231",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Tristique dui lobortis mollis orci. Mollis cursus nam finibus nisi faucibus adipiscing amet gravida et mi, mattis justo eti velit.",
      "longDescriptionUrl": "cryptonica.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-232/subdomain-232",
      "roleId": "role-232",
      "subDomain": "subdomain-232",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Erat arcu a lectus sapien. Laoreet felis proin elit ipsum. Lacus lacinia tempus lobortis cursus tempor id tempus natoque lacinia.",
      "longDescriptionUrl": "lexiconlabs.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-233/subdomain-233",
      "roleId": "role-233",
      "subDomain": "subdomain-233",
      "logo": "http://placehold.it/64x64",
      "name": "Dynaroc",
      "longDescription": "Lobortis hendrerit natoque tristique lacinia cursus risus pretium ante quis natoque quisque felis maecenas viverra curabitur, lacinia enim morbi donec.",
      "longDescriptionUrl": "dynaroc.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-234/subdomain-234",
      "roleId": "role-234",
      "subDomain": "subdomain-234",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Donec risus vehicula nunc est donec tincidunt. Donec natoque ligula i ante tristique gravida, fringilla au metus augue pretium sapien.",
      "longDescriptionUrl": "solexis.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-235/subdomain-235",
      "roleId": "role-235",
      "subDomain": "subdomain-235",
      "logo": "http://placehold.it/64x64",
      "name": "Cirpria",
      "longDescription": "Massa i aliquam risus tempor, lobortis mauris felis lobortis. Aliquam non imperdiet lectus. Massa hendrerit sapien sit tempor condimentum faucibus.",
      "longDescriptionUrl": "cirpria.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-236/subdomain-236",
      "roleId": "role-236",
      "subDomain": "subdomain-236",
      "logo": "http://placehold.it/64x64",
      "name": "Creatonix",
      "longDescription": "Maecenas curabitur lacinia non aliquam mollis nisi proin. Dictum tristique mi ligula velit iaculis lorem ipsum augue etiam suscipit maecenas.",
      "longDescriptionUrl": "creatonix.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-237/subdomain-237",
      "roleId": "role-237",
      "subDomain": "subdomain-237",
      "logo": "http://placehold.it/64x64",
      "name": "Haltheon",
      "longDescription": "Tortor posuere sem ipsum ultricies consequat pellentesque vel curabitur massa maximus. Augue ac quisque eros, vitae aliquet lorem aliquet nisl.",
      "longDescriptionUrl": "haltheon.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-238/subdomain-238",
      "roleId": "role-238",
      "subDomain": "subdomain-238",
      "logo": "http://placehold.it/64x64",
      "name": "PeerSys",
      "longDescription": "Ligula blandit ac id aliquet. Placerat mi justo dui euismod tincidunt. Cursus au purus porttitor nisl, etiam nam blandit nunc.",
      "longDescriptionUrl": "peersys.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-239/subdomain-239",
      "roleId": "role-239",
      "subDomain": "subdomain-239",
      "logo": "http://placehold.it/64x64",
      "name": "Forecore",
      "longDescription": "Maximus sodales aenean mauris imperdiet leo. Gravida proin turpis aliquet curabitur tristique nisl tincidunt lacinia. Massa non tristique curabitur adipiscing.",
      "longDescriptionUrl": "forecore.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-240/subdomain-240",
      "roleId": "role-240",
      "subDomain": "subdomain-240",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "Vestibulum aliquet ex elementum arcu vitae. Est nam placerat elit i. I e proin purus. Erat natoque dignissim porttitor et.",
      "longDescriptionUrl": "westgate.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-241/subdomain-241",
      "roleId": "role-241",
      "subDomain": "subdomain-241",
      "logo": "http://placehold.it/64x64",
      "name": "CoreMax",
      "longDescription": "Iaculis tortor id a sodales lacinia vel. Vitae commodo aliquam enim. Orci posuere auctor et velit felis. Vulputate ornare posuere.",
      "longDescriptionUrl": "coremax.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-242/subdomain-242",
      "roleId": "role-242",
      "subDomain": "subdomain-242",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Cras ultrices e sapien eu nisl. Eget elementum ex a maximus tristique. Consectetur scelerisque tempus aliquet, dui mattis ligula amet.",
      "longDescriptionUrl": "smartsystems.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-243/subdomain-243",
      "roleId": "role-243",
      "subDomain": "subdomain-243",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Fringilla gravida nisl consectetur mollis, ac hendrerit leo auctor tempor. Felis massa nisl nibh in aliquam nam amet sapien porttitor.",
      "longDescriptionUrl": "zatheon.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-244/subdomain-244",
      "roleId": "role-244",
      "subDomain": "subdomain-244",
      "logo": "http://placehold.it/64x64",
      "name": "OmniTouch",
      "longDescription": "Id at sollicitudin natoque euismod. Sit ante amet ut elementum. Consectetur quisque non morbi. Cursus lorem arcu iaculis placerat viverra.",
      "longDescriptionUrl": "omnitouch.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-245/subdomain-245",
      "roleId": "role-245",
      "subDomain": "subdomain-245",
      "logo": "http://placehold.it/64x64",
      "name": "OmniTouch",
      "longDescription": "Ex eu porttitor non massa sapien dolor hendrerit faucibus etiam ornare proin ex vulputate. Purus facilisis iaculis sed viverra maximus.",
      "longDescriptionUrl": "omnitouch.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-246/subdomain-246",
      "roleId": "role-246",
      "subDomain": "subdomain-246",
      "logo": "http://placehold.it/64x64",
      "name": "Galcom",
      "longDescription": "Dignissim tristique adipiscing arcu sagittis. Facilisis vel aliquam curabitur. Scelerisque erat magna porttitor ultrices tristique. Tempus lacus porttitor sem elit.",
      "longDescriptionUrl": "galcom.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-247/subdomain-247",
      "roleId": "role-247",
      "subDomain": "subdomain-247",
      "logo": "http://placehold.it/64x64",
      "name": "Keycast",
      "longDescription": "Scelerisque mollis consequat quis finibus nam, placerat accumsan sollicitudin dignissim justo diam maximus consequat nulla sed felis ex viverra curabitur.",
      "longDescriptionUrl": "keycast.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-248/subdomain-248",
      "roleId": "role-248",
      "subDomain": "subdomain-248",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Facilisis consequat ultrices purus tempus maecenas ut pellentesque tincidunt. Mauris pretium pulvinar vulputate, augue mauris laoreet non aliquet blandit ultricies.",
      "longDescriptionUrl": "westercom.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-249/subdomain-249",
      "roleId": "role-249",
      "subDomain": "subdomain-249",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Scelerisque ac mi etiam vel. Nam donec nisi ac elementum adipiscing sem. Purus maecenas turpis morbi mi mollis eros magna.",
      "longDescriptionUrl": "terrasys.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-250/subdomain-250",
      "roleId": "role-250",
      "subDomain": "subdomain-250",
      "logo": "http://placehold.it/64x64",
      "name": "OmniTouch",
      "longDescription": "Sit augue mollis erat pharetra sit sagittis curabitur. Morbi adipiscing auctor dolor. Tempor scelerisque at lectus sit bibendum ornare bibendum.",
      "longDescriptionUrl": "omnitouch.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-251/subdomain-251",
      "roleId": "role-251",
      "subDomain": "subdomain-251",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Augue ligula placerat elit et at. Pharetra vel hendrerit mollis. E fringilla aliquam turpis est, velit mattis et e augue.",
      "longDescriptionUrl": "terrasys.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-252/subdomain-252",
      "roleId": "role-252",
      "subDomain": "subdomain-252",
      "logo": "http://placehold.it/64x64",
      "name": "Pancast",
      "longDescription": "Cras laoreet vel in aenean tortor. Orci vitae vel tempor felis diam mi ex. Nunc lorem hendrerit fringilla mollis aliquam.",
      "longDescriptionUrl": "pancast.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-253/subdomain-253",
      "roleId": "role-253",
      "subDomain": "subdomain-253",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Viverra porttitor neque hendrerit posuere cras, mattis ante erat sem. Sed ac nisl mattis, arcu laoreet velit at lacus vitae.",
      "longDescriptionUrl": "corptek.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-254/subdomain-254",
      "roleId": "role-254",
      "subDomain": "subdomain-254",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Auctor imperdiet ac lorem accumsan ultrices est, tincidunt ante rhoncus massa neque nisl mauris etiam dignissim lacus erat pretium euismod.",
      "longDescriptionUrl": "lexiconlabs.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-255/subdomain-255",
      "roleId": "role-255",
      "subDomain": "subdomain-255",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Commodo euismod eget elementum massa fringilla elementum lectus iaculis vehicula sem justo ante lacinia. Mauris ultrices euismod vehicula augue turpis.",
      "longDescriptionUrl": "storex.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-256/subdomain-256",
      "roleId": "role-256",
      "subDomain": "subdomain-256",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "Blandit pellentesque elit magna nulla nam iaculis non fringilla pharetra, quis mauris i sit risus dignissim sapien pellentesque justo eu.",
      "longDescriptionUrl": "westgate.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-257/subdomain-257",
      "roleId": "role-257",
      "subDomain": "subdomain-257",
      "logo": "http://placehold.it/64x64",
      "name": "Infracom",
      "longDescription": "Lectus tincidunt quisque elementum eti tincidunt vestibulum non bibendum. Lobortis vestibulum mi commodo sed sed sodales ut scelerisque purus nam.",
      "longDescriptionUrl": "infracom.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-258/subdomain-258",
      "roleId": "role-258",
      "subDomain": "subdomain-258",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Pellentesque pretium dictum natoque scelerisque vestibulum. Dignissim gravida sit ante, massa quisque nibh eu facilisis ac sed erat donec eti.",
      "longDescriptionUrl": "westercom.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-259/subdomain-259",
      "roleId": "role-259",
      "subDomain": "subdomain-259",
      "logo": "http://placehold.it/64x64",
      "name": "DuoServe",
      "longDescription": "Ante commodo commodo tempus velit arcu, nibh tempus cras nisi scelerisque. Sed pharetra pretium ligula vestibulum pretium lorem tincidunt ipsum.",
      "longDescriptionUrl": "duoserve.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-260/subdomain-260",
      "roleId": "role-260",
      "subDomain": "subdomain-260",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Eu ac eti justo magna au, condimentum ut tempus ex bibendum, vitae eget cursus finibus, vel ultrices nunc dictum sem.",
      "longDescriptionUrl": "westercom.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-261/subdomain-261",
      "roleId": "role-261",
      "subDomain": "subdomain-261",
      "logo": "http://placehold.it/64x64",
      "name": "Hivemind",
      "longDescription": "Risus aenean turpis diam suscipit ac nibh, purus tincidunt auctor donec id morbi aliquet. Tortor lacinia aenean lacinia pretium non.",
      "longDescriptionUrl": "hivemind.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-262/subdomain-262",
      "roleId": "role-262",
      "subDomain": "subdomain-262",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Ac elementum eros dui pellentesque. Mollis lectus lorem finibus, adipiscing lacus lectus dignissim tortor pretium. Quisque eu consectetur eu tincidunt.",
      "longDescriptionUrl": "lexiconlabs.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-263/subdomain-263",
      "roleId": "role-263",
      "subDomain": "subdomain-263",
      "logo": "http://placehold.it/64x64",
      "name": "Ulogica",
      "longDescription": "Bibendum pulvinar blandit vel ac amet natoque. Vel augue turpis blandit. Viverra placerat eget turpis rhoncus accumsan, ligula erat cursus.",
      "longDescriptionUrl": "ulogica.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-264/subdomain-264",
      "roleId": "role-264",
      "subDomain": "subdomain-264",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Aliquet ex proin placerat ac vitae. Lectus mi consectetur lacus justo, ultricies tempor elit finibus. Ante ipsum massa sodales mi.",
      "longDescriptionUrl": "storex.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-265/subdomain-265",
      "roleId": "role-265",
      "subDomain": "subdomain-265",
      "logo": "http://placehold.it/64x64",
      "name": "TurboSystems",
      "longDescription": "Consectetur hendrerit vulputate condimentum natoque orci gravida. Sagittis magna purus sollicitudin ut commodo. Viverra sed vestibulum aliquam dignissim metus lobortis.",
      "longDescriptionUrl": "turbosystems.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-266/subdomain-266",
      "roleId": "role-266",
      "subDomain": "subdomain-266",
      "logo": "http://placehold.it/64x64",
      "name": "Forecore",
      "longDescription": "Maximus nulla nisl neque purus ante, euismod sodales massa et sed. Cursus vel a aliquam turpis. Ligula au tortor facilisis.",
      "longDescriptionUrl": "forecore.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-267/subdomain-267",
      "roleId": "role-267",
      "subDomain": "subdomain-267",
      "logo": "http://placehold.it/64x64",
      "name": "Keycast",
      "longDescription": "Commodo erat maximus felis ultrices consequat. Lacinia vitae laoreet purus vel, eros vehicula pellentesque pharetra aliquam ac nibh eti imperdiet.",
      "longDescriptionUrl": "keycast.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-268/subdomain-268",
      "roleId": "role-268",
      "subDomain": "subdomain-268",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Eti ipsum sagittis eu leo. Est morbi ultrices mollis gravida est purus maecenas ac cursus, etiam pulvinar felis auctor donec.",
      "longDescriptionUrl": "zatheon.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-269/subdomain-269",
      "roleId": "role-269",
      "subDomain": "subdomain-269",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Consequat iaculis augue purus i ex. Proin nisi id velit turpis. Et tristique ac amet elementum facilisis arcu accumsan velit.",
      "longDescriptionUrl": "sixtysix.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-270/subdomain-270",
      "roleId": "role-270",
      "subDomain": "subdomain-270",
      "logo": "http://placehold.it/64x64",
      "name": "VTGrafix",
      "longDescription": "Donec non diam proin lorem curabitur purus. Placerat morbi hendrerit id mi laoreet, auctor nisi etiam neque. Aliquam magna dolor.",
      "longDescriptionUrl": "vtgrafix.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-271/subdomain-271",
      "roleId": "role-271",
      "subDomain": "subdomain-271",
      "logo": "http://placehold.it/64x64",
      "name": "Britech",
      "longDescription": "Nunc dolor vitae lacinia felis e ante ultrices ut lorem purus lectus bibendum velit, magna tempus dui ac at euismod.",
      "longDescriptionUrl": "britech.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-272/subdomain-272",
      "roleId": "role-272",
      "subDomain": "subdomain-272",
      "logo": "http://placehold.it/64x64",
      "name": "Chromaton",
      "longDescription": "Amet velit consectetur eros nibh maximus. Vestibulum enim pellentesque fringilla amet, facilisis ultrices donec proin et consequat. Gravida eti nam.",
      "longDescriptionUrl": "chromaton.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-273/subdomain-273",
      "roleId": "role-273",
      "subDomain": "subdomain-273",
      "logo": "http://placehold.it/64x64",
      "name": "Pancast",
      "longDescription": "Mollis in hendrerit etiam adipiscing magna a sed viverra tempor auctor nulla, nibh ipsum imperdiet justo pellentesque, ipsum eti commodo.",
      "longDescriptionUrl": "pancast.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-274/subdomain-274",
      "roleId": "role-274",
      "subDomain": "subdomain-274",
      "logo": "http://placehold.it/64x64",
      "name": "CoreRobotics",
      "longDescription": "Neque etiam enim i justo, finibus fringilla dictum tempor ornare. Id lectus tincidunt augue. Donec euismod quisque aliquet lectus nam.",
      "longDescriptionUrl": "corerobotics.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-275/subdomain-275",
      "roleId": "role-275",
      "subDomain": "subdomain-275",
      "logo": "http://placehold.it/64x64",
      "name": "VTGrafix",
      "longDescription": "Turpis dictum scelerisque natoque morbi risus, imperdiet donec ut sit rhoncus, mi aliquam erat proin nulla. Condimentum i ut au.",
      "longDescriptionUrl": "vtgrafix.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-276/subdomain-276",
      "roleId": "role-276",
      "subDomain": "subdomain-276",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Lectus eros enim vehicula eros mollis. Finibus tristique dignissim lacinia facilisis. Ultrices pulvinar proin amet vitae risus risus velit donec.",
      "longDescriptionUrl": "connic.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-277/subdomain-277",
      "roleId": "role-277",
      "subDomain": "subdomain-277",
      "logo": "http://placehold.it/64x64",
      "name": "Dynalab",
      "longDescription": "Ultricies aenean turpis nisl magna dignissim, au tincidunt enim aliquam felis non vitae pretium. Iaculis lorem mattis orci sagittis bibendum.",
      "longDescriptionUrl": "dynalab.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-278/subdomain-278",
      "roleId": "role-278",
      "subDomain": "subdomain-278",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Nulla tempor maximus lectus eu imperdiet. Consectetur aliquet consectetur nibh mauris, finibus ipsum at sapien pellentesque quisque sagittis curabitur fringilla.",
      "longDescriptionUrl": "smartsystems.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-279/subdomain-279",
      "roleId": "role-279",
      "subDomain": "subdomain-279",
      "logo": "http://placehold.it/64x64",
      "name": "CoreXTS",
      "longDescription": "Donec nunc mattis tristique maecenas morbi tortor. Lacus gravida ex commodo. Viverra i faucibus leo facilisis et. Sodales aenean ultricies.",
      "longDescriptionUrl": "corexts.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-280/subdomain-280",
      "roleId": "role-280",
      "subDomain": "subdomain-280",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "Cras curabitur mi e hendrerit. Pharetra e finibus tempor nibh etiam non ante. Dignissim pretium sed curabitur. Risus nisl faucibus.",
      "longDescriptionUrl": "templatek.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-281/subdomain-281",
      "roleId": "role-281",
      "subDomain": "subdomain-281",
      "logo": "http://placehold.it/64x64",
      "name": "Polycore",
      "longDescription": "Tincidunt ligula lectus in quis. Sodales maecenas bibendum et. Lacus sapien porttitor euismod ultrices sed consectetur placerat, gravida sodales adipiscing.",
      "longDescriptionUrl": "polycore.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-282/subdomain-282",
      "roleId": "role-282",
      "subDomain": "subdomain-282",
      "logo": "http://placehold.it/64x64",
      "name": "Dynaroc",
      "longDescription": "Arcu hendrerit maximus i at laoreet finibus eget. Proin adipiscing tempor elit euismod. I risus ut non. Eu nam curabitur.",
      "longDescriptionUrl": "dynaroc.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-283/subdomain-283",
      "roleId": "role-283",
      "subDomain": "subdomain-283",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Nam ultricies sed quisque curabitur sollicitudin erat justo. Eros dolor maximus euismod, blandit mattis dui non in. Dui velit mattis.",
      "longDescriptionUrl": "lexiconlabs.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-284/subdomain-284",
      "roleId": "role-284",
      "subDomain": "subdomain-284",
      "logo": "http://placehold.it/64x64",
      "name": "Iridimax",
      "longDescription": "Turpis dictum eti vitae dui vel neque, nibh viverra bibendum justo natoque lacinia. Au ornare vehicula ligula nibh vehicula scelerisque.",
      "longDescriptionUrl": "iridimax.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-285/subdomain-285",
      "roleId": "role-285",
      "subDomain": "subdomain-285",
      "logo": "http://placehold.it/64x64",
      "name": "Coolinga",
      "longDescription": "Vitae mauris tortor finibus auctor tincidunt purus. Eros ligula dolor purus lacus lacinia vitae commodo nunc arcu auctor aliquam adipiscing.",
      "longDescriptionUrl": "coolinga.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-286/subdomain-286",
      "roleId": "role-286",
      "subDomain": "subdomain-286",
      "logo": "http://placehold.it/64x64",
      "name": "Dalserve",
      "longDescription": "Massa aliquet sapien neque pretium elementum neque arcu. Dictum pretium cras nisi aliquam etiam. Laoreet eros lobortis sed ex facilisis.",
      "longDescriptionUrl": "dalserve.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-287/subdomain-287",
      "roleId": "role-287",
      "subDomain": "subdomain-287",
      "logo": "http://placehold.it/64x64",
      "name": "Superwire",
      "longDescription": "Non cras aliquam metus vel dui. Mattis ornare nam ante vel mollis vestibulum, dui purus felis nulla, accumsan arcu etiam.",
      "longDescriptionUrl": "superwire.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-288/subdomain-288",
      "roleId": "role-288",
      "subDomain": "subdomain-288",
      "logo": "http://placehold.it/64x64",
      "name": "Polycore",
      "longDescription": "Felis velit viverra suscipit placerat pellentesque metus tempus. Consequat enim mi leo leo. Amet ipsum vitae sollicitudin. Facilisis nibh aliquam.",
      "longDescriptionUrl": "polycore.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-289/subdomain-289",
      "roleId": "role-289",
      "subDomain": "subdomain-289",
      "logo": "http://placehold.it/64x64",
      "name": "Galcom",
      "longDescription": "Quis ligula vulputate risus vehicula leo sapien commodo. Pretium lacinia est velit diam morbi bibendum sodales viverra nam vitae velit.",
      "longDescriptionUrl": "galcom.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-290/subdomain-290",
      "roleId": "role-290",
      "subDomain": "subdomain-290",
      "logo": "http://placehold.it/64x64",
      "name": "GrafixMedia",
      "longDescription": "Erat vulputate facilisis i pharetra quis ornare imperdiet. Enim leo dui ex et massa quisque at lacus. Proin pretium eti.",
      "longDescriptionUrl": "grafixmedia.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-291/subdomain-291",
      "roleId": "role-291",
      "subDomain": "subdomain-291",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Adipiscing nisl arcu orci tortor, pretium tempor condimentum tincidunt ornare maecenas ultrices justo consequat enim facilisis quis, sapien eti justo.",
      "longDescriptionUrl": "corptek.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-292/subdomain-292",
      "roleId": "role-292",
      "subDomain": "subdomain-292",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Fringilla leo arcu iaculis hendrerit. Fringilla ultrices laoreet consequat bibendum eu diam commodo, non mi fringilla vitae, neque posuere tempor.",
      "longDescriptionUrl": "hassifix.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-293/subdomain-293",
      "roleId": "role-293",
      "subDomain": "subdomain-293",
      "logo": "http://placehold.it/64x64",
      "name": "Dynalab",
      "longDescription": "Ipsum dolor sollicitudin magna morbi consectetur, in aenean pellentesque vitae tristique imperdiet, eros turpis eti ac aliquet nunc iaculis natoque.",
      "longDescriptionUrl": "dynalab.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-294/subdomain-294",
      "roleId": "role-294",
      "subDomain": "subdomain-294",
      "logo": "http://placehold.it/64x64",
      "name": "Maxcast",
      "longDescription": "Nam tristique tempus fringilla ultrices sollicitudin, nisi leo diam elementum non neque pulvinar rhoncus, purus orci imperdiet nulla natoque leo.",
      "longDescriptionUrl": "maxcast.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-295/subdomain-295",
      "roleId": "role-295",
      "subDomain": "subdomain-295",
      "logo": "http://placehold.it/64x64",
      "name": "Logico",
      "longDescription": "Au magna vulputate i quisque, elementum quisque nisl blandit dignissim ante ante. Mollis enim lobortis quisque. Ultrices ipsum eti orci.",
      "longDescriptionUrl": "logico.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-296/subdomain-296",
      "roleId": "role-296",
      "subDomain": "subdomain-296",
      "logo": "http://placehold.it/64x64",
      "name": "Optiplex",
      "longDescription": "At fringilla quisque eti hendrerit cras et. Cras et tortor vehicula dignissim iaculis natoque sollicitudin diam. Tempus dignissim iaculis consequat.",
      "longDescriptionUrl": "optiplex.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-297/subdomain-297",
      "roleId": "role-297",
      "subDomain": "subdomain-297",
      "logo": "http://placehold.it/64x64",
      "name": "Britech",
      "longDescription": "Turpis sagittis eget ultricies iaculis mi. Auctor quis cursus proin. Dolor dignissim in enim maecenas. Consequat sapien risus magna leo.",
      "longDescriptionUrl": "britech.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-298/subdomain-298",
      "roleId": "role-298",
      "subDomain": "subdomain-298",
      "logo": "http://placehold.it/64x64",
      "name": "Maxcast",
      "longDescription": "Ipsum tortor nibh nunc tortor. Etiam lacinia au mollis sed fringilla non rhoncus hendrerit, orci dui mollis amet at e.",
      "longDescriptionUrl": "maxcast.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-299/subdomain-299",
      "roleId": "role-299",
      "subDomain": "subdomain-299",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Quis vestibulum lacinia ipsum ipsum euismod ut etiam, aliquet scelerisque vulputate viverra gravida auctor metus accumsan nulla, tortor est tempus.",
      "longDescriptionUrl": "storex.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-300/subdomain-300",
      "roleId": "role-300",
      "subDomain": "subdomain-300",
      "logo": "http://placehold.it/64x64",
      "name": "Polygan",
      "longDescription": "Lacinia est curabitur arcu ac faucibus enim, ipsum ut i sit, e ut ut ut fringilla sagittis ex enim cursus.",
      "longDescriptionUrl": "polygan.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-301/subdomain-301",
      "roleId": "role-301",
      "subDomain": "subdomain-301",
      "logo": "http://placehold.it/64x64",
      "name": "Polygan",
      "longDescription": "Enim curabitur sed etiam aenean sodales dolor nisi. Quis pretium et donec pharetra sagittis nunc. Erat enim velit erat scelerisque.",
      "longDescriptionUrl": "polygan.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-302/subdomain-302",
      "roleId": "role-302",
      "subDomain": "subdomain-302",
      "logo": "http://placehold.it/64x64",
      "name": "FastMart",
      "longDescription": "Justo eti lacus sagittis et. Est suscipit sed proin, morbi hendrerit at augue sapien natoque quisque turpis sit amet justo.",
      "longDescriptionUrl": "fastmart.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-303/subdomain-303",
      "roleId": "role-303",
      "subDomain": "subdomain-303",
      "logo": "http://placehold.it/64x64",
      "name": "Coolinga",
      "longDescription": "Adipiscing quisque felis mauris tempus. Scelerisque non orci ultrices eros. Au metus eget condimentum erat a. Enim laoreet pulvinar ultricies.",
      "longDescriptionUrl": "coolinga.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-304/subdomain-304",
      "roleId": "role-304",
      "subDomain": "subdomain-304",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Eti neque est felis sed augue maecenas, i proin nisl iaculis diam, vulputate sodales vehicula ultrices in. Nibh enim faucibus.",
      "longDescriptionUrl": "openserv.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-305/subdomain-305",
      "roleId": "role-305",
      "subDomain": "subdomain-305",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "Quisque sed rhoncus sapien sit ultricies ante curabitur gravida scelerisque, hendrerit elementum pellentesque tincidunt tincidunt auctor, suscipit enim lacinia ligula.",
      "longDescriptionUrl": "westgate.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-306/subdomain-306",
      "roleId": "role-306",
      "subDomain": "subdomain-306",
      "logo": "http://placehold.it/64x64",
      "name": "Dalserve",
      "longDescription": "Orci eu purus iaculis id. Sodales sapien lorem magna ultrices tempus, magna lacinia elementum maecenas bibendum. Vestibulum elementum lorem neque.",
      "longDescriptionUrl": "dalserve.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-307/subdomain-307",
      "roleId": "role-307",
      "subDomain": "subdomain-307",
      "logo": "http://placehold.it/64x64",
      "name": "Seelogic",
      "longDescription": "Auctor tempus amet dolor lorem accumsan turpis gravida. Lacinia vulputate tincidunt curabitur justo mollis viverra. Ipsum e ac elementum eros.",
      "longDescriptionUrl": "seelogic.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-308/subdomain-308",
      "roleId": "role-308",
      "subDomain": "subdomain-308",
      "logo": "http://placehold.it/64x64",
      "name": "Xenosys",
      "longDescription": "Sollicitudin viverra eros commodo nibh, posuere nibh neque donec bibendum e. Amet sodales in tristique viverra mattis. Eget dui euismod.",
      "longDescriptionUrl": "xenosys.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-309/subdomain-309",
      "roleId": "role-309",
      "subDomain": "subdomain-309",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "Nibh diam velit facilisis sagittis. Vestibulum nam vitae purus orci, sed diam ac dictum nibh ipsum in. Ultricies eget rhoncus.",
      "longDescriptionUrl": "templatek.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-310/subdomain-310",
      "roleId": "role-310",
      "subDomain": "subdomain-310",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Erat arcu dui ex lorem massa. Cursus eu purus ac ex, imperdiet neque faucibus tempus tristique quisque laoreet vulputate nisl.",
      "longDescriptionUrl": "smartsystems.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-311/subdomain-311",
      "roleId": "role-311",
      "subDomain": "subdomain-311",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Nulla mi a vel nam ornare. Amet pretium euismod sodales bibendum cras sodales ante. Nam neque maximus magna sodales maecenas.",
      "longDescriptionUrl": "qualcore.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-312/subdomain-312",
      "roleId": "role-312",
      "subDomain": "subdomain-312",
      "logo": "http://placehold.it/64x64",
      "name": "Airconix",
      "longDescription": "Non lacus dignissim tincidunt eros id orci cursus tempor maecenas ut, nisi id magna in dictum velit gravida rhoncus arcu.",
      "longDescriptionUrl": "airconix.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-313/subdomain-313",
      "roleId": "role-313",
      "subDomain": "subdomain-313",
      "logo": "http://placehold.it/64x64",
      "name": "DuoServe",
      "longDescription": "Pretium euismod pellentesque purus porttitor metus erat laoreet massa pretium, maecenas orci est iaculis lacinia pretium. Faucibus enim a natoque.",
      "longDescriptionUrl": "duoserve.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-314/subdomain-314",
      "roleId": "role-314",
      "subDomain": "subdomain-314",
      "logo": "http://placehold.it/64x64",
      "name": "Baramax",
      "longDescription": "Placerat diam condimentum magna cras pellentesque est magna enim cursus dolor sit. Vitae faucibus at cras blandit. Lorem consequat diam.",
      "longDescriptionUrl": "baramax.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-315/subdomain-315",
      "roleId": "role-315",
      "subDomain": "subdomain-315",
      "logo": "http://placehold.it/64x64",
      "name": "Viewtopia",
      "longDescription": "Purus adipiscing sapien justo tempus enim. Mi quis risus sed faucibus iaculis condimentum condimentum i vel nisi scelerisque mauris nisl.",
      "longDescriptionUrl": "viewtopia.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-316/subdomain-316",
      "roleId": "role-316",
      "subDomain": "subdomain-316",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Donec ut ipsum sem pharetra lacinia justo ultricies. Laoreet cursus consectetur au id. Ante pharetra vehicula pretium auctor sapien nisi.",
      "longDescriptionUrl": "thermolock.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-317/subdomain-317",
      "roleId": "role-317",
      "subDomain": "subdomain-317",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Facilisis quisque tortor morbi nam imperdiet, suscipit tempor quisque risus nisl quisque accumsan amet pretium i magna justo lectus quis.",
      "longDescriptionUrl": "connic.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-318/subdomain-318",
      "roleId": "role-318",
      "subDomain": "subdomain-318",
      "logo": "http://placehold.it/64x64",
      "name": "MultiLingua",
      "longDescription": "Mi ac sollicitudin i neque nisi lacinia aenean risus pellentesque faucibus sem mattis sapien, scelerisque tempor condimentum hendrerit lacinia dignissim.",
      "longDescriptionUrl": "multilingua.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-319/subdomain-319",
      "roleId": "role-319",
      "subDomain": "subdomain-319",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Aenean rhoncus elit hendrerit sagittis, blandit consectetur dui proin nunc tristique, maecenas etiam proin ante blandit nibh commodo neque accumsan.",
      "longDescriptionUrl": "connic.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-320/subdomain-320",
      "roleId": "role-320",
      "subDomain": "subdomain-320",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Sit ut cras rhoncus aliquet suscipit sagittis. Nisi velit quisque vitae mauris consectetur quis massa aliquet vel lacinia etiam vestibulum.",
      "longDescriptionUrl": "smartsystems.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-321/subdomain-321",
      "roleId": "role-321",
      "subDomain": "subdomain-321",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Rhoncus posuere mollis ultrices facilisis porttitor. At fringilla ornare ex cursus enim au placerat bibendum. Pulvinar eti est nisi turpis.",
      "longDescriptionUrl": "skycenta.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-322/subdomain-322",
      "roleId": "role-322",
      "subDomain": "subdomain-322",
      "logo": "http://placehold.it/64x64",
      "name": "Bellgate",
      "longDescription": "Elementum fringilla sagittis arcu vehicula, ornare euismod nulla leo cursus. Eti amet sapien maecenas, donec dolor ut lacinia blandit sit.",
      "longDescriptionUrl": "bellgate.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-323/subdomain-323",
      "roleId": "role-323",
      "subDomain": "subdomain-323",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Nam quisque ex est nulla orci nunc nulla ante. Lacinia natoque risus eros. Neque iaculis maecenas bibendum vulputate etiam at.",
      "longDescriptionUrl": "celmax.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-324/subdomain-324",
      "roleId": "role-324",
      "subDomain": "subdomain-324",
      "logo": "http://placehold.it/64x64",
      "name": "Freecast",
      "longDescription": "Tincidunt id tempus nunc vel condimentum ipsum donec. Aliquet dui id est etiam quisque. Vitae in commodo sem neque orci.",
      "longDescriptionUrl": "freecast.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-325/subdomain-325",
      "roleId": "role-325",
      "subDomain": "subdomain-325",
      "logo": "http://placehold.it/64x64",
      "name": "Logico",
      "longDescription": "Felis tristique nisi leo non pellentesque mollis tempor, ligula pharetra au aliquam. Magna pellentesque tristique scelerisque suscipit. Tortor cursus augue.",
      "longDescriptionUrl": "logico.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-326/subdomain-326",
      "roleId": "role-326",
      "subDomain": "subdomain-326",
      "logo": "http://placehold.it/64x64",
      "name": "MediaDime",
      "longDescription": "Nulla vitae ultricies mi maximus donec id, sapien eget arcu pellentesque tincidunt eti magna. At nibh vulputate posuere nunc maximus.",
      "longDescriptionUrl": "mediadime.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-327/subdomain-327",
      "roleId": "role-327",
      "subDomain": "subdomain-327",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Id donec ac in commodo. Gravida erat amet lectus morbi dolor. Natoque sed velit massa i, elit finibus dolor aliquam.",
      "longDescriptionUrl": "unilogic.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-328/subdomain-328",
      "roleId": "role-328",
      "subDomain": "subdomain-328",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Euismod porttitor risus auctor erat metus pulvinar velit ipsum, dignissim sit justo nisi felis. Mauris id facilisis suscipit lacinia placerat.",
      "longDescriptionUrl": "solexis.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-329/subdomain-329",
      "roleId": "role-329",
      "subDomain": "subdomain-329",
      "logo": "http://placehold.it/64x64",
      "name": "Sealine",
      "longDescription": "Elementum rhoncus tristique dui vestibulum vel magna. Amet lectus pellentesque enim au lacinia cursus. Sollicitudin tempus purus arcu nunc nulla.",
      "longDescriptionUrl": "sealine.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-330/subdomain-330",
      "roleId": "role-330",
      "subDomain": "subdomain-330",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Ex quis hendrerit faucibus hendrerit. Quis proin e sapien nunc leo, lorem augue nisl tempor. Risus dui et magna fringilla.",
      "longDescriptionUrl": "zatheon.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-331/subdomain-331",
      "roleId": "role-331",
      "subDomain": "subdomain-331",
      "logo": "http://placehold.it/64x64",
      "name": "TurboSystems",
      "longDescription": "Eget euismod auctor ultrices ut. Sodales porttitor hendrerit faucibus, nibh nisi mollis donec. Elementum scelerisque proin arcu. Rhoncus e pellentesque.",
      "longDescriptionUrl": "turbosystems.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-332/subdomain-332",
      "roleId": "role-332",
      "subDomain": "subdomain-332",
      "logo": "http://placehold.it/64x64",
      "name": "Cirpria",
      "longDescription": "Accumsan placerat suscipit et faucibus. E mauris sit non. Lectus hendrerit vehicula pellentesque et euismod elit. Proin lectus posuere id.",
      "longDescriptionUrl": "cirpria.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-333/subdomain-333",
      "roleId": "role-333",
      "subDomain": "subdomain-333",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Neque e metus natoque sem i elementum donec faucibus, faucibus tristique faucibus dignissim ultricies ligula, ac augue aenean auctor posuere.",
      "longDescriptionUrl": "corptek.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-334/subdomain-334",
      "roleId": "role-334",
      "subDomain": "subdomain-334",
      "logo": "http://placehold.it/64x64",
      "name": "Superwire",
      "longDescription": "Et viverra metus maecenas faucibus, magna adipiscing elit elit a. Morbi maximus aliquam accumsan lorem hendrerit. Gravida placerat finibus nulla.",
      "longDescriptionUrl": "superwire.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-335/subdomain-335",
      "roleId": "role-335",
      "subDomain": "subdomain-335",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "Sapien placerat lorem dui finibus massa lacinia mauris vehicula eget. A vel velit mi neque ipsum blandit consequat bibendum erat.",
      "longDescriptionUrl": "templatek.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-336/subdomain-336",
      "roleId": "role-336",
      "subDomain": "subdomain-336",
      "logo": "http://placehold.it/64x64",
      "name": "CoreXTS",
      "longDescription": "Euismod in etiam dui facilisis, commodo rhoncus sem nam maecenas placerat, consequat erat facilisis adipiscing, turpis nisl auctor nibh sit.",
      "longDescriptionUrl": "corexts.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-337/subdomain-337",
      "roleId": "role-337",
      "subDomain": "subdomain-337",
      "logo": "http://placehold.it/64x64",
      "name": "CoreRobotics",
      "longDescription": "Iaculis ut dictum mauris velit nulla suscipit finibus. Mauris velit gravida neque. Porttitor aliquet felis lectus. Cursus bibendum metus e.",
      "longDescriptionUrl": "corerobotics.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-338/subdomain-338",
      "roleId": "role-338",
      "subDomain": "subdomain-338",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Ligula tempor ultrices nisl aliquet nulla. Felis justo sagittis dolor dictum eros accumsan. Elit donec quisque mollis sit arcu condimentum.",
      "longDescriptionUrl": "lexiconlabs.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-339/subdomain-339",
      "roleId": "role-339",
      "subDomain": "subdomain-339",
      "logo": "http://placehold.it/64x64",
      "name": "MultiLingua",
      "longDescription": "Fringilla magna au erat maecenas sapien tempus. Ipsum mauris metus lacus eti hendrerit blandit est. Mollis elementum condimentum dignissim diam.",
      "longDescriptionUrl": "multilingua.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-340/subdomain-340",
      "roleId": "role-340",
      "subDomain": "subdomain-340",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Eti etiam sem euismod pharetra, finibus porttitor est ornare. Eros commodo ex faucibus iaculis id. Eros i eget ante arcu.",
      "longDescriptionUrl": "fortyfour.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-341/subdomain-341",
      "roleId": "role-341",
      "subDomain": "subdomain-341",
      "logo": "http://placehold.it/64x64",
      "name": "Airconix",
      "longDescription": "Euismod erat felis pharetra justo. Sapien augue mi in aenean. Eti porttitor magna in tristique pulvinar ex nisl fringilla pretium.",
      "longDescriptionUrl": "airconix.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-342/subdomain-342",
      "roleId": "role-342",
      "subDomain": "subdomain-342",
      "logo": "http://placehold.it/64x64",
      "name": "CoreXTS",
      "longDescription": "Consequat vitae mauris aliquam lectus adipiscing. Commodo scelerisque nisl maecenas pretium, consectetur sed non justo au tempus aliquam ligula laoreet.",
      "longDescriptionUrl": "corexts.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-343/subdomain-343",
      "roleId": "role-343",
      "subDomain": "subdomain-343",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Vitae finibus eget vulputate metus pellentesque nam commodo. Quisque etiam porttitor natoque i mattis, lectus turpis dignissim et tristique ornare.",
      "longDescriptionUrl": "qualcore.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-344/subdomain-344",
      "roleId": "role-344",
      "subDomain": "subdomain-344",
      "logo": "http://placehold.it/64x64",
      "name": "CoreMax",
      "longDescription": "Sollicitudin tincidunt aliquet tempus nulla tempus adipiscing. Blandit vitae tempus blandit, lacus donec dignissim cras. Enim dolor dolor ultricies nibh.",
      "longDescriptionUrl": "coremax.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-345/subdomain-345",
      "roleId": "role-345",
      "subDomain": "subdomain-345",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "I ligula sed accumsan pellentesque et lorem lacus. Magna lacinia proin dui auctor. Pulvinar i lacinia e etiam tempor pulvinar.",
      "longDescriptionUrl": "hassifix.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-346/subdomain-346",
      "roleId": "role-346",
      "subDomain": "subdomain-346",
      "logo": "http://placehold.it/64x64",
      "name": "CoreXTS",
      "longDescription": "Id in placerat maximus placerat nunc. Nulla porttitor eros i sit non iaculis porttitor metus velit bibendum risus maecenas est.",
      "longDescriptionUrl": "corexts.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-347/subdomain-347",
      "roleId": "role-347",
      "subDomain": "subdomain-347",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Quis i eu purus bibendum vehicula, nulla accumsan tortor laoreet lacinia erat lectus nisi a dignissim, bibendum elit proin nisi.",
      "longDescriptionUrl": "openserv.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-348/subdomain-348",
      "roleId": "role-348",
      "subDomain": "subdomain-348",
      "logo": "http://placehold.it/64x64",
      "name": "Quadtek",
      "longDescription": "Massa neque felis lobortis ac ligula imperdiet, tortor facilisis dignissim tempor vitae. Vehicula vel ipsum finibus. Sit vitae nisi in.",
      "longDescriptionUrl": "quadtek.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-349/subdomain-349",
      "roleId": "role-349",
      "subDomain": "subdomain-349",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Dolor non rhoncus curabitur accumsan pellentesque, non dui auctor tempus orci posuere sapien lectus arcu auctor elementum velit scelerisque tincidunt.",
      "longDescriptionUrl": "sunopia.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-350/subdomain-350",
      "roleId": "role-350",
      "subDomain": "subdomain-350",
      "logo": "http://placehold.it/64x64",
      "name": "Chromaton",
      "longDescription": "Elit quis cras vitae ut, est fringilla rhoncus nibh. Consectetur nisi dictum dui, mattis turpis dictum donec sollicitudin velit orci.",
      "longDescriptionUrl": "chromaton.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-351/subdomain-351",
      "roleId": "role-351",
      "subDomain": "subdomain-351",
      "logo": "http://placehold.it/64x64",
      "name": "TurboSystems",
      "longDescription": "Nibh ultrices commodo iaculis dignissim viverra magna, imperdiet et lorem nulla eros est proin. Lorem cras rhoncus condimentum felis consectetur.",
      "longDescriptionUrl": "turbosystems.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-352/subdomain-352",
      "roleId": "role-352",
      "subDomain": "subdomain-352",
      "logo": "http://placehold.it/64x64",
      "name": "MultiLingua",
      "longDescription": "Dignissim condimentum eget eu accumsan ac sit consectetur. E commodo lorem auctor. A sapien ut id non, ultricies auctor at.",
      "longDescriptionUrl": "multilingua.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-353/subdomain-353",
      "roleId": "role-353",
      "subDomain": "subdomain-353",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Nisi natoque neque consequat posuere, erat facilisis laoreet placerat id, non mauris quisque pulvinar augue at dolor. Dolor ante massa.",
      "longDescriptionUrl": "thermolock.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-354/subdomain-354",
      "roleId": "role-354",
      "subDomain": "subdomain-354",
      "logo": "http://placehold.it/64x64",
      "name": "Cameratek",
      "longDescription": "Enim nisl fringilla tincidunt diam. Sit fringilla dictum iaculis at sollicitudin, nam vehicula sagittis ut ornare, commodo vestibulum sodales enim.",
      "longDescriptionUrl": "cameratek.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-355/subdomain-355",
      "roleId": "role-355",
      "subDomain": "subdomain-355",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "Iaculis consectetur vestibulum tempor sagittis nibh scelerisque scelerisque, nunc risus lorem justo. Sollicitudin blandit mi dignissim. Dictum in blandit elementum.",
      "longDescriptionUrl": "opticast.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-356/subdomain-356",
      "roleId": "role-356",
      "subDomain": "subdomain-356",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Lobortis nisl vehicula proin sem, ultrices est nisl pulvinar quisque elementum. At vulputate mattis lacinia, adipiscing laoreet gravida vehicula risus.",
      "longDescriptionUrl": "sunopia.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-357/subdomain-357",
      "roleId": "role-357",
      "subDomain": "subdomain-357",
      "logo": "http://placehold.it/64x64",
      "name": "Keycast",
      "longDescription": "Pretium sodales tristique cras magna scelerisque in eu et dignissim consequat lobortis pharetra. Nisl turpis auctor mauris nisl lacinia dui.",
      "longDescriptionUrl": "keycast.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-358/subdomain-358",
      "roleId": "role-358",
      "subDomain": "subdomain-358",
      "logo": "http://placehold.it/64x64",
      "name": "MultiServ",
      "longDescription": "Sapien pharetra ipsum felis nisi. Mollis pharetra proin sit, orci velit lorem euismod facilisis, nisl sagittis proin ante dui adipiscing.",
      "longDescriptionUrl": "multiserv.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-359/subdomain-359",
      "roleId": "role-359",
      "subDomain": "subdomain-359",
      "logo": "http://placehold.it/64x64",
      "name": "Cirpria",
      "longDescription": "Ex e eti vitae vehicula finibus natoque maximus turpis tristique vestibulum arcu pulvinar lobortis natoque augue eget elementum metus ultricies.",
      "longDescriptionUrl": "cirpria.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-360/subdomain-360",
      "roleId": "role-360",
      "subDomain": "subdomain-360",
      "logo": "http://placehold.it/64x64",
      "name": "Britech",
      "longDescription": "Arcu vehicula id dui leo bibendum erat au cras magna sollicitudin consectetur nulla. Vehicula eget massa consectetur lacinia cursus consequat.",
      "longDescriptionUrl": "britech.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-361/subdomain-361",
      "roleId": "role-361",
      "subDomain": "subdomain-361",
      "logo": "http://placehold.it/64x64",
      "name": "MultiLingua",
      "longDescription": "Sagittis at vitae suscipit ut purus mollis neque, euismod bibendum condimentum leo quisque elementum nunc. Ac vel iaculis erat blandit.",
      "longDescriptionUrl": "multilingua.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-362/subdomain-362",
      "roleId": "role-362",
      "subDomain": "subdomain-362",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Pellentesque eget auctor laoreet lacinia risus sollicitudin turpis metus mauris laoreet nisi eget turpis ipsum, pulvinar ac ultrices tortor nunc.",
      "longDescriptionUrl": "zatheon.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-363/subdomain-363",
      "roleId": "role-363",
      "subDomain": "subdomain-363",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Lacinia quisque dui dolor eros dictum. Ligula felis ornare dolor in. Vulputate et blandit au. Purus id nisi nibh proin.",
      "longDescriptionUrl": "smartsystems.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-364/subdomain-364",
      "roleId": "role-364",
      "subDomain": "subdomain-364",
      "logo": "http://placehold.it/64x64",
      "name": "Seelogic",
      "longDescription": "Faucibus suscipit imperdiet vulputate viverra quisque placerat lacinia. Gravida vitae eu nunc at erat e in tortor mattis purus lorem.",
      "longDescriptionUrl": "seelogic.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-365/subdomain-365",
      "roleId": "role-365",
      "subDomain": "subdomain-365",
      "logo": "http://placehold.it/64x64",
      "name": "Dynalab",
      "longDescription": "Eros iaculis finibus condimentum ornare i a risus pellentesque. Dui tincidunt dignissim curabitur lacinia ligula, sed mollis nisl quis ultrices.",
      "longDescriptionUrl": "dynalab.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-366/subdomain-366",
      "roleId": "role-366",
      "subDomain": "subdomain-366",
      "logo": "http://placehold.it/64x64",
      "name": "Galcom",
      "longDescription": "Placerat justo felis vitae sollicitudin. Cursus lorem pharetra natoque fringilla nam tempus mattis, est dictum e euismod imperdiet sem fringilla.",
      "longDescriptionUrl": "galcom.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-367/subdomain-367",
      "roleId": "role-367",
      "subDomain": "subdomain-367",
      "logo": "http://placehold.it/64x64",
      "name": "Dynalab",
      "longDescription": "Orci tristique non est natoque iaculis sapien, nisl elit i maecenas. Posuere nam magna vestibulum mattis cursus posuere etiam elementum.",
      "longDescriptionUrl": "dynalab.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-368/subdomain-368",
      "roleId": "role-368",
      "subDomain": "subdomain-368",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Risus donec dictum i faucibus suscipit. Lobortis aliquam curabitur ligula. Magna bibendum amet massa nisi, eti dictum magna felis dolor.",
      "longDescriptionUrl": "infratouch.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-369/subdomain-369",
      "roleId": "role-369",
      "subDomain": "subdomain-369",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Leo au sagittis cursus turpis lobortis porttitor est, ex sed tempus ex quis turpis quis augue, sed non aliquet accumsan.",
      "longDescriptionUrl": "cryptonica.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-370/subdomain-370",
      "roleId": "role-370",
      "subDomain": "subdomain-370",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Placerat sit sem velit proin neque magna leo nisl. Neque id pellentesque dignissim velit aliquet. Sagittis cras vel tempus scelerisque.",
      "longDescriptionUrl": "smartsystems.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-371/subdomain-371",
      "roleId": "role-371",
      "subDomain": "subdomain-371",
      "logo": "http://placehold.it/64x64",
      "name": "TurboSystems",
      "longDescription": "Ornare ex quisque aenean tincidunt justo pharetra, lobortis justo elementum vehicula lacinia sit. Proin commodo mattis turpis, leo arcu vehicula.",
      "longDescriptionUrl": "turbosystems.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-372/subdomain-372",
      "roleId": "role-372",
      "subDomain": "subdomain-372",
      "logo": "http://placehold.it/64x64",
      "name": "Optiplex",
      "longDescription": "Nam consectetur nulla massa vehicula. Pellentesque quis euismod hendrerit et, a metus nunc porttitor erat maecenas morbi donec sem aenean.",
      "longDescriptionUrl": "optiplex.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-373/subdomain-373",
      "roleId": "role-373",
      "subDomain": "subdomain-373",
      "logo": "http://placehold.it/64x64",
      "name": "Sealine",
      "longDescription": "Sed tristique finibus vehicula dignissim, proin dignissim mauris mi. Natoque dignissim justo blandit metus lorem cursus, cras ut hendrerit mattis.",
      "longDescriptionUrl": "sealine.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-374/subdomain-374",
      "roleId": "role-374",
      "subDomain": "subdomain-374",
      "logo": "http://placehold.it/64x64",
      "name": "Kancom",
      "longDescription": "Consectetur nisi amet eu nisi. Condimentum mauris ipsum ornare felis eget. Rhoncus ligula lobortis euismod vitae lorem ante aliquet metus.",
      "longDescriptionUrl": "kancom.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-375/subdomain-375",
      "roleId": "role-375",
      "subDomain": "subdomain-375",
      "logo": "http://placehold.it/64x64",
      "name": "Bellgate",
      "longDescription": "Pulvinar at suscipit enim vehicula, velit pulvinar quisque e nisi ac sollicitudin, nam etiam quis turpis. Rhoncus amet mauris cras.",
      "longDescriptionUrl": "bellgate.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-376/subdomain-376",
      "roleId": "role-376",
      "subDomain": "subdomain-376",
      "logo": "http://placehold.it/64x64",
      "name": "Airconix",
      "longDescription": "Fringilla commodo aenean erat suscipit maximus felis vel felis quis quisque cras risus dolor leo tempus ultrices non maximus cursus.",
      "longDescriptionUrl": "airconix.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-377/subdomain-377",
      "roleId": "role-377",
      "subDomain": "subdomain-377",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Sagittis in imperdiet pellentesque pretium tempor tincidunt, mauris tempus dui facilisis condimentum eti ex natoque aliquet, accumsan laoreet hendrerit sodales.",
      "longDescriptionUrl": "qualcore.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-378/subdomain-378",
      "roleId": "role-378",
      "subDomain": "subdomain-378",
      "logo": "http://placehold.it/64x64",
      "name": "Tomiatech",
      "longDescription": "Quisque augue ac justo posuere. Gravida pellentesque justo elementum, diam vehicula arcu nulla morbi, finibus elit velit eti porttitor cursus.",
      "longDescriptionUrl": "tomiatech.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-379/subdomain-379",
      "roleId": "role-379",
      "subDomain": "subdomain-379",
      "logo": "http://placehold.it/64x64",
      "name": "Haltheon",
      "longDescription": "Sed eti purus ac dignissim natoque vehicula i. Consectetur ut etiam aenean maecenas. Diam aliquet adipiscing rhoncus leo eros bibendum.",
      "longDescriptionUrl": "haltheon.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-380/subdomain-380",
      "roleId": "role-380",
      "subDomain": "subdomain-380",
      "logo": "http://placehold.it/64x64",
      "name": "Sophis",
      "longDescription": "Diam vestibulum rhoncus sagittis ante pellentesque facilisis. Arcu at porttitor blandit, risus amet magna eu. Gravida etiam pretium maecenas turpis.",
      "longDescriptionUrl": "sophis.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-381/subdomain-381",
      "roleId": "role-381",
      "subDomain": "subdomain-381",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Ex dictum augue fringilla lacinia faucibus porttitor non. Vitae lacus dignissim sollicitudin. Diam pellentesque vulputate elementum imperdiet aliquet lectus ac.",
      "longDescriptionUrl": "fortyfour.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-382/subdomain-382",
      "roleId": "role-382",
      "subDomain": "subdomain-382",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Vehicula placerat nisi morbi sit, imperdiet consequat mattis aenean pharetra. Lacinia finibus amet tristique. Suscipit mattis non nibh arcu neque.",
      "longDescriptionUrl": "terrasys.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-383/subdomain-383",
      "roleId": "role-383",
      "subDomain": "subdomain-383",
      "logo": "http://placehold.it/64x64",
      "name": "Thermatek",
      "longDescription": "Natoque suscipit facilisis ipsum curabitur et, laoreet pellentesque gravida dolor. Vulputate e imperdiet mi orci metus nunc fringilla lectus mi.",
      "longDescriptionUrl": "thermatek.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-384/subdomain-384",
      "roleId": "role-384",
      "subDomain": "subdomain-384",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Aliquet iaculis finibus aenean at, mattis mi sit eti auctor eget. Lacus pellentesque nunc natoque sapien laoreet at pellentesque cras.",
      "longDescriptionUrl": "thermolock.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-385/subdomain-385",
      "roleId": "role-385",
      "subDomain": "subdomain-385",
      "logo": "http://placehold.it/64x64",
      "name": "Baramax",
      "longDescription": "Eu et lacinia elit finibus tincidunt pellentesque maximus sollicitudin ultrices ut laoreet justo sagittis arcu purus au pellentesque tortor facilisis.",
      "longDescriptionUrl": "baramax.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-386/subdomain-386",
      "roleId": "role-386",
      "subDomain": "subdomain-386",
      "logo": "http://placehold.it/64x64",
      "name": "Dynaroc",
      "longDescription": "Viverra tempus sit turpis condimentum consequat blandit, diam magna tortor dictum gravida tincidunt. Pulvinar auctor massa viverra dui erat pretium.",
      "longDescriptionUrl": "dynaroc.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-387/subdomain-387",
      "roleId": "role-387",
      "subDomain": "subdomain-387",
      "logo": "http://placehold.it/64x64",
      "name": "Infracom",
      "longDescription": "Id e sapien massa ultricies sagittis vulputate accumsan. Sodales viverra ultrices mollis aliquet commodo lobortis. Dictum ultrices metus sodales mollis.",
      "longDescriptionUrl": "infracom.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-388/subdomain-388",
      "roleId": "role-388",
      "subDomain": "subdomain-388",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Porttitor leo vulputate lacinia mi quis. Proin maximus consequat in. Purus quis elit nisl justo maecenas nulla, in condimentum dictum.",
      "longDescriptionUrl": "westercom.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-389/subdomain-389",
      "roleId": "role-389",
      "subDomain": "subdomain-389",
      "logo": "http://placehold.it/64x64",
      "name": "Coolinga",
      "longDescription": "Non commodo lorem dignissim sem lacus justo. Cursus nisi nisl pulvinar ac cursus tortor risus vestibulum. Suscipit eti accumsan ex.",
      "longDescriptionUrl": "coolinga.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-390/subdomain-390",
      "roleId": "role-390",
      "subDomain": "subdomain-390",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Sem ac pharetra etiam ut diam sapien. Elementum ante sit cursus placerat, consequat lorem magna sed. Arcu vel proin lacinia.",
      "longDescriptionUrl": "connic.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-391/subdomain-391",
      "roleId": "role-391",
      "subDomain": "subdomain-391",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Vitae mollis enim placerat cras e a aliquam adipiscing tempus etiam, auctor a metus e scelerisque. E eros auctor elit.",
      "longDescriptionUrl": "qualcore.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-392/subdomain-392",
      "roleId": "role-392",
      "subDomain": "subdomain-392",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Fringilla tristique curabitur pellentesque lorem lobortis au, mollis nam sem at risus ultricies auctor eros, scelerisque sem purus tortor erat.",
      "longDescriptionUrl": "smartsystems.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-393/subdomain-393",
      "roleId": "role-393",
      "subDomain": "subdomain-393",
      "logo": "http://placehold.it/64x64",
      "name": "Airconix",
      "longDescription": "Fringilla eti gravida aliquet ante aliquam natoque eros aliquet nulla. Accumsan imperdiet sagittis proin nam amet facilisis. Enim iaculis hendrerit.",
      "longDescriptionUrl": "airconix.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-394/subdomain-394",
      "roleId": "role-394",
      "subDomain": "subdomain-394",
      "logo": "http://placehold.it/64x64",
      "name": "VenStrategy",
      "longDescription": "Quis iaculis dui justo sagittis sapien. Diam lobortis lorem neque non. Nisi non maximus fringilla nibh suscipit ligula finibus vestibulum.",
      "longDescriptionUrl": "venstrategy.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-395/subdomain-395",
      "roleId": "role-395",
      "subDomain": "subdomain-395",
      "logo": "http://placehold.it/64x64",
      "name": "Tecomix",
      "longDescription": "Ultricies eti au tristique in laoreet mattis elementum. Sapien ipsum laoreet leo bibendum at ante, nibh pretium dolor etiam sollicitudin.",
      "longDescriptionUrl": "tecomix.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-396/subdomain-396",
      "roleId": "role-396",
      "subDomain": "subdomain-396",
      "logo": "http://placehold.it/64x64",
      "name": "Polygan",
      "longDescription": "Ultrices etiam vel nam etiam. Id sit i faucibus. Cursus dignissim maecenas faucibus iaculis dolor sed consequat tempor id dignissim.",
      "longDescriptionUrl": "polygan.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-397/subdomain-397",
      "roleId": "role-397",
      "subDomain": "subdomain-397",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Aenean tempus magna ex dignissim donec nunc erat quisque tristique. Nisi est etiam condimentum commodo, diam eti pharetra turpis purus.",
      "longDescriptionUrl": "openserv.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-398/subdomain-398",
      "roleId": "role-398",
      "subDomain": "subdomain-398",
      "logo": "http://placehold.it/64x64",
      "name": "Maxcast",
      "longDescription": "Pulvinar elit lobortis pretium eti gravida, lacus maecenas tempus aenean ex arcu, euismod iaculis gravida at vitae, lobortis diam mattis.",
      "longDescriptionUrl": "maxcast.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-399/subdomain-399",
      "roleId": "role-399",
      "subDomain": "subdomain-399",
      "logo": "http://placehold.it/64x64",
      "name": "Cameratek",
      "longDescription": "Eti mauris placerat augue dignissim. Consectetur dictum tristique nunc, nisi nulla hendrerit sollicitudin lobortis. Nam facilisis etiam vestibulum ultrices rhoncus.",
      "longDescriptionUrl": "cameratek.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-400/subdomain-400",
      "roleId": "role-400",
      "subDomain": "subdomain-400",
      "logo": "http://placehold.it/64x64",
      "name": "Creatonix",
      "longDescription": "Tortor auctor purus gravida sem lectus, ut ornare tristique sem, metus nunc euismod est. Etiam rhoncus vitae donec id ac.",
      "longDescriptionUrl": "creatonix.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-401/subdomain-401",
      "roleId": "role-401",
      "subDomain": "subdomain-401",
      "logo": "http://placehold.it/64x64",
      "name": "Hypervision",
      "longDescription": "Porttitor sagittis metus vitae vestibulum. E est cursus leo nisi sapien eti arcu curabitur nibh felis, nisl nulla diam augue.",
      "longDescriptionUrl": "hypervision.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-402/subdomain-402",
      "roleId": "role-402",
      "subDomain": "subdomain-402",
      "logo": "http://placehold.it/64x64",
      "name": "Chromaton",
      "longDescription": "Accumsan donec mauris non ultrices sagittis a eu tortor, sodales proin neque sed neque porttitor sagittis eti maecenas ultrices hendrerit.",
      "longDescriptionUrl": "chromaton.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-403/subdomain-403",
      "roleId": "role-403",
      "subDomain": "subdomain-403",
      "logo": "http://placehold.it/64x64",
      "name": "Playtech",
      "longDescription": "Amet leo morbi auctor dolor proin adipiscing lectus curabitur eros. Vulputate nibh vulputate aenean, sit facilisis lacinia eu erat nibh.",
      "longDescriptionUrl": "playtech.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-404/subdomain-404",
      "roleId": "role-404",
      "subDomain": "subdomain-404",
      "logo": "http://placehold.it/64x64",
      "name": "Xenosys",
      "longDescription": "Ornare erat amet ornare nam elit eu felis. Et hendrerit ipsum felis. Dignissim tempus sem cras, porttitor massa at turpis.",
      "longDescriptionUrl": "xenosys.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-405/subdomain-405",
      "roleId": "role-405",
      "subDomain": "subdomain-405",
      "logo": "http://placehold.it/64x64",
      "name": "Freecast",
      "longDescription": "Ipsum risus in nisi neque lacus tempus etiam vel auctor aenean amet consequat. Ornare tortor nisi eu. Pellentesque vel lectus.",
      "longDescriptionUrl": "freecast.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-406/subdomain-406",
      "roleId": "role-406",
      "subDomain": "subdomain-406",
      "logo": "http://placehold.it/64x64",
      "name": "Citisys",
      "longDescription": "In nisl eget risus eu nulla curabitur vel. Vulputate ligula velit ultrices a. Ligula diam dolor cras consectetur mattis porttitor.",
      "longDescriptionUrl": "citisys.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-407/subdomain-407",
      "roleId": "role-407",
      "subDomain": "subdomain-407",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "Sapien sollicitudin consectetur dolor condimentum bibendum, eu erat tempus id accumsan sem. Blandit ut mollis euismod placerat accumsan maximus iaculis.",
      "longDescriptionUrl": "conixco.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-408/subdomain-408",
      "roleId": "role-408",
      "subDomain": "subdomain-408",
      "logo": "http://placehold.it/64x64",
      "name": "QuadNet",
      "longDescription": "Cras velit e mattis in. Justo maecenas aliquam ligula proin, orci ante imperdiet non auctor pretium pellentesque condimentum iaculis justo.",
      "longDescriptionUrl": "quadnet.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-409/subdomain-409",
      "roleId": "role-409",
      "subDomain": "subdomain-409",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Mauris dolor lacinia vehicula vel id. Nam i quisque ultrices nibh ac ipsum curabitur in consectetur, tristique purus nam i.",
      "longDescriptionUrl": "terrasys.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-410/subdomain-410",
      "roleId": "role-410",
      "subDomain": "subdomain-410",
      "logo": "http://placehold.it/64x64",
      "name": "Dynalab",
      "longDescription": "Tempus quisque ipsum accumsan suscipit commodo consectetur sagittis lacinia sit dolor a eu dolor euismod. Cras rhoncus maecenas nunc consectetur.",
      "longDescriptionUrl": "dynalab.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-411/subdomain-411",
      "roleId": "role-411",
      "subDomain": "subdomain-411",
      "logo": "http://placehold.it/64x64",
      "name": "DynaAir",
      "longDescription": "I euismod finibus facilisis sed augue. Purus lacinia lobortis pretium. Pulvinar etiam ultricies metus mauris bibendum eros et finibus ultrices.",
      "longDescriptionUrl": "dynaair.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-412/subdomain-412",
      "roleId": "role-412",
      "subDomain": "subdomain-412",
      "logo": "http://placehold.it/64x64",
      "name": "Sealine",
      "longDescription": "Quis massa nam vehicula tristique. Maecenas tincidunt lectus cursus dictum. Mattis aliquet porttitor massa eti sollicitudin, velit metus nibh lorem.",
      "longDescriptionUrl": "sealine.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-413/subdomain-413",
      "roleId": "role-413",
      "subDomain": "subdomain-413",
      "logo": "http://placehold.it/64x64",
      "name": "Cirpria",
      "longDescription": "Posuere eu vestibulum adipiscing dignissim vehicula tristique aliquet vitae, suscipit suscipit arcu eu orci au pulvinar e, nisi mauris eti.",
      "longDescriptionUrl": "cirpria.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-414/subdomain-414",
      "roleId": "role-414",
      "subDomain": "subdomain-414",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Finibus ornare amet justo leo. Leo sit quisque cursus, a non risus quisque. Orci elit ac amet lacinia accumsan pharetra.",
      "longDescriptionUrl": "lexiconlabs.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-415/subdomain-415",
      "roleId": "role-415",
      "subDomain": "subdomain-415",
      "logo": "http://placehold.it/64x64",
      "name": "Britech",
      "longDescription": "Sollicitudin ultricies sagittis aliquet lacinia pretium vel, faucibus lacinia faucibus sapien vehicula metus. Faucibus finibus consectetur sollicitudin. Nisl turpis turpis.",
      "longDescriptionUrl": "britech.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-416/subdomain-416",
      "roleId": "role-416",
      "subDomain": "subdomain-416",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Suscipit sit at hendrerit fringilla facilisis, elementum nunc lacinia quis viverra massa dui etiam, ligula lobortis felis aenean etiam morbi.",
      "longDescriptionUrl": "qualcore.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-417/subdomain-417",
      "roleId": "role-417",
      "subDomain": "subdomain-417",
      "logo": "http://placehold.it/64x64",
      "name": "Sophis",
      "longDescription": "Ligula ipsum sagittis placerat a ac mattis felis risus gravida. Elit vestibulum posuere dolor nibh e vulputate justo curabitur nisl.",
      "longDescriptionUrl": "sophis.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-418/subdomain-418",
      "roleId": "role-418",
      "subDomain": "subdomain-418",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Ornare velit cras laoreet sagittis nulla hendrerit. Gravida diam pharetra porttitor tincidunt scelerisque condimentum orci orci. Facilisis dui condimentum au.",
      "longDescriptionUrl": "unilogic.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-419/subdomain-419",
      "roleId": "role-419",
      "subDomain": "subdomain-419",
      "logo": "http://placehold.it/64x64",
      "name": "Maxcast",
      "longDescription": "Maecenas pharetra natoque massa diam. Vestibulum etiam mattis donec ultrices a sollicitudin fringilla bibendum faucibus lobortis sollicitudin lacinia arcu blandit.",
      "longDescriptionUrl": "maxcast.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-420/subdomain-420",
      "roleId": "role-420",
      "subDomain": "subdomain-420",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Nibh vehicula justo leo sit. Aliquet quisque diam laoreet hendrerit justo e scelerisque. Imperdiet mattis mauris ipsum mauris sem nunc.",
      "longDescriptionUrl": "storex.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-421/subdomain-421",
      "roleId": "role-421",
      "subDomain": "subdomain-421",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Iaculis accumsan ornare felis suscipit lobortis faucibus sit morbi eget justo curabitur lorem, nisl arcu scelerisque elit sit adipiscing pharetra.",
      "longDescriptionUrl": "sixtysix.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-422/subdomain-422",
      "roleId": "role-422",
      "subDomain": "subdomain-422",
      "logo": "http://placehold.it/64x64",
      "name": "Acousticom",
      "longDescription": "Massa justo turpis id suscipit, imperdiet aenean pulvinar elit a eu nunc faucibus maximus condimentum quisque ultrices purus finibus natoque.",
      "longDescriptionUrl": "acousticom.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-423/subdomain-423",
      "roleId": "role-423",
      "subDomain": "subdomain-423",
      "logo": "http://placehold.it/64x64",
      "name": "FastMart",
      "longDescription": "Non elementum tortor pellentesque e eu sagittis ipsum consequat dolor ut hendrerit justo, bibendum viverra condimentum lacus, fringilla dictum ultricies.",
      "longDescriptionUrl": "fastmart.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-424/subdomain-424",
      "roleId": "role-424",
      "subDomain": "subdomain-424",
      "logo": "http://placehold.it/64x64",
      "name": "Sealine",
      "longDescription": "Ipsum elementum nunc mauris placerat aliquam e cras id nunc bibendum, erat nam auctor sem lectus, ex maximus placerat fringilla.",
      "longDescriptionUrl": "sealine.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-425/subdomain-425",
      "roleId": "role-425",
      "subDomain": "subdomain-425",
      "logo": "http://placehold.it/64x64",
      "name": "Nitrocam",
      "longDescription": "Sapien vehicula ut erat finibus faucibus ac accumsan. Auctor consequat dignissim dignissim imperdiet erat. Erat pretium sagittis suscipit quis neque.",
      "longDescriptionUrl": "nitrocam.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-426/subdomain-426",
      "roleId": "role-426",
      "subDomain": "subdomain-426",
      "logo": "http://placehold.it/64x64",
      "name": "Freecast",
      "longDescription": "Mollis lacinia hendrerit pretium gravida bibendum e, fringilla eti a ultricies auctor viverra imperdiet ac massa imperdiet turpis proin porttitor.",
      "longDescriptionUrl": "freecast.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-427/subdomain-427",
      "roleId": "role-427",
      "subDomain": "subdomain-427",
      "logo": "http://placehold.it/64x64",
      "name": "Polycore",
      "longDescription": "Natoque blandit cras vestibulum suscipit justo viverra vulputate lacinia, ornare pellentesque morbi aenean euismod sagittis accumsan tristique. Iaculis posuere maecenas.",
      "longDescriptionUrl": "polycore.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-428/subdomain-428",
      "roleId": "role-428",
      "subDomain": "subdomain-428",
      "logo": "http://placehold.it/64x64",
      "name": "CoreXTS",
      "longDescription": "Dictum lorem gravida laoreet nibh ante, faucibus placerat sodales justo dignissim, diam felis vestibulum facilisis gravida hendrerit. Eti e vulputate.",
      "longDescriptionUrl": "corexts.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-429/subdomain-429",
      "roleId": "role-429",
      "subDomain": "subdomain-429",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "Lorem lacus mattis posuere nulla vel erat dolor sollicitudin tristique quisque cras dui, consectetur dolor gravida aenean, sit vulputate augue.",
      "longDescriptionUrl": "opticast.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-430/subdomain-430",
      "roleId": "role-430",
      "subDomain": "subdomain-430",
      "logo": "http://placehold.it/64x64",
      "name": "VTGrafix",
      "longDescription": "Laoreet nisi nisi pretium dolor porttitor tincidunt dictum finibus augue. Dolor rhoncus et mollis augue tempus lacus. Massa gravida eti.",
      "longDescriptionUrl": "vtgrafix.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-431/subdomain-431",
      "roleId": "role-431",
      "subDomain": "subdomain-431",
      "logo": "http://placehold.it/64x64",
      "name": "ForeTrust",
      "longDescription": "Eti dolor at ut enim accumsan, ante mauris laoreet bibendum, imperdiet vehicula et ultricies in suscipit pulvinar leo mollis mauris.",
      "longDescriptionUrl": "foretrust.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-432/subdomain-432",
      "roleId": "role-432",
      "subDomain": "subdomain-432",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Massa mi lorem cras augue. Neque magna sem i, ultricies felis aliquam au turpis velit elementum, ac id placerat ipsum.",
      "longDescriptionUrl": "infratouch.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-433/subdomain-433",
      "roleId": "role-433",
      "subDomain": "subdomain-433",
      "logo": "http://placehold.it/64x64",
      "name": "Chromaton",
      "longDescription": "Ipsum pellentesque est purus natoque at, dignissim viverra au enim. Sodales quisque commodo faucibus e scelerisque eti sapien lobortis scelerisque.",
      "longDescriptionUrl": "chromaton.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-434/subdomain-434",
      "roleId": "role-434",
      "subDomain": "subdomain-434",
      "logo": "http://placehold.it/64x64",
      "name": "Hivemind",
      "longDescription": "Ut ipsum rhoncus lobortis vitae natoque. Eti lacinia sed natoque. Eros vehicula elit justo aliquam quisque nisi nibh viverra lorem.",
      "longDescriptionUrl": "hivemind.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-435/subdomain-435",
      "roleId": "role-435",
      "subDomain": "subdomain-435",
      "logo": "http://placehold.it/64x64",
      "name": "Thermatek",
      "longDescription": "Lectus tincidunt tincidunt condimentum ut. Eu viverra porttitor auctor morbi imperdiet viverra, commodo est sapien dignissim sollicitudin ultricies ex adipiscing.",
      "longDescriptionUrl": "thermatek.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-436/subdomain-436",
      "roleId": "role-436",
      "subDomain": "subdomain-436",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Tempus vel mollis ultricies lacinia scelerisque, i laoreet finibus lobortis purus, mattis in pretium ac. Enim imperdiet e ultricies pretium.",
      "longDescriptionUrl": "hassifix.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-437/subdomain-437",
      "roleId": "role-437",
      "subDomain": "subdomain-437",
      "logo": "http://placehold.it/64x64",
      "name": "Creatonix",
      "longDescription": "Vestibulum dignissim ex risus felis suscipit, aliquam sed viverra morbi. Posuere felis ultricies ornare orci sapien cras amet ex finibus.",
      "longDescriptionUrl": "creatonix.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-438/subdomain-438",
      "roleId": "role-438",
      "subDomain": "subdomain-438",
      "logo": "http://placehold.it/64x64",
      "name": "Pancast",
      "longDescription": "Euismod eget vestibulum pulvinar auctor mollis. Tristique sit consequat lobortis, mauris vehicula lacinia nunc ac euismod dolor. Etiam tincidunt curabitur.",
      "longDescriptionUrl": "pancast.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-439/subdomain-439",
      "roleId": "role-439",
      "subDomain": "subdomain-439",
      "logo": "http://placehold.it/64x64",
      "name": "Nitrocam",
      "longDescription": "Nulla vehicula quisque ipsum dignissim ex orci sit, maecenas nam aliquam et lacinia. Blandit a posuere mauris. Faucibus suscipit maximus.",
      "longDescriptionUrl": "nitrocam.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-440/subdomain-440",
      "roleId": "role-440",
      "subDomain": "subdomain-440",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "In at sollicitudin tristique sem, lacinia nisi erat lacus nisi dictum. Ultricies ut suscipit enim. Nam vitae eros mattis at.",
      "longDescriptionUrl": "skycenta.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-441/subdomain-441",
      "roleId": "role-441",
      "subDomain": "subdomain-441",
      "logo": "http://placehold.it/64x64",
      "name": "Viewtopia",
      "longDescription": "Suscipit lacinia pretium dolor lacus consectetur mauris. Euismod vestibulum et dolor ligula. Pellentesque ante ut auctor condimentum a velit sagittis.",
      "longDescriptionUrl": "viewtopia.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-442/subdomain-442",
      "roleId": "role-442",
      "subDomain": "subdomain-442",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Dui felis accumsan at sit sem nulla bibendum. At consequat vehicula curabitur. Nibh eti tortor porttitor vitae at magna mollis.",
      "longDescriptionUrl": "openserv.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-443/subdomain-443",
      "roleId": "role-443",
      "subDomain": "subdomain-443",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Aliquam quis tortor commodo placerat ex turpis nunc laoreet ante. Ut sapien viverra risus ac enim. Arcu augue risus consectetur.",
      "longDescriptionUrl": "solexis.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-444/subdomain-444",
      "roleId": "role-444",
      "subDomain": "subdomain-444",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Adipiscing porttitor hendrerit ultrices tempus, maecenas et ornare nisi quis maximus pharetra at risus dictum placerat proin. Sem vestibulum natoque.",
      "longDescriptionUrl": "skycenta.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-445/subdomain-445",
      "roleId": "role-445",
      "subDomain": "subdomain-445",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Proin au rhoncus mauris iaculis dignissim faucibus laoreet sapien vel lacus dolor nibh aliquet. Pellentesque aenean et maecenas et rhoncus.",
      "longDescriptionUrl": "triosys.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-446/subdomain-446",
      "roleId": "role-446",
      "subDomain": "subdomain-446",
      "logo": "http://placehold.it/64x64",
      "name": "DuoServe",
      "longDescription": "Ut ornare tincidunt vulputate enim, sed sollicitudin vel tristique. Viverra vitae purus eu nibh turpis eros, hendrerit placerat augue gravida.",
      "longDescriptionUrl": "duoserve.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-447/subdomain-447",
      "roleId": "role-447",
      "subDomain": "subdomain-447",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Auctor nulla lobortis facilisis eros. Sapien aliquet sem sapien iaculis enim. Ultrices gravida i ipsum dictum augue vitae nulla mattis.",
      "longDescriptionUrl": "helixicon.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-448/subdomain-448",
      "roleId": "role-448",
      "subDomain": "subdomain-448",
      "logo": "http://placehold.it/64x64",
      "name": "Bellgate",
      "longDescription": "Ornare nunc porttitor laoreet fringilla. Imperdiet ornare pretium tincidunt justo, pharetra commodo nisi donec felis cras velit, au sed pretium.",
      "longDescriptionUrl": "bellgate.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-449/subdomain-449",
      "roleId": "role-449",
      "subDomain": "subdomain-449",
      "logo": "http://placehold.it/64x64",
      "name": "VenStrategy",
      "longDescription": "Sodales sem sodales in placerat nibh gravida sit viverra. Faucibus eu donec lorem natoque tempus hendrerit eti pulvinar aliquet metus.",
      "longDescriptionUrl": "venstrategy.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-450/subdomain-450",
      "roleId": "role-450",
      "subDomain": "subdomain-450",
      "logo": "http://placehold.it/64x64",
      "name": "Terralabs",
      "longDescription": "Diam consequat dui proin lacus, morbi cras et sed pellentesque. Lorem ornare blandit nulla, at magna tortor au sagittis fringilla.",
      "longDescriptionUrl": "terralabs.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-451/subdomain-451",
      "roleId": "role-451",
      "subDomain": "subdomain-451",
      "logo": "http://placehold.it/64x64",
      "name": "Keysoft",
      "longDescription": "Ut aliquet etiam iaculis sagittis id auctor vulputate enim auctor ipsum scelerisque lacus maximus sem. Morbi quisque diam finibus vestibulum.",
      "longDescriptionUrl": "keysoft.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-452/subdomain-452",
      "roleId": "role-452",
      "subDomain": "subdomain-452",
      "logo": "http://placehold.it/64x64",
      "name": "Baramax",
      "longDescription": "Et sagittis nisi maximus etiam morbi i amet i tempus id augue aliquam amet. Commodo auctor gravida natoque aenean pretium.",
      "longDescriptionUrl": "baramax.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-453/subdomain-453",
      "roleId": "role-453",
      "subDomain": "subdomain-453",
      "logo": "http://placehold.it/64x64",
      "name": "Quadtek",
      "longDescription": "Diam nisl hendrerit dolor aliquet massa, cursus et hendrerit massa cursus eget. Euismod cras sit in, lorem vestibulum adipiscing lacinia.",
      "longDescriptionUrl": "quadtek.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-454/subdomain-454",
      "roleId": "role-454",
      "subDomain": "subdomain-454",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Ac in sapien laoreet dignissim elementum pulvinar ante in velit elementum ac. Viverra dui laoreet ex finibus neque quis viverra.",
      "longDescriptionUrl": "smartsystems.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-455/subdomain-455",
      "roleId": "role-455",
      "subDomain": "subdomain-455",
      "logo": "http://placehold.it/64x64",
      "name": "Viewtopia",
      "longDescription": "Scelerisque aenean adipiscing suscipit ut tortor. Mollis metus faucibus sapien, blandit pretium morbi nibh, tristique a ornare felis nisi felis.",
      "longDescriptionUrl": "viewtopia.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-456/subdomain-456",
      "roleId": "role-456",
      "subDomain": "subdomain-456",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Nam erat natoque proin sapien nisi mattis a, justo suscipit sem pretium lobortis, morbi vitae finibus curabitur. Leo dolor sollicitudin.",
      "longDescriptionUrl": "skycenta.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-457/subdomain-457",
      "roleId": "role-457",
      "subDomain": "subdomain-457",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Lorem at dignissim quis sit laoreet viverra sit, facilisis et ante cursus ultrices. At velit ac eti, faucibus vel auctor.",
      "longDescriptionUrl": "cryptonica.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-458/subdomain-458",
      "roleId": "role-458",
      "subDomain": "subdomain-458",
      "logo": "http://placehold.it/64x64",
      "name": "Dalserve",
      "longDescription": "Nunc lacus maximus imperdiet et vel justo. Maximus adipiscing pretium velit lorem lacinia aliquet pulvinar massa ornare, mauris nisl nibh.",
      "longDescriptionUrl": "dalserve.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-459/subdomain-459",
      "roleId": "role-459",
      "subDomain": "subdomain-459",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Morbi ornare sed purus hendrerit elit, pulvinar mauris velit cras lorem gravida ante. Orci faucibus elementum nisl augue iaculis quisque.",
      "longDescriptionUrl": "qualcore.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-460/subdomain-460",
      "roleId": "role-460",
      "subDomain": "subdomain-460",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Maecenas eti elit enim tortor, ex lorem sem neque. Placerat massa vulputate felis ipsum, gravida tempor lobortis nisi a amet.",
      "longDescriptionUrl": "corptek.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-461/subdomain-461",
      "roleId": "role-461",
      "subDomain": "subdomain-461",
      "logo": "http://placehold.it/64x64",
      "name": "Polycore",
      "longDescription": "Au euismod aliquet natoque lacinia diam, laoreet aenean orci porttitor. Nam orci et ante non. Maecenas cras enim mauris id.",
      "longDescriptionUrl": "polycore.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-462/subdomain-462",
      "roleId": "role-462",
      "subDomain": "subdomain-462",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Posuere adipiscing lorem imperdiet leo ligula faucibus a ultricies proin at auctor tempus quis quis ultrices maximus velit tortor pretium.",
      "longDescriptionUrl": "eluxa.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-463/subdomain-463",
      "roleId": "role-463",
      "subDomain": "subdomain-463",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Quis ex et turpis amet vehicula pulvinar. Ultrices velit velit sem ultrices. Pharetra et consequat massa euismod eti sagittis nibh.",
      "longDescriptionUrl": "triosys.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-464/subdomain-464",
      "roleId": "role-464",
      "subDomain": "subdomain-464",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Rhoncus ornare au hendrerit e sollicitudin morbi eti consequat gravida sodales vel. Cursus vulputate erat ultrices risus aliquam nulla suscipit.",
      "longDescriptionUrl": "proline.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-465/subdomain-465",
      "roleId": "role-465",
      "subDomain": "subdomain-465",
      "logo": "http://placehold.it/64x64",
      "name": "Galcom",
      "longDescription": "In est aenean suscipit accumsan viverra euismod nibh neque. Eget est tortor dictum, consequat mauris vel hendrerit hendrerit massa auctor.",
      "longDescriptionUrl": "galcom.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-466/subdomain-466",
      "roleId": "role-466",
      "subDomain": "subdomain-466",
      "logo": "http://placehold.it/64x64",
      "name": "NitroSystems",
      "longDescription": "Sed posuere sollicitudin eu ex in. In elementum mi neque, maximus lobortis condimentum dictum dictum amet, quis consectetur viverra vel.",
      "longDescriptionUrl": "nitrosystems.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-467/subdomain-467",
      "roleId": "role-467",
      "subDomain": "subdomain-467",
      "logo": "http://placehold.it/64x64",
      "name": "Pancast",
      "longDescription": "Hendrerit vehicula sagittis mauris hendrerit. At in pretium bibendum. Mattis nulla turpis nam, iaculis enim turpis auctor maximus suscipit lorem.",
      "longDescriptionUrl": "pancast.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-468/subdomain-468",
      "roleId": "role-468",
      "subDomain": "subdomain-468",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Pulvinar velit porttitor pellentesque risus tempus porttitor, natoque tristique cursus nibh pharetra maximus, posuere scelerisque et ornare ex imperdiet condimentum.",
      "longDescriptionUrl": "corptek.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-469/subdomain-469",
      "roleId": "role-469",
      "subDomain": "subdomain-469",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Sit pharetra mattis lacus est elementum arcu, mollis vestibulum proin tincidunt. Massa placerat proin magna elit. Amet nunc mollis lobortis.",
      "longDescriptionUrl": "thermolock.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-470/subdomain-470",
      "roleId": "role-470",
      "subDomain": "subdomain-470",
      "logo": "http://placehold.it/64x64",
      "name": "Quadtek",
      "longDescription": "Morbi enim posuere augue sed enim cras. Morbi gravida vulputate vitae velit. Mauris proin cras pellentesque tempor mollis faucibus nisl.",
      "longDescriptionUrl": "quadtek.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-471/subdomain-471",
      "roleId": "role-471",
      "subDomain": "subdomain-471",
      "logo": "http://placehold.it/64x64",
      "name": "Haltheon",
      "longDescription": "Etiam maecenas vehicula finibus consequat e, augue nisi lectus adipiscing mattis sodales eu euismod pharetra donec ligula ornare ornare turpis.",
      "longDescriptionUrl": "haltheon.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-472/subdomain-472",
      "roleId": "role-472",
      "subDomain": "subdomain-472",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Imperdiet ex velit est sed hendrerit fringilla. Rhoncus metus adipiscing tempus quisque, aenean e accumsan adipiscing laoreet, turpis sapien diam.",
      "longDescriptionUrl": "triosys.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-473/subdomain-473",
      "roleId": "role-473",
      "subDomain": "subdomain-473",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "Facilisis nisl tempor dignissim mauris, leo sollicitudin sapien proin. Accumsan elementum laoreet scelerisque. Facilisis dignissim massa i scelerisque pellentesque lectus.",
      "longDescriptionUrl": "westgate.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-474/subdomain-474",
      "roleId": "role-474",
      "subDomain": "subdomain-474",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Faucibus eget donec pretium massa. Quis nunc vel hendrerit elementum pretium dignissim vel, sollicitudin ornare aliquam finibus lobortis eu consectetur.",
      "longDescriptionUrl": "proline.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-475/subdomain-475",
      "roleId": "role-475",
      "subDomain": "subdomain-475",
      "logo": "http://placehold.it/64x64",
      "name": "FastMart",
      "longDescription": "Nibh nunc risus at consequat. Velit eros pulvinar ex, faucibus lacinia curabitur porttitor. Aliquet vestibulum dignissim porttitor laoreet placerat consequat.",
      "longDescriptionUrl": "fastmart.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-476/subdomain-476",
      "roleId": "role-476",
      "subDomain": "subdomain-476",
      "logo": "http://placehold.it/64x64",
      "name": "CoreXTS",
      "longDescription": "A diam vitae blandit arcu. Mi est sed est justo ornare iaculis. Metus id turpis vulputate e. Nibh consectetur mollis.",
      "longDescriptionUrl": "corexts.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-477/subdomain-477",
      "roleId": "role-477",
      "subDomain": "subdomain-477",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Cras mi in mauris erat lacus neque. Auctor dignissim augue ex. Tortor e enim dignissim. Euismod nisl consequat sem maecenas.",
      "longDescriptionUrl": "fortyfour.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-478/subdomain-478",
      "roleId": "role-478",
      "subDomain": "subdomain-478",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Posuere aenean diam nisi at lacus et lobortis. Lacinia lacinia lectus tortor dictum hendrerit ipsum consequat. Scelerisque ante purus faucibus.",
      "longDescriptionUrl": "celmax.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-479/subdomain-479",
      "roleId": "role-479",
      "subDomain": "subdomain-479",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "Magna pulvinar pretium dignissim dui rhoncus nisl. Augue quisque commodo lorem massa lacinia. Eti lacus magna etiam. Cras justo eu.",
      "longDescriptionUrl": "westgate.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-480/subdomain-480",
      "roleId": "role-480",
      "subDomain": "subdomain-480",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Nunc curabitur lorem orci morbi. Etiam rhoncus nulla risus nisl elit. Pharetra consectetur facilisis donec, sit tortor velit orci ut.",
      "longDescriptionUrl": "helixicon.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-481/subdomain-481",
      "roleId": "role-481",
      "subDomain": "subdomain-481",
      "logo": "http://placehold.it/64x64",
      "name": "DuoServe",
      "longDescription": "Tempus sit finibus proin vel eti eu diam donec at cras metus. Sollicitudin tincidunt eu lobortis dolor condimentum ipsum elit.",
      "longDescriptionUrl": "duoserve.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-482/subdomain-482",
      "roleId": "role-482",
      "subDomain": "subdomain-482",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Hendrerit sagittis tempor diam viverra ornare. Tempor nam aliquet fringilla, accumsan maecenas condimentum nisl sit. Ligula laoreet nibh pellentesque euismod.",
      "longDescriptionUrl": "thermolock.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-483/subdomain-483",
      "roleId": "role-483",
      "subDomain": "subdomain-483",
      "logo": "http://placehold.it/64x64",
      "name": "PeerSys",
      "longDescription": "A eget in adipiscing dui. Velit sed auctor tortor quisque sed et. Pulvinar elit mauris blandit eti elementum mattis lectus.",
      "longDescriptionUrl": "peersys.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-484/subdomain-484",
      "roleId": "role-484",
      "subDomain": "subdomain-484",
      "logo": "http://placehold.it/64x64",
      "name": "Galcom",
      "longDescription": "Ex vitae etiam condimentum gravida, au cursus pellentesque i, eros laoreet posuere in. Nibh bibendum eu quisque ipsum mattis aliquet.",
      "longDescriptionUrl": "galcom.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-485/subdomain-485",
      "roleId": "role-485",
      "subDomain": "subdomain-485",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Pharetra sagittis blandit sodales lacus sagittis mauris cras nunc commodo lacinia, commodo finibus laoreet maximus. Ornare scelerisque auctor placerat eti.",
      "longDescriptionUrl": "thermolock.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-486/subdomain-486",
      "roleId": "role-486",
      "subDomain": "subdomain-486",
      "logo": "http://placehold.it/64x64",
      "name": "Anaplex",
      "longDescription": "Sed e pharetra e non, ut consectetur tincidunt accumsan sapien justo sem velit accumsan a condimentum. Scelerisque ultricies eti maecenas.",
      "longDescriptionUrl": "anaplex.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-487/subdomain-487",
      "roleId": "role-487",
      "subDomain": "subdomain-487",
      "logo": "http://placehold.it/64x64",
      "name": "Nitrocam",
      "longDescription": "Gravida lorem cras vestibulum hendrerit suscipit pulvinar elit amet sodales at amet. Turpis commodo tristique au, justo quisque laoreet i.",
      "longDescriptionUrl": "nitrocam.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-488/subdomain-488",
      "roleId": "role-488",
      "subDomain": "subdomain-488",
      "logo": "http://placehold.it/64x64",
      "name": "Hivemind",
      "longDescription": "Faucibus eget arcu pellentesque proin, pretium eti elementum curabitur lobortis nibh mauris ipsum risus mi mattis. I pulvinar at dignissim.",
      "longDescriptionUrl": "hivemind.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-489/subdomain-489",
      "roleId": "role-489",
      "subDomain": "subdomain-489",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Elementum aliquam rhoncus dui nibh. Aliquet velit ornare hendrerit natoque, dictum au lacinia cras purus. E in imperdiet condimentum nulla.",
      "longDescriptionUrl": "proline.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-490/subdomain-490",
      "roleId": "role-490",
      "subDomain": "subdomain-490",
      "logo": "http://placehold.it/64x64",
      "name": "Pancast",
      "longDescription": "Suscipit natoque amet ultricies accumsan ante elit pellentesque. Suscipit ex tortor et viverra mi euismod enim purus gravida quis sed.",
      "longDescriptionUrl": "pancast.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-491/subdomain-491",
      "roleId": "role-491",
      "subDomain": "subdomain-491",
      "logo": "http://placehold.it/64x64",
      "name": "CoreRobotics",
      "longDescription": "Hendrerit lacinia ante justo et vestibulum elementum consectetur, iaculis justo sit pulvinar mauris posuere, erat cras maximus dolor enim risus.",
      "longDescriptionUrl": "corerobotics.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-492/subdomain-492",
      "roleId": "role-492",
      "subDomain": "subdomain-492",
      "logo": "http://placehold.it/64x64",
      "name": "MediaDime",
      "longDescription": "Laoreet ornare felis et etiam eti, non elit risus morbi sollicitudin dui, felis risus quis commodo magna, tincidunt condimentum in.",
      "longDescriptionUrl": "mediadime.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-493/subdomain-493",
      "roleId": "role-493",
      "subDomain": "subdomain-493",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Vehicula arcu sapien blandit diam aliquet magna. Eu arcu e metus. Diam accumsan orci est augue lacus. Donec felis augue.",
      "longDescriptionUrl": "storex.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-494/subdomain-494",
      "roleId": "role-494",
      "subDomain": "subdomain-494",
      "logo": "http://placehold.it/64x64",
      "name": "Terralabs",
      "longDescription": "Cras scelerisque etiam dictum sit commodo, sed aenean ultrices faucibus curabitur augue ac proin metus hendrerit sapien orci proin auctor.",
      "longDescriptionUrl": "terralabs.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-495/subdomain-495",
      "roleId": "role-495",
      "subDomain": "subdomain-495",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Vitae non elementum commodo condimentum id ex pretium. Sit aliquet ipsum accumsan rhoncus accumsan, nisl ante pulvinar in mi at.",
      "longDescriptionUrl": "smartsystems.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-496/subdomain-496",
      "roleId": "role-496",
      "subDomain": "subdomain-496",
      "logo": "http://placehold.it/64x64",
      "name": "Citisys",
      "longDescription": "Nulla aenean id vestibulum mi faucibus. Faucibus ante sem sed imperdiet. Cras metus scelerisque metus dictum vitae et e tempus.",
      "longDescriptionUrl": "citisys.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-497/subdomain-497",
      "roleId": "role-497",
      "subDomain": "subdomain-497",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Aliquet sed fringilla nibh curabitur dolor et vehicula eget vestibulum dolor ac nisl. Ultricies et sit dui mollis imperdiet eget.",
      "longDescriptionUrl": "triosys.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-498/subdomain-498",
      "roleId": "role-498",
      "subDomain": "subdomain-498",
      "logo": "http://placehold.it/64x64",
      "name": "Sophis",
      "longDescription": "Cursus felis facilisis quisque ipsum eu, proin non scelerisque sit elementum. Aenean purus nam curabitur, leo lobortis erat magna mollis.",
      "longDescriptionUrl": "sophis.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-499/subdomain-499",
      "roleId": "role-499",
      "subDomain": "subdomain-499",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Id lorem maecenas ipsum maecenas. Sodales lacinia lacus mauris ultricies, justo curabitur pharetra maximus. Sollicitudin gravida vestibulum vehicula sollicitudin faucibus.",
      "longDescriptionUrl": "hassifix.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-500/subdomain-500",
      "roleId": "role-500",
      "subDomain": "subdomain-500",
      "logo": "http://placehold.it/64x64",
      "name": "Baramax",
      "longDescription": "Ante e lacinia amet consectetur cras fringilla iaculis cursus non, massa ultrices ipsum neque lacus morbi scelerisque. Amet massa ante.",
      "longDescriptionUrl": "baramax.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-501/subdomain-501",
      "roleId": "role-501",
      "subDomain": "subdomain-501",
      "logo": "http://placehold.it/64x64",
      "name": "Nitrocam",
      "longDescription": "Etiam ut placerat lobortis gravida pellentesque, nunc suscipit laoreet eu mattis non posuere, nam mi sed pellentesque. Magna vitae eti.",
      "longDescriptionUrl": "nitrocam.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-502/subdomain-502",
      "roleId": "role-502",
      "subDomain": "subdomain-502",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Accumsan morbi nulla ut pulvinar posuere proin, arcu maximus tortor faucibus id lacinia vel sed, eu sed nulla nunc imperdiet.",
      "longDescriptionUrl": "infratouch.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-503/subdomain-503",
      "roleId": "role-503",
      "subDomain": "subdomain-503",
      "logo": "http://placehold.it/64x64",
      "name": "Britech",
      "longDescription": "Vehicula leo accumsan ultricies vestibulum, gravida id auctor vestibulum. Pharetra consectetur pharetra elit etiam aliquam et donec quisque nisl nibh.",
      "longDescriptionUrl": "britech.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-504/subdomain-504",
      "roleId": "role-504",
      "subDomain": "subdomain-504",
      "logo": "http://placehold.it/64x64",
      "name": "Sealine",
      "longDescription": "Enim tortor orci finibus consequat. Justo finibus tincidunt orci vitae sagittis. Purus consequat amet magna maximus, facilisis velit finibus magna.",
      "longDescriptionUrl": "sealine.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-505/subdomain-505",
      "roleId": "role-505",
      "subDomain": "subdomain-505",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Sit dictum cursus dignissim risus. Eti turpis mi diam massa ex eget, tortor bibendum in mattis massa curabitur condimentum ligula.",
      "longDescriptionUrl": "helixicon.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-506/subdomain-506",
      "roleId": "role-506",
      "subDomain": "subdomain-506",
      "logo": "http://placehold.it/64x64",
      "name": "Sealine",
      "longDescription": "Cursus dui suscipit i faucibus cursus posuere gravida morbi, blandit a at pulvinar. Pellentesque sapien vehicula natoque. Sem gravida auctor.",
      "longDescriptionUrl": "sealine.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-507/subdomain-507",
      "roleId": "role-507",
      "subDomain": "subdomain-507",
      "logo": "http://placehold.it/64x64",
      "name": "Galcom",
      "longDescription": "Elit est pretium finibus neque posuere proin ipsum scelerisque mattis. Nulla morbi magna lorem amet aenean, orci mauris facilisis mauris.",
      "longDescriptionUrl": "galcom.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-508/subdomain-508",
      "roleId": "role-508",
      "subDomain": "subdomain-508",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Massa neque nulla pulvinar consequat imperdiet nibh id. Amet mauris sollicitudin viverra neque curabitur pretium et. Etiam gravida scelerisque sodales.",
      "longDescriptionUrl": "qualcore.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-509/subdomain-509",
      "roleId": "role-509",
      "subDomain": "subdomain-509",
      "logo": "http://placehold.it/64x64",
      "name": "Kancom",
      "longDescription": "Tortor sollicitudin accumsan vitae tortor turpis eros, curabitur maximus fringilla pulvinar commodo dignissim. Lacus est maximus dictum morbi augue tempor.",
      "longDescriptionUrl": "kancom.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-510/subdomain-510",
      "roleId": "role-510",
      "subDomain": "subdomain-510",
      "logo": "http://placehold.it/64x64",
      "name": "Chromaton",
      "longDescription": "Lobortis dignissim auctor euismod aenean consequat iaculis ultricies vel scelerisque tempor euismod, enim maximus bibendum tristique ligula a ornare finibus.",
      "longDescriptionUrl": "chromaton.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-511/subdomain-511",
      "roleId": "role-511",
      "subDomain": "subdomain-511",
      "logo": "http://placehold.it/64x64",
      "name": "MultiLingua",
      "longDescription": "Eros gravida accumsan id nisl ligula felis iaculis lacinia viverra eros. E lorem elit nam lacus. Sodales quisque scelerisque orci.",
      "longDescriptionUrl": "multilingua.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-512/subdomain-512",
      "roleId": "role-512",
      "subDomain": "subdomain-512",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Orci au donec ultrices rhoncus vestibulum ut adipiscing etiam, eget purus lacus mollis. Augue non cursus i. Vel maecenas tortor.",
      "longDescriptionUrl": "sixtysix.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-513/subdomain-513",
      "roleId": "role-513",
      "subDomain": "subdomain-513",
      "logo": "http://placehold.it/64x64",
      "name": "Dalserve",
      "longDescription": "Vestibulum faucibus e ultricies id. Pharetra tristique neque rhoncus natoque felis lacus enim arcu ipsum, pharetra lacinia etiam dignissim bibendum.",
      "longDescriptionUrl": "dalserve.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-514/subdomain-514",
      "roleId": "role-514",
      "subDomain": "subdomain-514",
      "logo": "http://placehold.it/64x64",
      "name": "Coolinga",
      "longDescription": "Sit hendrerit sem aliquam mollis viverra pellentesque. Non etiam mattis at. Ultrices neque facilisis vestibulum. Accumsan scelerisque sollicitudin a sollicitudin.",
      "longDescriptionUrl": "coolinga.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-515/subdomain-515",
      "roleId": "role-515",
      "subDomain": "subdomain-515",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Massa euismod maecenas elementum quis quisque non eu mi, metus iaculis posuere pharetra enim lacinia blandit faucibus posuere blandit mi.",
      "longDescriptionUrl": "proline.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-516/subdomain-516",
      "roleId": "role-516",
      "subDomain": "subdomain-516",
      "logo": "http://placehold.it/64x64",
      "name": "Ulogica",
      "longDescription": "Sapien hendrerit ut tortor curabitur. Eget felis finibus viverra massa finibus. Erat purus sed enim sollicitudin vulputate mi vehicula in.",
      "longDescriptionUrl": "ulogica.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-517/subdomain-517",
      "roleId": "role-517",
      "subDomain": "subdomain-517",
      "logo": "http://placehold.it/64x64",
      "name": "Thermatek",
      "longDescription": "Sollicitudin magna ut metus magna ipsum. Consectetur dui nunc maecenas eros. Pretium nisi tortor lacinia morbi etiam. Ex maximus neque.",
      "longDescriptionUrl": "thermatek.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-518/subdomain-518",
      "roleId": "role-518",
      "subDomain": "subdomain-518",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Bibendum aliquet au posuere hendrerit blandit faucibus sollicitudin. Lacus auctor posuere vestibulum arcu accumsan ante. Orci aenean tempus ultricies augue.",
      "longDescriptionUrl": "fastfreight.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-519/subdomain-519",
      "roleId": "role-519",
      "subDomain": "subdomain-519",
      "logo": "http://placehold.it/64x64",
      "name": "Citisys",
      "longDescription": "Aliquet condimentum i porttitor diam ut turpis. Placerat posuere bibendum aenean. Leo finibus augue tortor, lorem nunc pellentesque neque morbi.",
      "longDescriptionUrl": "citisys.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-520/subdomain-520",
      "roleId": "role-520",
      "subDomain": "subdomain-520",
      "logo": "http://placehold.it/64x64",
      "name": "StrategyLine",
      "longDescription": "Justo cursus id at ac. Eget proin lacinia enim id sed arcu. Pellentesque elementum diam accumsan, pretium mi a curabitur.",
      "longDescriptionUrl": "strategyline.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-521/subdomain-521",
      "roleId": "role-521",
      "subDomain": "subdomain-521",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Laoreet a turpis aenean commodo adipiscing donec, elit ac nisi scelerisque sed velit quisque turpis, lacinia nulla non sed faucibus.",
      "longDescriptionUrl": "zatheon.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-522/subdomain-522",
      "roleId": "role-522",
      "subDomain": "subdomain-522",
      "logo": "http://placehold.it/64x64",
      "name": "ForeTrust",
      "longDescription": "Mi suscipit vel sem magna finibus. Felis facilisis aliquet suscipit sed fringilla. Ante vulputate nisl fringilla tincidunt ultrices maximus eti.",
      "longDescriptionUrl": "foretrust.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-523/subdomain-523",
      "roleId": "role-523",
      "subDomain": "subdomain-523",
      "logo": "http://placehold.it/64x64",
      "name": "DuoServe",
      "longDescription": "Dictum auctor tempus scelerisque consequat. Mattis ultrices consequat euismod. Erat ornare facilisis adipiscing donec nam ultricies lacinia tristique vestibulum eget.",
      "longDescriptionUrl": "duoserve.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-524/subdomain-524",
      "roleId": "role-524",
      "subDomain": "subdomain-524",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Ex lacus est faucibus gravida donec mollis i sollicitudin lectus tristique bibendum lacinia. Et placerat donec pharetra, viverra hendrerit eu.",
      "longDescriptionUrl": "sunopia.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-525/subdomain-525",
      "roleId": "role-525",
      "subDomain": "subdomain-525",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Condimentum id scelerisque risus mollis at tincidunt ex. Sem facilisis curabitur tincidunt, nam laoreet cras imperdiet et dignissim amet risus.",
      "longDescriptionUrl": "connic.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-526/subdomain-526",
      "roleId": "role-526",
      "subDomain": "subdomain-526",
      "logo": "http://placehold.it/64x64",
      "name": "Cryosoft",
      "longDescription": "Erat pretium ipsum blandit blandit amet, metus nulla nam enim lectus. Pulvinar tortor nisi ex eget non erat sit velit.",
      "longDescriptionUrl": "cryosoft.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-527/subdomain-527",
      "roleId": "role-527",
      "subDomain": "subdomain-527",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Massa sapien iaculis condimentum faucibus vestibulum. Purus proin ac laoreet iaculis finibus pulvinar mattis consequat. Vitae ut sagittis elit arcu.",
      "longDescriptionUrl": "westercom.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-528/subdomain-528",
      "roleId": "role-528",
      "subDomain": "subdomain-528",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "Tortor pulvinar enim ipsum sem, mi est tristique maximus est. Lacinia id sem dictum, aliquet enim lacus imperdiet sem auctor.",
      "longDescriptionUrl": "opticast.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-529/subdomain-529",
      "roleId": "role-529",
      "subDomain": "subdomain-529",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Nunc quisque justo nam rhoncus. Vitae maximus sit vestibulum. Tristique donec scelerisque e in vestibulum. Eti cras tristique quis sapien.",
      "longDescriptionUrl": "proline.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-530/subdomain-530",
      "roleId": "role-530",
      "subDomain": "subdomain-530",
      "logo": "http://placehold.it/64x64",
      "name": "Kancom",
      "longDescription": "Dui ultricies ligula mollis bibendum lacinia finibus accumsan vitae gravida, id placerat aenean suscipit in. Pulvinar maecenas laoreet bibendum enim.",
      "longDescriptionUrl": "kancom.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-531/subdomain-531",
      "roleId": "role-531",
      "subDomain": "subdomain-531",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Enim posuere facilisis ex pretium, sed posuere euismod tincidunt curabitur, mi et mi au, ut tempor massa felis neque diam.",
      "longDescriptionUrl": "hassifix.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-532/subdomain-532",
      "roleId": "role-532",
      "subDomain": "subdomain-532",
      "logo": "http://placehold.it/64x64",
      "name": "Haltheon",
      "longDescription": "Suscipit placerat tempor placerat faucibus vulputate, vehicula nunc quis eu blandit ac e tempus eros, cras ligula dolor arcu bibendum.",
      "longDescriptionUrl": "haltheon.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-533/subdomain-533",
      "roleId": "role-533",
      "subDomain": "subdomain-533",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Purus consequat augue commodo rhoncus tincidunt ut felis vitae. Eros fringilla mauris placerat finibus arcu. Placerat sed tincidunt i vitae.",
      "longDescriptionUrl": "skycenta.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-534/subdomain-534",
      "roleId": "role-534",
      "subDomain": "subdomain-534",
      "logo": "http://placehold.it/64x64",
      "name": "Chromaton",
      "longDescription": "Ipsum auctor natoque e orci ligula justo finibus, faucibus eti elementum quisque commodo mollis. Posuere id purus magna nibh elementum.",
      "longDescriptionUrl": "chromaton.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-535/subdomain-535",
      "roleId": "role-535",
      "subDomain": "subdomain-535",
      "logo": "http://placehold.it/64x64",
      "name": "Hypervision",
      "longDescription": "Adipiscing ultrices non pellentesque sem dui. Dolor euismod lectus dui neque. Iaculis tincidunt iaculis nisl massa pulvinar, euismod pretium finibus.",
      "longDescriptionUrl": "hypervision.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-536/subdomain-536",
      "roleId": "role-536",
      "subDomain": "subdomain-536",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Lacinia mattis in lorem pellentesque proin id aliquam etiam. Sit posuere euismod cursus, sem mattis ipsum curabitur sem erat finibus.",
      "longDescriptionUrl": "sunopia.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-537/subdomain-537",
      "roleId": "role-537",
      "subDomain": "subdomain-537",
      "logo": "http://placehold.it/64x64",
      "name": "VTGrafix",
      "longDescription": "Adipiscing eros dolor erat sit vulputate lectus blandit adipiscing. Quis elit ex rhoncus purus eget ornare tincidunt. Lobortis accumsan laoreet.",
      "longDescriptionUrl": "vtgrafix.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-538/subdomain-538",
      "roleId": "role-538",
      "subDomain": "subdomain-538",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Orci velit faucibus elementum arcu sodales hendrerit diam eget velit aliquet, eros sed viverra nam. Donec vestibulum justo lectus augue.",
      "longDescriptionUrl": "terrasys.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-539/subdomain-539",
      "roleId": "role-539",
      "subDomain": "subdomain-539",
      "logo": "http://placehold.it/64x64",
      "name": "Forecore",
      "longDescription": "Eu est ut diam vehicula vitae consequat nisl. Ultrices i consequat orci mauris. Quis enim condimentum nisi purus aliquet proin.",
      "longDescriptionUrl": "forecore.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-540/subdomain-540",
      "roleId": "role-540",
      "subDomain": "subdomain-540",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Augue etiam aliquet proin vel. Diam aenean commodo mollis. Bibendum felis at morbi enim morbi gravida laoreet mollis felis consectetur.",
      "longDescriptionUrl": "triosys.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-541/subdomain-541",
      "roleId": "role-541",
      "subDomain": "subdomain-541",
      "logo": "http://placehold.it/64x64",
      "name": "MediaDime",
      "longDescription": "Tincidunt e nulla eu magna. Pretium tincidunt velit tempor nisl ultrices. Metus lacinia donec ex tincidunt consequat nunc sed viverra.",
      "longDescriptionUrl": "mediadime.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-542/subdomain-542",
      "roleId": "role-542",
      "subDomain": "subdomain-542",
      "logo": "http://placehold.it/64x64",
      "name": "Hypervision",
      "longDescription": "Ante tempus leo dictum purus justo ipsum tortor lacus dictum, au fringilla sagittis sagittis au id. Enim accumsan sem et.",
      "longDescriptionUrl": "hypervision.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-543/subdomain-543",
      "roleId": "role-543",
      "subDomain": "subdomain-543",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Iaculis nam erat non felis ultrices aenean velit nulla pretium quis. Turpis au ultricies nisl, sapien lorem condimentum ligula nam.",
      "longDescriptionUrl": "helixicon.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-544/subdomain-544",
      "roleId": "role-544",
      "subDomain": "subdomain-544",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Placerat sit mollis amet ante e diam scelerisque ligula vulputate, ut eros sapien au, nunc eu lacus eros vulputate felis.",
      "longDescriptionUrl": "storex.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-545/subdomain-545",
      "roleId": "role-545",
      "subDomain": "subdomain-545",
      "logo": "http://placehold.it/64x64",
      "name": "Cameratek",
      "longDescription": "Justo curabitur elit ut cras consectetur cras. Faucibus curabitur maximus velit. Id condimentum aliquam bibendum turpis sollicitudin sem leo mauris.",
      "longDescriptionUrl": "cameratek.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-546/subdomain-546",
      "roleId": "role-546",
      "subDomain": "subdomain-546",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Proin ligula condimentum tempus sem justo lacus mattis. Lectus elit nibh auctor imperdiet dui ante mattis, ultrices risus elementum mollis.",
      "longDescriptionUrl": "unilogic.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-547/subdomain-547",
      "roleId": "role-547",
      "subDomain": "subdomain-547",
      "logo": "http://placehold.it/64x64",
      "name": "CoreXTS",
      "longDescription": "Tortor et pulvinar augue aenean. Tristique vel au lacinia iaculis, vel accumsan enim lacus felis ante maximus eget augue curabitur.",
      "longDescriptionUrl": "corexts.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-548/subdomain-548",
      "roleId": "role-548",
      "subDomain": "subdomain-548",
      "logo": "http://placehold.it/64x64",
      "name": "Tecomix",
      "longDescription": "Etiam faucibus amet dictum mi sollicitudin neque condimentum in. Rhoncus lobortis sagittis felis lacus scelerisque pretium aliquet au sed quisque.",
      "longDescriptionUrl": "tecomix.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-549/subdomain-549",
      "roleId": "role-549",
      "subDomain": "subdomain-549",
      "logo": "http://placehold.it/64x64",
      "name": "Terralabs",
      "longDescription": "Tempus lobortis nulla sollicitudin hendrerit. Blandit aliquam mattis nulla ornare consequat ultricies e nulla. Felis condimentum rhoncus iaculis donec at.",
      "longDescriptionUrl": "terralabs.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-550/subdomain-550",
      "roleId": "role-550",
      "subDomain": "subdomain-550",
      "logo": "http://placehold.it/64x64",
      "name": "QuadNet",
      "longDescription": "Gravida lectus imperdiet eu massa maximus ipsum, aliquam e gravida porttitor pharetra. Pretium mauris neque cras condimentum consectetur pulvinar ultrices.",
      "longDescriptionUrl": "quadnet.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-551/subdomain-551",
      "roleId": "role-551",
      "subDomain": "subdomain-551",
      "logo": "http://placehold.it/64x64",
      "name": "Tomiatech",
      "longDescription": "Sodales orci scelerisque e tristique ipsum aliquet sed at. Accumsan porttitor adipiscing auctor curabitur curabitur felis sit id at pellentesque.",
      "longDescriptionUrl": "tomiatech.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-552/subdomain-552",
      "roleId": "role-552",
      "subDomain": "subdomain-552",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Vitae enim metus porttitor nibh. Adipiscing ipsum cursus sagittis quisque quisque vitae neque non ultricies maecenas orci curabitur consectetur ante.",
      "longDescriptionUrl": "hassifix.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-553/subdomain-553",
      "roleId": "role-553",
      "subDomain": "subdomain-553",
      "logo": "http://placehold.it/64x64",
      "name": "Maxcast",
      "longDescription": "Nulla pulvinar ac elementum scelerisque neque fringilla posuere ultricies non condimentum nibh lorem i, vulputate amet pharetra pharetra erat augue.",
      "longDescriptionUrl": "maxcast.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-554/subdomain-554",
      "roleId": "role-554",
      "subDomain": "subdomain-554",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Faucibus nibh dictum turpis neque. Maximus e aliquam sem. Sagittis est sem nunc orci, aenean bibendum porttitor dignissim leo et.",
      "longDescriptionUrl": "skycenta.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-555/subdomain-555",
      "roleId": "role-555",
      "subDomain": "subdomain-555",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Ligula bibendum tristique magna amet, rhoncus dolor nulla justo eti tristique mi. Lacinia ante au quis. Elit faucibus fringilla ligula.",
      "longDescriptionUrl": "smartsystems.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-556/subdomain-556",
      "roleId": "role-556",
      "subDomain": "subdomain-556",
      "logo": "http://placehold.it/64x64",
      "name": "Bellgate",
      "longDescription": "Sit aliquet ac mi faucibus condimentum consectetur, vitae cursus sapien laoreet sollicitudin nisl pulvinar mauris condimentum lobortis, sem auctor ornare.",
      "longDescriptionUrl": "bellgate.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-557/subdomain-557",
      "roleId": "role-557",
      "subDomain": "subdomain-557",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Tincidunt euismod justo velit blandit eros risus, augue morbi cursus imperdiet, pellentesque dictum commodo ultrices felis tincidunt nam auctor elit.",
      "longDescriptionUrl": "infratouch.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-558/subdomain-558",
      "roleId": "role-558",
      "subDomain": "subdomain-558",
      "logo": "http://placehold.it/64x64",
      "name": "Protheon",
      "longDescription": "Dignissim purus placerat vel proin justo aliquet lacus. Arcu donec lobortis dictum id dui. Suscipit felis maximus a finibus neque.",
      "longDescriptionUrl": "protheon.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-559/subdomain-559",
      "roleId": "role-559",
      "subDomain": "subdomain-559",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Enim tristique et aliquet ex auctor velit. Et natoque lobortis tempus aenean felis velit, neque lobortis diam eros aliquet consectetur.",
      "longDescriptionUrl": "proline.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-560/subdomain-560",
      "roleId": "role-560",
      "subDomain": "subdomain-560",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Est est condimentum consectetur sollicitudin elit, eu bibendum aenean aliquam facilisis et tempor quisque sed eti ut magna nunc leo.",
      "longDescriptionUrl": "openserv.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-561/subdomain-561",
      "roleId": "role-561",
      "subDomain": "subdomain-561",
      "logo": "http://placehold.it/64x64",
      "name": "Viewtopia",
      "longDescription": "Facilisis id consectetur ante vulputate consequat, sem lectus pharetra nam adipiscing aliquam sed in. Placerat nibh condimentum nam pretium aliquam.",
      "longDescriptionUrl": "viewtopia.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-562/subdomain-562",
      "roleId": "role-562",
      "subDomain": "subdomain-562",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Natoque pulvinar nisl commodo tincidunt ante bibendum nulla, lacinia mattis maecenas risus porttitor lobortis vehicula tempus vulputate sollicitudin scelerisque tempus.",
      "longDescriptionUrl": "skycenta.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-563/subdomain-563",
      "roleId": "role-563",
      "subDomain": "subdomain-563",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Consectetur tristique purus magna aenean tempor, dolor scelerisque mollis nisi, justo ligula vehicula sodales etiam, quisque vulputate vehicula dignissim vitae.",
      "longDescriptionUrl": "celmax.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-564/subdomain-564",
      "roleId": "role-564",
      "subDomain": "subdomain-564",
      "logo": "http://placehold.it/64x64",
      "name": "Protheon",
      "longDescription": "Finibus eget imperdiet ipsum pretium pellentesque quis etiam lorem sagittis in, quis iaculis quisque tincidunt scelerisque rhoncus. E erat viverra.",
      "longDescriptionUrl": "protheon.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-565/subdomain-565",
      "roleId": "role-565",
      "subDomain": "subdomain-565",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Auctor adipiscing suscipit amet nisi. Ut in donec ipsum tincidunt lorem eget sagittis commodo. Finibus dignissim metus maecenas sollicitudin proin.",
      "longDescriptionUrl": "qualcore.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-566/subdomain-566",
      "roleId": "role-566",
      "subDomain": "subdomain-566",
      "logo": "http://placehold.it/64x64",
      "name": "ForeTrust",
      "longDescription": "A amet e orci at. Natoque pulvinar ultrices nunc elit. Id laoreet maecenas vestibulum sodales accumsan mauris. Mi arcu velit.",
      "longDescriptionUrl": "foretrust.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-567/subdomain-567",
      "roleId": "role-567",
      "subDomain": "subdomain-567",
      "logo": "http://placehold.it/64x64",
      "name": "Tomiatech",
      "longDescription": "Mollis vehicula sem cras dictum, aenean fringilla lobortis lectus ultrices etiam mattis metus. Mauris gravida quis dui laoreet augue gravida.",
      "longDescriptionUrl": "tomiatech.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-568/subdomain-568",
      "roleId": "role-568",
      "subDomain": "subdomain-568",
      "logo": "http://placehold.it/64x64",
      "name": "Polycore",
      "longDescription": "Dictum dui tempus lacinia lacinia id accumsan auctor mauris aliquam elementum rhoncus consectetur, ultrices suscipit natoque amet rhoncus magna suscipit.",
      "longDescriptionUrl": "polycore.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-569/subdomain-569",
      "roleId": "role-569",
      "subDomain": "subdomain-569",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Tempus tortor mattis pharetra nisi lorem ligula a, donec ut lobortis iaculis sapien finibus placerat arcu justo vehicula lacinia rhoncus.",
      "longDescriptionUrl": "infratouch.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-570/subdomain-570",
      "roleId": "role-570",
      "subDomain": "subdomain-570",
      "logo": "http://placehold.it/64x64",
      "name": "Dynalab",
      "longDescription": "Cursus fringilla non auctor sit finibus pellentesque eget. At turpis lacinia turpis. Mi bibendum etiam mauris, maecenas porttitor sapien non.",
      "longDescriptionUrl": "dynalab.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-571/subdomain-571",
      "roleId": "role-571",
      "subDomain": "subdomain-571",
      "logo": "http://placehold.it/64x64",
      "name": "Galcom",
      "longDescription": "Sem amet lacinia i non dignissim nam, lectus in at faucibus pharetra etiam. Eti turpis faucibus est. Massa vestibulum dolor.",
      "longDescriptionUrl": "galcom.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-572/subdomain-572",
      "roleId": "role-572",
      "subDomain": "subdomain-572",
      "logo": "http://placehold.it/64x64",
      "name": "Forecore",
      "longDescription": "Enim massa gravida velit facilisis elit. Curabitur mattis justo dictum placerat tempus leo, aliquet ex pulvinar turpis condimentum rhoncus ac.",
      "longDescriptionUrl": "forecore.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-573/subdomain-573",
      "roleId": "role-573",
      "subDomain": "subdomain-573",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Elementum eget justo vestibulum mi. Pellentesque commodo orci au, ante neque lacinia posuere commodo mi eget posuere donec a vitae.",
      "longDescriptionUrl": "fortyfour.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-574/subdomain-574",
      "roleId": "role-574",
      "subDomain": "subdomain-574",
      "logo": "http://placehold.it/64x64",
      "name": "VTGrafix",
      "longDescription": "Imperdiet neque elit est dui non pharetra id neque eu eu ultricies lacinia. In mauris magna eros risus sem arcu.",
      "longDescriptionUrl": "vtgrafix.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-575/subdomain-575",
      "roleId": "role-575",
      "subDomain": "subdomain-575",
      "logo": "http://placehold.it/64x64",
      "name": "Cirpria",
      "longDescription": "Pulvinar auctor faucibus dolor etiam tortor dolor. I ultrices purus bibendum. Pulvinar non iaculis ultrices consectetur ornare quisque iaculis tortor.",
      "longDescriptionUrl": "cirpria.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-576/subdomain-576",
      "roleId": "role-576",
      "subDomain": "subdomain-576",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Neque sollicitudin morbi ante lorem bibendum etiam pellentesque. Velit mauris posuere elit. Laoreet bibendum mollis sed mattis ultricies hendrerit massa.",
      "longDescriptionUrl": "smartsystems.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-577/subdomain-577",
      "roleId": "role-577",
      "subDomain": "subdomain-577",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Ut vehicula nibh maximus id mattis ut ante dolor, vitae nisi imperdiet curabitur. Rhoncus pretium metus i sapien dictum et.",
      "longDescriptionUrl": "triosys.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-578/subdomain-578",
      "roleId": "role-578",
      "subDomain": "subdomain-578",
      "logo": "http://placehold.it/64x64",
      "name": "ForeTrust",
      "longDescription": "Elit magna nisi scelerisque commodo. Quis pharetra hendrerit adipiscing suscipit non ex neque au aliquam. Erat donec aenean facilisis pellentesque.",
      "longDescriptionUrl": "foretrust.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-579/subdomain-579",
      "roleId": "role-579",
      "subDomain": "subdomain-579",
      "logo": "http://placehold.it/64x64",
      "name": "OmniTouch",
      "longDescription": "Cursus ultricies nam sagittis a laoreet sed. Tincidunt etiam sit laoreet, dignissim nibh amet tincidunt dui consectetur eti scelerisque adipiscing.",
      "longDescriptionUrl": "omnitouch.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-580/subdomain-580",
      "roleId": "role-580",
      "subDomain": "subdomain-580",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Bibendum lectus consectetur nisi maximus, dolor tristique mattis porttitor, dui pulvinar in in mauris amet facilisis morbi aenean cras vulputate.",
      "longDescriptionUrl": "celmax.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-581/subdomain-581",
      "roleId": "role-581",
      "subDomain": "subdomain-581",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Non sagittis sodales vel aliquet mattis curabitur. Id au pellentesque lacinia fringilla sollicitudin rhoncus et. Eros bibendum metus laoreet aliquam.",
      "longDescriptionUrl": "zatheon.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-582/subdomain-582",
      "roleId": "role-582",
      "subDomain": "subdomain-582",
      "logo": "http://placehold.it/64x64",
      "name": "Britech",
      "longDescription": "Fringilla tincidunt orci aliquam eget diam, sit sed blandit condimentum aenean erat adipiscing, elit tempus porttitor i risus ultrices facilisis.",
      "longDescriptionUrl": "britech.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-583/subdomain-583",
      "roleId": "role-583",
      "subDomain": "subdomain-583",
      "logo": "http://placehold.it/64x64",
      "name": "DuoServe",
      "longDescription": "Donec lacinia ultricies pellentesque gravida quis quis sed mauris ornare eros, cras consequat sollicitudin erat. Diam fringilla ornare e turpis.",
      "longDescriptionUrl": "duoserve.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-584/subdomain-584",
      "roleId": "role-584",
      "subDomain": "subdomain-584",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Tortor sollicitudin maecenas elit nulla diam sollicitudin elit eti scelerisque bibendum nisl vel at tempus, pretium euismod nisl nam lorem.",
      "longDescriptionUrl": "terrasys.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-585/subdomain-585",
      "roleId": "role-585",
      "subDomain": "subdomain-585",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Vulputate nisi sodales leo dui dictum, sapien tempor felis dictum diam, nunc dolor eros sollicitudin eros. Condimentum laoreet ante hendrerit.",
      "longDescriptionUrl": "zatheon.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-586/subdomain-586",
      "roleId": "role-586",
      "subDomain": "subdomain-586",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "At fringilla metus maecenas arcu, dignissim proin natoque ipsum purus vestibulum, eti curabitur nisi neque faucibus tempus scelerisque est purus.",
      "longDescriptionUrl": "fortyfour.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-587/subdomain-587",
      "roleId": "role-587",
      "subDomain": "subdomain-587",
      "logo": "http://placehold.it/64x64",
      "name": "MultiLingua",
      "longDescription": "Maecenas auctor adipiscing felis felis sit consectetur, diam non blandit hendrerit. At natoque laoreet hendrerit proin a cursus ipsum amet.",
      "longDescriptionUrl": "multilingua.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-588/subdomain-588",
      "roleId": "role-588",
      "subDomain": "subdomain-588",
      "logo": "http://placehold.it/64x64",
      "name": "QuadNet",
      "longDescription": "Finibus adipiscing ligula porttitor nibh magna amet orci. Sit magna ut augue, ante vitae gravida nam hendrerit. Risus dictum sollicitudin.",
      "longDescriptionUrl": "quadnet.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-589/subdomain-589",
      "roleId": "role-589",
      "subDomain": "subdomain-589",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Vehicula ante at pharetra rhoncus suscipit. Ante bibendum laoreet lectus. Proin neque sem donec placerat sollicitudin accumsan accumsan eti in.",
      "longDescriptionUrl": "fortyfour.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-590/subdomain-590",
      "roleId": "role-590",
      "subDomain": "subdomain-590",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Suscipit fringilla consectetur lacinia consectetur a consequat quisque, enim augue dui ultrices, a dictum lectus ultricies vehicula, justo sapien felis.",
      "longDescriptionUrl": "zatheon.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-591/subdomain-591",
      "roleId": "role-591",
      "subDomain": "subdomain-591",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Risus proin ultrices donec pulvinar risus. Est consectetur laoreet sapien ligula eti ipsum. In id leo non ornare vitae vehicula.",
      "longDescriptionUrl": "corptek.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-592/subdomain-592",
      "roleId": "role-592",
      "subDomain": "subdomain-592",
      "logo": "http://placehold.it/64x64",
      "name": "Iridimax",
      "longDescription": "Nisl lacus nunc dictum maximus. Laoreet dignissim ut ante non sapien vestibulum lorem faucibus imperdiet suscipit scelerisque, nibh nam elit.",
      "longDescriptionUrl": "iridimax.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-593/subdomain-593",
      "roleId": "role-593",
      "subDomain": "subdomain-593",
      "logo": "http://placehold.it/64x64",
      "name": "LoopSys",
      "longDescription": "Sem quisque ligula condimentum porttitor elit, quis arcu quisque massa non, sed ex nam cras ante tincidunt. Eget lacus consequat.",
      "longDescriptionUrl": "loopsys.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-594/subdomain-594",
      "roleId": "role-594",
      "subDomain": "subdomain-594",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Blandit tempus maximus lectus dolor. Lacinia velit proin eros a leo enim lorem donec iaculis consequat fringilla. Etiam lacus a.",
      "longDescriptionUrl": "celmax.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-595/subdomain-595",
      "roleId": "role-595",
      "subDomain": "subdomain-595",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Vel risus rhoncus lacinia velit est etiam mollis faucibus. Elit proin consequat fringilla vel. Lectus massa ornare lacus mi tristique.",
      "longDescriptionUrl": "sixtysix.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-596/subdomain-596",
      "roleId": "role-596",
      "subDomain": "subdomain-596",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Aliquam natoque quisque erat aenean consequat. Non erat tortor eti sollicitudin ex maximus mauris placerat est mollis et ipsum aliquet.",
      "longDescriptionUrl": "hassifix.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-597/subdomain-597",
      "roleId": "role-597",
      "subDomain": "subdomain-597",
      "logo": "http://placehold.it/64x64",
      "name": "Polygan",
      "longDescription": "Mauris lectus dictum iaculis pulvinar. Lobortis au auctor condimentum tincidunt, quisque neque aliquet nulla sodales. Mi lacinia non sodales velit.",
      "longDescriptionUrl": "polygan.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-598/subdomain-598",
      "roleId": "role-598",
      "subDomain": "subdomain-598",
      "logo": "http://placehold.it/64x64",
      "name": "MultiServ",
      "longDescription": "Laoreet elementum pharetra lorem turpis gravida. Tincidunt augue ut ultrices ornare enim sit ante mollis suscipit. Ex etiam eget ut.",
      "longDescriptionUrl": "multiserv.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-599/subdomain-599",
      "roleId": "role-599",
      "subDomain": "subdomain-599",
      "logo": "http://placehold.it/64x64",
      "name": "TurboSystems",
      "longDescription": "I arcu cursus non tempor aliquet. Finibus neque vitae at. Vel lorem lacus metus, sapien nisl commodo vitae tempor elit.",
      "longDescriptionUrl": "turbosystems.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-600/subdomain-600",
      "roleId": "role-600",
      "subDomain": "subdomain-600",
      "logo": "http://placehold.it/64x64",
      "name": "Kancom",
      "longDescription": "Porttitor turpis justo au nisl posuere iaculis dui porttitor dictum sed donec commodo. Facilisis tincidunt metus sagittis tortor scelerisque pretium.",
      "longDescriptionUrl": "kancom.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-601/subdomain-601",
      "roleId": "role-601",
      "subDomain": "subdomain-601",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Nunc eros natoque e viverra natoque vestibulum ultricies euismod ultrices pulvinar. Diam e sagittis quisque sapien, cursus viverra velit massa.",
      "longDescriptionUrl": "thermolock.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-602/subdomain-602",
      "roleId": "role-602",
      "subDomain": "subdomain-602",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "At elit pharetra lacinia lacus sem sollicitudin ipsum. Orci magna vehicula risus bibendum. Lorem sapien risus finibus, non placerat sapien.",
      "longDescriptionUrl": "opticast.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-603/subdomain-603",
      "roleId": "role-603",
      "subDomain": "subdomain-603",
      "logo": "http://placehold.it/64x64",
      "name": "MultiLingua",
      "longDescription": "Orci fringilla tristique sapien massa scelerisque. Ante ornare lobortis lobortis eget eti, aliquam etiam in sit. Velit felis sed nulla.",
      "longDescriptionUrl": "multilingua.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-604/subdomain-604",
      "roleId": "role-604",
      "subDomain": "subdomain-604",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "Aliquet lacus eu arcu ligula, dui pretium blandit sit tempus sem suscipit. Mi gravida finibus lacinia magna dui adipiscing massa.",
      "longDescriptionUrl": "opticast.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-605/subdomain-605",
      "roleId": "role-605",
      "subDomain": "subdomain-605",
      "logo": "http://placehold.it/64x64",
      "name": "Chromaton",
      "longDescription": "Amet arcu sollicitudin in dignissim ligula consequat turpis laoreet suscipit lacinia scelerisque elit au. Faucibus adipiscing donec lobortis purus vestibulum.",
      "longDescriptionUrl": "chromaton.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-606/subdomain-606",
      "roleId": "role-606",
      "subDomain": "subdomain-606",
      "logo": "http://placehold.it/64x64",
      "name": "Citisys",
      "longDescription": "Sollicitudin pulvinar porttitor dictum cras, aliquam enim gravida tristique. Nisl nunc adipiscing aenean justo at. Vestibulum velit suscipit dui leo.",
      "longDescriptionUrl": "citisys.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-607/subdomain-607",
      "roleId": "role-607",
      "subDomain": "subdomain-607",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Dui nam ligula sollicitudin justo. Adipiscing gravida risus vel, pellentesque leo et sit e consectetur justo etiam neque dolor enim.",
      "longDescriptionUrl": "infratouch.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-608/subdomain-608",
      "roleId": "role-608",
      "subDomain": "subdomain-608",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Pharetra diam consequat eros massa ipsum nunc. In vestibulum suscipit dolor e, orci amet accumsan augue consectetur. Lacinia dignissim justo.",
      "longDescriptionUrl": "thermolock.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-609/subdomain-609",
      "roleId": "role-609",
      "subDomain": "subdomain-609",
      "logo": "http://placehold.it/64x64",
      "name": "VenStrategy",
      "longDescription": "Felis e ornare dolor ex. At tristique eget felis metus au au vitae in. Velit consectetur tempor eros porttitor morbi.",
      "longDescriptionUrl": "venstrategy.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-610/subdomain-610",
      "roleId": "role-610",
      "subDomain": "subdomain-610",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Aliquam porttitor aliquam maximus arcu nisl. Justo nisl proin felis vehicula dictum, bibendum scelerisque sit magna mauris viverra euismod dignissim.",
      "longDescriptionUrl": "solexis.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-611/subdomain-611",
      "roleId": "role-611",
      "subDomain": "subdomain-611",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Eu sapien nulla sodales ultricies mattis ornare lobortis facilisis ut a, enim leo lobortis tristique tempor ultricies laoreet lobortis ac.",
      "longDescriptionUrl": "eluxa.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-612/subdomain-612",
      "roleId": "role-612",
      "subDomain": "subdomain-612",
      "logo": "http://placehold.it/64x64",
      "name": "Ulogica",
      "longDescription": "Tempor sem quisque vestibulum quisque. Ligula tempor quis sem sagittis eget massa. Blandit eros pretium rhoncus aliquam massa est faucibus.",
      "longDescriptionUrl": "ulogica.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-613/subdomain-613",
      "roleId": "role-613",
      "subDomain": "subdomain-613",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Mollis proin nisl quisque natoque metus sit. Elit accumsan mollis ligula felis. Viverra erat cursus tortor, risus id rhoncus amet.",
      "longDescriptionUrl": "celmax.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-614/subdomain-614",
      "roleId": "role-614",
      "subDomain": "subdomain-614",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Consequat enim consectetur massa scelerisque lacinia est lacinia aenean ex hendrerit sit metus finibus morbi tincidunt risus cras auctor iaculis.",
      "longDescriptionUrl": "cryptonica.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-615/subdomain-615",
      "roleId": "role-615",
      "subDomain": "subdomain-615",
      "logo": "http://placehold.it/64x64",
      "name": "Bellgate",
      "longDescription": "Morbi blandit massa lacinia scelerisque lacus. Porttitor ex ultricies est hendrerit cras nam turpis ornare. I mollis consectetur gravida lacus.",
      "longDescriptionUrl": "bellgate.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-616/subdomain-616",
      "roleId": "role-616",
      "subDomain": "subdomain-616",
      "logo": "http://placehold.it/64x64",
      "name": "Forecore",
      "longDescription": "Consequat vestibulum felis diam e faucibus. Accumsan donec lacinia curabitur rhoncus blandit id id mattis massa posuere. Mi a purus.",
      "longDescriptionUrl": "forecore.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-617/subdomain-617",
      "roleId": "role-617",
      "subDomain": "subdomain-617",
      "logo": "http://placehold.it/64x64",
      "name": "QuadNet",
      "longDescription": "Sapien lobortis imperdiet nisi cursus quis massa, tempor justo a au risus tristique cras. Pharetra sapien lectus condimentum ligula consequat.",
      "longDescriptionUrl": "quadnet.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-618/subdomain-618",
      "roleId": "role-618",
      "subDomain": "subdomain-618",
      "logo": "http://placehold.it/64x64",
      "name": "Pancast",
      "longDescription": "Ut pulvinar lacinia ultricies finibus, ac ac morbi arcu. Nibh proin lacinia gravida, pharetra consectetur tempor consequat. Id finibus neque.",
      "longDescriptionUrl": "pancast.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-619/subdomain-619",
      "roleId": "role-619",
      "subDomain": "subdomain-619",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Nisi tortor sagittis imperdiet scelerisque bibendum nulla dignissim pellentesque quisque. Mi enim placerat id. Leo nibh et laoreet sed maecenas.",
      "longDescriptionUrl": "celmax.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-620/subdomain-620",
      "roleId": "role-620",
      "subDomain": "subdomain-620",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Porttitor felis neque gravida aenean, dignissim vitae ac arcu ligula eros non felis, turpis donec tortor arcu non lacinia nunc.",
      "longDescriptionUrl": "helixicon.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-621/subdomain-621",
      "roleId": "role-621",
      "subDomain": "subdomain-621",
      "logo": "http://placehold.it/64x64",
      "name": "Galcom",
      "longDescription": "Vestibulum augue non lacus orci. Cras pulvinar metus dui, et arcu ipsum pharetra. Commodo vulputate ultrices eu eros consequat in.",
      "longDescriptionUrl": "galcom.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-622/subdomain-622",
      "roleId": "role-622",
      "subDomain": "subdomain-622",
      "logo": "http://placehold.it/64x64",
      "name": "Keysoft",
      "longDescription": "Nulla erat suscipit tincidunt ipsum. Iaculis erat iaculis arcu. Nunc tempor leo velit justo. Tincidunt rhoncus purus hendrerit accumsan maecenas.",
      "longDescriptionUrl": "keysoft.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-623/subdomain-623",
      "roleId": "role-623",
      "subDomain": "subdomain-623",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Ultricies sapien at eros et finibus et nulla pellentesque. Turpis sit laoreet a pulvinar nam, erat ultricies sodales sit metus.",
      "longDescriptionUrl": "hassifix.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-624/subdomain-624",
      "roleId": "role-624",
      "subDomain": "subdomain-624",
      "logo": "http://placehold.it/64x64",
      "name": "Viewtopia",
      "longDescription": "Sagittis quis ultricies eti felis, pellentesque purus dui et sagittis justo dui posuere proin rhoncus cursus ac vehicula mattis aliquet.",
      "longDescriptionUrl": "viewtopia.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-625/subdomain-625",
      "roleId": "role-625",
      "subDomain": "subdomain-625",
      "logo": "http://placehold.it/64x64",
      "name": "Citisys",
      "longDescription": "Vulputate gravida facilisis porttitor ex ornare neque aliquam. Natoque elementum vel lacus. Ex justo in turpis proin risus lacinia fringilla.",
      "longDescriptionUrl": "citisys.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-626/subdomain-626",
      "roleId": "role-626",
      "subDomain": "subdomain-626",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Lectus vitae morbi vehicula vehicula nisl sollicitudin eti. Nam bibendum e pharetra posuere cras, a erat dignissim tincidunt et auctor.",
      "longDescriptionUrl": "fastfreight.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-627/subdomain-627",
      "roleId": "role-627",
      "subDomain": "subdomain-627",
      "logo": "http://placehold.it/64x64",
      "name": "Viewtopia",
      "longDescription": "Nisl ex pretium nisi finibus maecenas, elit ultrices sollicitudin lacinia nam pulvinar leo dolor. Nam viverra lobortis etiam aenean natoque.",
      "longDescriptionUrl": "viewtopia.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-628/subdomain-628",
      "roleId": "role-628",
      "subDomain": "subdomain-628",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Elit lacinia suscipit quisque nulla e posuere ultrices nulla. Turpis lobortis euismod vestibulum augue maecenas magna adipiscing in scelerisque cras.",
      "longDescriptionUrl": "eluxa.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-629/subdomain-629",
      "roleId": "role-629",
      "subDomain": "subdomain-629",
      "logo": "http://placehold.it/64x64",
      "name": "Chromaton",
      "longDescription": "Sit mauris sem sit eget accumsan condimentum erat sapien scelerisque, velit vehicula quis imperdiet sed pretium mollis ex lacus ultrices.",
      "longDescriptionUrl": "chromaton.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-630/subdomain-630",
      "roleId": "role-630",
      "subDomain": "subdomain-630",
      "logo": "http://placehold.it/64x64",
      "name": "Forecore",
      "longDescription": "Lacinia scelerisque eget sollicitudin commodo nulla dignissim in nisl sollicitudin iaculis turpis nisl, eu ipsum ultrices condimentum lobortis aliquet mattis.",
      "longDescriptionUrl": "forecore.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-631/subdomain-631",
      "roleId": "role-631",
      "subDomain": "subdomain-631",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Arcu diam ac bibendum cras aenean sed orci purus laoreet vel, sit consequat pharetra nam felis, maecenas sed nibh amet.",
      "longDescriptionUrl": "triosys.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-632/subdomain-632",
      "roleId": "role-632",
      "subDomain": "subdomain-632",
      "logo": "http://placehold.it/64x64",
      "name": "DynaAir",
      "longDescription": "Nibh augue pellentesque purus leo. Et augue quisque nibh dolor ut nibh. Neque enim eti cursus rhoncus, massa iaculis diam.",
      "longDescriptionUrl": "dynaair.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-633/subdomain-633",
      "roleId": "role-633",
      "subDomain": "subdomain-633",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Elementum cursus risus quisque aenean. Porttitor placerat auctor augue metus dolor finibus faucibus nisi cras. Amet sodales magna commodo fringilla.",
      "longDescriptionUrl": "terrasys.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-634/subdomain-634",
      "roleId": "role-634",
      "subDomain": "subdomain-634",
      "logo": "http://placehold.it/64x64",
      "name": "Tomiatech",
      "longDescription": "Sapien maecenas auctor faucibus morbi. Ante vel enim ante tortor ante. Et nisl ex donec natoque, erat ultrices lorem eget.",
      "longDescriptionUrl": "tomiatech.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-635/subdomain-635",
      "roleId": "role-635",
      "subDomain": "subdomain-635",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Rhoncus aliquet sem posuere cras lacinia dolor. Blandit nulla amet vitae, enim hendrerit aliquet dolor. Sem au est bibendum tristique.",
      "longDescriptionUrl": "unilogic.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-636/subdomain-636",
      "roleId": "role-636",
      "subDomain": "subdomain-636",
      "logo": "http://placehold.it/64x64",
      "name": "NitroSystems",
      "longDescription": "Tempor imperdiet nulla eros morbi ex. Sodales sapien est laoreet suscipit sollicitudin eget. Morbi placerat vitae magna vel vitae au.",
      "longDescriptionUrl": "nitrosystems.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-637/subdomain-637",
      "roleId": "role-637",
      "subDomain": "subdomain-637",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Rhoncus ultrices mauris dictum vel nulla leo lacinia, risus vulputate fringilla mollis. Viverra enim leo nulla imperdiet, donec amet vitae.",
      "longDescriptionUrl": "helixicon.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-638/subdomain-638",
      "roleId": "role-638",
      "subDomain": "subdomain-638",
      "logo": "http://placehold.it/64x64",
      "name": "Maxcast",
      "longDescription": "Sit ligula donec tincidunt suscipit. Lacinia quisque hendrerit magna laoreet finibus. Pulvinar lobortis pulvinar nisl accumsan. Mi ut ipsum consequat.",
      "longDescriptionUrl": "maxcast.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-639/subdomain-639",
      "roleId": "role-639",
      "subDomain": "subdomain-639",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Morbi vehicula tristique nisi nunc, sodales sapien proin etiam dignissim au lacinia i. E orci tincidunt turpis. Adipiscing au enim.",
      "longDescriptionUrl": "unilogic.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-640/subdomain-640",
      "roleId": "role-640",
      "subDomain": "subdomain-640",
      "logo": "http://placehold.it/64x64",
      "name": "Kancom",
      "longDescription": "Sodales blandit sem est eget lectus e sollicitudin pellentesque purus. Eros donec justo tempus. Curabitur dolor elit risus ipsum facilisis.",
      "longDescriptionUrl": "kancom.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-641/subdomain-641",
      "roleId": "role-641",
      "subDomain": "subdomain-641",
      "logo": "http://placehold.it/64x64",
      "name": "Sophis",
      "longDescription": "Tempor sapien massa nam euismod dolor pellentesque hendrerit, tincidunt aenean non nisl viverra. Viverra est tempus ipsum, maximus mollis laoreet.",
      "longDescriptionUrl": "sophis.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-642/subdomain-642",
      "roleId": "role-642",
      "subDomain": "subdomain-642",
      "logo": "http://placehold.it/64x64",
      "name": "QuadNet",
      "longDescription": "Tincidunt facilisis eu velit elementum. Ut vestibulum justo au. Pharetra suscipit facilisis bibendum cras. Lacinia morbi viverra dolor ut id.",
      "longDescriptionUrl": "quadnet.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-643/subdomain-643",
      "roleId": "role-643",
      "subDomain": "subdomain-643",
      "logo": "http://placehold.it/64x64",
      "name": "OmniTouch",
      "longDescription": "Purus porttitor massa erat imperdiet, ligula maecenas etiam au i facilisis gravida, fringilla viverra maecenas aliquam aenean purus magna iaculis.",
      "longDescriptionUrl": "omnitouch.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-644/subdomain-644",
      "roleId": "role-644",
      "subDomain": "subdomain-644",
      "logo": "http://placehold.it/64x64",
      "name": "Freecast",
      "longDescription": "Ultrices finibus ut commodo curabitur. Mauris maecenas cras posuere, id felis hendrerit sit ac. Pharetra sed ultricies gravida au ac.",
      "longDescriptionUrl": "freecast.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-645/subdomain-645",
      "roleId": "role-645",
      "subDomain": "subdomain-645",
      "logo": "http://placehold.it/64x64",
      "name": "Tecomix",
      "longDescription": "Eu donec ante non nulla rhoncus vel sapien ultricies eros mi sagittis adipiscing et dui. Facilisis morbi maecenas curabitur porttitor.",
      "longDescriptionUrl": "tecomix.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-646/subdomain-646",
      "roleId": "role-646",
      "subDomain": "subdomain-646",
      "logo": "http://placehold.it/64x64",
      "name": "Cryosoft",
      "longDescription": "Eget tristique aenean erat tristique, tortor morbi bibendum consequat. Est laoreet viverra sit consequat. Laoreet lorem purus elementum eu condimentum.",
      "longDescriptionUrl": "cryosoft.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-647/subdomain-647",
      "roleId": "role-647",
      "subDomain": "subdomain-647",
      "logo": "http://placehold.it/64x64",
      "name": "DuoServe",
      "longDescription": "Vitae quisque cras vehicula ultrices vitae facilisis lacus consectetur. Purus at velit elementum felis bibendum nulla fringilla, aenean donec sollicitudin.",
      "longDescriptionUrl": "duoserve.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-648/subdomain-648",
      "roleId": "role-648",
      "subDomain": "subdomain-648",
      "logo": "http://placehold.it/64x64",
      "name": "CoreRobotics",
      "longDescription": "Sagittis ante i laoreet i et posuere donec orci. Lacinia vulputate proin non. E sem cursus cras in hendrerit massa.",
      "longDescriptionUrl": "corerobotics.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-649/subdomain-649",
      "roleId": "role-649",
      "subDomain": "subdomain-649",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Erat hendrerit imperdiet cras sem accumsan sagittis aliquet diam, sem hendrerit rhoncus nunc morbi bibendum natoque dui hendrerit au justo.",
      "longDescriptionUrl": "cryptonica.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-650/subdomain-650",
      "roleId": "role-650",
      "subDomain": "subdomain-650",
      "logo": "http://placehold.it/64x64",
      "name": "VTGrafix",
      "longDescription": "Lorem diam adipiscing iaculis pharetra. Iaculis hendrerit proin nibh lacinia mauris. Auctor leo ornare scelerisque vitae pretium mattis ipsum commodo.",
      "longDescriptionUrl": "vtgrafix.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-651/subdomain-651",
      "roleId": "role-651",
      "subDomain": "subdomain-651",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Pretium aliquam commodo vel augue felis. Scelerisque ante ipsum lectus tincidunt nam amet sollicitudin iaculis commodo maximus diam consequat vestibulum.",
      "longDescriptionUrl": "fortyfour.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-652/subdomain-652",
      "roleId": "role-652",
      "subDomain": "subdomain-652",
      "logo": "http://placehold.it/64x64",
      "name": "Playtech",
      "longDescription": "Facilisis diam aliquam finibus pellentesque. Non natoque eu sem at placerat pharetra fringilla pellentesque dictum vel ac. Ut mi ultrices.",
      "longDescriptionUrl": "playtech.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-653/subdomain-653",
      "roleId": "role-653",
      "subDomain": "subdomain-653",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Suscipit natoque et at ornare dictum etiam, ultrices pharetra accumsan curabitur, amet turpis ultricies porttitor. Sodales at elementum eti aliquet.",
      "longDescriptionUrl": "infratouch.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-654/subdomain-654",
      "roleId": "role-654",
      "subDomain": "subdomain-654",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Vel viverra a i ante viverra vulputate neque lectus quis vitae morbi. Dignissim aliquam lacus id laoreet, sagittis sit ornare.",
      "longDescriptionUrl": "cryptonica.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-655/subdomain-655",
      "roleId": "role-655",
      "subDomain": "subdomain-655",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Nisl dictum ultricies ante felis a tristique vestibulum eget mollis curabitur, eti tristique pretium nisl erat orci iaculis ac condimentum.",
      "longDescriptionUrl": "terrasys.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-656/subdomain-656",
      "roleId": "role-656",
      "subDomain": "subdomain-656",
      "logo": "http://placehold.it/64x64",
      "name": "Dalserve",
      "longDescription": "Nulla imperdiet augue dignissim et commodo, sagittis risus erat ex. At maecenas vehicula pulvinar etiam, consectetur placerat blandit consectetur dui.",
      "longDescriptionUrl": "dalserve.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-657/subdomain-657",
      "roleId": "role-657",
      "subDomain": "subdomain-657",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Nisl neque et cras pharetra natoque turpis. Augue faucibus vestibulum pretium posuere vitae eget tortor dolor magna dolor nisi porttitor.",
      "longDescriptionUrl": "solexis.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-658/subdomain-658",
      "roleId": "role-658",
      "subDomain": "subdomain-658",
      "logo": "http://placehold.it/64x64",
      "name": "Britech",
      "longDescription": "Sapien sollicitudin auctor facilisis augue turpis eu augue, risus lacus massa pulvinar, ligula i leo neque, nisi posuere ornare nunc.",
      "longDescriptionUrl": "britech.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-659/subdomain-659",
      "roleId": "role-659",
      "subDomain": "subdomain-659",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Auctor magna augue scelerisque purus mattis. Justo natoque felis felis vel sagittis gravida elit, fringilla cursus lorem est maecenas cras.",
      "longDescriptionUrl": "eluxa.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-660/subdomain-660",
      "roleId": "role-660",
      "subDomain": "subdomain-660",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Felis finibus consequat mollis tempus fringilla. Cras sollicitudin accumsan tristique scelerisque nam eu. Ut est tempor mauris nisi aenean arcu.",
      "longDescriptionUrl": "sunopia.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-661/subdomain-661",
      "roleId": "role-661",
      "subDomain": "subdomain-661",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Ornare scelerisque lobortis lorem cras bibendum ultricies tempus. Non hendrerit nunc purus, augue cursus sit lorem erat, nibh mollis maximus.",
      "longDescriptionUrl": "hassifix.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-662/subdomain-662",
      "roleId": "role-662",
      "subDomain": "subdomain-662",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Faucibus justo eget vulputate bibendum euismod aliquam. Rhoncus turpis quisque porttitor. Sem cras risus vestibulum sodales facilisis enim lobortis pulvinar.",
      "longDescriptionUrl": "celmax.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-663/subdomain-663",
      "roleId": "role-663",
      "subDomain": "subdomain-663",
      "logo": "http://placehold.it/64x64",
      "name": "Terralabs",
      "longDescription": "Mattis morbi aenean eget consequat. Mauris ex scelerisque lorem adipiscing ac iaculis. Justo imperdiet pulvinar maecenas, est i eti sed.",
      "longDescriptionUrl": "terralabs.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-664/subdomain-664",
      "roleId": "role-664",
      "subDomain": "subdomain-664",
      "logo": "http://placehold.it/64x64",
      "name": "TurboSystems",
      "longDescription": "Placerat accumsan tempus mauris dolor scelerisque, tincidunt facilisis purus dui. Nisi maximus consequat dignissim. Sollicitudin et curabitur erat tincidunt pellentesque.",
      "longDescriptionUrl": "turbosystems.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-665/subdomain-665",
      "roleId": "role-665",
      "subDomain": "subdomain-665",
      "logo": "http://placehold.it/64x64",
      "name": "GrafixMedia",
      "longDescription": "Lorem metus commodo turpis condimentum nulla aenean. Lacus a tortor non e purus sollicitudin, ante bibendum turpis facilisis enim non.",
      "longDescriptionUrl": "grafixmedia.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-666/subdomain-666",
      "roleId": "role-666",
      "subDomain": "subdomain-666",
      "logo": "http://placehold.it/64x64",
      "name": "Protheon",
      "longDescription": "Eu dui quisque vel lacinia. Cras eu mattis posuere aliquet a a commodo posuere condimentum. Aliquam mattis id vestibulum scelerisque.",
      "longDescriptionUrl": "protheon.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-667/subdomain-667",
      "roleId": "role-667",
      "subDomain": "subdomain-667",
      "logo": "http://placehold.it/64x64",
      "name": "Coolinga",
      "longDescription": "Turpis quis lacus dolor vehicula. Ligula aenean sit facilisis bibendum, accumsan vitae lacus i accumsan. A erat non felis est.",
      "longDescriptionUrl": "coolinga.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-668/subdomain-668",
      "roleId": "role-668",
      "subDomain": "subdomain-668",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Velit purus non nulla tempor. Eget at non i, lobortis mattis accumsan felis condimentum imperdiet. Tempor turpis justo aliquam ut.",
      "longDescriptionUrl": "openserv.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-669/subdomain-669",
      "roleId": "role-669",
      "subDomain": "subdomain-669",
      "logo": "http://placehold.it/64x64",
      "name": "Playtech",
      "longDescription": "Morbi nisl placerat et eti suscipit. Et in ultricies finibus dolor metus eros sagittis dolor euismod pharetra. Consequat ligula vestibulum.",
      "longDescriptionUrl": "playtech.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-670/subdomain-670",
      "roleId": "role-670",
      "subDomain": "subdomain-670",
      "logo": "http://placehold.it/64x64",
      "name": "Baramax",
      "longDescription": "Risus sagittis massa imperdiet faucibus i aliquet. Id mattis gravida sollicitudin dui et nam nam e accumsan, ligula auctor morbi.",
      "longDescriptionUrl": "baramax.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-671/subdomain-671",
      "roleId": "role-671",
      "subDomain": "subdomain-671",
      "logo": "http://placehold.it/64x64",
      "name": "Acousticom",
      "longDescription": "Laoreet ante felis dui lorem tristique nam nisl ornare laoreet. Ac morbi pulvinar scelerisque vel justo pellentesque felis facilisis scelerisque.",
      "longDescriptionUrl": "acousticom.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-672/subdomain-672",
      "roleId": "role-672",
      "subDomain": "subdomain-672",
      "logo": "http://placehold.it/64x64",
      "name": "Haltheon",
      "longDescription": "Cras id vitae dolor pulvinar, mauris risus bibendum cursus velit suscipit ornare, auctor mattis cursus et i maximus amet lectus.",
      "longDescriptionUrl": "haltheon.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-673/subdomain-673",
      "roleId": "role-673",
      "subDomain": "subdomain-673",
      "logo": "http://placehold.it/64x64",
      "name": "Protheon",
      "longDescription": "Viverra ante ex mauris gravida posuere ultricies est ut nam hendrerit nibh facilisis vestibulum vitae est nam eti neque maximus.",
      "longDescriptionUrl": "protheon.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-674/subdomain-674",
      "roleId": "role-674",
      "subDomain": "subdomain-674",
      "logo": "http://placehold.it/64x64",
      "name": "Airconix",
      "longDescription": "Eti nunc vel posuere est, euismod mi ut sem vitae lacus. Facilisis eget leo lectus condimentum dui, leo eget ultrices.",
      "longDescriptionUrl": "airconix.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-675/subdomain-675",
      "roleId": "role-675",
      "subDomain": "subdomain-675",
      "logo": "http://placehold.it/64x64",
      "name": "Tomiatech",
      "longDescription": "Faucibus scelerisque tincidunt accumsan justo aliquet. Dolor ac massa viverra nulla sagittis. Faucibus porttitor lacinia vulputate, lobortis sodales turpis placerat.",
      "longDescriptionUrl": "tomiatech.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-676/subdomain-676",
      "roleId": "role-676",
      "subDomain": "subdomain-676",
      "logo": "http://placehold.it/64x64",
      "name": "Freecast",
      "longDescription": "Quisque metus vulputate aliquam at non. Laoreet maecenas vitae donec, lacus quisque lorem in elit sed eu velit finibus hendrerit.",
      "longDescriptionUrl": "freecast.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-677/subdomain-677",
      "roleId": "role-677",
      "subDomain": "subdomain-677",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Arcu elit mollis consequat iaculis metus morbi dolor, gravida vitae tincidunt ultricies facilisis. Tortor eros commodo ornare justo magna ultrices.",
      "longDescriptionUrl": "sixtysix.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-678/subdomain-678",
      "roleId": "role-678",
      "subDomain": "subdomain-678",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Neque aliquam adipiscing adipiscing mi ultrices, elementum lacus vehicula facilisis iaculis aliquet sit sit dui mauris lobortis sollicitudin commodo sodales.",
      "longDescriptionUrl": "solexis.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-679/subdomain-679",
      "roleId": "role-679",
      "subDomain": "subdomain-679",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Maecenas consequat et id etiam velit purus mattis curabitur blandit, erat quis dui felis mi mauris. Aliquam pellentesque donec faucibus.",
      "longDescriptionUrl": "corptek.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-680/subdomain-680",
      "roleId": "role-680",
      "subDomain": "subdomain-680",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "Lobortis tristique accumsan elementum tristique, massa scelerisque posuere ex cursus consectetur. Tempus felis lectus pulvinar felis condimentum purus placerat laoreet.",
      "longDescriptionUrl": "conixco.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-681/subdomain-681",
      "roleId": "role-681",
      "subDomain": "subdomain-681",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "At ultrices elit turpis elit at adipiscing auctor morbi ut eget, nulla cursus accumsan in est placerat mollis tempus consequat.",
      "longDescriptionUrl": "helixicon.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-682/subdomain-682",
      "roleId": "role-682",
      "subDomain": "subdomain-682",
      "logo": "http://placehold.it/64x64",
      "name": "Hivemind",
      "longDescription": "Purus ut aenean justo cras rhoncus orci tristique et ex. Iaculis lacinia id faucibus aenean metus consequat. Consequat turpis eget.",
      "longDescriptionUrl": "hivemind.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-683/subdomain-683",
      "roleId": "role-683",
      "subDomain": "subdomain-683",
      "logo": "http://placehold.it/64x64",
      "name": "Iridimax",
      "longDescription": "Hendrerit pretium lacinia vel posuere velit eu pharetra ligula sodales enim. Neque sollicitudin elit nibh ipsum ligula, auctor vel velit.",
      "longDescriptionUrl": "iridimax.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-684/subdomain-684",
      "roleId": "role-684",
      "subDomain": "subdomain-684",
      "logo": "http://placehold.it/64x64",
      "name": "Keysoft",
      "longDescription": "Erat nisl ligula maecenas vulputate. Non imperdiet pulvinar tristique i posuere proin leo, nam e etiam elit hendrerit sodales est.",
      "longDescriptionUrl": "keysoft.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-685/subdomain-685",
      "roleId": "role-685",
      "subDomain": "subdomain-685",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Eros felis ante elit non. Ultricies ultricies elementum ut magna nisi ultricies dictum. At turpis sem tristique sit ut at.",
      "longDescriptionUrl": "lexiconlabs.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-686/subdomain-686",
      "roleId": "role-686",
      "subDomain": "subdomain-686",
      "logo": "http://placehold.it/64x64",
      "name": "Haltheon",
      "longDescription": "Viverra nisl vitae dolor ligula. Neque enim nam enim, sagittis a faucibus nulla vitae suscipit commodo consectetur ipsum et vehicula.",
      "longDescriptionUrl": "haltheon.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-687/subdomain-687",
      "roleId": "role-687",
      "subDomain": "subdomain-687",
      "logo": "http://placehold.it/64x64",
      "name": "Playtech",
      "longDescription": "Mi nisi facilisis tempus viverra. I consectetur bibendum facilisis accumsan laoreet, i ornare nisi cras felis dolor lacinia eu et.",
      "longDescriptionUrl": "playtech.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-688/subdomain-688",
      "roleId": "role-688",
      "subDomain": "subdomain-688",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Vehicula facilisis maximus scelerisque ipsum. Id tortor et ornare, vestibulum et lacinia felis euismod curabitur. Etiam imperdiet posuere auctor faucibus.",
      "longDescriptionUrl": "qualcore.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-689/subdomain-689",
      "roleId": "role-689",
      "subDomain": "subdomain-689",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Posuere sagittis sit nibh lorem sem eu au ac massa, nunc aliquam justo quis pharetra a. Nunc nisl enim sem.",
      "longDescriptionUrl": "unilogic.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-690/subdomain-690",
      "roleId": "role-690",
      "subDomain": "subdomain-690",
      "logo": "http://placehold.it/64x64",
      "name": "Logico",
      "longDescription": "Metus eget sem e lobortis mollis pulvinar aenean curabitur blandit proin adipiscing tincidunt. Faucibus nam quis rhoncus dui nisl porttitor.",
      "longDescriptionUrl": "logico.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-691/subdomain-691",
      "roleId": "role-691",
      "subDomain": "subdomain-691",
      "logo": "http://placehold.it/64x64",
      "name": "VenStrategy",
      "longDescription": "Rhoncus mattis nisi turpis condimentum non eu. Tincidunt eros natoque sed tristique bibendum. Dignissim dictum ex pharetra maecenas cursus aliquam.",
      "longDescriptionUrl": "venstrategy.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-692/subdomain-692",
      "roleId": "role-692",
      "subDomain": "subdomain-692",
      "logo": "http://placehold.it/64x64",
      "name": "Seelogic",
      "longDescription": "Quis curabitur augue neque nibh, laoreet ac pellentesque sapien pulvinar, scelerisque mauris dictum maecenas ultricies ac scelerisque porttitor maecenas proin.",
      "longDescriptionUrl": "seelogic.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-693/subdomain-693",
      "roleId": "role-693",
      "subDomain": "subdomain-693",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Nisl pretium mattis pretium tempus cursus, consectetur consequat pulvinar at placerat justo. Pretium mollis metus bibendum. Vestibulum tempor mollis dignissim.",
      "longDescriptionUrl": "solexis.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-694/subdomain-694",
      "roleId": "role-694",
      "subDomain": "subdomain-694",
      "logo": "http://placehold.it/64x64",
      "name": "Tecomix",
      "longDescription": "Amet mattis vulputate mauris mollis est, suscipit nisl leo laoreet eu euismod lectus hendrerit, lacinia justo augue nulla commodo maecenas.",
      "longDescriptionUrl": "tecomix.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-695/subdomain-695",
      "roleId": "role-695",
      "subDomain": "subdomain-695",
      "logo": "http://placehold.it/64x64",
      "name": "Protheon",
      "longDescription": "A lorem metus dignissim lobortis mauris est. Tincidunt ipsum proin mollis, augue posuere risus tincidunt id, ac au sagittis risus.",
      "longDescriptionUrl": "protheon.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-696/subdomain-696",
      "roleId": "role-696",
      "subDomain": "subdomain-696",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Maecenas gravida leo neque blandit faucibus eget ornare dignissim adipiscing. Scelerisque blandit leo magna bibendum, lobortis lacinia consequat enim cursus.",
      "longDescriptionUrl": "sunopia.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-697/subdomain-697",
      "roleId": "role-697",
      "subDomain": "subdomain-697",
      "logo": "http://placehold.it/64x64",
      "name": "OmniTouch",
      "longDescription": "Posuere consectetur justo dolor proin eu mattis natoque, etiam aliquet adipiscing elementum tempus pellentesque condimentum. A aenean maximus in curabitur.",
      "longDescriptionUrl": "omnitouch.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-698/subdomain-698",
      "roleId": "role-698",
      "subDomain": "subdomain-698",
      "logo": "http://placehold.it/64x64",
      "name": "Forecore",
      "longDescription": "Orci felis maximus magna ac. Adipiscing elit ante consectetur ac maecenas neque facilisis ipsum nisi hendrerit eget. Bibendum vehicula ac.",
      "longDescriptionUrl": "forecore.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-699/subdomain-699",
      "roleId": "role-699",
      "subDomain": "subdomain-699",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Neque vel ut et suscipit justo finibus diam sed maximus, dui lobortis tempor rhoncus aliquet. Lacus leo tortor iaculis ante.",
      "longDescriptionUrl": "fortyfour.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-700/subdomain-700",
      "roleId": "role-700",
      "subDomain": "subdomain-700",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "Dui amet id quis cursus arcu justo. Posuere lobortis ligula metus consectetur dolor, pretium morbi proin at. Pellentesque lacinia facilisis.",
      "longDescriptionUrl": "opticast.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-701/subdomain-701",
      "roleId": "role-701",
      "subDomain": "subdomain-701",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Placerat tincidunt quisque vitae posuere porttitor. Placerat augue id morbi, curabitur purus pellentesque ligula ornare justo arcu id euismod consequat.",
      "longDescriptionUrl": "zatheon.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-702/subdomain-702",
      "roleId": "role-702",
      "subDomain": "subdomain-702",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Euismod viverra condimentum dignissim sapien nibh pharetra non tempor, cras nam iaculis dignissim felis. Mi pretium lacinia quisque a nisl.",
      "longDescriptionUrl": "triosys.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-703/subdomain-703",
      "roleId": "role-703",
      "subDomain": "subdomain-703",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Bibendum maximus finibus purus posuere tempus, accumsan dui placerat aenean quisque bibendum justo ultricies. Cras sit et tincidunt auctor ornare.",
      "longDescriptionUrl": "cryptonica.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-704/subdomain-704",
      "roleId": "role-704",
      "subDomain": "subdomain-704",
      "logo": "http://placehold.it/64x64",
      "name": "StrategyLine",
      "longDescription": "Dignissim lobortis orci felis condimentum tristique lacus. Eti iaculis mi mi. Nisi ultricies vestibulum nunc sem a vitae viverra elementum.",
      "longDescriptionUrl": "strategyline.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-705/subdomain-705",
      "roleId": "role-705",
      "subDomain": "subdomain-705",
      "logo": "http://placehold.it/64x64",
      "name": "Ulogica",
      "longDescription": "Lorem adipiscing eu elementum ante, nulla pretium leo orci. Eros non commodo ultricies euismod ultrices nisl. Sapien nisi amet vehicula.",
      "longDescriptionUrl": "ulogica.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-706/subdomain-706",
      "roleId": "role-706",
      "subDomain": "subdomain-706",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Massa turpis arcu lectus e consectetur diam vitae ex. Tempus eget facilisis nibh, donec sem rhoncus enim, nisl lacus euismod.",
      "longDescriptionUrl": "eluxa.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-707/subdomain-707",
      "roleId": "role-707",
      "subDomain": "subdomain-707",
      "logo": "http://placehold.it/64x64",
      "name": "TrueXT",
      "longDescription": "Consectetur pharetra leo vel velit erat eget, quisque ut a leo, cras facilisis ipsum auctor nisl. Et et massa ante.",
      "longDescriptionUrl": "truext.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-708/subdomain-708",
      "roleId": "role-708",
      "subDomain": "subdomain-708",
      "logo": "http://placehold.it/64x64",
      "name": "Cryosoft",
      "longDescription": "Vel tortor ultrices magna viverra. Et nam condimentum blandit tempus nam quis massa commodo lobortis id vitae, eget lacus pellentesque.",
      "longDescriptionUrl": "cryosoft.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-709/subdomain-709",
      "roleId": "role-709",
      "subDomain": "subdomain-709",
      "logo": "http://placehold.it/64x64",
      "name": "Tomiatech",
      "longDescription": "Curabitur gravida arcu mollis vulputate, mollis bibendum bibendum sit finibus. Cursus auctor risus ante, lectus massa mi lectus nisi leo.",
      "longDescriptionUrl": "tomiatech.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-710/subdomain-710",
      "roleId": "role-710",
      "subDomain": "subdomain-710",
      "logo": "http://placehold.it/64x64",
      "name": "Hypervision",
      "longDescription": "Ut vestibulum lectus accumsan ultrices bibendum leo vitae risus lorem. Euismod massa natoque vel nunc ex ligula finibus hendrerit purus.",
      "longDescriptionUrl": "hypervision.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-711/subdomain-711",
      "roleId": "role-711",
      "subDomain": "subdomain-711",
      "logo": "http://placehold.it/64x64",
      "name": "CoreMax",
      "longDescription": "Eti posuere euismod velit porttitor nisi blandit lacus aliquet. Sodales scelerisque nisi maximus i mattis consequat velit hendrerit tortor lobortis.",
      "longDescriptionUrl": "coremax.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-712/subdomain-712",
      "roleId": "role-712",
      "subDomain": "subdomain-712",
      "logo": "http://placehold.it/64x64",
      "name": "CoreMax",
      "longDescription": "Pharetra imperdiet lacinia quisque cras. Fringilla lorem tempor au dictum nisl tincidunt ligula facilisis id au quisque lorem rhoncus gravida.",
      "longDescriptionUrl": "coremax.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-713/subdomain-713",
      "roleId": "role-713",
      "subDomain": "subdomain-713",
      "logo": "http://placehold.it/64x64",
      "name": "Forecore",
      "longDescription": "Nulla quis sagittis risus i. Posuere quis sapien amet blandit ipsum a donec neque at, turpis nunc sodales dui orci.",
      "longDescriptionUrl": "forecore.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-714/subdomain-714",
      "roleId": "role-714",
      "subDomain": "subdomain-714",
      "logo": "http://placehold.it/64x64",
      "name": "FastMart",
      "longDescription": "Tincidunt tempor turpis cursus ante consequat lectus magna tincidunt ultricies rhoncus elit nulla nisi ut elementum nibh quis turpis i.",
      "longDescriptionUrl": "fastmart.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-715/subdomain-715",
      "roleId": "role-715",
      "subDomain": "subdomain-715",
      "logo": "http://placehold.it/64x64",
      "name": "Viewtopia",
      "longDescription": "Amet vehicula et vehicula condimentum, mi commodo laoreet augue est. Vestibulum sed eget elementum et dolor. Etiam quisque tempus maecenas.",
      "longDescriptionUrl": "viewtopia.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-716/subdomain-716",
      "roleId": "role-716",
      "subDomain": "subdomain-716",
      "logo": "http://placehold.it/64x64",
      "name": "MultiServ",
      "longDescription": "Sed ultrices pellentesque natoque sollicitudin ligula e. Euismod nibh metus sed mi condimentum fringilla. Tortor eti proin lacinia nunc ex.",
      "longDescriptionUrl": "multiserv.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-717/subdomain-717",
      "roleId": "role-717",
      "subDomain": "subdomain-717",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Sem tristique velit purus donec. Facilisis eros euismod morbi, tortor vel donec pretium quisque lacinia mi ac suscipit justo au.",
      "longDescriptionUrl": "sixtysix.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-718/subdomain-718",
      "roleId": "role-718",
      "subDomain": "subdomain-718",
      "logo": "http://placehold.it/64x64",
      "name": "Nitrocam",
      "longDescription": "Neque aliquet erat tortor morbi mollis placerat euismod orci sodales. Proin leo amet gravida lorem, condimentum tortor viverra mollis est.",
      "longDescriptionUrl": "nitrocam.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-719/subdomain-719",
      "roleId": "role-719",
      "subDomain": "subdomain-719",
      "logo": "http://placehold.it/64x64",
      "name": "Maxcast",
      "longDescription": "Massa placerat donec nam ac, est scelerisque nisl erat placerat, nisi ipsum lacinia donec. Pharetra ut velit eros rhoncus pulvinar.",
      "longDescriptionUrl": "maxcast.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-720/subdomain-720",
      "roleId": "role-720",
      "subDomain": "subdomain-720",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "I imperdiet risus rhoncus placerat amet nibh. Quis eget ultricies natoque sem. Laoreet metus massa leo. Commodo faucibus tempor nam.",
      "longDescriptionUrl": "templatek.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-721/subdomain-721",
      "roleId": "role-721",
      "subDomain": "subdomain-721",
      "logo": "http://placehold.it/64x64",
      "name": "StrategyLine",
      "longDescription": "Vehicula lectus eti est lacinia orci donec risus. Orci bibendum mollis rhoncus faucibus, ultrices felis vel purus orci natoque condimentum.",
      "longDescriptionUrl": "strategyline.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-722/subdomain-722",
      "roleId": "role-722",
      "subDomain": "subdomain-722",
      "logo": "http://placehold.it/64x64",
      "name": "QuadNet",
      "longDescription": "Blandit dui non pharetra mauris sed aliquet. Sollicitudin laoreet iaculis consequat aliquet lobortis donec au accumsan nulla. Tempor arcu facilisis.",
      "longDescriptionUrl": "quadnet.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-723/subdomain-723",
      "roleId": "role-723",
      "subDomain": "subdomain-723",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Auctor au commodo mollis ultrices tempor mauris auctor. Fringilla amet mollis imperdiet nisi finibus natoque cras suscipit. Pulvinar quis vel.",
      "longDescriptionUrl": "eluxa.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-724/subdomain-724",
      "roleId": "role-724",
      "subDomain": "subdomain-724",
      "logo": "http://placehold.it/64x64",
      "name": "Thermatek",
      "longDescription": "Posuere diam metus dictum mattis morbi dolor tortor sem. Aliquet i facilisis nam eget suscipit mollis. E tristique leo lorem.",
      "longDescriptionUrl": "thermatek.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-725/subdomain-725",
      "roleId": "role-725",
      "subDomain": "subdomain-725",
      "logo": "http://placehold.it/64x64",
      "name": "Viewtopia",
      "longDescription": "At sollicitudin imperdiet enim sapien non. Augue ligula laoreet ultrices lacinia adipiscing pulvinar nulla facilisis erat. Pellentesque donec orci sem.",
      "longDescriptionUrl": "viewtopia.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-726/subdomain-726",
      "roleId": "role-726",
      "subDomain": "subdomain-726",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Natoque enim ante suscipit pellentesque massa risus tempor. Vel porttitor purus quis leo tempor. Sem nisi leo posuere ligula laoreet.",
      "longDescriptionUrl": "unilogic.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-727/subdomain-727",
      "roleId": "role-727",
      "subDomain": "subdomain-727",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Porttitor orci facilisis au finibus nibh risus iaculis. Nisi ultrices i magna lacinia. Mollis at massa finibus nulla sed condimentum.",
      "longDescriptionUrl": "sunopia.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-728/subdomain-728",
      "roleId": "role-728",
      "subDomain": "subdomain-728",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Erat et faucibus scelerisque risus, pharetra aliquet lobortis mi, lorem sagittis cras at dictum sit mi purus dolor orci ornare.",
      "longDescriptionUrl": "storex.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-729/subdomain-729",
      "roleId": "role-729",
      "subDomain": "subdomain-729",
      "logo": "http://placehold.it/64x64",
      "name": "MultiServ",
      "longDescription": "Accumsan leo ornare etiam au. Est rhoncus pellentesque enim hendrerit, ac massa iaculis magna imperdiet adipiscing donec, tempor eget donec.",
      "longDescriptionUrl": "multiserv.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-730/subdomain-730",
      "roleId": "role-730",
      "subDomain": "subdomain-730",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Euismod curabitur bibendum iaculis elementum, finibus amet mi fringilla i ac. Sapien metus massa in sit nulla gravida tortor elit.",
      "longDescriptionUrl": "hassifix.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-731/subdomain-731",
      "roleId": "role-731",
      "subDomain": "subdomain-731",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Eu orci cras nisl nisl nisi, adipiscing maecenas eget sapien accumsan mauris. Vulputate tempus pretium morbi eti aliquam dictum elit.",
      "longDescriptionUrl": "solexis.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-732/subdomain-732",
      "roleId": "role-732",
      "subDomain": "subdomain-732",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Nulla cursus sollicitudin augue sagittis porttitor lacus. Justo velit diam vestibulum at elit turpis quisque commodo augue et diam a.",
      "longDescriptionUrl": "celmax.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-733/subdomain-733",
      "roleId": "role-733",
      "subDomain": "subdomain-733",
      "logo": "http://placehold.it/64x64",
      "name": "Anaplex",
      "longDescription": "Nam donec pellentesque aliquet in elit non consectetur. Nisl dignissim posuere nisi leo proin. Ultricies purus mattis dolor tristique ex.",
      "longDescriptionUrl": "anaplex.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-734/subdomain-734",
      "roleId": "role-734",
      "subDomain": "subdomain-734",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Pharetra elit blandit elementum tempus nulla lorem maecenas, morbi aliquam metus ante erat orci pretium. Nulla pretium turpis porttitor vestibulum.",
      "longDescriptionUrl": "sixtysix.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-735/subdomain-735",
      "roleId": "role-735",
      "subDomain": "subdomain-735",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Tempor vulputate sapien mollis viverra proin maximus. Enim velit maecenas pretium neque mattis mollis est gravida e erat condimentum elementum.",
      "longDescriptionUrl": "proline.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-736/subdomain-736",
      "roleId": "role-736",
      "subDomain": "subdomain-736",
      "logo": "http://placehold.it/64x64",
      "name": "StrategyLine",
      "longDescription": "In lacus aliquet ultricies imperdiet lorem tincidunt dolor tempus. Nisl scelerisque risus magna et iaculis. Tempus posuere risus elementum iaculis.",
      "longDescriptionUrl": "strategyline.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-737/subdomain-737",
      "roleId": "role-737",
      "subDomain": "subdomain-737",
      "logo": "http://placehold.it/64x64",
      "name": "Ulogica",
      "longDescription": "Iaculis justo eti sed nunc lectus iaculis lacus a, lorem dictum vitae finibus, lorem lorem maecenas metus mi pulvinar lectus.",
      "longDescriptionUrl": "ulogica.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-738/subdomain-738",
      "roleId": "role-738",
      "subDomain": "subdomain-738",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Vehicula a auctor cursus vulputate quis nibh tincidunt dui sagittis nulla pellentesque maecenas. Pretium nunc natoque eu au pellentesque leo.",
      "longDescriptionUrl": "terrasys.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-739/subdomain-739",
      "roleId": "role-739",
      "subDomain": "subdomain-739",
      "logo": "http://placehold.it/64x64",
      "name": "Pancast",
      "longDescription": "Diam maecenas donec accumsan ultricies lacinia non sed. Mollis a faucibus dui, justo eros felis eget sit, tempor dui amet.",
      "longDescriptionUrl": "pancast.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-740/subdomain-740",
      "roleId": "role-740",
      "subDomain": "subdomain-740",
      "logo": "http://placehold.it/64x64",
      "name": "Baramax",
      "longDescription": "Sagittis blandit sollicitudin eu vestibulum nulla. Ornare consectetur est facilisis tristique lectus imperdiet lacinia. Lacinia non mauris quis augue consectetur.",
      "longDescriptionUrl": "baramax.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-741/subdomain-741",
      "roleId": "role-741",
      "subDomain": "subdomain-741",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Magna scelerisque vel erat pharetra tempus. Ligula blandit porttitor e mauris. Donec justo nulla aliquam proin mi. Lacinia et vel.",
      "longDescriptionUrl": "celmax.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-742/subdomain-742",
      "roleId": "role-742",
      "subDomain": "subdomain-742",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Sed bibendum placerat adipiscing quisque, arcu au vitae mattis turpis erat quis, viverra justo sem leo eu. Orci morbi nisi.",
      "longDescriptionUrl": "lexiconlabs.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-743/subdomain-743",
      "roleId": "role-743",
      "subDomain": "subdomain-743",
      "logo": "http://placehold.it/64x64",
      "name": "Pancast",
      "longDescription": "Aliquam pellentesque neque lectus pellentesque accumsan ante, lorem dui dictum vel bibendum. Tincidunt adipiscing maximus sed aenean sit aliquam dui.",
      "longDescriptionUrl": "pancast.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-744/subdomain-744",
      "roleId": "role-744",
      "subDomain": "subdomain-744",
      "logo": "http://placehold.it/64x64",
      "name": "Xenosys",
      "longDescription": "Eget commodo blandit pellentesque i gravida eu imperdiet metus, iaculis proin tristique faucibus. Hendrerit sollicitudin lacinia consequat. Tortor tempor lectus.",
      "longDescriptionUrl": "xenosys.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-745/subdomain-745",
      "roleId": "role-745",
      "subDomain": "subdomain-745",
      "logo": "http://placehold.it/64x64",
      "name": "Quadtek",
      "longDescription": "Felis nibh tempus adipiscing quisque hendrerit mi blandit tortor, vulputate dolor ipsum nibh, nisl non vel fringilla placerat sit bibendum.",
      "longDescriptionUrl": "quadtek.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-746/subdomain-746",
      "roleId": "role-746",
      "subDomain": "subdomain-746",
      "logo": "http://placehold.it/64x64",
      "name": "Optiplex",
      "longDescription": "Euismod augue porttitor vulputate morbi id faucibus. Massa eros maecenas natoque etiam consequat. Commodo nibh pulvinar nunc euismod viverra tempus.",
      "longDescriptionUrl": "optiplex.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-747/subdomain-747",
      "roleId": "role-747",
      "subDomain": "subdomain-747",
      "logo": "http://placehold.it/64x64",
      "name": "Iridimax",
      "longDescription": "Arcu nisi bibendum morbi nisl. Consectetur finibus neque ipsum maecenas. Ultrices dolor tortor suscipit eros et tristique finibus hendrerit nibh.",
      "longDescriptionUrl": "iridimax.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-748/subdomain-748",
      "roleId": "role-748",
      "subDomain": "subdomain-748",
      "logo": "http://placehold.it/64x64",
      "name": "Pancast",
      "longDescription": "Morbi ligula diam diam id, commodo ultrices justo eti tempor. Maximus cras etiam elit amet tempus sed eget adipiscing velit.",
      "longDescriptionUrl": "pancast.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-749/subdomain-749",
      "roleId": "role-749",
      "subDomain": "subdomain-749",
      "logo": "http://placehold.it/64x64",
      "name": "Logico",
      "longDescription": "Amet vehicula sapien pulvinar aenean euismod est ante diam porttitor, vel dignissim i cursus. Adipiscing auctor ex lacinia leo sapien.",
      "longDescriptionUrl": "logico.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-750/subdomain-750",
      "roleId": "role-750",
      "subDomain": "subdomain-750",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Felis pharetra condimentum aenean au massa, consectetur quisque risus justo. Eu iaculis ex imperdiet curabitur justo aliquet risus vulputate scelerisque.",
      "longDescriptionUrl": "hassifix.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-751/subdomain-751",
      "roleId": "role-751",
      "subDomain": "subdomain-751",
      "logo": "http://placehold.it/64x64",
      "name": "DuoServe",
      "longDescription": "Enim sagittis ut pellentesque morbi consequat. Nulla est posuere tempor accumsan. Ut consequat curabitur nam proin maximus. Diam lacinia rhoncus.",
      "longDescriptionUrl": "duoserve.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-752/subdomain-752",
      "roleId": "role-752",
      "subDomain": "subdomain-752",
      "logo": "http://placehold.it/64x64",
      "name": "Freecast",
      "longDescription": "Eti consectetur suscipit metus enim ornare, nunc enim rhoncus orci. Lacus maecenas velit condimentum nisl vulputate. Adipiscing sem et etiam.",
      "longDescriptionUrl": "freecast.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-753/subdomain-753",
      "roleId": "role-753",
      "subDomain": "subdomain-753",
      "logo": "http://placehold.it/64x64",
      "name": "VenStrategy",
      "longDescription": "Sollicitudin eu maximus ligula vulputate iaculis, est tempor nam scelerisque. Turpis pulvinar orci posuere etiam condimentum purus, accumsan suscipit laoreet.",
      "longDescriptionUrl": "venstrategy.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-754/subdomain-754",
      "roleId": "role-754",
      "subDomain": "subdomain-754",
      "logo": "http://placehold.it/64x64",
      "name": "GrafixMedia",
      "longDescription": "Sed turpis amet ultrices lacus curabitur. Ornare vehicula lobortis posuere, cursus tristique felis vehicula est facilisis maximus pretium erat vel.",
      "longDescriptionUrl": "grafixmedia.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-755/subdomain-755",
      "roleId": "role-755",
      "subDomain": "subdomain-755",
      "logo": "http://placehold.it/64x64",
      "name": "VenStrategy",
      "longDescription": "Purus cras nulla quis ultricies e scelerisque augue nunc auctor mattis. Sollicitudin maximus quis ultrices. Pellentesque condimentum lacus enim donec.",
      "longDescriptionUrl": "venstrategy.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-756/subdomain-756",
      "roleId": "role-756",
      "subDomain": "subdomain-756",
      "logo": "http://placehold.it/64x64",
      "name": "OmniTouch",
      "longDescription": "Mauris nisl lacus ornare nisi. Id porttitor posuere aliquet proin. Diam justo bibendum orci dignissim pellentesque massa augue sodales risus.",
      "longDescriptionUrl": "omnitouch.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-757/subdomain-757",
      "roleId": "role-757",
      "subDomain": "subdomain-757",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Lectus imperdiet tempus sem nam. Lobortis magna aliquam ac et lacinia vulputate. Bibendum placerat quis sit arcu vehicula sed natoque.",
      "longDescriptionUrl": "skycenta.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-758/subdomain-758",
      "roleId": "role-758",
      "subDomain": "subdomain-758",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Neque arcu commodo sapien aliquam erat augue lectus sapien nam sapien, fringilla pretium risus nisi imperdiet, sodales orci mauris quisque.",
      "longDescriptionUrl": "proline.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-759/subdomain-759",
      "roleId": "role-759",
      "subDomain": "subdomain-759",
      "logo": "http://placehold.it/64x64",
      "name": "FastMart",
      "longDescription": "Pharetra finibus consectetur lectus pretium finibus lorem pharetra blandit risus felis. Ipsum lobortis orci pretium tempor. Natoque et magna cursus.",
      "longDescriptionUrl": "fastmart.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-760/subdomain-760",
      "roleId": "role-760",
      "subDomain": "subdomain-760",
      "logo": "http://placehold.it/64x64",
      "name": "Anaplex",
      "longDescription": "Ante massa condimentum imperdiet sem, viverra eti e gravida, au enim proin non, mollis placerat porttitor nunc est quis i.",
      "longDescriptionUrl": "anaplex.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-761/subdomain-761",
      "roleId": "role-761",
      "subDomain": "subdomain-761",
      "logo": "http://placehold.it/64x64",
      "name": "Thermolock",
      "longDescription": "Non sodales ac condimentum nisi facilisis et scelerisque. Imperdiet placerat tincidunt nunc adipiscing vulputate accumsan ut eu. Amet eros sodales.",
      "longDescriptionUrl": "thermolock.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-762/subdomain-762",
      "roleId": "role-762",
      "subDomain": "subdomain-762",
      "logo": "http://placehold.it/64x64",
      "name": "CoreRobotics",
      "longDescription": "Nunc ultrices quisque etiam maximus est consequat lacinia gravida e magna. Ante viverra leo donec vel morbi arcu gravida imperdiet.",
      "longDescriptionUrl": "corerobotics.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-763/subdomain-763",
      "roleId": "role-763",
      "subDomain": "subdomain-763",
      "logo": "http://placehold.it/64x64",
      "name": "Playtech",
      "longDescription": "Dictum neque leo pellentesque sollicitudin donec ornare sem. Augue maecenas tristique dignissim mi maecenas aenean tempor dictum. Non quis euismod.",
      "longDescriptionUrl": "playtech.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-764/subdomain-764",
      "roleId": "role-764",
      "subDomain": "subdomain-764",
      "logo": "http://placehold.it/64x64",
      "name": "Sealine",
      "longDescription": "Maecenas augue faucibus etiam turpis sollicitudin, bibendum ac id id ligula cursus, lobortis dolor maecenas dignissim. Ac lobortis quis eu.",
      "longDescriptionUrl": "sealine.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-765/subdomain-765",
      "roleId": "role-765",
      "subDomain": "subdomain-765",
      "logo": "http://placehold.it/64x64",
      "name": "MultiLingua",
      "longDescription": "Elit morbi hendrerit i orci maximus lectus ultrices faucibus ex. Curabitur e sollicitudin nulla diam erat id et etiam curabitur.",
      "longDescriptionUrl": "multilingua.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-766/subdomain-766",
      "roleId": "role-766",
      "subDomain": "subdomain-766",
      "logo": "http://placehold.it/64x64",
      "name": "Cryosoft",
      "longDescription": "Dictum sed dictum tristique lobortis pulvinar sagittis gravida orci donec justo placerat. Iaculis ex nam nunc, ex finibus proin au.",
      "longDescriptionUrl": "cryosoft.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-767/subdomain-767",
      "roleId": "role-767",
      "subDomain": "subdomain-767",
      "logo": "http://placehold.it/64x64",
      "name": "Logico",
      "longDescription": "Elit enim a tortor metus, tortor risus ante placerat. Pellentesque eget dolor accumsan aliquam diam adipiscing. Facilisis mi rhoncus lacus.",
      "longDescriptionUrl": "logico.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-768/subdomain-768",
      "roleId": "role-768",
      "subDomain": "subdomain-768",
      "logo": "http://placehold.it/64x64",
      "name": "DynaAir",
      "longDescription": "Adipiscing euismod tempus e tincidunt. Cras consectetur ut ipsum. E leo elit eget a orci fringilla. Ultrices eget nisl imperdiet.",
      "longDescriptionUrl": "dynaair.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-769/subdomain-769",
      "roleId": "role-769",
      "subDomain": "subdomain-769",
      "logo": "http://placehold.it/64x64",
      "name": "Optiplex",
      "longDescription": "Maecenas dignissim mauris augue facilisis vehicula placerat pulvinar vitae neque. Amet augue at au placerat. Facilisis sed a ultricies lacinia.",
      "longDescriptionUrl": "optiplex.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-770/subdomain-770",
      "roleId": "role-770",
      "subDomain": "subdomain-770",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Mauris rhoncus auctor enim sem eti quis mollis. At ipsum consectetur ipsum faucibus ultrices vitae placerat, posuere i lacinia arcu.",
      "longDescriptionUrl": "openserv.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-771/subdomain-771",
      "roleId": "role-771",
      "subDomain": "subdomain-771",
      "logo": "http://placehold.it/64x64",
      "name": "Baramax",
      "longDescription": "Augue dolor tristique accumsan pulvinar dui rhoncus aliquam tortor natoque id diam nisl imperdiet cursus, ligula erat placerat orci rhoncus.",
      "longDescriptionUrl": "baramax.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-772/subdomain-772",
      "roleId": "role-772",
      "subDomain": "subdomain-772",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Lobortis in etiam felis curabitur, aliquet curabitur mollis tortor ex nulla laoreet. Arcu leo tincidunt erat purus orci leo turpis.",
      "longDescriptionUrl": "openserv.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-773/subdomain-773",
      "roleId": "role-773",
      "subDomain": "subdomain-773",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Nunc consequat eget arcu ultrices sem rhoncus amet ut. Ac purus mauris gravida maximus adipiscing natoque, pretium au at vitae.",
      "longDescriptionUrl": "infratouch.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-774/subdomain-774",
      "roleId": "role-774",
      "subDomain": "subdomain-774",
      "logo": "http://placehold.it/64x64",
      "name": "Tomiatech",
      "longDescription": "Accumsan leo erat posuere porttitor, mattis lectus lectus gravida sapien blandit diam, purus turpis sodales laoreet lacus, sem lacus consectetur.",
      "longDescriptionUrl": "tomiatech.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-775/subdomain-775",
      "roleId": "role-775",
      "subDomain": "subdomain-775",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "Nisl diam aenean vehicula mi, e nulla risus sed sodales tincidunt pellentesque maximus. Orci consectetur leo imperdiet. E vel et.",
      "longDescriptionUrl": "storex.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-776/subdomain-776",
      "roleId": "role-776",
      "subDomain": "subdomain-776",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "Blandit velit adipiscing quis vitae finibus tempus. Et mauris sit sed. Tempus vehicula posuere amet nulla pulvinar at enim ultrices.",
      "longDescriptionUrl": "templatek.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-777/subdomain-777",
      "roleId": "role-777",
      "subDomain": "subdomain-777",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Erat quis faucibus ante aliquam turpis scelerisque, elementum sodales purus ligula felis est purus. Enim lacinia accumsan amet eros est.",
      "longDescriptionUrl": "connic.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-778/subdomain-778",
      "roleId": "role-778",
      "subDomain": "subdomain-778",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Aenean gravida lorem felis velit. Cras rhoncus facilisis lacinia i, nibh faucibus euismod est tincidunt, hendrerit e scelerisque eti pulvinar.",
      "longDescriptionUrl": "triosys.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-779/subdomain-779",
      "roleId": "role-779",
      "subDomain": "subdomain-779",
      "logo": "http://placehold.it/64x64",
      "name": "VenStrategy",
      "longDescription": "Hendrerit diam eros sem nunc finibus, ipsum orci sed ac sapien aenean. Placerat proin accumsan nisi id sed orci aliquet.",
      "longDescriptionUrl": "venstrategy.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-780/subdomain-780",
      "roleId": "role-780",
      "subDomain": "subdomain-780",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Ipsum lacinia mauris sed maximus sapien lobortis iaculis. Laoreet adipiscing felis cursus. Vestibulum sit proin felis, tempus euismod eti dolor.",
      "longDescriptionUrl": "unilogic.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-781/subdomain-781",
      "roleId": "role-781",
      "subDomain": "subdomain-781",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Etiam quisque blandit massa ex massa dolor dignissim ante eu sodales a ligula laoreet eros aenean faucibus bibendum consectetur sodales.",
      "longDescriptionUrl": "fastfreight.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-782/subdomain-782",
      "roleId": "role-782",
      "subDomain": "subdomain-782",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Est velit aliquam bibendum magna aliquam euismod vitae imperdiet, suscipit adipiscing aenean gravida. Augue elementum iaculis tristique neque eget in.",
      "longDescriptionUrl": "celmax.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-783/subdomain-783",
      "roleId": "role-783",
      "subDomain": "subdomain-783",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Id eti turpis sapien maximus ligula donec, mi sed euismod pellentesque. Sodales purus maximus in scelerisque. Ultrices mi id elementum.",
      "longDescriptionUrl": "corptek.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-784/subdomain-784",
      "roleId": "role-784",
      "subDomain": "subdomain-784",
      "logo": "http://placehold.it/64x64",
      "name": "QuadNet",
      "longDescription": "Dui lectus ultricies consequat dignissim porttitor mauris maximus maecenas lacus nam scelerisque ipsum. Enim diam adipiscing dictum massa lectus neque.",
      "longDescriptionUrl": "quadnet.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-785/subdomain-785",
      "roleId": "role-785",
      "subDomain": "subdomain-785",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "At ultrices neque gravida imperdiet ut. Blandit dui consectetur posuere sit viverra. Leo sem maecenas pretium sem. Ut consequat natoque.",
      "longDescriptionUrl": "westgate.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-786/subdomain-786",
      "roleId": "role-786",
      "subDomain": "subdomain-786",
      "logo": "http://placehold.it/64x64",
      "name": "Polycore",
      "longDescription": "Pretium ut e suscipit porttitor, maximus tincidunt pretium a rhoncus elementum elit eti. Nibh orci sollicitudin mollis orci consequat viverra.",
      "longDescriptionUrl": "polycore.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-787/subdomain-787",
      "roleId": "role-787",
      "subDomain": "subdomain-787",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Eget lacinia commodo tempor augue adipiscing. Augue vestibulum nulla scelerisque vestibulum eti, nunc elit magna bibendum. Ultrices hendrerit sapien ut.",
      "longDescriptionUrl": "triosys.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-788/subdomain-788",
      "roleId": "role-788",
      "subDomain": "subdomain-788",
      "logo": "http://placehold.it/64x64",
      "name": "Infracom",
      "longDescription": "Posuere pharetra lectus adipiscing vehicula nulla dictum. Natoque rhoncus erat faucibus elementum vulputate sollicitudin. Curabitur mi proin nisi felis elit.",
      "longDescriptionUrl": "infracom.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-789/subdomain-789",
      "roleId": "role-789",
      "subDomain": "subdomain-789",
      "logo": "http://placehold.it/64x64",
      "name": "Polycore",
      "longDescription": "Eros tristique mollis dui enim eu metus tortor commodo porttitor ipsum ipsum diam nam cursus fringilla gravida eros amet auctor.",
      "longDescriptionUrl": "polycore.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-790/subdomain-790",
      "roleId": "role-790",
      "subDomain": "subdomain-790",
      "logo": "http://placehold.it/64x64",
      "name": "Dynaroc",
      "longDescription": "Morbi erat eget i vestibulum blandit, consectetur ligula pretium consectetur euismod. Felis tortor imperdiet au dui aenean vestibulum nibh leo.",
      "longDescriptionUrl": "dynaroc.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-791/subdomain-791",
      "roleId": "role-791",
      "subDomain": "subdomain-791",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "At accumsan eu scelerisque consequat est pretium. Proin vestibulum maecenas tortor ex. Pharetra tristique ante iaculis etiam. Est suscipit nisl.",
      "longDescriptionUrl": "conixco.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-792/subdomain-792",
      "roleId": "role-792",
      "subDomain": "subdomain-792",
      "logo": "http://placehold.it/64x64",
      "name": "Coolinga",
      "longDescription": "Tempor e vel amet curabitur. Sem fringilla tempor gravida sed eti, metus tristique maximus sem dictum dictum elementum posuere tristique.",
      "longDescriptionUrl": "coolinga.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-793/subdomain-793",
      "roleId": "role-793",
      "subDomain": "subdomain-793",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Consectetur suscipit blandit elit ut aliquam pretium vehicula sit mattis arcu consectetur. Erat purus id lorem ex lorem dolor enim.",
      "longDescriptionUrl": "skycenta.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-794/subdomain-794",
      "roleId": "role-794",
      "subDomain": "subdomain-794",
      "logo": "http://placehold.it/64x64",
      "name": "StrategyLine",
      "longDescription": "Nam ut sagittis nam vestibulum faucibus maecenas, aenean porttitor nam nisl ante nam. Lacinia dictum ut nibh, sapien mauris metus.",
      "longDescriptionUrl": "strategyline.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-795/subdomain-795",
      "roleId": "role-795",
      "subDomain": "subdomain-795",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Sodales commodo auctor dictum i, erat velit aliquam e lacus sapien. Blandit ultricies amet lobortis. Neque commodo aliquam au augue.",
      "longDescriptionUrl": "hassifix.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-796/subdomain-796",
      "roleId": "role-796",
      "subDomain": "subdomain-796",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "Imperdiet curabitur felis aliquet lacinia, fringilla magna posuere arcu pharetra bibendum aenean donec leo, amet sapien sagittis sodales in adipiscing.",
      "longDescriptionUrl": "conixco.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-797/subdomain-797",
      "roleId": "role-797",
      "subDomain": "subdomain-797",
      "logo": "http://placehold.it/64x64",
      "name": "Hypervision",
      "longDescription": "At ultricies ligula massa purus, mattis leo est sem curabitur. Pretium orci sodales au felis porttitor, maximus lorem dui natoque.",
      "longDescriptionUrl": "hypervision.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-798/subdomain-798",
      "roleId": "role-798",
      "subDomain": "subdomain-798",
      "logo": "http://placehold.it/64x64",
      "name": "Nitrocam",
      "longDescription": "Magna curabitur eros hendrerit felis ex hendrerit consectetur nisl dignissim suscipit natoque at tincidunt tempus nulla faucibus. Vehicula justo tincidunt.",
      "longDescriptionUrl": "nitrocam.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-799/subdomain-799",
      "roleId": "role-799",
      "subDomain": "subdomain-799",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Ac dictum vel quisque a fringilla. Mollis erat eget amet lectus hendrerit cras ligula orci cras tristique aliquam orci faucibus.",
      "longDescriptionUrl": "celmax.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-800/subdomain-800",
      "roleId": "role-800",
      "subDomain": "subdomain-800",
      "logo": "http://placehold.it/64x64",
      "name": "Citisys",
      "longDescription": "Sapien vehicula felis non hendrerit dignissim cras, elementum risus mauris i eu sagittis. Dignissim fringilla imperdiet sollicitudin tortor id diam.",
      "longDescriptionUrl": "citisys.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-801/subdomain-801",
      "roleId": "role-801",
      "subDomain": "subdomain-801",
      "logo": "http://placehold.it/64x64",
      "name": "MediaDime",
      "longDescription": "Vehicula in metus elementum lacinia gravida vulputate eti quisque. Condimentum etiam tristique tristique. Arcu accumsan felis scelerisque, leo ornare at.",
      "longDescriptionUrl": "mediadime.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-802/subdomain-802",
      "roleId": "role-802",
      "subDomain": "subdomain-802",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Sollicitudin tortor scelerisque leo leo fringilla consectetur e purus porttitor leo dictum elementum magna gravida, ut sed mattis sagittis hendrerit.",
      "longDescriptionUrl": "helixicon.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-803/subdomain-803",
      "roleId": "role-803",
      "subDomain": "subdomain-803",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Tristique posuere euismod laoreet pretium in commodo laoreet hendrerit, nibh tortor ultrices ornare. Commodo sit tempor tortor. Est nulla iaculis.",
      "longDescriptionUrl": "openserv.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-804/subdomain-804",
      "roleId": "role-804",
      "subDomain": "subdomain-804",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Proin dui scelerisque vitae donec nam. Imperdiet laoreet au a, in dolor augue dignissim dui dolor fringilla dignissim adipiscing amet.",
      "longDescriptionUrl": "skycenta.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-805/subdomain-805",
      "roleId": "role-805",
      "subDomain": "subdomain-805",
      "logo": "http://placehold.it/64x64",
      "name": "Dynalab",
      "longDescription": "Metus et maximus euismod aliquet. Condimentum justo scelerisque arcu vulputate turpis ex maximus lacinia sed maecenas magna nulla euismod dolor.",
      "longDescriptionUrl": "dynalab.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-806/subdomain-806",
      "roleId": "role-806",
      "subDomain": "subdomain-806",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "Id lectus maecenas curabitur facilisis risus sapien. Nunc rhoncus consequat nibh faucibus nunc. Erat dignissim fringilla sapien. Eti nisi ipsum.",
      "longDescriptionUrl": "conixco.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-807/subdomain-807",
      "roleId": "role-807",
      "subDomain": "subdomain-807",
      "logo": "http://placehold.it/64x64",
      "name": "Polygan",
      "longDescription": "Sem nisl posuere augue elit nibh nibh, orci porttitor donec aliquet, in massa nunc blandit aliquet. Aliquet imperdiet pharetra dictum.",
      "longDescriptionUrl": "polygan.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-808/subdomain-808",
      "roleId": "role-808",
      "subDomain": "subdomain-808",
      "logo": "http://placehold.it/64x64",
      "name": "Acousticom",
      "longDescription": "Maecenas elementum e non velit diam, lobortis eget purus erat elit. Lacinia faucibus maximus placerat eti. Sit adipiscing au vel.",
      "longDescriptionUrl": "acousticom.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-809/subdomain-809",
      "roleId": "role-809",
      "subDomain": "subdomain-809",
      "logo": "http://placehold.it/64x64",
      "name": "Cameratek",
      "longDescription": "Pharetra e vel purus erat dui lacus lobortis cursus elit. Dignissim elementum sollicitudin leo pharetra tempus viverra est consequat laoreet.",
      "longDescriptionUrl": "cameratek.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-810/subdomain-810",
      "roleId": "role-810",
      "subDomain": "subdomain-810",
      "logo": "http://placehold.it/64x64",
      "name": "Xenosys",
      "longDescription": "Augue orci metus non metus. Eget purus vulputate justo cursus. Dui porttitor maximus curabitur, commodo sed mollis neque augue scelerisque.",
      "longDescriptionUrl": "xenosys.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-811/subdomain-811",
      "roleId": "role-811",
      "subDomain": "subdomain-811",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Sed natoque bibendum vitae eros pharetra. Lacus nam risus tempus ex, risus adipiscing a commodo sagittis eros lectus ex quisque.",
      "longDescriptionUrl": "solexis.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-812/subdomain-812",
      "roleId": "role-812",
      "subDomain": "subdomain-812",
      "logo": "http://placehold.it/64x64",
      "name": "MediaDime",
      "longDescription": "Natoque nam vulputate eget vulputate lobortis diam cras maximus, ut scelerisque in ultricies. Non proin quisque ut, velit vel mollis.",
      "longDescriptionUrl": "mediadime.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-813/subdomain-813",
      "roleId": "role-813",
      "subDomain": "subdomain-813",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Maecenas risus felis neque cursus, magna finibus diam non ut sodales laoreet commodo. Dignissim arcu sed pretium dignissim eti tincidunt.",
      "longDescriptionUrl": "helixicon.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-814/subdomain-814",
      "roleId": "role-814",
      "subDomain": "subdomain-814",
      "logo": "http://placehold.it/64x64",
      "name": "Cryosoft",
      "longDescription": "Commodo elementum ultrices eget e pretium. Lectus pulvinar au elementum nunc ultrices, facilisis aliquet sit quis lectus ante suscipit tincidunt.",
      "longDescriptionUrl": "cryosoft.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-815/subdomain-815",
      "roleId": "role-815",
      "subDomain": "subdomain-815",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Eti dolor in etiam euismod amet eget i posuere bibendum iaculis. Mi bibendum ex id sem rhoncus. Sapien sapien risus.",
      "longDescriptionUrl": "lexiconlabs.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-816/subdomain-816",
      "roleId": "role-816",
      "subDomain": "subdomain-816",
      "logo": "http://placehold.it/64x64",
      "name": "VTGrafix",
      "longDescription": "Vulputate lobortis neque sed mi donec felis imperdiet maecenas mattis a magna. Maecenas sed tempor ut vehicula aenean in laoreet.",
      "longDescriptionUrl": "vtgrafix.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-817/subdomain-817",
      "roleId": "role-817",
      "subDomain": "subdomain-817",
      "logo": "http://placehold.it/64x64",
      "name": "NitroSystems",
      "longDescription": "Scelerisque sollicitudin ut lorem cursus aliquet tempus mattis nam ultricies imperdiet quisque. Vulputate vehicula lacus ligula ligula, sem condimentum sollicitudin.",
      "longDescriptionUrl": "nitrosystems.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-818/subdomain-818",
      "roleId": "role-818",
      "subDomain": "subdomain-818",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "Et massa mattis eti proin. Leo e vehicula diam rhoncus velit ipsum in magna tortor, nibh au imperdiet vulputate id.",
      "longDescriptionUrl": "westgate.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-819/subdomain-819",
      "roleId": "role-819",
      "subDomain": "subdomain-819",
      "logo": "http://placehold.it/64x64",
      "name": "Baramax",
      "longDescription": "Mi magna risus ipsum aenean arcu. Condimentum sapien ac turpis vehicula enim etiam. Mauris purus scelerisque massa aenean lorem enim.",
      "longDescriptionUrl": "baramax.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-820/subdomain-820",
      "roleId": "role-820",
      "subDomain": "subdomain-820",
      "logo": "http://placehold.it/64x64",
      "name": "Nitrocam",
      "longDescription": "Vestibulum est finibus accumsan tempor fringilla justo, nunc donec tincidunt lectus, lacinia quis mi risus turpis. Iaculis dolor neque blandit.",
      "longDescriptionUrl": "nitrocam.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-821/subdomain-821",
      "roleId": "role-821",
      "subDomain": "subdomain-821",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "Iaculis massa laoreet ac cras turpis vitae pharetra eti rhoncus natoque lacus vitae est. Ex leo iaculis ultricies imperdiet metus.",
      "longDescriptionUrl": "westgate.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-822/subdomain-822",
      "roleId": "role-822",
      "subDomain": "subdomain-822",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Orci blandit adipiscing etiam eros, sem velit vel donec arcu. Purus laoreet at ultrices mauris ligula at. Sit facilisis augue.",
      "longDescriptionUrl": "sixtysix.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-823/subdomain-823",
      "roleId": "role-823",
      "subDomain": "subdomain-823",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "Cras e natoque lacinia euismod mattis aenean i id finibus, accumsan faucibus elementum i diam blandit orci maecenas erat velit.",
      "longDescriptionUrl": "templatek.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-824/subdomain-824",
      "roleId": "role-824",
      "subDomain": "subdomain-824",
      "logo": "http://placehold.it/64x64",
      "name": "LoopSys",
      "longDescription": "Mauris amet vulputate turpis sem posuere eros scelerisque ut neque eros massa consectetur magna, tincidunt natoque curabitur ultricies proin risus.",
      "longDescriptionUrl": "loopsys.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-825/subdomain-825",
      "roleId": "role-825",
      "subDomain": "subdomain-825",
      "logo": "http://placehold.it/64x64",
      "name": "TurboSystems",
      "longDescription": "Pulvinar cursus ac cras finibus erat blandit curabitur au curabitur vel donec. Turpis lobortis posuere pellentesque et euismod ornare risus.",
      "longDescriptionUrl": "turbosystems.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-826/subdomain-826",
      "roleId": "role-826",
      "subDomain": "subdomain-826",
      "logo": "http://placehold.it/64x64",
      "name": "Playtech",
      "longDescription": "Bibendum au vitae dictum auctor faucibus vestibulum hendrerit morbi elit nam. Proin leo eget sollicitudin. Sapien felis turpis id tortor.",
      "longDescriptionUrl": "playtech.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-827/subdomain-827",
      "roleId": "role-827",
      "subDomain": "subdomain-827",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Tempor lacinia maximus adipiscing sagittis gravida non maecenas elementum porttitor quis consequat au augue cras, proin lobortis lorem ante eget.",
      "longDescriptionUrl": "solexis.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-828/subdomain-828",
      "roleId": "role-828",
      "subDomain": "subdomain-828",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Dignissim sodales commodo neque purus, mauris vel sed lacinia. Amet aenean velit eget elementum auctor. Commodo au fringilla elit augue.",
      "longDescriptionUrl": "solexis.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-829/subdomain-829",
      "roleId": "role-829",
      "subDomain": "subdomain-829",
      "logo": "http://placehold.it/64x64",
      "name": "Viewtopia",
      "longDescription": "Scelerisque elit eget lacinia a curabitur. Lacinia viverra aenean maecenas. Amet elit nam blandit. In condimentum et scelerisque eros lorem.",
      "longDescriptionUrl": "viewtopia.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-830/subdomain-830",
      "roleId": "role-830",
      "subDomain": "subdomain-830",
      "logo": "http://placehold.it/64x64",
      "name": "Xenosys",
      "longDescription": "Ex massa commodo consequat natoque, vehicula tempus cursus ante aenean imperdiet nisl. Mollis magna morbi scelerisque. Natoque lorem eu posuere.",
      "longDescriptionUrl": "xenosys.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-831/subdomain-831",
      "roleId": "role-831",
      "subDomain": "subdomain-831",
      "logo": "http://placehold.it/64x64",
      "name": "Creatonix",
      "longDescription": "Ipsum faucibus eget aliquet finibus aliquet scelerisque. Amet scelerisque posuere iaculis. Aenean turpis dui at. Condimentum iaculis purus metus diam.",
      "longDescriptionUrl": "creatonix.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-832/subdomain-832",
      "roleId": "role-832",
      "subDomain": "subdomain-832",
      "logo": "http://placehold.it/64x64",
      "name": "Baramax",
      "longDescription": "Nulla faucibus iaculis nibh justo ultricies ipsum nulla nisl erat. Lorem quisque vestibulum condimentum est posuere. Maximus posuere eros placerat.",
      "longDescriptionUrl": "baramax.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-833/subdomain-833",
      "roleId": "role-833",
      "subDomain": "subdomain-833",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Magna id viverra ipsum lacinia. Cursus erat lobortis justo elementum non tempor blandit nisi lorem pretium pulvinar placerat quisque euismod.",
      "longDescriptionUrl": "eluxa.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-834/subdomain-834",
      "roleId": "role-834",
      "subDomain": "subdomain-834",
      "logo": "http://placehold.it/64x64",
      "name": "ForeTrust",
      "longDescription": "Etiam lacinia aenean ut pharetra hendrerit suscipit commodo tincidunt faucibus pellentesque. Enim erat bibendum accumsan scelerisque. Blandit enim ante a.",
      "longDescriptionUrl": "foretrust.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-835/subdomain-835",
      "roleId": "role-835",
      "subDomain": "subdomain-835",
      "logo": "http://placehold.it/64x64",
      "name": "Tecomix",
      "longDescription": "Gravida felis neque ultricies dolor. Ligula bibendum sagittis eti. Lacus ultrices orci blandit scelerisque. Condimentum lectus au imperdiet e rhoncus.",
      "longDescriptionUrl": "tecomix.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-836/subdomain-836",
      "roleId": "role-836",
      "subDomain": "subdomain-836",
      "logo": "http://placehold.it/64x64",
      "name": "FastMart",
      "longDescription": "Dignissim scelerisque lobortis eros eu vel curabitur. Eros eros quisque enim. Risus nam magna et. Eu ex cursus e nulla.",
      "longDescriptionUrl": "fastmart.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-837/subdomain-837",
      "roleId": "role-837",
      "subDomain": "subdomain-837",
      "logo": "http://placehold.it/64x64",
      "name": "Kancom",
      "longDescription": "Cras leo faucibus proin elementum arcu eti consectetur accumsan, etiam mattis tristique euismod aenean mattis dui laoreet. Fringilla id pharetra.",
      "longDescriptionUrl": "kancom.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-838/subdomain-838",
      "roleId": "role-838",
      "subDomain": "subdomain-838",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Mauris non magna velit posuere. Elit condimentum laoreet placerat, i sodales ultricies magna i justo. Maecenas auctor est rhoncus vestibulum.",
      "longDescriptionUrl": "openserv.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-839/subdomain-839",
      "roleId": "role-839",
      "subDomain": "subdomain-839",
      "logo": "http://placehold.it/64x64",
      "name": "VenStrategy",
      "longDescription": "Porttitor suscipit tempor laoreet rhoncus a nam iaculis ipsum, sagittis et ligula ultricies. Iaculis imperdiet imperdiet sapien lacinia maximus euismod.",
      "longDescriptionUrl": "venstrategy.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-840/subdomain-840",
      "roleId": "role-840",
      "subDomain": "subdomain-840",
      "logo": "http://placehold.it/64x64",
      "name": "Hassifix",
      "longDescription": "Nulla neque id posuere lobortis. Pulvinar a pulvinar ultricies donec, facilisis laoreet commodo metus mattis. Suscipit ac eti pulvinar in.",
      "longDescriptionUrl": "hassifix.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-841/subdomain-841",
      "roleId": "role-841",
      "subDomain": "subdomain-841",
      "logo": "http://placehold.it/64x64",
      "name": "ForeTrust",
      "longDescription": "Enim orci faucibus felis proin. Eros sagittis euismod faucibus bibendum tortor quisque pharetra scelerisque. Finibus velit dui leo consequat tempus.",
      "longDescriptionUrl": "foretrust.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-842/subdomain-842",
      "roleId": "role-842",
      "subDomain": "subdomain-842",
      "logo": "http://placehold.it/64x64",
      "name": "LoopSys",
      "longDescription": "Sollicitudin a etiam faucibus pellentesque blandit, metus cursus metus nulla, diam lacinia fringilla cras dictum mi lacinia, proin vel vitae.",
      "longDescriptionUrl": "loopsys.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-843/subdomain-843",
      "roleId": "role-843",
      "subDomain": "subdomain-843",
      "logo": "http://placehold.it/64x64",
      "name": "Hivemind",
      "longDescription": "Ultricies placerat scelerisque metus arcu porttitor pulvinar non. Morbi pellentesque vel i pretium. I aliquet consequat au porttitor non hendrerit.",
      "longDescriptionUrl": "hivemind.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-844/subdomain-844",
      "roleId": "role-844",
      "subDomain": "subdomain-844",
      "logo": "http://placehold.it/64x64",
      "name": "Maxcast",
      "longDescription": "Finibus natoque elit non neque quis mi elit. Tempor consectetur i diam. Nibh ex rhoncus nisl iaculis iaculis a etiam.",
      "longDescriptionUrl": "maxcast.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-845/subdomain-845",
      "roleId": "role-845",
      "subDomain": "subdomain-845",
      "logo": "http://placehold.it/64x64",
      "name": "Terralabs",
      "longDescription": "Nunc id lectus e est. Non massa aliquet posuere sollicitudin bibendum facilisis nisl. Tristique etiam amet i faucibus cras sagittis.",
      "longDescriptionUrl": "terralabs.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-846/subdomain-846",
      "roleId": "role-846",
      "subDomain": "subdomain-846",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Placerat turpis lacinia dolor lacus sapien, tincidunt sagittis adipiscing sagittis risus mi dolor iaculis in quisque, nunc neque donec maecenas.",
      "longDescriptionUrl": "zatheon.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-847/subdomain-847",
      "roleId": "role-847",
      "subDomain": "subdomain-847",
      "logo": "http://placehold.it/64x64",
      "name": "Sophis",
      "longDescription": "Imperdiet nam est dolor consequat tristique, mattis a natoque proin i justo lorem vehicula accumsan pretium. Lacus at dignissim auctor.",
      "longDescriptionUrl": "sophis.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-848/subdomain-848",
      "roleId": "role-848",
      "subDomain": "subdomain-848",
      "logo": "http://placehold.it/64x64",
      "name": "CoreRobotics",
      "longDescription": "Eti bibendum mattis tempus viverra, accumsan auctor quisque sagittis, quis turpis eu leo. Et maecenas est sapien placerat a purus.",
      "longDescriptionUrl": "corerobotics.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-849/subdomain-849",
      "roleId": "role-849",
      "subDomain": "subdomain-849",
      "logo": "http://placehold.it/64x64",
      "name": "Anaplex",
      "longDescription": "Fringilla iaculis quisque ornare in eu ultrices. Purus imperdiet leo cursus nulla vestibulum. Purus arcu gravida i id pellentesque massa.",
      "longDescriptionUrl": "anaplex.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-850/subdomain-850",
      "roleId": "role-850",
      "subDomain": "subdomain-850",
      "logo": "http://placehold.it/64x64",
      "name": "GrafixMedia",
      "longDescription": "Lorem hendrerit auctor a au metus nisi elementum morbi, condimentum erat elementum sed sollicitudin sapien lacinia aliquet ultrices porttitor vel.",
      "longDescriptionUrl": "grafixmedia.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-851/subdomain-851",
      "roleId": "role-851",
      "subDomain": "subdomain-851",
      "logo": "http://placehold.it/64x64",
      "name": "Iridimax",
      "longDescription": "Elementum nulla dolor cras hendrerit etiam. Sagittis faucibus leo ac mi imperdiet sit sapien eti posuere tincidunt sit pretium donec.",
      "longDescriptionUrl": "iridimax.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-852/subdomain-852",
      "roleId": "role-852",
      "subDomain": "subdomain-852",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Magna lobortis cursus lorem tempor. Rhoncus faucibus laoreet morbi. Ipsum commodo suscipit lectus velit curabitur nulla, lectus dignissim adipiscing viverra.",
      "longDescriptionUrl": "cryptonica.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-853/subdomain-853",
      "roleId": "role-853",
      "subDomain": "subdomain-853",
      "logo": "http://placehold.it/64x64",
      "name": "Cryosoft",
      "longDescription": "Laoreet lectus ligula nulla orci eget augue. Pulvinar ligula pretium sapien e tincidunt etiam. Lacinia morbi ultricies tristique e pretium.",
      "longDescriptionUrl": "cryosoft.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-854/subdomain-854",
      "roleId": "role-854",
      "subDomain": "subdomain-854",
      "logo": "http://placehold.it/64x64",
      "name": "Infracom",
      "longDescription": "Erat viverra mattis aliquet erat posuere sapien nisi et consectetur faucibus eros. Mattis gravida tempor morbi magna accumsan iaculis augue.",
      "longDescriptionUrl": "infracom.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-855/subdomain-855",
      "roleId": "role-855",
      "subDomain": "subdomain-855",
      "logo": "http://placehold.it/64x64",
      "name": "LoopSys",
      "longDescription": "Arcu nam aenean elementum quis, iaculis posuere suscipit sed. Et ex proin cursus tristique sollicitudin imperdiet risus, nibh rhoncus mi.",
      "longDescriptionUrl": "loopsys.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-856/subdomain-856",
      "roleId": "role-856",
      "subDomain": "subdomain-856",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "Maximus ante euismod laoreet elementum vehicula nibh ante est bibendum ornare est etiam diam iaculis. Natoque scelerisque elit sodales nisi.",
      "longDescriptionUrl": "conixco.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-857/subdomain-857",
      "roleId": "role-857",
      "subDomain": "subdomain-857",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Maecenas posuere aenean natoque metus at sapien vulputate proin. Hendrerit consequat purus vulputate risus sapien, pharetra iaculis placerat mauris at.",
      "longDescriptionUrl": "lexiconlabs.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-858/subdomain-858",
      "roleId": "role-858",
      "subDomain": "subdomain-858",
      "logo": "http://placehold.it/64x64",
      "name": "GrafixMedia",
      "longDescription": "Ac pharetra donec at sollicitudin maecenas natoque. Lacinia mauris diam sit. Aliquam ultricies sed scelerisque erat vehicula sit ultricies mattis.",
      "longDescriptionUrl": "grafixmedia.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-859/subdomain-859",
      "roleId": "role-859",
      "subDomain": "subdomain-859",
      "logo": "http://placehold.it/64x64",
      "name": "NitroSystems",
      "longDescription": "Orci id accumsan eu iaculis natoque euismod sit mollis. E scelerisque au nunc elementum sed quisque nibh, iaculis mollis natoque.",
      "longDescriptionUrl": "nitrosystems.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-860/subdomain-860",
      "roleId": "role-860",
      "subDomain": "subdomain-860",
      "logo": "http://placehold.it/64x64",
      "name": "Ulogica",
      "longDescription": "Nunc rhoncus sit ornare nisi. Curabitur nibh elementum dignissim vehicula viverra elementum lacinia. Placerat aliquet lobortis nam metus ac arcu.",
      "longDescriptionUrl": "ulogica.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-861/subdomain-861",
      "roleId": "role-861",
      "subDomain": "subdomain-861",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Id sit lectus felis neque velit elementum. Sit vehicula velit eros maecenas lacinia lobortis, sodales dui felis dolor ultricies lobortis.",
      "longDescriptionUrl": "smartsystems.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-862/subdomain-862",
      "roleId": "role-862",
      "subDomain": "subdomain-862",
      "logo": "http://placehold.it/64x64",
      "name": "Protheon",
      "longDescription": "A placerat scelerisque sagittis laoreet maecenas lorem. Rhoncus elit aenean ultrices, rhoncus etiam elementum viverra eu, e ac consequat imperdiet.",
      "longDescriptionUrl": "protheon.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-863/subdomain-863",
      "roleId": "role-863",
      "subDomain": "subdomain-863",
      "logo": "http://placehold.it/64x64",
      "name": "Xenosys",
      "longDescription": "Fringilla enim id tortor nulla non, au tempor adipiscing commodo, a vulputate erat consectetur, velit condimentum eu cras justo e.",
      "longDescriptionUrl": "xenosys.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-864/subdomain-864",
      "roleId": "role-864",
      "subDomain": "subdomain-864",
      "logo": "http://placehold.it/64x64",
      "name": "Cameratek",
      "longDescription": "Vitae dignissim diam sagittis suscipit ut curabitur proin bibendum in. Nisi aenean est gravida. Elementum ultricies sem tempor eros placerat.",
      "longDescriptionUrl": "cameratek.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-865/subdomain-865",
      "roleId": "role-865",
      "subDomain": "subdomain-865",
      "logo": "http://placehold.it/64x64",
      "name": "Cirpria",
      "longDescription": "Suscipit justo est elementum mattis pretium elementum faucibus faucibus maecenas, curabitur scelerisque scelerisque maecenas dolor imperdiet ut mauris ex imperdiet.",
      "longDescriptionUrl": "cirpria.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-866/subdomain-866",
      "roleId": "role-866",
      "subDomain": "subdomain-866",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Scelerisque porttitor in ornare id, quis tempor lobortis eget lorem i leo felis vulputate. Et ultricies pretium maecenas adipiscing non.",
      "longDescriptionUrl": "terrasys.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-867/subdomain-867",
      "roleId": "role-867",
      "subDomain": "subdomain-867",
      "logo": "http://placehold.it/64x64",
      "name": "Dynaroc",
      "longDescription": "Orci eu sapien facilisis nisl eros lobortis ligula sagittis non sed, sem commodo pretium magna sollicitudin. Mollis commodo nibh accumsan.",
      "longDescriptionUrl": "dynaroc.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-868/subdomain-868",
      "roleId": "role-868",
      "subDomain": "subdomain-868",
      "logo": "http://placehold.it/64x64",
      "name": "Iridimax",
      "longDescription": "Accumsan nulla faucibus maecenas tempor dictum dictum massa. Lobortis porttitor vel porttitor lectus cras ut lacinia, nulla dictum bibendum mollis.",
      "longDescriptionUrl": "iridimax.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-869/subdomain-869",
      "roleId": "role-869",
      "subDomain": "subdomain-869",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "Sem nisl justo pretium tristique dignissim. Ultricies maecenas metus blandit sed quisque. Vulputate lacinia proin tristique justo ipsum leo et.",
      "longDescriptionUrl": "opticast.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-870/subdomain-870",
      "roleId": "role-870",
      "subDomain": "subdomain-870",
      "logo": "http://placehold.it/64x64",
      "name": "Solexis",
      "longDescription": "Dictum sapien aliquam finibus turpis cursus ut dictum. Velit leo eget et mattis velit natoque neque arcu, sollicitudin ipsum proin.",
      "longDescriptionUrl": "solexis.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-871/subdomain-871",
      "roleId": "role-871",
      "subDomain": "subdomain-871",
      "logo": "http://placehold.it/64x64",
      "name": "Quadtek",
      "longDescription": "Lorem hendrerit massa elementum facilisis enim neque justo pharetra dictum sed placerat vel. Maximus vehicula euismod nisi. Arcu id lorem.",
      "longDescriptionUrl": "quadtek.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-872/subdomain-872",
      "roleId": "role-872",
      "subDomain": "subdomain-872",
      "logo": "http://placehold.it/64x64",
      "name": "VenStrategy",
      "longDescription": "Ultrices eu accumsan pulvinar condimentum. Vestibulum magna amet morbi. Est au blandit neque posuere, erat arcu nibh pharetra tincidunt cras.",
      "longDescriptionUrl": "venstrategy.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-873/subdomain-873",
      "roleId": "role-873",
      "subDomain": "subdomain-873",
      "logo": "http://placehold.it/64x64",
      "name": "Anaplex",
      "longDescription": "Sagittis tempus ante tortor ultricies nunc suscipit elit hendrerit consequat mattis vitae nam orci nunc eros consequat, facilisis neque facilisis.",
      "longDescriptionUrl": "anaplex.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-874/subdomain-874",
      "roleId": "role-874",
      "subDomain": "subdomain-874",
      "logo": "http://placehold.it/64x64",
      "name": "Dynaroc",
      "longDescription": "Pulvinar fringilla tincidunt amet aenean fringilla, placerat au ornare felis tristique eti a. Nisi finibus ornare iaculis. Purus quis sed.",
      "longDescriptionUrl": "dynaroc.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-875/subdomain-875",
      "roleId": "role-875",
      "subDomain": "subdomain-875",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "Auctor metus sit dignissim velit in. Augue nisi sed ligula. Nibh diam tempor pretium facilisis maximus curabitur pharetra mollis neque.",
      "longDescriptionUrl": "westgate.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-876/subdomain-876",
      "roleId": "role-876",
      "subDomain": "subdomain-876",
      "logo": "http://placehold.it/64x64",
      "name": "CoreRobotics",
      "longDescription": "Elit vitae magna auctor sit ac i, lectus mollis quisque nisi, eu pharetra aliquet i dignissim. Euismod amet accumsan sed.",
      "longDescriptionUrl": "corerobotics.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-877/subdomain-877",
      "roleId": "role-877",
      "subDomain": "subdomain-877",
      "logo": "http://placehold.it/64x64",
      "name": "Dynaroc",
      "longDescription": "Etiam laoreet imperdiet fringilla dignissim donec dui iaculis non natoque at. Purus vel eti lobortis purus, tempus lacinia blandit curabitur.",
      "longDescriptionUrl": "dynaroc.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-878/subdomain-878",
      "roleId": "role-878",
      "subDomain": "subdomain-878",
      "logo": "http://placehold.it/64x64",
      "name": "Hivemind",
      "longDescription": "Et porttitor dignissim non gravida. Donec quisque curabitur placerat suscipit posuere. Arcu pharetra e augue porttitor, vestibulum lacinia gravida ipsum.",
      "longDescriptionUrl": "hivemind.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-879/subdomain-879",
      "roleId": "role-879",
      "subDomain": "subdomain-879",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Lobortis a arcu condimentum et, nisi eti dolor consectetur sed pellentesque pretium blandit pellentesque arcu auctor consequat, condimentum eros viverra.",
      "longDescriptionUrl": "zatheon.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-880/subdomain-880",
      "roleId": "role-880",
      "subDomain": "subdomain-880",
      "logo": "http://placehold.it/64x64",
      "name": "OmniTouch",
      "longDescription": "Nulla vel felis gravida bibendum tincidunt ut eti quisque lacinia tempus elit velit. Nisl ipsum dignissim mattis, at ultrices au.",
      "longDescriptionUrl": "omnitouch.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-881/subdomain-881",
      "roleId": "role-881",
      "subDomain": "subdomain-881",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Amet neque pretium e porttitor pretium placerat in tincidunt. Amet nulla et orci, adipiscing ultrices sit eros tortor ante tempor.",
      "longDescriptionUrl": "sixtysix.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-882/subdomain-882",
      "roleId": "role-882",
      "subDomain": "subdomain-882",
      "logo": "http://placehold.it/64x64",
      "name": "FastFreight",
      "longDescription": "Iaculis sollicitudin laoreet faucibus mi arcu auctor vehicula eti ultrices, dictum eti finibus hendrerit rhoncus tristique, lorem erat lectus id.",
      "longDescriptionUrl": "fastfreight.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-883/subdomain-883",
      "roleId": "role-883",
      "subDomain": "subdomain-883",
      "logo": "http://placehold.it/64x64",
      "name": "Airconix",
      "longDescription": "Laoreet cursus id et vestibulum sollicitudin laoreet vulputate consequat ultrices consectetur felis placerat. Vehicula gravida sem aliquam diam scelerisque e.",
      "longDescriptionUrl": "airconix.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-884/subdomain-884",
      "roleId": "role-884",
      "subDomain": "subdomain-884",
      "logo": "http://placehold.it/64x64",
      "name": "Sophis",
      "longDescription": "Nunc au maximus lobortis tristique. Arcu ligula consectetur cras, blandit sit nibh consequat maximus quis consectetur, tempor consectetur laoreet ex.",
      "longDescriptionUrl": "sophis.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-885/subdomain-885",
      "roleId": "role-885",
      "subDomain": "subdomain-885",
      "logo": "http://placehold.it/64x64",
      "name": "Tecomix",
      "longDescription": "Elit ultricies augue vestibulum velit velit. Vitae justo curabitur finibus. Justo i aliquam bibendum adipiscing eget. Vitae aenean neque lorem.",
      "longDescriptionUrl": "tecomix.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-886/subdomain-886",
      "roleId": "role-886",
      "subDomain": "subdomain-886",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Ornare proin a nisl auctor enim erat proin cras maecenas lorem, tempus tempus nibh consequat justo auctor au turpis diam.",
      "longDescriptionUrl": "qualcore.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-887/subdomain-887",
      "roleId": "role-887",
      "subDomain": "subdomain-887",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "Elit magna suscipit ligula tristique mauris mattis sodales et etiam vestibulum turpis ultricies lorem. Porttitor tristique ac eu sed bibendum.",
      "longDescriptionUrl": "conixco.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-888/subdomain-888",
      "roleId": "role-888",
      "subDomain": "subdomain-888",
      "logo": "http://placehold.it/64x64",
      "name": "Terralabs",
      "longDescription": "Condimentum pellentesque maximus pharetra consequat, condimentum aliquet donec blandit mollis quisque laoreet lorem magna a e gravida pharetra consectetur tristique.",
      "longDescriptionUrl": "terralabs.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-889/subdomain-889",
      "roleId": "role-889",
      "subDomain": "subdomain-889",
      "logo": "http://placehold.it/64x64",
      "name": "Terrasys",
      "longDescription": "Sed eu ultrices pellentesque blandit nunc. Lorem augue at dolor tristique lacinia. Posuere sed posuere est porttitor mattis est quisque.",
      "longDescriptionUrl": "terrasys.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-890/subdomain-890",
      "roleId": "role-890",
      "subDomain": "subdomain-890",
      "logo": "http://placehold.it/64x64",
      "name": "FastMart",
      "longDescription": "Id lobortis vulputate pharetra au, viverra metus imperdiet leo sodales, enim au vulputate aenean laoreet facilisis tempus vestibulum cras aenean.",
      "longDescriptionUrl": "fastmart.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-891/subdomain-891",
      "roleId": "role-891",
      "subDomain": "subdomain-891",
      "logo": "http://placehold.it/64x64",
      "name": "CorpTek",
      "longDescription": "Lacus nulla rhoncus mi suscipit. Curabitur turpis nunc tempor dolor hendrerit. Vitae lectus velit ante purus. Morbi magna et magna.",
      "longDescriptionUrl": "corptek.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-892/subdomain-892",
      "roleId": "role-892",
      "subDomain": "subdomain-892",
      "logo": "http://placehold.it/64x64",
      "name": "NitroSystems",
      "longDescription": "Lacinia maximus tortor lectus sapien maecenas hendrerit. Lorem quis tincidunt imperdiet leo. Faucibus dictum sollicitudin laoreet, tristique arcu pharetra vulputate.",
      "longDescriptionUrl": "nitrosystems.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-893/subdomain-893",
      "roleId": "role-893",
      "subDomain": "subdomain-893",
      "logo": "http://placehold.it/64x64",
      "name": "Airconix",
      "longDescription": "Eget hendrerit vestibulum ex commodo condimentum massa, dignissim pharetra purus mi euismod faucibus, sagittis eget arcu lacus arcu aenean nam.",
      "longDescriptionUrl": "airconix.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-894/subdomain-894",
      "roleId": "role-894",
      "subDomain": "subdomain-894",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "Sollicitudin consequat euismod metus placerat lobortis. Ut tempor blandit sagittis sapien lorem. Morbi ultricies at amet nunc. Porttitor bibendum imperdiet.",
      "longDescriptionUrl": "opticast.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-895/subdomain-895",
      "roleId": "role-895",
      "subDomain": "subdomain-895",
      "logo": "http://placehold.it/64x64",
      "name": "TrioSys",
      "longDescription": "Est tempor finibus faucibus nulla mattis, leo sapien quisque aenean. Magna quisque vel viverra turpis, vel justo curabitur gravida vehicula.",
      "longDescriptionUrl": "triosys.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-896/subdomain-896",
      "roleId": "role-896",
      "subDomain": "subdomain-896",
      "logo": "http://placehold.it/64x64",
      "name": "Hivemind",
      "longDescription": "Ut accumsan felis dui mi id ipsum vehicula non accumsan. Aenean etiam in augue, velit tincidunt nibh arcu posuere au.",
      "longDescriptionUrl": "hivemind.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-897/subdomain-897",
      "roleId": "role-897",
      "subDomain": "subdomain-897",
      "logo": "http://placehold.it/64x64",
      "name": "FastMart",
      "longDescription": "Et suscipit accumsan amet tristique quisque lectus. Vel ornare in diam aliquam suscipit. I au iaculis aliquam mollis vehicula facilisis.",
      "longDescriptionUrl": "fastmart.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-898/subdomain-898",
      "roleId": "role-898",
      "subDomain": "subdomain-898",
      "logo": "http://placehold.it/64x64",
      "name": "Sophis",
      "longDescription": "At ultricies amet consequat condimentum magna metus pellentesque cursus, ut pharetra arcu etiam, quis sed aenean sagittis mauris nibh sollicitudin.",
      "longDescriptionUrl": "sophis.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-899/subdomain-899",
      "roleId": "role-899",
      "subDomain": "subdomain-899",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Viverra consectetur nibh eti gravida, ac nibh dignissim etiam ut, leo maximus consequat vulputate fringilla felis nisi. Laoreet placerat eti.",
      "longDescriptionUrl": "infratouch.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-900/subdomain-900",
      "roleId": "role-900",
      "subDomain": "subdomain-900",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "Vehicula sodales ligula ut nisi nibh. Pellentesque vehicula risus non suscipit lorem. Sapien velit bibendum ornare risus erat nam aliquam.",
      "longDescriptionUrl": "zatheon.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-901/subdomain-901",
      "roleId": "role-901",
      "subDomain": "subdomain-901",
      "logo": "http://placehold.it/64x64",
      "name": "CoreRobotics",
      "longDescription": "I ante purus in lobortis aenean, non neque nam vestibulum pretium at. Enim dui est pulvinar ipsum velit velit sagittis.",
      "longDescriptionUrl": "corerobotics.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-902/subdomain-902",
      "roleId": "role-902",
      "subDomain": "subdomain-902",
      "logo": "http://placehold.it/64x64",
      "name": "CoreRobotics",
      "longDescription": "Aliquam sodales sit blandit posuere faucibus donec fringilla risus tristique posuere i sem. Pellentesque natoque id ultricies, laoreet mi eros.",
      "longDescriptionUrl": "corerobotics.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-903/subdomain-903",
      "roleId": "role-903",
      "subDomain": "subdomain-903",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "Nam elit mauris nulla tempor, ornare nam turpis dictum faucibus massa, gravida rhoncus tincidunt et. Tristique eti iaculis posuere quis.",
      "longDescriptionUrl": "conixco.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-904/subdomain-904",
      "roleId": "role-904",
      "subDomain": "subdomain-904",
      "logo": "http://placehold.it/64x64",
      "name": "TurboSystems",
      "longDescription": "Faucibus etiam rhoncus est ac lectus. Aenean finibus augue a ultrices, lectus consequat sed ipsum dolor fringilla et ex adipiscing.",
      "longDescriptionUrl": "turbosystems.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-905/subdomain-905",
      "roleId": "role-905",
      "subDomain": "subdomain-905",
      "logo": "http://placehold.it/64x64",
      "name": "Connic",
      "longDescription": "Enim pulvinar enim pretium vitae, cursus et ac nunc. Mattis arcu elementum sed eu. Dolor quisque ac laoreet vitae au.",
      "longDescriptionUrl": "connic.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-906/subdomain-906",
      "roleId": "role-906",
      "subDomain": "subdomain-906",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Ut eu turpis justo eget, euismod metus imperdiet sollicitudin. Nisl porttitor a aliquet, nibh risus mattis pulvinar proin donec tempor.",
      "longDescriptionUrl": "infratouch.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-907/subdomain-907",
      "roleId": "role-907",
      "subDomain": "subdomain-907",
      "logo": "http://placehold.it/64x64",
      "name": "Sealine",
      "longDescription": "Gravida au ac auctor dictum lacinia a hendrerit augue donec. Pellentesque elementum eti posuere arcu, faucibus dolor ornare tempor quis.",
      "longDescriptionUrl": "sealine.info/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-908/subdomain-908",
      "roleId": "role-908",
      "subDomain": "subdomain-908",
      "logo": "http://placehold.it/64x64",
      "name": "Seelogic",
      "longDescription": "Consectetur tortor tincidunt eti nisl, elit sodales ac risus, amet magna ipsum consequat vulputate pretium vulputate quis tempus mollis est.",
      "longDescriptionUrl": "seelogic.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-909/subdomain-909",
      "roleId": "role-909",
      "subDomain": "subdomain-909",
      "logo": "http://placehold.it/64x64",
      "name": "Hivemind",
      "longDescription": "Sodales risus mauris dictum nulla, commodo lacus pretium in ligula. Lectus facilisis pharetra curabitur natoque mollis est blandit mattis laoreet.",
      "longDescriptionUrl": "hivemind.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-910/subdomain-910",
      "roleId": "role-910",
      "subDomain": "subdomain-910",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Id laoreet massa tempor pellentesque porttitor dignissim condimentum arcu mattis eti nibh, au purus eros enim elementum nunc e auctor.",
      "longDescriptionUrl": "infratouch.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-911/subdomain-911",
      "roleId": "role-911",
      "subDomain": "subdomain-911",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "Vitae sagittis id magna tristique sem nam tristique iaculis ante. Bibendum condimentum vitae pretium, vehicula elit ut lectus posuere at.",
      "longDescriptionUrl": "helixicon.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-912/subdomain-912",
      "roleId": "role-912",
      "subDomain": "subdomain-912",
      "logo": "http://placehold.it/64x64",
      "name": "Sophis",
      "longDescription": "Massa sapien sit orci iaculis curabitur justo. Gravida enim nibh aliquet proin laoreet gravida. Mollis faucibus leo pharetra turpis lacinia.",
      "longDescriptionUrl": "sophis.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-913/subdomain-913",
      "roleId": "role-913",
      "subDomain": "subdomain-913",
      "logo": "http://placehold.it/64x64",
      "name": "Keycast",
      "longDescription": "Bibendum eros pharetra placerat amet. Pretium rhoncus accumsan risus purus. At at massa maecenas dolor mi tortor hendrerit erat velit.",
      "longDescriptionUrl": "keycast.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-914/subdomain-914",
      "roleId": "role-914",
      "subDomain": "subdomain-914",
      "logo": "http://placehold.it/64x64",
      "name": "Polygan",
      "longDescription": "Ipsum gravida au dignissim amet tincidunt, felis neque ante ac, justo eros natoque condimentum non elementum aliquam finibus sollicitudin sagittis.",
      "longDescriptionUrl": "polygan.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-915/subdomain-915",
      "roleId": "role-915",
      "subDomain": "subdomain-915",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "Ornare dolor tempor pellentesque sem lacinia aliquet nisi sollicitudin erat. Justo ultrices gravida elementum commodo, suscipit orci tempor consequat vestibulum.",
      "longDescriptionUrl": "opticast.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-916/subdomain-916",
      "roleId": "role-916",
      "subDomain": "subdomain-916",
      "logo": "http://placehold.it/64x64",
      "name": "Dalserve",
      "longDescription": "Nulla vehicula euismod nulla maecenas ornare eti laoreet. Vitae maximus augue lacinia porttitor mattis ornare, pulvinar nisi mauris pharetra felis.",
      "longDescriptionUrl": "dalserve.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-917/subdomain-917",
      "roleId": "role-917",
      "subDomain": "subdomain-917",
      "logo": "http://placehold.it/64x64",
      "name": "Zatheon",
      "longDescription": "At donec pharetra posuere auctor. Cras accumsan condimentum suscipit morbi. Aenean ipsum bibendum ac. Eu euismod finibus vel rhoncus aliquet.",
      "longDescriptionUrl": "zatheon.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-918/subdomain-918",
      "roleId": "role-918",
      "subDomain": "subdomain-918",
      "logo": "http://placehold.it/64x64",
      "name": "Infratouch",
      "longDescription": "Pharetra enim erat in i. Quis au ipsum sed morbi suscipit pharetra. Sem rhoncus velit erat. Maximus ex diam sapien.",
      "longDescriptionUrl": "infratouch.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-919/subdomain-919",
      "roleId": "role-919",
      "subDomain": "subdomain-919",
      "logo": "http://placehold.it/64x64",
      "name": "Anaplex",
      "longDescription": "Nunc nibh nisl non iaculis. Porttitor dignissim quisque adipiscing, sollicitudin sed metus sodales lacinia lacinia, dignissim nunc nisi nunc eget.",
      "longDescriptionUrl": "anaplex.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-920/subdomain-920",
      "roleId": "role-920",
      "subDomain": "subdomain-920",
      "logo": "http://placehold.it/64x64",
      "name": "Chromaton",
      "longDescription": "Scelerisque vitae pellentesque tortor purus cras posuere. Mi purus augue morbi cras dui cursus mollis ornare i augue lacinia porttitor.",
      "longDescriptionUrl": "chromaton.me/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-921/subdomain-921",
      "roleId": "role-921",
      "subDomain": "subdomain-921",
      "logo": "http://placehold.it/64x64",
      "name": "CoreMax",
      "longDescription": "I maximus est consectetur sagittis sed dui. Etiam velit quisque consequat sagittis mauris ornare vestibulum orci eu aliquet risus turpis.",
      "longDescriptionUrl": "coremax.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-922/subdomain-922",
      "roleId": "role-922",
      "subDomain": "subdomain-922",
      "logo": "http://placehold.it/64x64",
      "name": "Citisys",
      "longDescription": "Curabitur laoreet ipsum quisque lacus nam, elit proin tempus suscipit mauris eu placerat. Mauris ipsum euismod vestibulum pharetra pellentesque eros.",
      "longDescriptionUrl": "citisys.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-923/subdomain-923",
      "roleId": "role-923",
      "subDomain": "subdomain-923",
      "logo": "http://placehold.it/64x64",
      "name": "Westercom",
      "longDescription": "Erat bibendum ornare ligula mauris eu accumsan. Cras donec in sed nam auctor at. Nulla sodales mattis aliquet massa lacinia.",
      "longDescriptionUrl": "westercom.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-924/subdomain-924",
      "roleId": "role-924",
      "subDomain": "subdomain-924",
      "logo": "http://placehold.it/64x64",
      "name": "Ulogica",
      "longDescription": "Pellentesque scelerisque augue mauris elementum e faucibus condimentum turpis natoque imperdiet facilisis. Iaculis eros elit pellentesque donec mauris ornare nulla.",
      "longDescriptionUrl": "ulogica.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-925/subdomain-925",
      "roleId": "role-925",
      "subDomain": "subdomain-925",
      "logo": "http://placehold.it/64x64",
      "name": "Acousticom",
      "longDescription": "I sit vestibulum pulvinar facilisis erat. Curabitur elit laoreet ultrices velit est vestibulum au est. Porttitor dignissim lobortis leo elementum.",
      "longDescriptionUrl": "acousticom.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-926/subdomain-926",
      "roleId": "role-926",
      "subDomain": "subdomain-926",
      "logo": "http://placehold.it/64x64",
      "name": "Infracom",
      "longDescription": "Felis metus natoque lacinia ante. Erat sit i eti bibendum enim vehicula. Enim neque sodales lacinia tempor tincidunt rhoncus tempor.",
      "longDescriptionUrl": "infracom.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-927/subdomain-927",
      "roleId": "role-927",
      "subDomain": "subdomain-927",
      "logo": "http://placehold.it/64x64",
      "name": "Galcom",
      "longDescription": "Felis mauris iaculis sollicitudin magna orci e accumsan finibus nisi risus dictum. Arcu ut aenean vulputate gravida risus elit tempor.",
      "longDescriptionUrl": "galcom.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-928/subdomain-928",
      "roleId": "role-928",
      "subDomain": "subdomain-928",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Fringilla lacus risus at sed. Viverra natoque lacinia condimentum rhoncus ornare diam sit pretium id etiam adipiscing elit lacus fringilla.",
      "longDescriptionUrl": "fortyfour.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-929/subdomain-929",
      "roleId": "role-929",
      "subDomain": "subdomain-929",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Curabitur id iaculis lectus faucibus. Dui leo facilisis et aenean imperdiet sem. Euismod est etiam rhoncus. Facilisis auctor etiam vestibulum.",
      "longDescriptionUrl": "lexiconlabs.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-930/subdomain-930",
      "roleId": "role-930",
      "subDomain": "subdomain-930",
      "logo": "http://placehold.it/64x64",
      "name": "Terralabs",
      "longDescription": "Mauris porttitor donec pulvinar sem dolor blandit posuere at blandit magna aenean nam scelerisque massa, pellentesque nam accumsan pulvinar at.",
      "longDescriptionUrl": "terralabs.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-931/subdomain-931",
      "roleId": "role-931",
      "subDomain": "subdomain-931",
      "logo": "http://placehold.it/64x64",
      "name": "Dalserve",
      "longDescription": "Etiam pellentesque dictum commodo dui tincidunt turpis arcu tortor sem e, magna finibus nisi quis sit eros mauris ut diam.",
      "longDescriptionUrl": "dalserve.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-932/subdomain-932",
      "roleId": "role-932",
      "subDomain": "subdomain-932",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Nibh sollicitudin mi tincidunt justo, quisque gravida euismod et proin auctor nam non rhoncus nunc, rhoncus lacinia donec velit hendrerit.",
      "longDescriptionUrl": "fortyfour.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-933/subdomain-933",
      "roleId": "role-933",
      "subDomain": "subdomain-933",
      "logo": "http://placehold.it/64x64",
      "name": "Iridimax",
      "longDescription": "Cras aenean etiam cursus aliquam, natoque et bibendum vulputate natoque lacinia, lacinia placerat pellentesque elit pharetra mauris imperdiet commodo aliquam.",
      "longDescriptionUrl": "iridimax.org/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-934/subdomain-934",
      "roleId": "role-934",
      "subDomain": "subdomain-934",
      "logo": "http://placehold.it/64x64",
      "name": "Keycast",
      "longDescription": "Erat at morbi rhoncus magna auctor imperdiet. Finibus ac orci ac vulputate. Est adipiscing pellentesque quis, rhoncus scelerisque e ornare.",
      "longDescriptionUrl": "keycast.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-935/subdomain-935",
      "roleId": "role-935",
      "subDomain": "subdomain-935",
      "logo": "http://placehold.it/64x64",
      "name": "Proline",
      "longDescription": "Mollis tempus eu aliquet hendrerit, quisque vehicula maecenas auctor, ultrices natoque lobortis pretium consequat. Id id magna pellentesque quisque mi.",
      "longDescriptionUrl": "proline.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-936/subdomain-936",
      "roleId": "role-936",
      "subDomain": "subdomain-936",
      "logo": "http://placehold.it/64x64",
      "name": "DynaAir",
      "longDescription": "Scelerisque sapien gravida et erat quis leo, erat ante at auctor, au imperdiet pretium porttitor sem consectetur enim dui sapien.",
      "longDescriptionUrl": "dynaair.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-937/subdomain-937",
      "roleId": "role-937",
      "subDomain": "subdomain-937",
      "logo": "http://placehold.it/64x64",
      "name": "Amsquare",
      "longDescription": "Viverra sem eget lacus placerat pharetra dictum in iaculis. Ante turpis lorem a. Condimentum bibendum sapien tincidunt morbi lacus a.",
      "longDescriptionUrl": "amsquare.com/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-938/subdomain-938",
      "roleId": "role-938",
      "subDomain": "subdomain-938",
      "logo": "http://placehold.it/64x64",
      "name": "Creatonix",
      "longDescription": "Tristique eu vulputate i hendrerit sagittis consectetur. Placerat pretium curabitur au ornare vehicula, blandit cursus posuere sodales, tempus i sagittis.",
      "longDescriptionUrl": "creatonix.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-939/subdomain-939",
      "roleId": "role-939",
      "subDomain": "subdomain-939",
      "logo": "http://placehold.it/64x64",
      "name": "Thermatek",
      "longDescription": "I aliquam porttitor aliquet curabitur euismod finibus cursus etiam mollis diam felis ipsum mattis sem consequat mollis, purus lorem facilisis.",
      "longDescriptionUrl": "thermatek.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-940/subdomain-940",
      "roleId": "role-940",
      "subDomain": "subdomain-940",
      "logo": "http://placehold.it/64x64",
      "name": "Cryosoft",
      "longDescription": "Nunc id aliquet scelerisque nisi natoque proin amet elementum, au ipsum arcu risus, vel nulla leo tempus diam ut dolor.",
      "longDescriptionUrl": "cryosoft.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-941/subdomain-941",
      "roleId": "role-941",
      "subDomain": "subdomain-941",
      "logo": "http://placehold.it/64x64",
      "name": "Dynaroc",
      "longDescription": "Posuere sollicitudin quis lacus dictum massa tempus ex laoreet ligula viverra sem. Vel neque ornare dui. Sit dignissim pretium nisi.",
      "longDescriptionUrl": "dynaroc.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-942/subdomain-942",
      "roleId": "role-942",
      "subDomain": "subdomain-942",
      "logo": "http://placehold.it/64x64",
      "name": "Qualcore",
      "longDescription": "Proin ipsum aliquet bibendum id diam arcu proin condimentum e a eti ornare, mi cursus vestibulum mollis. Metus felis vehicula.",
      "longDescriptionUrl": "qualcore.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-943/subdomain-943",
      "roleId": "role-943",
      "subDomain": "subdomain-943",
      "logo": "http://placehold.it/64x64",
      "name": "Polygan",
      "longDescription": "Orci nibh lacinia consectetur eros ultricies nisi augue ultrices augue. Ornare amet natoque aliquam, viverra metus metus e ornare viverra.",
      "longDescriptionUrl": "polygan.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-944/subdomain-944",
      "roleId": "role-944",
      "subDomain": "subdomain-944",
      "logo": "http://placehold.it/64x64",
      "name": "Chromaton",
      "longDescription": "Ultrices lobortis eu i lacus lectus. Aliquet nam pretium lacinia ligula, au nam facilisis finibus purus. Etiam pharetra sapien lorem.",
      "longDescriptionUrl": "chromaton.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-945/subdomain-945",
      "roleId": "role-945",
      "subDomain": "subdomain-945",
      "logo": "http://placehold.it/64x64",
      "name": "Iridimax",
      "longDescription": "Bibendum dolor magna gravida pellentesque pulvinar eti est, in ultricies posuere mattis dictum, nulla sollicitudin nisl enim. Hendrerit gravida commodo.",
      "longDescriptionUrl": "iridimax.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-946/subdomain-946",
      "roleId": "role-946",
      "subDomain": "subdomain-946",
      "logo": "http://placehold.it/64x64",
      "name": "Creatonix",
      "longDescription": "Erat lobortis tristique blandit sit justo condimentum auctor. Blandit vestibulum eti natoque. Eros au risus a aenean, sagittis arcu ut.",
      "longDescriptionUrl": "creatonix.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-947/subdomain-947",
      "roleId": "role-947",
      "subDomain": "subdomain-947",
      "logo": "http://placehold.it/64x64",
      "name": "Celmax",
      "longDescription": "Facilisis vitae porttitor vel etiam lacinia arcu. Lacinia mi aliquet placerat est, magna sodales velit mollis diam quis elementum laoreet.",
      "longDescriptionUrl": "celmax.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-948/subdomain-948",
      "roleId": "role-948",
      "subDomain": "subdomain-948",
      "logo": "http://placehold.it/64x64",
      "name": "Polycore",
      "longDescription": "Maecenas eros faucibus leo proin, arcu neque laoreet vel condimentum au eu lacus finibus. Bibendum ante pretium purus ante nibh.",
      "longDescriptionUrl": "polycore.biz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-949/subdomain-949",
      "roleId": "role-949",
      "subDomain": "subdomain-949",
      "logo": "http://placehold.it/64x64",
      "name": "Anaplex",
      "longDescription": "Tincidunt pretium pharetra i turpis a erat amet, lectus au facilisis eti. Donec dictum sit augue, porttitor eget scelerisque laoreet.",
      "longDescriptionUrl": "anaplex.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-950/subdomain-950",
      "roleId": "role-950",
      "subDomain": "subdomain-950",
      "logo": "http://placehold.it/64x64",
      "name": "Viewtopia",
      "longDescription": "Justo nulla at proin justo fringilla risus. Dictum lobortis mattis auctor cursus amet tempor pulvinar, metus commodo posuere enim natoque.",
      "longDescriptionUrl": "viewtopia.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-951/subdomain-951",
      "roleId": "role-951",
      "subDomain": "subdomain-951",
      "logo": "http://placehold.it/64x64",
      "name": "Cryosoft",
      "longDescription": "Ac iaculis scelerisque pulvinar posuere pulvinar ante sem morbi. Sagittis ultricies ultrices natoque. Non elementum eros eti felis tempus risus.",
      "longDescriptionUrl": "cryosoft.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-952/subdomain-952",
      "roleId": "role-952",
      "subDomain": "subdomain-952",
      "logo": "http://placehold.it/64x64",
      "name": "CoreXTS",
      "longDescription": "Lobortis e posuere eget massa, bibendum faucibus donec morbi eros bibendum eu nunc sapien. Dui pharetra lobortis nunc e lectus.",
      "longDescriptionUrl": "corexts.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-953/subdomain-953",
      "roleId": "role-953",
      "subDomain": "subdomain-953",
      "logo": "http://placehold.it/64x64",
      "name": "VTGrafix",
      "longDescription": "Finibus sed euismod condimentum aenean. Bibendum maximus sagittis neque sodales eget. Justo non vulputate laoreet ex laoreet, rhoncus adipiscing id.",
      "longDescriptionUrl": "vtgrafix.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-954/subdomain-954",
      "roleId": "role-954",
      "subDomain": "subdomain-954",
      "logo": "http://placehold.it/64x64",
      "name": "Conixco",
      "longDescription": "Natoque pharetra erat at elit, et vel neque sollicitudin. Lacinia enim risus aliquet ac, maecenas hendrerit pulvinar i sem lobortis.",
      "longDescriptionUrl": "conixco.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-955/subdomain-955",
      "roleId": "role-955",
      "subDomain": "subdomain-955",
      "logo": "http://placehold.it/64x64",
      "name": "NitroSystems",
      "longDescription": "Ex pellentesque ipsum at est maximus et auctor elementum elit. Tincidunt diam nisl elementum laoreet elementum tempus, eti lorem aliquam.",
      "longDescriptionUrl": "nitrosystems.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-956/subdomain-956",
      "roleId": "role-956",
      "subDomain": "subdomain-956",
      "logo": "http://placehold.it/64x64",
      "name": "Protheon",
      "longDescription": "Tortor sem quis lectus gravida vitae. Tortor augue leo lacus cursus eros mi ipsum id, lobortis ex dolor at eros.",
      "longDescriptionUrl": "protheon.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-957/subdomain-957",
      "roleId": "role-957",
      "subDomain": "subdomain-957",
      "logo": "http://placehold.it/64x64",
      "name": "Coolinga",
      "longDescription": "Ipsum posuere leo magna nam, ultrices tempor nisl tincidunt est a augue. Ultrices ipsum purus cras, aenean magna magna etiam.",
      "longDescriptionUrl": "coolinga.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-958/subdomain-958",
      "roleId": "role-958",
      "subDomain": "subdomain-958",
      "logo": "http://placehold.it/64x64",
      "name": "SixtySix",
      "longDescription": "Consectetur placerat quis at mauris non, diam vehicula orci curabitur turpis. Porttitor posuere posuere ligula dolor elit. Velit elit nulla.",
      "longDescriptionUrl": "sixtysix.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-959/subdomain-959",
      "roleId": "role-959",
      "subDomain": "subdomain-959",
      "logo": "http://placehold.it/64x64",
      "name": "SkyCenta",
      "longDescription": "Natoque maximus ac facilisis risus. Quis lacinia etiam rhoncus consequat. Viverra imperdiet cras dignissim turpis est. Au lobortis pulvinar vel.",
      "longDescriptionUrl": "skycenta.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-960/subdomain-960",
      "roleId": "role-960",
      "subDomain": "subdomain-960",
      "logo": "http://placehold.it/64x64",
      "name": "MediaDime",
      "longDescription": "Posuere tempus vel cursus pretium. Posuere quis elementum turpis. Metus turpis dolor nam vestibulum. Vulputate ipsum eu curabitur aenean sit.",
      "longDescriptionUrl": "mediadime.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-961/subdomain-961",
      "roleId": "role-961",
      "subDomain": "subdomain-961",
      "logo": "http://placehold.it/64x64",
      "name": "Freecast",
      "longDescription": "Leo magna e bibendum ultricies est accumsan ultricies. Ante non sem est ipsum. Viverra nisl posuere ante aliquam lobortis non.",
      "longDescriptionUrl": "freecast.club/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-962/subdomain-962",
      "roleId": "role-962",
      "subDomain": "subdomain-962",
      "logo": "http://placehold.it/64x64",
      "name": "Storex",
      "longDescription": "At auctor consequat mi nulla. Nisl dignissim elementum massa. Vehicula cursus arcu faucibus maecenas a etiam accumsan, ultrices porttitor auctor.",
      "longDescriptionUrl": "storex.biz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-963/subdomain-963",
      "roleId": "role-963",
      "subDomain": "subdomain-963",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Orci morbi sem leo et ornare posuere imperdiet, nam ultricies sollicitudin vel vehicula condimentum tempus mauris mollis pharetra sollicitudin at.",
      "longDescriptionUrl": "eluxa.net/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-964/subdomain-964",
      "roleId": "role-964",
      "subDomain": "subdomain-964",
      "logo": "http://placehold.it/64x64",
      "name": "Unilogic",
      "longDescription": "Aliquet aliquam vehicula augue est eti ultricies pellentesque quisque ornare diam a. Amet etiam purus magna au sit ac faucibus.",
      "longDescriptionUrl": "unilogic.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-965/subdomain-965",
      "roleId": "role-965",
      "subDomain": "subdomain-965",
      "logo": "http://placehold.it/64x64",
      "name": "Anaplex",
      "longDescription": "Ac tempor tempus suscipit dolor faucibus. Sem pulvinar massa purus. Morbi iaculis nibh sapien. Pretium ac rhoncus lectus magna vestibulum.",
      "longDescriptionUrl": "anaplex.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-966/subdomain-966",
      "roleId": "role-966",
      "subDomain": "subdomain-966",
      "logo": "http://placehold.it/64x64",
      "name": "Kancom",
      "longDescription": "Imperdiet eros vel pellentesque maecenas est a leo, condimentum pellentesque tristique sollicitudin curabitur. Dictum fringilla nulla sapien. Arcu et fringilla.",
      "longDescriptionUrl": "kancom.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-967/subdomain-967",
      "roleId": "role-967",
      "subDomain": "subdomain-967",
      "logo": "http://placehold.it/64x64",
      "name": "Hypervision",
      "longDescription": "Risus posuere sagittis erat ante. Eget posuere posuere laoreet i elit blandit vehicula quis. Commodo aliquet e dictum nisl ultricies.",
      "longDescriptionUrl": "hypervision.club/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-968/subdomain-968",
      "roleId": "role-968",
      "subDomain": "subdomain-968",
      "logo": "http://placehold.it/64x64",
      "name": "Optiplex",
      "longDescription": "Sollicitudin imperdiet nam faucibus i gravida faucibus. Porttitor tempor tempor au risus lacus nunc, quis felis at purus eu tortor.",
      "longDescriptionUrl": "optiplex.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-969/subdomain-969",
      "roleId": "role-969",
      "subDomain": "subdomain-969",
      "logo": "http://placehold.it/64x64",
      "name": "Dynaroc",
      "longDescription": "Scelerisque etiam i quis et hendrerit ultrices sodales est, rhoncus lacinia euismod natoque, nulla nulla consequat consectetur laoreet velit ante.",
      "longDescriptionUrl": "dynaroc.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-970/subdomain-970",
      "roleId": "role-970",
      "subDomain": "subdomain-970",
      "logo": "http://placehold.it/64x64",
      "name": "CoreMax",
      "longDescription": "Iaculis diam tristique metus blandit ligula tristique maecenas. Aenean augue lorem maximus est maximus. Elementum tristique elementum auctor accumsan sodales.",
      "longDescriptionUrl": "coremax.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-971/subdomain-971",
      "roleId": "role-971",
      "subDomain": "subdomain-971",
      "logo": "http://placehold.it/64x64",
      "name": "Cirpria",
      "longDescription": "Hendrerit at dignissim laoreet nam adipiscing, nisi magna ultrices non vulputate. Imperdiet et dui quisque vehicula pulvinar. Curabitur vel lorem.",
      "longDescriptionUrl": "cirpria.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-972/subdomain-972",
      "roleId": "role-972",
      "subDomain": "subdomain-972",
      "logo": "http://placehold.it/64x64",
      "name": "Keycast",
      "longDescription": "Lacinia nulla elit lacus ac leo fringilla. Commodo consectetur sagittis a. In lacinia consectetur accumsan ante. Dictum sed lacinia cursus.",
      "longDescriptionUrl": "keycast.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-973/subdomain-973",
      "roleId": "role-973",
      "subDomain": "subdomain-973",
      "logo": "http://placehold.it/64x64",
      "name": "Templatek",
      "longDescription": "Lacinia mollis ultrices vehicula quisque, natoque eros i lacus, lacinia a eu amet. Nulla arcu sem vestibulum eget eros risus.",
      "longDescriptionUrl": "templatek.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-974/subdomain-974",
      "roleId": "role-974",
      "subDomain": "subdomain-974",
      "logo": "http://placehold.it/64x64",
      "name": "Hivemind",
      "longDescription": "Tempor cras vestibulum sem tortor. Vehicula nisl neque scelerisque, et tempus dolor velit nisi arcu, lorem enim quis lobortis nisl.",
      "longDescriptionUrl": "hivemind.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-975/subdomain-975",
      "roleId": "role-975",
      "subDomain": "subdomain-975",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Cursus elementum dui pharetra auctor rhoncus sit tempor quis sit bibendum. Lobortis tortor pretium faucibus, sodales justo nibh id quis.",
      "longDescriptionUrl": "openserv.mobi/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-976/subdomain-976",
      "roleId": "role-976",
      "subDomain": "subdomain-976",
      "logo": "http://placehold.it/64x64",
      "name": "OpenServ",
      "longDescription": "Ornare maecenas magna enim lectus. Ultrices i id metus magna morbi posuere dignissim maecenas vulputate nunc. Laoreet placerat elit viverra.",
      "longDescriptionUrl": "openserv.co/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-977/subdomain-977",
      "roleId": "role-977",
      "subDomain": "subdomain-977",
      "logo": "http://placehold.it/64x64",
      "name": "Sunopia",
      "longDescription": "Non eros facilisis laoreet vulputate cursus elementum aenean eros, sagittis i maecenas tincidunt elit consectetur ultricies. Laoreet ligula pellentesque i.",
      "longDescriptionUrl": "sunopia.gov/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-978/subdomain-978",
      "roleId": "role-978",
      "subDomain": "subdomain-978",
      "logo": "http://placehold.it/64x64",
      "name": "Coolinga",
      "longDescription": "Mi vitae pulvinar tortor natoque porttitor. Felis ante pulvinar at non. Orci ligula faucibus ultricies ligula. Lacinia ipsum maecenas accumsan.",
      "longDescriptionUrl": "coolinga.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-979/subdomain-979",
      "roleId": "role-979",
      "subDomain": "subdomain-979",
      "logo": "http://placehold.it/64x64",
      "name": "PeerSys",
      "longDescription": "Eti dolor eros sagittis eu. I faucibus tincidunt sollicitudin enim velit aliquet commodo velit, tortor ultrices gravida quisque tempus massa.",
      "longDescriptionUrl": "peersys.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-980/subdomain-980",
      "roleId": "role-980",
      "subDomain": "subdomain-980",
      "logo": "http://placehold.it/64x64",
      "name": "Freecast",
      "longDescription": "Lectus natoque turpis bibendum maximus ipsum. Non curabitur maecenas lacinia adipiscing dictum ut sem. Morbi facilisis accumsan etiam turpis sodales.",
      "longDescriptionUrl": "freecast.com/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-981/subdomain-981",
      "roleId": "role-981",
      "subDomain": "subdomain-981",
      "logo": "http://placehold.it/64x64",
      "name": "Protheon",
      "longDescription": "Porttitor natoque suscipit nunc natoque bibendum. Adipiscing tempor aliquam in au. Sit eti cursus ex eti ante adipiscing tempor magna.",
      "longDescriptionUrl": "protheon.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-982/subdomain-982",
      "roleId": "role-982",
      "subDomain": "subdomain-982",
      "logo": "http://placehold.it/64x64",
      "name": "FortyFour",
      "longDescription": "Au eu id felis ligula hendrerit. Neque sem adipiscing justo mollis hendrerit. Aenean lorem in hendrerit faucibus ultricies diam mi.",
      "longDescriptionUrl": "fortyfour.me/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-983/subdomain-983",
      "roleId": "role-983",
      "subDomain": "subdomain-983",
      "logo": "http://placehold.it/64x64",
      "name": "Playtech",
      "longDescription": "Cras sapien sem quisque etiam lorem in, morbi vehicula sodales adipiscing aenean at ultricies iaculis eros mi ex eros felis.",
      "longDescriptionUrl": "playtech.name/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-984/subdomain-984",
      "roleId": "role-984",
      "subDomain": "subdomain-984",
      "logo": "http://placehold.it/64x64",
      "name": "Thermatek",
      "longDescription": "Ante rhoncus scelerisque maximus facilisis at, nisl lacinia enim velit aliquam, id velit aliquam vulputate ultricies sollicitudin viverra eros curabitur.",
      "longDescriptionUrl": "thermatek.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-985/subdomain-985",
      "roleId": "role-985",
      "subDomain": "subdomain-985",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "Risus erat cursus donec dolor imperdiet. Vehicula id adipiscing viverra maximus eros purus blandit arcu ultricies condimentum justo consectetur mauris.",
      "longDescriptionUrl": "westgate.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-986/subdomain-986",
      "roleId": "role-986",
      "subDomain": "subdomain-986",
      "logo": "http://placehold.it/64x64",
      "name": "Keycast",
      "longDescription": "Aliquet eu mi turpis sodales, ornare lobortis pellentesque proin ultrices. Cursus vulputate elementum eti dolor ante eu ultricies pellentesque mi.",
      "longDescriptionUrl": "keycast.edu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-987/subdomain-987",
      "roleId": "role-987",
      "subDomain": "subdomain-987",
      "logo": "http://placehold.it/64x64",
      "name": "Helixicon",
      "longDescription": "I tortor ultricies hendrerit sagittis bibendum. Lobortis euismod pulvinar consectetur, sed amet accumsan bibendum eti facilisis maecenas tincidunt diam tristique.",
      "longDescriptionUrl": "helixicon.gov/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-988/subdomain-988",
      "roleId": "role-988",
      "subDomain": "subdomain-988",
      "logo": "http://placehold.it/64x64",
      "name": "WestGate",
      "longDescription": "Curabitur cursus neque e eros adipiscing commodo ac vehicula sagittis at. Hendrerit dignissim eu consectetur et ultrices. Erat aliquet ante.",
      "longDescriptionUrl": "westgate.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-989/subdomain-989",
      "roleId": "role-989",
      "subDomain": "subdomain-989",
      "logo": "http://placehold.it/64x64",
      "name": "VTGrafix",
      "longDescription": "Etiam imperdiet enim commodo consectetur aenean, imperdiet nibh aliquet sollicitudin lobortis. Sem elementum neque hendrerit at. Est faucibus ut dolor.",
      "longDescriptionUrl": "vtgrafix.edu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-990/subdomain-990",
      "roleId": "role-990",
      "subDomain": "subdomain-990",
      "logo": "http://placehold.it/64x64",
      "name": "Cryptonica",
      "longDescription": "Curabitur orci dictum auctor tempor imperdiet cras, i lobortis nisi commodo iaculis. Amet condimentum finibus imperdiet, sit eu metus dictum.",
      "longDescriptionUrl": "cryptonica.xyz/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-991/subdomain-991",
      "roleId": "role-991",
      "subDomain": "subdomain-991",
      "logo": "http://placehold.it/64x64",
      "name": "Coolinga",
      "longDescription": "Mi dignissim au tortor aliquet ac facilisis dolor. Ornare iaculis erat elit condimentum nibh et. Sagittis viverra maximus maecenas ex.",
      "longDescriptionUrl": "coolinga.net/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-992/subdomain-992",
      "roleId": "role-992",
      "subDomain": "subdomain-992",
      "logo": "http://placehold.it/64x64",
      "name": "Tecomix",
      "longDescription": "Arcu ac nisi auctor viverra maecenas felis. Commodo maecenas metus a lorem leo placerat porttitor blandit. Vestibulum e vehicula eu.",
      "longDescriptionUrl": "tecomix.eu/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-993/subdomain-993",
      "roleId": "role-993",
      "subDomain": "subdomain-993",
      "logo": "http://placehold.it/64x64",
      "name": "Cirpria",
      "longDescription": "Mauris magna vitae quis eti nisi. Vitae fringilla auctor leo rhoncus in porttitor euismod nulla, eget ligula mattis lacus pulvinar.",
      "longDescriptionUrl": "cirpria.eu/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-994/subdomain-994",
      "roleId": "role-994",
      "subDomain": "subdomain-994",
      "logo": "http://placehold.it/64x64",
      "name": "LexiconLabs",
      "longDescription": "Quis vestibulum fringilla tristique magna a metus auctor tristique, sagittis gravida metus cras accumsan elit dignissim lacinia donec sagittis faucibus.",
      "longDescriptionUrl": "lexiconlabs.org/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-995/subdomain-995",
      "roleId": "role-995",
      "subDomain": "subdomain-995",
      "logo": "http://placehold.it/64x64",
      "name": "SmartSystems",
      "longDescription": "Ultricies blandit id id donec, risus a a a vulputate. Ex sagittis imperdiet etiam id. Mi at mollis laoreet elementum.",
      "longDescriptionUrl": "smartsystems.info/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-996/subdomain-996",
      "roleId": "role-996",
      "subDomain": "subdomain-996",
      "logo": "http://placehold.it/64x64",
      "name": "Superwire",
      "longDescription": "Pulvinar pulvinar est sollicitudin aenean nibh consectetur elit a at non dictum, metus nibh magna vehicula, sodales est ultricies orci.",
      "longDescriptionUrl": "superwire.mobi/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-997/subdomain-997",
      "roleId": "role-997",
      "subDomain": "subdomain-997",
      "logo": "http://placehold.it/64x64",
      "name": "Dynaroc",
      "longDescription": "Felis sit nunc ultrices a vehicula. Metus sem auctor felis massa faucibus a sodales mattis non consectetur nam etiam eu.",
      "longDescriptionUrl": "dynaroc.xyz/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-998/subdomain-998",
      "roleId": "role-998",
      "subDomain": "subdomain-998",
      "logo": "http://placehold.it/64x64",
      "name": "Opticast",
      "longDescription": "Eget maecenas massa finibus leo ornare eget. Adipiscing mauris dui quisque id. Aliquet risus consequat tempus ultrices. Natoque placerat consectetur.",
      "longDescriptionUrl": "opticast.name/longDescription",
      "impersonateWithinRole": false,
      "secretPaths": [
        "string"
      ]
    },
    {
      "id": "roles/role-999/subdomain-999",
      "roleId": "role-999",
      "subDomain": "subdomain-999",
      "logo": "http://placehold.it/64x64",
      "name": "Eluxa",
      "longDescription": "Curabitur sapien vitae suscipit ante leo. Massa gravida lorem a vehicula, quisque scelerisque sapien pharetra et quis in ut leo.",
      "longDescriptionUrl": "eluxa.co/longDescription",
      "impersonateWithinRole": true,
      "secretPaths": [
        "string"
      ]
    }
  ]


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