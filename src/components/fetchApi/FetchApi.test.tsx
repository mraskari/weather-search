import { lastValueFrom } from "rxjs";
import { ApiService } from "../../services";

it('should do the job', async () => {
    await expect(lastValueFrom(ApiService.get(`/geo/1.0/direct?q=Sydneyyyyyy&limit=5`)))
      .resolves.toEqual("No Data Available!");
});

