import { mapApplicationStateFromJson } from '../../mappers/state-mapper';
import mockState from './mock-state';

let results = [];
describe('state-mapper', () => {
  beforeEach(() => {
    results = mapApplicationStateFromJson(mockState);
  });

  it('maps the correct number of segments', () => {
    expect(results.length).toEqual(27);
  });

  it('correctly maps durationTime', () => {
    expect(results[0].durationTime).toEqual(6698);
  });

  it('correctly maps durationPercentage', () => {
    expect(results[0].durationPercentage).toEqual(1);
  });

  it('correctly maps name', () => {
    expect(results[0].name).toEqual('Nested/Controller/Rack/AlertingUi::Application/call');
  });

  it('correctly maps timestamp', () => {
    expect(results[0].timestamp).toEqual(0);
  });

  it('correctly maps key', () => {
    expect(results[0].key).toEqual('root:141:142');
  });
});
