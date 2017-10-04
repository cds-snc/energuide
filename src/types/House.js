import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} from 'graphql'

var House = new GraphQLObjectType({
  name: 'House',
  description: '',
  fields: () => ({
    dates: {
      type: new GraphQLList(GraphQLString),
      description: 'The assesment dates for this house.',
      resolve: (source, args, { db }, info) => {
        return db.getDates(source.house_id)
      },
    },
    id: {
      type: GraphQLID,
      description: 'The unique identifier of the house.',
      resolve: source => source._key,
    },

    accentestar: {
      type: GraphQLString,
      description: 'Central A/C is ESTAR (ESTAR or N/A)',
    },

    acmodelnumber: {
      type: GraphQLString,
      description: '',
    },

    acwindestar: {
      type: GraphQLString,
      description: 'Num of Window unit A/C that are ESTAR (0,1,2,3,4...)',
    },

    acwindnum: {
      type: GraphQLString,
      description: 'Number of window unit A/C',
    },

    air50p: {
      type: GraphQLString,
      description: 'Air leakage at 50 pascals',
    },

    aircondtype: {
      type: GraphQLString,
      description: "Type of A/C System or 'Not installed'",
    },

    aircop: {
      type: GraphQLString,
      description: 'Efficiency of A/C system',
    },

    atticceilingdef: {
      type: GraphQLString,
      description: 'Type of ceiling (Attic or Cathedral/flat)',
    },

    baseloadsmurb: {
      type: GraphQLString,
      description: 'Total MURB baseload energy (MJ/yr)',
    },

    basementfloorar: {
      type: GraphQLString,
      description: 'Basement floor area in m2',
    },

    batch_number: {
      type: GraphQLString,
      description: '',
    },

    blowerdoortest: {
      type: GraphQLString,
      description: 'Blower door test type (None, CGSP, As operated)',
    },

    builder: {
      type: GraphQLString,
      description: 'Builder Name',
    },

    caflaceilingdef: {
      type: GraphQLString,
      description: 'Description of cathedral or flat roof insulation',
    },

    ceilingtype: {
      type: GraphQLString,
      description: 'Ceiling type',
    },

    ceilins: {
      type: GraphQLString,
      description: '',
    },

    cenventsystype: {
      type: GraphQLString,
      description: 'Ventilation type installed',
    },

    cid: {
      type: GraphQLString,
      description: '',
    },

    cop: {
      type: GraphQLString,
      description: 'Heat pump coefficient of performance',
    },

    crawlspfloorar: {
      type: GraphQLString,
      description: 'Crawlspace floor area in m2',
    },

    creationdate: {
      type: GraphQLString,
      description: 'Date file was accepted by the mailbot',
    },

    credit_egh: {
      type: GraphQLString,
      description: 'EGH credit in kWh',
    },

    credit_garage: {
      type: GraphQLString,
      description: 'Attached garage credit in kWh',
    },

    credit_lighting: {
      type: GraphQLString,
      description: 'Total lighting credit in kWh',
    },

    credit_oth1oth2: {
      type: GraphQLString,
      description: 'Other credit in kWh',
    },

    credit_pv: {
      type: GraphQLString,
      description: 'Photovoltaic credit in kWh',
    },

    credit_thermst: {
      type: GraphQLString,
      description: 'Electronic thermostat credit in kWh',
    },

    credit_vent: {
      type: GraphQLString,
      description: '',
    },

    credit_wind: {
      type: GraphQLString,
      description: 'Windpower credit in kWh',
    },

    csia: {
      type: GraphQLString,
      description:
        'Canadian Solar Industry Association rating for solar DHW system (MJ/y)',
    },

    dataset: {
      type: GraphQLString,
      description:
        'Flag that indicates if the data in the TSV is for the standard operating condition (SOC) house, or the net zero (NZE) house',
    },

    decadebuilt: {
      type: GraphQLString,
      description: 'Decade the house was built',
    },

    depressexhaust: {
      type: GraphQLString,
      description: '',
    },

    dhwhpcop: {
      type: GraphQLString,
      description:
        'Domestic hot water heat pump system coefficient of performance',
    },

    dhwhptype: {
      type: GraphQLString,
      description: 'Domestic hot water heat pump system type',
    },

    dryerfuel: {
      type: GraphQLString,
      description: 'Dryer Energy Source',
    },

    dryermanufacturer: {
      type: GraphQLString,
      description: 'Dryer Manufacturer',
    },

    dryermodel: {
      type: GraphQLString,
      description: 'Dryer Model Number',
    },

    dwhrl1m: {
      type: GraphQLString,
      description: 'Drain-water heat recovery smaller than 1 m',
    },

    dwhrm1m: {
      type: GraphQLString,
      description: 'Drain-water heat recovery greater than 1 m',
    },

    eghcritnatach: {
      type: GraphQLString,
      description: 'Critical natural air change per hour',
    },

    eghcrittotach: {
      type: GraphQLString,
      description: 'Critical total air change per hour',
    },

    eghdeshtloss: {
      type: GraphQLString,
      description: 'Design heat loss in Watts',
    },

    eghfconelec: {
      type: GraphQLString,
      description: 'Consumption of electricity',
    },

    eghfconngas: {
      type: GraphQLString,
      description: 'Consumption of Gas',
    },

    eghfconoil: {
      type: GraphQLString,
      description: 'Consumption of oil',
    },

    eghfconprop: {
      type: GraphQLString,
      description: 'Consumption of propane',
    },

    eghfcontotal: {
      type: GraphQLString,
      description: 'Total energy consumption',
    },

    eghfconwood: {
      type: GraphQLString,
      description: 'Consumption of wood in tonnes',
    },

    eghfcostelec: {
      type: GraphQLString,
      description: 'Cost for consumption of electricity',
    },

    eghfcostngas: {
      type: GraphQLString,
      description: 'Cost for consumption of gas',
    },

    eghfcostoil: {
      type: GraphQLString,
      description: 'Cost for consumption of oil',
    },

    eghfcostprop: {
      type: GraphQLString,
      description: 'Cost for consumption of propane',
    },

    eghfcosttotal: {
      type: GraphQLString,
      description: 'Total cost of energy consumption',
    },

    eghfcostwood: {
      type: GraphQLString,
      description: 'Cost for consumption of wood in $',
    },

    eghfurnaceaec: {
      type: GraphQLString,
      description: 'Annual energy consumption for the furnace',
    },

    eghfurseaeff: {
      type: GraphQLString,
      description: 'Furnace Seasonal Efficiency',
    },

    eghfurseaseff: {
      // TODO: Duplicate?
      type: GraphQLString,
      description: 'Furnace Seasonal Efficiency',
    },

    eghheatfconse: {
      type: GraphQLString,
      description: 'Heating energy consumption - Base Electricity',
    },

    eghheatfconsg: {
      type: GraphQLString,
      description: 'Heating energy consumption - Base Natural Gas',
    },

    eghheatfconso: {
      type: GraphQLString,
      description: '',
    },

    eghheatfconsp: {
      type: GraphQLString,
      description: '',
    },

    eghheatfconsw: {
      type: GraphQLString,
      description: '',
    },

    eghhlair: {
      type: GraphQLString,
      description: '',
    },

    eghhlceiling: {
      type: GraphQLString,
      description: '',
    },

    eghhlexposedflr: {
      type: GraphQLString,
      description: '',
    },

    eghhlfound: {
      type: GraphQLString,
      description: '',
    },

    eghhlwalls: {
      type: GraphQLString,
      description: '',
    },

    eghhlwindoor: {
      type: GraphQLString,
      description: '',
    },

    eghinexposedflr: {
      type: GraphQLString,
      description: '',
    },

    eghrating: {
      type: GraphQLString,
      description: '',
    },

    eghspaceenergy: {
      type: GraphQLString,
      description: '',
    },

    eid: {
      type: GraphQLString,
      description: '',
    },

    eincentive: {
      type: GraphQLString,
      description: '',
    },

    entryby: {
      type: GraphQLString,
      description: '',
    },

    entrydate: {
      type: GraphQLString,
      description: '',
    },

    epacsa: {
      type: GraphQLString,
      description: '',
    },

    epacsasupphtg1: {
      type: GraphQLString,
      description: '',
    },

    epacsasupphtg2: {
      type: GraphQLString,
      description: '',
    },

    erselecghg: {
      type: GraphQLString,
      description: '',
    },

    ersenergyintensity: {
      type: GraphQLString,
      description: '',
    },

    ersghg: {
      type: GraphQLString,
      description: '',
    },

    ershldoor: {
      type: GraphQLString,
      description: '',
    },

    ershlwindow: {
      type: GraphQLString,
      description: '',
    },

    erslightapplianceenergy: {
      type: GraphQLString,
      description: '',
    },

    ersngasghg: {
      type: GraphQLString,
      description: '',
    },

    ersoilghg: {
      type: GraphQLString,
      description: '',
    },

    ersotherelecenergy: {
      type: GraphQLString,
      description: '',
    },

    erspropghg: {
      type: GraphQLString,
      description: '',
    },

    ersrating: {
      type: GraphQLString,
      description: '',
    },

    ersrefhouserating: {
      type: GraphQLString,
      description: '',
    },

    ersrenewableelec: {
      type: GraphQLString,
      description: '',
    },

    ersrenewableelecghg: {
      type: GraphQLString,
      description: '',
    },

    ersrenewableprod: {
      type: GraphQLString,
      description: '',
    },

    ersrenewablesolar: {
      type: GraphQLString,
      description: '',
    },

    ersrenewablesolarghg: {
      type: GraphQLString,
      description: '',
    },

    ersspacecoolenergy: {
      type: GraphQLString,
      description: '',
    },

    ersventilationenergy: {
      type: GraphQLString,
      description: '',
    },

    erswaterheatingenergy: {
      type: GraphQLString,
      description: '',
    },

    erswoodghg: {
      type: GraphQLString,
      description: '',
    },

    estar: {
      type: GraphQLString,
      description: '',
    },

    estarlights: {
      type: GraphQLString,
      description: '',
    },

    estarmurbhrvhvi: {
      type: GraphQLString,
      description: '',
    },

    evaluator: {
      type: GraphQLString,
      description: '',
    },

    eval_id: {
      type: GraphQLString,
      description: '',
    },

    eval_type: {
      type: GraphQLString,
      description: '',
    },

    exposedfloor: {
      type: GraphQLString,
      description: '',
    },

    fireplacedamp1: {
      type: GraphQLString,
      description: '',
    },

    fireplacedamp2: {
      type: GraphQLString,
      description: '',
    },

    floorarea: {
      type: GraphQLString,
      description: '',
    },

    fnddef: {
      type: GraphQLString,
      description: '',
    },

    fndhdr: {
      type: GraphQLString,
      description: '',
    },

    fndtype: {
      type: GraphQLString,
      description: '',
    },

    fndwallins: {
      type: GraphQLString,
      description: '',
    },

    footprint: {
      type: GraphQLString,
      description: '',
    },

    furdcmotor: {
      type: GraphQLString,
      description: '',
    },

    furnacefuel: {
      type: GraphQLString,
      description: '',
    },

    furnacemodel: {
      type: GraphQLString,
      description: '',
    },

    furnacetype: {
      type: GraphQLString,
      description: '',
    },

    fursseff: {
      type: GraphQLString,
      description: '',
    },

    heatafue: {
      type: GraphQLString,
      description: '',
    },

    heatedfloorarea: {
      type: GraphQLString,
      description: '',
    },

    heatsyssizeop: {
      type: GraphQLString,
      description: '',
    },

    hocersrating: {
      type: GraphQLString,
      description: '',
    },

    hocugrersrating: {
      type: GraphQLString,
      description: '',
    },

    houseregion: {
      type: GraphQLString,
      description: '',
    },

    house_id: {
      type: GraphQLString,
      description: '',
    },

    hpcap: {
      type: GraphQLString,
      description: '',
    },

    hpestar: {
      type: GraphQLString,
      description: '',
    },

    hpsource: {
      type: GraphQLString,
      description: '',
    },

    hrveff0c: {
      type: GraphQLString,
      description: '',
    },

    hsevol: {
      type: GraphQLString,
      description: '',
    },

    hviequip: {
      type: GraphQLString,
      description: '',
    },

    hviestar: {
      type: GraphQLString,
      description: '',
    },

    idnumber: {
      type: GraphQLString,
      description: '',
    },

    indfurnacefuel: {
      type: GraphQLString,
      description: '',
    },

    indfurnacetype: {
      type: GraphQLString,
      description: '',
    },

    indfursseff: {
      type: GraphQLString,
      description: '',
    },

    info1: {
      type: GraphQLString,
      description: '',
    },

    info10: {
      type: GraphQLString,
      description: '',
    },

    info2: {
      type: GraphQLString,
      description: '',
    },

    info3: {
      type: GraphQLString,
      description: '',
    },

    info4: {
      type: GraphQLString,
      description: '',
    },

    info5: {
      type: GraphQLString,
      description: '',
    },

    info6: {
      type: GraphQLString,
      description: '',
    },

    info7: {
      type: GraphQLString,
      description: '',
    },

    info8: {
      type: GraphQLString,
      description: '',
    },

    info9: {
      type: GraphQLString,
      description: '',
    },

    justify: {
      type: GraphQLString,
      description: '',
    },

    largestcsia: {
      type: GraphQLString,
      description: '',
    },

    leakar: {
      type: GraphQLString,
      description: '',
    },

    lftoilets: {
      type: GraphQLString,
      description: '',
    },

    location_id: {
      type: GraphQLString,
      description: '',
    },

    mainwallins: {
      type: GraphQLString,
      description: '',
    },

    mixuse: {
      type: GraphQLString,
      description: '',
    },

    modificationdate: {
      type: GraphQLString,
      description: '',
    },

    murbashpestar: {
      type: GraphQLString,
      description: '',
    },

    murbdhwcond: {
      type: GraphQLString,
      description: '',
    },

    murbdhwcondinses: {
      type: GraphQLString,
      description: '',
    },

    murbdhwins: {
      type: GraphQLString,
      description: '',
    },

    murbdhwinses: {
      type: GraphQLString,
      description: '',
    },

    murbdhwstes: {
      type: GraphQLString,
      description: '',
    },

    murbdwhrl1m: {
      type: GraphQLString,
      description: '',
    },

    murbdwhrm1m: {
      type: GraphQLString,
      description: '',
    },

    murbhrvhvi: {
      type: GraphQLString,
      description: '',
    },

    murbhsestar: {
      type: GraphQLString,
      description: '',
    },

    murbhtsystemdis: {
      type: GraphQLString,
      description: '',
    },

    murbwoodepa: {
      type: GraphQLString,
      description: '',
    },

    murbwoodheat: {
      type: GraphQLString,
      description: '',
    },

    nelecthermos: {
      type: GraphQLString,
      description: '',
    },

    numdoorestar: {
      type: GraphQLString,
      description: '',
    },

    numdoors: {
      type: GraphQLString,
      description: '',
    },

    numdoorzoned: {
      type: GraphQLString,
      description: '',
    },

    numsolsys: {
      type: GraphQLString,
      description: '',
    },

    numwindows: {
      type: GraphQLString,
      description: '',
    },

    numwinestar: {
      type: GraphQLString,
      description: '',
    },

    numwinzoned: {
      type: GraphQLString,
      description: '',
    },

    otc: {
      type: GraphQLString,
      description: '',
    },

    ownership: {
      type: GraphQLString,
      description: '',
    },

    partner: {
      type: GraphQLString,
      description: '',
    },

    payable: {
      type: GraphQLString,
      description: '',
    },

    pdhwef: {
      type: GraphQLString,
      description: '',
    },

    pdhwestar: {
      type: GraphQLString,
      description: '',
    },

    pdhwfuel: {
      type: GraphQLString,
      description: '',
    },

    pdhwtype: {
      type: GraphQLString,
      description: '',
    },

    planshape: {
      type: GraphQLString,
      description: '',
    },

    ponywallexists: {
      type: GraphQLString,
      description: '',
    },

    previousfileid: {
      type: GraphQLString,
      description: '',
    },

    programname: {
      type: GraphQLString,
      description: '',
    },

    province: {
      type: GraphQLString,
      description: '',
    },

    qtot: {
      type: GraphQLString,
      description: '',
    },

    qwarn: {
      type: GraphQLString,
      description: '',
    },

    registration: {
      type: GraphQLString,
      description: '',
    },

    rulesettype: {
      type: GraphQLString,
      description: '',
    },

    rulesetver: {
      type: GraphQLString,
      description: '',
    },

    sdhwef: {
      type: GraphQLString,
      description: '',
    },

    sdhwestar: {
      type: GraphQLString,
      description: '',
    },

    sdhwfuel: {
      type: GraphQLString,
      description: '',
    },

    sdhwhpcop: {
      type: GraphQLString,
      description: '',
    },

    sdhwhptype: {
      type: GraphQLString,
      description: '',
    },

    sdhwtype: {
      type: GraphQLString,
      description: '',
    },

    sharedata: {
      type: GraphQLString,
      description: '',
    },

    slabfloorar: {
      type: GraphQLString,
      description: '',
    },

    sndheatafue: {
      type: GraphQLString,
      description: '',
    },

    sndheatdcmotor: {
      type: GraphQLString,
      description: '',
    },

    sndheatestar: {
      type: GraphQLString,
      description: '',
    },

    sndheatmanufacturer: {
      type: GraphQLString,
      description: '',
    },

    sndheatmodel: {
      type: GraphQLString,
      description: '',
    },

    sndheatsys: {
      type: GraphQLString,
      description: '',
    },

    sndheatsysfuel: {
      type: GraphQLString,
      description: '',
    },

    sndheatsystype: {
      type: GraphQLString,
      description: '',
    },

    status: {
      type: GraphQLString,
      description: '',
    },

    storeys: {
      type: GraphQLString,
      description: '',
    },

    supphtgfuel1: {
      type: GraphQLString,
      description: '',
    },

    supphtgfuel2: {
      type: GraphQLString,
      description: '',
    },

    supphtgtype1: {
      type: GraphQLString,
      description: '',
    },

    supphtgtype2: {
      type: GraphQLString,
      description: '',
    },

    taxnumber: {
      type: GraphQLString,
      description: '',
    },

    tbsmnt: {
      type: GraphQLString,
      description: '',
    },

    tmain: {
      type: GraphQLString,
      description: '',
    },

    totaloccupants: {
      type: GraphQLString,
      description: '',
    },

    totalventexh: {
      type: GraphQLString,
      description: '',
    },

    totalventsupply: {
      type: GraphQLString,
      description: '',
    },

    totcsia: {
      type: GraphQLString,
      description: '',
    },

    type1capacity: {
      type: GraphQLString,
      description: '',
    },

    typeofhouse: {
      type: GraphQLString,
      description: '',
    },

    uattceilingdef: {
      type: GraphQLString,
      description: '',
    },

    ucaflceilingdef: {
      type: GraphQLString,
      description: '',
    },

    uceventsystype: {
      type: GraphQLString,
      description: '',
    },

    udwhrl1m: {
      type: GraphQLString,
      description: '',
    },

    udwhrm1m: {
      type: GraphQLString,
      description: '',
    },

    uepacsasupphtg1: {
      type: GraphQLString,
      description: '',
    },

    uepacsasupphtg2: {
      type: GraphQLString,
      description: '',
    },

    ugexposedfloor: {
      type: GraphQLString,
      description: '',
    },

    ugraccentestar: {
      type: GraphQLString,
      description: '',
    },

    ugracwindestar: {
      type: GraphQLString,
      description: '',
    },

    ugracwindnum: {
      type: GraphQLString,
      description: '',
    },

    ugrair50pa: {
      type: GraphQLString,
      description: '',
    },

    ugraircondtype: {
      type: GraphQLString,
      description: '',
    },

    ugraircop: {
      type: GraphQLString,
      description: '',
    },

    ugrceilingtype: {
      type: GraphQLString,
      description: '',
    },

    ugrceilins: {
      type: GraphQLString,
      description: '',
    },

    ugrcredit_pv: {
      type: GraphQLString,
      description: '',
    },

    ugrcredit_wind: {
      type: GraphQLString,
      description: '',
    },

    ugrcritnatach: {
      type: GraphQLString,
      description: '',
    },

    ugrcrittotach: {
      type: GraphQLString,
      description: '',
    },

    ugrdeshtloss: {
      type: GraphQLString,
      description: '',
    },

    ugrdhwcsia: {
      type: GraphQLString,
      description: '',
    },

    ugrdhwhpcop: {
      type: GraphQLString,
      description: '',
    },

    ugrdhwhptype: {
      type: GraphQLString,
      description: '',
    },

    ugrdhwsysef: {
      type: GraphQLString,
      description: '',
    },

    ugrdhwsysfuel: {
      type: GraphQLString,
      description: '',
    },

    ugrdhwsystype: {
      type: GraphQLString,
      description: '',
    },

    ugrdryerfuel: {
      type: GraphQLString,
      description: '',
    },

    ugrdryermanufacturer: {
      type: GraphQLString,
      description: '',
    },

    ugrdryermodel: {
      type: GraphQLString,
      description: '',
    },

    ugrepacsa: {
      type: GraphQLString,
      description: '',
    },

    ugrersenergyintensity: {
      type: GraphQLString,
      description: '',
    },

    ugrersghg: {
      type: GraphQLString,
      description: '',
    },

    ugrershldoor: {
      type: GraphQLString,
      description: '',
    },

    ugrershlwindow: {
      type: GraphQLString,
      description: '',
    },

    ugrerslightapplianceenergy: {
      type: GraphQLString,
      description: '',
    },

    ugrersotherelecenergy: {
      type: GraphQLString,
      description: '',
    },

    ugrersrating: {
      type: GraphQLString,
      description: '',
    },

    ugrersspacecoolenergy: {
      type: GraphQLString,
      description: '',
    },

    ugrersventilationenergy: {
      type: GraphQLString,
      description: '',
    },

    ugrerswaterheatingenergy: {
      type: GraphQLString,
      description: '',
    },

    ugrestarlights: {
      type: GraphQLString,
      description: '',
    },

    ugrestarmurbhrvhvi: {
      type: GraphQLString,
      description: '',
    },

    ugrfconelec: {
      type: GraphQLString,
      description: '',
    },

    ugrfconngas: {
      type: GraphQLString,
      description: '',
    },

    ugrfconoil: {
      type: GraphQLString,
      description: '',
    },

    ugrfconprop: {
      type: GraphQLString,
      description: '',
    },

    ugrfcontotal: {
      type: GraphQLString,
      description: '',
    },

    ugrfconwood: {
      type: GraphQLString,
      description: '',
    },

    ugrfcostelec: {
      type: GraphQLString,
      description: '',
    },

    ugrfcostngas: {
      type: GraphQLString,
      description: '',
    },

    ugrfcostoil: {
      type: GraphQLString,
      description: '',
    },

    ugrfcostprop: {
      type: GraphQLString,
      description: '',
    },

    ugrfcosttotal: {
      type: GraphQLString,
      description: '',
    },

    ugrfcostwood: {
      type: GraphQLString,
      description: '',
    },

    ugrfnddef: {
      type: GraphQLString,
      description: '',
    },

    ugrfndhdr: {
      type: GraphQLString,
      description: '',
    },

    ugrfndins: {
      type: GraphQLString,
      description: '',
    },

    ugrfndtype: {
      type: GraphQLString,
      description: '',
    },

    ugrfurdcmotor: {
      type: GraphQLString,
      description: '',
    },

    ugrfurnaceaec: {
      type: GraphQLString,
      description: '',
    },

    ugrfurnaceeff: {
      type: GraphQLString,
      description: '',
    },

    ugrfurnacefuel: {
      type: GraphQLString,
      description: '',
    },

    ugrfurnacetyp: {
      type: GraphQLString,
      description: '',
    },

    ugrfurseaeff: {
      type: GraphQLString,
      description: '',
    },

    ugrfurseaseff: {
      type: GraphQLString,
      description: '',
    },

    ugrheatafue: {
      type: GraphQLString,
      description: '',
    },

    ugrheatfconse: {
      type: GraphQLString,
      description: '',
    },

    ugrheatfconsg: {
      type: GraphQLString,
      description: '',
    },

    ugrheatfconso: {
      type: GraphQLString,
      description: '',
    },

    ugrheatfconsp: {
      type: GraphQLString,
      description: '',
    },

    ugrheatfconsw: {
      type: GraphQLString,
      description: '',
    },

    ugrhlair: {
      type: GraphQLString,
      description: '',
    },

    ugrhlceiling: {
      type: GraphQLString,
      description: '',
    },

    ugrhlexposedflr: {
      type: GraphQLString,
      description: '',
    },

    ugrhlfound: {
      type: GraphQLString,
      description: '',
    },

    ugrhlwalls: {
      type: GraphQLString,
      description: '',
    },

    ugrhlwindoor: {
      type: GraphQLString,
      description: '',
    },

    ugrhpcop: {
      type: GraphQLString,
      description: '',
    },

    ugrhpestar: {
      type: GraphQLString,
      description: '',
    },

    ugrhptype: {
      type: GraphQLString,
      description: '',
    },

    ugrhviequip: {
      type: GraphQLString,
      description: '',
    },

    ugrhviestar: {
      type: GraphQLString,
      description: '',
    },

    ugrindfurnacefu: {
      type: GraphQLString,
      description: '',
    },

    ugrindfurnacetp: {
      type: GraphQLString,
      description: '',
    },

    ugrindfursseff: {
      type: GraphQLString,
      description: '',
    },

    ugrinexposedflr: {
      type: GraphQLString,
      description: '',
    },

    ugrmurbdhwstes: {
      type: GraphQLString,
      description: '',
    },

    ugrmurbhrvhvi: {
      type: GraphQLString,
      description: '',
    },

    ugrnelecthermos: {
      type: GraphQLString,
      description: '',
    },

    ugrnumdoorestar: {
      type: GraphQLString,
      description: '',
    },

    ugrnumdoorzoned: {
      type: GraphQLString,
      description: '',
    },

    ugrnumwinestar: {
      type: GraphQLString,
      description: '',
    },

    ugrnumwinzoned: {
      type: GraphQLString,
      description: '',
    },

    ugrpdhwestar: {
      type: GraphQLString,
      description: '',
    },

    ugrrating: {
      type: GraphQLString,
      description: '',
    },

    ugrsdhwestar: {
      type: GraphQLString,
      description: '',
    },

    ugrsdhwhpcop: {
      type: GraphQLString,
      description: '',
    },

    ugrsdhwhptype: {
      type: GraphQLString,
      description: '',
    },

    ugrsdhwsysef: {
      type: GraphQLString,
      description: '',
    },

    ugrsdhwsysfuel: {
      type: GraphQLString,
      description: '',
    },

    ugrsdhwsystype: {
      type: GraphQLString,
      description: '',
    },

    ugrsndheatafue: {
      type: GraphQLString,
      description: '',
    },

    ugrsndheatdcmotor: {
      type: GraphQLString,
      description: '',
    },

    ugrsndheatestar: {
      type: GraphQLString,
      description: '',
    },

    ugrsndheatmanufacturer: {
      type: GraphQLString,
      description: '',
    },

    ugrsndheatmodel: {
      type: GraphQLString,
      description: '',
    },

    ugrsndheatsys: {
      type: GraphQLString,
      description: '',
    },

    ugrsndheatsysfuel: {
      type: GraphQLString,
      description: '',
    },

    ugrsndheatsystype: {
      type: GraphQLString,
      description: '',
    },

    ugrspaceenergy: {
      type: GraphQLString,
      description: '',
    },

    ugrsupphtgfuel1: {
      type: GraphQLString,
      description: '',
    },

    ugrsupphtgfuel2: {
      type: GraphQLString,
      description: '',
    },

    ugrsupphtgtype1: {
      type: GraphQLString,
      description: '',
    },

    ugrsupphtgtype2: {
      type: GraphQLString,
      description: '',
    },

    ugrtotalventexh: {
      type: GraphQLString,
      description: '',
    },

    ugrtotalventsup: {
      type: GraphQLString,
      description: '',
    },

    ugrwalldef: {
      type: GraphQLString,
      description: '',
    },

    ugrwallins: {
      type: GraphQLString,
      description: '',
    },

    ugrwasherestar: {
      type: GraphQLString,
      description: '',
    },

    ugrwashermanufacturer: {
      type: GraphQLString,
      description: '',
    },

    ugrwashermodel: {
      type: GraphQLString,
      description: '',
    },

    ugrwindowcode: {
      type: GraphQLString,
      description: '',
    },

    ulftoilets: {
      type: GraphQLString,
      description: '',
    },

    umurbdhwcondines: {
      type: GraphQLString,
      description: '',
    },

    umurbdhwinses: {
      type: GraphQLString,
      description: '',
    },

    unitsmurbs: {
      type: GraphQLString,
      description: '',
    },

    uwindowcodenum: {
      type: GraphQLString,
      description: '',
    },

    vermiculite: {
      type: GraphQLString,
      description: '',
    },

    visitedunits: {
      type: GraphQLString,
      description: '',
    },

    walkoutfloorar: {
      type: GraphQLString,
      description: '',
    },

    walldef: {
      type: GraphQLString,
      description: '',
    },

    washerestar: {
      type: GraphQLString,
      description: '',
    },

    washermanufacturer: {
      type: GraphQLString,
      description: '',
    },

    washermodel: {
      type: GraphQLString,
      description: '',
    },

    weatherloc: {
      type: GraphQLString,
      description: '',
    },

    windowcode: {
      type: GraphQLString,
      description: '',
    },

    windowcodenum: {
      type: GraphQLString,
      description: '',
    },

    wthdata: {
      type: GraphQLString,
      description: '',
    },

    yearbuilt: {
      type: GraphQLString,
      description: '',
    },
  }),
})

export default House
