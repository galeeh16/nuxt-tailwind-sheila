<template>
  <div class="mt-[60px] lg:mt-[97px]"></div>
  <section :class="container" class="pt-8 lg:pt-14">
    <Heading3 :title="$t('our_services')" />

    <MotifGradient />

    <div class="mt-10"></div>

    <div class="rounded-2xl">
      <template v-for="service in services" :key="service.id">
        <Disclosure v-slot="{ open }">

          <DisclosureButton
            class="flex mt-4 w-full items-center justify-between rounded-lg bg-slate-700 px-4 py-3 md:px-6 md:py-4 text-leftfont-medium text-white-300 hover:bg-slate-700/80 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
            <span class="font-latin text-xl md:text-2xl lg:text-3xl">{{ service.heading }}</span>
            <Icon name="bi:chevron-down" :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 md:h-7 md:w-7 transition duration-300" />
          </DisclosureButton>

          <transition enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform fade-out opacity-0" enter-to-class="transform fade-in opacity-300"
            leave-active-class="transition duration-200 ease-out" leave-from-class="transform fade-in opacity-300"
            leave-to-class="transform fade-out opacity-0">
            <DisclosurePanel class="px-4 pt-4 pb-2 lg:text-lg">
              <ul class="pl-3 ml-0" style="list-style-type: '- ';">
                <li class="mb-2" v-for="list in service.lists" :key="list.id">{{ list.value }}</li>
              </ul>
            </DisclosurePanel>
          </transition>

        </Disclosure>
      </template>
    </div>
  </section>
</template>

<script setup>
import { container } from '~/constants/style';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/vue';

useHead({
  title: 'Rellocate Dubai - Services'
})

const services = [
  {
    id: 1,
    heading: 'Home Search from $1150',
    lists: [
      {
        id: 1,
        value: 'Our consultants will work one-on-one with you to source and secure your ideal property, taking into consideration your budget, lifestyle preferences, commute to work, access to transport and facilities, school catchment zones, and any other specific requirements you may have. '
      },
      {
        id: 2,
        value: 'We maintain strong working relationships with local real estate agents to ensure we are kept up-to-date with the latest listings and are given early access to properties which are yet to be marketed. We can mediate with agents on your behalf to give you the best possible chance of securing the property you want.',
      },
      {
        id: 3,
        value: "You will be given access to our online portal, RSA Online, where together with your consultant, you can create a shortlist of properties you like. If you've already arrived in your destination city, you can view these on your own. Alternatively, if you're wanting to secure a property prior to your arrival, your consultant will attend inspections of these properties on your behalf, providing you with photographs, videos, measurements, and all other information you won't be able to see from the advertisement (such as construction noise and traffic)."
      },
      {
        id: 4,
        value: 'From here your consultant will assist you with your application, helping you put together the relevant documentation, 100 points of ID and evidence of income. Your consultant will also advise you on how to put your best foot forward and increase your chances of being approved - something that is crucial in the current property market.'
      },
      {
        id: 5,
        value: 'Once approved, your consultant will check your lease agreement, assist you with the Entry Condition Report and the property handover. We will also arrange to have your utilities connected for the day you move in.'
      },
      {
        id: 6,
        value: "We also offer a VIP service for additional cost, where we will fill out all the paperwork, collate the documentation and submit the application on your behalf - all you need to do is say 'yes' or 'no' to each property."
      }
    ]
  },
  {
    id: 2,
    heading: 'Local area orientation - from $900',
    lists: [
      {
        id: 1,
        value: "If you’re uncertain about where you want to live, our local area orientation service is ideal for you. You'll spend an enjoyable day with your consultant visiting various suburbs, inspecting a few properties, discussing schooling options, and checking out transport options. You'll get to discover the best beaches and leisure facilities and of course, where to get that coffee hit. This allows you to quickly narrow down suburbs of best fit, enabling a more effective home search and a smoother transition."
      }
    ]
  },
  {
    id: 3,
    heading: 'School search - $750 per school',
    lists: [
      {
        id: 1,
        value: "When you relocate to Australia, your children will be lucky enough to have access to our world-renowned education system. With so much choice, choosing the right school for your child can be confusing. Your relocation consultant can guide you through the school-selection process by offering expert advice based on your individual child's academic, extra-curricular and language requirements. Certain schools (such as private schools) may have limited availability or may have a preference for students from a particular catchment area. Your relocation consultant can discuss the best options to suit your child's individual circumstances with you, shortlist schools, accompany you to school inspections and interviews, and assist you with the enrolment process, helping you give your child the best possible start in life."
      }
    ]
  },
  {
    id: 4,
    heading: 'Getting settled - $300',
    lists: [
      {
        id: 1,
        value: "There's nothing worse than moving to a completely new city and getting lost and frustrated. Our consultants will curate a personalised guide to your new suburb, tailored specifically to you and your new home, allowing you to settle yourself in quickly and begin to feel like a local. This guide will cover everything from how to get to work from your new home via public transport, where the local schools are and which school bus your children need to take, where to shop for groceries, where the local gyms and recreational facilities are, and where to find a doctors or hospital. Additionally, we'll give you a guide to the best outdoor walking tracks or beaches near you, so you can enjoy the best of what our beautiful country has to offer."
      }
    ]
  },
  {
    id: 5,
    heading: 'Removals - from $350',
    lists: [
      {
        id: 1,
        value: "We can arrange removals and provide you with multiple independent quotes to ensure you receive a competitive price. We'll also make sure the removalist service providers have your current address, new address, and all details they need to ensure your move is a success. Please note this price does not include the cost of the removal service."
      }
    ]
  },
  {
    id: 6,
    heading: 'Temporary accommodation - from $550',
    lists: [
      {
        id: 1,
        value: "If you require temporary accommodation while you secure a property, or just for a night or two until your furniture arrives, we can arrange this for you at a competitive rate with our accommodation partners. Rates provided to you are direct and non-commissionable which means you get the lowest possible rate.  We will also manage all areas of the booking including all changes and any issues that may arise.  Please note this does not include the cost of the accommodation."
      }
    ]
  },
  {
    id: 7,
    heading: 'Ad hoc services',
    lists: [
      {
        id: 1,
        value: "We understand there may be a need for some ad hoc services that don't fall within the scope of the above services.  Where we can, we will assist and charge by the hour."
      }
    ]
  }
];
</script>
