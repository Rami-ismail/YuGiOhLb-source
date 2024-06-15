import { LinkMarker } from './LinkMarker';
import { Attribute } from './Attributes';
import {Banlist} from './Banlists'
import {Format} from './Formats';
import {SortFilter} from './Stats+Identity'

interface CardFilters {
  name?: string ;
  fname?: string ;
  id?: string[];
  konami_id?: string ;
  type?: string[];
  atk?: string ;
  def?: string ;
  level?: string ;
  race?: string[];
  attribute?: Attribute[];
  link?: string ;
  linkmarker?: LinkMarker[];
  scale?: string ;
  cardset?: string ;
  archetype?: string ;
  banlist?: Banlist ;
  sort?: SortFilter ;
  format?: Format ;
  misc?: boolean ;
  staple?: boolean ;
  has_effect?: boolean ;
  startdate?: string ;
  enddate?: string ;
  dateregion?: 'tcg' | 'ocg' ;
}
export function buildQuery(filter?: CardFilters ): string {
    const params: string[] = [];
    if (filter?.name) params.push(`name=${encodeURIComponent(filter.name)}`);
    if (filter?.fname) params.push(`fname=${encodeURIComponent(filter.fname)}`);
    if (filter?.id) params.push(`id=${filter.id.join(',')}`);
    if (filter?.konami_id) params.push(`konami_id=${filter.konami_id}`);
    if (filter?.type) params.push(`type=${filter.type.join(',')}`);
    if (filter?.atk) params.push(`atk=${filter.atk}`);
    if (filter?.def) params.push(`def=${filter.def}`);
    if (filter?.level) params.push(`level=${filter.level}`);
    if (filter?.race) params.push(`race=${filter.race.join(',')}`);
    if (filter?.attribute) params.push(`attribute=${filter.attribute.join(',')}`);
    if (filter?.link) params.push(`link=${filter.link}`);
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

    return params.length > 0 ? `?${params.join('&')}` : '';
}


export default CardFilters;
