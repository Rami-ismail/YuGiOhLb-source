
interface apiQueryFilters {
  name?: string;
  fname?: string;
  id?: string[]; //this is an array because we can pass multiple id's that are comma seperated
  konami_id?: string ;
  type?: string[];  //this is an array because we can pass multiple id's that are comma seperated, should be it's own type
  atk?: string ;
  def?: string ;
  level?: number ;
  race?: string[]; //this is an array because we can pass multiple id's that are comma seperated, should be it's own type
  attribute?: string[]; //this is an array because we can pass multiple id's that are comma seperated, should be it's own type
  link?: string; //link rating of the cards 
  linkmarker?: string[]; //this is an array because we can pass multiple id's that are comma seperated, should be it's own type
  scale?: string ; //pendScaleValue
  cardset?: string ;
  archetype?: string ;
  banlist?: string ;
  sort?: string ; //should be it's own type
  format?: string ;
  misc?: boolean;
  staple?: boolean;
  has_effect?: boolean;
  startdate?: string;
  enddate?: string;
  cardsFilterLevelRankCompare?: string //this should be it;s own type
  cardsFilterAtkCompare? :string //this should be it's own type
  cardsFilterDefCompare? :string //this should be it;s own type
  cardsFilterLinkValCompare?: string //this should be it;s own type
  dateregion?: 'tcg' | 'ocg' ;
}
export function buildQuery(filter?: apiQueryFilters, paginate?: number): string {
    const params: string[] = [];
    if (filter?.name) params.push(`name=${encodeURIComponent(filter.name)}`);
    if (filter?.fname) params.push(`fname=${encodeURIComponent(filter.fname)}`);
    if (filter?.id) params.push(`id=${filter.id.join(',')}`);
    if (filter?.konami_id) params.push(`konami_id=${filter.konami_id}`);
    if (filter?.type) params.push(`type=${filter.type.join(',')}`);
    if (filter?.atk) params.push(`atk=${filter.cardsFilterAtkCompare ?? "" +filter.atk}`);
    if (filter?.def) params.push(`def=${filter.cardsFilterDefCompare ?? ""+ filter.def}`);
    if (filter?.level) params.push(`level=${filter.cardsFilterLevelRankCompare ?? "" + filter.level}`);
    if (filter?.race) params.push(`race=${filter.race.join(',')}`);
    if (filter?.attribute) params.push(`attribute=${filter.attribute.join(',')}`);
    if (filter?.link) params.push(`link=${filter.cardsFilterLinkValCompare ?? "" + filter.link}`);
    if (filter?.linkmarker) params.push(`linkmarker=${filter.linkmarker.join(',')}`);
    if (filter?.scale) params.push(`scale=${filter.scale}`);
    if (filter?.cardset) params.push(`cardset=${encodeURIComponent(filter.cardset)}`);
    if (filter?.archetype) params.push(`archetype=${encodeURIComponent(filter.archetype)}`);
    if (filter?.banlist) params.push(`banlist=${filter.banlist}`);
    if (filter?.sort) params.push(`sort=${filter.sort}`);
    if (filter?.format) params.push(`format=${filter.format}`);
    if (filter?.misc !== undefined) params.push(`misc=${filter.misc ? 'yes' : 'no'}`);
    if (filter?.staple !== undefined) params.push(`staple=${filter.staple ? 'yes' : 'no'}`);
    if (filter?.has_effect !== undefined) params.push(`has_effect=${filter.has_effect ? 'true' : 'false'}`);
    if (filter?.startdate) params.push(`startdate=${filter.startdate}`);
    if (filter?.enddate) params.push(`enddate=${filter.enddate}`);
    if (filter?.dateregion) params.push(`dateregion=${filter.dateregion}`);
    if(paginate) params.push(`&num=${paginate}&offset=0`);
    return params.length > 0 ? `?${params.join('&')}` : '';
}


export default apiQueryFilters;
