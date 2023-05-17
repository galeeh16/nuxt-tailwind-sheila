<template>
  <div class="mt-[60px] lg:mt-[97px]"></div>
  <section :class="container" class="pt-8 lg:pt-14">
    <Heading3 title="Layanan Kami" />

    <MotifGradient />

    <div class="pt-10">
      <div class="grid lg:grid-cols-2 gap-6 lg:gap-10">
        <div class="border rounded-xl p-4 md:p-8 bg-white">
          <p class="font-bold text-xl">Investing in Dubai</p>
          <p class="mt-4 lg:mt-6">We provide a range of services for anyone interested in investing in Dubai's real
            estate market and securing a
            "Golden Visa" or long term residency permit. There are excellent investment opportunities available for all
            budget ranges.</p>

          <p class="mt-4 leading-7">We are here to support you whether you are :</p>
          <ul class="list-disc pl-4 leading-7">
            <li>Simply needing some guidance on the best investment opportunities in Dubai based on your budget.</li>
            <li>Trying to understand the current market trend , the ROI (Return of investment) and the business
              opportunity.
            </li>
            <li>Needing full end-to-end support including deep consultations, property viewings and evaluations, execution
              of
              the purchase process, the “golden visa” residency visa, and even property management afterwards.</li>
          </ul>
        </div>

        <div class="border rounded-xl p-4 md:p-8 bg-white">
          <p class="font-bold text-xl">Relocating to Dubai</p>
          <p class="mt-4 lg:mt-6 leading-7">Wondering how to relocate to Dubai? Whether you are coming from overseas,
            relocating for
            work or for a fresh start we will be there every step of the way</p>

          <ul class="list-disc pl-4 leading-7 mt-4">
            <li>Moving and living in Dubai, what to expect</li>
            <li>Settling in and Orientation</li>
            <li>Accommodation and cost of moving to Dubai</li>
            <li>Education and school system in Dubai</li>
            <li>Various types of residence permits</li>
            <li>Full house set up</li>
          </ul>

        </div>

        <div class="border rounded-xl p-4 md:p-8 bg-white">
          <p class="font-bold text-xl">Doing business in Dubai</p>
          <p class="mt-4 lg:mt-6">We have an extensive network to provide consultations and help you set up a business and
            bank account in Dubai.</p>
        </div>

        <div class="border rounded-xl p-4 md:p-6 bg-white">
          <p class="font-bold text-xl">Visiting Dubai</p>
          <p class="mt-4 lg:mt-6">We support individuals, families and corporate needs to get the best out of your stay in
            Dubai. We are here to support you whether you are just simply looking for advice or whether you are needing
            full support in arranging and managing all aspects of your stay. We are here to help.</p>

          <p class="mt-4 lg:mt-6">We know how stressful it can be to plan, we asses the unique requirement of each client
            . Our team offer practical advise and solutions for absolutely every aspect of your move and minimize .
            We pride ourselves on our ability to help individual , families and corporate to make a decision , minimize
            stress and reducing unnecessary expenses.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { container } from '~/constants/style';

useHead({
  title: 'Rellocate Dubai - Services'
})
</script>