import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;


export default class AssetLocation extends Model{
  @belongsTo('asset') asset;
  @attr('string') assetCategory;
  @attr('date') whenSeen;
}
