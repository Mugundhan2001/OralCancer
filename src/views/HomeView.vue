<script setup lang="ts">
import Header from "@/components/Header.vue";
import { AutoForm } from "@/components/ui/auto-form";
import { Button } from "@/components/ui/button";
import * as z from "zod";

const schema = z.object({
  image: z
    .string({
      required_error: "Image is required.",
    })
    .describe("Select Image"),
  age: z.coerce
    .number({
      required_error: "Age is required.",
      invalid_type_error: "Age must be a number.",
    })
    .min(1, {
      message: "Age must be at least 1.",
    }),
  gender: z.enum(["Male", "Female"], {
    required_error: "Gender is required.",
  }),
  diagnosis: z.enum(["Healthy", "Oral Cancer"], {
    required_error: "Diagnosis is required.",
  }),
  cancerStage: z
    .enum(["Stage 1", "Stage 2", "Stage 3", "Stage 4"], {
      required_error: "Stage of cancer is required.",
    })
    .describe("Cancer Stage"),
  tumorSize: z
    .enum(["Small", "Medium", "Large"], {
      required_error: "Tumor size is required.",
    })
    .describe("Tumor Size"),
  tumorLocation: z
    .string({
      required_error: "Tumor location is required.",
    })
    .describe("Tumor Location"),
  treatmentType: z
    .enum(["Surgery", "Radiation", "Chemotherapy", "None"], {
      required_error: "Treatment type is required.",
    })
    .describe("Treatment Type"),
  treatmentResponse: z
    .enum(["No Response", "Complete Response", "Partial Response"], {
      required_error: "Treatment response is required.",
    })
    .describe("Treatment Response"),
  smokingStatus: z
    .boolean({
      required_error: "Smoking status is required.",
    })
    .describe("Smoking Status"),
  alcoholConsumption: z
    .boolean({
      required_error: "Alcohol consumption is required.",
    })
    .describe("Alcohol Consumption"),
  hpvStatus: z
    .boolean({
      required_error: "HPV status is required.",
    })
    .describe("HPV Status"),
  geneSymbol: z
    .string({
      required_error: "Gene symbol is required.",
    })
    .describe("Gene Symbol"),
  chromosome: z.string({
    required_error: "Chromosome is required.",
  }),
  geneStart: z.coerce
    .number({
      required_error: "Gene start is required.",
      invalid_type_error: "Gene start must be a number.",
    })
    .min(1, {
      message: "Gene start must be at least 1.",
    })
    .describe("Gene Start"),
  geneEnd: z.coerce
    .number({
      required_error: "Gene end is required.",
      invalid_type_error: "Gene end must be a number.",
    })
    .min(1, {
      message: "Gene end must be at least 1.",
    })
    .describe("Gene End"),
  geneStrand: z
    .enum(["+", "-"], {
      required_error: "Gene strand is required.",
    })
    .describe("Gene Strand"),
  mutation: z.enum(["Missense", "Nonsense", "Frameshift"], {
    required_error: "Mutation is required.",
  }),
  variantClassification: z
    .enum(["Silent", "Insframe", "Frameshift"], {
      required_error: "Variant classification is required.",
    })
    .describe("Variant Classification"),
  variantType: z
    .enum(["SNP", "Insertion", "Deletion"], {
      required_error: "Variant type is required.",
    })
    .describe("Variant Type"),
  proteinPosition: z.coerce
    .number({
      required_error: "Protein position is required.",
      invalid_type_error: "Protein position must be a number.",
    })
    .min(1, {
      message: "Protein position must be at least 1.",
    })
    .describe("Protein Position"),
  codonChange: z
    .string({
      required_error: "Codon change is required.",
    })
    .describe("Codon Change"),
  aminoAcidChange: z
    .string({
      required_error: "Amino acid change is required.",
    })
    .describe("Amino Acid Change"),
  cancerType: z
    .string({
      required_error: "Cancer type is required.",
    })
    .describe("Cancer Type"),
});

function onSubmit(values: Record<string, string | number | boolean>) {
  console.log(values);
  // toast({
  //   title: "You submitted the following values:",
  //   description: h(
  //     "pre",
  //     { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
  //     h("code", { class: "text-white" }, JSON.stringify(values, null, 2)),
  //   ),
  // });
}
</script>

<template>
  <Header></Header>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <AutoForm
        class="w-2/3 space-y-6"
        :schema="schema"
        :field-config="{
          image: {
            component: 'file',
          },
          gender: {
            component: 'radio',
          },
          smokingStatus: {
            component: 'switch',
          },
          alcoholConsumption: {
            component: 'switch',
          },
          hpvStatus: {
            component: 'switch',
          },
          geneStrand: {
            component: 'radio',
          },
        }"
        @submit="onSubmit"
      >
        <Button type="submit"> Submit </Button>
      </AutoForm>
    </div>
  </div>
</template>
